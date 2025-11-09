from pydantic import BaseModel, EmailStr  

class Form(BaseModel):
    name:str
    email:EmailStr
    description:str
