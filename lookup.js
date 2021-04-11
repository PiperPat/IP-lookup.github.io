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

    const pat_pco = "applications filed by nationals and applications filed through Paris Convention";
    const pat_pct = "PCT applications";
    const pat_div = "divided patent applications";
    const pat_coa = "applications for certificates of addition";

    const utl_pco = "applications filed by nationals and applications filed through Paris Convention";
    const utl_pct = "PCT applications";
    const utl_div = "divided utility model applications";

    const ind_app = "applications for industrial design";
    const ind_hag = "applications for industrial design through the Hague Agreement";
    const ind_div = "divided industrial design applications";

    const geo_src = "geographical indication application: Indication of source";
    const geo_org = "geographical indication application: Appellation of origin";
    const geo_lis = "applications for geographical indication through the Lisbon Agreement";
    const geo_div = "divided geographical indication applications";
    

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

    const bulgaria_pat = [BG, pat, /^10\d{6}[A-Z]?$/i];
    const bulgaria_spc = [BG, spc, /^14\d{6}[A-Z]?$/i];
    const bulgaria_umc = [BG, umc, /^U\d{6}[A-Z]?$/i];
    const bulgaria_ind = [BG, ind, /^D\d{6}[A-Z]?$/i];

    const brazil_pat_1 = [BR, pat_pco, /^10\d{10}$/i];
    const brazil_pat_2 = [BR, pat_pct, /^11\d{10}$/i];
    const brazil_pat_3 = [BR, pat_div, /^12\d{10}$/i];
    const brazil_pat_4 = [BR, pat_coa, /^13\d{10}$/i];
    const brazil_utl_1 = [BR, utl_pco, /^20\d{10}$/i];
    const brazil_utl_2 = [BR, utl_pct, /^21\d{10}$/i];
    const brazil_utl_3 = [BR, utl_div, /^22\d{10}$/i];
    const brazil_ind_1 = [BR, ind_app, /^30\d{10}$/i];
    const brazil_ind_2 = [BR, ind_hag, /^31\d{10}$/i];
    const brazil_ind_3 = [BR, ind_div, /^32\d{10}$/i];
    const brazil_geo_1 = [BR, geo_src, /^40\d{10}$/i];
    const brazil_geo_2 = [BR, geo_org, /^41\d{10}$/i];
    const brazil_geo_3 = [BR, geo_lis, /^42\d{10}$/i];
    const brazil_geo_4 = [BR, geo_div, /^43\d{10}$/i];

    const austria = [austrian_pat, austrian_spc, austrian_umc, austrian_tmk, austrian_ind, austrian_lay];
    const australia = [australian_pat, australian_tmk, australian_ind];
    const bosnia_herz = [bosnia_herz_pat, bosnia_herz_tmk, bosnia_herz_ind];
    const belgium = [belgium_pat, belgium_spc, belgium_pvc];
    const bulgaria = [bulgaria_pat, bulgaria_spc, bulgaria_umc, bulgaria_ind];
    const brazil = [
        brazil_pat_1, brazil_pat_2, brazil_pat_3, brazil_pat_4,
        brazil_utl_1, brazil_utl_2, brazil_utl_3,
        brazil_ind_1, brazil_ind_2, brazil_ind_3, 
        brazil_geo_1, brazil_geo_2, brazil_geo_3, brazil_geo_4  
    ];

    const countries = [austria, australia, bosnia_herz, belgium, bulgaria, brazil];

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