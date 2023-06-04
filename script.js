   // declarando los objetos para manejo DOM
     const $content = document.getElementById('text2'),
     $content2=document.getElementById('text1'),
     $btn = document.getElementById('btncop'),
     $btne = document.getElementById('btnenc'),
     $btnd=document.getElementById('btndes'),
     $title = document.getElementById('mensaj');


    //código para validar que solo se usen letras y números, sin acentos 
    //ni caracteres especiales

  $(function(){
  //Para escribir solo letras
  $('#text1').validCampoFranz(' abcdefghijklmnñopqrstuvwxyz0123456789');
  //Para escribir solo numeros    
  $('#text2').validCampoFranz('abcdefghijklmnñopqrstuvwxyz0123456789'); });



//validar campos vacios y hacer la encriptación llamada con el botón encriptar
      //var getValueInput = () =>{
      $btne.addEventListener('click', f => {  
      let inputValue = document.getElementById("text1").value; 

      if(inputValue===''){   
                $title.style.textAlign = "left";
                $title.innerHTML = '❌ Por favor escribe algo en la caja de texto';
                $content2.focus();
                $content2.style.outlineColor = "#E74C3C";
                setTimeout(function() {
                    $title.style.textAlign = "right";
                     sayHi();
                    $content2.style.outlineColor = "#000000";
                },1.5 * 1000);

            }else{
                 inputValue=inputValue.toLowerCase();
                let encriptada = inputValue; /*.replace(/a/gi,'ai').replace(/e/gi,'enter').replace(/i/gi,'imes').replace(/o/gi,'ober').replace(/u/gi,'ufat');*/
                let nueva="";
      for(var i=0;i<encriptada.length;i++){
        
      switch(encriptada[i]){

             case "a": nueva = nueva+'ai';    break;
             case "e": nueva = nueva+'enter'; break;   
             case "i": nueva = nueva+'imes';break;      
             case "o": nueva = nueva+'ober';break;  
             case "u": nueva = nueva+'ufat';break;  
             default:  nueva = nueva+encriptada[i];          
        }
        console.log(nueva);
    }
            $title.style.textAlign = "left";
            $title.innerHTML = '✅ Encriptado!!';
             $content2.focus();
            $content2.style.outlineColor = "#00ff00";
            setTimeout(function() {
                sayHi();
                $content2.style.outlineColor = "#000000";
                $title.style.textAlign = "right";

                }, 1500);
       
      console.log(document.getElementById('text1').value);
      $content.value=nueva;  
      $content2.value='';

      }//fin else

      
       

      })//fi func


      //funcion para desdencriptar el texto, llamada desde el botón desencriptar


     // var desencriptar = () =>{
      $btnd.addEventListener('click', g => {
      let inputValue = document.getElementById("text1").value; 

      if(inputValue===''){   
                $title.style.textAlign = "left";
                $title.innerHTML = '❌ Por favor escriba o pegue algo en la caja de texto';
                $content2.focus();
                $content2.style.outlineColor = "#E74C3C";
                setTimeout(function() {
                    $title.style.textAlign = "right";
                     sayHi();
                    $content2.style.outlineColor = "#000000";
                },1.5 * 1000);

            }else{
                 inputValue=inputValue.toLowerCase();
                let encriptada = inputValue; /*.replace(/a/gi,'ai').replace(/e/gi,'enter').replace(/i/gi,'imes').replace(/o/gi,'ober').replace(/u/gi,'ufat');*/
                let nueva="";
                encriptada=encriptada.replaceAll('ai', 'a');
                encriptada=encriptada.replaceAll('enter', 'e');
                encriptada=encriptada.replaceAll('imes', 'i');
                encriptada=encriptada.replaceAll('ober', 'o');
                encriptada=encriptada.replaceAll('ufat', 'u');
                console.log(encriptada);

            $title.style.textAlign = "left";
            $title.innerHTML = '✅ Texto Desencriptado!!';
             $content2.focus();
            $content2.style.outlineColor = "#00ff00";
            setTimeout(function() {
                sayHi();
                $content2.style.outlineColor = "#000000";
                $title.style.textAlign = "right";

                }, 1500);
       
      //console.log(document.getElementById('text1').value);
      $content.value=encriptada;  
      $content2.value='';

      }//fin else

      
       

      })//fi func



     //función para poner los campos de texto en blanco

      function sayHi() {
         $title.innerHTML = '';
        }

     


     //manejo del evento click del botón copiar con un evento listener
     $btn.addEventListener('click', e => {
            var contenido=document.getElementById('text2').value;
            if(contenido===''){   
                $title.innerHTML = '❌ Encripta un texto para copiar';
                $content.focus();
                $content.style.outlineColor = "#E74C3C";
                setTimeout(function() {
                     sayHi();
                    $content.style.outlineColor = "#000000";
                },1.2 * 1000);
            //alert($content);
         
            }else{
            
                $content.select();
                document.execCommand('copy');
                $title.innerHTML = '📗 Copiado!!!';
                $content.style.outlineColor = "#00ff00";
                $content.value='';
                setTimeout(function() {
                    sayHi();
                    $content.style.outlineColor = "#000000";
                    $content2.focus();

                },1.2 * 1000);
        }

}) 

  