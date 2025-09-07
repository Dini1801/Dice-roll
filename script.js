const diceFaces = ["⚀","⚁","⚂","⚃","⚄","⚅"];

function rollDice() {
  const dice1 = document.getElementById("dice1");
  const dice2 = document.getElementById("dice2");
  const result = document.getElementById("result");

  
  dice1.classList.add("roll");
  dice2.classList.add("roll");

  setTimeout(() => {
    dice1.classList.remove("roll");
    dice2.classList.remove("roll");

    const roll1 = Math.floor(Math.random() * 6);
    const roll2 = Math.floor(Math.random() * 6);

    dice1.textContent = diceFaces[roll1];
    dice2.textContent = diceFaces[roll2];

    if (roll1 > roll2) {
      result.textContent = "🎉 Player 1 Wins!";
    } else if (roll2 > roll1) {
      result.textContent = "🎉 Player 2 Wins!";
    } else {
      result.textContent = "🤝 It's a Draw!";
    }
  }, 300); 
}

document.getElementById("rollBtn").addEventListener("click", rollDice);
