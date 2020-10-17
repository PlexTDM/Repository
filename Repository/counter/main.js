function start() {
	let main = document.getElementById('main');
	let input = document.getElementById('input');
	const inertval = setInterval(function(){
		main.innerText = input.value;
		if (input.value == 0){
			clearInterval(inertval)
		}else{input.value--}
	},1000);
};