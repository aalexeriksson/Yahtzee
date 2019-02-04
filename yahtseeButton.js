
 document.addEventListener("DOMContentLoaded", function(event){

    let throwDice=document.getElementById("throwDice");
   
    
    function getRandomInt(min,max){
        return Math.floor(Math.random()*(max-min))+min;
    };
   throwDice.addEventListener("click", function(event){ 
       
       
        let textbox2=document.getElementById("textbox2");
        let textbox3=document.getElementById("textbox3");
        let textbox4=document.getElementById("textbox4");
        let textbox5=document.getElementById("textbox5");

        if(document.getElementById("checkbox1").checked == false){
            let textbox1=document.getElementById("textbox1");
            textbox1.value=getRandomInt(1,7);

        }
        if(document.getElementById("checkbox1").checked == false){
            let textbox2=document.getElementById("textbox2");
            textbox2.value=getRandomInt(1,7);

        }
        if(document.getElementById("checkbox3").checked == false){
            let textbox3=document.getElementById("textbox3");
            textbox3.value=getRandomInt(1,7);

        }
        if(document.getElementById("checkbox4").checked == false){
            let textbox4=document.getElementById("textbox4");
            textbox4.value=getRandomInt(1,7);

        }
        if(document.getElementById("checkbox5").checked == false){
            let textbox5=document.getElementById("textbox5");
            textbox5.value=getRandomInt(1,7);

        }


        
        
    });
   

    
     });