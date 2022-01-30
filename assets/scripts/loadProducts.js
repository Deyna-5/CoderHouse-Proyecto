// :::::::::::::::::::: DECLARO VARIABLES :::::::::::::::::::: 
let dataProductList = new Array;
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

$( document ).ready(function() { 
  $.ajax({
    url: 'assets/data/products.json',
    dataType: 'JSON',
    success: (respond) =>{
      loadProducts(respond);
      createModals(respond);
    }
  });
});

function loadProducts(respond){
  dataProductList = respond;

  let content = document.getElementById('productsForm');
  content.innerHTML = '';
  
  dataProductList.forEach(function(product){
    let card = document.createElement('div');
    card.classList.add('col-md-4', "my-3");

    let html = `
    <div class="card">
      <img src="${product["imagen"]}" class="card-img-top" >
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h4 class="card-title font-weight-light">${product["nombre"]}</h4>
          </div>

          <div class="col-md-6">
            <div class="float-right">
              <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal${product["id"]}">
                Seleccionar
              </button>  
            </div>
          </div>
        </div>
      </div>
    </div>
    `

    card.innerHTML = html;
    content.appendChild(card)
  });
}

function createModals(respond){
  dataProductList = respond;

  dataProductList.forEach(function(product){
    let modal = document.getElementById(`exampleModal${product["id"]}`);

    let html = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Selecciona como quieres tu ${product["nombre"]}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6">
              <img src="${product["imagenDos"]}" class="rounded float-left img-fluid">
            </div>
            <div class="col-md-6">
              <input type="hidden" value="${product["id"]}" id="kind-of-product-${product["nombre"]}">
              <input type="hidden" value="${product["shoppingCartImage"]}" id="product-${product["nombre"]}-image">
              <div class="form-group">
                <label for="select-${product["nombre"]}-size">Selecciona la talla de tu ${product["nombre"]}</label>
                <select class="form-control" id="select-${product["nombre"]}-size">
                  <option>${product["tallas"]["Extra-pequeña"]}</option>
                  <option>${product["tallas"]["Pequeña"]}</option>
                  <option>${product["tallas"]["Mediana"]}</option>
                  <option>${product["tallas"]["Grande"]}</option>
                  <option>${product["tallas"]["Extra-grande"]}</option>
                </select>
              </div>
              <div class="form-group">
                <label for="select-${product["nombre"]}-color">Selecciona el color de tu ${product["nombre"]}</label>
                <select multiple class="form-control" id="select-${product["nombre"]}-color">
                  <option>${product["colores"]["1"]}</option>
                  <option>${product["colores"]["2"]}</option>
                  <option>${product["colores"]["3"]}</option>
                  <option>${product["colores"]["4"]}</option>
                  <option>${product["colores"]["5"]}</option>
                  <option>${product["colores"]["6"]}</option>
                </select>
              </div>
              <div class="form-group">
                <div class="float-right">
                  <button class="btn btn-success" id="buy-${product["nombre"]}">Añadir al carrito</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-block btn-secondary" data-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
    `

    modal.innerHTML = html;
  });
}