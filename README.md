jQuery-URL-shortener
====================

Jquery URL Shortener plugin using Google URL Shortener API


Setting Google API Key
====================
jQuery.urlShortener.settings.apiKey='YOUR_API_KEY___________';


Shorten a URL
====================
shortUrl = jQuery.urlShortener({longUrl:"http://hayageek.com"});



Short URL to Long URL
====================
longURL = jQuery.urlShortener({shortUrl:"http://goo.gl/4W9fZ"});



Get Short URL information (Analytics,Clicks)
====================
info = jQuery.urlShortener({shortUrl:"http://goo.gl/4W9fZ",projection:"FULL"});
	

Projection types: FULL,ANALYTICS_CLICKS,ANALYTICS_TOP_STRINGS


Tutorial
====================
http://hayageek.com/jquery-url-shortener/
