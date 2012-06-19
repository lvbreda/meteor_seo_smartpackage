meteor_seo_smartpackage
=======================

#Usage

##In live mode 
Add server side function that return the rendered html .(Serverside)

    Meteor.seo_index.push({title : "" , link : "/" , function : function(){
        return "<html><head></head><body>index</body></html>";
    }});

If you want to update the map via console or when an user add a records (clientside)

    Meteor.call('update_seo');


## Only in production to create sitemap automaticly.
Autoupdate will save every path and every modification of a page. 

    Meteor.autoUpdateSeo();

You can fire the normal update whenever you want. If you want to save every search under a seperate title then update with search.value
 
    Meteor.update("/update/lander","Update by Lander") /** link,title **/
    Meteor.update("" , "Update by Lander") /** Will take the current pathname**/
    Meteor.update("/update/ ,"") /**Will be the root direction.



