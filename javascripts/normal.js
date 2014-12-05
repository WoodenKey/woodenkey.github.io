function displayworking(){
	var item=document.getElementById("working");
	var childa=item.getElementsByTagName("a");
	var childspan=item.getElementsByTagName("span");
	item.setAttribute("style","position:relative;");
	item.onmouseover=function(){	
		childa[0].setAttribute("style","display: none;");
		childspan[0].setAttribute("style","display: block;");
	}
	item.onmouseout=function(){
		childa[0].setAttribute("style","display: block;");
		childspan[0].setAttribute("style","display: none;");
	}
}

function changepic(){
	var header=document.getElementById("header");
	var item=document.getElementById("changepic");
	var picstatus=(!header.style.backgroundImage)?true:flase;
	item.onclick=function(){
		if (picstatus){
			header.style.backgroundImage="url(./images/mine2.jpg)";
			picstatus=false;
		} else{
			header.style.backgroundImage="url(./images/mine.jpg)";
			picstatus=true;
			}
		return false;
		}
}

window.onload=function(){
	displayworking();
	changepic();
}