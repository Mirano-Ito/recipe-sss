const baseQuantities = {
    eggs: 1.0,
    milk: 200,
    nira: 1.0 
};

function updateResults() {
    const numPeople = document.getElementById('numPeople').value;
    const multiplier = numPeople ? (numPeople / 2) : 1; 

    const eggs = baseQuantities.eggs * multiplier;
    const milk = baseQuantities.milk * multiplier;
    const nira = baseQuantities.nira * multiplier;

    document.getElementById('eggDisplay').innerText = `卵: ${eggs.toFixed(1.0)}個`;
    document.getElementById('milkDisplay').innerText = `牛乳: ${milk.toFixed(0)}ml`;
    document.getElementById('niraDisplay').innerText = `ニラ: ${nira.toFixed(1)}束`;
}

const element = document.getElementById('add-box'); 
if (eggs % 1 !== 0) { 
    element.style.display = 'block'; 
} else {
    element.style.display = 'none'; 
}


document.getElementById('numPeople').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        updateResults();
    }
});

document.getElementById('calculateBtn').addEventListener('click', updateResults);
