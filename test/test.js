var request = require('superagent');
var expect = require('expect.js');



describe('API Scrapp diarioelinformante.com.ar', function(){

	var url = "http://localhost:3000/";
	
	//Base
	it('GET /', function(done){

   		request.get(url).end(function(res){

	    	expect(res).to.exist;
			expect(res.status).to.equal(200);
			done();

  		})

   	});

	/**
	 * Test API informante
	 */

	it('GET /informante', function(done){

   		request.get(url+"informante").end(function (res){

	    	expect(res).to.exist;
			expect(res.status).to.equal(200);
			expect(res.type).to.equal('application/json');
			done();

  		})
  		
   	});

	/**
	 * Test API secciones
	 */

	var secciones = [ 'locales', 'policial', 'deportes', 'judicial', 'salud' ];
	
	it('GET /informante/secciones/['+ secciones +']', function (done){

		for(s in secciones){

	   		request.get(url + "informante/secciones/" + secciones[s]).end(function (res){

		    	expect(res).to.exist;
				expect(res.status).to.equal(200);
				expect(res.type).to.equal('application/json');
				done();

	  		})

		}

   	})

});

describe('API Scrapp diario el norte', function(){
	it('Notas de portada');
});

