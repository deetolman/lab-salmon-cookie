'use strict';

(function(module){
    var stores = module.stores;
    var toDOM = module.toDOM;
    var html = module.html;

    var table = document.getElementById('stores');

    var render = function(stores) {
        return toDOM(html`
                <tr>
                    <th>${stores.location}</th>
                    <td>${stores.hours[0]}</td>
                    <td>${stores.hours[1]}</td>
                    <td>${stores.hours[2]}</td>
                    <td>${stores.hours[3]}</td>
                    <td>${stores.hours[4]}</td>
                    <td>${stores.hours[5]}</td>
                    <td>${stores.hours[6]}</td>
                    <td>${stores.hours[7]}</td>
                    <td>${stores.hours[8]}</td>
                    <td>${stores.hours[9]}</td>
                    <td>${stores.hours[10]}</td>
                    <td>${stores.hours[11]}</td>
                    <td>${stores.hours[12]}</td>
                    <td>${stores.hours[13]}</td>
                    <td>${stores.hours[14]}</td>
                    <td>${stores.dailyTotal}</td>
                </tr>
        `);
    };

    var store;
    for(var i = 0; i < stores.length; i++) {
        store = stores[i];

        var dom = render(store);

        table.appendChild(dom);
    }

})(window.module = window.module || {});