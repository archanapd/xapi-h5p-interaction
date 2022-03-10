// Variables
// var name = "Archana";
// var email = "archana@perfectzdigital.com"

// Page Load Function
function pageLoaded(){
	// Connecting to LRS
	var key = "ELgFXA1adhm_KirxAtQ";
	var secret = "F6bPs5QvJGlAI8GNM2c";
	var conf = {
	  "endpoint" : "https://cloud.scorm.com/lrs/ES1LU3LI4W/sandbox/",
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