/** 
 *      Author: Anton Huggard
 *      Date: Apr, 2021
 * 
 *      Notes: declaration of const variables for every possible type
 *      of IP protection in each country. 
 *      Referenced in: filters.js, formats.js, index.html 
 *      Important: each object in formats.js cannot have str operations. 
 *      Apparently that breaks filtering. Also - remember to add any 
 *      additions to filters.js 
 * 
 * 
 */


const pat = "Patents";
const spc = "SPCs (Supplementary Protection Certificates)";
const umc = "Utility Models";
const uma = "Utility model applications";
const tmk = "Trade Marks";
const ind = "Industrial designs";
const lay = "Layout-design (topography) of integrated circuits";
const pvc = "Certificates for new plants variety";
const geo = "Geographical Indications";
const msc = "Any type of IP (excluding trade marks)";
const inn = "Innovation/simple/short-term/petty patent applications (Innovations)";
const prg = "Computer programs";
const dtb = "Databases";
const qog = "Qualified indications of origin of goods";
const mys = "Unknown application type";

const uma_pct = uma + " (PCT)";

const pat_pco = "applications filed by nationals and applications filed through Paris Convention";
const pat_pct = "PCT applications";
const pat_div = "divided patent applications";
const pat_coa = "applications for certificates of addition";
const pat_pla = "plant patents";
const pat_app = "International patent applications under the PCT (PCT applications in the national phase)";
const pat_wiz = pat + " or " + pat_app;
const pat_prv = "Provisional patent applications (Provisional patents)";
const pat_pcn = pat + " and " + pat_pct;
const pat_pre = "Preliminary " + pat;
// swedish patents
const pat_se0 = "national patent application submitted on paper";
const pat_se3 = "national patent application submitted via online service Swedish Patent Application (web Online Filing)";
const pat_se5 = "national patent application submitted via online service Online Filing (epoline Online Filing (eOLF))";
const pat_se7 = "limitation of patent";
const pat_se9 = "SPCs submitted on paper";
const pct_chi = "PCT patent application for utility model entering CN national phase.";
const pat_de1 = "National patent applications, PCT applications in the national phase and applications for SPCs (used from 1995 to 2003)";
const pat_de2 = "Utility model applications and topographies (used from 1995 to 2003).";
const pat_de3 = "Patents granted by the EPO, filed in German (used for applications filed with the EPO as of 1989).";
const pat_de4 = "Patents granted by the EPO, filed in English or French (used for applications filed with the EPO as of 1989).";
const pat_dk1 = "Patent applications (used until the end of 1997)";
const pat_dk2 = "Utility model applications (used until the end of 1997)";
const pat_old = pat + " (old numbering system)";
const pat_new = pat + " (new numbering system)";
const pat_fr1 = "Patent applications prior to January 1969";
const pat_gb1 = "Numbering system according to the old 1949 Patents Act";
const pat_hu1 = "Hungarian patents (application from 1980-1992)";
const pat_id1 = "Simple Patent applications";
const pat_ie1 = "Patent applications (this numbering system was used until the end of 1991)";
const pat_ie2 = "Patent applications - Numbering system applied from January 1, 1992, to December 31, 1999."
const pat_ie3 = "Short-term applications - Numbering system applied from January 1, 1992, to December 31, 1999.";
const pat_ie4 = "Short-term applications";
const pat_it1 = "Patent applications - Numbering system used until December 31, 1990";
const pat_it2 = "Utility model applications - Numbering system used until December 31, 1990"; //not pat, historic convntn
const pat_jp1 = "Patent applications filed before January 1, 2000";
const pat_jp2 = "Patent applications filed since January 1, 2000";
const pat_jp3 = "Utility model applications filed before January 1, 2000";
const pat_kg1 = pat + " filed before the end of 1999 ()";
const pat_kg2 = uma + " filed before the end of 1999";
const pat_kg3 = pat + " filed after 1999";
const pat_kg4 = uma + " filed after 1999";
const pat_kp1 = pat + " according to the numbering system used before the end of 2003";
const pat_kp2 = pat + " according to the numbering system used since January 2004"
const pat_kp3 = uma + " according to the numbering system used since January 2004"
const pat_lt1 = mys + "filed before January 1, 1995";
const pat_md1 = "filed before December 31, 1999";
const pat_mg1 = "Numbering system used from 1994 to 1999.";
const pat_mx1 = "Industrial designs or model applications";
const pat_no1 = mys + " (old numbering system)";
const pat_no2 = mys + " (numbering system from January 1 1974 - June 1998)";
const pat_ro1 = mys + " (old numbering system, introduced on January 21, 1992)";
const pat_ru2 = mys + " (Numbering system used from 1992 to 1999)";
const pat_tm1 = pat + " filed by a non-resident";
const pat_tm2 = mys + " filed by a non-resident";
const pat_tt1 = "Numbering system for patent applications prior to 1996.";
const pat_tt2 = "Numbering system for patent applications introduced as of 1996. ";
const pat_ua1 = mys + " (Numbering system used from 1992 to 1999)";
const pat_ua2 = mys + " (Numbering system introduced on January 1, 2000)";
const pat_uz1 = "Patent applications";
const pat_pct_old = "PCT applications filed (numbers quoted January 1, 2004)";

const pat_kr1 = pat + " filed before 1999";
const pat_kr2 = pat_pct + "filed before 1999";
const pat_kr3 = uma + "filed before 1999";
const pat_kr4 = "PCT applications for a utility model";

const utl_pco = umc + " (applications filed by nationals and applications filed through Paris Convention)";
const utl_pct = umc + " (PCT applications)";
const utl_div = umc + " (divided utility model applications)";
const umc_int = "International utility model applications under the PCT (PCT applications in the national phase)";
const umc_ori = umc + " or " + umc_int;

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
const geo_app = "Designation (appellation) of Origin";

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
const tmk_ind = tmk + " or " + ind;

const spc_ppp = spc + " for plant protection products";
const spc_med = spc + " for medicinal products before 2008";
const spc_bth = spc + " for both plant protection products and medicinal products from 2008 onwards";
const spc_div = spc + " (divisional)";

const umc_div = umc + ' (divisional)';
const umc_idv = umc_int + ' (divisional)';
const tmk_ndv = tmk_nat + ' (divisional)';
const ind_ndv = ind_nat + ' (divisional)';
const tmi_div = tmk_int + ' (divisional)';
const ind_idv = ind_int + ' (divisional)';

const old = "Application from old numbering system";
const old_pat = "Patent application from old numbering system"
const blr_old = old + " (used until the end of 1997)";
const chi_old = old_pat + " (used from April 1, 1985, to September 30, 2003)";

const all = pat + ', ' + pat_pct + ', ' + tmk + ', or ' + ind;
const can = pat + ", " + pat_pct + ", " + tmk;
const pat_ru1 = pat_wiz + ' or ' + umc_int;