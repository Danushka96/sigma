jQuery(document).ready(function($){var window_width=$(window).width();$.hestia={'init':function(){this.navbar();this.fixPadding();this.necessaryClasses();this.sidebarToggle();this.shop();this.detectIos();},'navbar':function(){this.navCaret();this.parentLink();this.topBarSearch();},'navCaret':function(){$('.navbar .dropdown > a .caret').click(function(){event.preventDefault();event.stopPropagation();$(this).toggleClass('caret-open');$(this).parent().siblings().toggleClass('open');var navbarDropdown=$('.navbar .dropdown');if(navbarDropdown.hasClass('open')){navbarDropdown.removeClass('open');$(this).toggleClass('caret-open');$(this).parent().siblings().toggleClass('open');}});},'topBarSearch':function(){var searchInput=$('.hestia-top-bar input[type=search]');if(searchInput.length>0){searchInput.each(function(){$(this).attr('size',$(this).parent().find('.control-label').text().replace(/ |…/g,'').length);});}},'parentLink':function(){$('.navbar .dropdown > a').click(function(){location.href=this.href;});},'shop':function(){$('.added_to_cart').live('DOMNodeInserted',function(){if(!($(this).parent().hasClass('hestia-view-cart-wrapper'))){$(this).wrap('<div class="hestia-view-cart-wrapper"></div>');}});},'necessaryClasses':function(){var navigation=$('#main-navigation');navigation.on('show.bs.collapse',function(){$('body').addClass('menu-open');});navigation.on('hidden.bs.collapse',function(){$('body').removeClass('menu-open');});var addToElements=['input[type="text"]','input[type="email"]','input[type="url"]','input[type="password"]','input[type="tel"]','input[type="search"]','textarea'];for(i=0;i<addToElements.length;i++){if(typeof $(addToElements[i])!=='undefined'){$(addToElements[i]).addClass('form-control');}}
var select2Input=$('input.select2-input');if(typeof select2Input!=='undefined'){select2Input.removeClass('form-control');}
var formControl=$('.form-control');if(typeof formControl!=='undefined'){formControl.parent().addClass('form-group');}},'fixPadding':function(){if(window_width>768){var navbar_height=$('.navbar-fixed-top').outerHeight();var beaver_offset=40;$('.pagebuilder-section').css('padding-top',navbar_height);$('.fl-builder-edit .pagebuilder-section').css('padding-top',navbar_height+beaver_offset);$('.page-header.header-small .container').css('padding-top',navbar_height+100);var headerHeight=$('.single-product .page-header.header-small').height();var offset=headerHeight+100;$('.single-product .page-header.header-small .container').css('padding-top',headerHeight-offset);var marginOffset=headerHeight-navbar_height-172;$('.woocommerce.single-product .blog-post .col-md-12 > div[id^=product].product').css('margin-top',-marginOffset);}else{$('.page-header.header-small .container').removeAttr('style');}},'detectIos':function(){if($('.hestia-about').length>0){var iOS=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;if(iOS){$('body').addClass('is-ios');}}},'sidebarToggle':function(){if($('.blog-sidebar-wrapper,.shop-sidebar-wrapper').length>0){$('.hestia-sidebar-open').click(function(){$('.sidebar-toggle-container').css('left','0');});$('.hestia-sidebar-close').click(function(){$('.sidebar-toggle-container').css('left','-100%');});}}};$.hestia.init();$(window).resize(function(){$.hestia.fixPadding();});function debounce(func,wait,immediate){var timeout;return function(){var context=this,args=arguments;clearTimeout(timeout);timeout=setTimeout(function(){timeout=null;if(!immediate){func.apply(context,args);}},wait);if(immediate&&!timeout){func.apply(context,args);}};}
function isElementInViewport(elem){var $elem=$(elem);var scrollElem=((navigator.userAgent.toLowerCase().indexOf('webkit')!==-1)?'body':'html');var viewportTop=$(scrollElem).scrollTop();var viewportBottom=viewportTop+$(window).height();var elemTop=Math.round($elem.offset().top);var elemBottom=elemTop+$elem.height();return((elemTop<viewportBottom)&&(elemBottom>viewportTop));}});