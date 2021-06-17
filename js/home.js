var icnbar =document.getElementById("iconitem");
var close = document.getElementById("close");
var listitem=document.querySelector(".list");
var links = document.querySelectorAll(".linkitem");
// show navbar

var ajax= new XMLHttpRequest();

var data=[];
var catagory= "health";

 for(var x =0; x < links.length; x++){
     links[x].addEventListener("click",function(e){
     catagory= e.target.text;
     showData(catagory);
    
     });
 }

showData(catagory);
function showData(catagory){
    ajax.open("GET",""+catagory+".json");
    ajax.send();
    ajax.onreadystatechange= function(){
        if(ajax.readyState == 4 && ajax.status == 200){
            data= JSON.parse(ajax.response).articles;
         display();
    }
}
}
  function display(){
    var rs='';
    for(var i =0; i< data.length; i++){
    
        rs+=`<div class="item" >
        <img src="${data[i].urlToImage}" id="img-${i}">
        <h3>${data[i].title}</h3>
        <p>${data[i].description}</p>
        <p class="time">${data[i].publishedAt}</p>
        </div>`
    }
document.getElementById("row").innerHTML=rs;
  }
     

     icnbar.addEventListener("click",showList)
     function showList(){
         listitem.style.top="0";
     }
     close.addEventListener("click",hideList)
     
     function hideList(){
         listitem.style.top="-350px";
     }
     var links = document.querySelectorAll(".linkitem");


   





 




  




 






