$(document).ready(function(){
$(".abut1").click(function(){
$(".hi1").slideDown(1000);
});

$(".abut2").click(function(){
$(".hi2").slideDown(1000);
});

$(".abut3").click(function(){
alert("Successfully Payment");

});


$("h1").slideDown(1000);
$(".new").slideDown(1000);
$(".new-p").show(1000);
$('#submit').click(function(){
    $(".two").slideDown(1000,function(){
        $("p").slideDown(2000,function(){
            $(".form-two").slideDown(3000,function(){
                $('#ll').show(1000,function(){
                    $("textarea").show(1000,function(){
                        $('#send-data').show(1000,function(){

                        });
                    });
                });
            });
        });
    });
});
 
 $('#remove').click(function(){
    $(".two").hide(1000);
 });
 $('#send').click(function(){
    alert("Successfully Send");
 });
 $('#send-data').click(function(){
    alert("Successfully Send");
 });
 $('#submit-two').click(function(){
    $('#your-id').show(1000,function(){
        $(".two").show(1000,function(){
            $(".two").show(1000,function(){
                $("p").slideDown(2000,function(){
                $(".form-two").show(1000,function(){
        $('#apointment').show(2000);
    });
});
});
});
});
});
});