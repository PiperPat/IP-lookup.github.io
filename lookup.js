function lookup() {

    let query = document.getElementById("mystery-string").value;
    let found_match = false;

    const pat = "Patent";
    const spc = "SPC (Supplementary Protection Certificates)";
    const umc = "Utility Model / Utility certificate OR International utility model application under the PCT (PCT application in the national phase)";
    const tmk = "Trade Mark";
    const ind = "Industrial design";
    const lay = "Layout-design (topography) of integrated circuits";


    const austrian_pat = [/^a \d{3}\/\d{4}$/i, pat, AT];
    const austrian_spc = [/^sz \d{3}\/\d{4}$/i, spc, AT];
    const austrian_umc = [/^gm \d{3}\/\d{4}$/i, umc, AT];
    const austrian_tmk = [/^am \d{3}\/\d{4}$/i, tmk, AT];
    const austrian_ind = [/^mu \d{3}\/\d{4}$/i, ind, AT];
    const austrian_lay = [/^hl \d{3}\/\d{4}$/i, lay, AT];

    const australian_pat = [/^\d{10}$/i, pat, AU];
    const australian_tmk = [/^\d{7}$/i, tmk, AU];
    const australian_ind = [/^\d{9}$/i, ind, AU];

    const bosnia_herz_pat = [/^bap \d{2} \d{3,}$/i, pat, BA];
    const bosnia_herz_tmk = [/^baz \d{2} \d{3,}$/i, tmk, BA];
    const bosnia_herz_ind = [/^bad \d{2} \d{3,}$/i, ind, BA];

    const austria = [austrian_pat, austrian_spc, austrian_umc, austrian_tmk, austrian_ind, austrian_lay];
    const australia = [australian_pat, australian_tmk, australian_ind];
    const bosnia_herz = [bosnia_herz_pat, bosnia_herz_tmk, bosnia_herz_ind];

    const countries = [austria, australia, bosnia_herz];

    countries.forEach(country => {
        country.forEach(type => {
            let regex = type[0];
            if (regex.test(query)) {
                document.getElementById('result').innerText = "" + type[2] + ": " + type[1];
                found_match = true;
            }
        });
    });


    // australia.forEach(type => {
    //     let regex = type[0];
    //     if (regex.test(query)) {
    //         if (type[1] == pat) {
    //             let query_arr = query.split('');
    //             let patent_type = 'unknown type';
    //             if (query_arr[4] == 9) patent_type = 'provisional';
    //             else if (query_arr[4] == 2) patent_type = 'standard';
    //             else if (query_arr[4] == 1) patent_type = 'innovation';
    //             document.getElementById('result').innerText = "Australia: " + type[1] + " (" + patent_type + ")";
    //         } else {
    //             document.getElementById('result').innerText = "Australia: " + type[1];
    //         }
    //         found_match = true;
    //     }
    // });

    // austria.forEach(type => {
    //     let regex = type[0];
    //     if (regex.test(query)) {
    //         document.getElementById('result').innerText = "" + type[2] + ": " + type[1];
    //         found_match = true;
    //     }
    // });
    if (!found_match) document.getElementById('result').innerText = "that doesn't match any IP known format";

}