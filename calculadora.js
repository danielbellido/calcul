var sumando;
var restando;
var multiplo;
var dividendo;

function butOnClick(target){
	iteNumeros = document.getElementById('iteNumeros');
	
	if (target.id == "but0")
	{
		iteNumeros.value = iteNumeros.value+"0";
	}
	else if (target.id == "but1")
	{
		iteNumeros.value = iteNumeros.value+"1";
	}
	else if (target.id == "but2")
	{
		iteNumeros.value = iteNumeros.value+"2";
	}
	else if (target.id == "but3")
	{
		iteNumeros.value = iteNumeros.value+"3";
	}
	else if (target.id == "but4")
	{
		iteNumeros.value = iteNumeros.value+"4";
	}
	else if (target.id == "but5")
	{
		iteNumeros.value = iteNumeros.value+"5";
	}
	else if (target.id == "but6")
	{
		iteNumeros.value = iteNumeros.value+"6";
	}
	else if (target.id == "but7")
	{
		iteNumeros.value = iteNumeros.value+"7";
	}
	else if (target.id == "but8")
	{
		iteNumeros.value = iteNumeros.value+"8";
	}
	else if (target.id == "but9")
	{
		iteNumeros.value = iteNumeros.value+"9";
	}
	else if (target.id == "butMas")
	{
		sumando = iteNumeros.value;
		iteNumeros.value = "";
	}
	else if (target.id == "butMenos")
	{
		restando = iteNumeros.value;
		iteNumeros.value = "";
	}
	else if (target.id == "butPor")
	{
		multiplo = iteNumeros.value;
		iteNumeros.value = "";
	}
	else if (target.id == "butC")
	{
		iteNumeros.value = "";
		limpiar();
	}
	else if (target.id == "but=")
	{
		var resultado = parseInt(iteNumeros.value);
		if(sumando!="")
		{
			resultado = resultado + parseInt(sumando);
			iteNumeros.value = resultado;
		}
		else if(restando!="")
		{
			resultado = parseInt(restando)-resultado;
			iteNumeros.value = resultado;
		}
		else if(multiplo!="")
		{
			resultado = resultado * parseInt(multiplo);
			iteNumeros.value = resultado;
		}
		else if(dividendo!="")
		{
			resultado = parseInt(dividendo) / resultado;
			iteNumeros.value = resultado;
		}
		
	}
	else if (target.id == "butEntre")
	{
		dividendo = iteNumeros.value;
		iteNumeros.value = "";
	}
}

function limpiar()
{
	sumando = "";
	restando = "";
	multiplo = "";
	dividendo = "";
}