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
(function($) {

    $.fn.fixedScroll = function( options ) {
        // Establish our default settings
        var settings = $.extend({
            defaultTop   : 130,
            effect : true,
            effectClass: null
        }, options);
        
//var scrollPos = $(document).scrollTop();
var aselector = this.selector;
  
        var navigationarr = [];  
        var navigationIds = [];
                this.each(function(element){  
                    var navhash = $(this.hash);
                    if(navhash.length){
                        navigationarr[this.hash] = navhash.offset().top;
                        navigationIds[element] = this.hash;
                    }                    
                 });                   
//          console.log(navigationIds);
        scrolling = function(){
            if(settings.effect && settings.effectClass != ''){                                 
                var scrollPos = $(document).scrollTop();
                $(aselector).each(function () {                    
                    var currLink = $(this);
//                    console.log(currLink);
                    var refElement = $(currLink.attr("href"));
                    if(refElement.length){
                        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                            $(aselector).removeClass(settings.effectClass);
                            currLink.addClass(settings.effectClass);
                        }
                        else{
                            currLink.removeClass(settings.effectClass);
                        }
                    }
                });
            }
        }
        
         $(document).on('scroll',scrolling);
        
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();          
            if (this.hash in navigationarr) {
                var divid = this.hash.substring(this.hash.indexOf('#') + 1);    
                var obj = document.getElementById(divid);
                $('html, body').stop().animate({
                    'scrollTop': obj.offsetTop + settings.defaultTop
                }, 500, 'swing',function(){
                    console.log($(this));
//                    window.location.hash = this.hash;
                });
            }    
        }); 

    }

}(jQuery));
