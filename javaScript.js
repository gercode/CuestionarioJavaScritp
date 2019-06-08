(function(){
	//variables
	var btnEnviar = document.getElementById("enviar"),
	    btnSiguiente = document.getElementById("next"),
	    btnAnterior = document.getElementById("previous"),
	    numeroTarea = document.getElementById("numeroTarea"),
	    nom = document.getElementById("nom"),
	    ape = document.getElementById("ape"),
	    hnom = document.getElementById("h4nombre"),
	    lis = document.getElementsByClassName("lis"),
	    realizadas = document.getElementsByClassName("realizada"),
	    correctas = document.getElementsByClassName("correcta"),
	    incorrectas = document.getElementsByClassName("incorrecta"),
	    btnRes1 = document.getElementById("btn1"),
	    btnRes2 = document.getElementById("btn2"),
	    btnRes3 = document.getElementById("btn3"),
	    btnRes4 = document.getElementById("btn4"),
	    btnRes5 = document.getElementById("btn5"),
	    btnRes6 = document.getElementById("btn6"),
	    btnRes7 = document.getElementById("btn7"),
	    btnRes8 = document.getElementById("btn8"),
	    btnRes9 = document.getElementById("btn9"),
	    progressBar = document.getElementById("progressBar"),
	    showResult = document.getElementById("showResult"),
	    btndireccion= document.getElementsByClassName("btndireccion")[0],
	    preRealizadas = document.getElementById("preRealizadas"),
		preIndicador = document.getElementById("preIndicador"),
		totalCorrectas = document.getElementById("totalCorrectas"),
		totalIncorrectas = document.getElementById("totalIncorrectas"),
		nota = document.getElementById("nota"),
		nombre = document.getElementById("nom"),
		apellido = document.getElementById("ape"),
		resultado = document.getElementsByClassName("resultado")[0];
	    i=1;
	   


	//Funciones
	//función para ir hacia adelante 
	var siguiente = function(){
		i++;
		if (i==11) {
			i=10;
		}
	   return i;
	};
	//función para ir hacia atras
	var anterior = function(){
		i--;
		
	   return i;
	};
	
      function validarnombre(){
      	 if (nombre.value == "" || apellido.value =="") {  //COMPRUEBA CAMPOS VACIOS
	        alert("Los campos no pueden quedar vacios");
	        return false;
         }
         else{
         	enviardato();
         }
      }
	var validacionBtn = function(){
       //oculto y muestro algunos botones para la segunda iteracion 
	     if (i>=2) {
	     	btnEnviar.setAttribute("class","ocultar");
	     	btnAnterior.setAttribute("class","mostrar");
	     	btnSiguiente.setAttribute("class","mostrar");
	     	progressBar.setAttribute("class","barraProgreso mostrar");
	     	 for (var k = 0; k < 9; k++) {
	     	  lis[k].setAttribute("class","lis mostrar");
	     	}
	     	   if(realizadas.length == 9){

	     	   		showResult.setAttribute("class","mostrar");
	           }
	     } 
	     //habilitar y deshabilitar el boton anterior
	      if (i==2 ) {
	     	btnAnterior.disabled = 'none'; 
	     }else if (i>2) {
	        btnAnterior.disabled = ''; 
	     }  
	       if (i>=10 ) {
	     	btnSiguiente.disabled = 'none'; 

	     }else if (i<10) {
	        btnSiguiente.disabled = ''; 
	     }  
	         if (i>=11 ) {
	     	btnEnviar.disabled = 'none'; 
	     	
	     }else if (i<11) {
	        btnEnviar.disabled = ''; 
	     } 
         

	}

	//función para mandar el nombre en la barra de navegación
	var enviardato = function(){
		hnom.innerHTML= nom.value+" "+ape.value;
		if (i<=10) {
            siguiente();
			cambioDePregunta();
		}
	};

	var progreso = function(){
		var progreso = document.getElementById("progress"), incremento;
        incremento = realizadas.length * 56;
        progreso.style.width = incremento +"px";
        preRealizadas.innerHTML ="El numero de preguntas ralizadas es: "+realizadas.length; 
        preIndicador.innerHTML ="("+(i-1)+" de 9)";
        
	}
	

	//funcion para cambiar de pregunta 11
	var cambioDePregunta= function(){
		var prueba = document.getElementsByClassName("prueba");
		validacionBtn();
		progreso();

	    //si se encuentra en el numero de la pregunta se muestra esa pregunta y la las demas se ocultan
	    for (var j = 0; j < 10; j++) {
	    	
	    	if ((prueba[j].getAttribute('class'))== "prueba "+i || (prueba[j].getAttribute('class'))== "prueba "+i+" ocultar" || (prueba[j].getAttribute('class'))== "prueba "+i+" mostrar"){

			     prueba[j].setAttribute("class","prueba "+i+" mostrar");
		    }
		    else{
		    	 prueba[j].setAttribute("class","prueba "+(j+1)+" ocultar");
		    }
		 
	    }
	};


	//función para validar la primera pregunta
	var validarRespuesta1 = function(){
			var res1=1;
		var group = document.Form1.myRadio;

		for (var j=0; j<group.length; j++) {
			if (group[j].checked)
			break;
		}
		if (j==group.length){
			return alert("Escoja alguna Respuesta");
		}
		for (var k=0; k<group.length; k++) {
		   group[k].disabled = 'none';
		} 
		var pag1= document.getElementById("pag1"); 
		 if(j+1 == res1){
		 	pag1.setAttribute("class","correcta realizada "+(j+1));
		   
		 }else{
		 	pag1.setAttribute("class","incorrecta realizada "+(j+1));
		 }
	   
	   siguiente();
	   cambioDePregunta();	 

	};

	//funcion para validar la segunda pregunta 
	var validarRespuesta2 = function(){
			var res2=2;
		var group = document.Form2.myRadio;

		for (var j=0; j<group.length; j++) {
			if (group[j].checked)
			break;
		}
		if (j==group.length){
			return alert("Escoja alguna Respuesta");
		}
		for (var k=0; k<group.length; k++) {
		   group[k].disabled = 'none';
		} 
		var pag2= document.getElementById("pag2"); 
		 if(j+1 == res2){
		 	pag2.setAttribute("class","correcta realizada");
		  
		 }else{
		 	pag2.setAttribute("class","incorrecta realizada");
		 }
	   
	   siguiente();
	   cambioDePregunta();	 

	};
	var validarRespuesta3 = function(){
			var res3=3;
		var group = document.Form3.myRadio;

		for (var j=0; j<group.length; j++) {
			if (group[j].checked)
			break;
		}
		if (j==group.length){
			return alert("Escoja alguna Respuesta");
		}
		for (var k=0; k<group.length; k++) {
		   group[k].disabled = 'none';
		} 
		var pag3= document.getElementById("pag3"); 
		 if(j+1 == res3){
		 	pag3.setAttribute("class","correcta realizada");
		  
		 }else{
		 	pag3.setAttribute("class","incorrecta realizada");
		 }
	   
	   siguiente();
	   cambioDePregunta();	 

	};
	var validarRespuesta4 = function(){
			var res4=4;
		var group = document.Form4.myRadio;

		for (var j=0; j<group.length; j++) {
			if (group[j].checked)
			break;
		}
		if (j==group.length){
			return alert("Escoja alguna Respuesta");
		}
		for (var k=0; k<group.length; k++) {
		   group[k].disabled = 'none';
		} 
		var pag4= document.getElementById("pag4"); 
		 if(j+1 == res4){
		 	pag4.setAttribute("class","correcta realizada");
		   
		 }else{
		 	pag4.setAttribute("class","incorrecta realizada");
		 }
	   
	   siguiente();
	   cambioDePregunta();	 

	};
	var validarRespuesta5 = function(){
			var res5=1;
		var group = document.Form5.myRadio;

		for (var j=0; j<group.length; j++) {
			if (group[j].checked)
			break;
		}
		if (j==group.length){
			return alert("Escoja alguna Respuesta");
		}
		for (var k=0; k<group.length; k++) {
		   group[k].disabled = 'none';
		} 
		var pag5= document.getElementById("pag5"); 
		 if(j+1 == res5){
		 	pag5.setAttribute("class","correcta realizada");
		  
		 }else{
		 	pag5.setAttribute("class","incorrecta realizada");
		 }
	   
	   siguiente();
	   cambioDePregunta();	 

	};
	var validarRespuesta6 = function(){
			var res6=2;
		var group = document.Form6.myRadio;

		for (var j=0; j<group.length; j++) {
			if (group[j].checked)
			break;
		}
		if (j==group.length){
			return alert("Escoja alguna Respuesta");
		}
		for (var k=0; k<group.length; k++) {
		   group[k].disabled = 'none';
		} 
		var pag6= document.getElementById("pag6"); 
		 if(j+1 == res6){
		 	pag6.setAttribute("class","correcta realizada");
		 }else{
		 	pag6.setAttribute("class","incorrecta realizada");
		 }
	   
	   siguiente();
	   cambioDePregunta();	 
	};
		var validarRespuesta7 = function(){
			var res7=3;
		var group = document.Form7.myRadio;

		for (var j=0; j<group.length; j++) {
			if (group[j].checked)
			break;
		}
		if (j==group.length){
			return alert("Escoja alguna Respuesta");
		}
		for (var k=0; k<group.length; k++) {
		   group[k].disabled = 'none';
		} 
		var pag7= document.getElementById("pag7"); 
		 if(j+1 == res7){
		 	pag7.setAttribute("class","correcta realizada");
		 }else{
		 	pag7.setAttribute("class","incorrecta realizada");
		 }
	   
	   siguiente();
	   cambioDePregunta();	 
	};
	var validarRespuesta8 = function(){
			var res8=4;
		var group = document.Form8.myRadio;

		for (var j=0; j<group.length; j++) {
			if (group[j].checked)
			break;
		}
		if (j==group.length){
			return alert("Escoja alguna Respuesta");
		}
		for (var k=0; k<group.length; k++) {
		   group[k].disabled = 'none';
		} 
		var pag8= document.getElementById("pag8"); 
		 if(j+1 == res8){
		 	pag8.setAttribute("class","correcta realizada");
		 }else{
		 	pag8.setAttribute("class","incorrecta realizada");
		 }
	   
	   siguiente();
	   cambioDePregunta();	 
	};
	var validarRespuesta9 = function(){
			var res9=1;
		var group = document.Form9.myRadio;

		for (var j=0; j<group.length; j++) {
			if (group[j].checked)
			break;
		}
		if (j==group.length){
			return alert("Escoja alguna Respuesta");
		}
		for (var k=0; k<group.length; k++) {
		   group[k].disabled = 'none';
		} 
		var pag9= document.getElementById("pag9"); 
		 if(j+1 == res9){
		 	pag9.setAttribute("class","correcta realizada");
		 }else{
		 	pag9.setAttribute("class","incorrecta realizada");
		 }
	   
	   siguiente();
	   cambioDePregunta();	 
	};

	var mostrarEstadisticas = function(){

        var prueba = document.getElementsByClassName("prueba"),
            paginacion = document.getElementsByClassName("paginacion")[0];
        for (var i = 0; i < prueba.length; i++) {
        	prueba[i+1].setAttribute("class","ocultar");
        }
        btndireccion.setAttribute("class","ocultar");
        progressBar.setAttribute("class","ocultar");
        preIndicador.setAttribute("class","ocultar");
        preRealizadas.setAttribute("class","ocultar");
        paginacion.setAttribute("class","ocultar");
        resultado.setAttribute("class","resultado mostrarTabla mostrar");

	}
	var estadistica = function(){
		var selecionada1 = document.getElementById("selecionada1"),
		    resultado1 = document.getElementById("resultado1"),
		    r1= document.getElementsByClassName("r1"), res1=1,
		    selecionada2 = document.getElementById("selecionada2"),
		    resultado2 = document.getElementById("resultado2"),
		    r2= document.getElementsByClassName("r2"), res2=2,
		    selecionada3 = document.getElementById("selecionada3"),
		    resultado3 = document.getElementById("resultado3"),
		    r3= document.getElementsByClassName("r3"), res3=3,
		    selecionada4 = document.getElementById("selecionada4"),
		    resultado4 = document.getElementById("resultado4"),
		    r4= document.getElementsByClassName("r4"), res4=4,
		    selecionada5 = document.getElementById("selecionada5"),
		    resultado5 = document.getElementById("resultado5"),
		    r5= document.getElementsByClassName("r5"), res5=1,
		    selecionada6 = document.getElementById("selecionada6"),
		    resultado6 = document.getElementById("resultado6"),
		    r6= document.getElementsByClassName("r6"), res6=2,
		    selecionada7 = document.getElementById("selecionada7"),
		    resultado7 = document.getElementById("resultado7"),
		    r7= document.getElementsByClassName("r7"), res7=3,
		    selecionada8 = document.getElementById("selecionada8"),
		    resultado8 = document.getElementById("resultado8"),
		    r8= document.getElementsByClassName("r8"), res8=4,
		    selecionada9 = document.getElementById("selecionada9"),
		    resultado9 = document.getElementById("resultado9"),
		    r9= document.getElementsByClassName("r9"), res9=1;

		var group = document.Form1.myRadio;

		for (var j=0; j<group.length; j++) {
			if (group[j].checked)
			break;
		}
		selecionada1.innerHTML = r1[j].textContent;
		resultado1.innerHTML= r1[res1-1].textContent;

		var group2 = document.Form2.myRadio;
		for (var j=0; j<group.length; j++) {
			if (group2[j].checked)
			break;
		}
		selecionada2.innerHTML = r2[j].textContent;
		resultado2.innerHTML= r2[res2-1].textContent;

		var group3 = document.Form3.myRadio;
		for (var j=0; j<group.length; j++) {
			if (group3[j].checked)
			break;
		}
		selecionada3.innerHTML = r3[j].textContent;
		resultado3.innerHTML= r3[res3-1].textContent;

		var group4 = document.Form4.myRadio;
		for (var j=0; j<group.length; j++) {
			if (group4[j].checked)
			break;
		}
		selecionada4.innerHTML = r4[j].textContent;
		resultado4.innerHTML= r4[res4-1].textContent;

		var group5 = document.Form5.myRadio;
		for (var j=0; j<group.length; j++) {
			if (group5[j].checked)
			break;
		}
		selecionada5.innerHTML = r5[j].textContent;
		resultado5.innerHTML= r5[res5-1].textContent;

		var group6 = document.Form6.myRadio;
		for (var j=0; j<group.length; j++) {
			if (group6[j].checked)
			break;
		}
		selecionada6.innerHTML = r6[j].textContent;
		resultado6.innerHTML= r6[res6-1].textContent;

		var group7 = document.Form7.myRadio;
		for (var j=0; j<group.length; j++) {
			if (group7[j].checked)
			break;
		}
		selecionada7.innerHTML = r7[j].textContent;
		resultado7.innerHTML= r7[res7-1].textContent;

		var group8 = document.Form8.myRadio;
		for (var j=0; j<group.length; j++) {
			if (group8[j].checked)
			break;
		}
		selecionada8.innerHTML = r8[j].textContent;
		resultado8.innerHTML= r8[res8-1].textContent;

		var group9 = document.Form9.myRadio;
		for (var j=0; j<group.length; j++) {
			if (group9[j].checked)
			break;
		}
		selecionada9.innerHTML = r9[j].textContent;
		resultado9.innerHTML= r9[res9-1].textContent;
		totalCorrectas.innerHTML= correctas.length;
		nota.innerHTML = correctas.length * 11.11 + " de 100";
	}

	//Eventos
	btnSiguiente.addEventListener("click",siguiente);
	btnSiguiente.addEventListener("click",siguiente);
	btnSiguiente.addEventListener("click",cambioDePregunta);
	btnAnterior.addEventListener("click",anterior);
	btnAnterior.addEventListener("click",cambioDePregunta);
	btnEnviar.addEventListener("click",validarnombre);
	//btnEnviar.addEventListener("click",enviardato);
	btnRes1.addEventListener("click",validarRespuesta1);
	btnRes2.addEventListener("click",validarRespuesta2);
	btnRes3.addEventListener("click",validarRespuesta3);
	btnRes4.addEventListener("click",validarRespuesta4);
	btnRes5.addEventListener("click",validarRespuesta5);
	btnRes6.addEventListener("click",validarRespuesta6);
	btnRes7.addEventListener("click",validarRespuesta7);
	btnRes8.addEventListener("click",validarRespuesta8);
	btnRes9.addEventListener("click",validarRespuesta9);
	showResult.addEventListener("click",estadistica);
	showResult.addEventListener("click",mostrarEstadisticas);
}());