jQuery-URL-shortener
====================

##Overview
Jquery URL Shortener plugin using Google URL Shortener API


###Setting Google API Key
---
jQuery.urlShortener.settings.apiKey='YOUR_API_KEY___________';


###Shorten a URL
---
jQuery.urlShortener({
    longUrl: "http://hayageek.com/jquery-url-shortener/",
    success: function (shortUrl) {
        //shortUrl ->  Shortened URL
    },
    error: function(err)
    {
    	alert(JSON.stringify(err));
    }
});


###Short URL to Long URL
---
jQuery.urlShortener({
    shortUrl: shortUrlLink,
    success: function (longURL) {
		//longURL ->  original URL
    },
    error: function(err)
    {
    	alert(JSON.stringify(err));    
    }
});


###Get Short URL information (Analytics,Clicks)
---
jQuery.urlShortener({
    shortUrl: shortUrlLink,
    projection: "FULL",
    success: function (info) {
    
    },
    error: function(err)
    {
    	alert(JSON.stringify(err));    	
    }
});	

Projection types: FULL,ANALYTICS_CLICKS,ANALYTICS_TOP_STRINGS


###Tutorial
---
http://hayageek.com/jquery-url-shortener/
