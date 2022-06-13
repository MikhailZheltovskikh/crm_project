import getRandomData from './form.test-data.js'
import * as view from './form.view.js'
import * as model from './../model.js'

function init(){
   renderTestData()
   setupEventListener()
}

function setupEventListener() {
   view.elements.form.addEventListener('submit', formSubmitHendler)
}

function renderTestData(){
   view.insertTestData(getRandomData())
}

function formSubmitHendler(e){
   e.preventDefault()
   const formData = view.getFormInput()
   model.addRequest(formData)
   view.clearForm()
   renderTestData()
}


init()