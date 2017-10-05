var loader = new THREE.TextureLoader();

function getTexture(path){
	var texture = loader.load(path);
	texture.wrapT = texture.wrapS = THREE.RepeatWrapping;

	return texture;
}

var ImageData = {
	'sardines' : {
		'texture' : getTexture('assets/images/sardines.png'),
		'aspect' : 758/1300,
		'scale' : 9
	},

	'robot' : {
		'texture' : getTexture('assets/images/maciej.png'),
		'aspect' : 581/385,
		'scale' : 5
	}
}

var MORPH_INCREMENT = .05;