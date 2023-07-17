// MENU
function mostrarMenu() {
    var textoDiv = document.querySelector('.texto-div');
    var menu = document.getElementById('menu');
    
    textoDiv.style.opacity = '0';
    
    setTimeout(function() {
      textoDiv.style.display = 'none';
      menu.style.display = 'block';
      
      setTimeout(function() {
        menu.classList.add('mostrar');
      }, 100);
    }, 300);
  }


  // Certificados
  function mostrarDivCertificados() {
    var divCertificados = document.getElementById('certificados');
    var altura = divCertificados.scrollHeight;

    if (divCertificados.classList.contains('mostrar')) {
        divCertificados.style.maxHeight = '0';
        divCertificados.style.opacity = '0';
    } else {
        divCertificados.style.maxHeight = altura + 'px';
        divCertificados.style.opacity = '1';
    }

    divCertificados.classList.toggle('mostrar');
}


