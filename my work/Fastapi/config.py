
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://sandeep23:SAN2014deep@user-database.kaehx.mongodb.net/?retryWrites=true&w=majority&appName=user-database"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

db = client.todo_db
collection = db["todo_data"]