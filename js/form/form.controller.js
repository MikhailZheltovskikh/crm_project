import getRandomData from './form.test-data.js'
import * as view from './form.view.js'

function init(){
   renderTestData()
   setupEventListener()
}

function setupEventListener() {
   view.elements.form.addEventListener('submit', formSubmitHendler)
}

function renderTestData(){
   const rendomData = getRandomData()
   view.insertTestData(rendomData)
}

function formSubmitHendler(e){
   e.preventDefault()
   const formData = view.getFormInput()
   console.log("formSubmitHendler -> formData", formData)
}


init()