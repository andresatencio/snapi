// var modelo = require('./models/models')
//     request = require('request'),
//     cheerio = require('cheerio'),
//     Noticia = modelo.noticia;

// setInterval(function () {
//     informanteGeneral();
// }, 20000)


// function informanteGeneral () {

// 	var url = 'http://diarioelinformante.com.ar'

// 	request.get({url:url, encoding: 'binary'}, function(err, resp, body) {
        
//         if (err)
//             throw err;
//         $ = cheerio.load(body);
        
//         var anterior = "nada";
//         $('td[style*="width:635px"]').each(function() {

//             var $$ = cheerio.load(this);

//             if($$('img[style*="width:125px; border: 2px solid #B5B5B5; padding: 0px; box-shadow: 2px 2px 6px #B5B5B5;"]').attr('src') == undefined){
//                 console.log("ES UNDEFINED")
//             };

//             // var noti = {
//             //     titulo: $$('.Arial22Negro').text().replace("?","\"").trim(),
//             //     resumen: $$('td[style*="padding-right: 15px;"]').text().replace(/\n/g,"").replace(/\r/g,"").replace(/\t/g,""),
//             //     id: $$('.Arial22Negro').attr('href').replace("notamaster.php?id=",""),
//             //     img: "http://diarioelinformante.com.ar/" + $$('img[style*="width:125px; border: 2px solid #B5B5B5; padding: 0px; box-shadow: 2px 2px 6px #B5B5B5;"]').attr('src')
//             // }
//             var id = $$('.Arial22Negro').attr('href').replace("notamaster.php?id=","");
//             // var noti = {
//             //     id: $$('.Arial22Negro').attr('href').replace("notamaster.php?id=",""),
//             //     diario: "Informante",
//             //     titulo: $$('.Arial22Negro').text().replace("?","\"").trim(),
//             //     categoria: $$('td[style*="width:100px;height:20px;"]').text().replace("?","\"").trim(),
//             //     texto: informanteNota(this.id),
//             //     fecha:  new Date(),
//             //     img: "http://diarioelinformante.com.ar/" + $$('img[style*="width:125px; border: 2px solid #B5B5B5; padding: 0px; box-shadow: 2px 2px 6px #B5B5B5;"]').attr('src')
//             // }
//             informanteNota(id, function ( texto ) {

//                 var noti = {
//                     id: id,
//                     diario: "Informante",
//                     titulo: $$('.Arial22Negro').text().replace("?","\"").trim(),
//                     categoria: $$('td[style*="width:100px;height:20px;"]').text().replace("?","\"").trim(),
//                     texto: texto,
//                     fecha:  new Date(),
//                     img: "http://diarioelinformante.com.ar/" + $$('img[style*="width:125px; border: 2px solid #B5B5B5; padding: 0px; box-shadow: 2px 2px 6px #B5B5B5;"]').attr('src')
//                 }
//                 var noticia = new Noticia(noti);
//                 noticia.save(function (err, doc){
//                     if ( err ) {
//                         //console.log(err)
//                     } else {
//                         console.log("Se guardo noticia: " + doc)
//                     }
//                 })
//             })
                
//         });
//     });
// }

// function informanteNota( id , cb){

//     var url = 'http://diarioelinformante.com.ar/notamaster.php?id='+ id;

//     request.get({url:url, encoding: 'binary'}, function(err, resp, body) {
        
//         if (err)
//             throw err;
//         $ = cheerio.load(body);

//         var nota = {
//             titulo: $('.Arial25Negro').text().trim(),
//             texto: $('.Arial12Negro').text().replace(/\n/g,"").replace(/\r/g,"").replace(/\t/g,"").replace(/\\/g,""),
//             img: "http://diarioelinformante.com.ar/" + $('img[style*="margin: 0px 10px 7px 0px; border: 2px solid #B5B5B5; padding: 0px; box-shadow: 2px 2px 6px #B5B5B5;"]').attr('src')
//         }
//         return cb(nota.texto);
//     });
// };

// exports.informanteGeneral = informanteGeneral;