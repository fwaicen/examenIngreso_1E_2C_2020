/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  let marca     = "";
  let precio    = 0;
  let peso      = 0;
  let tipo      = "";
  let pesoTotal = 0;
  let marcaL  = "ninguno";
  let precioL = 0;
  let marcaS  = "ninguno";
  let precioS = 0;
  var seguir = false;
  do {
    marca = prompt("Ingrese marca del producto:");

    do {
      precio = parseFloat(prompt("Ingresar precio del producto:"));
      if (precio === 0) {
        alert("El precio no puede ser 0. Vuelva a ingresar el precio por favor.");
      }
    } while (precio === 0);

    peso = parseFloat(prompt("Ingresar peso del producto:"));

    do {
      tipo = prompt("Ingresar tipo de producto (S-sólidos/L-líquidos)").substring(0,1).toLocaleUpperCase();
      if (!(tipo == "S" || tipo == "L")) {
        alert("Ingrese un tipo de producto válido!");
      }
    } while (!(tipo == "S" || tipo == "L"));
    
    if (precio > precioL && tipo === "L") {
      precioL = precio;
      marcaL  = marca;
    }

    if (precioS === 0 && tipo === "S") {
      precioS = precio;
      marcaS  = marca;
    } else if (precio < precioS && tipo === "S") {
      precioS = precio;
      marcaS  = marca;
    }

    pesoTotal += peso;

    seguir = confirm("Desea seguir ingresando?");
  } while (seguir);

  document.writeln("El peso total de la compra es: " + pesoTotal + "</br>");
  document.writeln("La marca del más caro de los líquidos es: "+ marcaL + "</br>");
  document.writeln("La marca del más barato de los sólidos es: "+ marcaS + "</br>");
}
