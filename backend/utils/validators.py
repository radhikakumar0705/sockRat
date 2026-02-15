# backend/utils/validators.py
import re

def validate_email(email):
    """Validate email format"""
    if not email:
        return False, "Email is required"
    
    email_regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    if not re.match(email_regex, email):
        return False, "Invalid email format"
    
    return True, None

def validate_password(password):
    """Validate password strength"""
    if not password:
        return False, "Password is required"
    
    if len(password) < 8:
        return False, "Password must be at least 8 characters long"
    
    if not re.search(r'[A-Z]', password):
        return False, "Password must contain at least one uppercase letter"
    
    return True, None

def validate_name(name):
    """Validate name"""
    if name and len(name) > 100:
        return False, "Name must be less than 100 characters"
    
    return True, None