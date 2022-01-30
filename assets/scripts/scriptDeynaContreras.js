// :::::::::::::::::::: DECLARO VARIABLES :::::::::::::::::::: 
let color;
let size;
let total_to_pay;
let detail_product;
let shoppingCar = document.getElementById('shopping-car-body');
let product_list = new Array;
$( document ).ready(function() { 
  $.ajax({
    url: 'assets/data/products.json',
    dataType: 'JSON',
    success: (respond) =>{
      product_list = respond
    }
  });
});

let cart = new Array;
if (localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart"));
  showTotalpurchase();
}
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// FORMULARIO CAMISETA
$(document).on('click', '#buy-Camiseta', function(){
  let inputProduct = document.getElementById('kind-of-product-Camiseta').value;
  product = setProductType(parseInt(inputProduct))

  if(validateProduct(inputProduct)){
    let inputSize = document.getElementById('select-Camiseta-size');
    size = inputSize.options[inputSize.selectedIndex].value;

    let inputColor = document.getElementById('select-Camiseta-color');
    color = inputColor.options[inputColor.selectedIndex].value;

    total_to_pay = totalToPay(parseInt(inputProduct));

    let image = document.getElementById('product-Camiseta-image').value;

    detail_product = new detailProduct(inputProduct, product, size, color, total_to_pay, 1, image);

    AddCart(detail_product);

    swal ( "Muy bien!" ,  "Se sumó al carrito de compras" ,  "success" );
  }else{
    swal ( "Oops" ,  "Ops! Pasó un grave error!!" ,  "error" );
  }
});

// FORMULARIO PANTALON
$(document).on('click', '#buy-Pantalon', function(){

  let inputProduct = document.getElementById('kind-of-product-Pantalon').value;
  product = setProductType(parseInt(inputProduct))

  if(validateProduct(inputProduct)){
    let inputSize = document.getElementById('select-Pantalon-size');
    size = inputSize.options[inputSize.selectedIndex].value;

    let inputColor = document.getElementById('select-Pantalon-color');
    color = inputColor.options[inputColor.selectedIndex].value;

    total_to_pay = totalToPay(parseInt(inputProduct));

    let image = document.getElementById('product-Pantalon-image').value;

    detail_product = new detailProduct(inputProduct, product, size, color, total_to_pay, 1, image);
    
    AddCart(detail_product);

    swal ( "Muy bien!" ,  "Se sumó al carrito de compras" ,  "success" );
  }else{
    swal ( "Oops" ,  "Ops! Pasó un grave error!!" ,  "error" );
  }
});

// FORMULARIO SUDADERA
$(document).on('click', '#buy-Sudadera', function(){

  let inputProduct = document.getElementById('kind-of-product-Sudadera').value;
  product = setProductType(parseInt(inputProduct))

  if(validateProduct(inputProduct)){
    let inputSize = document.getElementById('select-Sudadera-size');
    size = inputSize.options[inputSize.selectedIndex].value;

    let inputColor = document.getElementById('select-Sudadera-color');
    color = inputColor.options[inputColor.selectedIndex].value;

    total_to_pay = totalToPay(parseInt(inputProduct));

    let image = document.getElementById('product-Sudadera-image').value;

    detail_product = new detailProduct(inputProduct, product, size, color, total_to_pay, 1, image);
    
    AddCart(detail_product);
    
    swal ( "Muy bien!" ,  "Se sumó al carrito de compras" ,  "success" );
  }else{
    swal ( "Oops" ,  "Ops! Pasó un grave error!!" ,  "error" );
  }
});

// FORMULARIO Zapatos
$(document).on('click', '#buy-Zapatos', function(){

  let inputProduct = document.getElementById('kind-of-product-Zapatos').value;
  product = setProductType(parseInt(inputProduct))

  if(validateProduct(inputProduct)){
    let inputSize = document.getElementById('select-Zapatos-size');
    size = inputSize.options[inputSize.selectedIndex].value;

    let inputColor = document.getElementById('select-Zapatos-color');
    color = inputColor.options[inputColor.selectedIndex].value;

    total_to_pay = totalToPay(parseInt(inputProduct));

    let image = document.getElementById('product-Zapatos-image').value;

    detail_product = new detailProduct(inputProduct, product, size, color, total_to_pay, 1, image);
    
    AddCart(detail_product);
    
    swal ( "Muy bien!" ,  "Se sumó al carrito de compras" ,  "success" );
  }else{
    swal ( "Oops" ,  "Ops! Pasó un grave error!!" ,  "error" );
  }
});

// FORMULARIO Medias
$(document).on('click', '#buy-Medias', function(){

  let inputProduct = document.getElementById('kind-of-product-Medias').value;
  product = setProductType(parseInt(inputProduct))

  if(validateProduct(inputProduct)){
    let inputSize = document.getElementById('select-Medias-size');
    size = inputSize.options[inputSize.selectedIndex].value;

    let inputColor = document.getElementById('select-Medias-color');
    color = inputColor.options[inputColor.selectedIndex].value;

    total_to_pay = totalToPay(parseInt(inputProduct));

    let image = document.getElementById('product-Medias-image').value;

    detail_product = new detailProduct(inputProduct, product, size, color, total_to_pay, 1, image);
    
    AddCart(detail_product);

    swal ( "Muy bien!" ,  "Se sumó al carrito de compras" ,  "success" );
  }else{
    swal ( "Oops" ,  "Ops! Pasó un grave error!!" ,  "error" );
  }
});

// FORMULARIO Sueter
$(document).on('click', '#buy-Sueter', function(){

  let inputProduct = document.getElementById('kind-of-product-Sueter').value;
  product = setProductType(parseInt(inputProduct))

  if(validateProduct(inputProduct)){
    let inputSize = document.getElementById('select-Sueter-size');
    size = inputSize.options[inputSize.selectedIndex].value;

    let inputColor = document.getElementById('select-Sueter-color');
    color = inputColor.options[inputColor.selectedIndex].value;

    total_to_pay = totalToPay(parseInt(inputProduct));

    let image = document.getElementById('product-Sueter-image').value;

    detail_product = new detailProduct(inputProduct, product, size, color, total_to_pay, 1, image);
    
    AddCart(detail_product);

    swal ( "Muy bien!" ,  "Se sumó al carrito de compras" ,  "success" );
  }else{
    swal ( "Oops" ,  "Ops! Pasó un grave error!!" ,  "error" );
  }
});

// :::::::::::::::::::: OBJETOS :::::::::::::::::::: 
function detailProduct(index, type, size, color, price, quantity, image){
  this.index = index
  this.type = type,
  this.size = size,
  this.color = color,
  this.price = price ,
  this.quantity = quantity,
  this.image = image
  this.showProductDetail= function(){
    swal ( "Muy bien!" ,  `Asi que haz elegido un/a ${this.type} de color ${this.color} en la talla ${this.size}. Este producto tiene un precio de ${this.price}` ,  "success" );
  }
}

// :::::::::::::::::::: FUNCIONES :::::::::::::::::::: 

// Funcion para setear el tipo de producto segun su número
function setProductType(product){
  let set_product_type;
  
  switch(product){
    case 1:
      set_product_type = 'Camiseta'
      break;
    case 2:
      set_product_type = 'Pantalon'
      break;
    case 3:
      set_product_type = 'Sudadera'
      break;
    case 4:
      set_product_type = 'Zapatos'
      break;
    case 5:
      set_product_type = 'Medias'
      break;
    case 6:
      set_product_type = 'Sueter'
      break;
  }
  
  return set_product_type
}

// Funcion para validar que la opción elegida sea correcta
function validateProduct(product){
  if(product.trim() == '' || isNaN(product) || parseInt(product) > 6){
    return false
  }
  return true
}

// Funcion para setear el precio del producto
function totalToPay(product){
  let product_price;
  
  switch(product){
    case 1 :
      product_price = 30
      break;
    case 2 :
      product_price =  60
      break;
    case 3 :
      product_price = 35
      break;
    case 4 :
      product_price = 45
      break;
    case 5 :
      product_price =  15
      break;
    case 6 :
      product_price = 40
      break;
  }

  return(product_price);
}

// Funcion para mostrar en pantalla la lista de compras total
function showTotalpurchase(){
  let total = 0
  shoppingCar.innerHTML = '';

  if(cart.length > 0){
    cart.forEach(function(product, index){
      total = total + product.price * product.quantity
      let cartContainer = document.createElement('div');
      cartContainer.className = 'col-md-12 border rounded';
      cartContainer.innerHTML = `
        <div class="col-md-12 border rounded">
          <div class="row">
            <div class="col-md-2">
              <img src="${product.image}" alt="${product.type}" class="img-thumbnail rounded float-left img-style ml-5">
            </div>
            <div class="col-md-2 text-center pt-4">
              <p class="lead">${product.type}</p>
            </div>
            <div class="col-md-2 text-center pt-4">
              <p class="lead d-inline">Cantidad: </p><span class="text-muted pl-2">${product.quantity}</span>
            </div>
            <div class="col-md-2 text-center pt-4">
              <p class="lead d-inline">Precio: </p><span class="text-muted pl-2">${product.price} $</span>
            </div>
            <div class="co-md-2 text-center pt-4"">
              <p class="lead d-inline"><strong>Subtotal: </strong></p><span class="text-muted pl-2">${product.price * product.quantity} $</span>
            </div>
            <div class="col-md-2 text-center pt-3">
              <button class="btn btn-danger float-right" onClick="removeProduct(${index})"> <i class="far fa-trash-alt"></i> </button>
            </div>
          </div>
        </div>
      `
      shoppingCar.appendChild(cartContainer)
    });

    let totalContainer = document.createElement('div');
    totalContainer.className = "col-md-12 border rounded pr-5 bg-light";
    totalContainer.innerHTML = `<div id="total" class="float-right p-3"><p class="h4"><strong>TOTAL</strong> ${total}  $</p></div>`
    shoppingCar.appendChild(totalContainer);
  }
}

// Función para añadir productos al carrito
function AddCart(detail_product){
  let index = cart.findIndex((element) => {
    return element.index === detail_product.index
  });

  if(index === -1){
    let product = detail_product
    cart.push(product)
    updateStorage(cart);
    showTotalpurchase();
  } else {
    cart[index].quantity += 1
    updateStorage(cart);
    showTotalpurchase();
  }
}

// Funcion para remover productos del carro
function removeProduct(index){
  if(cart[index].quantity <= 1){
    cart.splice(index, 1);
  } else {
    cart[index].quantity -= 1
  }
  updateStorage(cart);
  showTotalpurchase();
}

// Funcion para actualizar el storage
function updateStorage(cart){
  localStorage.setItem("cart", JSON.stringify(cart));
  showTotalpurchase();
}

function endShopping(){
  $('#finalizar-compra').addClass('d-none')
  const total = document.getElementById('total').innerHTML;
  shoppingCar.innerHTML = "";
  let endingShopping = `
  <div class="bg-light col-md-12 pb-3">
    <div class="row text-center">
      <div class="col-md-12"><h1 class="display-3 text-muted"><strong>Ya casi estamos listos</strong></h1></div>
      <div class="col-md-12">
        <p class="lead">
          Ahora solo debes rellenar un formulario para finalizar!
        </p>
      </div>
      <div class="col-md-12">
        <button class="btn btn-success p3" onclick="showShoppingForm()">Rellenar Formulario <i class="fas fa-check"></i></button>
      </div>
    </div>
  </div>
  `
  shoppingCar.innerHTML = endingShopping
}

function showShoppingForm(){
  shoppingCar.innerHTML = "";
  let form = `
    <div class="col-md-12 px-5 ">
      <form>
        <div class="form-group">
          <label>Dirrección</label>
          <input type="string" class="form-control" id="direction-input">
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Guardar Dirección</label>
        </div>
        <button type="button" class="btn btn-success" onclick="showFinalMessage()">Confirmar</button>
      </form>
    </div>
    
  `
  shoppingCar.innerHTML = form
}

function showFinalMessage(){
  swal( "Compra realizada!" , `Genial! ${$('#name-input').val()}, tu compra fue enviada a la dirreción que indicaste: ${$('#direction-input').val()}. A tu correo ${$('#email-input').val()} llegará el recibo de tu compra. Muchas gracias!` ,  "success" );
  eventFire(document.getElementById('close-shopping-cart'), 'click');
  shoppingCar.innerHTML = "";
  $('#finalizar-compra').removeClass('d-none')
  localStorage.clear();
  cart = [];
}