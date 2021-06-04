let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0;

let mouseYStartPoint = 0;
let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;

let pupil = document.getElementsByClassName("pupil");
// console.log(pupil);
let pupilArr = Array.from(pupil);

let pupilStartPoint = -42.5;
let pupilRange = 85;

const mouseMove = (e)  => {
    currentXPosition = e.clientX;
    fracXValue = currentXPosition/mouseXEndPoint;
    // console.log(`The X Axis Value is : ${fracXValue}`);

    currentYPosition = e.clientY;
    fracYValue = currentYPosition/mouseYEndPoint;
    // console.log(`The Y Axis Value is : ${fracYValue}`);


    let pupilXCurrentPosition = pupilStartPoint +(fracXValue*pupilRange);
    let pupilYCurrentPosition = pupilStartPoint +(fracYValue*pupilRange);

    pupilArr.forEach((curPupil) =>{
        curPupil.style.transform = `translate(${pupilXCurrentPosition}px,${pupilYCurrentPosition}px)`
    })


}

const windowResize = (e) =>{
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
    

}

window.addEventListener("mousemove", mouseMove);
window.addEventListener("resize", windowResize);


