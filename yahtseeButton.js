1
 document.addEventListener("DOMContentLoaded", function(event){
    let throwDice=document.getElementById("throwDice");
   
    
    function getRandomInt(min,max){
        return Math.floor(Math.random()*(max-min))+min;
    };
    var count=0;
   throwDice.addEventListener("click", function(event){ 
    
    count++;
    console.log(count);

        if(count <= 3)  {     
       
            let textbox2=document.getElementById("textbox2");
            let textbox3=document.getElementById("textbox3");
            let textbox4=document.getElementById("textbox4");
            let textbox5=document.getElementById("textbox5");
            let playboardsum=document.getElementById("darkerSum");
        
       

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
        }
        else{
            alert("Next player");
            count=0;

            textbox1.value=0;
            textbox2.value=0;
            textbox3.value=0;
            textbox4.value=0;
            textbox5.value=0;
        }

    let sumTextbox=document.getElementById("sumTextbox");
    sumTextbox.value=parseInt(textbox1.value)+parseInt(textbox2.value)+parseInt(textbox3.value)+parseInt(textbox4.value)+parseInt(textbox5.value);
    
    });

    
     });
