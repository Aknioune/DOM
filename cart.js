let data = [
    {
     id: 0,
      name: "product1",
      price: 120,
      image:
        "https://www.thebeautysalon.ie/wp-content/uploads/2021/05/imagemain.jpg",
      qte: 0,
      
    },
    {
    id: 1,
      name: "product2",
      price: 132,
      image:
        "https://www.honestbrandreviews.com/wp-content/uploads/2021/06/Image-Skincare-Review-1.jpg",
      qte: 0,
      
    },
    {
        id:2,
      name: "product3",
      price: 23,
      image:
        "http://cdn.shopify.com/s/files/1/0288/9859/0802/files/pf-8ef41e18-e685-40b7-8bdb-1bd151c2764d--imageskincare6733357623503794286227309010151941059626806n_grande.jpg?v=1614337787",
      qte: 0,
     
    },
  ];



  var cartForm =document.querySelector(".table");
  const add_product=data.map(a =>{

    return `

  
  <tr class="line_"${a.id} >

  <td>
  <div class="d-flex flex-row align-items-center">
      <div>
      <img src="${a.image}"
      class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
      </div>
      <div class="ms-3">
      <h5>${a.name}</h5>
      <p class="small mb-0">256GB, Navy Blue</p>
      </div>
  </div>
  </td>
  <td> 
      <div style="width: 80px;"class="m-5 p-1">
      <h5 class="mb-0">${a.price}$</h5>
      </div>
  </td>

  <td>
      <input class="qt" id ="${a.id}" value="${a.qte}" type="number" >
  </td>
  <td id="totalQte-${a.id}"></td>
  <td>
  <svg class="heart"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>
</td>
<td>
<svg  class="Delete" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
</td>

  </tr>
    `                                   
  }).join('');
  cartForm.innerHTML+=add_product
  qte=document.getElementsByName('qte').value;

// boucle du prix totale de produit parapor au quantite
  let inputQTE = document.querySelectorAll(".qt");
  inputQTE.forEach((item) => {
    item.addEventListener("change", (e) => {
      let id = e.currentTarget.id;
      data[id].qte = parseInt(e.currentTarget.value);
      console.log("#totalQte-" +id);
      document.querySelector("#totalQte-" + id).innerHTML =
        parseInt(data[id].qte) * parseInt(data[id].price);
      // // Total+=parseInt(data[id].qte) * parseInt(data[id].price);
      // document.querySelector(".totals").innerHTML = calcTotal(
      //   parseInt(data[id].qte),
      //   parseInt(data[id].price)
      // );
      document.querySelector(".totals").innerHTML = getAmount();
      // document.querySelector(".totals").innerHTML = calcTotal(data[id].price,data[id].qte)
      



    });

//  boucle de totale d'achat
    function getAmount() {
      // return data.red
      let sum = 0;
      data.forEach(
        (product) => (sum += parseInt(product.qte) * parseInt(product.price))
      );
      return sum;
    }
  });


//Supprimer button

var btndel=document.querySelectorAll(".Delete");
btndel.forEach((item)=> {
  item.addEventListener('click',(e)=>{
   e.currentTarget.parentElement.parentElement.remove()
  })
})


//  Like Button 
var btnvar = document.querySelectorAll(".heart");
btnvar.forEach((Element)=>{
  Element.addEventListener("click",function(){  
    Element.classList.toggle("red")
  })
})


// if (btnvar.style.color =="red") {
//     btnvar.style.color = "grey"

// }
// else{

// btnvar.style.color = "red"
// }












//   <tr>
//   <td><img src="${a.image}" alt="" /><span>${a.name}</span></td>
//   <td><span>${a.price}</span></td>
//   <td>
//   <button  type="button" ><img src="plus.svg" alt="" /></button>
//   <input type="number" name="qte" value="${a.qte}">
//   <button  type="button" ><img src="minus.svg" alt="" /></button>
//   </td>
//   </tr>



//   let theTable = document.createElement("table");
//   data.map((product) => {
    // let row = document.createElement("tr");
    // let str = `<td>${product.name}</td>`;
    // str += `<td>${product.price}</td>`;
    // str += `<td><input type="number" min="${product.qte}"/></td>`;
    // str += `<td>${product.price}</td>`;
    // row.innerHTML = str;
    // theTable.appendChild(row)
// });
// document.body.appendChild(theTable);
