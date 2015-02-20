var request = require('request'),
	cheerio = require('cheerio'),
	noticias = [];

exports.portada = function(req, res) {

	var url = 'http://diarioelnorte.com.ar'

	request.get({url:url, encoding: 'binary'}, function(err, resp, body) {
        var anterior = "nada";
        if (err)
            throw err;
        $ = cheerio.load(body);
      	var im = $('div.main-article.article img').attr('src') || "images/logo.png";
        var noti = {
        	nivel: "primaria",
            titulo: $('div.main-article.article h2').text().trim().replace(/\"/g,'"').replace(/\n/g,"").replace(/\r/g,"").replace(/\t/g,""),
            resumen: $('div.main-article.article p').text().trim().replace(/\"/g,'"').replace(/\n/g,"").replace(/\r/g,"").replace(/\t/g,""),
            href: "http://diarioelnorte.com.ar/" +  $('div.main-article.article a').attr('href'),
            img: "http://diarioelnorte.com.ar/" +  im
        }
        if(anterior !== noti.titulo){
                noticias.push(noti);
                anterior = noti.titulo;   
                console.log(noti.titulo)
            }
        
        //Notas secundarias
        $('div.heading.article').each(function(){
        	var $$ = cheerio.load(this);
        	var $$ = cheerio.load(this);
        	
        	var noti = {
        		nivel: "secundaria",
                titulo: $$('h3').text().trim().replace(/\n/g,"").replace(/\r/g,"").replace(/\t/g,"").replace(/\"/g,'"'),
                resumen: $$('p').text().trim().replace(/\n/g,"").replace(/\r/g,"").replace(/\t/g,"").replace(/\"/g,'"'),
                href: "http://diarioelnorte.com.ar/" +  $$('a').attr('href'),
                img: "http://diarioelnorte.com.ar/" + $$('img').attr('src')
            }
        	if(anterior !== noti.titulo){
                noticias.push(noti);
                anterior = noti.titulo;   
            }
        })

        $('div.heading.last.article').each(function(){
        	var $$ = cheerio.load(this);
        	
        	var noti = {
        		nivel: "secundaria",
                titulo: $$('h3').text().trim().replace(/\n/g,"").replace(/\r/g,"").replace(/\t/g,"").replace(/\"/g,'"'),
                resumen: $$('p').text().trim().replace(/\n/g,"").replace(/\r/g,"").replace(/\t/g,"").replace(/\"/g,'"'),
                href: "http://diarioelnorte.com.ar/" +  $$('a').attr('href'),
                img: "http://diarioelnorte.com.ar/" + $$('img').attr('src')
            }
        	if(anterior !== noti.titulo){
                noticias.push(noti);
                anterior = noti.titulo;   
            }
        })

        //Notas terciarias
        $('div.mini-heading.article').each(function(){
        	var $$ = cheerio.load(this);

        	var noti = {
        		nivel: "terciaria",
                titulo: $$('h4').text().trim().replace(/\n/g,"").replace(/\r/g,"").replace(/\t/g,"").replace(/\"/g,'"'),
                resumen: $$('p').text().trim().replace(/\n/g,"").replace(/\r/g,"").replace(/\t/g,"").replace(/\"/g,'"'),
                href: "http://diarioelnorte.com.ar/" +  $$('a').attr('href'),
            }
            if(anterior !== noti.titulo){
                noticias.push(noti);
                anterior = noti.titulo;   
            }        	
        })
		res.json(200, noticias);
        noticias = [];
            
    });
}

