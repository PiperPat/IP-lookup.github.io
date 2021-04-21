const r_y = /[1,2][8,9,0]\d{2}/;
const r_y_2 = /[012789]\d/; // needs to be updated in the 2030s but acts as useful constraint for now
const r_last = /\s\d{5}/;


const austrian_pat = [AT, pat, /^a \d{3}\/\d{4}$/i];
const austrian_spc = [AT, spc, /^sz \d{3}\/\d{4}$/i];
const austrian_umc = [AT, umc, /^gm \d{3}\/\d{4}$/i];
const austrian_tmk = [AT, tmk, /^am \d{3}\/\d{4}$/i];
const austrian_ind = [AT, ind, /^mu \d{3}\/\d{4}$/i];
const austrian_lay = [AT, lay, /^hl \d{3}\/\d{4}$/i];

const australian_pat = [AU, pat, /^\d{10}$/i];
const australia_pat_def = [AU, pat_wiz, /^[1,2][8,9,0]\d{2}[2-7]\d{5}$/];
const australia_pat_prv = [AU, pat_prv, /^[1,2][8,9,0]\d{2}[9]\d{5}$/];
const australia_pat_inn = [AU, inn, /^[1,2][8,9,0]\d{2}[1]\d{5}$/];


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

const belarus_pat = [BY, pat_pcn, /^a\s?\d{8}$/i];
const belarus_pct = [BY, pat_pla, /^v\s?\d{8}$/i];
const belarus_umc = [BY, umc, /^u\s?\d{8}$/i];
const belarus_ind = [BY, ind, /^f\s?\d{8}$/i];
const belarus_lay = [BY, lay, /^t\s?\d{8}$/i];
const belarus_geo = [BY, geo, /^g\s?\d{8}$/i];
const belarus_tmk = [BY, tmk, /^\d{8}$/i];

const canada_pat = [CA, can, /^(CA )?\d{7}$/i];
const canada_ind = [CA, ind, /^(CA )?\d{6}$/i];

const china_pat = [CN, pat, /^\d{4}1\d{7}\.\d$/i];
const china_pct = [CN, pat_pct, /^\d{4}8\d{7}\.\d$/i];
const china_umc = [CN, umc, /^\d{4}[9,2]\d{7}\.\d$/i];
const china_ind = [CN, ind, /^\d{4}3\d{7}\.\d$/i];

const costa_rica_msc = [CR, msc, /^\d{4}-\d$/i];
const costa_rica_tmk = [CR, tmk, /^\d{4}-\d{4}$/i];

const czech_pat = [CZ, pat_wiz, /^(PV|CZ)\s?\d{4}-\d{1,10}$/i];
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
const germany_uma = [DE, umc_int, /^21\s?\d{4}\s?\d{3}\s?\d{3}\.\d$/i];
const germany_lay = [DE, lay, /^22\s?\d{4}\s?\d{3}\s?\d{3}\.\d$/i];
const germany_tmk = [DE, tmk, /^30\s?\d{4}\s?\d{3}\s?\d{3}\.\d$/i];
const germany_geo = [DE, geo, /^31\s?\d{4}\s?\d{3}\s?\d{3}\.\d$/i];
const germany_ind = [DE, ind, /^40\s?\d{4}\s?\d{3}\s?\d{3}\.\d$/i];

const eurasia_pat = [EA, pat, /^(EA\s?)?\d{9}$/];

// estonia now using proper year regex -- [1,2][8,9,0]\d{2}
const estonia_pat = [EE, pat, /^P[1,2][8,9,0]\d{2}\d{5}$/i];
const estonia_spc = [EE, spc, /^C[1,2][8,9,0]\d{2}\d{5}$/i];
const estonia_umc = [EE, umc, /^U[1,2][8,9,0]\d{2}\d{5}$/i];
const estonia_uma = [EE, umc_int, /^P[1,2][8,9,0]\d{2}\d{5}$/i];
const estonia_tmn = [EE, tmk_nat, /^M[1,2][8,9,0]\d{2}\d{5}$/i];
const estonia_inn = [EE, ind_nat, /^D[1,2][8,9,0]\d{2}\d{5}$/i];
const estonia_tmi = [EE, tmk_int, /^R[1,2][8,9,0]\d{2}\d{5}$/i];
const estonia_ini = [EE, ind_int, /^H[1,2][8,9,0]\d{2}\d{5}$/i];
const estonia_geo = [EE, geo, /^G[1,2][8,9,0]\d{2}\d{5}$/i];
const estonia_pat_div = [EE, pat_div, /^P\d{9}[A-Z]*$/i];
const estonia_spc_div = [EE, spc_div, /^C\d{9}[A-Z]*$/i];
const estonia_umc_div = [EE, umc_div, /^U\d{9}[A-Z]*$/i];
const estonia_uma_div = [EE, umc_idv, /^P\d{9}[A-Z]*$/i];
const estonia_tmn_div = [EE, tmk_ndv, /^M\d{9}[A-Z]*$/i];
const estonia_inn_div = [EE, ind_ndv, /^D\d{9}[A-Z]*$/i];
const estonia_tmi_div = [EE, tmi_div, /^R\d{9}[A-Z]*$/i];
const estonia_ini_div = [EE, ind_idv, /^H\d{9}[A-Z]*$/i];
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

const croatia_pat = [HR, pat_wiz, /^P\s?\d{8}\s[A-Z]$/i]; //P20110001A
const croatia_tmk = [HR, tmk, /^Z\d{8}[A-Z]$/i];
const croatia_ind = [HR, ind, /^$D\d{8}[A-Z]/i];
const croatia_lay = [HR, lay, /^T\d{8}[A-Z]$/i];
const croatia_geo = [HR, geo, /^G\d{8}[A-Z]$/i];
const croatia_org = [HR, geo_usr, /^K\d{8}[A-Z]$/i];

const ireland_pat = [IE, pat, /^[1,2][8,9,0]\d{2}\/\d{4}$/];

const israel_pat = [IL, pat, /^1\d{5}$/i];
const israel_tmk = [IL, tmk, /^2\d{5}$/i];
const israel_ind = [IL, ind, /^5\d{4}$/i];

const italy_pat = [IT, pat, /^[A-Z]{2}([1,2][8,9,0])?\d{2}A?(\d{2})?\d{4}(\sA)?$/]; // From Current doc
const italy_pla = [IT, pat_pla, /^[A-Z]{2}([1,2][8,9,0])?\d{2}V?(\d{2})?\d{4}(\sV)?$/];
const italy_spc = [IT, spc, /^[A-Z]{2}([1,2][8,9,0])?\d{2}P?(\d{2})?\d{4}(\sP)?$/]; // P
const italy_umc = [IT, umc, /^[A-Z]{2}([1,2][8,9,0])?\d{2}U?(\d{2})?\d{4}(\sU)?$/];
const italy_tmk = [IT, tmk, /^[A-Z]{2}([1,2][8,9,0])?\d{2}C?(\d{2})?\d{4}(\sC)?$/]; // C
const italy_ind = [IT, ind, /^[A-Z]{2}([1,2][8,9,0])?\d{2}O?(\d{2})?\d{4}(\sO)?$/]; //O
const italy_lay = [IT, lay, /^[A-Z]{2}([1,2][8,9,0])?\d{2}S?(\d{2})?\d{4}(\sS)?$/]; // S

const italy_old_pat = [ITO, pat_it1, /^(\d{5}\sA\/\d{2})|(\d{5}\/\d{2})$/]; // from Historic doc 19001 A/73
const italy_old_uma = [ITO, pat_it2, /^(\d{5}\sB\/\d{2})|\d{5}\/\d{2}\sU$/];

const japan_all = [JP, all, /^\d{4}-?\d{6}$/];

const lithuania_pat = [LT, pat, /^[1,2][8,9,0]\d{2}\s\d{3}$/];
const lithuania_tmk = [LT, tmk, /^[1,2][8,9,0]\d{2}\s\d{4}$/];
const lithuania_spc = [LT, spc, /^PA\s?[1,2][8,9,0]\d{2}\s\d{3}$/];
const lithuania_old = [LT, pat_lt1, /^\d{2}-\d{3}$/];

const moldova_pat = [MD, pat_wiz, /^(md\s?)?a\s?[1,2][8,9,0]\d{2}\s?\d{4}$/i];
const moldova_inn = [MD, inn, /^(md\s?)?s\s?[1,2][8,9,0]\d{2}\s?\d{4}$/i];
const moldova_pla = [MD, pat_pla, /^(md\s?)?v\s?[1,2][8,9,0]\d{2}\s?\d{4}$/i];
const moldova_umc = [MD, umc, /^(md\s?)?u\s?[1,2][8,9,0]\d{2}\s?\d{4}$/i];
const moldova_ind = [MD, ind, /^(md\s?)?f\s?[1,2][8,9,0]\d{2}\s?\d{4}$/i];
const moldova_lay = [MD, lay, /^(md\s?)?t\s?[1,2][8,9,0]\d{2}\s?\d{4}$/i];
const moldova_tmk = [MD, tmk, /^(md\s?)?\d{6}$/i];
const moldova_old = [MD, pat_md1, /^\d{2}-\d{4}$/];

const poland_pat = [PL, pat_wiz, /^(P\.)?\d{5,6}$/i];
const poland_umc = [PL, umc, /^(W\.)?\d{5,6}$/i];
const poland_tmk = [PL, tmk, /^(Z\.)?\d{5,6}$/i];
const poland_ind = [PL, ind, /^(Wp\.)?\d{4,5}$/i];
const poland_spc = [PL, spc, /^\d{4}\/\d{7}$/i];

const romania_pat = [RO, pat_wiz, /^a\s?\d{4}\s?\d{5}$/i];
const romania_umc = [RO, umc_ori, /^u\s?\d{4}\s?\d{5}$/i];
const romania_tmk = [RO, tmk, /^M\s?\d{4}\s?\d{5}$/i];
const romania_ind = [RO, ind, /^f\s?\d{4}\s?\d{4}$/i];
const romania_spc = [RO, spc, /^$c\s?\d{4}\s?\d{3}/i];
const romania_lay = [RO, lay, /^$t\s?\d{4}\s?\d{2}/i];
const romania_old = [RO, pat_ro1, /^\d{2}-\d{4}$/];

const serbia_pat = [RS, pat_wiz, /^P-\d{4}\/\d{4}$/i];
const serbia_inn = [RS, inn, /^MP-\d{4}\/\d{4}$/i];
const serbia_tmk = [RS, tmk, /^Ж-\d{4}\/\d{4}$/i]; // doesn't work
const serbia_ind = [RS, ind, /^Д-\d{4}\/\d{4}$/i]; // doesn't work
const serbia_lay = [RS, lay, /^T-\d{4}\/\d{4}$/i];

const russia_pat = [RU, pat_ru1, /^(RU)?\d{4}[1-4]\d{5}$/]; //2006100001 YYYYTNNNNN
const russia_ind = [RU, ind, /^(RU)?\d{4}[5-6]\d{5}$/];
const russia_tmk = [RU, tmk, /^(RU)?\d{4}[7-9]\d{5}$/];
const russia_lay = [RU, lay, /^(RU)?\d{4}63\d{4}$/];
const russia_prg = [RU, prg, /^(RU)?\d{4}(61|66)\d{4}$/];
const russia_dtb = [RU, dtb, /^(RU)?\d{4}62\d{4}$/];
const russia_old = [RU, pat_ru2, RegExp(r_y_2.source + /\d{6}/.source)];

// from this point, I've started using YEAR regex properly
const sweden_tmk = [SE, tmk, /^[1,2][8,9,0]\d{2}\/\d{5}$/i];
const sweden_ind = [SE, ind, /^[1,2][8,9,0]\d{2}\/\d{4}$/i];
const sweden_pat0 = [SE, pat_se0, /^\d{2}0\d{4}-\d$/i];
const sweden_pat3 = [SE, pat_se3, /^\d{2}3\d{4}-\d$/i];
const sweden_pat5 = [SE, pat_se5, /^\d{2}5\d{4}-\d$/i];
const sweden_pat7 = [SE, pat_se7, /^\d{2}7\d{4}-\d$/i];
const sweden_pat9 = [SE, pat_se9, /^\d{2}9\d{4}-\d$/i];
const sweden_old = [SE, pat_no1, /^\d{5}\/\d{2}$/];

const slovakia_pat = [SK, pat_wiz, /^(PP\s?)?\d{5}-[1,2][8,9,0]\d{2}$/i];
const slovakia_uma = [SK, umc_int, /^(PUV\s?)?\d{5}-[1,2][8,9,0]\d{2}(\s?U)?$/i];
const slovakia_poz = [SK, tmk, /^(POZ\s?)?\d{4}-[1,2][8,9,0]\d{2}$/i];
const slovakia_ind = [SK, ind, /^(PD\s?)?\d{2}-[1,2][8,9,0]\d{2}$/i];
const slovakia_spc = [SK, spc, /^(PDO\s?)?\d{4}-[1,2][8,9,0]\d{2}$/i];
const slovakia_org = [SK, geo_app, /^(POP\s?)?\d{1}-[1,2][8,9,0]\d{2}$/i];
const slovakia_geo = [SK, geo, /^(PZO\s?)?\d{1}-[1,2][8,9,0]\d{2}$/i];
const slovakia_pto = [SK, lay, /^(PTO\s?)?\d{4}-[1,2][8,9,0]\d{2}$/i];
const ukraine_old = [UA, pat_ua1, /^9[2-9]\d{6}$/];
const ukraine_new = [UA, pat_ua2, RegExp(r_y.source + /\d{6}/.source)]; // 2000020923

const ukraine_pat = [UA, pat_wiz, /^a\s?[1,2][8,9,0]\d{2}\s?\d{5}$/i];
const ukraine_umc = [UA, umc, /^u\s?[1,2][8,9,0]\d{2}\s?\d{5}$/i];
const ukraine_tmk = [UA, tmk, /^m\s?[1,2][8,9,0]\d{2}\s?\d{5}$/i];
const ukraine_ind = [UA, ind, /^s\s?[1,2][8,9,0]\d{2}\s?\d{5}$/i];
const ukraine_lay = [UA, lay, /^t\s?[1,2][8,9,0]\d{2}\s?\d{5}$/i];
const ukraine_qog = [UA, qog, /^i\s?[1,2][8,9,0]\d{2}\s?\d{5}$/i];

const wipo_pat = [WO, pat_pct, /^PCT\/[A-Z]{2}[1,2][8,9,0]\d{2}\/\d{6}$/i];
const wipo_tmk = [WO, tmk_ind, /^\d{9}$/i];
const wipo_app = [WO, pat_pct_old, /^PCT\/[A-Z]{2}\d{2}\/\d{5}$/] //PCT/DE79/00016

// end of "current" PDF (which doesn't have NZ, US) -- starting on "historic" pdf
// for consistency, if no \s in pdf, no \s? in regex. This will be exact.
// Also, it'll be case sensitive

const armenia_pat = [AM, pat, /^P?[1,2][8,9,0]\d{2}\d{4}$/];
const armenia_uma = [AM, uma, /^U?[1,2][8,9,0]\d{2}\d{4}(\sU)?$/];

const argentina_pat = [AR, pat, /^P\d{9}$/];
const argentina_uma = [AR, uma, /^M\d{9}$/];

const azerbaijan_mys = [AZ, mys, /^\d{2}\/\d{6}$/];
const azerbaijan_pat = [AZ, pat, /^a\s[1,2][8,9,0]\d{2}\s\d{4}$/];
const azerbaijan_uma = [AZ, uma, /^u\s[1,2][8,9,0]\d{2}\s\d{4}$/];

const old_belarus = [BY, blr_old, /^\d{6}$/];

const switzerland_app = [CH, mys, /^\d{5}\/\d{2}(-\d)?$/];

const china_old = [CN, chi_old, /^\d{2}\s1\s\d{5}$/];
const china_inv = [CN, pat, /^[1,2][8,9,0]\d{2}\s1\s\d{7}$/];
const china_uma = [CN, uma, /^[1,2][8,9,0]\d{2}\s2\s\d{7}$/];
const china_in2 = [CN, ind, /^[1,2][8,9,0]\d{2}\s3\s\d{7}$/];
const china_pc2 = [CN, pat_pct, /^[1,2][8,9,0]\d{2}\s8\s\d{7}$/];
const china_pcu = [CN, pct_chi, /^[1,2][8,9,0]\d{2}\s9\s\d{7}$/];

const czechoslovakia_pat = [CS, pat, /^(PV\s)?\d{4}(-|\/)\d\d$/];

const cuba_pat = [CU, pat, /^\d+\/\d\d$/];

const germany_old_pat = [DE, pat_de1, /^1\d{2}\s\d{2}\s\d{3}(\.\d)?$/];
const germany_old_uma = [DE, pat_de2, /^2\d{2}\s\d{2}\s\d{3}(\.\d|\sU)?$/];
const germany_old_epd = [DE, pat_de3, /^5\d{2}\s\d{2}\s\d{3}(\.\d)?$/];
const germany_old_epf = [DE, pat_de4, /^6\d{2}\s\d{2}\s\d{3}(\.\d)?$/];

const denmark_pat = [DK, pat_dk1, /^\d{4}\/\d{2}$/];
const denmark_uma = [DK, pat_dk2, /^\d{7}\sU$/]; // 9500242 U
const denmark_pa2 = [DK, pat, /^(PA\s)?[1,2][8,9,0]\d{2}\s\d{5}$/];
const denmark_um2 = [DK, uma, /^(BA\s)?[1,2][8,9,0]\d{2}\s\d{5}(\sU)?$/];

const ecuador_pat = [EC, pat, /^(SP\s)?\d\d(-|\/)\d{4}$/];
const ecuador_uma = [EC, uma, /^(SMU\.\s)?\d\d-\d{3}(\sU)?$/];

const egypt_pat_old = [EG, pat_old, /^\d{3}\/\d\d$/];
const egypt_pat_new = [EG, pat_new, /^[1,2][8,9,0]\d{2}\d{6}$/]; //1996010001

const france_ancien_systeme = [FR, pat_fr1, /^\d\d\.\d{5}$/];
const france_nouvelle_systeme = [FR, pat, /^\d\d\s\d{5}$/]; // liberte fraternite egalite

const britain_old_pat = [GB, pat_gb1, /^\d{5}\/\d\d$/];

const greece_pat = [GR, pat, /^\d{2}01\d{5}$/];
const greece_uma = [GR, uma, /^\d{2}02\d{5}(\sU)?$/];

const hungary_pat_old = [HU, pat_hu1, /^\d{2}\s\d{2}\/\d{2}$/];
const hungary_pat_new = [HU, pat, /^(P\s)?\d{7}$/];
const hungary_uma = [HU, uma, /^(U\s)?\d{7}(\sU)?$/];

const indonesia_pat = [ID, pat, /^P00[1,2][8,9,0]\d{2}\d{5}$/]; //P00200300001
const indonesia_sim = [ID, pat_id1, /^S00[1,2][8,9,0]\d{2}\d{5}$/];
const indonesia_pct = [ID, pat_pct, /^W00[1,2][8,9,0]\d{2}\d{5}$/];

const irish_old_pat = [IE, pat_ie1, /^\d{4}\/\d{2}$/];
const irish_mid_pat = [IE, pat_ie2, /^\d{6}$/];
const irish_msh_pat = [IE, pat_ie3, /^S\d{6}$/];
const irish_nsh_pat = [IE, pat_ie4, /^S[1,2][8,9,0]\d{2}\/\d{4}$/];

const india_all = [IN, mys, /^\d{3}\/\d{2}$/];

const japan_old = [JP, pat_jp1, /^\d+(-|\/)\d{5}$/];
const japan_uma = [JP, uma, /^\d{4}-?\d{6}\sU$/];
const japan_alt_pat = [JP, pat_jp2, /^\d{4}\/\d{6}$/];
const japan_old_uma = [JP, pat_jp3, /^\d+(\/|-)\d{5}\sU$/];

const kenya_pat = [KE, pat, /^(KE\/P\/)?\d{2}\/\d{5}$/];
const kenya_uma = [KE, uma, /^(KE\/UM\/)?\d{2}\/\d{5}$/];

const kyrgyzstan_pat_old = [KG, pat_kg1, /^\d{6}\.1$/];
const kyrgyzstan_uma_old = [KG, pat_kg2, /^\d{6}\.2$/];
const kyrgyzstan_pat_new = [KG, pat_kg3, /^[1,2][8,9,0]\d{2}\d{4}\.1$/]; //20030016
const kyrgyzstan_uma_new = [KG, pat_kg4, /^[1,2][8,9,0]\d{2}\d{4}\.2$/];

const north_korea_old = [KP, pat_kp1, /^\d{2}-\d{4}$/];
const north_korea_pat = [KP, pat_kp2, /^1-\d{2}-\d{6}$/];
const north_korea_uma = [KP, pat_kp3, /^2-\d{2}-\d{6}$/];

const south_korea_old_pat = [KR, pat_kr1, /^([1,2][8,9,0])?\d{2}-\d{6}$/];
const south_korea_old_pct = [KR, pat_kr2, /^([1,2][8,9,0])?\d{2}-7\d{5}$/];
const south_korea_old_uma = [KR, pat_kr3, /^([1,2][8,9,0])?\d{2}-\d{6}\sU$/];
const south_korea_old_upc = [KR, pat_kr4, /^([1,2][8,9,0])?\d{2}-7\d{5}\sU$/];
const south_korea_pat = [KR, pat, /^10-[1,2][8,9,0]\d{2}-\d{7}$/];
const south_korea_uma = [KR, uma, /^20-[1,2][8,9,0]\d{2}-\d{7}$/];
const south_korea_ind = [KR, ind, /^30-[1,2][8,9,0]\d{2}-\d{7}$/];
const south_korea_tmk = [KR, tmk, /^[4-7]\d-[1,2][8,9,0]\d{2}-\d{7}$/]; // the true range for tmks is 40-75

const kazakhstan_pat = [KZ, pat, /^\d{2}\d{3,4}\.1$/];
const kazakhstan_uma = [KZ, uma, /^(\d{2}\d{3,4}\.2)|([1,2][8,9,0]\d{2}\/\d{3,4}(\.2|\sU)?)$/];

const lesotho_pat = [LS, pat, /^(LS\/P\/)?\d{2}\/\d{5}$/];
const lesotho_uma = [LS, uma, /^(LS\/UM\/)?\d{2}\/\d{5}$/];

const madagascar_old = [MG, pat_mg1, /^\d{5}$/];
const madagascar_new = [MG, mys, /^[1,2][8,9,0]\d{2}\/\d{2,3}$/];

const yugoslav_macedonia_pat = [MK, pat, /^\d{2,3}\/\d{2}$/];

const mexico_pat = [MX, pat, /^[A-Z]{2}\/a\/[1,2][8,9,0]\d{2}\/\d{6}$/]; //000001
const mexico_ind = [MX, pat_mx1, /^[A-Z]{2}\/f\/[1,2][8,9,0]\d{2}\/\d{6}$/];
const mexico_lay = [MX, lay, /^[A-Z]{2}\/t\/[1,2][8,9,0]\d{2}\/\d{6}$/];
const mexico_uma = [MX, uma, /^[A-Z]{2}\/u\/[1,2][8,9,0]\d{2}\/\d{6}$/];

const dutch_mys = [NL, mys, /^\d{7}$/];

const norway_anc = [NO, pat_no1, /^\d{4}\/\d{2}$/];
const norway_old = [NO, pat_no2, /^\d{6}$/];
const norway_new = [NO, mys, /^[1,2][8,9,0]\d{2}\d{4}$/];


// Start of regex concat for reduced repitition

const africa_pat = [OA, pat, RegExp(/1\s/.source + r_y.source + /\s\d{5}/.source)];
const africa_uma = [OA, uma, RegExp(/2\s/.source + r_y.source + /\s\d{5}/.source)];

const philippines_pat = [PH, pat, RegExp(/1-/.source + r_y.source + /-\d{5}/.source)];
const philippines_pct = [PH, pat_pct, RegExp(/1-/.source + r_y.source + /-5\d{5}/.source)]; //1-1999-500001
const philippines_uma = [PH, uma, RegExp(/2-/.source + r_y.source + /\d{5}/.source)];
const philippines_upc = [PH, uma_pct, RegExp(/2-/.source + r_y.source + /-5\d{5}/.source)];

const pakistan_mys = [PK, mys, /^\d{5}\/\d{2}$/];

const slovenia_old = [SI, pat_no1, RegExp(r_y_2.source + /\d{5}/.source)];
const slovenia_pat = [SI, pat, RegExp(r_y.source + /[01234]\d{4}/.source)];
const slovenia_ind = [SI, ind, RegExp(r_y.source + /[56]\d{4}/.source)];
const slovenia_tmk = [SI, tmk, RegExp(r_y.source + /[78]\d{4}/.source)];

const tajikistan_pat = [TJ, pat, RegExp(r_y_2.source + /\d{6}/.source)];
const tajikistan_uma = [TJ, uma, RegExp(r_y_2.source + /\d{5}\sU/.source)];

const turkmenistan_pat = [TM, pat, /^\d{2}\/100\d{3}$/];
const turkmenistan_pan = [TM, pat_tm1, /^\d{2}\/100\d{3}N$/];
const turkmenistan_myn = [TM, pat_tm2, /^\d{2}\/[^1]00\d{3}N$/];
const turkmenistan_mys = [TM, mys, /^\d{2}\/[^1]00\d{3}$/];

const turkey_pat = [TR, pat_app, /^(a\s)?([1,2][8,9,0])?\d{2}(\/|\s)\d{5}$/];
const turkey_uma = [TR, uma, /^(u\s)?([1,2][8,9,0])?\d{2}(\/|\s)\d{5}$/];

const trinidad_old = [TT, pat_tt1, /^\d+(\sof\s|\/)([1,2][8,9,0]\d{2}|\d{2})$/];
const trinidad_new = [TT, pat_tt2, /^\d{6}$/];

const uzbekistan_pat = [UZ, pat_uz1, RegExp(/(IH(AP)?)?/.source + r_y_2.source + /\d{5}(\.\d)?/.source)];
const uzbekistan_pre = [UZ, pat_pre, RegExp(/(IH(DP)?)?/.source + r_y_2.source + /\d{5}(\.\d)?/.source)];
const uzbekistan_umc = [UZ, umc, /^(((FM(GU)?)\d{7}(\.\d)?)|(\d{7}\sU))$/];

const venezuela_mys = [VE, mys, /^\d{5}(-|\/)\d{2}$/];

const serbia_monte_mys = [YU, mys, /^P?\d{4}\/\d{2}$/]

const s_africa_mys = [ZA, mys, /^\d{2}\/\d{4}$/];