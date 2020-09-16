// debugger;
function toggleClass(e, className){
	if (e.className.indexOf(className) !== -1){
		e.className = e.className.replace(className,'');
	}
	else{
		e.className = e.className.replace(`/\s+/g`,' ') + ' ' + className;
	}
	
	return e;
}

function toggleDisplay(e){
	const curDisplayStyle = e.style.display;			
				
	if (curDisplayStyle === 'none' || curDisplayStyle === ''){
		e.style.display = 'block';
	}
	else{
		e.style.display = 'none';
	}
}

function toggleMenuDisplay(e){
	const dropdown = e.currentTarget.parentNode;
	const menu = dropdown.querySelector('.menu-dropdown');
    const menuIcon = dropdown.querySelector('#menu-svg');
    const closeIcon = dropdown.querySelector('#close-svg')
    const title = dropdown.querySelector('.title')
    console.log('clicked')
    toggleClass(menu,'hide');
    toggleClass(closeIcon,'bring-to-front')
    toggleClass(title, 'send-to-back')
	toggleClass(menuIcon,'hide');
}

const menuButton = document.querySelector('.dropdown');
const dropdownOptions = document.querySelectorAll('.dropdown .menu-dropdown .dropdown-bullets');

menuButton.addEventListener('click', toggleMenuDisplay);