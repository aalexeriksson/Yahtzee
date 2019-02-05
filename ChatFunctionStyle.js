$(document).ready(function(){
        $("#chatBTN").click(function(){
            var text = $("#inmsg").val();
            var name = $("#inName").val();

            var msg = $("<p></p>").text(text).addClass("chatFunction");
            var msgName = $("<p></p>").text("- " + name).addClass("nameFunction");

            console.log(msg);
            $('#messages').append(msg);
            $('#messages').append(msgName);
        })

    })