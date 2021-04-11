function lookup() {

    let query = document.getElementById("mystery-string").value;
    let found_match = false;

    const pat = "Patent";
    const spc = "SPC (Supplementary Protection Certificates)";
    const umc = "Utility Model / Utility certificate OR International utility model application under the PCT (PCT application in the national phase)";
    const tmk = "Trade Mark";
    const ind = "Industrial design";
    const lay = "Layout-design (topography) of integrated circuits";
    const pvc = "Certificate for new plants variety";


    const austrian_pat = [AT, pat, /^a \d{3}\/\d{4}$/i];
    const austrian_spc = [AT, spc, /^sz \d{3}\/\d{4}$/i];
    const austrian_umc = [AT, umc, /^gm \d{3}\/\d{4}$/i];
    const austrian_tmk = [AT, tmk, /^am \d{3}\/\d{4}$/i];
    const austrian_ind = [AT, ind, /^mu \d{3}\/\d{4}$/i];
    const austrian_lay = [AT, lay, /^hl \d{3}\/\d{4}$/i];

    const australian_pat = [AU, pat, /^\d{10}$/i];
    const australian_tmk = [AU, tmk, /^\d{7}$/i];
    const australian_ind = [AU, ind, /^\d{9}$/i];

    const bosnia_herz_pat = [BA, pat, /^bap \d{2} \d{3,}$/i];
    const bosnia_herz_tmk = [BA, tmk, /^baz \d{2} \d{3,}$/i];
    const bosnia_herz_ind = [BA, ind, /^bad \d{2} \d{3,}$/i];

    const belgium_pat = [BE, pat, /^\d{4}\\\d{4}$/i]; // not working
    const belgium_spc = [BE, spc, /^\d{4} C \/ \d{3} $/i]; // not working
    const belgium_pvc = [BE, pvc, /^\d{5}$/i];

    const austria = [austrian_pat, austrian_spc, austrian_umc, austrian_tmk, austrian_ind, austrian_lay];
    const australia = [australian_pat, australian_tmk, australian_ind];
    const bosnia_herz = [bosnia_herz_pat, bosnia_herz_tmk, bosnia_herz_ind];
    const belgium = [belgium_pat, belgium_spc, belgium_pvc];

    const countries = [austria, australia, bosnia_herz, belgium];

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