const block = document.createElement('div');
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
block.style.backgroundColor = 'lightblue';
block.style.color = 'darkblue';
block.style.fontSize = '20px';
block.textContent = 'Цей блок створений на JavaScript';
document.body.appendChild(block);
const clonedBlock = block.cloneNode(true);
document.body.appendChild(clonedBlock);