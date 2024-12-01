const key = "playersData";
const totalPlayer = "totalPlayer";
const order = "orderOfPlayer";

const existingDataKey = localStorage.getItem(key);

const existingDataTP = localStorage.getItem(totalPlayer);

const existingDataOrder = localStorage.getItem(order)


if(existingDataKey == null || existingDataTP == null || existingDataOrder == null){
  const defaultData = [
      {id: 1, name: 'Player 1', point: 0},
      {id: 2, name: 'Player 2', point: 0},
      {id: 3, name: 'Player 3', point: 0},
      {id: 4, name: 'Player 4', point: 0},
      {id: 5, name: 'Player 5', point: 0},
  ];
  
  
  
  localStorage.setItem(key, JSON.stringify(defaultData));
  
  // default player 
  localStorage.setItem(totalPlayer, "5");
  localStorage.setItem(order, "0");
  
  location.reload(); // refresh page
  console.log('data baru telah dibuat', defaultData);
} else {
  
  const parsedData = JSON.parse(existingDataKey);
  
  console.log('Data sudah ada', parsedData)
}

