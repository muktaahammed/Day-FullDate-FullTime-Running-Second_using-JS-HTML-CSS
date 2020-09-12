// JavaScript Document
(function () {
    "use strict";

    document.addEventListener('DOMContentLoaded', function () {
    
        var vDay = document.getElementById('myToday');
        /* 1. If you want to show the time in different section just ommit the commands */
        //var vTime = document.getElementById('myTime');

        setInterval(updateTime, 1000);

        function updateTime() {
            var d = new Date();

            var myDay = d.getDay(); 
            var myHours = d.getHours();
            var myMinutes = d.getMinutes();
            var myDate = d.getDate();
            var myYear = d.getFullYear();
            var myMonth = formatMonth(d.getMonth());
            var ampm = 'AM';

            var dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

            if (myHours > 12) {
                myHours -= 12;
                ampm = 'PM';
            }

            else if (myHours === 0) {
                myHours = 12;
            }

            if (myMinutes < 10) {
                myMinutes = '0' + myMinutes;
            }
            var sepClass = '';

            if ((d.getSeconds() % 2) === 1) {
                sepClass = 'trans';
            }

            var sep = '<span class="' + sepClass + '">:</span>';

            vDay.innerHTML = dayarray[myDay] + ', ' + myMonth + ' ' + myDate + ', ' + myYear + ' ' + myHours + sep + myMinutes + sep + d.getSeconds() + ' ' + ampm;
            /* 2. If you want to show the time in different section just ommit the commands */
            //vTime.innerHTML = myHours +sep+ myMinutes +sep+ d.getSeconds() + ' ' + ampm;
        }
    });

    function formatMonth(m) {

        m = parseInt(m, 10);
        if (m < 0) {
            m = 0;
        }
        else if (m > 11) {
            m = 11;
        }
        /* Months name */
        var monthName = ['January','February','March','April','May','June',
        'July','August','September','October','November','December'];
        return monthName[m];
                
    }
})
();