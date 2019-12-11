document.addEventListener("DOMContentLoaded",function(){
 	var menu = document.querySelectorAll('.navbar.navbar-fixed-top');
 	var vitri = "duoi200"
 	window.addEventListener("scroll",function(){
 		if (window.pageYOffset > 200){
 			if (vitri == "duoi200"){
 				vitri = "tren200";
 				menu[0].classList.add('menutrang');
 			}
 			
 		}
 		else if(window.pageYOffset <= 200){
 			if(vitri == "tren200"){
 				vitri = "duoi200";
 				menu[0].classList.remove('menutrang');
 			}
 		}
 	},false)
 },false)