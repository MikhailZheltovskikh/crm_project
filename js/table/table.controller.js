import * as model from './../model.js'
import * as viev from './table.view.js'

function init(){
   const requests = model.getRequests();
   viev.renderRequests(requests);
   addEventListener();
}

function addEventListener(){
   viev.elements.select.addEventListener('change', filterProducts)
}

function filterProducts(){
   const filter = model.changeFilter('products', this.value)
   const filteredRequest = model.filterRequests(filter)
   viev.renderRequests(filteredRequest);
}



init()