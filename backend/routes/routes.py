from fastapi import APIRouter
import  services.services as ser
from model.model import Form
#creating an object from APIRouter class

router=APIRouter()

#Endpoints
#For default message

@router.get('/')
def default_message():
    return ser.default_msg()

#To fill form

@router.post('/fill-form')
def submit_form(form:Form):
    return ser.fill_form(form)

