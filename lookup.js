function lookup() {

    let query = document.getElementById("mystery-string").value;
    let found_match = false;

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
                        document.getElementById('result').innerText = "Australia: " + type[1] + " (" + patent_type + ")";
                    } else {
                        document.getElementById('result').innerText = "Australia: " + type[1];
                    }
                    found_match = true;
                }
            });
        } else {
            country.forEach(type => {
                let regex = type[2];
                if (regex.test(query)) {
                    document.getElementById('result').innerText = "" + type[0] + ": " + type[1];
                    found_match = true;
                }
            });
        }
    });

    if (!found_match) document.getElementById('result').innerText = "that doesn't match any IP known format";

}