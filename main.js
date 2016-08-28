var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();


var receita = {
	name: 'Limonada',
	maquina: 'Bimby',
	category: '',
	photo: '',
	ingredientes: [
	{
		qty: 2,
		un: 'unidade',
		name: 'limões c/ casca cortados em quartos'
	},{
		qty: 1000,
		un: 'g',
		name: 'água'
	},{
		qty: 100,
		un: 'g',
		name: 'açúcar'
	},{
		qty: -1,
		un: 'unidade',
		name: 'Cubos de gelo q.b.'
	},
	],
	preparacao: [
	{
		passo: 1,
		text: 'Coloque no copo os limões, a água e o açúcar e, segurando o copo medida, triture no Turbo/1.0 seg/1-2 vezes. Coloque o cesto e coe a limonada para um jarro. Sirva com cubos de gelo.',
		bimbyOp: 'Turbo/1.0 seg/1-2 vezes'
	}]
};







router.get('/', function(req, res){
	console.log("entrei no main");
	res.json({message:'Hello api'});
});

router.get('/limonada', function(req, res){
	console.log("a mostrar a receita de " + receita.name);
	res.json(receita);
});





app.use('/', router);

app.listen(port);
