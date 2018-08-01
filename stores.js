'use strict';
//(function(module) {



    var stores = [{
        location: 'Pike Place Market',
        min: '23',
        max: '65',
        avg: '6',
        key: 'pike',
    }, {
        location: 'SeaTac Airport',
        min: '3',
        max: '24',
        avg: '6',
        key: 'seatac',
    }, { 
        location: 'Seattle Center',
        min: '11',
        max:'38',
        avg:'2',
        key: 'seattlecenter',
    }, {
        location: 'Capitol Hill',
        min: '20',
        max: '38',
        avg: '2', 
        key: 'caphill',
    }, {
        location: 'Alki',
        min: '2',
        max: '16',
        avg:'5',
        key: 'alki',

    }];

        for(var i =0; i < stores.length; i++) {
          stores[i].hours = []; 
          for(var j=0; j < 14; j++)   {
           var hoursArray = stores[i].hours; 
           var cookiesSoldHour = customerPerHour(stores[i].min, stores[i].max) * stores[i].avg;
           hoursArray.push(cookiesSoldHour)
          }      
          
}

function customerPerHour(min,max) {
    return Math.random() * (max-min) + min;
}

module.stores = stores;