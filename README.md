meteor_seo_smartpackage
=======================

#Usage
Use npm to install zombiejs, if errors about packages occur when running your server , copy the zombiejs and jsdom package from your node_modules dir to <meteor_install>/dev_bundle/lib/node_modules

##In live mode 
Using headless browser

    Meteor.seo_index.push({title : "", link : "/"});

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



