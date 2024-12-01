// Mendapatkan referensi elemen form dan elemen untuk menampilkan data

const maxPlayer = 5;

const submitButton= document.getElementById("submit");
const displayData = document.getElementById("displayData");
const optionSelect = document.getElementById("optionSelect");
const playerDivs = document.querySelectorAll(".player");
const playerDivsArr = Array.from(playerDivs);

const playersName = document.querySelectorAll("#name");
const playersPoint= document.querySelectorAll("#score");

const playersNameArr = Array.from(playersName);
const playersPointArr = Array.from(playersPoint);

const totalPlayer = JSON.parse(localStorage.getItem("totalPlayer"));
const playersData = JSON.parse(localStorage.getItem("playersData"));


optionSelect.value = totalPlayer;

renderBoxPlayer(optionSelect.value);
fillDataToBox(totalPlayer, playersData)

function fillDataToBox(totalPlayer, playerData){
  for(let i=0; i<totalPlayer; i++){
    playersNameArr[i].value = playerData[i].name;
    playersPointArr[i].value = playerData[i].point;

  }
}

function renderBoxPlayer(totalPlayer) {
  for(i=0; i<maxPlayer; i++){
    if(i<totalPlayer){
      playerDivsArr[i].style.display = "";
    } else {
      playerDivsArr[i].style.display = "none";
    }
    
  }
}


// set column of player setting
optionSelect.addEventListener("change", function() {
  renderBoxPlayer(optionSelect.value)
  
});

submitButton.addEventListener("click", saveData);

function saveData(event) {
  event.preventDefault(); // Mencegah reload halaman saat submit
  
  let data = [];

  for(let i=0; i<optionSelect.value; i++){
    data.push({
      id: i+1, 
      name: playersNameArr[i].value, 
      point: playersPointArr[i].value})
    
  }
  localStorage.setItem("playersData", JSON.stringify(data));
  
  localStorage.setItem("totalPlayer", optionSelect.value);
  
  console.log('data berhasil di simpan')
}