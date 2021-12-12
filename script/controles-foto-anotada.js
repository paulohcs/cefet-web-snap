let filtroFoto = document.querySelector('#filtro-da-foto');

filtroFoto.addEventListener('change', function(e){
	let imagem = document.querySelector('.foto-anotada > img');
	imagem.style.filter = filtroFoto.value;
});