//document.getElementById('main').innerHTML='hello world!';
//document.getElementById('main').innerText='hello world!';
let click=document.querySelector('.main');
let clicks=()=>
{
if( click.style.backgroundColor!=='red')
{
 click.style.color='white';
 click.style.backgroundColor='red';
}
else{
    click.style.color='green';
}};
click.addEventListener('click',clicks);