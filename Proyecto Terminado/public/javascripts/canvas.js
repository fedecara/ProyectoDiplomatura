/**
 * Clase para generar graficos de pastel
 * Tiene que recibir:
 *	el id del canvas
 *	la anchura y altura del canvas
 *	un array con los valores a mostrar del tipo:
 *		var valores={
 *			"Access":	{valor:10,color:"blue"},
 *			"PHP":		{valor:23,color:"red"},
 *			"Python":	{valor:18,color:"green"},
 *			".NET":		{valor:12,color:"Orange"},
 *			"C++":		{valor:30,color:"Cyan"}
 *		}
 */
var miPastel=function(canvasId,width,height,valores) {
	this.canvas=document.getElementById(canvasId);;
	this.canvas.width=width;
	this.canvas.height=height;
	this.radio=Math.min(this.canvas.width/2,this.canvas.height/2)
	this.context=this.canvas.getContext("2d");
	this.valores=valores;
	this.tamanoDonut=0;
 
	/**
	 * Dibuja un gráfico de pastel
	 */
	this.dibujar=function() {
		this.total=this.getTotal();
		var valor=0;
		var inicioAngulo=0;
		var angulo=0;
 
		// creamos los quesos del pastel
		for(var i in this.valores)
		{
			valor=valores[i]["valor"];
			color=valores[i]["color"];
			angulo=2*Math.PI*valor/this.total;
 
			this.context.fillStyle=color;
			this.context.beginPath();
			this.context.moveTo(this.canvas.width/2, this.canvas.height/2);
			this.context.arc(this.canvas.width/2, this.canvas.height/2, this.radio, inicioAngulo, (inicioAngulo+angulo));
			this.context.closePath();
			this.context.fill();
			inicioAngulo+=angulo;
		}
	}
 
	/**
	 * Dibuja un gráfico de pastel con una redonda en medio en modo de donut
	 * Tiene que recibir:
	 *	el tamaño de la redonda central (0 no hay redonda - 1 es todo)
	 *	el color de la redonda
	 */
	this.dibujarDonut=function(tamano,color) {
		this.tamanoDonut=tamano;
		this.dibujar();
 
		// creamos un circulo del color recibido en medio
		this.context.fillStyle=color;
		this.context.beginPath();
		this.context.moveTo(this.canvas.width/2, this.canvas.height/2);
		this.context.arc(this.canvas.width/2, this.canvas.height/2, this.radio*tamano, 0, 2*Math.PI);
		this.context.closePath();
		this.context.fill();
	}
 
	/**
	 * Pone el tanto por ciento de cada uno de los valores
	 * Tiene que recibir:
	 *	el color del texto
	 */
	this.ponerPorCiento=function(color){
		var valor=0;
		var etiquetaX=0;
		var etiquetaY=0;
		var inicioAngulo=0;
		var angulo=0;
		var texto="";
		var incrementar=0;
 
		// si hemos dibujado un donut, tenemos que incrementar el valor del radio
		// para que quede centrado
		if(this.tamanoDonut)
			incrementar=(this.radio*this.tamanoDonut)/2;
 
		this.context.font="bold 12pt Calibri";
		this.context.fillStyle=color;
		for(var i in this.valores)
		{
			valor=valores[i]["valor"];
			angulo=2*Math.PI*valor/this.total;
 
			// calculamos la posición del texto
			etiquetaX=this.canvas.width/2+(incrementar+this.radio/2)*Math.cos(inicioAngulo+angulo/2);
			etiquetaY=this.canvas.height/2+(incrementar+this.radio/2)*Math.sin(inicioAngulo+angulo/2);
 
			texto=Math.round(100*valor/this.total);
 
			// movemos la posición unos pixels si estamos en la parte izquierda
			// del pastel para que quede mas centrado
			if(etiquetaX<this.canvas.width/2)
				etiquetaX-=10;
 
			// ponemos los valores
			this.context.beginPath();
			this.context.fillText(texto+"%", etiquetaX, etiquetaY);
			this.context.stroke();
 
			inicioAngulo+=angulo;
		}
	}
 
	/**
	 * Function que devuelve la suma del total de los valores recibidos en el array
	 */
	this.getTotal=function() {
		var total=0;
		for(var i in this.valores)
		{
			total+=valores[i]["valor"];
		}
		return total;
	}
 
	/**
	 * Función que devuelve una lista (<ul><li>) con la leyenda
	 * Tiene que recibir el id donde poner la leyenda
	 */
	this.ponerLeyenda=function(leyendaId) {
		var codigoHTML="<ul class='leyenda'>";
 
		for(var i in this.valores)
		{
			codigoHTML+="<li><span style='background-color:"+valores[i]["color"]+"'></span>"+i+"</li>";
		}
		codigoHTML+="</ul>";
		document.getElementById(leyendaId).innerHTML=codigoHTML;
	}
}
