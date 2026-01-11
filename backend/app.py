from flask import Flask, jsonify , request 
from flask_cors import CORS
import sqlite3
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import datetime

app = Flask(__name__)
CORS(app)


@app.route("/home", methods=['GET'])

def return_home(): 
    return jsonify({
        'message': "Hello World"
    })

if __name__ == "__main__":
    app.run(debug=True)
