var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	

esquemaNoticia = {
	id: {type: String, required: true, unique: true, trim: true, lowercase: true },
	titulo: {type: String, required: true, unique: true, trim: true, lowercase: true },
	diario: {type: String, required: true},
	texto: {type: String},
	img: {type: String},
	categoria: {type: String},
	fecha: {type: Date}
}

modeloNoticia = Schema(esquemaNoticia),

Noticia = mongoose.model('Noticia', modeloNoticia),

exports.noticia = Noticia;

