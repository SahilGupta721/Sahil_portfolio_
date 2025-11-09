from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()
mongo_uri=os.getenv('Mongo_url')

#establishing client connection
client=MongoClient(mongo_uri,serverSelectionTimeoutMS=5000)

#selecting specific database
db=client['sahil-portfolio']
db_collection=db['form-details']

def db_connect():
    try:
        print(client.server_info())
        print('<===Conneted to MongoDB===>')
    except Exception as error:
        print(f"Error: {error}")

db_connect()