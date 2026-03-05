/* ==============================
   Missão KBD — app.js (HTML/CSS/JS)
   - Quiz por MARCA + KBD: QUIZZES[marcaId][kbdId]
   - Pós-quiz: próximo KBD da marca; se acabou, próxima marca pendente
   - Progresso em % na Home e na página da Marca
   - Medalhas: 🥇 🥈 🥉
================================ */

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyWERu4e0iNLGkeB3Xq8Ou1dM4FFGI7SQagRVEjhCNIc-4gVAyt4DJPNe_rp9Le6kM/exec";

const ALLOWED_SECTORS = [
  "PROJ-MAIS-RS01",
  "PROJ-MAIS-RS04",
  "PROJ-MAIS-SC01",
  "PROJ-MAIS-SC05",
  "PROJ-MAIS-SC06",
  "PROJ-MAIS-SC11",
  "PROJ-MAIS-SC13",
  "PROJ-MAIS-SC15",
  "PROJ-MAIS-SC18",
  "PROJ-MAIS-SC19",
  "RS03",
  "RS07",
  "RS08",
  "RS09",
  "RS102",
  "RS109",
  "RS111",
  "RS113",
  "RS115",
  "RS12",
  "RS122",
  "RS123",
  "RS129",
  "RS13",
  "RS131",
  "RS133",
  "RS134",
  "RS135",
  "RS136",
  "RS137",
  "RS138",
  "RS139",
  "RS14",
  "RS140",
  "RS141",
  "RS142",
  "RS143",
  "RS144",
  "RS145",
  "RS146",
  "RS147",
  "RS148",
  "RS149",
  "RS15",
  "RS150",
  "RS151",
  "RS152",
  "RS153",
  "RS154",
  "RS155",
  "RS156",
  "RS157",
  "RS158",
  "RS16",
  "RS160",
  "RS161",
  "RS163",
  "RS165",
  "RS166",
  "RS167",
  "RS168",
  "RS170",
  "RS171",
  "RS172",
  "RS173",
  "RS174",
  "RS175",
  "RS176",
  "RS177",
  "RS178",
  "RS179",
  "RS180",
  "RS181",
  "RS182",
  "RS183",
  "RS185",
  "RS186",
  "RS187",
  "RS188",
  "RS190",
  "RS192",
  "RS193",
  "RS194",
  "RS195",
  "RS196",
  "RS198",
  "RS199",
  "RS200",
  "RS201",
  "RS202",
  "RS203",
  "RS204",
  "RS22",
  "RS26",
  "RS27",
  "RS28",
  "RS30",
  "RS32",
  "RS33",
  "RS35",
  "RS37",
  "RS38",
  "RS40",
  "RS41",
  "RS44",
  "RS47",
  "RS48",
  "RS53",
  "RS57",
  "RS59",
  "RS60",
  "RS61",
  "RS62",
  "RS63",
  "RS64",
  "RS66",
  "RS69",
  "RS74",
  "RS75",
  "RS80",
  "RS83",
  "RS85",
  "RS87",
  "RS91",
  "RS93",
  "RS95",
  "RS97",
  "SC07",
  "SC08",
  "SC102",
  "SC103",
  "SC109",
  "SC113",
  "SC121",
  "SC124",
  "SC126",
  "SC127",
  "SC129",
  "SC13",
  "SC130",
  "SC131",
  "SC132",
  "SC133",
  "SC134",
  "SC136",
  "SC137",
  "SC138",
  "SC139",
  "SC140",
  "SC141",
  "SC143",
  "SC144",
  "SC146",
  "SC147",
  "SC148",
  "SC154",
  "SC155",
  "SC156",
  "SC159",
  "SC160",
  "SC161",
  "SC162",
  "SC163",
  "SC164",
  "SC165",
  "SC166",
  "SC167",
  "SC170",
  "SC176",
  "SC181",
  "SC182",
  "SC186",
  "SC187",
  "SC189",
  "SC19",
  "SC190",
  "SC192",
  "SC193",
  "SC194",
  "SC195",
  "SC198",
  "SC20",
  "SC200",
  "SC204",
  "SC206",
  "SC207",
  "SC208",
  "SC21",
  "SC210",
  "SC211",
  "SC212",
  "SC216",
  "SC219",
  "SC222",
  "SC223",
  "SC225",
  "SC227",
  "SC229",
  "SC230",
  "SC232",
  "SC236",
  "SC239",
  "SC24",
  "SC241",
  "SC243",
  "SC244",
  "SC246",
  "SC247",
  "SC248",
  "SC250",
  "SC251",
  "SC252",
  "SC253",
  "SC254",
  "SC255",
  "SC257",
  "SC27",
  "SC29",
  "SC31",
  "SC34",
  "SC37",
  "SC40",
  "SC51",
  "SC61",
  "SC62",
  "SC63",
  "SC64",
  "SC67",
  "SC80",
  "SC85",
  "SC92",
  "SC95",
  "SC98",
  "SCCOORD05",
  "SCCOORD04",
  "SCCOORD01",
  "RSCOORD07",
  "RSCOORD06",
  "SCCOORD07",
  "SCCOORD06",
  "RSCOORD04",
  "RSCOORD03",
  "RSCOORD02",
  "RSCOORD01",
  "PROJ-MAIS-COORDSC01",
  "PROJ-MAIS-COORDRS01",
  "EXECUTIVO2",
  "RSESPGILLETTE1",
  "RS243",
  "RS242",
  "RS241",
  "RS240",
  "RS245",
  "RS246",
  "RS247",
  "RS205",
  "SC258",
  "SC259",
  "RS239",
  "SC261",
  "SC262",
  "SC263",
  "SC264",
  "SC265",
  "SC267",
  "SC269",
  "SC270",
  "SC271",
  "SC272",
  "SC273",
  "SC274",
  "SC275",
  "RS248",
  "RS249",
  "RS250",
  "RS251",
  "RS252",
  "RS253",
  "RS244",
  "RS254",
  "RS255",
  "RS256",
  "RS257",
  "RS258",
  "RS259",
  "RS260",
  "RS261",
  "RS262",
  "RS263",
  "RS264",
  "RS265",
  "RS266",
  "RS267",
  "RS268",
  "RS269",
  "RS270",
  "RS271",
  "RS272",
  "RS273",
  "RS274",
  "RS275",
  "RS276",
  "RS277",
  "RS278",
  "SC15",
  "SC256",
  "RS279",
  "SC284",
  "RS280",
  "RS281",
  "SC280",
  "SC282",
  "SC281",
  "SC283",
  "PR02",
  "PR03",
  "PR04",
  "PR08",
  "PR09",
  "PR10",
  "PR100",
  "PR101",
  "PR102",
  "PR105",
  "PR106",
  "PR107",
  "PR109",
  "PR11",
  "PR112",
  "PR114",
  "PR115",
  "PR116",
  "PR117",
  "PR118",
  "PR12",
  "PR120",
  "PR122",
  "PR123",
  "PR124",
  "PR125",
  "PR126",
  "PR127",
  "PR128",
  "PR130",
  "PR132",
  "PR133",
  "PR134",
  "PR135",
  "PR137",
  "PR138",
  "PR140",
  "PR142",
  "PR145",
  "PR147",
  "PR148",
  "PR149",
  "PR15",
  "PR150",
  "PR151",
  "PR152",
  "PR153",
  "PR155",
  "PR156",
  "PR157",
  "PR159",
  "PR16",
  "PR160",
  "PR161",
  "PR164",
  "PR165",
  "PR167",
  "PR168",
  "PR169",
  "PR17",
  "PR170",
  "PR171",
  "PR172",
  "PR173",
  "PR175",
  "PR176",
  "PR177",
  "PR178",
  "PR179",
  "PR18",
  "PR180",
  "PR181",
  "PR182",
  "PR185",
  "PR187",
  "PR188",
  "PR189",
  "PR190",
  "PR191",
  "PR192",
  "PR193",
  "PR195",
  "PR196",
  "PR197",
  "PR198",
  "PR199",
  "PR20",
  "PR200",
  "PR201",
  "PR206",
  "PR207",
  "PR208",
  "PR21",
  "PR210",
  "PR213",
  "PR214",
  "PR215",
  "PR216",
  "PR217",
  "PR218",
  "PR219",
  "PR221",
  "PR222",
  "PR223",
  "PR224",
  "PR226",
  "PR227",
  "PR228",
  "PR229",
  "PR23",
  "PR230",
  "PR231",
  "PR232",
  "PR24",
  "PR25",
  "PR26",
  "PR27",
  "PR28",
  "PR33",
  "PR34",
  "PR35",
  "PR38",
  "PR39",
  "PR41",
  "PR43",
  "PR46",
  "PR48",
  "PR49",
  "PR51",
  "PR52",
  "PR53",
  "PR55",
  "PR57",
  "PR58",
  "PR59",
  "PR63",
  "PR64",
  "PR65",
  "PR67",
  "PR69",
  "PR70",
  "PR72",
  "PR74",
  "PR75",
  "PR77",
  "PR79",
  "PR81",
  "PR84",
  "PR86",
  "PR87",
  "PR89",
  "PR90",
  "PR91",
  "PR93",
  "PR95",
  "PR98",
  "PR99",
  "PROJ-MAIS-PR03",
  "PROJ-MAIS-PR04",
  "PROJ-MAIS-PR05",
  "PROJ-MAIS-PR07",
  "PROJ-MAIS-PR10",
  "PROJ-MAIS-PR12",
  "PROJ-MAIS-PR26",
  "PROJ-MAIS-PR31",
  "PROJ-MAIS-PR35",
  "PROJ-MAIS-SC07",
  "PROJ-MAIS-SC17",
  "SC02",
  "SC03",
  "SC104",
  "SC105",
  "SC107",
  "SC128",
  "SC135",
  "SC142",
  "SC145",
  "SC149",
  "SC150",
  "SC151",
  "SC152",
  "SC153",
  "SC157",
  "SC16",
  "SC168",
  "SC169",
  "SC172",
  "SC173",
  "SC174",
  "SC175",
  "SC177",
  "SC178",
  "SC179",
  "SC180",
  "SC188",
  "SC191",
  "SC196",
  "SC199",
  "SC201",
  "SC202",
  "SC203",
  "SC205",
  "SC209",
  "SC213",
  "SC214",
  "SC215",
  "SC217",
  "SC218",
  "SC220",
  "SC221",
  "SC224",
  "SC226",
  "SC231",
  "SC233",
  "SC234",
  "SC235",
  "SC237",
  "SC238",
  "SC240",
  "SC242",
  "SC249",
  "SC30",
  "SC33",
  "SC36",
  "SC44",
  "SC55",
  "SC58",
  "SC70",
  "SC71",
  "SC76",
  "SC83",
  "SCCOORD03",
  "SCCOORD02",
  "PRCOORD06",
  "PRCOORD05",
  "PRCOORD04",
  "PRCOORD03",
  "PRCOORD02",
  "PRCOORD01",
  "PRCOORD07",
  "PROJ-MAIS-COORDPR01",
  "EXECUTIVO1",
  "PRESPGILLETTE1",
  "PR236",
  "PR235",
  "PR234",
  "PR240",
  "PR241",
  "PR233",
  "PR237",
  "PR239",
  "PR238",
  "SC260",
  "PR243",
  "PR244",
  "PR245",
  "PR246",
  "PR247",
  "PR248",
  "PR249",
  "PR250",
  "PR251",
  "PR252",
  "PR253",
  "PR254",
  "PR255",
  "PR256",
  "PR257",
  "PR258",
  "PR259",
  "PR260",
  "PR261",
  "PR262",
  "PR263",
  "PR264",
  "SC266",
  "SC268",
  "SC276",
  "PR265",
  "PR266",
  "PR267",
  "SC277",
  "PR01",
  "PR05",
  "PR19",
  "PR242",
  "PRCOORD08",
  "SC278",
  "PR268",
  "PR269",
  "SC285",
  "SC286",
  "PR270",
  "PROJ-MAIS-SPI04",
  "PROJ-MAIS-SPI05",
  "PROJ-MAIS-SPI23",
  "PROJ-MAIS-SPI24",
  "PROJ-MAIS-SPI27",
  "PROJ-MAIS-SPI32",
  "PROJ-MAIS-SPI34",
  "PROJ-MAIS-SPI41",
  "PROJ-MAIS-SPI48",
  "PROJ-MAIS-SPI49",
  "PROJ-MAIS-SPI56",
  "PROJ-MAIS-SPI57",
  "PROJ-MAIS-SPI60",
  "PROJ-MAIS-SPI64",
  "PROJ-MAIS-SPI65",
  "SPI05",
  "SPI10",
  "SPI107",
  "SPI109",
  "SPI114",
  "SPI115",
  "SPI117",
  "SPI125",
  "SPI127",
  "SPI130",
  "SPI135",
  "SPI14",
  "SPI144",
  "SPI145",
  "SPI147",
  "SPI149",
  "SPI15",
  "SPI163",
  "SPI164",
  "SPI166",
  "SPI175",
  "SPI181",
  "SPI183",
  "SPI184",
  "SPI186",
  "SPI188",
  "SPI189",
  "SPI193",
  "SPI194",
  "SPI196",
  "SPI201",
  "SPI207",
  "SPI210",
  "SPI211",
  "SPI221",
  "SPI224",
  "SPI227",
  "SPI230",
  "SPI233",
  "SPI237",
  "SPI239",
  "SPI240",
  "SPI245",
  "SPI252",
  "SPI256",
  "SPI257",
  "SPI259",
  "SPI267",
  "SPI270",
  "SPI272",
  "SPI273",
  "SPI275",
  "SPI282",
  "SPI285",
  "SPI286",
  "SPI287",
  "SPI290",
  "SPI291",
  "SPI294",
  "SPI297",
  "SPI305",
  "SPI307",
  "SPI311",
  "SPI314",
  "SPI315",
  "SPI316",
  "SPI317",
  "SPI321",
  "SPI322",
  "SPI324",
  "SPI327",
  "SPI331",
  "SPI334",
  "SPI336",
  "SPI337",
  "SPI339",
  "SPI341",
  "SPI342",
  "SPI343",
  "SPI344",
  "SPI356",
  "SPI357",
  "SPI358",
  "SPI364",
  "SPI365",
  "SPI366",
  "SPI368",
  "SPI369",
  "SPI370",
  "SPI371",
  "SPI373",
  "SPI378",
  "SPI381",
  "SPI382",
  "SPI383",
  "SPI39",
  "SPI391",
  "SPI393",
  "SPI396",
  "SPI40",
  "SPI401",
  "SPI409",
  "SPI410",
  "SPI412",
  "SPI415",
  "SPI422",
  "SPI437",
  "SPI439",
  "SPI440",
  "SPI442",
  "SPI443",
  "SPI448",
  "SPI455",
  "SPI457",
  "SPI458",
  "SPI463",
  "SPI466",
  "SPI47",
  "SPI474",
  "SPI478",
  "SPI492",
  "SPI494",
  "SPI496",
  "SPI497",
  "SPI499",
  "SPI500",
  "SPI503",
  "SPI505",
  "SPI510",
  "SPI511",
  "SPI513",
  "SPI514",
  "SPI515",
  "SPI516",
  "SPI518",
  "SPI519",
  "SPI521",
  "SPI522",
  "SPI523",
  "SPI525",
  "SPI526",
  "SPI529",
  "SPI532",
  "SPI540",
  "SPI541",
  "SPI542",
  "SPI544",
  "SPI545",
  "SPI550",
  "SPI551",
  "SPI552",
  "SPI553",
  "SPI554",
  "SPI56",
  "SPI560",
  "SPI562",
  "SPI563",
  "SPI564",
  "SPI565",
  "SPI566",
  "SPI569",
  "SPI570",
  "SPI571",
  "SPI572",
  "SPI574",
  "SPI577",
  "SPI578",
  "SPI58",
  "SPI64",
  "SPI66",
  "SPI68",
  "SPI73",
  "SPI79",
  "SPI83",
  "SPI86",
  "SPI91",
  "SPI95",
  "SPI97",
  "SPICOORD19",
  "SPICOORD15",
  "SPICOORD07",
  "SPICOORD06",
  "SPICOORD04",
  "SPICOORD03",
  "SPICOORD12",
  "SPICOORD11",
  "SPICOORD10",
  "SPICOORD02",
  "EXECUTIVO3",
  "SPI582",
  "SPI587",
  "SPI588",
  "SPI586",
  "SPI585",
  "SPI584",
  "SPI583",
  "SPI592",
  "SPI610",
  "SPI612",
  "SPI614",
  "SPI615",
  "SPI616",
  "SPI617",
  "SPI589",
  "SPI618",
  "SPI619",
  "SPI620",
  "SPI621",
  "SPI622",
  "SPI623",
  "SPI624",
  "SPI625",
  "SPI627",
  "SPI590",
  "SPI591",
  "SPICOORD23",
  "PROJ-MAIS-SPI03",
  "PROJ-MAIS-SPI06",
  "PROJ-MAIS-SPI08",
  "PROJ-MAIS-SPI09",
  "PROJ-MAIS-SPI10",
  "PROJ-MAIS-SPI13",
  "PROJ-MAIS-SPI26",
  "PROJ-MAIS-SPI37",
  "PROJ-MAIS-SPI43",
  "PROJ-MAIS-SPI44",
  "PROJ-MAIS-SPI47",
  "PROJ-MAIS-SPI52",
  "PROJ-MAIS-SPI58",
  "PROJ-MAIS-SPI59",
  "PROJ-MAIS-SPI63",
  "PROJ-MAIS-SPI66",
  "PROJ-MAIS-SPI67",
  "PROJ-MAIS-SPI70",
  "SPI02",
  "SPI04",
  "SPI06",
  "SPI09",
  "SPI104",
  "SPI11",
  "SPI112",
  "SPI116",
  "SPI118",
  "SPI119",
  "SPI12",
  "SPI120",
  "SPI121",
  "SPI13",
  "SPI131",
  "SPI136",
  "SPI138",
  "SPI141",
  "SPI142",
  "SPI143",
  "SPI146",
  "SPI148",
  "SPI156",
  "SPI161",
  "SPI162",
  "SPI168",
  "SPI170",
  "SPI172",
  "SPI176",
  "SPI177",
  "SPI179",
  "SPI182",
  "SPI187",
  "SPI190",
  "SPI195",
  "SPI198",
  "SPI199",
  "SPI20",
  "SPI200",
  "SPI203",
  "SPI214",
  "SPI215",
  "SPI219",
  "SPI222",
  "SPI225",
  "SPI234",
  "SPI238",
  "SPI24",
  "SPI243",
  "SPI25",
  "SPI250",
  "SPI255",
  "SPI258",
  "SPI260",
  "SPI263",
  "SPI266",
  "SPI268",
  "SPI28",
  "SPI283",
  "SPI284",
  "SPI288",
  "SPI292",
  "SPI296",
  "SPI298",
  "SPI30",
  "SPI304",
  "SPI306",
  "SPI310",
  "SPI313",
  "SPI318",
  "SPI319",
  "SPI323",
  "SPI325",
  "SPI326",
  "SPI329",
  "SPI330",
  "SPI332",
  "SPI345",
  "SPI347",
  "SPI348",
  "SPI352",
  "SPI354",
  "SPI355",
  "SPI360",
  "SPI362",
  "SPI363",
  "SPI367",
  "SPI37",
  "SPI375",
  "SPI379",
  "SPI384",
  "SPI385",
  "SPI386",
  "SPI387",
  "SPI389",
  "SPI390",
  "SPI394",
  "SPI395",
  "SPI400",
  "SPI402",
  "SPI403",
  "SPI404",
  "SPI406",
  "SPI407",
  "SPI41",
  "SPI411",
  "SPI413",
  "SPI414",
  "SPI416",
  "SPI417",
  "SPI418",
  "SPI419",
  "SPI420",
  "SPI421",
  "SPI424",
  "SPI425",
  "SPI426",
  "SPI429",
  "SPI432",
  "SPI434",
  "SPI435",
  "SPI438",
  "SPI441",
  "SPI444",
  "SPI445",
  "SPI446",
  "SPI449",
  "SPI450",
  "SPI451",
  "SPI452",
  "SPI454",
  "SPI456",
  "SPI459",
  "SPI460",
  "SPI461",
  "SPI462",
  "SPI464",
  "SPI465",
  "SPI467",
  "SPI468",
  "SPI471",
  "SPI473",
  "SPI475",
  "SPI476",
  "SPI477",
  "SPI479",
  "SPI485",
  "SPI486",
  "SPI487",
  "SPI488",
  "SPI489",
  "SPI490",
  "SPI491",
  "SPI493",
  "SPI495",
  "SPI501",
  "SPI506",
  "SPI507",
  "SPI508",
  "SPI509",
  "SPI517",
  "SPI52",
  "SPI520",
  "SPI524",
  "SPI527",
  "SPI528",
  "SPI530",
  "SPI533",
  "SPI534",
  "SPI535",
  "SPI536",
  "SPI538",
  "SPI539",
  "SPI54",
  "SPI543",
  "SPI546",
  "SPI547",
  "SPI548",
  "SPI549",
  "SPI555",
  "SPI557",
  "SPI558",
  "SPI559",
  "SPI561",
  "SPI567",
  "SPI568",
  "SPI57",
  "SPI573",
  "SPI575",
  "SPI579",
  "SPI581",
  "SPI59",
  "SPI62",
  "SPI67",
  "SPI69",
  "SPI72",
  "SPI76",
  "SPI77",
  "SPI80",
  "SPI82",
  "SPI88",
  "SPI98",
  "SPI99",
  "SPICOORD21",
  "SPICOORD20",
  "SPICOORD18",
  "SPICOORD17",
  "SPICOORD16",
  "SPICOORD14",
  "SPICOORD05",
  "SPICOORD01",
  "PROJ-MAIS-COORDSPI01",
  "EXECUTIVO4",
  "SPESPGILLETTE1",
  "SPI593",
  "SPI594",
  "SPI595",
  "SPI596",
  "SPI597",
  "SPI598",
  "SPI600",
  "SPI601",
  "SPI602",
  "SPI603",
  "SPI604",
  "SPI605",
  "SPI606",
  "SPI607",
  "SPI608",
  "SPI609",
  "SPI611",
  "SPI613",
  "SPI626",
  "SPI628",
  "SPI08",
  "SPICOORD22",
  "SPI629",
  "SPIESPGILLETTE2",
  "SPIESPGILLETTE3",
  "SCESPGILLETTE1"
];

// ====== DADOS (Marcas/KBDs) ======
const CONTENT = {
  marcas: [
    {
      id: "always",
      nome: "ALWAYS",
      logo: "logos/always.jpg",
      kbds: [{ id: "kbd1", nome: "KBD Absorventes – Always Suave", videoId: null, imagens: [] }],
    },
    {
      id: "downy",
      nome: "DOWNY",
      logo: "logos/downy.png",
      kbds: [
        { id: "kbd1", nome: "KBD Ponto Extra – Brisa", videoId: null, imagens: [] },
        { id: "kbd2", nome: "KBD Bloco Azul (50%)", videoId: null, imagens: [] },
        { id: "kbd3", nome: "KBD Bloco Colorido (40%) ou [Alfazema ou Lírios]", videoId: null, imagens: [] },
      ],
    },
    {
      id: "pantene",
      nome: "PANTENE",
      logo: "logos/pantene.png",
      kbds: [
        { id: "kbd1", nome: "KBD Bond Repair (20%)", videoId: null, imagens: [] },
        { id: "kbd2", nome: "KBD Top Versões – Bambu, Colágeno e Biotinamina B3 (40%)", videoId: null, imagens: [] },
        { id: "kbd3", nome: "KBD Óleo – 2 Pontos de Contato", videoId: null, imagens: [] },
        { id: "kbd4", nome: "KBD Rio/Cachoeira Dourada", videoId: null, imagens: [] },
      ],
    },
    {
      id: "pampers",
      nome: "PAMPERS",
      logo: "logos/pampers.png",
      kbds: [
        { id: "kbd1", nome: "KBD Ponto Extra – 50% Tamanhos Grandes", videoId: null, imagens: [] },
        { id: "kbd2", nome: "KBD Pants", videoId: null, imagens: [] },
        { id: "kbd3", nome: "KBD Pants + Premium (Lojas Sul)", videoId: null, imagens: [] },
        { id: "kbd4", nome: "KBD Vale Night – SOS Gôndola", videoId: null, imagens: [] },
        { id: "kbd5", nome: "KBD Vale Night – Ponto Extra Farma", videoId: null, imagens: [] },
      ],
    },
    {
      id: "secret",
      nome: "SECRET",
      logo: "logos/secret.png",
      kbds: [
        { id: "kbd1", nome: "KBD 2 Bandejas", videoId: null, imagens: [] },
        { id: "kbd2", nome: "KBD Bloco 15 Frentes ou 3 Bandejas", videoId: null, imagens: [] },
      ],
    },
    {
      id: "oral-b",
      nome: "ORAL-B",
      logo: "logos/oral-b.png",
      kbds: [
        { id: "kbd1", nome: "KBD Branqueamento (60%)", videoId: null, imagens: [] },
        { id: "kbd2", nome: "KBD 2 Pontos de Contato – Escovas", videoId: null, imagens: [] },
        { id: "kbd3", nome: "KBD Layout BIPE – Escovas", videoId: null, imagens: [] },
      ],
    },
    {
      id: "gillette",
      nome: "GILLETTE",
      logo: "logos/gillette.png",
      kbds: [
        { id: "kbd1", nome: "KBD Sistemas – % de Ganchos", videoId: null, imagens: [] },
        { id: "kbd2", nome: "KBD 2 Pontos de Contato – Mach3/Presto3", videoId: null, imagens: [] },
        { id: "kbd3", nome: "KBD Carga Mach3 c/8 – 2 Ganchos", videoId: null, imagens: [] },
      ],
    },
    {
      id: "venus",
      nome: "VENUS",
      logo: "logos/venus.png",
      kbds: [
        { id: "kbd1", nome: "KBD Sistemas – 20% de Ganchos", videoId: null, imagens: [] },
        { id: "kbd2", nome: "KBD 2 Pontos de Contato", videoId: null, imagens: [] },
        { id: "kbd3", nome: "KBD Checkout – Venus Pele Sensível", videoId: null, imagens: [] },
      ],
    },
  ],
};

// ====== Utils ======
function normalizeSector(v) {
  return String(v || "").trim().toUpperCase().replace(/\s+/g, "");
}
function getSetor() {
  return (localStorage.getItem("SETOR") || "").trim();
}
function ensureSetor() {
  if (!getSetor()) window.location.href = "index.html";
}
function qs() {
  return new URLSearchParams(window.location.search);
}
function getCompletedData() {
  return JSON.parse(localStorage.getItem("QUIZZES_COMPLETED") || "{}");
}

// ====== Modal ======
function criarModal(c) {
  const o = document.createElement("div");
  o.className = "modal-overlay";
  o.innerHTML = `
    <div class="modal">
      <div class="modal-icon">${c.icon || ""}</div>
      <div class="modal-title">${c.title || ""}</div>
      <div class="modal-text">${c.text || ""}</div>
      <div class="modal-actions">
        ${(c.buttons || [])
          .map((b) => `<button class="modal-btn ${b.class || ""}" onclick="${b.action}">${b.label}</button>`)
          .join("")}
      </div>
    </div>`;
  document.body.appendChild(o);
  return o;
}
function fecharModal() {
  const o = document.querySelector(".modal-overlay");
  if (o) o.remove();
}

function confirmarSaida() {
  criarModal({
    icon: "⚠️",
    title: "Tem certeza?",
    text: "Ao sair, você perderá todo o progresso.",
    buttons: [
      { label: "Sim, sair", class: "confirm", action: "sairConfirmado()" },
      { label: "Cancelar", class: "cancel", action: "fecharModal()" },
    ],
  });
}
function sairConfirmado() {
  localStorage.removeItem("SETOR");
  window.location.href = "index.html";
}
function trocarSetor() {
  confirmarSaida();
}

// ====== Login ======
function entrar() {
  const raw = document.getElementById("setor")?.value || "";
  const s = normalizeSector(raw);
  if (!s) return alert("Digite seu setor.");
  if (!ALLOWED_SECTORS.includes(s)) {
    return alert(`Setor inválido. Use um dos setores liberados: ${ALLOWED_SECTORS.join(", ")}`);
  }
  localStorage.setItem("SETOR", s);
  window.location.href = "home.html";
}

// ====== Progresso ======
function isQuizCompleted(marcaId, kbdId) {
  const data = getCompletedData();
  return !!(data[marcaId] && data[marcaId][kbdId]);
}

function markQuizCompleted(marcaId, kbdId) {
  const data = getCompletedData();
  if (!data[marcaId]) data[marcaId] = {};
  data[marcaId][kbdId] = true;
  localStorage.setItem("QUIZZES_COMPLETED", JSON.stringify(data));
}

function getBrandProgress(marcaId) {
  const marca = CONTENT.marcas.find((m) => m.id === marcaId);
  if (!marca) return { done: 0, total: 0, pct: 0 };

  const data = getCompletedData();
  const total = marca.kbds.length;
  let done = 0;
  for (const kbd of marca.kbds) {
    if (data[marcaId] && data[marcaId][kbd.id]) done++;
  }
  const pct = total ? Math.round((done / total) * 100) : 0;
  return { done, total, pct };
}

// ====== Home (Marcas) ======
function renderHome() {
  ensureSetor();

  const badge = document.getElementById("setorBadge");
  if (badge) badge.textContent = getSetor();

  const lista = document.getElementById("listaMarcas");
  if (!lista) return;

  lista.innerHTML = "";

  CONTENT.marcas.forEach((m) => {
    const prog = getBrandProgress(m.id);

    const div = document.createElement("div");
    div.className = `card brand-card ${prog.pct === 100 ? "done" : "pending"}`;

    div.innerHTML = `
      <div class="card-row card-row-space">
        <div class="card-row">
          <img class="brand-logo" src="${m.logo}" alt="${m.nome}">
          <div class="card-col">
            <div class="card-title">${m.nome}</div>
            <div class="card-sub">${prog.done}/${prog.total} KBDs • ${prog.pct}%</div>
          </div>
        </div>
        <div class="pct-pill ${prog.pct === 100 ? "pct-ok" : "pct-pending"}">${prog.pct}%</div>
      </div>
    `;

    div.onclick = () => {
      window.location.href = "marca.html?marca=" + encodeURIComponent(m.id);
    };

    lista.appendChild(div);
  });
}

function voltarHome() {
  window.location.href = "home.html";
}

// ====== Marca (KBDs) ======
function renderMarca() {
  ensureSetor();

  const marcaId = qs().get("marca");
  const marca = CONTENT.marcas.find((m) => m.id === marcaId);
  if (!marca) {
    alert("Marca não encontrada");
    voltarHome();
    return;
  }

  const badgeEl = document.getElementById("setorBadge");
  if (badgeEl) badgeEl.textContent = getSetor();

  const titulo = document.getElementById("marcaTitulo");
  if (titulo) titulo.textContent = marca.nome;

  const progTop = document.getElementById("marcaProgresso");
  if (progTop) {
    const prog = getBrandProgress(marca.id);
    progTop.textContent = `Progresso: ${prog.done}/${prog.total} (${prog.pct}%)`;
    progTop.className = prog.pct === 100 ? "brand-progress ok" : "brand-progress";
  }

  const lista = document.getElementById("listaKbds");
  if (!lista) return;

  lista.innerHTML = "";

  marca.kbds.forEach((kbd) => {
    const done = isQuizCompleted(marca.id, kbd.id);
    const pct = done ? 100 : 0;

    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <div class="card-row card-row-space">
        <div class="card-col">
          <div class="card-title">${kbd.nome}</div>
          <div class="card-sub">${done ? "✅ Concluído" : "⏳ Pendente"}</div>
        </div>
        <div class="pct-pill ${done ? "pct-ok" : "pct-pending"}">${pct}%</div>
      </div>
    `;

    div.onclick = () =>
      (window.location.href =
        "kbd.html?marca=" + encodeURIComponent(marca.id) + "&kbd=" + encodeURIComponent(kbd.id));

    lista.appendChild(div);
  });
}

function voltarMarca() {
  const marca = qs().get("marca");
  window.location.href = "marca.html?marca=" + encodeURIComponent(marca);
}

// ====== KBD (Aula) ======
function renderKbd() {
  ensureSetor();

  const marcaId = qs().get("marca");
  const kbdId = qs().get("kbd");

  const marca = CONTENT.marcas.find((m) => m.id === marcaId);
  if (!marca) {
    alert("Marca não encontrada");
    voltarHome();
    return;
  }

  const kbd = (marca.kbds || []).find((k) => k.id === kbdId);
  if (!kbd) {
    alert("KBD não encontrado");
    voltarMarca();
    return;
  }

  const title = document.getElementById("kbdTitulo");
  if (title) title.textContent = `${marca.nome} • ${kbd.nome}`;

  const topbarSetor = document.getElementById("topbarSetor");
  if (topbarSetor) topbarSetor.textContent = getSetor();

  const iframe = document.getElementById("videoFrame");
  const placeholder = document.getElementById("videoPlaceholder");

  if (kbd.videoId) {
    iframe.src = "https://www.youtube.com/embed/" + kbd.videoId;
    iframe.style.display = "block";
    placeholder.style.display = "none";
  } else {
    iframe.style.display = "none";
    placeholder.style.display = "flex";
  }

  const imgBox = document.getElementById("imagensKbd");
  if (imgBox) {
    imgBox.innerHTML = "";
    if (kbd.imagens && kbd.imagens.length > 0) {
      kbd.imagens.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        imgBox.appendChild(img);
      });
    } else {
      const msg = document.createElement("div");
      msg.className = "small muted";
      msg.textContent = "Imagens em breve.";
      imgBox.appendChild(msg);
    }
  }

  const status = document.getElementById("kbdStatus");
  if (status) {
    const done = isQuizCompleted(marca.id, kbd.id);
    status.textContent = done ? "✅ Quiz concluído" : "⏳ Pendente";
    status.className = done ? "kbd-status done" : "kbd-status pending";
  }
}

function irParaQuiz() {
  const marca = qs().get("marca");
  const kbd = qs().get("kbd");
  window.location.href = "quiz.html?marca=" + encodeURIComponent(marca) + "&kbd=" + encodeURIComponent(kbd);
}

// ====== Quiz ======
let quizState = {
  marcaAtual: null,
  kbdAtual: null,
  perguntaIndex: 0,
  acertos: 0,
  total: 0,
  respondendo: false,
  perguntas: [],
};

function renderQuiz() {
  ensureSetor();

  const marcaId = qs().get("marca");
  const kbdId = qs().get("kbd");

  const marca = CONTENT.marcas.find((m) => m.id === marcaId);
  if (!marca) {
    alert("Marca não encontrada");
    voltarHome();
    return;
  }

  const kbd = (marca.kbds || []).find((k) => k.id === kbdId);

  // ✅ CORRETO: marca -> kbd -> perguntas
  const byBrand = (window.QUIZZES && window.QUIZZES[marcaId]) || null;
  const perguntas = byBrand && typeof byBrand === "object" && byBrand[kbdId] ? byBrand[kbdId] : [];

  const badgeQuiz = document.getElementById("setorBadgeQuiz");
  if (badgeQuiz) badgeQuiz.textContent = getSetor();

  const qt = document.getElementById("quizTitulo");
  const qsEl = document.getElementById("quizSubtitulo");
  if (qt) qt.textContent = `Quiz ${marca.nome}`;
  if (qsEl) qsEl.textContent = kbd ? kbd.nome : "";

  if (!perguntas || perguntas.length === 0) {
    const area = document.getElementById("quizArea");
    if (area) {
      area.innerHTML = `
        <div class="card">
          <div class="card-title">Quiz não encontrado</div>
          <div class="card-sub">Não existe quiz cadastrado para este KBD.</div>
          <div style="height:12px"></div>
          <button class="btn" onclick="voltarMarca()">Voltar</button>
        </div>`;
    }
    return;
  }

  quizState = {
    marcaAtual: marca,
    kbdAtual: kbd,
    perguntaIndex: 0,
    acertos: 0,
    total: perguntas.length,
    respondendo: false,
    perguntas,
  };

  mostrarPergunta();
}

function mostrarPergunta() {
  const { perguntas, perguntaIndex } = quizState;
  const p = perguntas[perguntaIndex];
  quizState.respondendo = false;

  const area = document.getElementById("quizArea");
  if (!area) return;

  area.innerHTML = `
    <div class="quiz-progress">Pergunta ${perguntaIndex + 1} de ${perguntas.length}</div>
    <div class="quiz-question">${p.pergunta}</div>
    <div class="quiz-options">
      ${p.alternativas
        .map((alt, i) => {
          const l = String.fromCharCode(65 + i);
          const clean = String(alt).replace(/^[A-D]\)\s*/, "");
          return `<button class="opt" onclick="responderQuiz('${l}')">
                    <span class="opt-letter">${l}</span>
                    <span class="opt-text">${clean}</span>
                  </button>`;
        })
        .join("")}
    </div>
  `;
}

function responderQuiz(r) {
  if (quizState.respondendo) return;
  quizState.respondendo = true;

  const p = quizState.perguntas[quizState.perguntaIndex];
  const correto = r === p.gabarito;

  if (correto) quizState.acertos++;

  enviarParaSheets({
    setor: getSetor(),
    marca: quizState.marcaAtual.nome,
    kbd: quizState.kbdAtual ? quizState.kbdAtual.nome : "N/A",
    pergunta: p.pergunta,
    resposta: r,
    correta: p.gabarito,
    acertou: correto,
    score: Math.round((quizState.acertos / quizState.total) * 100),
  });

  const area = document.getElementById("quizArea");
  if (!area) return;

  if (correto) {
    area.innerHTML = `
      <div class="feedback ok">
        <div class="feedback-icon">✓</div>
        <div class="feedback-title">Parabéns!</div>
        <div class="feedback-sub">Resposta correta.</div>
      </div>
    `;
    setTimeout(() => proximaPergunta(), 800);
  } else {
    const rt = p.alternativas[p.gabarito.charCodeAt(0) - 65].replace(/^[A-D]\)\s*/, "");
    criarModal({
      icon: "✗",
      title: "Incorreto",
      text: `
        <div class="modal-kbd">
          <div class="modal-kbd-title">Resposta correta:</div>
          <div class="modal-kbd-answer">${p.gabarito}) ${rt}</div>
          ${p.justificativa ? `<div class="modal-kbd-just">${p.justificativa}</div>` : ""}
        </div>
      `,
      buttons: [{ label: "Entendi", class: "confirm", action: "fecharModalEProximo()" }],
    });
  }
}

function fecharModalEProximo() {
  fecharModal();
  proximaPergunta();
}

function proximaPergunta() {
  quizState.perguntaIndex++;
  if (quizState.perguntaIndex < quizState.perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultadoFinal();
  }
}

// ====== Fluxo automático pós-quiz ======
function findNextPendingKbdInBrand(marcaId) {
  const marca = CONTENT.marcas.find((m) => m.id === marcaId);
  if (!marca) return null;

  const data = getCompletedData();
  for (const kbd of marca.kbds) {
    if (!(data[marcaId] && data[marcaId][kbd.id])) {
      return { marca: marcaId, kbd: kbd.id };
    }
  }
  return null;
}

function findNextBrandWithPending(afterMarcaId) {
  const data = getCompletedData();
  const idx = CONTENT.marcas.findIndex((m) => m.id === afterMarcaId);

  // procura para frente
  for (let i = idx + 1; i < CONTENT.marcas.length; i++) {
    const m = CONTENT.marcas[i];
    for (const kbd of m.kbds) {
      if (!(data[m.id] && data[m.id][kbd.id])) return m.id;
    }
  }
  // fallback: procura desde o início (se usuário pulou marcas)
  for (let i = 0; i < CONTENT.marcas.length; i++) {
    const m = CONTENT.marcas[i];
    for (const kbd of m.kbds) {
      if (!(data[m.id] && data[m.id][kbd.id])) return m.id;
    }
  }
  return null;
}

function medalEmoji(pct) {
  if (pct === 100) return "🥇";
  if (pct >= 80) return "🥈";
  return "🥉";
}

function mostrarResultadoFinal() {
  const { acertos, total, marcaAtual, kbdAtual } = quizState;
  const pct = Math.round((acertos / total) * 100);
  const medal = medalEmoji(pct);

  // marca como concluído
  markQuizCompleted(marcaAtual.id, kbdAtual.id);

  // próximo dentro da marca?
  const nextInBrand = findNextPendingKbdInBrand(marcaAtual.id);
  // se não tiver, próxima marca pendente
  const nextBrand = nextInBrand ? null : findNextBrandWithPending(marcaAtual.id);

  let nextLabel = "Concluir";
  let nextAction = `alert('Parabéns! Você concluiu todos os quizzes!'); window.location.href='home.html'`;

  if (nextInBrand) {
    nextLabel = "Próximo KBD";
    nextAction = `window.location.href='kbd.html?marca=${encodeURIComponent(nextInBrand.marca)}&kbd=${encodeURIComponent(nextInBrand.kbd)}'`;
  } else if (nextBrand) {
    nextLabel = "Próxima marca";
    nextAction = `window.location.href='marca.html?marca=${encodeURIComponent(nextBrand)}'`;
  }

  const area = document.getElementById("quizArea");
  if (!area) return;

  area.innerHTML = `
    <div class="result">
      <div class="result-medal">${medal}</div>
      <div class="result-score">${pct}%</div>
      <div class="result-sub">${acertos} de ${total} perguntas corretas</div>
      <button class="btn" onclick="${nextAction}">${nextLabel} →</button>
    </div>
  `;
}

// ====== Sheets ======
async function enviarParaSheets(d) {
  try {
    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        setor: d.setor,
        marca: d.marca,
        kbd: d.kbd,
        pergunta: d.pergunta,
        resposta: d.resposta,
        correta: d.correta,
        acertou: d.acertou ? "SIM" : "NÃO",
        score: d.score,
        userAgent: navigator.userAgent,
      }),
    });
  } catch (e) {
    console.error(e);
  }
}