const days =["Sun","Mon","Tus","Wen","Thus","Fri","Sat"]
var timer=setInterval(()=>{
	var curent_date =new Date();
	
	if(curent_date.getHours()>12){
		console.log(curent_date.getHours()-12)
		document.querySelector(".hour").innerHTML= curent_date.getHours()-12;	
	}
	else{
		document.querySelector(".hour").innerHTML= curent_date.getHours();	
	}

	document.querySelector(".munites").innerHTML= curent_date.getMinutes();
	document.querySelector(".second").innerHTML= curent_date.getSeconds();
	
	document.querySelector(".day").innerHTML=days[curent_date.getDay()]
	document.querySelector(".today").innerHTML= curent_date.getDate();
	document.querySelector(".month").innerHTML= curent_date.getMonth()+1;
	document.querySelector(".year").innerHTML= curent_date.getFullYear();
	if(curent_date.getHours()>12){
		document.querySelector(".ampm").innerHTML= "PM";
	}
	else{
		document.querySelector(".ampm").innerHTML= "AM";
	}
},1000)

