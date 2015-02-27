module.exports = function(app) {
    var mysqlDs = app.dataSources.mysql;

    var names = ["", "FI12","FI13"];
	//first lets recreate all databases
    mysqlDs.autoupdate(function(){
        console.log("Tables updated: let's seed");

		var Tag = app.models.Tag;
        var tags = [];
        for (var i = 1; i < 3; i++) {
			if(names[i] != ""){
				tags.push({
					"label": names[i],
					"id": i,
				});
			}
        };
		
		var cb = function(){
			console.log("OK");
		}
        Tag.create(tags, cb);      
    });
};