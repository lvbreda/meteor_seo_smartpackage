(function(){


Meteor.methods({
	"add_update_seo" : function(link,html,title,md5){
		console.log("boom");
		if(title != ""){
			if(link =="/"){
				link = "/" + title;
			}else{
				link = link  + "/" +title;
			}
			
		}
		if(Meteor.seo_cache.find({url : link}).count()>0){
			console.log(Meteor.seo_cache.update({url : link, md5:{$ne : md5}} , {html : html, md5 : md5}));
		}else{
			console.log(Meteor.seo_cache.insert({url : link , html : html , title : title,md5 : md5}));
		}		
	}
});

})();
