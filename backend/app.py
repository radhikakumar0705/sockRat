# backend/app.py
from flask import Flask, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from config import Config          # ← Import Config class directly
from models import db
from routes import register_blueprints
import os
from dotenv import load_dotenv
import os
load_dotenv()
def create_app():
    """Application factory"""
    app = Flask(__name__)
    
    # Load config directly from Config class
    app.config.from_object(Config)  # ← Use Config directly, no dict needed
    
    # Initialize extensions
    CORS(app, resources={r"/*": {"origins": "*"}})
    db.init_app(app)
    jwt = JWTManager(app)
    
    # Register blueprints
    register_blueprints(app)
    
    # Create tables
    with app.app_context():
        db.create_all()
        print("✓ Database tables created")
    
    # Health check
    @app.route('/api/health', methods=['GET'])
    def health():
        return jsonify({'status': 'healthy', 'message': 'API running'}), 200
    
    # JWT error handlers
    @jwt.expired_token_loader
    def expired_token(jwt_header, jwt_payload):
        return jsonify({'error': 'Token expired', 'message': 'Please login again'}), 401
    
    @jwt.invalid_token_loader
    def invalid_token(error):
        return jsonify({'error': 'Invalid token', 'message': 'Please login again'}), 401
    
    @jwt.unauthorized_loader
    def missing_token(error):
        return jsonify({'error': 'No token provided', 'message': 'Authorization required'}), 401
    
    # Error handlers
    @app.errorhandler(404)
    def not_found(error):
        return jsonify({'error': 'Not found'}), 404
    
    @app.errorhandler(500)
    def internal_error(error):
        db.session.rollback()
        return jsonify({'error': 'Internal server error'}), 500
    
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, host='0.0.0.0', port=5000)