let balaozinho = document.querySelector('#balaozinho');
const marcacoes = document.querySelectorAll('.marcacao');

function preencheBalaozinho(marcacao){
	marcacao.addEventListener('mouseover', function(e) {
		let elemento = e.currentTarget;

		balaozinho.innerHTML = `<h2>${elemento.dataset.titulo}</h2><p>${elemento.dataset.conteudo}</p>`;
		balaozinho.style.color = elemento.dataset.cor;
	});

	marcacao.addEventListener('mouseout', function(e) {
		balaozinho.innerHTML = '';
	});

	marcacao.addEventListener('mousemove', function(e) {
		balaozinho.style.left = `${e.pageX}px`;
		balaozinho.style.top = `${e.pageY}px`;
	});
}

for(let m of marcacoes){
	preencheBalaozinho(m);
}