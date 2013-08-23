function init(){
	
	$$.json("http://snapi.aws.af.cm/informante",{}, function(data){
		console.log(data);
		for(i in data){
			console.log(data[i].titulo);
			var contenido = "<li class=\"thumb big\"><img src=\""+data[i].img+"\" /><div><div class=\"on-right text tiny\"></div><strong>"+data[i].titulo+"</strong><span class=\"text tiny opacity\">"+data[i].resumen+"</span></div></li>"
			var cont = "<li class=\"feature\"><img src=\""+data[i].img+"\" class=\"icon\"><strong>"+data[i].titulo+"</strong><br>"+data[i].resumen+"</li>";
			$$("ul[data-id*=portada]").append(cont);
			
		}
	});

};
function quien(){
        	Lungo.Notification.success(
            "Autor",                  //Title
            "Andres Atencio",     //Description
            "user",                    //Icon
            3,                          //Time on screen
            function(){}           //Callback function
        );
}; 