/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let sexo = "";
	let lugar = "";
	let temporada = "";
	let cantPers = 0;
	let seguir = false;
	let cantBari = 0;
	let cantCata = 0;
	let cantSalta = 0;
	let cantInvierno = 0;
	let cantPersInv = 0;
	let promedio = 0;
	let maxPers = 0;
	let maxSexo = "";
	let lugarElegido = "";
	do {
		do {
			sexo = prompt("Ingrese su sexo (H-Hombre/M-Mujer/O-Otros):").substring(0,1).toLocaleUpperCase();
			if (!(sexo === "H" || sexo === "M" || sexo === "O")) {
				alert("Ingrese un sexo válido!");
			}
		} while (!(sexo === "H" || sexo === "M" || sexo === "O"));
		do {
			lugar = prompt("Ingrese el lugar de destino (“bariloche”, “cataratas” o “salta”):").toLowerCase();
			if (!(lugar === "bariloche" || lugar === "cataratas" || lugar === "salta")) {
				alert("Ingrese un lugar válido!");
			}
		} while (!(lugar === "bariloche" || lugar === "cataratas" || lugar === "salta"));
		do {
			temporada = prompt("Ingrese temporada (“otoño”, “invierno”, “verano”, “primavera”):").toLowerCase();
			if (!(temporada === "otoño" || temporada === "invierno" || temporada === "verano" || temporada === "primavera")) {
				alert("Ingrese una temporada válido!");
			}
		} while (!(temporada === "otoño" || temporada === "invierno" || temporada === "verano" || temporada === "primavera"));
		do {
			cantPers = parseInt(prompt("Ingrese la cantidad de personas que viajan:"));
			if (cantPers === 0) {
				alert("La cantidad de personas debe ser mayor a 0");
			}
		} while (cantPers === 0);

		switch (lugar) {
			case "bariloche":
				cantBari++;
				break;
			case "cataratas":
				cantCata++;
				break;
			case "salta":
				cantSalta++;
				break;
		}

		if (temporada === "invierno") {
			cantInvierno++;
			cantPersInv += cantPers;
		}

		if (cantPers > maxPers) {
			maxPers = cantPers;
			maxSexo = (sexo = "H" ? "Hombre" : "Mujer");
		}

		seguir = confirm("Desea seguir ingresando?");
	} while (seguir);

	promedio = cantPersInv / cantInvierno;

	if (cantBari > cantCata && cantBari > cantSalta) {
		lugarElegido = "Bariloche";
	} else if (cantBari > cantCata && cantBari < cantSalta) {
		lugarElegido = "Salta";
	} else {
		lugarElegido = "Cataratas"
	}

	document.writeln("El lugar más elegido es: " + lugarElegido + "</br>");
	document.writeln("El sexo del titular con más pasajeros es: " + maxSexo + "</br>");
	document.writeln("El promedio de las personas que viajan por viaje en invierno es: " + promedio.toFixed(2));

}
