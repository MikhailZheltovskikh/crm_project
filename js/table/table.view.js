const elements = {
   tabel: document.querySelector("#tbody"),
   select: document.querySelector("#productSelect"),
   topStatusBar: document.querySelector("#topStatusBar"),
   leftStatusLinks: document.querySelectorAll('[data-role="left-status"]'),
   leftPanelNav: document.querySelector('.left-panel__navigation'),
   badgeNew: document.querySelector("#badge-new")

}

function renderRequests(requests){
   
   elements.tabel.innerHTML = '';

   const bages = {
      new: "badge-danger",
      inwork: "badge-warning",
      complete: "badge-success"
   }

   for(let request of requests){
      const template = 
      `<tr>
         <th scope="row">${request.id}</th>
         <td>${request.dateToDisplay}</td>
         <td>${request.productName}</td>
         <td>${request.name}</td>
         <td>${request.email}</td>
         <td>${request.phone}</td>
         <td>
            <div class="badge badge-pill ${bages[request.status]}">${request.statustName}</div>
         </td>
         <td>
            <a href="edit.html?id=${request.id}" >Редактировать</a>
         </td>
      </tr>`;
      elements.tabel.insertAdjacentHTML('beforeend', template);
   }
   
  
}

function updateStatus(value){
   elements.topStatusBar.querySelectorAll('a').forEach((link) => link.classList.remove("active"))
   elements.topStatusBar.querySelector(`a[data-value="${value}"]`).classList.add("active")

   elements.leftStatusLinks.forEach((link) => link.classList.remove("active"))
   elements.leftPanelNav.querySelector(`a[data-value="${value}"]`).classList.add("active")

}

function renderBageNew(number){
   elements.badgeNew.innerText = number
   if(number === 0){
      elements.badgeNew.classList.add("none")
   }else{
      elements.badgeNew.classList.remove("none")
   }
}

function updateFilter(filter){
   elements.select.value = filter.products

   elements.topStatusBar.querySelectorAll('a').forEach((link) => link.classList.remove("active"))
   elements.topStatusBar.querySelector(`a[data-value="${filter.status}"]`).classList.add("active")

   elements.leftStatusLinks.forEach((link) => link.classList.remove("active"))
   elements.leftPanelNav.querySelector(`a[data-value="${filter.status}"]`).classList.add("active")
}

export {elements, renderRequests, updateStatus, renderBageNew, updateFilter}