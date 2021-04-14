/**
 *      Author: Anton Huggard
 *      Date: Apr, 2021
 * 
 *      Notes: Main JS file for this project, there's a simple forEach
 *      that loops through every country/ip-type to see if a search
 *      query matches any known ip numbering formats.
 *      Dependent on: formats.js, ip_types.js, filters.js
 */

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        lookup();
    }
});

function lookup() {

    let e = document.getElementById('filter');
    let filter = e.value;
    switch (filter) {
        case 'pat':
            filter = filters.pat;
            break;
        case 'tmk':
            filter = filters.tmk;
            break;
        case 'ind':
            filter = filters.ind;
            break;
        case 'oth':
            filter = filters.oth;
            break;
    }

    let query = document.getElementById("mystery-string").value;
    let found_match = false;
    let results = [];

    countries.forEach(country => {
        country.forEach(type => {
            let regex = type[2];
            if (regex.test(query)) {
                if (filter.includes(type[1]) || filter == "all") results.push(type[0] + ": " + type[1]);
                found_match = true;
                if (type[0] == IT) { // special handling for italian provinces
                    let prov_code = query.substring(0, 2);
                    it_prov_codes.forEach(it_prov => {
                        if (it_prov[0] == prov_code) {
                            results.pop();
                            results.push(type[0] + ", province of " + it_prov[1] + ": " + type[1]);
                        }
                    });
                }
            }
        });
    });

    let err = "that doesn't match any IP known format<br>";
    err = err + "If your query number contains a hyphen, try deleting and manually typing it."

    if (!found_match) document.getElementById('result').innerHTML = err;
    else {
        let html = "";
        if (results.length > 1) html = html + "<strong>That query matches more than one IP numbering system</strong><br>";
        results.forEach(hit => {
            html = html + hit + " <br>";
        });
        document.getElementById('result').innerHTML = html;
    }
}