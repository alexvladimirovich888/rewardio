// REWARDIO — sketch style
const rewards = [
  "You gained +10% trade intuition!",
  "Your stop losses are now 30% faster.",
  "You unlocked 'Runner's Luck'.",
  "Chart patterns whisper their secrets to you.",
  "A candle smiled at you. It means profit.",
  "Invisible success aura activated!"
];

const claimBtn = document.getElementById('claimBtn');
const rewardArea = document.getElementById('rewardArea');
const rewardText = document.getElementById('rewardText');

claimBtn.addEventListener('click', () => {
  const reward = rewards[Math.floor(Math.random() * rewards.length)];
  rewardText.textContent = reward;
  rewardArea.classList.remove('hidden');
});
