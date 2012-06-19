(function(){
var connect = __meteor_bootstrap__.require("connect");
var supported_browser = function (user_agent) {
  var supportlist =[  
                "Teoma",                    
                "alexa", 
                "froogle", 
                "inktomi", 
                "looksmart", 
                "URL_Spider_SQL", 
                "Firefly", 
                "NationalDirectory", 
                "Ask Jeeves", 
                "TECNOSEEK", 
                "InfoSeek", 
                "WebFindBot", 
                "girafabot", 
                "crawler", 
                "www.galaxy.com", 
                "Googlebot", 
                "Scooter", 
                "Slurp", 
                "appie", 
                "FAST", 
                "WebBug", 
                "Spade", 
                "ZyBorg", 
                "rabaz"];
  for(s in supportlist){
    if(user_agent.indexOf(supportlist[s])>-1){
      return false;
    }
  }
  console.log(user_agent);
  return true;
};

__meteor_bootstrap__.app
    .use(connect.query())
    .use(function (req, res, next) {
      // Need to create a Fiber since we're using synchronous http calls
      Fiber(function() {
      	if(!supported_browser(req.headers['user-agent'])){
      		Mongo = new Meteor._Mongo(__meteor_bootstrap__.mongo_url);

      		var i = Mongo.findOne("seo_cache",{url : req.url});
      		if(i){
	      		res.writeHead(200, {'Content-Type': 'text/html'});
	      			res.write(i.html.replace("</body>","").replace("</html>",""));
	      		var o = Mongo.find("seo_cache");
	      		o.forEach(function(u){
	      			if(u.url!= "undefined" && u.url){
	      				res.write("<a href='" + u.url + "' >" + u.title + "</a>" );
	      			}
	      		});
	      		res.write("</body></html>")
	      		res.end();
      		}else{
      			
      			res.writeHead(200, {'Content-Type': 'text/html'});
	      		var o = Mongo.find("seo_cache");
	      		o.forEach(function(u){
	      			if(u.url!= "undefined" && u.url){
	      				res.write("<a href='" + u.url + "' >" + u.title + "</a>" );
	      			}
	      		});
	      		res.end();
      		}
      		return;
      	}else{
      		next();
      		return;
      	}
    }).run();
});

Meteor.seo_cache = new Meteor.Collection(
  "seo_cache",
  null /*manager*/,
  null /*driver*/,
  true /*preventAutopublish*/);
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