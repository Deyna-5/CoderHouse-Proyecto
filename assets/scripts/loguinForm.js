// :::::::::::::::::::: EXPRESIONES REGULARES :::::::::::::::::::: 
var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

// :::::::::::::::::::: DECLARO VARIABLES :::::::::::::::::::: 
var new_user;

// :::::::::::::::::::: OBJETOS :::::::::::::::::::: 
function User(user_name, user_email, user_password){
  this.user_name = user_name,
  this.user_email= user_email,
  this.user_password= user_password,
  this.completeCreation = function(){
    swal ( "Muy bien!" , `${this.user_name} ya te haz creado una cuenta!`,  "success" );
  }
}

// :::::::::::::::::::: FUNCIONES :::::::::::::::::::: 

// Funcion para validar que el nombre que estamos recibiendo no sea un string vacio
function validateName(name){
  if(name.trim() == '' || name == null){
    return false
  };
  return true
}

// Funcion para validar el email
function validateEmail(email){
  if(!email.match(emailRegex) || email.trim() == ''){
    return false
  };
  return true
}

// Funcion para validar que la password no sea un string vacio o un string menor a 5 carácteres
function validatePassword(password){
  if(password.trim() == '' || password.trim().length < 5){
    return false
  }
  return true
}

// Función para simular un click con JAVASCRIPT
function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

$( document ).ready(function() { 
  eventFire(document.getElementById('button-login-modal'), 'click');

  $('#loguin-form').submit(function(e){
    e.preventDefault();

    var name = document.getElementById('name-input').value;
    var nameValidation = validateName(name)

    var email = document.getElementById('email-input').value;
    var emailValidation = validateEmail(email)

    var password = document.getElementById('password-input').value;
    var passwordValidation = validatePassword(password)

    if(nameValidation && emailValidation && passwordValidation){

      new_user = new User(name, email, password);
      eventFire(document.getElementById('close-button'), 'click');
      new_user.completeCreation();

      if(localStorage.length > 0){
        swal("Bienvenido otra vez!", "Oh! Al parecer ya tienes productos en tu carrito de compras, quizás deberías echarle un ojo!", 'success')
      }

    } else {

      swal ( "Oops" ,  "Ocurrió un pequeño error! Verifica que los datos ingresados sean correctos" ,  "error" );
      if(nameValidation == false){
        var nameHelp = document.getElementById('nameHelp');
        nameHelp.innerHTML = 'El nombre no puede estar vacio'
      }else if(nameValidation == true){
        $('#nameHelp').hide();
      }

      if(emailValidation == false){
        var emailHelp = document.getElementById('emailHelp');
        emailHelp.innerHTML = 'Debes ingresar un email válido'
      }else if(emailValidation == true){
        $('#emailHelp').hide();
      }

      if(passwordValidation == false){
        var passwordHelp = document.getElementById('passwordHelp');
        passwordHelp.innerHTML = 'La contraseña debe ser mayor a 5 letras'
      }else if(passwordValidation == true){
        $('#passwordHelp').hide();
      }
    }
  });
});