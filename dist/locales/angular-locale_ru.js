"use strict";angular.module("ngLocale",[],["$provide",function($provide){var PLURAL_CATEGORY_ONE="one",PLURAL_CATEGORY_FEW="few",PLURAL_CATEGORY_MANY="many",PLURAL_CATEGORY_OTHER="other";$provide.value("$locale",{DATETIME_FORMATS:{AMPMS:["ДП","ПП"],DAY:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],ERANAMES:["до Рождества Христова","от Рождества Христова"],ERAS:["до н. э.","н. э."],FIRSTDAYOFWEEK:0,MONTH:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],SHORTDAY:["вс","пн","вт","ср","чт","пт","сб"],SHORTMONTH:["янв.","февр.","мар.","апр.","мая","июн.","июл.","авг.","сент.","окт.","нояб.","дек."],STANDALONEMONTH:["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y 'г'.",longDate:"d MMMM y 'г'.",medium:"d MMM y 'г'. H:mm:ss",mediumDate:"d MMM y 'г'.",mediumTime:"H:mm:ss",short:"dd.MM.y H:mm",shortDate:"dd.MM.y",shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"₽",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"ru",localeID:"ru",pluralCat:function(n,opt_precision){var i=0|n,vf=function(n,opt_precision){var v=opt_precision;void 0===v&&(v=Math.min(function(n){var i=(n+="").indexOf(".");return-1==i?0:n.length-i-1}(n),3));var base=Math.pow(10,v);return{v:v,f:(n*base|0)%base}}(n,opt_precision);return 0==vf.v&&i%10==1&&i%100!=11?PLURAL_CATEGORY_ONE:0==vf.v&&2<=i%10&&i%10<=4&&(i%100<12||14<i%100)?PLURAL_CATEGORY_FEW:0==vf.v&&i%10==0||0==vf.v&&5<=i%10&&i%10<=9||0==vf.v&&11<=i%100&&i%100<=14?PLURAL_CATEGORY_MANY:PLURAL_CATEGORY_OTHER}})}]);