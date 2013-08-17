var window = Ti.UI.createWindow({
	exitOnClose : true
});

var button = Ti.UI.createButton({
	title : 'crash'
});
button.addEventListener("click", function(e) {
	window.add(Ti.Map.createView({}));
	window.add(Ti.Map.createView({}));
}); 

window.add(button);


window.open();

var crittercism = require("in.shivakumars.crittercism");
crittercism.initializeCrittercism({
	apiKey : "YOUR_API_KEY",
	includeVersionName : false,
	includeVersionCode : false,
	userName : "shiva"
});

