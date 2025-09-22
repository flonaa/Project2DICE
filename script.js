// SVG data untuk setiap sisi dice (URL encoded untuk kompatibilitas lebih baik)
const diceImages = [
  // Dice 1
  "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' rx='10' fill='%23CC3333'/%3E%3Ccircle cx='50' cy='50' r='8' fill='%23FFFFFF'/%3E%3C/svg%3E",
  
  // Dice 2
  "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' rx='10' fill='%23CC3333'/%3E%3Ccircle cx='75' cy='25' r='8' fill='%23FFFFFF'/%3E%3Ccircle cx='25' cy='75' r='8' fill='%23FFFFFF'/%3E%3C/svg%3E",
  
  // Dice 3
  "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' rx='10' fill='%23CC3333'/%3E%3Ccircle cx='75' cy='25' r='8' fill='%23FFFFFF'/%3E%3Ccircle cx='50' cy='50' r='8' fill='%23FFFFFF'/%3E%3Ccircle cx='25' cy='75' r='8' fill='%23FFFFFF'/%3E%3C/svg%3E",
  
  // Dice 4
  "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' rx='10' fill='%23CC3333'/%3E%3Ccircle cx='25' cy='25' r='8' fill='%23FFFFFF'/%3E%3Ccircle cx='75' cy='25' r='8' fill='%23FFFFFF'/%3E%3Ccircle cx='25' cy='75' r='8' fill='%23FFFFFF'/%3E%3Ccircle cx='75' cy='75' r='8' fill='%23FFFFFF'/%3E%3C/svg%3E",
  
  // Dice 5
  "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' rx='10' fill='%23CC3333'/%3E%3Ccircle cx='25' cy='25' r='8' fill='%23FFFFFF'/%3E%3Ccircle cx='75' cy='25' r='8' fill='%23FFFFFF'/%3E%3Ccircle cx='50' cy='50' r='8' fill='%23FFFFFF'/%3E%3Ccircle cx='25' cy='75' r='8' fill='%23FFFFFF'/%3E%3Ccircle cx='75' cy='75' r='8' fill='%23FFFFFF'/%3E%3C/svg%3E",
  
  // Dice 6
  "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' rx='10' fill='%23CC3333'/%3E%3Ccircle cx='25' cy='20' r='8' fill='%23FFFFFF'/%3E%3Ccircle cx='75' cy='20' r='8' fill='%23FFFFFF'/%3E%3Ccircle cx='25' cy='50' r='8' fill='%23FFFFFF'/%3E%3Ccircle cx='75' cy='50' r='8' fill='%23FFFFFF'/%3E%3Ccircle cx='25' cy='80' r='8' fill='%23FFFFFF'/%3E%3Ccircle cx='75' cy='80' r='8' fill='%23FFFFFF'/%3E%3C/svg%3E"
];

function rollDice() {
  // Generate random numbers untuk kedua pemain (1-6)
  const player1Roll = Math.floor(Math.random() * 6) + 1;
  const player2Roll = Math.floor(Math.random() * 6) + 1;
  
  // Update gambar dice dengan error handling
  const img1 = document.querySelector('.img1');
  const img2 = document.querySelector('.img2');
  
  if (img1 && img2) {

    img1.onerror = function() {
      console.error('Error loading dice image 1');
      this.src = diceImages[0]; // fallback ke dice 1
    };
    
    img2.onerror = function() {
      console.error('Error loading dice image 2');
      this.src = diceImages[0]; // fallback ke dice 1
    };
    
    img1.src = diceImages[player1Roll - 1];
    img2.src = diceImages[player2Roll - 1];
  }
  
  document.getElementById('result').innerHTML = `Player 1: ${player1Roll} | Player 2: ${player2Roll}`;
  
  let winnerMessage = "";
  if (player1Roll > player2Roll) {
    winnerMessage = "🏆 Player 1 Menang! 🏆";
  } else if (player2Roll > player1Roll) {
    winnerMessage = "🏆 Player 2 Menang! 🏆";
  } else {
    winnerMessage = "🤝 SERI! 🤝";
  }
  
  showWinnerNotification(winnerMessage);
}

function showWinnerNotification(message) {
  const notification = document.getElementById('winnerNotification');
  const winnerText = document.getElementById('winnerText');
  
  winnerText.textContent = message;
  
  notification.classList.remove('show');
  
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);
  
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
}