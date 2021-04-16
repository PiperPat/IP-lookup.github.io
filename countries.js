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
    belarus_tmk,
    old_belarus
];
const canada = [canada_pat, canada_ind];
const china = [
    china_pat, china_pct, china_umc, china_ind,
    china_old,
    china_inv, china_uma, china_in2, china_pc2, china_pcu
];
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
    germany_ind,
    germany_old_pat, germany_old_uma, germany_old_epd, germany_old_epf
];
const eurasia = [eurasia_pat];
const estonia = [
    estonia_pat, estonia_spc, estonia_umc, estonia_uma, estonia_tmn,
    estonia_inn, estonia_tmi, estonia_ini, estonia_geo,
    estonia_pat_div, estonia_spc_div, estonia_umc_div, estonia_uma_div, estonia_tmn_div,
    estonia_inn_div, estonia_tmi_div, estonia_ini_div, estonia_geo_div
];
const ohim = [
    ohim_tmk, ohim_tmr, ohim_tmo, ohim_tmd, ohim_tmc, ohim_tma, ohim_tml, ohim_tmn, ohim_tme,
    ohim_ind, ohim_idr, ohim_idi
];
const europe = [eur_pat];
const spain = [spain_pat, spain_pct, spain_spc];
const finland = [finnish_pat, finnish_med, finnish_pla, finnish_bth, finnish_umc];
const great_britain = [britain_pat, britain_old_pat];
const croatia = [croatia_pat, croatia_tmk, croatia_ind, croatia_lay, croatia_geo, croatia_org];
const ireland = [ireland_pat, irish_old_pat, irish_mid_pat, irish_msh_pat, irish_nsh_pat];
const israel = [israel_pat, israel_tmk, israel_ind];
const italy = [
    italy_pat, italy_pla, italy_spc, italy_umc, italy_tmk, italy_ind, italy_lay,
    italy_old_pat, italy_old_uma
];
const japan = [japan_all, japan_old, japan_uma, japan_alt_pat, japan_old_uma];
const lithuania = [lithuania_pat, lithuania_spc, lithuania_tmk, lithuania_old];
const moldova = [moldova_pat, moldova_inn, moldova_pla, moldova_umc, moldova_ind, moldova_lay, moldova_old];
const poland = [poland_pat, poland_umc, poland_tmk, poland_ind, poland_spc];
const romania = [romania_pat, romania_umc, romania_tmk, romania_ind, romania_spc, romania_lay, romania_old];
const serbia = [serbia_pat, serbia_inn, serbia_tmk, serbia_ind, serbia_lay];
const russia = [russia_pat, russia_ind, russia_tmk, russia_lay, russia_prg, russia_dtb, russia_old];
const sweden = [
    sweden_tmk, sweden_ind, sweden_pat0, sweden_pat3, sweden_pat5, sweden_pat7, sweden_pat9, sweden_old
];
const slovakia = [
    slovakia_pat, slovakia_uma, slovakia_poz, slovakia_ind, slovakia_spc,
    slovakia_org, slovakia_geo, slovakia_pto
];
const ukraine = [ukraine_pat, ukraine_umc, ukraine_tmk, ukraine_ind, ukraine_lay, ukraine_qog];
const wipo = [wipo_pat, wipo_tmk];

const armenia = [armenia_pat, armenia_uma];
const argentina = [argentina_pat, argentina_uma]
const azerbaijan = [azerbaijan_mys, azerbaijan_pat, azerbaijan_uma];
const switzerland = [switzerland_app];
const czechoslovakia = [czechoslovakia_pat];
const cuba = [cuba_pat];
const denmark = [denmark_pat, denmark_uma, denmark_pa2, denmark_um2];
const ecuador = [ecuador_pat, ecuador_uma];
const egypt = [egypt_pat_new, egypt_pat_old];
const france = [france_ancien_systeme, france_nouvelle_systeme];
const hungary = [hungary_pat_old, hungary_pat_new, hungary_uma];
const indonesia = [indonesia_pat, indonesia_pct, indonesia_sim];
const india = [india_all];
const kenya = [kenya_pat, kenya_uma];
const north_korea = [north_korea_old, north_korea_pat, north_korea_uma];
const south_korea = [
    south_korea_old_pat,
    south_korea_old_pct,
    south_korea_old_uma,
    south_korea_old_upc,
    south_korea_pat,
    south_korea_uma,
    south_korea_ind,
    south_korea_tmk
];
const kazakhstan = [kazakhstan_pat, kazakhstan_uma];
const lesotho = [lesotho_pat, lesotho_uma];
const madagascar = [madagascar_old, madagascar_new];
const yugoslav_macedonia = [yugoslav_macedonia_pat];
const mexico = [mexico_pat, mexico_ind, mexico_lay, mexico_uma];
const netherlands = [dutch_mys];
const norway = [norway_anc, norway_old, norway_new];
const africa = [africa_pat, africa_uma];
const philippines = [philippines_pat, philippines_pct, philippines_uma, philippines_upc];
const pakistan = [pakistan_mys];
const slovenia = [slovenia_ind, slovenia_pat, slovenia_tmk, slovenia_old];
const turkmenistan = [
    turkmenistan_pat,
    turkmenistan_pan,
    turkmenistan_myn,
    turkmenistan_mys
];
const turkey = [turkey_pat, turkey_uma];
const trinidad = [trinidad_new, trinidad_old];

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
    ireland,
    israel,
    italy,
    japan,
    lithuania,
    moldova,
    poland,
    romania,
    serbia,
    russia,
    sweden,
    slovakia,
    ukraine,
    wipo,
    armenia,
    argentina,
    azerbaijan,
    switzerland,
    czechoslovakia,
    cuba,
    denmark,
    ecuador,
    egypt,
    france,
    hungary,
    indonesia,
    india,
    kenya,
    north_korea,
    south_korea,
    kazakhstan,
    lithuania,
    madagascar,
    yugoslav_macedonia,
    mexico,
    netherlands,
    norway,
    africa,
    philippines,
    pakistan,
    slovenia,
    turkmenistan,
    turkey,
    trinidad
];