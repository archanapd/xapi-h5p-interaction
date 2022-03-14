// Variables
 var username = "Perfectss";
 var email = "archana@perfectzdigital.com"

// Page Load Function
function pageLoaded(){
	// Connecting to LRS
	var key = "a7112d46c9dc9bc8fd37aa7453b3a24d9dc4dab2";
	var secret = "9727baae1cba09bf1ffee3af6bdb14117dfa135c";
	var conf = {
	  "endpoint" : "https://learninglocker.cakap.com/data/xAPI/",
	  "auth" : "Basic " + toBase64(key + ':' + secret),
	};
	ADL.XAPIWrapper.changeConfig(conf);
}

// Button click
function sendStatement(){
	var statement = {  
	    "actor": {  
	        "mbox": "mailto:"+email,  
	        "name": username,  
	        "objectType": "Agent"  
	    },  
	    "verb": {  
	        "id": "http://adlnet.gov/expapi/verbs/interacted",  
	        "display": {"en-US": "interacted"}  
	    },  
	    "object": {  
	        "id": "https://perfectzdigital.h5p.com/content/1291575879006396427",  
	        "definition": {  
	            "name": {"en-US": "Fetching data from H5P"},  
	            "description": {"en-US": "Fetching H5p scores and passing it to SCORM"}  
	        },  
	        "objectType": "Activity"  
	    }  
	};

	ADL.XAPIWrapper.sendStatement(statement); 

	// Alert message
	alert('Data has been sent')

}

// On Blur Events
function saveName(){
	username = document.getElementById('nameEntered').value;
}

function saveEmail(){
	email = document.getElementById('userEmail').value;
}