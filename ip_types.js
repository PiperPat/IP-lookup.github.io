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

const pat_pco = "applications filed by nationals and applications filed through Paris Convention";
const pat_pct = "PCT applications";
const pat_div = "divided patent applications";
const pat_coa = "applications for certificates of addition";
const pat_pla = "plant patents";
const pat_app = "International patent applications under the PCT (PCT applications in the national phase)";
const pat_wiz = pat + " or " + pat_app;
const pat_prv = "Provisional patent applications (Provisional patents)";
const pat_pcn = pat + " and " + pat_pct;
// swedish patents
const pat_se0 = "national patent application submitted on paper";
const pat_se3 = "national patent application submitted via online service Swedish Patent Application (web Online Filing)";
const pat_se5 = "national patent application submitted via online service Online Filing (epoline Online Filing (eOLF))";
const pat_se7 = "limitation of patent";
const pat_se9 = "SPCs submitted on paper";

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

const all = pat + ', ' + pat_pct + ', ' + tmk + ', or ' + ind;
const can = pat + ", " + pat_pct + ", " + tmk;
const pat_ru1 = pat_wiz + ' or ' + umc_int;