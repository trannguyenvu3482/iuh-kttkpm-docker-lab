import os

# Đọc biến môi trường APP_ENV
app_env = os.getenv('APP_ENV', 'undefined')

print(f"Application is running in {app_env} environment")