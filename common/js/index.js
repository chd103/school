//$(document).ready(function(){
//  /*自制的小屏下拉菜单*/
//  $("#menu-open").click(function(){
//		$("#menu").toggleClass("none");
////		$("#menu").slideToggle("slow");
//	});  
//});
$(document).ready(function(){
    /*自制的小屏下拉菜单*/
    $("#toggle").click(function(){
//		$("#menu").toggleClass("none");
		$("#navbar").slideToggle("slow");
	});  
	var btn=document.getElementById("btn");//按钮
      btn.onclick=function(){
	      if(btn.innerHTML=="查看更多 +"){
	      	$(".over").css("display","block");
	      	btn.innerHTML="关闭 x";
	      }else{
	      	$(".over").css("display","none");
	      	btn.innerHTML="查看更多 +";
	      }
      }
	var btn2=document.getElementById("btn2");//按钮
      btn2.onclick=function(){
	      if(btn2.innerHTML=="查看更多 +"){
	      	$(".over2").css("display","block");
	      	btn2.innerHTML="关闭 x";
	      }else{
	      	$(".over2").css("display","none");
	      	btn2.innerHTML="查看更多 +";
	      }
      }
      var btn3=document.getElementById("btn3");//按钮
      btn3.onclick=function(){
	      if(btn3.innerHTML=="查看更多 +"){
	      	$(".over3").css("display","block");
	      	btn3.innerHTML="关闭 x";
	      }else{
	      	$(".over3").css("display","none");
	      	btn3.innerHTML="查看更多 +";
	      }
      }
      var btn4=document.getElementById("btn4");//按钮
      btn4.onclick=function(){
	      if(btn4.innerHTML=="查看更多 +"){
	      	$(".over4").css("display","block");
	      	btn4.innerHTML="关闭 x";
	      }else{
	      	$(".over4").css("display","none");
	      	btn4.innerHTML="查看更多 +";
	      }
      }
});
