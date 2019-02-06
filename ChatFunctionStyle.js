$(document).ready(function(){
        $("#chatBTN").click(function(){
            var text = $("#inmsg").val();
            var name = $("#inName").val();

            var chatMessage = $("#messages").append("<tr><td>" + text + "   //" + name + "</td></tr>");
            var msg = $("<p></p>").text(text).addClass("chatFunction");
            var msgName = $("<p></p>").text("- " + name).addClass("nameFunction");

            console.log(chatMessage);
            
           
        })

    })