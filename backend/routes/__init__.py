# backend/routes/__init__.py

def register_blueprints(app):
    """Register all blueprints"""
    from routes.auth import auth_bp
    app.register_blueprint(auth_bp, url_prefix='/auth')
    print("✓ Blueprints registered")