const ringElementData = document.getElementById('ring'), 
			parent = ringElementData.parentNode, 
			elementData = document.createElement('output');

let val = null, conic = false;

function update() {
	let newData = +ringElementData.value;

	if(val !== newData) {
		parent.style.setProperty('--val', elementData.value = val = newData);
	}
};

update();

elementData.setAttribute('for', ringElementData.id);
parent.appendChild(elementData);

if(getComputedStyle(elementData).backgroundImage !== 'none') {
	conic = true;
    parent.classList.add('full');
}

addEventListener('input', update, false);
addEventListener('change', update, false);