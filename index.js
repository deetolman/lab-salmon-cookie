'use strict';

(function(module){
    var stores = module.stores;
    var toDOM = module.toDOM;
    var html = module.html;

    var ul = document.getElementById('stores');

    var render = function(stores) {
        return toDOM(html`
            <table>
                <tbody>
                <tr>
                    <td>${stores.location}</td>
                    <td>${store.cookiesSoldHour[0]}</td>
                    <td>${store.cookiesSoldHour[1]}</td>
                    <td>${store.cookiesSoldHour[2]}</td>
                    <td>${store.cookiesSoldHour[3]}</td>
                    <td>${store.cookiesSoldHour[4]}</td>
                    <td>${store.cookiesSoldHour[5]}</td>
                    <td>${store.cookiesSoldHour[6]}</td>
                    <td>${store.cookiesSoldHour[7]}</td>
                    <td>${store.cookiesSoldHour[8]}</td>
                    <td>${store.cookiesSoldHour[9]}</td>
                    <td>${store.cookiesSoldHour[10]}</td>
                    <td>${store.cookiesSoldHour[11]}</td>
                    <td>${store.cookiesSoldHour[12]}</td>
                    <td>${store.cookiesSoldHour[13]}</td>
                    <td>${store.cookiesSoldHour[14]}</td>
                </tr>
                <tr>
                    <td>SeaTac Airport</td>
                    <td>store.hours[0]</td>
                    <td>store.hours[1]</td>
                    <td>store.hours[2]</td>
                    <td>store.hours[3]</td>
                    <td>store.hours[4]</td>
                    <td>store.hours[5]</td>
                    <td>store.hours[6]</td>
                    <td>store.hours[7]</td>
                    <td>store.hours[8]</td>
                    <td>store.hours[9]</td>
                    <td>store.hours[10]</td>
                    <td>store.hours[11]</td>
                    <td>store.hours[12]</td>
                    <td>store.hours[13]</td>
                    <td>store.hours[14]</td>
                </tr>
                <tr>
                    <td>Seattle Center</td>
                    <td>store.hours[0]</td>
                    <td>store.hours[1]</td>
                    <td>store.hours[2]</td>
                    <td>store.hours[3]</td>
                    <td>store.hours[4]</td>
                    <td>store.hours[5]</td>
                    <td>store.hours[6]</td>
                    <td>store.hours[7]</td>
                    <td>store.hours[8]</td>
                    <td>store.hours[9]</td>
                    <td>store.hours[10]</td>
                    <td>store.hours[11]</td>
                    <td>store.hours[12]</td>
                    <td>store.hours[13]</td>
                    <td>store.hours[14]</td>
                </tr>
                <tr>
                    <td>Capitol Hill</td>
                    <td>store.hours[0]</td>
                    <td>store.hours[1]</td>
                    <td>store.hours[2]</td>
                    <td>store.hours[3]</td>
                    <td>store.hours[4]</td>
                    <td>store.hours[5]</td>
                    <td>store.hours[6]</td>
                    <td>store.hours[7]</td>
                    <td>store.hours[8]</td>
                    <td>store.hours[9]</td>
                    <td>store.hours[10]</td>
                    <td>store.hours[11]</td>
                    <td>store.hours[12]</td>
                    <td>store.hours[13]</td>
                    <td>store.hours[14]</td>
                </tr>
                <tr>
                    <td>Alki</td>
                    <td>store.hours[0]</td>
                    <td>store.hours[1]</td>
                    <td>store.hours[2]</td>
                    <td>store.hours[3]</td>
                    <td>store.hours[4]</td>
                    <td>store.hours[5]</td>
                    <td>store.hours[6]</td>
                    <td>store.hours[7]</td>
                    <td>store.hours[8]</td>
                    <td>store.hours[9]</td>
                    <td>store.hours[10]</td>
                    <td>store.hours[11]</td>
                    <td>store.hours[12]</td>
                    <td>store.hours[13]</td>
                    <td>store.hours[14]</td>
                </tr>
                </tbody>
            </table>
        `);
     };

    var store;
    for(var i = 0; i < stores.length; i++) {
        totals = totals[i];
        var dom = render(store);
    }

})(window.module = window.module || {});