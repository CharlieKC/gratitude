const images = {
  flags: [
    {id: '0', country: 'american_samoa', img: require('./flags/027-american-samoa.png')},
    {id: '1', country: 'british_virgin_islands', img: require('./flags/114-british-virgin-islands.png')},
    {id: '2', country: 'switzerland', img: require('./flags/205-switzerland.png')},
    {id: '3', country: 'laos', img: require('./flags/112-laos.png')},
    {id: '4', country: 'brunei', img: require('./flags/119-brunei.png')},
    {id: '5', country: 'east_timor', img: require('./flags/140-east-timor.png')},
    {id: '6', country: 'madeira', img: require('./flags/148-madeira.png')},
    {id: '7', country: 'bonaire', img: require('./flags/072-bonaire.png')},
    {id: '8', country: 'guam', img: require('./flags/207-guam.png')},
    {id: '9', country: 'nato', img: require('./flags/254-nato.png')},
    {id: '10', country: 'romania', img: require('./flags/109-romania.png')},
    {id: '11', country: 'st_lucia', img: require('./flags/172-st-lucia.png')},
    {id: '12', country: 'china', img: require('./flags/034-china.png')},
    {id: '13', country: 'ecuador', img: require('./flags/104-ecuador.png')},
    {id: '14', country: 'bulgaria', img: require('./flags/168-bulgaria.png')},
    {id: '15', country: 'corsica', img: require('./flags/031-corsica.png')},
    {id: '16', country: 'bolivia', img: require('./flags/150-bolivia.png')},
    {id: '17', country: 'northern_marianas_islands', img: require('./flags/160-northern-marianas-islands.png')},
    {id: '18', country: 'republic_of_the_congo', img: require('./flags/157-republic-of-the-congo.png')},
    {id: '19', country: 'christmas_island', img: require('./flags/017-christmas-island.png')},
    {id: '20', country: 'ireland', img: require('./flags/179-ireland.png')},
    {id: '21', country: 'maldives', img: require('./flags/225-maldives.png')},
    {id: '22', country: 'montserrat', img: require('./flags/043-montserrat.png')},
    {id: '23', country: 'uzbekistn', img: require('./flags/190-uzbekistn.png')},
    {id: '24', country: 'ukraine', img: require('./flags/145-ukraine.png')},
    {id: '25', country: 'united_kingdom', img: require('./flags/260-united-kingdom.png')},
    {id: '26', country: 'transnistria', img: require('./flags/233-transnistria.png')},
    {id: '27', country: 'portugal', img: require('./flags/224-portugal.png')},
    {id: '28', country: 'south_sudan', img: require('./flags/244-south-sudan.png')},
    {id: '29', country: 'angola', img: require('./flags/117-angola.png')},
    {id: '30', country: 'bahrain', img: require('./flags/138-bahrain.png')},
    {id: '31', country: 'poland', img: require('./flags/211-poland.png')},
    {id: '32', country: 'iraq', img: require('./flags/020-iraq.png')},
    {id: '33', country: 'togo', img: require('./flags/073-togo.png')},
    {id: '34', country: 'gambia', img: require('./flags/146-gambia.png')},
    {id: '35', country: 'serbia', img: require('./flags/071-serbia.png')},
    {id: '36', country: 'liechtenstein', img: require('./flags/134-liechtenstein.png')},
    {id: '37', country: 'dominican_republic', img: require('./flags/047-dominican-republic.png')},
    {id: '38', country: 'malta', img: require('./flags/194-malta.png')},
    {id: '39', country: 'puerto_rico', img: require('./flags/028-puerto-rico.png')},
    {id: '40', country: 'turks_and_caicos', img: require('./flags/223-turks-and-caicos.png')},
    {id: '41', country: 'azores_islands', img: require('./flags/240-azores-islands.png')},
    {id: '42', country: 'jamaica', img: require('./flags/037-jamaica.png')},
    {id: '43', country: 'cape_verde', img: require('./flags/038-cape-verde.png')},
    {id: '44', country: 'lebanon', img: require('./flags/018-lebanon.png')},
    {id: '45', country: 'bosnia_and_herzegovina', img: require('./flags/132-bosnia-and-herzegovina.png')},
    {id: '46', country: 'tonga', img: require('./flags/191-tonga.png')},
    {id: '47', country: 'indonesia', img: require('./flags/209-indonesia.png')},
    {id: '48', country: 'kiribati', img: require('./flags/261-kiribati.png')},
    {id: '49', country: 'st_vincent_and_the_grenadines', img: require('./flags/241-st-vincent-and-the-grenadines.png')},
    {id: '50', country: 'virgin_islands', img: require('./flags/217-virgin-islands.png')},
    {id: '51', country: 'guernsey', img: require('./flags/204-guernsey.png')},
    {id: '52', country: 'taiwan', img: require('./flags/202-taiwan.png')},
    {id: '53', country: 'faroe_islands', img: require('./flags/122-faroe-islands.png')},
    {id: '54', country: 'mongolia', img: require('./flags/258-mongolia.png')},
    {id: '55', country: 'barbados', img: require('./flags/084-barbados.png')},
    {id: '56', country: 'anguilla', img: require('./flags/025-anguilla.png')},
    {id: '57', country: 'ceuta', img: require('./flags/019-ceuta.png')},
    {id: '58', country: 'jersey', img: require('./flags/245-jersey.png')},
    {id: '59', country: 'rapa_nui', img: require('./flags/175-rapa-nui.png')},
    {id: '60', country: 'burundi', img: require('./flags/057-burundi.png')},
    {id: '61', country: 'venezuela', img: require('./flags/139-venezuela.png')},
    {id: '62', country: 'falkland_islands', img: require('./flags/215-falkland-islands.png')},
    {id: '63', country: 'somalia', img: require('./flags/083-somalia.png')},
    {id: '64', country: 'burkina_faso', img: require('./flags/090-burkina-faso.png')},
    {id: '65', country: 'israel', img: require('./flags/155-israel.png')},
    {id: '66', country: 'suriname', img: require('./flags/076-suriname.png')},
    {id: '67', country: 'sahrawi_arab_democratic_republic', img: require('./flags/203-sahrawi-arab-democratic-republic.png')},
    {id: '68', country: 'peru', img: require('./flags/188-peru.png')},
    {id: '69', country: 'libya', img: require('./flags/231-libya.png')},
    {id: '70', country: 'pakistan', img: require('./flags/100-pakistan.png')},
    {id: '71', country: 'greece', img: require('./flags/170-greece.png')},
    {id: '72', country: 'bermuda', img: require('./flags/081-bermuda.png')},
    {id: '73', country: 'panama', img: require('./flags/106-panama.png')},
    {id: '74', country: 'equatorial_guinea', img: require('./flags/189-equatorial-guinea.png')},
    {id: '75', country: 'albania', img: require('./flags/099-albania.png')},
    {id: '76', country: 'iran', img: require('./flags/136-iran.png')},
    {id: '77', country: 'latvia', img: require('./flags/044-latvia.png')},
    {id: '78', country: 'solomon_islands', img: require('./flags/085-solomon-islands.png')},
    {id: '79', country: 'morocco', img: require('./flags/166-morocco.png')},
    {id: '80', country: 'north_korea', img: require('./flags/030-north-korea.png')},
    {id: '81', country: 'guinea_bissau', img: require('./flags/056-guinea-bissau.png')},
    {id: '82', country: 'cocos_island', img: require('./flags/023-cocos-island.png')},
    {id: '83', country: 'mauritius', img: require('./flags/001-mauritius.png')},
    {id: '84', country: 'brazil', img: require('./flags/255-brazil.png')},
    {id: '85', country: 'paraguay', img: require('./flags/041-paraguay.png')},
    {id: '86', country: 'greenland', img: require('./flags/113-greenland.png')},
    {id: '87', country: 'monaco', img: require('./flags/039-monaco.png')},
    {id: '88', country: 'france', img: require('./flags/195-france.png')},
    {id: '89', country: 'singapore', img: require('./flags/230-singapore.png')},
    {id: '90', country: 'french_polynesia', img: require('./flags/180-french-polynesia.png')},
    {id: '91', country: 'trinidad_and_tobago', img: require('./flags/181-trinidad-and-tobago.png')},
    {id: '92', country: 'slovakia', img: require('./flags/091-slovakia.png')},
    {id: '93', country: 'cameroon', img: require('./flags/105-cameroon.png')},
    {id: '94', country: 'armenia', img: require('./flags/108-armenia.png')},
    {id: '95', country: 'guinea', img: require('./flags/110-guinea.png')},
    {id: '96', country: 'norway', img: require('./flags/143-norway.png')},
    {id: '97', country: 'costa_rica', img: require('./flags/156-costa-rica.png')},
    {id: '98', country: 'vanuatu', img: require('./flags/187-vanuatu.png')},
    {id: '99', country: 'moldova', img: require('./flags/212-moldova.png')},
    {id: '100', country: 'kyrgyzstan', img: require('./flags/152-kyrgyzstan.png')},
    {id: '101', country: 'philippines', img: require('./flags/192-philippines.png')},
    {id: '102', country: 'turkmenistan', img: require('./flags/229-turkmenistan.png')},
    {id: '103', country: 'cayman_islands', img: require('./flags/051-cayman-islands.png')},
    {id: '104', country: 'sudan', img: require('./flags/199-sudan.png')},
    {id: '105', country: 'san_marino', img: require('./flags/097-san-marino.png')},
    {id: '106', country: 'yemen', img: require('./flags/232-yemen.png')},
    {id: '107', country: 'aruba', img: require('./flags/042-aruba.png')},
    {id: '108', country: 'iceland', img: require('./flags/080-iceland.png')},
    {id: '109', country: 'united_nations', img: require('./flags/082-united-nations.png')},
    {id: '110', country: 'madagascar', img: require('./flags/242-madagascar.png')},
    {id: '111', country: 'abkhazia', img: require('./flags/048-abkhazia.png')},
    {id: '112', country: 'el_salvador', img: require('./flags/015-el-salvador.png')},
    {id: '113', country: 'saudi_arabia', img: require('./flags/133-saudi-arabia.png')},
    {id: '114', country: 'cambodia', img: require('./flags/159-cambodia.png')},
    {id: '115', country: 'haiti', img: require('./flags/185-haiti.png')},
    {id: '116', country: 'malasya', img: require('./flags/118-malasya.png')},
    {id: '117', country: 'palestine', img: require('./flags/208-palestine.png')},
    {id: '118', country: 'germany', img: require('./flags/162-germany.png')},
    {id: '119', country: 'republic_of_macedonia', img: require('./flags/236-republic-of-macedonia.png')},
    {id: '120', country: 'united_arab_emirates', img: require('./flags/151-united-arab-emirates.png')},
    {id: '121', country: 'algeria', img: require('./flags/144-algeria.png')},
    {id: '122', country: 'grenada', img: require('./flags/210-grenada.png')},
    {id: '123', country: 'marshall_island', img: require('./flags/103-marshall-island.png')},
    {id: '124', country: 'st_barts', img: require('./flags/079-st-barts.png')},
    {id: '125', country: 'comoros', img: require('./flags/029-comoros.png')},
    {id: '126', country: 'thailand', img: require('./flags/238-thailand.png')},
    {id: '127', country: 'russia', img: require('./flags/248-russia.png')},
    {id: '128', country: 'estonia', img: require('./flags/008-estonia.png')},
    {id: '129', country: 'kosovo', img: require('./flags/052-kosovo.png')},
    {id: '130', country: 'pitcairn_islands', img: require('./flags/095-pitcairn-islands.png')},
    {id: '131', country: 'nepal', img: require('./flags/016-nepal.png')},
    {id: '132', country: 'fiji', img: require('./flags/137-fiji.png')},
    {id: '133', country: 'sweden', img: require('./flags/184-sweden.png')},
    {id: '134', country: 'martinique', img: require('./flags/201-martinique.png')},
    {id: '135', country: 'tajikistan', img: require('./flags/196-tajikistan.png')},
    {id: '136', country: 'northern_cyprus', img: require('./flags/101-northern-cyprus.png')},
    {id: '137', country: 'democratic_republic_of_congo', img: require('./flags/249-democratic-republic-of-congo.png')},
    {id: '138', country: 'sardinia', img: require('./flags/257-sardinia.png')},
    {id: '139', country: 'central_african_republic', img: require('./flags/036-central-african-republic.png')},
    {id: '140', country: 'tokelau', img: require('./flags/235-tokelau.png')},
    {id: '141', country: 'cuba', img: require('./flags/153-cuba.png')},
    {id: '142', country: 'djibouti', img: require('./flags/068-djibouti.png')},
    {id: '143', country: 'niue', img: require('./flags/182-niue.png')},
    {id: '144', country: 'mozambique', img: require('./flags/096-mozambique.png')},
    {id: '145', country: 'nicaragua', img: require('./flags/007-nicaragua.png')},
    {id: '146', country: 'micronesia', img: require('./flags/046-micronesia.png')},
    {id: '147', country: 'senegal', img: require('./flags/227-senegal.png')},
    {id: '148', country: 'palau', img: require('./flags/178-palau.png')},
    {id: '149', country: 'guatemala', img: require('./flags/098-guatemala.png')},
    {id: '150', country: 'curacao', img: require('./flags/116-curacao.png')},
    {id: '151', country: 'saint_kitts_and_nevis', img: require('./flags/033-saint-kitts-and-nevis.png')},
    {id: '152', country: 'ghana', img: require('./flags/053-ghana.png')},
    {id: '153', country: 'lesotho', img: require('./flags/176-lesotho.png')},
    {id: '154', country: 'netherlands', img: require('./flags/237-netherlands.png')},
    {id: '155', country: 'somaliland', img: require('./flags/247-somaliland.png')},
    {id: '156', country: 'belgium', img: require('./flags/165-belgium.png')},
    {id: '157', country: 'czech_republic', img: require('./flags/149-czech-republic.png')},
    {id: '158', country: 'andorra', img: require('./flags/045-andorra.png')},
    {id: '159', country: 'croatia', img: require('./flags/164-croatia.png')},
    {id: '160', country: 'japan', img: require('./flags/063-japan.png')},
    {id: '161', country: 'british_columbia', img: require('./flags/123-british-columbia.png')},
    {id: '162', country: 'gabon', img: require('./flags/059-gabon.png')},
    {id: '163', country: 'saba_island', img: require('./flags/061-saba-island.png')},
    {id: '164', country: 'gibraltar', img: require('./flags/213-gibraltar.png')},
    {id: '165', country: 'tuvalu_1', img: require('./flags/070-tuvalu-1.png')},
    {id: '166', country: 'niger', img: require('./flags/222-niger.png')},
    {id: '167', country: 'wales', img: require('./flags/014-wales.png')},
    {id: '168', country: 'chile', img: require('./flags/131-chile.png')},
    {id: '169', country: 'mali', img: require('./flags/173-mali.png')},
    {id: '170', country: 'sint_maarten', img: require('./flags/089-sint-maarten.png')},
    {id: '171', country: 'denmark', img: require('./flags/174-denmark.png')},
    {id: '172', country: 'south_africa', img: require('./flags/200-south-africa.png')},
    {id: '173', country: 'mexico', img: require('./flags/252-mexico.png')},
    {id: '174', country: 'jordan', img: require('./flags/077-jordan.png')},
    {id: '175', country: 'georgia', img: require('./flags/256-georgia.png')},
    {id: '176', country: 'vatican_city', img: require('./flags/124-vatican-city.png')},
    {id: '177', country: 'nigeria', img: require('./flags/086-nigeria.png')},
    {id: '178', country: 'melilla', img: require('./flags/197-melilla.png')},
    {id: '179', country: 'bahamas', img: require('./flags/120-bahamas.png')},
    {id: '180', country: 'eritrea', img: require('./flags/065-eritrea.png')},
    {id: '181', country: 'botswana', img: require('./flags/126-botswana.png')},
    {id: '182', country: 'canary_islands', img: require('./flags/054-canary-islands.png')},
    {id: '183', country: 'egypt', img: require('./flags/158-egypt.png')},
    {id: '184', country: 'aland_islands', img: require('./flags/087-aland-islands.png')},
    {id: '185', country: 'argentina', img: require('./flags/198-argentina.png')},
    {id: '186', country: 'bhutan', img: require('./flags/040-bhutan.png')},
    {id: '187', country: 'papua_new_guinea', img: require('./flags/163-papua-new-guinea.png')},
    {id: '188', country: 'antigua_and_barbuda', img: require('./flags/075-antigua-and-barbuda.png')},
    {id: '189', country: 'ossetia', img: require('./flags/129-ossetia.png')},
    {id: '190', country: 'belarus', img: require('./flags/135-belarus.png')},
    {id: '191', country: 'tanzania', img: require('./flags/006-tanzania.png')},
    {id: '192', country: 'liberia', img: require('./flags/169-liberia.png')},
    {id: '193', country: 'austria', img: require('./flags/003-austria.png')},
    {id: '194', country: 'ethiopia', img: require('./flags/005-ethiopia.png')},
    {id: '195', country: 'sao_tome_and_prince', img: require('./flags/012-sao-tome-and-prince.png')},
    {id: '196', country: 'afghanistan', img: require('./flags/111-afghanistan.png')},
    {id: '197', country: 'uruguay', img: require('./flags/088-uruguay.png')},
    {id: '198', country: 'nauru', img: require('./flags/228-nauru.png')},
    {id: '199', country: 'benin', img: require('./flags/060-benin.png')},
    {id: '200', country: 'kwait', img: require('./flags/107-kwait.png')},
    {id: '201', country: 'hawaii', img: require('./flags/262-hawaii.png')},
    {id: '202', country: 'british_indian_ocean_territory', img: require('./flags/069-british-indian-ocean-territory.png')},
    {id: '203', country: 'canada', img: require('./flags/243-canada.png')},
    {id: '204', country: 'sint_eustatius', img: require('./flags/250-sint-eustatius.png')},
    {id: '205', country: 'isle_of_man', img: require('./flags/219-isle-of-man.png')},
    {id: '206', country: 'oman', img: require('./flags/004-oman.png')},
    {id: '207', country: 'new_zealand', img: require('./flags/121-new-zealand.png')},
    {id: '208', country: 'rwanda', img: require('./flags/206-rwanda.png')},
    {id: '209', country: 'balearic_islands', img: require('./flags/102-balearic-islands.png')},
    {id: '210', country: 'vietnam', img: require('./flags/220-vietnam.png')},
    {id: '211', country: 'honduras', img: require('./flags/024-honduras.png')},
    {id: '212', country: 'finland', img: require('./flags/125-finland.png')},
    {id: '213', country: 'bangladesh', img: require('./flags/147-bangladesh.png')},
    {id: '214', country: 'norfolk_island', img: require('./flags/193-norfolk-island.png')},
    {id: '215', country: 'seychelles', img: require('./flags/253-seychelles.png')},
    {id: '216', country: 'lithuania', img: require('./flags/064-lithuania.png')},
    {id: '217', country: 'turkey', img: require('./flags/218-turkey.png')},
    {id: '218', country: 'south_korea', img: require('./flags/094-south-korea.png')},
    {id: '219', country: 'kenya', img: require('./flags/067-kenya.png')},
    {id: '220', country: 'samoa', img: require('./flags/251-samoa.png')},
    {id: '221', country: 'basque_country', img: require('./flags/093-basque-country.png')},
    {id: '222', country: 'slovenia', img: require('./flags/010-slovenia.png')},
    {id: '223', country: 'england', img: require('./flags/216-england.png')},
    {id: '224', country: 'spain', img: require('./flags/128-spain.png')},
    {id: '225', country: 'sicily', img: require('./flags/130-sicily.png')},
    {id: '226', country: 'luxembourg', img: require('./flags/035-luxembourg.png')},
    {id: '227', country: 'european_union', img: require('./flags/259-european-union.png')},
    {id: '228', country: 'azerbaijan', img: require('./flags/141-azerbaijan.png')},
    {id: '229', country: 'sierra_leone', img: require('./flags/092-sierra-leone.png')},
    {id: '230', country: 'tunisia', img: require('./flags/049-tunisia.png')},
    {id: '231', country: 'namibia', img: require('./flags/062-namibia.png')},
    {id: '232', country: 'scotland', img: require('./flags/055-scotland.png')},
    {id: '233', country: 'ivory_coast', img: require('./flags/161-ivory-coast.png')},
    {id: '234', country: 'hungary', img: require('./flags/115-hungary.png')},
    {id: '235', country: 'swaziland', img: require('./flags/154-swaziland.png')},
    {id: '236', country: 'tibet', img: require('./flags/142-tibet.png')},
    {id: '237', country: 'tuvalu', img: require('./flags/221-tuvalu.png')},
    {id: '238', country: 'galapagos_islands', img: require('./flags/171-galapagos-islands.png')},
    {id: '239', country: 'australia', img: require('./flags/234-australia.png')},
    {id: '240', country: 'cook_islands', img: require('./flags/021-cook-islands.png')},
    {id: '241', country: 'cyprus', img: require('./flags/002-cyprus.png')},
    {id: '242', country: 'belize', img: require('./flags/078-belize.png')},
    {id: '243', country: 'mauritania', img: require('./flags/050-mauritania.png')},
    {id: '244', country: 'myanmar', img: require('./flags/058-myanmar.png')},
    {id: '245', country: 'hong_kong', img: require('./flags/183-hong-kong.png')},
    {id: '246', country: 'syria', img: require('./flags/022-syria.png')},
    {id: '247', country: 'zimbabwe', img: require('./flags/011-zimbabwe.png')},
    {id: '248', country: 'zambia', img: require('./flags/032-zambia.png')},
    {id: '249', country: 'sri_lanka', img: require('./flags/127-sri-lanka.png')},
    {id: '250', country: 'italy', img: require('./flags/013-italy.png')},
    {id: '251', country: 'dominica', img: require('./flags/186-dominica.png')},
    {id: '252', country: 'chad', img: require('./flags/066-chad.png')},
    {id: '253', country: 'macao', img: require('./flags/167-macao.png')},
    {id: '254', country: 'uganda', img: require('./flags/009-uganda.png')},
    {id: '255', country: 'india', img: require('./flags/246-india.png')},
    {id: '256', country: 'colombia', img: require('./flags/177-colombia.png')},
    {id: '257', country: 'montenegro', img: require('./flags/239-montenegro.png')},
    {id: '258', country: 'malawi', img: require('./flags/214-malawi.png')},
    {id: '259', country: 'kazakhstan', img: require('./flags/074-kazakhstan.png')},
  ]
} 

export default images 