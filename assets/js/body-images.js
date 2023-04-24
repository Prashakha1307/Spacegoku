const BODIES = {
  "Moon": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/opo9914d.jpg",
  //Jupiter moons
  "Phobos": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/images/283561main_phobos2_hirise_big_full.jpg",
  "Deimos": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/images/318064main_pia11826-full_full.jpg",
  "Io": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/images/169854main_image_feature_764_ys_full.jpg",
  "Europa": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia02528_0.jpg",
  "Ganymede": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia24681-1041.jpg",
  "Callisto": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/images/110204main_image_feature_279_ajhfull.jpg",
  "Amalthea": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia21969.png",
  "Himalia": "",
  "Elara": "",
  "Pasiphae": "",
  "Sinope": "",
  "Lysithea": "",
  "Carme": "",
  "Ananke": "",
  "Leda": "",
  "Thebe": "https://d2pn8kiwq2w21t.cloudfront.net/images/jpegPIA01075.width-640.jpg",
  "Adrastea": "https://tse1.mm.bing.net/th?id=OIP.TFnWKNI_kB0bK36HQiCH2AHaFj&pid=Api",
  "Metis": "",
  "Callirrhoe": "",
  "Themisto": "",
  "Megaclite": "",
  "Taygete": "",
  "Chaldene": "",
  "Harpalyke": "",
  "Kalyke": "",
  "Iocaste": "",
  "Erinome": "",
  "Isonoe": "",
  "Praxidike": "",
  "Autonoe": "",
  "Thyone": "",
  "Hermippe": "",
  "Aitne": "",
  "Eurydome": "",
  "Euanthe": "",
  "Euporie": "",
  "Orthosie": "",
  "Sponde": "",
  "Kale": "",
  "Pasithee": "",
  "Hegemone": "",
  "Mneme": "",
  "Aoede": "",
  "Thelxinoe": "",
  "Arche": "",
  "Kallichore": "",
  "Helike": "",
  "Carpo": "",
  "Eukelade": "",
  "Cyllene": "",
  "Kore": "",
  "Herse": "",
  "S/2003 J 2": "",
  "Eupheme": "",
  "S/2003 J 4": "",
  "Eirene": "",
  "S/2003 J 9": "",
  "S/2003 J 10": "",
  "S/2003 J 12": "",
  "Philophrosyne": "",
  "S/2003 J 16": "",
  "S/2003 J 18": "",
  "S/2003 J 19": "",
  "S/2003 J 23": "",
  //Saturn moons
  "Mimas": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/435578main_pia12570-full.jpg",
  "Enceladus": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia18351-1041.jpg",
  "Tethys": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia18317-1041.jpg",
  "Dione": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/images/620372main_PIA14593_full.jpg",
  "Rhea": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia20495-1041.jpg",
  "Titan": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/images/113649main_image_feature_318_ys_full.jpg",
  "Hyperion": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia17193-1041.jpg",
  "Iapetus": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia21347_rotated.jpg",
  "Phoebe": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/images/155237main_image_feature_639_ys_full.jpg",
  "Janus": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia18299_full.jpg",
  "Epimetheus": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia17208-1041.jpg",
  "Helene": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/images/560471main_helene20110620-43_full.jpg",
  "Telesto": "https://apod.nasa.gov/apod/image/0602/telesto_cassini.jpg",
  "Calypso": "https://solarsystem.nasa.gov/system/content_pages/main_images/582_PIA12598.jpg",
  "Atlas": "https://solarsystem.nasa.gov/system/content_pages/main_images/506_PIA21449.jpg",
  "Prometheus": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia17207-1041.jpg",
  "Pandora": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia21055-1041.jpg",
  "Pan": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia21436-1041.jpg",
  "Ymir": "",
  "Paaliaq": "",
  "Tarvos": "",
  "Ijiraq": "",
  "Suttungr": "",
  "Kiviuq": "",
  "Mundilfari": "",
  "Albiorix": "",
  "Skathi": "",
  "Erriapus": "",
  "Siarnaq": "",
  "Thrymr": "",
  "Narvi": "",
  "Methone": "https://solarsystem.nasa.gov/system/content_pages/main_images/1099_PIA14633_modest.jpg",
  "Pallene": "https://www.nasa.gov/images/content/490669main_pallene20101019-4x3_946-710.jpg",
  "Polydeuces": "https://www.nasa.gov/images/content/151224main_pia08209_detail.jpg",
  "Daphnis": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia17212.jpg",
  "Aegir": "",
  "Bebhionn": "",
  "Bergelmir": "",
  "Bestla": "",
  "Farbauti": "",
  "Fenrir": "",
  "Fornjot": "",
  "Hati": "",
  "Hyrrokkin": "",
  "Kari": "",
  "Loge": "",
  "Skoll": "",
  "Surtur": "",
  "Anthe": "https://solarsystem.nasa.gov/system/content_pages/main_images/503_PIA11100.jpg",
  "Jarnsaxa": "",
  "Greip": "",
  "Tarqeq": "",
  "Aegaeon": "https://solarsystem.nasa.gov/system/content_pages/main_images/450_PIA11148.jpg",
  "S/2004 S 7": "",
  "S/2004 S 12": "",
  "S/2004 S 13": "",
  "S/2004 S 17": "",
  "S/2006 S 1": "",
  "S/2006 S 3": "",
  "S/2007 S 2": "",
  "S/2007 S 3": "",
  "S/2009 S 1": "https://solarsystem.nasa.gov/internal_resources/155/",
  //Uranus moons
  "Ariel": "https://d2pn8kiwq2w21t.cloudfront.net/images/jpegPIA01534.width-1440.jpg",
  "Umbriel": "https://d2pn8kiwq2w21t.cloudfront.net/images/jpegPIA00040.width-640.jpg",
  "Titania": "https://d2pn8kiwq2w21t.cloudfront.net/images/jpegPIA01979.width-1024.jpg",
  "Oberon": "https://solarsystem.nasa.gov/system/content_pages/main_images/262_Oberon_732.jpg",
  "Miranda": "https://www.nasa.gov/sites/default/files/images/173645main_image_feature_796_ys_full.jpg",
  "Cordelia": "",
  "Ophelia": "",
  "Bianca": "",
  "Cressida": "",
  "Desdemona": "",
  "Juliet": "",
  "Portia": "",
  "Rosalind": "",
  "Belinda": "",
  "Puck": "https://d2pn8kiwq2w21t.cloudfront.net/images/jpegPIA01357.width-640.jpg",
  "Caliban": "",
  "Sycorax": "",
  "Prospero": "",
  "Setebos": "",
  "Stephano": "",
  "Trinculo": "",
  "Francisco": "",
  "Margaret": "",
  "Ferdinand": "",
  "Perdita": "",
  "Mab": "",
  "Cupid": "",
  //neptune moons
  "Triton": "https://www.nasa.gov/sites/default/files/images/362897main_PIA01536_full.jpg",
  "Nereid": "https://solarsystem.nasa.gov/system/content_pages/main_images/1137_Nereid-browse-732X520.jpg",
  "Naiad": "https://solarsystem.nasa.gov/system/content_pages/main_images/512_Naiad-732X520.jpg",
  "Thalassa": "",
  "Despina": "https://apod.nasa.gov/apod/image/0909/neptune_despina_transit_combo_despinabrightened.jpg",
  "Galatea": "https://solarsystem.nasa.gov/system/content_pages/main_images/477_galatea_main.jpg",
  "Larissa": "https://solarsystem.nasa.gov/system/content_pages/main_images/509_Larissa_732X520.jpg",
  "Proteus": "https://solarsystem.nasa.gov/system/content_pages/main_images/520_Proteus732X520.jpg",
  "Halimede": "https://solarsystem.nasa.gov/system/content_pages/main_images/480_halimede_main.jpg",
  "Psamathe": "https://solarsystem.nasa.gov/system/content_pages/main_images/523_Psmathe-browse.jpg",
  "Sao": "",
  "Laomedeia": "",
  "Neso": "",
  //Pluto moons
  "Charon": "https://www.nasa.gov/sites/default/files/thumbnails/image/nh-charon.jpg",
  "Nix": "https://www.nasa.gov/sites/default/files/thumbnails/image/nix.jpg",
  "Hydra": "https://www.nasa.gov/sites/default/files/thumbnails/image/nh-hydra_1_0.jpg",
  //Haumea moons
  "Namaka": "https://apod.nasa.gov/apod/image/0809/haumea_nasa.jpg",
  "Hiʻiaka": "https://apod.nasa.gov/apod/image/0809/haumea_nasa.jpg",
  //Eris moons
  "Dysnomia": "https://www.nasa.gov/images/content/180051main1_eris.jpg",
  //Jupiter moon
  "Dia": "https://solarsystem.nasa.gov/system/content_pages/main_images/600_scottshepp_7201.jpg",
  //Asteroids (Come back to this)
  "1 Ceres": "https://www.nasa.gov/sites/default/files/thumbnails/image/pia21079-1041.jpg",
  "6 Hebe": "",
  "47171 Lempo": "",
  "The Little Prince": "",
  "762 Pulcova": "",
  "4179 Toutatis": "https://d2pn8kiwq2w21t.cloudfront.net/images/jpegPIA16599.width-1024.jpg",
  "50000 Quaoar": "https://apod.nasa.gov/apod/image/0210/quaoar_gps.gif",
  "2876 Steins": "",
  //Dwarf Planet
  "136199 Eris": "https://apod.nasa.gov/apod/image/0609/eris_keck_big.jpg",
  //Asteroids
  "5 Astraea": "",
  "5145 Pholus": "",
  "4769 Castalia": "",
  //moon of sylvia
  "Remus": "https://apod.nasa.gov/apod/image/0508/sylvia_compo680.jpg",
  //Asteroids
  "624 Hektor": "",
  "216 Kleopatra": "",
  "3753 Cruithne": "",
  "3 Junon": "https://www.nasa.gov/images/content/387114main_juno20090916-226.jpg",
  "10 Hygiea": "",
  "21 Lutetia": "",
  "253 Mathilde": "https://solarsystem.nasa.gov/system/content_pages/main_images/427_Mathilde1_main.jpg",
  //Planet
  "Uranus": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia18182-uranus-voyager1.png",
  //Asteroids
  "7 Iris": "",
  "433 Eros": "https://solarsystem.nasa.gov/system/content_pages/main_images/454_Eros_main.jpg",
  "Vanth": "",
  "90377 Sedna": "",
  "10199 Chariklo": "https://solarsystem.nasa.gov/system/content_pages/main_images/411_10199_chariklo_main.jpg",
  "87 Sylvia": "https://apod.nasa.gov/apod/image/0508/sylvia_compo680.jpg",
  "(243) Ida I Dactyl": "https://d2pn8kiwq2w21t.cloudfront.net/images/jpegPIA00297.width-768.jpg",
  "90482 Orcus": "https://apod.nasa.gov/apod/image/0903/orcus_gemini_big.gif",
  //Dwarf Planet
  "Pluto": "https://apod.nasa.gov/apod/image/1507/Pluto04_NewHorizons_960.jpg",
  //Asteroids
  "5335 Damocles": "",
  //Moons
  "Romulus": "https://apod.nasa.gov/apod/image/0508/sylvia_compo680.jpg",
  "Alexhelios": "",
  "Cleoselene": "",
  //Asteroids
  "8 Flora": "",
  "2060 Chiron": "https://upload.wikimedia.org/wikipedia/commons/9/94/2060_Chiron.jpg",
  "5261 Eureka": "",
  "588 Achilles": "",
  //Moon
  "Weywot": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Quaoar-weywot_hst.jpg",
  "28978 Ixion": "https://upload.wikimedia.org/wikipedia/commons/0/08/28978-ixion_hst.jpg",
  //Planet
  "Neptune": "https://www.nasa.gov/sites/default/files/thumbnails/image/pia01492-main.jpg",
  //Comet
  "Shoemaker-Levy 9": "https://d2pn8kiwq2w21t.cloudfront.net/images/jpegPIA01264.width-1024.jpg",
  //Asteroids
  "9 Metis": "",
  //Dwarf Planet
  "136108 Haumea": "https://apod.nasa.gov/apod/image/0809/haumea_nasa.jpg",
  //Asteroid
  "7066 Nessus": "",
  "itokawa": "https://solarsystem.nasa.gov/system/content_pages/main_images/425_itokawa_main.jpg",
  "10370 Hylonome": "",
  "45 Eugenia": "https://apod.nasa.gov/apod/image/9910/moonmovie.gif",
  "(308933) 2006 SQ372": "",
  "2 Pallas": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Potw1749a_Pallas_crop.png/220px-Potw1749a_Pallas_crop.png",
  "8405 Asbolus": "",
  "20000 Varuna": "https://upload.wikimedia.org/wikipedia/commons/9/91/20000-varuna_hst.jpg",
  "4 Vesta": "https://solarsystem.nasa.gov/system/content_pages/main_images/209_4_vesta_main.jpg",
  "243 Ida": "https://solarsystem.nasa.gov/system/content_pages/main_images/417_Ida_Dactyl_main.jpg",
  //Comet
  "Comet Hyakutake": "https://apod.nasa.gov/apod/image/0912/hyakutake_zubenel_big.jpg",
  "951 Gaspra": "https://d2pn8kiwq2w21t.cloudfront.net/images/jpegPIA00119.width-1440.jpg",
  "15760 Albion": "https://upload.wikimedia.org/wikipedia/commons/c/cf/1992_QB1_crop.jpg",
  "136472 Makemake": "https://apod.nasa.gov/apod/image/0807/makemake_nasa.jpg",
  "Halley's Comet": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/1986_halley_comet.jpg",
  //Planets and the sun
  "Jupiter": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/stsci-h-p1936a-m-1999x2000.png",
  "Mars": "https://mars.nasa.gov/system/content_pages/main_images/256_Webp.net-resizeimage_%284%29.jpg",
  "Mercury": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia03101-mariner-10-mercury.png",
  "Saturn": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia18364-1041.jpg",
  "Sun": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/51271450910_2301dffc91_o.jpeg",
  "Earth": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/epic_1b_20211204075803.png",
  "Venus": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia00271.jpg",
  //Moons
  "Kerberos": "https://www.nasa.gov/sites/default/files/thumbnails/image/nh-kerberos_deconvolved_8x_subsampled_0.png",
  "S/2011 J 1": "",
  "S/2011 J 2": "",
  "Styx": "https://solarsystem.nasa.gov/system/content_pages/main_images/547_styx-moon.jpg",
  "Hippocamp": "https://www.nasa.gov/sites/default/files/p1330aw_0_0.jpg",
  "S/2015 (136472) 1": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Makemake_moon_Hubble_image_with_legend_%28cropped%29.jpg/600px-Makemake_moon_Hubble_image_with_legend_%28cropped%29.jpg",
  "S/2017 J 1": "",
  "S/2016 J 1": "",
  "Valetudo": "",
  "S/2017 J 2": "",
  "S/2017 J 3": "",
  "Pandia": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Pandia_CFHT_precovery_2003-02-28.png/800px-Pandia_CFHT_precovery_2003-02-28.png",
  "S/2017 J 5": "",
  "S/2017 J 6": "",
  "S/2017 J 7": "",
  "S/2017 J 8": "",
  "S/2017 J 9": "",
  "Ersa": "",
  "Arrokoth": "https://apod.nasa.gov/apod/image/1901/UltimaThule_NewHorizonsAppere_1000.jpg",
  "101955 Bennu": "https://solarsystem.nasa.gov/system/feature_items/images/603_bennu-mosaic.jpg",
  "s2004s22": "",
  "s2004s21": "",
  "s2004s20": "",
  "s2004s23": "",
  "s2004s24": "",
  "s2004s25": "",
  "s2004s26": "",
  "s2004s27": "",
  "s2004s28": "",
  "s2004s29": "",
  "s2004s30": "",
  "s2004s31": "",
  "s2004s32": "",
  "s2004s33": "",
  "s2004s34": "",
  "s2004s35": "",
  "s2004s36": "",
  "s2004s37": "",
  "s2004s38": "",
  "s2004s39": "",
  "c2020f3-neowise": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/50103972537_82d097c23d_o.jpg",
  "s2003j24": ""
}

$(function () {
  $.widget("custom.catcomplete", $.ui.autocomplete, {
    _create: function () {
      this._super();
      this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
    },
    _renderMenu: function (ul, items) {
      var that = this,
        currentCategory = "";
      $.each(items, function (index, item) {
        var li;
        if (item.category != currentCategory) {
          ul.append("<li class='ui-autocomplete-category'>" + item.category + "</li>");
          currentCategory = item.category;
        }
        li = that._renderItemData(ul, item);
        if (item.category) {
          li.attr("aria-label", item.category + " : " + item.label);
        }
      });
    }
  });
  var data = [
    {
      label: "Jupiter",
      category: "Planets"
    },
    {
      label: "Neptune",
      category: "Planets"
    },
    {
      label: "Mars",
      category: "Planets"
    },
    {
      label: "Mercury",
      category: "Planets"
    },
    {
      label: "Saturn",
      category: "Planets"
    },
    {
      label: "Earth",
      category: "Planets"
    },
    {
      label: "Venus",
      category: "Planets"
    },
    {
      label: "Uranus",
      category: "Planets"
    },
    {
      label: "Sun",
      category: "The Sun"
    },
    {
      label: "Moon",
      category: "Earth's Moon"
    },
    {
      label: "Phobos",
      category: "Mars' Moons"
    },
    {
      label: "Deimos",
      category: "Mars' Moons"
    },
    {
      label: "Io",
      category: "Jupiter's Moons"
    },
    {
      label: "Europa",
      category: "Jupiter's Moons"
    },
    {
      label: "Ganymede",
      category: "Jupiter's Moons"
    },
    {
      label: "Callisto",
      category: "Jupiter's Moons"
    },
    {
      label: "Amalthea",
      category: "Jupiter's Moons"
    },
    {
      label: "Himalia",
      category: "Jupiter's Moons"
    },
    {
      label: "Elara",
      category: "Jupiter's Moons"
    },
    {
      label: "Pasiphae",
      category: "Jupiter's Moons"
    },
    {
      label: "Sinope",
      category: "Jupiter's Moons"
    },
    {
      label: "Lysithea",
      category: "Jupiter's Moons"
    },
    {
      label: "Carme",
      category: "Jupiter's Moons"
    },
    {
      label: "Ananke",
      category: "Jupiter's Moons"
    },
    {
      label: "Leda",
      category: "Jupiter's Moons"
    },
    {
      label: "Thebe",
      category: "Jupiter's Moons"
    },
    {
      label: "Adrastea",
      category: "Jupiter's Moons"
    },
    {
      label: "Metis",
      category: "Jupiter's Moons"
    },
    {
      label: "Callirrhoe",
      category: "Jupiter's Moons"
    },
    {
      label: "Themisto",
      category: "Jupiter's Moons"
    },
    {
      label: "Megaclite",
      category: "Jupiter's Moons"
    },
    {
      label: "Taygete",
      category: "Jupiter's Moons"
    },
    {
      label: "Chaldene",
      category: "Jupiter's Moons"
    },
    {
      label: "Harpalyke",
      category: "Jupiter's Moons"
    },
    {
      label: "Kalyke",
      category: "Jupiter's Moons"
    },
    {
      label: "Iocaste",
      category: "Jupiter's Moons"
    },
    {
      label: "Erinome",
      category: "Jupiter's Moons"
    },
    {
      label: "Isonoe",
      category: "Jupiter's Moons"
    },
    {
      label: "Praxidike",
      category: "Jupiter's Moons"
    },
    {
      label: "Autonoe",
      category: "Jupiter's Moons"
    },
    {
      label: "Thyone",
      category: "Jupiter's Moons"
    },
    {
      label: "Hermippe",
      category: "Jupiter's Moons"
    },
    {
      label: "Aitne",
      category: "Jupiter's Moons"
    },
    {
      label: "Eurydome",
      category: "Jupiter's Moons"
    },
    {
      label: "Euanthe",
      category: "Jupiter's Moons"
    },
    {
      label: "Euporie",
      category: "Jupiter's Moons"
    },
    {
      label: "Orthosie",
      category: "Jupiter's Moons"
    },
    {
      label: "Sponde",
      category: "Jupiter's Moons"
    },
    {
      label: "Kale",
      category: "Jupiter's Moons"
    },
    {
      label: "Pasithee",
      category: "Jupiter's Moons"
    },
    {
      label: "Hegemone",
      category: "Jupiter's Moons"
    },
    {
      label: "Mneme",
      category: "Jupiter's Moons"
    },
    {
      label: "Aoede",
      category: "Jupiter's Moons"
    },
    {
      label: "Thelxinoe",
      category: "Jupiter's Moons"
    },
    {
      label: "Arche",
      category: "Jupiter's Moons"
    },
    {
      label: "Kallichore",
      category: "Jupiter's Moons"
    },
    {
      label: "Helike",
      category: "Jupiter's Moons"
    },
    {
      label: "Carpo",
      category: "Jupiter's Moons"
    },
    {
      label: "Eukelade",
      category: "Jupiter's Moons"
    },
    {
      label: "Cyllene",
      category: "Jupiter's Moons"
    },
    {
      label: "Kore",
      category: "Jupiter's Moons"
    },
    {
      label: "Herse",
      category: "Jupiter's Moons"
    },
    {
      label: "S/2003 J 2",
      category: "Jupiter's Moons"
    },
    {
      label: "Eupheme",
      category: "Jupiter's Moons"
    },
    {
      label: "S/2003 J 4",
      category: "Jupiter's Moons"
    },
    {
      label: "Eirene",
      category: "Jupiter's Moons"
    },
    {
      label: "S/2003 J 9",
      category: "Jupiter's Moons"
    },
    {
      label: "S/2003 J 10",
      category: "Jupiter's Moons"
    },
    {
      label: "S/2003 J 12",
      category: "Jupiter's Moons"
    },
    {
      label: "Philophrosyne",
      category: "Jupiter's Moons"
    },
    {
      label: "S/2003 J 16",
      category: "Jupiter's Moons"
    },
    {
      label: "S/2003 J 18",
      category: "Jupiter's Moons"
    },
    {
      label: "S/2003 J 19",
      category: "Jupiter's Moons"
    },
    {
      label: "S/2003 J 23",
      category: "Jupiter's Moons"
    },
    {
      label: "S/2010 J 1",
      category: "Jupiter's Moons"
    },
    {
      label: "S/2010 J 2",
      category: "Jupiter's Moons"
    },
    {
      label: "Dia",
      category: "Jupiter's Moons"
    },
    {
      label: "S/2017 J 1",
      category: "Jupiter's Moons"
    },
    {
      label: "S/2016 J 1",
      category: "Jupiter's Moons"
    },
    {
      label: "Valetudo",
      category: "Jupiter's Moons"
    },
    {
      label: "S/2017 J 2",
      category: "Jupiter's Moons"
    },
    {
      label: "S/2017 J 3",
      category: "Jupiter's Moons"
    },
    {
      label: "Pandia",
      category: "Jupiter's Moons"
    },
    {
      label: "S/2017 J 5",
      category: "Jupiter's Moons"
    },
    {
      label: "S/2017 J 6",
      category: "Jupiter's Moons"
    },
    {
      label: "S/2017 J 7",
      category: "Jupiter's Moons"
    },
    {
      label: "S/2017 J 8",
      category: "Jupiter's Moons"
    },
    {
      label: "S/2017 J 9",
      category: "Jupiter's Moons"
    },
    {
      label: "Ersa",
      category: "Jupiter's Moons"
    },
    {
      label: "S/2011 J 1",
      category: "Jupiter's Moons"
    },
    {
      label: "S/2011 J 2",
      category: "Jupiter's Moons"
    },
    {
      label: "Mimas",
      category: "Saturn's Moons"
    },
    {
      label: "Enceladus",
      category: "Saturn's Moons"
    },
    {
      label: "Tethys",
      category: "Saturn's Moons"
    },
    {
      label: "Dione",
      category: "Saturn's Moons"
    },
    {
      label: "Rhea",
      category: "Saturn's Moons"
    },
    {
      label: "Titan",
      category: "Saturn's Moons"
    },
    {
      label: "Hyperion",
      category: "Saturn's Moons"
    },
    {
      label: "Iapetus",
      category: "Saturn's Moons"
    },
    {
      label: "Phoebe",
      category: "Saturn's Moons"
    },
    {
      label: "Janus",
      category: "Saturn's Moons"
    },
    {
      label: "Epimetheus",
      category: "Saturn's Moons"
    },
    {
      label: "Helene",
      category: "Saturn's Moons"
    },
    {
      label: "Telesto",
      category: "Saturn's Moons"
    },
    {
      label: "Calypso",
      category: "Saturn's Moons"
    },
    {
      label: "Atlas",
      category: "Saturn's Moons"
    },
    {
      label: "Prometheus",
      category: "Saturn's Moons"
    },
    {
      label: "Pandora",
      category: "Saturn's Moons"
    },
    {
      label: "Pan",
      category: "Saturn's Moons"
    },
    {
      label: "Ymir",
      category: "Saturn's Moons"
    },
    {
      label: "Paaliaq",
      category: "Saturn's Moons"
    },
    {
      label: "Tarvos",
      category: "Saturn's Moons"
    },
    {
      label: "Ijiraq",
      category: "Saturn's Moons"
    },
    {
      label: "Suttungr",
      category: "Saturn's Moons"
    },
    {
      label: "Kiviuq",
      category: "Saturn's Moons"
    },
    {
      label: "Mundilfari",
      category: "Saturn's Moons"
    },
    {
      label: "Albiorix",
      category: "Saturn's Moons"
    },
    {
      label: "Skathi",
      category: "Saturn's Moons"
    },
    {
      label: "Erriapus",
      category: "Saturn's Moons"
    },
    {
      label: "Siarnaq",
      category: "Saturn's Moons"
    },
    {
      label: "Thrymr",
      category: "Saturn's Moons"
    },
    {
      label: "Narvi",
      category: "Saturn's Moons"
    },
    {
      label: "Methone",
      category: "Saturn's Moons"
    },
    {
      label: "Pallene",
      category: "Saturn's Moons"
    },
    {
      label: "Polydeuces",
      category: "Saturn's Moons"
    },
    {
      label: "Daphnis",
      category: "Saturn's Moons"
    },
    {
      label: "Aegir",
      category: "Saturn's Moons"
    },
    {
      label: "Bebhionn",
      category: "Saturn's Moons"
    },
    {
      label: "Bergelmir",
      category: "Saturn's Moons"
    },
    {
      label: "Bestla",
      category: "Saturn's Moons"
    },
    {
      label: "Farbauti",
      category: "Saturn's Moons"
    },
    {
      label: "Fenrir",
      category: "Saturn's Moons"
    },
    {
      label: "Fornjot",
      category: "Saturn's Moons"
    },
    {
      label: "Hati",
      category: "Saturn's Moons"
    },
    {
      label: "Hyrrokkin",
      category: "Saturn's Moons"
    },
    {
      label: "Kari",
      category: "Saturn's Moons"
    },
    {
      label: "Loge",
      category: "Saturn's Moons"
    },
    {
      label: "Skoll",
      category: "Saturn's Moons"
    },
    {
      label: "Surtur",
      category: "Saturn's Moons"
    },
    {
      label: "Anthe",
      category: "Saturn's Moons"
    },
    {
      label: "Jarnsaxa",
      category: "Saturn's Moons"
    },
    {
      label: "Greip",
      category: "Saturn's Moons"
    },
    {
      label: "Tarqeq",
      category: "Saturn's Moons"
    },
    {
      label: "Aegaeon",
      category: "Saturn's Moons"
    },
    {
      label: "S/2004 S 3",
      category: "Saturn's Moons"
    },
    {
      label: "S/2004 S 4",
      category: "Saturn's Moons"
    },
    {
      label: "S/2004 S 6",
      category: "Saturn's Moons"
    },
    {
      label: "S/2004 S 7",
      category: "Saturn's Moons"
    },
    {
      label: "S/2004 S 12",
      category: "Saturn's Moons"
    },
    {
      label: "S/2004 S 13",
      category: "Saturn's Moons"
    },
    {
      label: "S/2004 S 17",
      category: "Saturn's Moons"
    },
    {
      label: "S/2006 S 1",
      category: "Saturn's Moons"
    },
    {
      label: "S/2006 S 3",
      category: "Saturn's Moons"
    },
    {
      label: "S/2007 S 2",
      category: "Saturn's Moons"
    },
    {
      label: "S/2007 S 3",
      category: "Saturn's Moons"
    },
    {
      label: "S/2009 S 1",
      category: "Saturn's Moons"
    },
    {
      label: "s2004s22",
      category: "Saturn's Moons"
    },
    {
      label: "s2004s21",
      category: "Saturn's Moons"
    },
    {
      label: "s2004s20",
      category: "Saturn's Moons"
    },
    {
      label: "s2004s23",
      category: "Saturn's Moons"
    },
    {
      label: "s2004s24",
      category: "Saturn's Moons"
    },
    {
      label: "s2004s25",
      category: "Saturn's Moons"
    },
    {
      label: "s2004s26",
      category: "Saturn's Moons"
    },
    {
      label: "s2004s27",
      category: "Saturn's Moons"
    },
    {
      label: "s2004s28",
      category: "Saturn's Moons"
    },
    {
      label: "s2004s29",
      category: "Saturn's Moons"
    },
    {
      label: "s2004s30",
      category: "Saturn's Moons"
    },
    {
      label: "s2004s31",
      category: "Saturn's Moons"
    },
    {
      label: "s2004s32",
      category: "Saturn's Moons"
    },
    {
      label: "s2004s33",
      category: "Saturn's Moons"
    },
    {
      label: "s2004s34",
      category: "Saturn's Moons"
    },
    {
      label: "s2004s35",
      category: "Saturn's Moons"
    },
    {
      label: "s2004s36",
      category: "Saturn's Moons"
    },
    {
      label: "s2004s37",
      category: "Saturn's Moons"
    },
    {
      label: "s2004s38",
      category: "Saturn's Moons"
    },
    {
      label: "s2004s39",
      category: "Saturn's Moons"
    },
    {
      label: "Ariel",
      category: "Uranus' Moons"
    },
    {
      label: "Umbriel",
      category: "Uranus' Moons"
    },
    {
      label: "Titania",
      category: "Uranus' Moons"
    },
    {
      label: "Oberon",
      category: "Uranus' Moons"
    },
    {
      label: "Miranda",
      category: "Uranus' Moons"
    },
    {
      label: "Cordelia",
      category: "Uranus' Moons"
    },
    {
      label: "Ophelia",
      category: "Uranus' Moons"
    },
    {
      label: "Bianca",
      category: "Uranus' Moons"
    },
    {
      label: "Cressida",
      category: "Uranus' Moons"
    },
    {
      label: "Desdemona",
      category: "Uranus' Moons"
    },
    {
      label: "Juliet",
      category: "Uranus' Moons"
    },
    {
      label: "Portia",
      category: "Uranus' Moons"
    },
    {
      label: "Rosalind",
      category: "Uranus' Moons"
    },
    {
      label: "Belinda",
      category: "Uranus' Moons"
    },
    {
      label: "Puck",
      category: "Uranus' Moons"
    },
    {
      label: "Caliban",
      category: "Uranus' Moons"
    },
    {
      label: "Sycorax",
      category: "Uranus' Moons"
    },
    {
      label: "Prospero",
      category: "Uranus' Moons"
    },
    {
      label: "Setebos",
      category: "Uranus' Moons"
    },
    {
      label: "Stephano",
      category: "Uranus' Moons"
    },
    {
      label: "Trinculo",
      category: "Uranus' Moons"
    },
    {
      label: "Francisco",
      category: "Uranus' Moons"
    },
    {
      label: "Margaret",
      category: "Uranus' Moons"
    },
    {
      label: "Ferdinand",
      category: "Uranus' Moons"
    },
    {
      label: "Perdita",
      category: "Uranus' Moons"
    },
    {
      label: "Mab",
      category: "Uranus' Moons"
    },
    {
      label: "Cupid",
      category: "Uranus' Moons"
    },
    {
      label: "Triton",
      category: "Neptune's Moons"
    },
    {
      label: "Nereid",
      category: "Neptune's Moons"
    },
    {
      label: "Naiad",
      category: "Neptune's Moons"
    },
    {
      label: "Thalassa",
      category: "Neptune's Moons"
    },
    {
      label: "Despina",
      category: "Neptune's Moons"
    },
    {
      label: "Galatea",
      category: "Neptune's Moons"
    },
    {
      label: "Larissa",
      category: "Neptune's Moons"
    },
    {
      label: "Proteus",
      category: "Neptune's Moons"
    },
    {
      label: "Halimede",
      category: "Neptune's Moons"
    },
    {
      label: "Psamathe",
      category: "Neptune's Moons"
    },
    {
      label: "Sao",
      category: "Neptune's Moons"
    },
    {
      label: "Laomedeia",
      category: "Neptune's Moons"
    },
    {
      label: "Neso",
      category: "Neptune's Moons"
    },
    {
      label: "Hippocamp",
      category: "Neptune's Moons"
    },
    {
      label: "Charon",
      category: "Pluto's Moons"
    },
    {
      label: "Nix",
      category: "Pluto's Moons"
    },
    {
      label: "Hydra",
      category: "Pluto's Moons"
    },
    {
      label: "136472 Makemake",
      category: "Pluto's Moons"
    },
    {
      label: "Styx",
      category: "Pluto's Moons"
    },
    {
      label: "Namaka",
      category: "Haumea's Moons"
    },
    {
      label: "Hiʻiaka",
      category: "Haumea's Moons"
    },
    {
      label: "Dysnomia",
      category: "Eris's Moons"
    },
    {
      label: "1 Ceres",
      category: "Asteroids"
    },
    {
      label: "6 Hebe",
      category: "Asteroids"
    },
    {
      label: "47171 Lempo",
      category: "Asteroids"
    },
    {
      label: "The Little Prince",
      category: "Asteroids"
    },
    {
      label: "762 Pulcova",
      category: "Asteroids"
    },
    {
      label: "4179 Toutatis",
      category: "Asteroids"
    },
    {
      label: "50000 Quaoar",
      category: "Asteroids"
    },
    {
      label: "2876 Steins",
      category: "Asteroids"
    },
    {
      label: "5 Astraea",
      category: "Asteroids"
    },
    {
      label: "5145 Pholus",
      category: "Asteroids"
    },
    {
      label: "4769 Castalia",
      category: "Asteroids"
    },
    {
      label: "624 Hektor",
      category: "Asteroids"
    },
    {
      label: "216 Kleopatra",
      category: "Asteroids"
    },
    {
      label: "3753 Cruithne",
      category: "Asteroids"
    },
    {
      label: "3 Junon",
      category: "Asteroids"
    },
    {
      label: "10 Hygiea",
      category: "Asteroids"
    },
    {
      label: "21 Lutetia",
      category: "Asteroids"
    },
    {
      label: "253 Mathilde",
      category: "Asteroids"
    },
    {
      label: "7 Iris",
      category: "Asteroids"
    },
    {
      label: "433 Eros",
      category: "Asteroids"
    },
    {
      label: "Vanth",
      category: "Asteroids"
    },
    {
      label: "90377 Sedna",
      category: "Asteroids"
    },
    {
      label: "10199 Chariklo",
      category: "Asteroids"
    },
    {
      label: "87 Sylvia",
      category: "Asteroids"
    },
    {
      label: "(243) Ida I Dactyl",
      category: "Asteroids"
    },
    {
      label: "90482 Orcus",
      category: "Asteroids"
    },
    {
      label: "5335 Damocles",
      category: "Asteroids"
    },
    {
      label: "8 Flora",
      category: "Asteroids"
    },
    {
      label: "2060 Chiron",
      category: "Asteroids"
    },
    {
      label: "5261 Eureka",
      category: "Asteroids"
    },
    {
      label: "588 Achilles",
      category: "Asteroids"
    },
    {
      label: "9 Metis",
      category: "Asteroids"
    },
    {
      label: "7066 Nessus",
      category: "Asteroids"
    },
    {
      label: "25143 Itokawa",
      category: "Asteroids"
    },
    {
      label: "10370 Hylonome",
      category: "Asteroids"
    },
    {
      label: "45 Eugenia",
      category: "Asteroids"
    },
    {
      label: "(308933) 2006 SQ372",
      category: "Asteroids"
    },
    {
      label: "2 Pallas",
      category: "Asteroids"
    },
    {
      label: "8405 Asbolus",
      category: "Asteroids"
    },
    {
      label: "20000 Varuna",
      category: "Asteroids"
    },
    {
      label: "4 Vesta",
      category: "Asteroids"
    },
    {
      label: "243 Ida",
      category: "Asteroids"
    },
    {
      label: "Arrokoth",
      category: "Asteroids"
    },
    {
      label: "101955 Bennu",
      category: "Asteroids"
    },
    {
      label: "Pluto",
      category: "Dwarf Planets"
    },
    {
      label: "136199 Eris",
      category: "Dwarf Planets"
    },
    {
      label: "136108 Haumea",
      category: "Dwarf Planets"
    },
    {
      label: "Romulus",
      category: "Sylvia's Moons"
    },
    {
      label: "Remus",
      category: "Sylvia's Moons"
    },
    {
      label: "Alexhelios",
      category: "Kleopatra's Moons"
    },
    {
      label: "Cleoselene",
      category: "Kleopatra's Moons"
    },
    {
      label: "Weywot",
      category: "Quaror's Moons"
    },
    {
      label: "28978 Ixion",
      category: "Quaror's Moons"
    },
    {
      label: "Shoemaker-Levy 9",
      category: "Comets"
    },
    {
      label: "Comet Hyakutake",
      category: "Comets"
    },
    {
      label: "951 Gaspra",
      category: "Comets"
    },
    {
      label: "15760 Albion",
      category: "Comets"
    },
    {
      label: "136472 Makemake",
      category: "Comets"
    },
    {
      label: "Halley's Comet",
      category: "Comets"
    },
    {
      label: "c2020f3-neowise",
      category: "Comets"
    },
    {
      label: "s2003j24",
      category: "Jupiter's Moons"
    },
    {
      label: "S/2015 (136472) 1",
      category: "MakeMake's Moon"
    },
  ];

  $("#planet-input").catcomplete({
    delay: 0,
    source: data
  });
});

$( function() {
  $( "#accordion" ).accordion({heightStyle: "content", collapsible: true});
});