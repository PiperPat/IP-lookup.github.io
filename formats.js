const pat = "Patents";
const spc = "SPCs (Supplementary Protection Certificates)";
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
const ind_nat = ind + " (national line)";
const ind_int = ind + " (international line)";
const ind_reg = ind + " Registrations";
const ind_rec = ind + " (Recordal)";
const ind_inv = ind + " (Invalidation)";

const geo_src = "geographical indication application: Indication of source";
const geo_org = "geographical indication application: Appellation of origin";
const geo_lis = "applications for geographical indication through the Lisbon Agreement";
const geo_div = "divided geographical indication applications";
const geo_usr = "Users of geographical indications and designations of origin";

const tmk_nat = tmk + " (national line)";
const tmk_int = tmk + " (international line)";
const tmk_reg = tmk + " (Registration)";
const tmk_opp = tmk + " (Opposition)";
const tmk_rec = tmk + " (Recordal)";
const tmk_can = tmk + " (Cancellation)";
const tmk_apl = tmk + " (Appeal)";
const tmk_ptl = tmk + " (PT-Logotype)";
const tmk_esn = tmk + " (ES-Commercial name)";
const tmk_ese = tmk + " (ES-Title of establishment)";

const spc_ppp = spc + " for plant protection products";
const spc_med = spc + " for medicinal products before 2008";
const spc_bth = spc + "for both plant protection products and medicinal products from 2008 onwards"


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

const brazil_pat_1 = [BR, pat_pco, /^(BR\s)?10\d{10}$/i];
const brazil_pat_2 = [BR, pat_pct, /^(BR\s)?11\d{10}$/i];
const brazil_pat_3 = [BR, pat_div, /^(BR\s)?12\d{10}$/i];
const brazil_pat_4 = [BR, pat_coa, /^(BR\s)?13\d{10}$/i];
const brazil_utl_1 = [BR, utl_pco, /^(BR\s)?20\d{10}$/i];
const brazil_utl_2 = [BR, utl_pct, /^(BR\s)?21\d{10}$/i];
const brazil_utl_3 = [BR, utl_div, /^(BR\s)?22\d{10}$/i];
const brazil_ind_1 = [BR, ind_app, /^(BR\s)?30\d{10}$/i];
const brazil_ind_2 = [BR, ind_hag, /^(BR\s)?31\d{10}$/i];
const brazil_ind_3 = [BR, ind_div, /^(BR\s)?32\d{10}$/i];
const brazil_geo_1 = [BR, geo_src, /^(BR\s)?40\d{10}$/i];
const brazil_geo_2 = [BR, geo_org, /^(BR\s)?41\d{10}$/i];
const brazil_geo_3 = [BR, geo_lis, /^(BR\s)?42\d{10}$/i];
const brazil_geo_4 = [BR, geo_div, /^(BR\s)?43\d{10}$/i];
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

const eurasia_pat = [EA, pat, /^(EA\s?)?\d{9}$/];

const estonia_pat = [EE, pat, /^P\d{9}$/i];
const estonia_spc = [EE, spc, /^C\d{9}$/i];
const estonia_umc = [EE, umc, /^U\d{9}$/i];
const estonia_uma = [EE, uma, /^P\d{9}$/i];
const estonia_tmn = [EE, tmk_nat, /^M\d{9}$/i];
const estonia_inn = [EE, ind_nat, /^D\d{9}$/i];
const estonia_tmi = [EE, tmk_int, /^R\d{9}$/i];
const estonia_ini = [EE, ind_int, /^H\d{9}$/i];
const estonia_geo = [EE, geo, /^G\d{9}$/i];
const estonia_pat_div = [EE, pat_div, /^P\d{9}[A-Z]*$/i];
const estonia_spc_div = [EE, spc + ' (divisional)', /^C\d{9}[A-Z]*$/i];
const estonia_umc_div = [EE, umc + ' (divisional)', /^U\d{9}[A-Z]*$/i];
const estonia_uma_div = [EE, uma + ' (divisional)', /^P\d{9}[A-Z]*$/i];
const estonia_tmn_div = [EE, tmk_nat + ' (divisional)', /^M\d{9}[A-Z]*$/i];
const estonia_inn_div = [EE, ind_nat + ' (divisional)', /^D\d{9}[A-Z]*$/i];
const estonia_tmi_div = [EE, tmk_int + ' (divisional)', /^R\d{9}[A-Z]*$/i];
const estonia_ini_div = [EE, ind_int + ' (divisional)', /^H\d{9}[A-Z]*$/i];
const estonia_geo_div = [EE, geo_div, /^G\d{9}[A-Z]*$/i];

const ohim_tmk = [EM, tmk, /^(EM)?(500000)?\d{9}$/i];
const ohim_tmr = [EM, tmk_reg, /^(EM)?(510000)?\d{9}$/i];
const ohim_tmo = [EM, tmk_opp, /^(EM)?(520000)?\d{9}$/i];
const ohim_tmd = [EM, tmk_rec, /^(EM)?(530000)?\d{9}$/i];
const ohim_tmc = [EM, tmk_can, /^(EM)?(540000)?\d{9}$/i];
const ohim_tma = [EM, tmk_apl, /^(EM)?(550000)?\d{9}$/i];
const ohim_tml = [EM, tmk_ptl, /^(EM)?(600000)?\d{9}$/i];
const ohim_tmn = [EM, tmk_esn, /^(EM)?(610000)?\d{9}$/i];
const ohim_tme = [EM, tmk_ese, /^(EM)?(620000)?\d{9}$/i];
const ohim_ind = [EM, ind, /^(EM)?(700000)?\d{9}$/i];
const ohim_idr = [EM, ind_reg, /^(EM)?(710000)?\d{9}$/i];
const ohim_idi = [EM, ind_inv, /^(EM)?(720000)?\d{9}$/i];

const eur_pat = [EP, pat, /^\d{8}(\.\d)?$/i];

const spain_pat = [ES, pat, /^([P03]|ES)\d{9}$/i];
const spain_pct = [ES, pat_pct, /^[P59]\d{9}|ES\d{9}U$/i];
const spain_spc = [ES, spc, /^C\d{9}$/i];

const finnish_pat = [FI, pat, /^\d{8}$/i]; // 20120001
const finnish_med = [FI, spc_med, /^L\d{8}$/i];
const finnish_pla = [FI, spc_ppp, /^K\d{8}$/i];
const finnish_bth = [FI, spc_bth, /^C\d{8}$/i];
const finnish_umc = [FI, umc, /^U\d{8}$/i];

const britain_pat = [GB, pat, /^\d{7}(\.\d)?$/i];

const croatia_pat = [HR, pat + ' OR ' + pat_pct, /^P\d{8}[A-Z]$/i]; //P20110001A
const croatia_tmk = [HR, tmk, /^Z\d{8}[A-Z]$/i];
const croatia_ind = [HR, ind, /^$D\d{8}[A-Z]/i];
const croatia_lay = [HR, lay, /^T\d{8}[A-Z]$/i];
const croatia_geo = [HR, geo, /^G\d{8}[A-Z]$/i];
const croatia_org = [HR, geo_usr, /^K\d{8}[A-Z]$/i];

const ireland_pat = [IE, pat, /^\d{4}\/\d{4}$/i];

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
const eurasia = [eurasia_pat];
const estonia = [
    estonia_pat,
    estonia_spc,
    estonia_umc,
    estonia_uma,
    estonia_tmn,
    estonia_inn,
    estonia_tmi,
    estonia_ini,
    estonia_geo,
    estonia_pat_div,
    estonia_spc_div,
    estonia_umc_div,
    estonia_uma_div,
    estonia_tmn_div,
    estonia_inn_div,
    estonia_tmi_div,
    estonia_ini_div,
    estonia_geo_div
];
const ohim = [
    ohim_tmk, ohim_tmr, ohim_tmo, ohim_tmd, ohim_tmc, ohim_tma, ohim_tml, ohim_tmn, ohim_tme,
    ohim_ind, ohim_idr, ohim_idi
];
const europe = [eur_pat];
const spain = [spain_pat, spain_pct, spain_spc];
const finland = [finnish_pat, finnish_med, finnish_pla, finnish_bth, finnish_umc];
const great_britain = [britain_pat];
const croatia = [croatia_pat, croatia_tmk, croatia_ind, croatia_lay, croatia_geo, croatia_org];
const ireland = [ireland_pat];

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
    germany,
    eurasia,
    estonia,
    ohim,
    europe,
    spain,
    finland,
    great_britain,
    croatia,
    ireland
];