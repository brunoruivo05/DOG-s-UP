$(document).ready(function(){
    $('[data-bs-toggle="tooltip"]').tooltip();
})



// Light BOX
document.addEventListener("click",function (e){
    if(e.target.classList.contains("item-imagem")){
          const src = e.target.getAttribute("src");
          document.querySelector(".modal-img").src = src;
          const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
          myModal.show();
    }
  })


//   De volta ao topo
window.onscroll = function(){
    scroll();
}
// Exibe o botão quando o scroll descer até 600px.
function scroll(){
    var btn = document.getElementById("btntop")
    if(document.documentElement.scrollTop > 600){
        btn.style.display = "block";
    }else{
        btn.style.display = "none";
    }
}

// Click para voltar para o topo

function voltarAoTop(){
    document.documentElement.scrollTop = 0;
}