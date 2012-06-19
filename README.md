meteor_seo_smartpackage
=======================

#Usage

Autoupdate will save every path and every modification of a page. 
	Meteor.autoUpdateSeo();

You can fire the normal update whenever you want. If you want to save every search under a seperate title then update with search.value
	Meteor.update("/update/lander","Update by Lander") /** link,title **/
	Meteor.update("" , "Update by Lander") /** Will take the current pathname**/
	Meteor.update("/update/ ,"") /**Will be the root direction.



