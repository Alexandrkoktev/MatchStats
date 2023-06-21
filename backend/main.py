from flask import Flask
from flask_cors import CORS

import random
from random_username.generate import generate_username
from enum import StrEnum

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


class Winner(StrEnum):
    FIRST_TEAM = "FIRST_TEAM"
    SECOND_TEAM = "SECOND_TEAM"


def sort_players(players):
    return sorted(players, key=lambda player: player['score'], reverse=True)


@app.route('/matches/<match_id>')
def get_match_stats(match_id):
    usernames = generate_username(100)
    players = [
        {'id': i + 1,
         'name': usernames[i],
         'isFriend': False,
         'score': random.randint(0, 100),
         'kills': random.randint(0, 10),
         'deaths': random.randint(0, 10),
         'isAlive': not random.randint(0, 1)} for i in range(100)]

    return {'id': match_id,
            'firstTeam': {'players': sort_players(players[:50])},
            'secondTeam': {'players': sort_players(players[50:])},
            'winner': Winner.FIRST_TEAM if not random.randint(0, 1) else Winner.SECOND_TEAM}


if __name__ == '__main__':
    app.run()
