const playersBox = document.getElementById("playersBox");
const startButton = document.getElementById("start");
const svgShape = document.querySelector(".shape");
const scoreInfo = document.querySelector(".score");
const victoryModal = document.getElementById("victoryModal");
const winner = document.getElementById("winner");
const modalInstance = new bootstrap.Modal(victoryModal);
let round = 1

function getPlayersData(){ 
  const data = JSON.parse(localStorage.getItem("playersData"));
  return data;
}

function playerOrder(){
  const data = JSON.parse(localStorage.getItem("orderOfPlayer"));
  return data;
}

function getTotalPlayer() {
  const data = JSON.parse(localStorage.getItem("totalPlayer"))
  return data;
}


let parsedTotalPlayer = JSON.parse(existingDataTP);
let parsedPlayerData = JSON.parse(existingDataKey)

playersBox.innerHTML = createBox(parsedTotalPlayer, parsedPlayerData);


function createBox(totalPlayer, playerData) {
  let playerDivs= ''
  for(let i=0; i<totalPlayer; i++){
    let string = ``;
    if(i == playerOrder()){
      string = `<div class="player-card active" ><i class="fas fa-user"></i><div>${playerData[i].name}</div><div>POINT: ${playerData[i].point}</div><i class="fas fa-chevron-right"></i></div>`
    }else{
      string = `<div class="player-card" ><i class="fas fa-user"></i><div>${playerData[i].name}</div><div>POINT: ${playerData[i].point}</div><i class="fas fa-chevron-right"></i></div>`

    }
    
  playerDivs += string; 
  }
  
  return playerDivs;
}

function editBox(totalPlayer, playerData, numberOrder) {
  let playerDivs= ''
  
  for(let i=0; i<totalPlayer; i++){
    let string = ``;
    if(i == numberOrder){
      string = `<div class="player-card active" ><i class="fas fa-user"></i><div>${playerData[i].name}</div><div>POINT: ${playerData[i].point}</div><i class="fas fa-chevron-right"></i></div>`
    }else{
      string = `<div class="player-card" ><i class="fas fa-user"></i><div>${playerData[i].name}</div><div>POINT: ${playerData[i].point}</div><i class="fas fa-chevron-right"></i></div>`

    }
    
  playerDivs += string; 
  }
  
  return playerDivs;
}


startButton.addEventListener('click', function() {
    round += 1;
    const randomShape = getRandomChoice(shapes);
    const playersData = getPlayersData(); 
    console.log("Pilihan Acak:", randomShape);
    spin();
    setTimeout(function() {
      svgShape.innerHTML = randomShape.svg;
      
      let playersCard = Array.from(document.querySelectorAll("player-card"));

      scoreInfo.innerHTML = `${playersData[playerOrder()].name} +${randomShape.plus}`;
      
      editPlayerPoint(playerOrder(), Number(randomShape.plus))

      order(playerOrder());
      
      playersBox.innerHTML = createBox(getTotalPlayer(), getPlayersData())
      
      if(round == 6*getTotalPlayer()){
        winner.innerHTML = `${whoIsWin(getTotalPlayer(), getPlayersData())}`
        modalInstance.show();
        resetScore(getTotalPlayer(), getPlayersData());
        round = 1;
      }


    }, 1000);
  })




function activateDivPlayer(index) {
  const playerCardArr = Array.from(document.querySelectorAll(".player-card"));
  playerCardArr[index].classList.add("active")
}

function disableDivPlayer(index) {
  const playerCardArr = Array.from(document.querySelectorAll(".player-card"));

  playerCardArr[index].classList.remove("active")
}

function order(orderNumber) {
  if(orderNumber == parsedTotalPlayer-1){
    localStorage.setItem("orderOfPlayer", `0`);
  } else {
    localStorage.setItem("orderOfPlayer", `${playerOrder() +1}`);
  }
  
}

function editPlayerPoint(index, point) {
  let data = JSON.parse(localStorage.getItem("playersData"));
  
  let score = data[index].point ;
  score = Number(score) + point;
  
  data[index].point = score;
  
  localStorage.setItem("playersData", JSON.stringify(data))
}

function resetScore(totalPlayer ,playersData) {
  let data = playersData;
  for(let i=0; i<totalPlayer; i++){
    data[i].point = "0"
  }
  localStorage.setItem("playersData", JSON.stringify(data));
}

function whoIsWin(totalPlayer, playersData) {
  let data = playersData;
  const playersPoint = [];
  for(let i=0; i<totalPlayer; i++){
    let score = Number(data[i].point)
    playersPoint.push(score);
  }
  
  const maxPoint = Math.max(...playersPoint);
  let indexOfMaxPoint = playersPoint.findIndex(num => num == maxPoint);
  
  const winner = data[indexOfMaxPoint].name;
  return winner;
}
