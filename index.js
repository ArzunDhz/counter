const date= "15 Oct 2021";


const  secid = document.getElementById("sec")


const  minid = document.getElementById("min")


const  hourid = document.getElementById("hour")


const  daysid = document.getElementById("day")








console.log(secid);






function countdown(){
    const newYear = new Date(date);
    const currentDate = new Date();
   const miliSec = newYear-currentDate;
   const tsec = Math.floor(miliSec/1000);
   
   
   
   const sec = Math.floor(tsec%60);
   const min = Math.floor((tsec/60)%60);
   const hour= Math.floor((tsec/3600)%24);
   const days = Math.floor((tsec/3600)/24);

    console.log(sec,min,hour,days);

  secid.innerHTML = sec ;
  minid.innerHTML = min ; 
  hourid.innerHTML = min;
  daysid.innerHTML = days; 















}




countdown();


setInterval(countdown,1000)