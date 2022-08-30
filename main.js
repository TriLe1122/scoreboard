let yourScore = 0
let theirScore = 0

let yourScore_div = document.getElementById('yourScore')
let theirScore_div = document.getElementById('theirScore')




function increaseYours2() {
  console.log(yourScore);
  yourScore += 2;
  drawYourScore()
}

function increaseYours3() {
  console.log(3);
  yourScore += 3;
  drawYourScore()
}

function increaseYours4() {
  console.log(4);
  yourScore += 4;
  drawYourScore()
}

function increaseTheirs2() {
  console.log(1);
  theirScore += 2;
  drawTheirScore()
}

function increaseTheirs3() {
  console.log(3);
  theirScore += 3;
  drawTheirScore()
}

function increaseTheirs4() {
  console.log(4);
  theirScore += 4;
  drawTheirScore()
}

// SECTION draw both scores
function drawYourScore() {
  document.getElementById('yourScore').innerHTML = `
  <div> ${yourScore} </div> 
  
  `
}

function drawTheirScore() {
  document.getElementById('theirScore').innerHTML = `
  <div> ${theirScore} </div> 
  
  `
}


function resetScore() {
  yourScore = 0
  theirScore = 0
  drawYourScore()
  drawTheirScore()
}


drawYourScore()
drawTheirScore()