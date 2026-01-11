# backend/config.py
import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'your-secret-key')
    
    # MySQL from environment variables
    SQLALCHEMY_DATABASE_URI = os.getenv(
        'DATABASE_URL', 
        'mysql+pymysql://root:Chinky%12@Radhika/mistrally2'
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False