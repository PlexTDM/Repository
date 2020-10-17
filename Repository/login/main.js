document.getElementById('login').addEventListener('click',()=>{
	let username = document.getElementById('username').value;
	let password = parseInt(document.getElementById('password').value);
	if (username === 'tengis' && password === 1234) {
		window.location = '../All in 1/index.html';
	}else{
		alert('buruu')
	}
})