
$(document).ready(function() {
    alert("Bienvenido al sistema de pruebas con tu Dummy.");
    alert("Preciona en el Dummy para ocultarlo. Tranquilo volerá...");
});


$("#caja1").click(function() {
    var version=$().jquery;
    alert("Estas usando la version: " +version+" de JQuery");
    });

$("#caja2").click(function() {
    $("#CajaDummy").hide(500);
});


$("#caja3").click(function() {
    $("#CajaDummy").show("slow");
    });


$("#CajaDummy").click(function() {
    $(this).hide().delay(500).show(1500);
    });


$("#caja4").click(function() {
    $("#CajaDummy").css({'border':'4px solid #b7e5ff','color':'#cc3333','font-weight':'bold','background-color':'#ffffff'});
    });


$("#caja5").click(function(){
        
    $("#CajaDummy").animate({opacity: "0.1", left: "+=400",fontSize:'1em',width: "400"}, 1200)
    .animate({opacity: "0.4", top: "+=160", height: "200", width: "80",fontSize:'0.5em'}, "slow")
    .animate({opacity: "1", left: "0", width: "560"}, "slow")
    .animate({top: "0",width: "560",fontSize:'1.2em'}, "fast")
    .slideUp()
    .slideDown(1800)
    return false;
});


$("#caja6").click(function() {
    $("#CajaDummy").fadeToggle(3000);
    });

 
 $("#caja7").click(function() {
    $("#CajaDummy").fadeIn(3000);
    });


$("#caja8").click(function() {
    $("#CajaDummy").animate({fontSize:'2.4em',width:400,padding:24}, 500);
    });


$("#caja9").click(function() {
    $("#CajaDummy").animate({fontSize:'1.20em',width:200,padding:12}, 500);
    });
