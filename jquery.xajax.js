(function ($, undefined)  {
	function tempObj() {
		return $("<b/>");
	}
	
	function wrapper( callback, obj) {
		return function () {
			callback && obj.before(callback.apply(this, arguments)).remove();
		}
	}
	
	$.xajax = function ( conf ) {
	
		var
			obj = tempObj();
		
		conf.success = wrapper(conf.success, obj);
		obj.xhr = $.ajax(conf);
		
		return obj;
	}
	
	$.xget = function ( url, data, callback, type) {
	
		var 
			obj  = tempObj();
			
		if ( $.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = null;
		}
		
		obj.xhr = $.get( url, data, wrapper( callback,  obj));
		
		return obj;
	}
	
	$.xpost = function ( url, data, callback, type) {
	
		var 
			obj  = tempObj();
			
		if ( $.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = {};
		}
		
		obj.xhr = $.post( url, data, wrapper( callback,  obj));
		
		return obj;
	}
	
})(jQuery);/**@preserve jQuery.xAjax plugin v.0.0.1;Copyright 2010, Fedor Indutny;Released under MIT license **/