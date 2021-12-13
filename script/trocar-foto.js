const output = document.querySelector('.foto-anotada > img');

if (window.FileList && window.File && window.FileReader) {
	document.querySelector('#imagem').addEventListener('change', event => {
		output.src = '';
		const file = event.target.files[0];
		if (!file.type) {
	  		return;
		}
		if (!file.type.match('image.*')) {
	  		return;
		}
		const reader = new FileReader();
		reader.addEventListener('load', event => {
	  		output.src = event.target.result;
		});
		reader.readAsDataURL(file);
	}); 
}