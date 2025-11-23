
			var WebFontConfig = WebFontConfig || {};
			WebFontConfig['active'] = function() {
				if ( typeof ( window.jQuery ) !== 'undefined' ) {
					jQuery(window).trigger('liquid_async_fonts_active');
				}
			};
			WebFontConfig['inactive'] = function() {
				if ( typeof ( window.jQuery ) !== 'undefined' ) {
					jQuery(window).trigger('liquid_async_fonts_inactive');
				}
			};
			