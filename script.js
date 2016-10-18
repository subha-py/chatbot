var username=""
function send_message(message){
    var prevState = $("#container").html()
                if (prevState.length>3){
                    prevState=prevState+"<br>"
                }
    $("#container").html(prevState+"<span class=currentMessage>"+"<span class='bot'>ChatBot: </span>"+message+"</span")
    $(".currentMessage").hide()
    $(".currentMessage").delay(500).fadeIn()
    $(".currentMessage").removeClass("currentMessage")
}
function get_username(){
            $("#container").html("<span class='bot'>ChatBot: </span>Hello,what is your name?");
        }
function ai(message){
    if (username.length<3){
        username=message
        send_message("Hi, "+username+", how are you doing?")
    }
    if (message.indexOf("How are you")>=0){
        send_message("Thanks for asking, I am doing fine")
    }
    if (message.indexOf("time")>=0){
        var date=new Date()
        var h=date.getHours()
        var m=date.getMinutes()
        send_message("The time is : "+h+":"+m)
    }

}
        $(function(){

            get_username();

            $("#textbox").keypress(function(event){
                if (event.which==13){
                    if ($("#enter").prop("checked")){
                        $("#send").click()
                        event.preventDefault()
                    }
                }

            });
            $("#send").click(function(){
                var username="<span class=username>You: </span>"
                var newMessage =  $("#textbox").val()
                $("#textbox").val("")
                var prevState = $("#container").html()
                if (prevState.length>3){
                    prevState=prevState+"<br>"
                }
                $("#container").html(prevState+username+newMessage)
                $("#container").scrollTop($("#container").prop("scrollHeight"))
                ai(newMessage)
            });
        });