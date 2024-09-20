const colors=["green","red","rgba(133,122200)","#f15025"]

const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click",function()
{
    const randomNumber=rondomchanger();
    console.log(randomNumber);
    color.innerHTML=colors[randomNumber];
    // color.textContent=colors[randomNumber];
    document.body.style.backgroundColor=colors[randomNumber];
});

function rondomchanger()
{
    return Math.floor(Math.random()*colors.length);
}
