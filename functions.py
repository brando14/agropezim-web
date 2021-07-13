import os
from flask import Flask, request, jsonify, render_template
from firebase_admin import credentials, firestore, initialize_app

# Initialize Firestore DB
cred = credentials.Certificate('service.json')
default_app = initialize_app(cred)
db = firestore.client()



#function internet_data
# string --> string
# receive id, des, fases, voltage, hp, capacity, control internet, antenna, red, dis, price  as string and return dict response

def internet_data(id, des, fases, voltage, hp, capacity, internet, antenna, red, dis, price):
    return {
    'ID': id,
    'Description': des,
    'Motor_Type': {

        'Phases': fases,
        'Voltage': voltage,
        'HP': hp,
        'Capacity': capacity

        },
    'Internet_Feautures': {
        'Internet_Type': internet,
        'Antenna_Type': antenna,
        'Red': red,
        'Max_Reach': dis,
        },

        'Price': price
        }




#function board_data
# string --> string
# receive id, control, cable, net, tube, relay, box, contactor, supervisor, breque, buttons, indicator  as string and return a dict response


def board_data(control, cable, net, tube, relay, box, contactor, supervisor, breque, buttons, indicator):
     return {
     'Materials_Included': {
        'Control_Module': control,
        'Electrical_Cable': cable,
        'Box' : box,
        'Contactor': contactor,
        'Relay': relay,
        'Supervisor': supervisor,
        'Breque': breque,
        'Pushbuttons': buttons,
        'Indicator_light': indicator,
        'Ethernet_Cable': net,
        'Support_Tube': tube
        },
        }



# function additem
# string --> json
# receive id as string data1 and data2  as a dict
# join data1 and data2 in only dict and set in document for firestore with id
# return  data

def additem(id, data1, data2):
    data = dict(data2, **data1)
    doc_ref = db.collection(u'Boards').document(id).set(data)
    return doc_ref




# function motor_feautures
# string --> json
# receive fases, voltage, hp, capacity, internet, red, dis as string
# put data in data variable
# and devolving data
def motor_feutures(fases, voltage, hp, capacity):
    data = db.collection('Boards').where('Motor_Type.Voltage', '==', voltage).where('Motor_Type.Phases', '==', fases).where('Motor_Type.HP', '==', hp).where('Motor_Type.Capacity', '==', capacity)
    return data


# function internet_feautures
# string --> json
# receive fases, voltage, hp, capacity, internet, red, dis as string
# put data in data variable
# and devolving data

def internet_feautures(fases, voltage, hp, capacity, internet, red, dis):
    motor = motor_feutures(fases, voltage, hp, capacity)
    data = motor.where('Internet_Feautures.Internet_Type', '==', internet).where('Internet_Feautures.Red', '==', red).where('Internet_Feautures.Max_Reach', '==', dis)
    return data


# function get_board
# string --> dict
# receive fases, voltage, hp, capacity, supervisor, relay, breque, contactor, internet, red, dis as string
# put as reference to firestore
# and devolving a response about the board like a  dict

def get_board(fases, voltage, hp, capacity, supervisor, relay, breque, contactor, internet, red, dis):
    data = internet_feautures(fases, voltage, hp, capacity, internet, red, dis)
    docs = data.where('Materials_Included.Relay', '==', relay).where('Materials_Included.Breque', '==', breque).where('Materials_Included.Supervisor', '==', supervisor).where('Materials_Included.Contactor', '==', contactor).get()
    for doc in docs:
        id = u'{}'.format(doc.to_dict()['ID'])
        des = u'{}'.format(doc.to_dict()['Description'])
        price =  u'{}'.format(doc.to_dict()['Price'])
        control = u'{}'.format(doc.to_dict()['Materials_Included']['Control_Module'])
        red = u'{}'.format(doc.to_dict()['Internet_Feautures']['Red'])
        antenna = u'{}'.format(doc.to_dict()['Internet_Feautures']['Internet_Type'])
        dis = u'{}'.format(doc.to_dict()['Internet_Feautures']['Max_Reach'])
        res = {'ID': id ,
               'Descripción': des,
               'Características del Kit': {
               'Módulo de Control': control,
               'Tipo de Red': red,
               'Tipo de Antena': antenna,
               'Alcance Máximo': dis
               },
               'Precio $USD': price
               }
        return res
