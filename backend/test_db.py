import pymysql
from dotenv import load_dotenv
import os

load_dotenv()

# Print what values are being used
print("=" * 40)
print("Trying to connect with:")
print(f"Host:     {os.getenv('DB_HOST')}")
print(f"User:     {os.getenv('DB_USER')}")
print(f"Password: {os.getenv('DB_PASSWORD')}")
print(f"Database: {os.getenv('DB_NAME')}")
print("=" * 40)

try:
    conn = pymysql.connect(
        host=os.getenv('DB_HOST', 'localhost'),
        user=os.getenv('DB_USER', 'root'),
        password=os.getenv('DB_PASSWORD', ''),
        database=os.getenv('DB_NAME', 'mistrally2'),
        port=3306
    )
    print("✅ Connection successful!")
    conn.close()

except Exception as e:
    print(f"❌ Error: {e}")