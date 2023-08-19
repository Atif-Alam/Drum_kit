// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick(){
//     alert("I got clicked");
// }

// it can also be made anonymus function like 
// document.querySelector("button").addEventListener("click", function(){
//      alert("I got clicked");
// });

// document.querySelectorAll("button")[0].addEventListener("click", handleClick);
// document.querySelectorAll("button")[1].addEventListener("click", handleClick);
// document.querySelectorAll("button")[2].addEventListener("click", handleClick);
// document.querySelectorAll("button")[3].addEventListener("click", handleClick);
// document.querySelectorAll("button")[4].addEventListener("click", handleClick);
// document.querySelectorAll("button")[5].addEventListener("click", handleClick);
// document.querySelectorAll("button")[6].addEventListener("click", handleClick);
// an easy way of doing this is to use loop!!!

var noOfButtons=document.querySelectorAll(".drum").length;

function playMusic(character){
    switch (character) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            
            break;

        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

            
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break; 
            
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

    
        default:console.log(buttonInnerHTML);
            break;
    }
}

// for detecting mouse clicks
for(var i=0; i<noOfButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML=this.innerHTML;
        // console.log(buttonInnerHTML);
        playMusic(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// for detecting keyboard presses
document.addEventListener("keydown",function(event){
    // console.log(event);
    playMusic(event.key);
    buttonAnimation(event.key);

});

function buttonAnimation(key){
    var className="."+key;
    var activeButton=document.querySelector(className);
    activeButton.classList.add("pressed");
    

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}



// var audio=new Audio("sounds/tom-1.mp3");
//         audio.play();
