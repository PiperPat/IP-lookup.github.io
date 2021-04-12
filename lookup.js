function lookup() {

    let query = document.getElementById("mystery-string").value;
    let found_match = false;
    let results = [];

    countries.forEach(country => {
        // Australia is a basket case
        if (country[0][0] == AU) {
            country.forEach(type => {
                let regex = type[2];
                if (regex.test(query)) {
                    if (type[1] == pat) {
                        let query_arr = query.split('');
                        let patent_type = 'unknown type';
                        if (query_arr[4] == 9) patent_type = 'provisional';
                        else if (query_arr[4] == 2) patent_type = 'standard';
                        else if (query_arr[4] == 1) patent_type = 'innovation';
                        results.push("Australia: " + type[1] + " (" + patent_type + ")");
                    } else {
                        results.push("Australia: " + type[1]);
                    }
                    found_match = true;
                }
            });
        } else {
            country.forEach(type => {
                let regex = type[2];
                if (regex.test(query)) {
                    results.push(type[0] + ": " + type[1]);
                    found_match = true;
                }
            });
        }
    });

    if (!found_match) document.getElementById('result').innerText = "that doesn't match any IP known format";
    else {
        let html = "";
        if (results.length > 1) html = html + "<strong>That query matches more than one IP numbering system</strong><br>";
        results.forEach(hit => {
            html = html + hit + " <br>";
        });
        document.getElementById('result').innerHTML = html;
    }

}