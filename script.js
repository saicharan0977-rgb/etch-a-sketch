const create = document.querySelector(".createGrid");
const container = document.querySelector(".container");
let repNum = 0;
create.addEventListener("click",() =>{


if(repNum>0){
while(container.firstChild){
  container.removeChild(container.firstChild);
}
repNum = 0;
create.textContent = "Create";
}

else{
  let gridData = prompt("Enter a Num between 1-100 : ");
  if(gridData<=100){
for(let i=1;i<=(gridData*gridData);i++){
const artBox = document.createElement("div");
artBox.dataset.opacity = '0';
artBox.classList.add("color");
artBox.style.cssText = `height: ${1000/gridData}px ; width: ${1000/gridData}px`;
container.appendChild(artBox);
repNum++;
create.textContent = 'Clear';
}
}
else{
  alert("My dear friend dont overload this with more than 100 divs")
}
}
});

function colg(num){
  if(num<100){
   num = num+10;
   return num;
  }
  else{
   let  num1 = 100;
    return num1 ;
  }
}
function Random(numb){
  return Math.floor(numb*Math.random());
}

container.addEventListener("mouseover",(e)=>{

  if(repNum>0){
  
/*e.target.classList.add("black");*/
const rndCol = `rgb(${Random(255)} ,${Random(255)} ,${Random(255)})`;
e.target.style.backgroundColor = rndCol;
/*let rndool= +(e.target.dataset.opacity) ;
const rndCol = `rgba( 0, 0 ,0 ,${colg(rndool)}%)`;
e.target.style.backgroundColor = rndCol;
if(rndool<100){
e.target.dataset.opacity =(rndool+10).toString();
}
else{
  e.target.dataset.opacity =(rndool).toString();
}
  */
  }
});
