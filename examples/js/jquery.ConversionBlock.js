/**
 * 區塊切換
 * 2017-10-19
 * SuwayChang <solzxeramdj@gmail.com>
 */
if (typeof jQuery === 'undefined') {
    throw new Error('jquery-confirm requires jQuery');
}

var cb;

(function ($, window) {
    "use strict";

	$.fn.ConversionBlock = function(options) {
		var defaults = {
			'index':1,
			'next':'.next',
			'prev':'.prev'
		};
		var settings = $.extend({},defaults, options);//将一个空对象做为第一个参数
		var vindex = settings.index;
		var index = vindex-1;
		var callback = settings.callback;
		var step = $(this),
	        step_num = step.length;
	    if ( index > step_num) {
		    alert('Check no specified block');
		}
		$(this).hide();
		$(this).eq(index).show();

		//切換下一個區塊
		function next (dom) {
	        var check = true;
	        // 如該區塊有設定驗證時就呼叫副程式
	        if ( callback && typeof callback == 'function' ) { // make sure the callback is a function
	           check = callback.call(this, vindex); // brings the scope to the callback
	        }
	        if( check ){
	            step.hide();
	            step.eq(index+1).show();
	            index++;
	            vindex++;
	        }
		}
		//切換上一個區塊
	    function prev(dom) {
	        step.hide();
	        step.eq(index-1).show();
	        if( index > 0 ){
	            index--;
	            vindex--;
	        }
	    }
	    $(settings.next).on('click', function () { next(this); });
	    $(settings.prev).on('click', function () { prev(this); });

	};

})(jQuery);