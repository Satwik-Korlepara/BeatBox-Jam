var n = document.querySelectorAll(".drum").length;

for (var i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        handle(this.innerHTML);
        ani(this.innerHTML);
    });
}
document.addEventListener("keydown",function(event)
{ 
    handle(event.key);
    ani(event.key);
}
);
function handle(buttonInnerHTML) {
    var audio;
    switch(buttonInnerHTML) {
        case 'w':
            audio = new Audio('sounds/crash.mp3');
            break;
        case 'a':
            audio = new Audio('sounds/kick-bass.mp3');
            break;
        case 's':
            audio = new Audio('sounds/snare.mp3');
            break;
        case 'd':
            audio = new Audio('sounds/tom-1.mp3');
            break;
        case 'j':
            audio = new Audio('sounds/tom-2.mp3');
            break;
        case 'k':
            audio = new Audio('sounds/tom-3.mp3');
            break;
        case 'l':
            audio = new Audio('sounds/tom-4.mp3');
            break;
        default:
            console.log("Invalid button pressed");
            return;
    }
    audio.play();
}
function ani(b)
{
    var a=document.querySelector("."+b);
    a.classList.add("pressed");
    setTimeout(function()
    {
        a.classList.remove("pressed");
    },100);
}
