import './Ball.css'

// import { useState } from 'react'

function Ball() {

const fieldWidth = 500
const fieldHeight = 300

const ballSize = 100

const xMax = fieldWidth - ballSize - 5
const yMax = fieldHeight - ballSize - 5

const xVelocity = 5 
const yVelocity = 5

const ball = document.getElementById('ball')
const none = document.getElementById('none')
const basketball = document.getElementById('basketball')
const football = document.getElementById('football')
const volleyball = document.getElementById('volleyball')
const human = document.getElementById('human')
const cartoon = document.getElementById('cartoon')
const logo = document.getElementById('logo')

let running = true
let goRight = true 
let goDown = true 

let x = 330
let y = 180
let ballRotation = 40

function clearClasses() {
    none.classList.remove('btn-dark')
    basketball.classList.remove('btn-primary')
    football.classList.remove('btn-primary')
    volleyball.classList.remove('btn-primary')
    human.classList.remove('btn-primary')
    cartoon.classList.remove('btn-primary')
    logo.classList.remove('btn-primary')
}

function addClasses() {
    none.classList.add('btn-outline-dark')
    basketball.classList.add('btn-outline-primary')
    football.classList.add('btn-outline-primary')
    volleyball.classList.add('btn-outline-primary')
    human.classList.add('btn-outline-primary')
    cartoon.classList.add('btn-outline-primary')
    logo.classList.add('btn-outline-primary')
}

function runClick() {
    running = !running 
    render()
}

// function noneClick() {
//     ball.style.backgroundImage = 'none'
//     clearClasses()
//     addClasses()
//     none.classList.add('btn-dark')
//     none.classList.remove('btn-outline-dark')
// }

// function basketballClick() {
//     ball.style.backgroundImage = 'url("./img/basketball.png")'
//     clearClasses()
//     addClasses()
//     basketball.classList.add('btn-primary')
//     basketball.classList.remove('btn-outline-primary')
// }

// function footballClick() {
//     ball.style.backgroundImage = 'url("./img/football.png")'
//     clearClasses()
//     addClasses()
//     football.classList.add('btn-primary')
//     football.classList.remove('btn-outline-primary')
// }

// function volleyballClick() {
//     ball.style.backgroundImage = 'url("./img/volleyball.png")'
//     clearClasses()
//     addClasses()
//     volleyball.classList.add('btn-primary')
//     volleyball.classList.remove('btn-outline-primary')
// }

// function humanClick() {
//     ball.style.backgroundImage = 'url("./img/human.png")'
//     clearClasses()
//     addClasses()
//     human.classList.add('btn-primary')
//     human.classList.remove('btn-outline-primary')
// }

// function cartoonClick() {
//     ball.style.backgroundImage = 'url("./img/cartoon.png")'
//     clearClasses()
//     addClasses()
//     cartoon.classList.add('btn-primary')
//     cartoon.classList.remove('btn-outline-primary')
// }

// function logoClick() {
//     ball.style.backgroundImage = 'url("./img/logo.png")'
//     clearClasses()
//     addClasses()
//     logo.classList.add('btn-primary')
//     logo.classList.remove('btn-outline-primary')
// }

function calculate() {
    if (goRight === true) {
        x = x + xVelocity;
        if (x >= xMax) {
        goRight = false
        }
        ballRotation = ballRotation + 3
    }
    else {
        x = x - xVelocity;
        if (x <= 0) {
        goRight = true
        }
        ballRotation = ballRotation - 5
    }
    if (goDown === true) {
        y = y + yVelocity;
        if (y >= yMax) {
        goDown = false
        }
        ballRotation = ballRotation + 4
    }
    else {
        y = y - yVelocity;
        if (y <= 0) {
        goDown = true
        }
        ballRotation = ballRotation - 6
    }
}

function render() {
    const runBtn = document.getElementById('run')
    if (running) {
        runBtn.innerHTML = '<span className="bi bi-pause"></span>&nbsp;PAUSE'
        runBtn.classList.remove('btn-success')
        runBtn.classList.add('btn-danger')
    } 
    else {
        runBtn.innerHTML = '<span className="bi bi-play">&nbsp;RUN</span>'
        runBtn.classList.remove('btn-danger')
        runBtn.classList.add('btn-success')
    }
    document.getElementById('ball').style.left = x + 'px'
    document.getElementById('ball').style.top = y + 'px'

    document.getElementById('ball').style.transform = 'rotate(' + ballRotation + 'deg)'
}

function process() {
    if (running) {
        calculate()
        render()
    }
}

setInterval(process, 35)

    return (
        <div className="Ball">
            <div className='container'></div>
            <div id="field">
            <div id="ball" className="ball"></div>
        </div>
        <div id="control">
            <button id="run" className="btn btn-success" onClick={runClick}><span className="bi bi-play">&nbsp;RUN</span></button>
            {/* <button id="none" className="btn btn-dark" onClick={noneClick}>NONE</button>
            <button id="basketball" className="btn btn-outline-primary" onClick={basketballClick}>Basketball</button>
            <button id="football" className="btn btn-outline-primary" onClick={footballClick}>Football</button>
            <button id="volleyball" className="btn btn-outline-primary" onClick={volleyballClick}>Volleyball</button>
            <button id="human" className="btn btn-outline-primary" onClick={humanClick}>Human</button>
            <button id="cartoon" className="btn btn-outline-primary" onClick={cartoonClick}>Cartoon</button>
            <button id="logo" className="btn btn-outline-primary" onClick={logoClick}>Logo</button> */}
        </div>
        </div>
    )
}

export default Ball