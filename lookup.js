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
                if (filter.includes(type[1]) || filter == "all") results.push(
                    "<td>" + type[0] + "</td>" + 
                    "<td>" + type[1] + "</td>"
                    );
                found_match = true;

                if (type[0] == IT || type[0] == MX) { // special handling for italian & mexican provinces
                    let prov_code = query.substring(0, 2);
                    it_prov_codes.forEach(country_prov => {
                        if (country_prov[0] == prov_code) {
                            results.pop();
                            results.push(
                                "<td>" + type[0] + "</td>" +
                                "<td>" + type[1] + "</td>" +
                                "<td> province of " + country_prov[1] + "</td>"
                                );
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
            // html = html + "<tr>" + hit + " <tr>";
            let new_row = document.createElement("tr");
            new_row.innerHTML = hit;
            document.getElementById('results').appendChild(new_row);
        });
        
        // document.getElementById('result').innerHTML = html;
        
    }
}