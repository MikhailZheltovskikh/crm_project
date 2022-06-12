const elements = {
   tabel: document.querySelector("#tbody"),
   select: document.querySelector("#productSelect")
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
         <td>${request.date}</td>
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



export{elements, renderRequests}