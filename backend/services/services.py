from model.model import Form
from mongo import db_collection

def default_msg():
    return "Welcome sahil's backend api"

def fill_form(form:Form):
    #inserting into database, converting form object into dictionary
    result=db_collection.insert_one(form.dict())
    print('Form Submitted')
    return "Form Submitted"

