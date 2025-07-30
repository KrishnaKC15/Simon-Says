//1 is for red
//2 is for teal
//3 is for orange
//4 is for blue


let sequence=[];
let score=0;
let check=false;
let count=0;
let lock =true;
let highScore=0;
let html=document.querySelector('html');
let body=document.querySelector('body');
html.addEventListener("click",function(){
    if(check==false)
    {
        check=true;
        level.innerText=`Level ${score+1}`;
        setTimeout(() => {
            startgame();
        }, 2000);
        
    }
})
// html.addEventListener("keydown",function(event){
//     if(check==false)
//     {
//         check=true;
//         level.innerText=`Level ${score+1}`;
//         setTimeout(() => {
//             console.log("1st")
//             console.log(event.target)
//             startgame();
//         }, 2000);
        
//     }
// })

let redBox=document.querySelector('.red');
let tealBox=document.querySelector('.teal');
let orangeBox=document.querySelector('.orange');
let blueBox=document.querySelector('.blue');
let ans;
let level=document.querySelector('.levels');
let high=document.querySelector('.high');
let info=document.querySelector('.information')
let resetBtn=document.querySelector('.reset');

function startgame(){

    
    let randomNo=Math.ceil(Math.random()*4);
    sequence.push(randomNo);
    
    if(randomNo==1)
        flash(redBox)
    if(randomNo==2)
        flash(tealBox)
    if(randomNo==3)
        flash(orangeBox)
    if(randomNo==4)
        flash(blueBox)
    lock=false
}

function flash(boxName){
    boxName.classList.add('select');
    setTimeout(function(){
    boxName.classList.remove('select');
    },150)

    
}

redBox.addEventListener('click',function(){
    if(check==true &&lock==false)
    {
        ans=1;
        flash(redBox)
        checkans();
    }
})
tealBox.addEventListener('click',function(){
    if(check==true &&lock==false)
    {
        ans=2;
        flash(tealBox)
        checkans();
    }
}
)
orangeBox.addEventListener('click',function(){
    if(check==true &&lock==false)
    {
        ans=3;
        flash(orangeBox)
        checkans();
    }
})
blueBox.addEventListener('click',function(){
    if(check==true &&lock==false)
    {
        ans=4;
        flash(blueBox)
        checkans();
    }
}
)


function checkans(){
    if(ans==sequence[count]&&count==sequence.length-1)
    {
        count=0;
        score++;
        
        lock=true;
        level.innerText=`Level ${score+1}`;
        setTimeout(() => {
            console.log("2nd")
            startgame();
        }, 2000);
    }
    else if(ans==sequence[count])
    {
        count++;
    }
    else if(ans!=sequence[count])
    {
        if(highScore<score)
        {
            highScore=score;
            high.innerText=`High Score: ${highScore}`;
            
        }
            
        ans=0;
        count=0;
        sequence.splice(0,sequence.length);
        body.style.backgroundColor='red';
        lock=true;
        setTimeout(()=>{
            body.style.backgroundColor='white';
        },150);
        level.innerHTML=`<span>Wrong Sequence.</span><br>Your Score was <strong>${score}</strong>.<br>Click anywhere to restart`
        setTimeout(()=>{
            check=false;
        },1)
        
        score=0;
    }
}

resetBtn.addEventListener('click',function(){
    ans=0;
    count=0;
    sequence.splice(0,sequence.length);
    
    lock=true;
    
    level.innerHTML=`Click anywhere to restart`
    
    check=false;
    
    
    score=0;
})