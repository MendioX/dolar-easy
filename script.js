let ulElement = document.getElementById("main");


let dolarBlue = document.createElement("div");
let dolarMep= document.createElement("div");
let dolarOfic = document.createElement("div");


let blue_compra = document.getElementById("blue-compra")
let blue_venta = document.getElementById("blue-venta")

let mep_compra = document.getElementById("mep-compra")
let mep_venta = document.getElementById("mep-venta")

let of_compra = document.getElementById("of-compra")
let of_venta = document.getElementById("of-venta")

// Agrega el <li> como un hijo del <ul>




fetch("https://dolarapi.com/v1/dolares")
  .then(response => response.json())
  .then(data => {
    
    of_compra.textContent = "$"+data[0].compra
    of_venta.textContent = "$"+data[0].venta
    
    blue_compra.textContent = "$"+data[1].compra
    blue_venta.textContent = "$"+data[1].venta

    mep_compra.textContent = "$"+data[2].compra
    mep_venta.textContent = "$"+data[2].venta

}
  );


 