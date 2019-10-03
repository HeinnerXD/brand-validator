'use strict'

const wrongWords = require('./data/words');

async function validateText(text) {
    return new Promise((resolve, reject) => {
        try {
            if (typeof (text) != 'string') {
                let error = {
                    error: 'Undefined Value',
                    message: 'Please provide an String value'
                }
                reject(error);
            } else {
                var brandFound = false;
                var stringToValidate = ' ' + text.toLowerCase().replace(/\./g, ' ') + ' '
                    .replace(/,/g, ' ')
                    .replace(/-/g, ' ')
                    .replace(/!/g, ' ')
                    .replace(/@/g, ' ')
                    .replace(/#/g, ' ')
                    .replace(/%/g, ' ')
                    .replace(/&/g, ' ')
                    .replace(/"/g, ' ')
                    .replace(/"/g, ' ')
                    .replace(/:/g, ' ')
                    .replace(/;/g, ' ')
                    .replace(/]/g, ' ')
                    .replace(/{/g, ' ')
                    .replace(/}/g, ' ')
                    .replace(/</g, ' ')
                    .replace(/>/g, ' ')
                    .replace(/=/g, ' ')
                    .replace(/•/g, ' ')
                    .replace(/»/g, ' ')
                    .replace(/«/g, ' ')
                    .replace(/~/g, ' ')
                    .replace(/\*/g, ' ')
                    .replace(/\(/g, ' ')
                    .replace(/\)/g, ' ')
                    .replace(/\?/g, ' ')
                    .replace(/\¿/g, ' ')
                    .replace(/\//g, ' ')
                    .replace(/\'/g, ' ')
                    .normalize('NFD').replace(/[\u0300-\u036f]/g, "");

                const words = stringToValidate.split(' ');
                const abShaperTitle = stringToValidate.split(' ab shaper ');
                const abTomicTitle = stringToValidate.split(' ab tomic ');
                const airDragonTitle = stringToValidate.split(' air dragon ');
                const androidTvTitle = stringToValidate.split(' android tv ');
                const angryMamaTitle = stringToValidate.split(' angry mama ');
                const annCheryTitle = stringToValidate.split(' ann chery ');
                const atomicBeamTitle = stringToValidate.split(' atomic beam ');
                const babyParisTitle = stringToValidate.split(' babyliss paris ');
                const benefitCostmeticTitle = stringToValidate.split(' benefit cosmetics ');
                const bioOilTitle = stringToValidate.split(' bio oil ');
                const bodyWorksTitle = stringToValidate.split(' body works ');
                const boxTvTitle = stringToValidate.split(' box tv ');
                const buildBearTitle = stringToValidate.split(' build a bear ');
                const chefsVision = stringToValidate.split(' chefs vision ');
                const chefVisionTitle = stringToValidate.split(' chef vision ');
                const churroMakerTitle = stringToValidate.split(' churro maker ');
                const couchCoatTitle = stringToValidate.split(' couch coat ');
                const dermaWandTitle = stringToValidate.split(' derma wand ');
                const fisherPriceTitle = stringToValidate.split(' fisher price ');
                const fiveShaperTitle = stringToValidate.split(' five shaper ');
                const foreroLunaTitle = stringToValidate.split(' foreo luna ');
                const wildFruitTitle = stringToValidate.split(' wild fruit ');
                const hannRizadorTitle = stringToValidate.split(' hann rizador ');
                const hendelJardinTitle = stringToValidate.split(' hendel jardin ');
                const herbalEssencesTitle = stringToValidate.split(' herbal essences ');
                const hewlettTitle = stringToValidate.split(' hewlett packard ');
                const hotShaperTitle = stringToValidate.split(' hot shaper ');
                const hurricaneSpinTitle = stringToValidate.split(' hurricane spin ');
                const hurricaneWizardTitle = stringToValidate.split(' hurricane fur wizard ');
                const hynesVictoryTitle = stringToValidate.split(' hynes victory ');
                const jolieTitle = stringToValidate.split(' jolie de vogue ');
                const kateSpadeTitle = stringToValidate.split(' kate spade ');
                const lincolnElectricTitle = stringToValidate.split(' lincoln electric ');
                const magicBulletTitle = stringToValidate.split(' magic bullet ');
                const maxFactorTitle = stringToValidate.split(' max factor ');
                const michaelTitle = stringToValidate.split(' michael kors ');
                const microsoftTitle = stringToValidate.split(' microsoft office ');
                const minsShaperTitle = stringToValidate.split(' mins shaper ');
                const minuteShaperTitle = stringToValidate.split(' minute shaper ');
                const missBeltTitle = stringToValidate.split(' miss belt ');
                const newBalanceTitle = stringToValidate.split(' new balance ');
                const nonoHairTitle = stringToValidate.split(' nono hair ');
                const nukPjTitle = stringToValidate.split(' nuk pj ');
                const oculusRiftTitle = stringToValidate.split(' oculus rift ');
                const opiInfiniteTitle = stringToValidate.split(' opi infinite ');
                const opiLacquerTitle = stringToValidate.split(' opi nail lacquer ');
                const opiShineTitle = stringToValidate.split(' opi shine ');
                const paolaTurbayTitle = stringToValidate.split(' paola turbay ');
                const weightPillsTitle = stringToValidate.split(' weight loss pills ');
                const pedEggTitle = stringToValidate.split(' ped egg ');
                const pediSpinTitle = stringToValidate.split(' pedi spin ');
                const peppaPigTitle = stringToValidate.split(' peppa pig ');
                const petZoomTitle = stringToValidate.split(' pet zoom ');
                const piyoBaseTitle = stringToValidate.split(' piyo base ');
                const poloLaurenTitle = stringToValidate.split(' polo ralph lauren ');
                const postItTitle = stringToValidate.split(' post it ');
                const pottyPatchTitle = stringToValidate.split(' potty patch ');
                const puppyPottyPadTitle = stringToValidate.split(' puppy potty pad ');
                const puppyPottyTitle = stringToValidate.split(' puppy potty ');
                const rayBanTitle = stringToValidate.split(' ray ban ');
                const realTechniquesTitle = stringToValidate.split(' real techniques ');
                const receptorDeTvTitle = stringToValidate.split(' receiver tv ');
                const receptorTvTitle = stringToValidate.split(' tv receiver ');
                const redCopperTitle = stringToValidate.split(' red copper ');
                const robertoCavalliTitle = stringToValidate.split(' roberto cavalli ');
                const rosettaStoneTitle = stringToValidate.split(' rosetta stone ');
                const sallyHansenTitle = stringToValidate.split(' sally hansen ');
                const saunaShaperTitle = stringToValidate.split(' sauna shaper ');
                const shaunTitle = stringToValidate.split(' shaun t ');
                const splitEnderTitle = stringToValidate.split(' split ender ');
                const starShowerTitle = stringToValidate.split(' star shower ');
                const stickyBuddyTitle = stringToValidate.split(' sticky buddy ');
                const tech21Title = stringToValidate.split(' tech 21 ');
                const thermoShaperTitle = stringToValidate.split(' thermo shapers ');
                const tommyHilfigerTitle = stringToValidate.split(' tommy hilfiger ');
                const toninoLamboTitle = stringToValidate.split(' tonino lamborghini ');
                const totalCruchTitle = stringToValidate.split(' total crunch ');
                const trainingMaskTitle = stringToValidate.split(' training mask ');
                const tvBoxTitle = stringToValidate.split(' tv box ');
                const vanGoghTitle = stringToValidate.split(' van gogh ');
                const victoriaSecretsTitle = stringToValidate.split(' victoria secrets ');
                const victoriaSecretTitle = stringToValidate.split(' victoria secret ');
                const victoriasSecretsTitle = stringToValidate.split(' victorias secrets ');
                const victoriasSecretsTildeTitle = stringToValidate.split(` victoria s secret `);
                const victoriasTitle = stringToValidate.split(' victorias secret ');
                const virtuosoGuitarTitle = stringToValidate.split(' virtuosso electric guitar ');
                const vittoriaPeyoteTitle = stringToValidate.split(' vittoria peyote ');
                const ralphLaurenTitle = stringToValidate.split(' ralph lauren ');
                const bavarianEdgeTitle = stringToValidate.split(' bavarian edge ');
                const udNakedTitle = stringToValidate.split(' ud naked ');
                const puritansPrideTitle = stringToValidate.split(' puritans pride ');
                const quemadorDeGrasaTitle = stringToValidate.split(' fat burner ');
                const pjMaskTitle = stringToValidate.split(' pj mask ');
                const pjMasksTitle = stringToValidate.split(' pj masks ');
                const pjMascaraTitle = stringToValidate.split(' pj mascara ');
                const pjMascarasTitle = stringToValidate.split(' pj mascaras ');
                const detoxTeaTitle = stringToValidate.split(' detox tea ');
                const divinaTeaTitle = stringToValidate.split(' divina tea ');
                const divinaDetoxTitle = stringToValidate.split(' divina detox ');
                const teDivinaTitle = stringToValidate.split(' te divina ');
                const miraHandscraftsTitle = stringToValidate.split(' mira handcrafts ');
                const lorealTitle = stringToValidate.split(' l oreal ');
                const antibacterialesEscudoTitle = stringToValidate.split(' antibacteriales escudo ');
                const shieldAntibacterialTitle = stringToValidate.split(' shield antibacterial ');
                const avrilLavigneTitle = stringToValidate.split(' avril lavigne ');
                const britneySpearsTitle = stringToValidate.split(' britney spears ');
                const brunoBananiTitle = stringToValidate.split(' bruno banani ');
                const christinaAguileraTitle = stringToValidate.split(' christina aguilera ');
                const ciertoyVencedorTitle = stringToValidate.split(' cierto y vencedor ');
                const trueAndVictoriousTitle = stringToValidate.split(' true and victorious ');
                const clearBlueTitle = stringToValidate.split(' clear blue ');
                const coverGirlTitle = stringToValidate.split(' cover girl ');
                const donLimpioTitle = stringToValidate.split(' don limpio ');
                const mrCleanTitle = stringToValidate.split(' mr clean  ');
                const duncanHinesTitle = stringToValidate.split(' duncan hines ');
                const fluocarilyParogencilTitle = stringToValidate.split(' fluocaril y parogencil ');
                const gilletteSeriesTitle = stringToValidate.split(' gillette series ');
                const headShouldersTitle = stringToValidate.split(' head & shoulders ');
                const headAndShouldersTitle = stringToValidate.split(' head and shoulders ');
                const hugoBossTitle = stringToValidate.split(' hugo boss ');
                const kidfreshTitle = stringToValidate.split(' kid fresh ');
                const lauraBiagiottiTitle = stringToValidate.split(' laura biagiotti ');
                const lavanSanFairyTitle = stringToValidate.split(' lavan san fairy ');
                const lavasoapTitle = stringToValidate.split(' lava soap ');
                const maestroLimpioTitle = stringToValidate.split(' maestro limpio ');
                const missClairolTitle = stringToValidate.split(' miss clairol ');
                const montBlancTitle = stringToValidate.split(' mont blanc ');
                const oralbTitle = stringToValidate.split(' oral b ');
                const peptoBismolTitle = stringToValidate.split(' pepto bismol ');
                const permasharpTitle = stringToValidate.split(' perma sharp ');
                const pertPlusTitle = stringToValidate.split(' pert plus ');
                const procterGambleTitle = stringToValidate.split(' procter & gamble ');
                const softColorTitle = stringToValidate.split(' soft color ');
                const sunnyDelightTitle = stringToValidate.split(' sunny delight  ');
                const thermaCareTitle = stringToValidate.split(' therma care ');
                const vidalSassoonTitle = stringToValidate.split(' vidal sassoon ');
                const washabyebabyTitle = stringToValidate.split(' wash a bye baby ');
                const babyFreshTitle = stringToValidate.split(' baby fresh ');
                const bold3Title = stringToValidate.split(' bold 3 ');
                const levisTitle = stringToValidate.split(' levi s ');
                const skiiTitle = stringToValidate.split(' sk ii ');
                const protecterGambleTitle = stringToValidate.split(' protecter gamble ');
                const armaDeFuegoTitle = stringToValidate.split(' arma de fuego ');
                const mobiKidsTitle = stringToValidate.split(' mobi kids ');
                const hierbaCannabisTitle = stringToValidate.split(' hierba cannabis ');
                const cannabisHerbTitle = stringToValidate.split(' cannabis herb ');
                const hierbaDeCannabisTitle = stringToValidate.split(' hierba de cannabis ');
                const pgTitle = stringToValidate.split(' p g ');
                const dgTitle = stringToValidate.split(' d g ');
                const hsTitle = stringToValidate.split(' h s ');
                const ggTitle = stringToValidate.split(' g g ');
                const oldSpiceTitle = stringToValidate.split(' old spice ');
                const headsShouldersTitle = stringToValidate.split(' head   shoulders ');
                const magiaBlancaTitle = stringToValidate.split(' magia blanca ');
                const whiteMagicTitle = stringToValidate.split(' white magic ');
                const walletNinjaTitle = stringToValidate.split(' wallet ninja ');
                const pikmiPopsTitle = stringToValidate.split(' pikmi pops ');
                const commeDesGarconsTitle = stringToValidate.split(' comme des garcons ');
                const despicableMeTitle = stringToValidate.split(' despicable me ');
                const johnDeereTitle = stringToValidate.split(' john deere ');
                const feistyPetsTitle = stringToValidate.split(' feisty pets ');
                const philippPleinTitle = stringToValidate.split(' philipp plein ');
                const besameCosmeticsTitle = stringToValidate.split(' besame cosmetics ');
                const kevinDurantTitle = stringToValidate.split(' kevin durant ');
                const theBeatlesTitle = stringToValidate.split(' the beatles ');
                const lillyPulitzerTitle = stringToValidate.split(' lilly pulitzer ');
                const tommyBahamaTitle = stringToValidate.split(' tommy bahama ');
                const venusFashionTitle = stringToValidate.split(' venus fashion ');
                const closetCandyBoutiqueTitle = stringToValidate.split(' closet candy boutique ');
                const helloKittyTitle = stringToValidate.split(' hello kitty ');
                const handNailHarmonyTitle = stringToValidate.split(' hand and nail harmony ');
                const ontelProductsTitle = stringToValidate.split(' ontel products ');
                const urbanDecayTitle = stringToValidate.split(' urban decay ');
                const skipHopTitle = stringToValidate.split(' skip hop ');

                if (abShaperTitle.length > 1 ||
                    airDragonTitle.length > 1 ||
                    androidTvTitle.length > 1 ||
                    angryMamaTitle.length > 1 ||
                    annCheryTitle.length > 1 ||
                    atomicBeamTitle.length > 1 ||
                    babyParisTitle.length > 1 ||
                    benefitCostmeticTitle.length > 1 ||
                    bioOilTitle.length > 1 ||
                    bodyWorksTitle.length > 1 ||
                    boxTvTitle.length > 1 ||
                    buildBearTitle.length > 1 ||
                    chefsVision.length > 1 ||
                    chefVisionTitle.length > 1 ||
                    churroMakerTitle.length > 1 ||
                    couchCoatTitle.length > 1 ||
                    couchCoatTitle.length > 1 ||
                    dermaWandTitle.length > 1 ||
                    fisherPriceTitle.length > 1 ||
                    fiveShaperTitle.length > 1 ||
                    foreroLunaTitle.length > 1 ||
                    wildFruitTitle.length > 1 ||
                    hannRizadorTitle.length > 1 ||
                    hendelJardinTitle.length > 1 ||
                    herbalEssencesTitle.length > 1 ||
                    hewlettTitle.length > 1 ||
                    hotShaperTitle.length > 1 ||
                    hurricaneSpinTitle.length > 1 ||
                    hurricaneWizardTitle.length > 1 ||
                    hynesVictoryTitle.length > 1 ||
                    jolieTitle.length > 1 ||
                    kateSpadeTitle.length > 1 ||
                    lincolnElectricTitle.length > 1 ||
                    magicBulletTitle.length > 1 ||
                    maxFactorTitle.length > 1 ||
                    michaelTitle.length > 1 ||
                    microsoftTitle.length > 1 ||
                    minsShaperTitle.length > 1 ||
                    minuteShaperTitle.length > 1 ||
                    missBeltTitle.length > 1 ||
                    newBalanceTitle.length > 1 ||
                    nonoHairTitle.length > 1 ||
                    nukPjTitle.length > 1 ||
                    oculusRiftTitle.length > 1 ||
                    opiInfiniteTitle.length > 1 ||
                    opiLacquerTitle.length > 1 ||
                    opiShineTitle.length > 1 ||
                    paolaTurbayTitle.length > 1 ||
                    weightPillsTitle.length > 1 ||
                    pedEggTitle.length > 1 ||
                    pediSpinTitle.length > 1 ||
                    peppaPigTitle.length > 1 ||
                    petZoomTitle.length > 1 ||
                    piyoBaseTitle.length > 1 ||
                    poloLaurenTitle.length > 1 ||
                    postItTitle.length > 1 ||
                    pottyPatchTitle.length > 1 ||
                    puppyPottyPadTitle.length > 1 ||
                    puppyPottyTitle.length > 1 ||
                    rayBanTitle.length > 1 ||
                    realTechniquesTitle.length > 1 ||
                    receptorDeTvTitle.length > 1 ||
                    receptorTvTitle.length > 1 ||
                    redCopperTitle.length > 1 ||
                    robertoCavalliTitle.length > 1 ||
                    rosettaStoneTitle.length > 1 ||
                    sallyHansenTitle.length > 1 ||
                    saunaShaperTitle.length > 1 ||
                    shaunTitle.length > 1 ||
                    splitEnderTitle.length > 1 ||
                    starShowerTitle.length > 1 ||
                    stickyBuddyTitle.length > 1 ||
                    tech21Title.length > 1 ||
                    thermoShaperTitle.length > 1 ||
                    tommyHilfigerTitle.length > 1 ||
                    toninoLamboTitle.length > 1 ||
                    totalCruchTitle.length > 1 ||
                    trainingMaskTitle.length > 1 ||
                    tvBoxTitle.length > 1 ||
                    vanGoghTitle.length > 1 ||
                    victoriaSecretsTitle.length > 1 ||
                    victoriaSecretTitle.length > 1 ||
                    victoriasSecretsTitle.length > 1 ||
                    victoriasTitle.length > 1 ||
                    virtuosoGuitarTitle.length > 1 ||
                    vittoriaPeyoteTitle.length > 1 ||
                    ralphLaurenTitle.length > 1 ||
                    bavarianEdgeTitle.length > 1 ||
                    victoriasSecretsTildeTitle.length > 1 ||
                    udNakedTitle.length > 1 ||
                    puritansPrideTitle.length > 1 ||
                    quemadorDeGrasaTitle.length > 1 ||
                    pjMaskTitle.length > 1 ||
                    pjMasksTitle.length > 1 ||
                    pjMascaraTitle.length > 1 ||
                    pjMascarasTitle.length > 1 ||
                    detoxTeaTitle.length > 1 ||
                    divinaTeaTitle.length > 1 ||
                    divinaDetoxTitle.length > 1 ||
                    teDivinaTitle.length > 1 ||
                    miraHandscraftsTitle.length > 1 ||
                    lorealTitle.length > 1 ||
                    antibacterialesEscudoTitle.length > 1 ||
                    avrilLavigneTitle.length > 1 ||
                    britneySpearsTitle.length > 1 ||
                    brunoBananiTitle.length > 1 ||
                    christinaAguileraTitle.length > 1 ||
                    ciertoyVencedorTitle.length > 1 ||
                    clearBlueTitle.length > 1 ||
                    coverGirlTitle.length > 1 ||
                    donLimpioTitle.length > 1 ||
                    duncanHinesTitle.length > 1 ||
                    headShouldersTitle.length > 1 ||
                    fluocarilyParogencilTitle.length > 1 ||
                    gilletteSeriesTitle.length > 1 ||
                    hugoBossTitle.length > 1 ||
                    kidfreshTitle.length > 1 ||
                    lauraBiagiottiTitle.length > 1 ||
                    lavanSanFairyTitle.length > 1 ||
                    lavasoapTitle.length > 1 ||
                    maestroLimpioTitle.length > 1 ||
                    missClairolTitle.length > 1 ||
                    montBlancTitle.length > 1 ||
                    mrCleanTitle.length > 1 ||
                    oralbTitle.length > 1 ||
                    peptoBismolTitle.length > 1 ||
                    permasharpTitle.length > 1 ||
                    pertPlusTitle.length > 1 ||
                    procterGambleTitle.length > 1 ||
                    softColorTitle.length > 1 ||
                    sunnyDelightTitle.length > 1 ||
                    thermaCareTitle.length > 1 ||
                    vidalSassoonTitle.length > 1 ||
                    washabyebabyTitle.length > 1 ||
                    babyFreshTitle.length > 1 ||
                    bold3Title.length > 1 ||
                    levisTitle.length > 1 ||
                    skiiTitle.length > 1 ||
                    headAndShouldersTitle.length > 1 ||
                    protecterGambleTitle.length > 1 ||
                    armaDeFuegoTitle.length > 1 ||
                    mobiKidsTitle.length > 1 ||
                    hierbaCannabisTitle.length > 1 ||
                    hierbaDeCannabisTitle.length > 1 ||
                    pgTitle.length > 1 ||
                    dgTitle.length > 1 ||
                    hsTitle.length > 1 ||
                    ggTitle.length > 1 ||
                    oldSpiceTitle.length > 1 ||
                    headsShouldersTitle.length > 1 ||
                    magiaBlancaTitle.length > 1 ||
                    shieldAntibacterialTitle.length > 1 ||
                    trueAndVictoriousTitle.length > 1 ||
                    cannabisHerbTitle.length > 1 ||
                    walletNinjaTitle.length > 1 ||
                    pikmiPopsTitle.length > 1 ||
                    commeDesGarconsTitle.length > 1 ||
                    despicableMeTitle.length > 1 ||
                    johnDeereTitle.length > 1 ||
                    feistyPetsTitle.length > 1 ||
                    philippPleinTitle.length > 1 ||
                    besameCosmeticsTitle.length > 1 ||
                    kevinDurantTitle.length > 1 ||
                    theBeatlesTitle.length > 1 ||
                    lillyPulitzerTitle.length > 1 ||
                    tommyBahamaTitle.length > 1 ||
                    venusFashionTitle.length > 1 ||
                    closetCandyBoutiqueTitle.length > 1 ||
                    helloKittyTitle.length > 1 ||
                    handNailHarmonyTitle.length > 1 ||
                    ontelProductsTitle.length > 1 ||
                    urbanDecayTitle.length > 1 ||
                    whiteMagicTitle.length > 1 ||
                    skipHopTitle.length > 1 ||
                    abTomicTitle.length > 1
                ) {
                    brandFound = true;
                } else {
                    words.forEach(elementInWords => {
                        wrongWords.forEach(elementWrong => {
                            if (elementInWords == elementWrong) {
                                brandFound = true;
                            }
                        });
                    });
                }
                resolve(brandFound);
            }

        } catch (error) {
            reject(error);
        }
    });
}

async function test() {
    try {
        let test = await validateText('apple');
        console.log({response: test});
    } catch (error) {
        console.log({error: error});
    }
}

test();


module.exports = { validateText }