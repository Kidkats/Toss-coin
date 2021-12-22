const head = document.querySelector('#container .button .head');
const tail = document.querySelector('#container .button .tail');
const coin = document.querySelector('#container .coin');
const container = document.getElementById('container');

container.addEventListener('click', function(e){
	if(e.target.className == 'head' || e.target.className === 'tail'){

		let a = Math.floor(Math.random()*2 + 1);

		if(a === 1){
			coin.classList.add('animation-head');

			setTimeout(function(){
				coin.classList.remove('animation-head');
			}, 3000);
			
		}else{

			coin.classList.add('animation-tail');

			setTimeout(function(){
				coin.classList.remove('animation-tail');
				coin.style.transform = 'rotateX(180deg)'
			}, 3000);;
		}

		coin.style.transform = 'rotateX(0deg)'

	head.disabled = true;
	tail.disabled = true;

		setTimeout(function(){
			head.disabled = false;
			tail.disabled = false;
		},3000);

	}
});

