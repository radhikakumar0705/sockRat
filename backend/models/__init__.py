from flask_sqlalchemy import SQLAlchemy 

db = SQLAlchemY()

def init_db(app):
    db.init_app(app)
    with app.app_context():
        from models.user import User
        db.create_all()
        print("Database intialised")