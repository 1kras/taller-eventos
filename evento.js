function saludar(){
    alert("Hola!");
};

var saludate = document.getElementById("Hidiv");

saludate.addEventListener("click", () => {
    alert("Hola! Soy el div");
});

const btn = document.getElementById("btn");

btn.addEventListener("click", (evento) => {
    evento.stopPropagation(); 
});
