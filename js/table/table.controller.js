import * as model from './../model.js'
import * as view from './table.view.js'

function init(){
   const requests = model.getRequests()
   view.renderRequests(requests)
   addEventListener();

   const newRequestsCount = model.countNewRequests()
   view.renderBageNew(newRequestsCount)

   const filter = model.getFilter()
   view.updateFilter(filter)
}

function addEventListener(){
   view.elements.select.addEventListener('change', filterProducts)
   view.elements.topStatusBar.addEventListener('click', filterByStatus)
   view.elements.leftStatusLinks.forEach((link) =>{
      link.addEventListener('click', filterByStatus)
   })
}

function filterProducts(){
   const filter = model.changeFilter('products', this.value)
   const filteredRequests = model.filterRequests(filter)
   view.renderRequests(filteredRequests);
}

function filterByStatus(e){
   const filter = model.changeFilter('status', e.target.dataset.value)
   const filteredRequests = model.filterRequests(filter)
   view.renderRequests(filteredRequests);
   view.updateStatus(e.target.dataset.value)
}


init()