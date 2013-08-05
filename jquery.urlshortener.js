/*!
* jQuery URL Shortener v@VERSION
* https://github.com/hayageek/jQuery-URL-shortener
*
*
* Date: @DATE
*/
(function($) {

	$.urlShortener = function(options) 
	{
		var settings ={};
		$.extend(settings,$.urlShortener.settings, options);
		 
		var requestUrl = settings.requestUrl;
		
		if(settings.apiKey.length > 1)
		{
			requestUrl += "key="+settings.apiKey;
		}
	
		if(settings.longUrl != undefined)
		{
			var data = {longUrl: settings.longUrl};
			var shortUrl=undefined;
			
			return $.urlShortener.shortUrl(requestUrl,data);
		}
		else if(settings.shortUrl != undefined) //URL info
		{
			requestUrl += "&shortUrl="+settings.shortUrl;
			return $.urlShortener.urlInfo(requestUrl,settings.projection);
		}
		
	
		return undefined;
	};
	
	$.urlShortener.shortUrl = function(requestUrl,data)
	{
		var shortUrl =undefined;
		$.ajax({
		async:false,
		type: "POST",
		url: requestUrl,
		data: JSON.stringify(data),
		contentType:"application/json; charset=utf-8",
		dataType:"json",
	  	}).done(function( info ) 
		{
			shortUrl=info.id;
		}).fail(function(jqXHR, textStatus, errorThrown) 
		{ 
			
		});
		
		return shortUrl;
		
	}
	$.urlShortener.urlInfo = function(requestUrl,projection)
	{
		if(projection != undefined)
		{
			requestUrl += "&projection="+projection;
		}
		var urlInfo =undefined;
		$.ajax({
		async:false,
		type: "GET",
		url: requestUrl,
		contentType:"application/json; charset=utf-8",
		dataType:"json",
	  	}).done(function( info ) 
		{
			if(projection == undefined)
			{
				urlInfo=info.longUrl; //return long URL;
			}
			else
			{
				urlInfo = info; //return full info;
			}
			
		}).fail(function(jqXHR, textStatus, errorThrown) 
		{ 
			
		});
		
		return urlInfo;
		
	}

	$.urlShortener.settings = {
		apiKey : '',
		version : 'v1',
		requestUrl : 'https://www.googleapis.com/urlshortener/v1/url?'
	};


}(jQuery));
