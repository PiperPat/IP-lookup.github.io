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
            }
        });
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