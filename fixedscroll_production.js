/*
 * FixedScroll - jQuery Plugin
 * Simple fixed header scroll
 *
 * Copyright (c) 2013 - 2014 Manish Arora
 * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
 *
 * Version: 1.1.1 (08/08/2014)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
!function(t){t.fn.fixedScroll=function(e){var h=t.extend({defaultTop:130},e),n=[];this.each(function(){var e=t(this.hash);e.length&&(n[this.hash]=e.offset().top)}),t('a[href^="#"]').on("click",function(e){if(e.preventDefault(),this.hash in n){var i=this.hash.substring(this.hash.indexOf("#")+1),s=document.getElementById(i);t("html, body").stop().animate({scrollTop:s.offsetTop+h.defaultTop},500,"swing")}})}}(jQuery);
