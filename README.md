jqueryfixedscrolling
====================

In this repository, we have create the plugin of jquery which is used the scroll the in fixed navigation with exact positon of div and fixed naviagtion menu background will change when we click on it. We need your support of contribution the code to enhance this plugin.

How to use this plugin:

Step1: First include the latest jquery in your html page.

Step2: After that you have to include the below plugin code.

        $(document).ready(function () {   
            $('ul.navigation li a').fixedScroll({
                 effect:true,
                 effectClass:'navigationactive'
             });
        });

Step 3: See results in your web page.


