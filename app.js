//update the energy slider when it moves
const slider = document.getElementById('energy');
const energyLevelDisplay = document.getElementById('energy-level-display');

slider.addEventListener('input', () => {
    energyLevelDisplay.textContent = `Energy Level: ${slider.value}/5`;
})

//toggle visibility of additional mood buttons:

const moreMoodsDiv = document.querySelector('#more-moods');
const expandBtn = document.querySelector('.expand-button')
const collapseBtn = document.querySelector('.collapse-button');

expandBtn.addEventListener('click', () => {
    moreMoodsDiv.classList.remove('hidden');
    expandBtn.classList.add('hidden');
});

collapseBtn.addEventListener('click', () => {
    moreMoodsDiv.classList.add('hidden');
    expandBtn.classList.remove('hidden');
});