var request = require('request'),
	cheerio = require('cheerio'),
	noticias = [];

exports.inicio = function(req, res){
    res.render('index');
}


exports.nota = function(req, res){

    var url = 'http://diarioelinformante.com.ar/notamaster.php?id='+ req.params.id;

    request.get({url:url, encoding: 'binary'}, function(err, resp, body) {
        
        if (err)
            throw err;
        $ = cheerio.load(body);

        var nota = {
            titulo: $('.Arial25Negro').text().trim(),
            texto: $('.Arial12Negro').text().replace(/\n/g,"").replace(/\r/g,"").replace(/\t/g,""),
            img: "http://diarioelinformante.com.ar/" + $('img[style*="margin: 0px 10px 7px 0px; border: 2px solid #B5B5B5; padding: 0px; box-shadow: 2px 2px 6px #B5B5B5;"]').attr('src')
        }
        
        res.json(200,nota);
    });
};

exports.portada = function(req, res){

	var url = 'http://diarioelinformante.com.ar'

	request.get({url:url, encoding: 'binary'}, function(err, resp, body) {
        
        if (err)
            throw err;
        $ = cheerio.load(body);
        
        var anterior = "nada";
        $('td[style*="width:635px"]').each(function() {

            var $$ = cheerio.load(this);

            if($$('img[style*="width:125px; border: 2px solid #B5B5B5; padding: 0px; box-shadow: 2px 2px 6px #B5B5B5;"]').attr('src') == undefined){
                console.log("ES UNDEFINED")
            };

            // var noti = {
            //     titulo: $$('.Arial22Negro').text().replace("?","\"").trim(),
            //     resumen: $$('td[style*="padding-right: 15px;"]').text().replace(/\n/g,"").replace(/\r/g,"").replace(/\t/g,""),
            //     id: $$('.Arial22Negro').attr('href').replace("notamaster.php?id=",""),
            //     img: "http://diarioelinformante.com.ar/" + $$('img[style*="width:125px; border: 2px solid #B5B5B5; padding: 0px; box-shadow: 2px 2px 6px #B5B5B5;"]').attr('src')
            // }
            var noti = {
                titulo: $$('.Arial22Negro').text().replace("?","\"").trim(),
                categoria: $$('td[style*="width:100px;height:20px;"]').text().replace("?","\"").trim(),
                resumen: $$('div[style*="padding-right: 15px;"]').text().replace(/\n/g,"").replace(/\r/g,"").replace(/\t/g,""),
                id: $$('.Arial22Negro').attr('href').replace("notamaster.php?id=",""),
                img: "http://diarioelinformante.com.ar/" + $$('img[style*="width:125px; border: 2px solid #B5B5B5; padding: 0px; box-shadow: 2px 2px 6px #B5B5B5;"]').attr('src')
            }

            if(anterior !== noti.titulo){
                noticias.push(noti);
                anterior = noti.titulo;   
            }
        });
		res.json(200,noticias);
        noticias = [];
    });
};



exports.seccion = function(req, res){

    var seccion = req.params.seccion,
        url;
    switch(seccion){
        case "locales":
            url = "http://diarioelinformante.com.ar/secciones.php?ID=3";
            break;
        case "interesgral":
            url = "http://diarioelinformante.com.ar/secciones.php?ID=7";
            break;
        case "politica":
            url = "http://diarioelinformante.com.ar/secciones.php?ID=2";
            break;
        case "cultural":
            url = "http://diarioelinformante.com.ar/secciones.php?ID=9";
            break;
        case "educacion":
            url = "http://diarioelinformante.com.ar/secciones.php?ID=10";
            break;
        case "deportes":
            url = "http://diarioelinformante.com.ar/secciones.php?ID=4";
            break;
        case "policial":
            url = "http://diarioelinformante.com.ar/secciones.php?ID=5";
            break;
        case "judicial":
            url = "http://diarioelinformante.com.ar/secciones.php?ID=6";
            break;
        case "salud":
            url = "http://diarioelinformante.com.ar/secciones.php?ID=11";
            break;
        default:
            url = "http://diarioelinformante.com.ar/";
            break;
    }
    
    request.get({url:url, encoding: 'binary'}, function(err, resp, body) {
        
        if (err)
            throw err;
        $ = cheerio.load(body);
        
        var anterior = "nada";
        $('td[style*="width:635px"]').each(function() {

            var $$ = cheerio.load(this);

            if($$('img[style*="width:125px; border: 2px solid #B5B5B5; padding: 0px; box-shadow: 2px 2px 6px #B5B5B5;"]').attr('src') == undefined){
                console.log("ES UNDEFINED")
            };

            var noti = {
                titulo: $$('.Arial22Negro').text().replace("?","\"").trim(),
                resumen: $$('div[style*="padding-right: 15px;"]').text().replace(/\n/g,"").replace(/\r/g,"").replace(/\t/g,""),
                id: $$('.Arial22Negro').attr('href').replace("notamaster.php?id=",""),
                img: "http://diarioelinformante.com.ar/" + $$('img[style*="width:125px; border: 2px solid #B5B5B5; padding: 0px; box-shadow: 2px 2px 6px #B5B5B5;"]').attr('src')
            }

            if(anterior !== noti.titulo){
                noticias.push(noti);
                anterior = noti.titulo;   
            }
        });
        res.json(200,noticias);
        noticias = [];
    });
};