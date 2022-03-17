// Variables
 var username = "Archana PPPP";
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
function sendStatements(){
	var statements = [{  
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
	        "id": "https://perfectzdigital.h5p.com/content/1291589676355054657",  
	        "definition": {  
	            "name": {"en-US": "Fetching data from H5P"},  
	            "description": {"en-US": "Fetching H5p drag drop scores and passing it to LL cakap"}  
	        },  
	        "objectType": "Activity"  
	    }  
	}, {
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
	        "id": "https://perfectzdigital.h5p.com/content/1291589688074243917",  
	        "definition": {  
	            "name": {"en-US": "Fetching data from H5P"},  
	            "description": {"en-US": "Fetching H5p single select scores and passing it to LL cakap"}  
	        },  
	        "objectType": "Activity"  
	    }

	}];

	ADL.XAPIWrapper.sendStatements(statements); 

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