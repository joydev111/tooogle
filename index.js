let currentcolor ='red';
h1.style.color=currentcolor;
function tooglecolor(){
    if(currentcolor==='red'){
        currentcolor='blue'
    }else{
        currentcolor='red'
    }
    h1.style.color=currentcolor
}