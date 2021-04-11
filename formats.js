const pat = "Patents";
const spc = "SPC (Supplementary Protection Certificates)";
const umc = "Utility Models / Utility certificates OR International utility model application under the PCT (PCT application in the national phase)";
const uma = "International utility model application under the PCT (PCT application in the national phase)";
const tmk = "Trade Marks";
const ind = "Industrial designs";
const lay = "Layout-design (topography) of integrated circuits";
const pvc = "Certificates for new plants variety";
const geo = "Geographical Indications";
const msc = "Any type of IP (excluding trade marks)";

const pat_pco = "applications filed by nationals and applications filed through Paris Convention";
const pat_pct = "PCT applications";
const pat_div = "divided patent applications";
const pat_coa = "applications for certificates of addition";
const pat_pla = "plant patents";

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

const brazil_pat_1 = [BR, pat_pco, /^(BR )?10\d{10}$/i];
const brazil_pat_2 = [BR, pat_pct, /^(BR )?11\d{10}$/i];
const brazil_pat_3 = [BR, pat_div, /^(BR )?12\d{10}$/i];
const brazil_pat_4 = [BR, pat_coa, /^(BR )?13\d{10}$/i];
const brazil_utl_1 = [BR, utl_pco, /^(BR )?20\d{10}$/i];
const brazil_utl_2 = [BR, utl_pct, /^(BR )?21\d{10}$/i];
const brazil_utl_3 = [BR, utl_div, /^(BR )?22\d{10}$/i];
const brazil_ind_1 = [BR, ind_app, /^(BR )?30\d{10}$/i];
const brazil_ind_2 = [BR, ind_hag, /^(BR )?31\d{10}$/i];
const brazil_ind_3 = [BR, ind_div, /^(BR )?32\d{10}$/i];
const brazil_geo_1 = [BR, geo_src, /^(BR )?40\d{10}$/i];
const brazil_geo_2 = [BR, geo_org, /^(BR )?41\d{10}$/i];
const brazil_geo_3 = [BR, geo_lis, /^(BR )?42\d{10}$/i];
const brazil_geo_4 = [BR, geo_div, /^(BR )?43\d{10}$/i];
const brazil_tmk = [BR, tmk, /^\d{9}$/i];

const belarus_pat = [BY, pat + " and " + pat_pct, /^a\s?\d{8}$/i];
const belarus_pct = [BY, pat_pla, /^v\s?\d{8}$/i];
const belarus_umc = [BY, umc, /^u\s?\d{8}$/i];
const belarus_ind = [BY, ind, /^f\s?\d{8}$/i];
const belarus_lay = [BY, lay, /^t\s?\d{8}$/i];
const belarus_geo = [BY, geo, /^g\s?\d{8}$/i];
const belarus_tmk = [BY, tmk, /^\d{8}$/i];

const canada_pat = [CA, pat + ", " + pat_pct + ", " + tmk, /^(CA )?\d{7}$/i];
const canada_ind = [CA, ind, /^(CA )?\d{6}$/i];

const china_pat = [CN, pat, /^\d{4}1\d{7}\.\d$/i];
const china_pct = [CN, pat_pct, /^\d{4}8\d{7}\.\d$/i];
const china_umc = [CN, umc, /^\d{4}[9,2]\d{7}\.\d$/i];
const china_ind = [CN, ind, /^\d{4}3\d{7}\.\d$/i];

const costa_rica_msc = [CR, msc, /^\d{4}-\d$/i];
const costa_rica_tmk = [CR, tmk, /^\d{4}-\d{4}$/i];

const czech_pat = [CZ, pat + ", " + pat_pct, /^(PV|CZ)\s?\d{4}-\d{1,10}$/i];
const czech_umcA = [CZ, umc, /^PUV\s?\d{4}-\d{1,10}$/i];
const czech_umcB = [CZ, umc, /^CZ\s?\d{4}-\d{1,10}\s?U$/i];
const czech_ind = [CZ, ind, /^PVZ\s?\d{4}-\d{1,10}$/i];
const czech_lay = [CZ, lay, /^PTO\s?\d{4}-\d{1,10}$/i];
const czech_apl = [CZ, geo_org, /^OP\s?\d{4}-\d{1,10}$/i];
const czech_geo = [CZ, geo, /^ZO\s?\d{4}-\d{1,10}$/i];
const czech_tmk = [CZ, tmk, /^O-\d{1,10}$/i];
const czech_spc = [CZ, spc, /^SPC\/CZ\d{4}\/\d{1,10}$/i];

const germany_pat = [DE, pat, /^10\s?\d{4}\s?\d{3}\s?\d{3}\.\d$/i];
const germany_pct = [DE, pat_pct, /^11\s?\d{4}\s?\d{3}\s?\d{3}\.\d$/i];
const germany_spc = [DE, spc, /^12\s?\d{4}\s?\d{3}\s?\d{3}\.\d$/i];
const germany_umc = [DE, umc, /^20\s?\d{4}\s?\d{3}\s?\d{3}\.\d$/i];
const germany_uma = [DE, uma, /^21\s?\d{4}\s?\d{3}\s?\d{3}\.\d$/i];
const germany_lay = [DE, lay, /^22\s?\d{4}\s?\d{3}\s?\d{3}\.\d$/i];
const germany_tmk = [DE, tmk, /^30\s?\d{4}\s?\d{3}\s?\d{3}\.\d$/i];
const germany_geo = [DE, geo, /^31\s?\d{4}\s?\d{3}\s?\d{3}\.\d$/i];
const germany_ind = [DE, ind, /^40\s?\d{4}\s?\d{3}\s?\d{3}\.\d$/i];

const austria = [austrian_pat, austrian_spc, austrian_umc, austrian_tmk, austrian_ind, austrian_lay];
const australia = [australian_pat, australian_tmk, australian_ind];
const bosnia_herz = [bosnia_herz_pat, bosnia_herz_tmk, bosnia_herz_ind];
const belgium = [belgium_pat, belgium_spc, belgium_pvc];
const bulgaria = [bulgaria_pat, bulgaria_spc, bulgaria_umc, bulgaria_ind];
const brazil = [
    brazil_pat_1, brazil_pat_2, brazil_pat_3, brazil_pat_4,
    brazil_utl_1, brazil_utl_2, brazil_utl_3,
    brazil_ind_1, brazil_ind_2, brazil_ind_3,
    brazil_geo_1, brazil_geo_2, brazil_geo_3, brazil_geo_4,
    brazil_tmk
];
const belarus = [
    belarus_pat, belarus_pct,
    belarus_umc, belarus_ind, belarus_lay, belarus_geo,
    belarus_tmk
];
const canada = [canada_pat, canada_ind];
const china = [china_pat, china_pct, china_umc, china_ind];
const costa_rica = [costa_rica_msc, costa_rica_tmk];
const czech = [
    czech_pat,
    czech_umcA, czech_umcB,
    czech_ind,
    czech_lay,
    czech_apl,
    czech_geo,
    czech_tmk,
    czech_spc
];
const germany = [
    germany_pat, germany_pct, germany_spc,
    germany_umc, germany_uma, germany_lay,
    germany_tmk, germany_geo,
    germany_ind
];

const countries = [
    austria,
    australia,
    bosnia_herz,
    belgium,
    bulgaria,
    brazil,
    belarus,
    canada,
    china,
    costa_rica,
    czech,
    germany
];