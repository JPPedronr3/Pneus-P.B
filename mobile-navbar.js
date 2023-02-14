var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    document.querySelector(".nav-list").classList.toggle("active")
});
fetch("../php/listar_cadastrados.php", {
    method: "GET"
}).then(async function (resposta) {
    var data = await resposta.json();
    console.log("Usuarios: ");
for(var i = 0; i < data.length; i++){
    console.log(data[i].nome + data[i].email);
    };
})