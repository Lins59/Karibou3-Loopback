module.exports = function(app) {
    var mysqlDs = app.dataSources.mysql;

	var categoryValues = ["Promotions", "Clubs"];
    var tagValues = ["FI10", "FI11", "FI12","FI13"];
	//first lets recreate all databases
    mysqlDs.autoupdate(function(){
        console.log("Tables updated: let's seed");

		var Tag = app.models.Tag;
		var Category = app.models.Category;
        
		var tags = [];
        for (var i = 0; i < tagValues.length; i++) {
			tags.push({
				"label": tagValues[i],
				"id": i +1,
			});
        };
		
        var categories = [];
        for (var i = 0; i < categoryValues.length; i++) {
			categories.push({
				"label": categoryValues[i],
				"id": i +1,
			});
        };
		
		var cb = function(){
			console.log("OK");
		}
		
        Tag.create(tags, cb);      
		Category.create(categories, cb);
    });
};