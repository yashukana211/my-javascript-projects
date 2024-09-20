const colors=[0,1,2,3,4,5,6,7,8,9,10,"A","B","C","D","E"];

const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click",function()
{    let hexNumber="#";
    for(let i=0;i<6;i++)
    {     
         hexNumber +=colors[rondomchanger()];
    }
    color.innerHTML=hexNumber;
    // color.textContent=colors[randomNumber];
    document.body.style.backgroundColor=hexNumber;
});

function rondomchanger()
{
    return Math.floor(Math.random()*colors.length);
}
