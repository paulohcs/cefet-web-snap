/* Exercício 0 */

let ocultarMarcacoes = document.querySelector('#visibilidade-das-marcacoes');

ocultarMarcacoes.addEventListener('change', function(e) {
	let marcado = ocultarMarcacoes.checked;

	if(marcado){
		let marcacaoAncestral = document.querySelector('body');
		marcacaoAncestral.classList.add('marcacoes-ocultas');
	} else {
		let marcacao = document.querySelector('.marcacoes-ocultas');
		marcacao.classList.remove('marcacoes-ocultas');
	}
});

/* Exercício 2 */

//let marcacoes = document.querySelectorAll('.marcacao');

function preencherControles(marcacao){
	marcacao.addEventListener('click', function(e) {
		for(let m of marcacoes){
			m.classList.remove('selecionada');
		}
		marcacao.classList.add('selecionada');

		let valorX = document.querySelector('#x-da-marcacao');
		let valorY = document.querySelector('#y-da-marcacao');
		let valorLargura = document.querySelector('#largura-da-marcacao');
		let valorAltura = document.querySelector('#altura-da-marcacao');
		let valorTitulo = document.querySelector('#titulo-da-marcacao');
		let valorConteudo = document.querySelector('#conteudo-da-marcacao');
		let corTexto = document.querySelector('#cor-da-marcacao');

		valorX.value = parseInt(e.currentTarget.style.left);
		valorY.value = parseInt(e.currentTarget.style.top);
		valorLargura.value = parseInt(e.currentTarget.style.width);
		valorAltura.value = parseInt(e.currentTarget.style.height);
		valorTitulo.value = e.currentTarget.dataset.titulo;
		valorConteudo.value = e.currentTarget.dataset.conteudo;
		corTexto.value = e.currentTarget.dataset.cor;

		if(marcacao.classList.contains('formato-oval')){
			document.querySelector('input[type=radio][value=formato-oval]').checked = true;
		} else {
			document.querySelector('input[type=radio][value=formato-retangular]').checked = true;
		}
	});
}

for(let m of marcacoes){
	preencherControles(m);
}

/* Exercício 3 */

let inputs = document.querySelectorAll('input[type=number],input[type=text],input[type=color],input[type=radio],textarea');

function atualizaMarcacao(marcacaoEl){
	marcacaoEl.addEventListener('change', function(e){
		let marcacaoSelecionada = document.querySelector('.marcacao.selecionada');
		let input = e.currentTarget;

		switch(input.id){
			case 'x-da-marcacao':
				marcacaoSelecionada.style.left = `${input.value}px`;
				break;
			case 'y-da-marcacao':
				marcacaoSelecionada.style.top = `${input.value}px`;
				break;
			case 'largura-da-marcacao':
				marcacaoSelecionada.style.width = `${input.value}px`;
				break;
			case 'altura-da-marcacao':
				marcacaoSelecionada.style.height = `${input.value}px`;
				break;
			case 'titulo-da-marcacao':
				marcacaoSelecionada.dataset.titulo = input.value;
				break;
			case 'conteudo-da-marcacao':
				marcacaoSelecionada.dataset.conteudo = input.value;
				break;
			case 'cor-da-marcacao':
				marcacaoSelecionada.dataset.cor = input.value;
				break;
		}
		if(input.value ==='formato-oval'){
			marcacaoSelecionada.classList.remove('formato-retangular');
			marcacaoSelecionada.classList.add('formato-oval');
		} else if(input.value === 'formato-retangular') {
			marcacaoSelecionada.classList.remove('formato-oval');
			marcacaoSelecionada.classList.add('formato-retangular');
		}
	});
}

for(i of inputs){
	atualizaMarcacao(i);
}