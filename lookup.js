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

// helper fn for lookup() -- rms weird formatting
function car_wash(dirty_str) {
    let clean_str = '';
    for (let i = 0; i < dirty_str.length; i++) {
        if (dirty_str.charCodeAt(i) == 8211) clean_str[i] = "-";
        else clean_str = clean_str + dirty_str[i];
    }
    return clean_str.trim();
}

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

    let query = car_wash(document.getElementById("mystery-string").value);
    let found_match = false;
    let results = [];

    countries.forEach(country => {
        country.forEach(type => {
            let regex = type[2];
            let match = query.match(regex);
            if (match && query === match[0]) { // regex.test(query)
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
                } else if (type[0] == MX) { // special handling for mexican provinces
                    let prov_code = query.substring(0, 2);
                    mx_prov_codes.forEach(mx_prov => {
                        if (mx_prov[0] == prov_code) {
                            results.pop();
                            results.push(type[0] + " (province of " + mx_prov[1] + "): " + type[1]);
                        }
                    });
                }
            }
        });
    });

    let err = "that doesn't match any IP known format<br>";

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