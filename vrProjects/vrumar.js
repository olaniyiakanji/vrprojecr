const modelEntity = document.querySelector('#model');
const tops = document.querySelector('#tops');
const bottoms = document.querySelector('#bottoms');
const tryOnButton = document.querySelector('#try-on');

// Load the selected model
function loadModel(model) {
	modelEntity.setAttribute('gltf-model', `models/${model}.glb`);
}

// Try on the selected outfit
function tryOn() {
	const top = tops.value;
	const bottom = bottoms.value;
	
	loadModel(`${top}-${bottom}`);
	
	// Display a message to the user
	const message = document.createElement('div');
	message.innerText = `You are trying on a ${top} and ${bottom}.`;
	message.style.position = 'absolute';
	message.style.top = '20px';
	message.style.left = '20px';
	message.style.color = '#4CAF50';
	message.style.fontSize = '24px';
	message.style.fontWeight = 'bold';
	message.style.textShadow = '0 0 5px rgba(0, 0, 0, 0.3)';
	document.body.appendChild(message);
	
	// Remove the message after 3 seconds
	setTimeout(() => {
		document.body.removeChild(message);
	}, 3000);
}

// Add event listeners to the UI controls
tryOnButton.addEventListener('click', tryOn);
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});
