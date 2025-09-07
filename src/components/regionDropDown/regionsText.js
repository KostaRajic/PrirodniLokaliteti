const regionsText = [

    {
        title: 'VOJVODINA',
        submenu: [
            {
                title: 'Južno-Bački',
                titleENG: 'South Bačka',
                submenu: [
                    {
                        title: 'Novi Sad',
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/juzno-backi/novi-sad"
                    },
                    {
                        title: 'Fruska Gora',
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/juzno-backi/fruska-gora"
                    },
                    {
                        title: 'Manastir Beočin',
                        titleENG: 'Beocin Monastery',
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/juzno-backi/manastir-beocin"
                    },
                    {
                        title: 'Manastir Krušedol',
                        titleENG: 'Krušedol Monastery',
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/juzno-backi/manastir-krusedol"
                    },
                    {
                        title: 'Šajkaška Oblast',
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/juzno-backi/sajkaska-oblast"
                    },
                    {
                        title: 'Sremski Karlovci',
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/juzno-backi/sremski-karlovci"
                    },
                ]
            },
            {
                title: 'Južno-Banatski',
                titleENG: 'South Banat',
                submenu: [
                    {
                        title: 'Pančevo',
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/juzno-banatski/pancevo"
                    },
                    {
                        title: "Vračevgajsko Jezero",
                        titleENG: `Vračevgajsko Lake`,
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/juzno-banatski/vracevgajsko-jezero"
                    },
                    {
                        title: "Deliblatska Peščara i Zagajička Brda",
                        titleENG: `Zagajička Hills and Deliblato Sands`,
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/juzno-banatski/delibaltska-pescara-i-zagajicka-brda"
                    },
                    {
                        title: "Vršac",
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/juzno-banatski/vrsac"
                    },
                    {
                        title: "SRP 'Kraljevac'",
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/juzno-banatski/srp-kraljevac"
                    },
                    {
                        title: "Bela Crkva",
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/juzno-banatski/bela-crkva"
                    },
                ]
            },
            {
                title: 'Severno-Bački',
                titleENG: 'North Bačka',
                submenu: [
                    {
                        title: 'Subotica',
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/severno-backi/subotica"
                    },
                    {
                        title: "Palićko jezero",
                        titleENG: 'Palić Lake',
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/severno-backi/palicko-jezero"
                    },
                    {
                        title: "Tisa - rečna i prirodna oaza",
                        titleENG: `The Tisa River `,
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/severno-backi/tisa"
                    },
                    {
                        title: "Subotička peščara",
                        titleENG: `The Subotica Sands`,
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/severno-backi/suboticka-pescara"
                    },
                    {
                        title: "Bačka Topola",
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/severno-backi/backa-topola"
                    },
                    {
                        title: "Bačkotopolsko Jezero",
                        titleENG: `Bačkotopolsko Lake`,
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/severno-backi/backo-topolsko-jezero"
                    },
                ]
            },
            {
                title: 'Severno-Banatski',
                titleENG: 'North Banat',
                submenu: [
                    {
                        title: 'Kikinda',
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/severno-banatski/kikinda"
                    },
                    {
                        title: "Kanjiža i termalne vode",
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/severno-banatski/kanjiza"
                    },
                    {
                        title: "Selevenjske pustare",
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/severno-banatski/selevenjske-pustare"
                    },
                    {
                        title: "Rezervat velike droplje",
                        titleENG: `The Great Bustard Reserve`,
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/severno-banatski/rezervat-velike-droplje"
                    },
                    {
                        title: "Senta",
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/severno-banatski/senta"
                    }
                ]
            },
            {
                title: 'Srednje-Banatski',
                titleENG: 'Middle Banat',
                submenu: [
                    {
                        title: 'Zrenjanin',
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/srednje-banatski/zrenjanin"
                    },
                    {
                        title: "Novi Bečej",
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/srednje-banatski/novi-becej"
                    },
                    {
                        title: 'Specijalni rezervat prirode "Slano kopovo"',
                        titleENG: `The Special Nature Reserve "Slano Kopovo"`,
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/srednje-banatski/slano-kopovo"
                    },
                    {
                        title: "Park prirode “Stara Tisa“ kod Bisernog ostrva",
                        titleENG: `The "Stara Tisa" Nature Park`,
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/srednje-banatski/stara-tisa"
                    },
                    {
                        title: "Kupalište Peskara",
                        titleENG: `Peskara Bathing Area`,
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/srednje-banatski/kupaliste-peskara"
                    }
                ]
            },
            {
                title: 'Sremski-Okrug',
                titleENG: 'Srem',
                submenu: [
                    {
                        title: "Sremska Mitrovica",
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/sremski-okrug/sremska-mitrovica"
                    },
                    {
                        title: "Inđija",
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/sremski-okrug/indjija"
                    },
                    {
                        title: "Sotsko Jezero",
                        titleENG: `Sotsko Lake`,
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/sremski-okrug/sotsko-jezero"
                    },
                    {
                        title: "Manastir Novo Hopovo",
                        titleENG: `The Novo Hopovo Monastery`,
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/sremski-okrug/novo-hopovo"
                    },
                    {
                        title: 'Specijalni rezervat prirode "Zasavica"',
                        titleENG: `The Special Nature Reserve "Zasavica"`,
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/sremski-okrug/srp-sasavica"
                    },
                    {
                        title: "Šid",
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/sremski-okrug/sid"
                    },
                    {
                        title: "Manastir Jazak",
                        titleENG: `The Jazak Monastery`,
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/sremski-okrug/manastir-jazak"
                    },
                    {
                        title: "Bešenovačko Jezero",
                        titleENG: `Bešenovačko Lake`,
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/sremski-okrug/besenovacko-jezero"
                    }
                ]
            },
            {
                title: 'Zapadno-Bački',
                titleENG: 'West Bačka',
                submenu: [
                    {
                        title: "Sombor",
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/zapadno-backi/sombor"
                    },
                    {
                        title: 'Gornje Podunavlje',
                        titleENG: `Upper Danube Floodplain`,
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/zapadno-backi/gornje-podunavlje"
                    },
                    {
                        title: 'Apatin i apatinske terminalne vode',
                        titleENG: `Apatin and the Apatin Thermal Waters`,
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/zapadno-backi/apatin-i-terminalne-vode"
                    },
                    {
                        title: 'Veliki Bački kanal',
                        titleENG: `The Great Bačka Canal`,
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/zapadno-backi/veliki-backi-kanal"
                    },
                    {
                        title: 'Manastir Bodjani',
                        titleENG: `The Bođani Monastery`,
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/zapadno-backi/manastir-bodjani"
                    },
                    {
                        title: 'Salaši u Bačkoj',
                        titleENG: `The salaši in Western Bačka`,
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/zapadno-backi/salasi-u-backoj"
                    },
                    {
                        title: 'Dunavkse Ade',
                        titleENG: `Danube river islands`,
                        to: "/:lang/vojvodina-tekst-modal/vojvodina/zapadno-backi/dunavske-ade"
                    },
                ]
            },

        ]
    },
    {
        title: 'BEOGRADSKI REGION',
        titleENG: 'BELGRADE REGION',
        submenu: [
            {
                title: 'Beograd',
                to: "/:lang/beograd/beograd2",
            },
            {
                title: "Beogradska Tvrdjava - Kalemegdan",
                titleENG: `Belgrade Fortress – Kalemegdan`,
                to: "/:lang/beograd/kalemegdan"
            },
            {
                title: "Hram Svetog Save",
                titleENG: `The Church of Saint Sava`,
                to: "/:lang/beograd/hram-svetog-save"

            },
            {
                title: "Knez Mihajlova",
                titleENG: `Knez Mihalova Street`,
                to: "/:lang/beograd/knez-mihajlova"
            },
            {
                title: "Trg Republike",
                titleENG: `Republic Square`,
                to: "/:lang/beograd/trg-republike"

            },
            {
                title: "Botanicka Bašta",
                titleENG: `The Botanical Garden`,
                to: "/:lang/beograd/botanicka-basta"
            },
            {
                title: "Skadarlija",
                to: "/:lang/beograd/skadarlija"

            },
            {
                title: "Ada Ciganlija",
                to: "/:lang/beograd/ada-ciganlija"
            },
            {
                title: "Košutnjak",
                to: "/:lang/beograd/kosutnjak"
            }

        ]
    },
    {
        title: 'ISTOČNA I JUŽNA SRBIJA',
        titleENG: 'SOUTHERN AND EASTERN SERBIA',
        submenu: [
            {
                title: 'Borski Okrug',
                titleENG: 'Bor District',
                submenu: [
                    {
                        title: 'Bor',
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/bor"
                    },
                    {
                        title: "Đerdapska Klisura",
                        titleENG: `The Đerdap Gorge`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/djerdapska-klisura"
                    },
                    {
                        title: "Lazarev Kanjon",
                        titleENG: `Lazarev Canyon`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/lazarev-kanjon"
                    },
                    {
                        title: "Lazareva Pećina",
                        titleENG: `Lazareva Cave`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/lazareva-pecina"
                    },
                    {
                        title: "Borsko Jezero",
                        titleENG: `Borsko Lake`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/borsko-jezero"
                    },
                    {
                        title: "Lepenski Vir",
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/lepenski-vir"
                    },
                    {
                        title: "Rajkova Pećina",
                        titleENG: `Rajkova Cave`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/rajkova-pecina"
                    },
                ]
            },
            {
                title: 'Braničevski Okrug',
                titleENG: 'Braničevo District',
                submenu: [
                    {
                        title: 'Požarevac',
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/pozarevac"
                    },
                    {
                        title: "Tvrđava Golubac",
                        titleENG: `Golubac Fortress`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/tvrdjava-golubac"
                    },
                    {
                        title: "Srebrno Jezero",
                        titleENG: `Silver Lake`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/srebrno-jezero"
                    },
                    {
                        title: "Manastir Tumane",
                        titleENG: `The Tumane Monastery`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/manastir-tumane"
                    },
                    {
                        title: "Krupajsko Vrelo",
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/krupajsko-vrelo"
                    },
                    {
                        title: "Manastir Gornjak",
                        titleENG: `The Gornjak Monastery`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/manastir-gornjak"
                    },
                    {
                        title: "Planina Beljanica",
                        titleENG: `Beljanica Mountain`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/planina-beljanica"
                    },
                ]
            },
            {
                title: 'Jablanički Okrug',
                titleENG: 'Jablanica District',
                submenu: [
                    {
                        title: 'Leskovac',
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/jablanicki-okrug/leskovac"
                    },
                    {
                        title: 'Brestovačko Jezero',
                        titleENG: `Brestovačko Lake`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/jablanicki-okrug/brestovacko-jezero"
                    },
                    {
                        title: "Planina Babička Gora",
                        titleENG: `Babička Gora mountain`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/jablanicki-okrug/babicka-gora"
                    },
                    {
                        title: "Kanjon Vučjanke",
                        titleENG: `The Vučjanka Canyon`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/jablanicki-okrug/kanjon-vucjanke"
                    },
                    {
                        title: `Planina Goljak`,
                        titleENG: `Mountain Goljak`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/jablanicki-okrug/planina-goljak"
                    },
                    {
                        title: "Tularska Banja",
                        titleENG: `Tularska Spa`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/jablanicki-okrug/tularska-banja"
                    },
                ]
            },
            {
                title: 'Nišavski Okrug',
                titleENG: 'Nišava District',
                submenu: [
                    {
                        title: 'Niš',
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/nis"
                    },
                    {
                        title: "Čegar",
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/cegar"
                    },
                    {
                        title: "Bovansko Jezero",
                        titleENG: `Bovansko Lake`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/bovansko-jezero"
                    },
                    {
                        title: "Suva Planina",
                        titleENG: `Suva mountain`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/suva-planina"
                    },
                    {
                        title: `Sićevačka Klisura`,
                        titleENG: `Sićevačka Gorge`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/sicevacka-klisura"
                    },
                    {
                        title: "Manastir Sveta Petka Iverica",
                        titleENG: `The Monastery of Saint Petka Iverica`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/manastir-sveta-petka-iverica"
                    },
                    {
                        title: "Niška Banja",
                        titleENG: `Niš Spa`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/niska-banja"
                    }
                ]
            },
            {
                title: 'Pčinjski Okrug',
                titleENG: 'Pčinja District',
                submenu: [
                    {
                        title: 'Vranje',
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/vranje"
                    },
                    {
                        title: "Vlasinsko jezero",
                        titleENG: `Vlasina Lake`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/vlasinsko-jezero"
                    },
                    {
                        title: "Planina Besna Kobila",
                        titleENG: `Besna Kobila Mountain`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/besna-kobila"
                    },
                    {
                        title: `Manastir Prohora Pčinjskog`,
                        titleENG: `The Monastery of Saint Prohor`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/prohor-pcinjski"
                    },
                    {
                        title: "Planina Čermenik",
                        titleENG: `Čemernik mountain`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/planina-cemernik"
                    },
                    {
                        title: "Planina Kukavica",
                        titleENG: `Kukavica Mountain`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/planina-kukavica"
                    }
                ]
            },
            {
                title: 'Pirotski Okrug',
                titlteENG: 'Pirot District',
                submenu: [
                    {
                        title: "Pirot",
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/pirot"
                    },
                    {
                        title: 'Nacionalni Park "Stara Planina"',
                        titleENG: `The "Stara Planina" National Park`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/stara-planina"
                    },
                    {
                        title: "Zavojsko jezero",
                        titleENG: `Zavoj Lake`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/zavojsko-jezero"
                    },
                    {
                        title: `Vodopad Tupavica`,
                        titleENG: `Tupavica Waterfall`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/vodopad-tupavica"
                    },
                    {
                        title: "Manastir Sukovo",
                        titleENG: `The Sukovo Monastery`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/manastir-sukovo"
                    },
                    {
                        title: "Vodopad Bigar",
                        titleENG: `The Bigar Waterfall`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/vodopad-bigar"
                    },
                    {
                        title: "Kanjon reke Jerme",
                        titleENG: `The Jerma River Canyon`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/kanjon-reke-jerme"
                    }
                ]
            },
            {
                title: 'Podunavski Okrug',
                titleENG: 'Danube District',
                submenu: [
                    {
                        title: "Smederevo",
                        to: "/:lang/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/podunavski-okrug/smederevo"
                    },
                    {
                        title: "Manastir Pokajnica",
                        titleENG: `Pokajnica Monastery`,
                        to: "/:lang/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/podunavski-okrug/manastir-pokajnica"
                    },
                    {
                        title: "Smederevska tvrdjava",
                        titleENG: `Smederevo Fortress`,
                        to: "/:lang/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/podunavski-okrug/smederevska-tvrdjava"
                    },
                    {
                        title: "Radovanjski Lug",
                        titleENG: `Radovanj Grove`,
                        to: "/:lang/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/podunavski-okrug/radovanjski-lug"
                    },
                    {
                        title: "Manastir Koporin",
                        titleENG: `Koporin Monastery`,
                        to: "/:lang/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/podunavski-okrug/manastir-koporin"
                    }
                ]
            },
            {
                title: 'Toplički Okrug',
                titleENG: 'Toplica District',
                submenu: [
                    {
                        title: "Prokuplje",
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/prokuplje"
                    },
                    {
                        title: "Đavolja Varoš",
                        titleENG: `Devil’s Town`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/djavolja-varos"
                    },
                    {
                        title: "Planina Jastrebac",
                        titleENG: `Jastrebac Mountain`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/jastrebac"
                    },
                    {
                        title: `Tvrđava Hisar`,
                        titleENG: `Hisar Fortress`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/tvrdajva-hisar"
                    },
                    {
                        title: "Manastir Svetog Nikole",
                        titleENG: `St. Nicholas Monastery`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/manastir-svetog-nikole"
                    },
                    {
                        title: "Planina Radan",
                        titleENG: `Radan Mountain`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/planina-radan"
                    }
                ]
            },
            {
                title: 'Zaječarski Okrug',
                titleENG: 'Zaječar District',
                submenu: [
                    {
                        title: "Zaječar",
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/zajecar"
                    },
                    {
                        title: "Sokobanja",
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/soko-banja"
                    },
                    {
                        title: "Planina Rtanj",
                        titleENG: `Mount Rtanj`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/planina-rtanj"
                    },
                    {
                        title: "Vodopad Ripaljka",
                        titleENG: `Ripaljka Waterfall`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/vodopad-ripaljka"
                    },
                    {
                        title: `Srpski Srednjovekovni Grad "Soko Grad"`,
                        titleENG: `Serbian Medieval Town "Soko Grad"`,
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/soko-grad"
                    },
                    {
                        title: "Feliks Romulijana",
                        to: "/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/gamzigrad"
                    }
                ]
            },
        ]
    },
    {
        title: 'KOSOVO I METOHIJA',
        titleENG: 'KOSOVO AND METOHIJA',
        submenu: [
            {
                title: 'Đakovički Okrug',
                titleENG: 'Đakovica District',
                submenu: [
                    {
                        title: 'Đakovica',
                        to: "/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/djakovicki-okrug/djakovica"
                    },
                    {
                        title: "Manastir Visoki Dečani",
                        titleENG: `The Visoki Dečani Monastery`,
                        to: "/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/djakovicki-okrug/manastir-visoki-decani"
                    },
                    {
                        title: "Planina Prokletije",
                        titleENG: `Prokletije Mountains`,
                        to: "/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/djakovicki-okrug/planina-prokletije"
                    }
                ]
            },
            {
                title: 'Gnjilanski Okrug',
                titleENG: 'Gnjilane District',
                submenu: [
                    {
                        title: 'Gnjilane',
                        to: "/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/gnjilanski-okrug/gnjilane"
                    },
                    {
                        title: "Manastir Ubožac",
                        titleENG: `The Ubožac Monastery`,
                        to: "/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/gnjilanski-okrug/manastir-ubozac"
                    },
                    {
                        title: "Podgrađa tvrđava",
                        titleENG: `The Podgrađa Fortress`,
                        to: "/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/gnjilanski-okrug/tvrdjava-podgradje"
                    }
                ]
            },
            {
                title: 'Mitrovački Okrug',
                titleENG: 'Gnjilane District',
                submenu: [
                    {
                        title: 'Kosovska Mitrovica',
                        to: "/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/mitrovacki-okrug/kosovksa-mitrovica"
                    },
                    {
                        title: "Manastir Banjska",
                        titleENG: `The Banjska Monastery`,
                        to: "/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/mitrovacki-okrug/manatir-banjska"
                    },
                    {
                        title: "Gazivodsko Jezero",
                        titleENG: `Gazivoda Lake`,
                        to: "/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/mitrovacki-okrug/gazivodsko-jezero"
                    },
                    {
                        title: `Manastir Devič`,
                        titleENG: `The Devič Monastery`,
                        to: "/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/mitrovacki-okrug/manastir-devic"
                    }
                ]
            },
            {
                title: 'Mitrovački Okrug',
                titleENG: 'Gnjilane District',
                submenu: [
                    {
                        title: 'Kosovska Mitrovica',
                        to: "/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/mitrovacki-okrug/kosovksa-mitrovica"
                    },
                    {
                        title: "Manastir Banjska",
                        titleENG: `The Banjska Monastery`,
                        to: "/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/mitrovacki-okrug/manatir-banjska"
                    },
                    {
                        title: "Gazivodsko Jezero",
                        titleENG: `Gazivoda Lake`,
                        to: "/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/mitrovacki-okrug/gazivodsko-jezero"
                    },
                    {
                        title: `Manastir Devič`,
                        titleENG: `The Devič Monastery`,
                        to: "/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/mitrovacki-okrug/manastir-devic"
                    }
                ]
            },
            {
                title: 'Pećki Okrug',
                titleENG: 'Peć District',
                submenu: [
                    {
                        title: 'Peć',
                        to: "/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug/pec"
                    },
                    {
                        title: "Pećka Patrijaršija",
                        titleENG: `The Patriarchate of Peć`,
                        to: "/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug/pecka-patrijarsija"
                    },
                    {
                        title: "Planina Mokra Gora",
                        titleENG: `Mokra Gora Mountain`,
                        to: "/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug/mokra-gora"
                    },
                    {
                        title: `Vodopad Beli Drim`,
                        titleENG: `White Drin Waterfall`,
                        to: "/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug/vodopad-beli-drim"
                    },
                    {
                        title: "Planina Žuti Kamen",
                        titleENG: `Žuti Kamen Mountain`,
                        to: "/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug/planina-zuti-kamen"
                    },

                ]
            },
            {
                title: 'Prištinski Okrug',
                titlteENG: 'Pristina District',
                submenu: [
                    {
                        title: "Priština",
                        to: "/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/pristina"
                    },
                    {
                        title: "Gračanica",
                        titlteENG: `The Gračanica Monastery`,
                        to: "/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/gracanica"
                    },
                    {
                        title: "Gazimestan",
                        to: "/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/gazimestan"
                    },
                    {
                        title: `Mermerna Pećina`,
                        titlteENG: `The Marble Cave`,
                        to: "/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/mermerna-pecina"
                    },
                    {
                        title: "Tvrđava Novo Brdo",
                        titlteENG: `The Novo Brdo Fortress`,
                        to: "/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/tvrdjava-novo-brdo"
                    }
                ]
            },
            {
                title: 'Prizrenski Okrug',
                titlteENG: 'Prizren District',
                submenu: [
                    {
                        title: "Prizren",
                        to: "/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/pristina"
                    },
                    {
                        title: "Manastir Svetih Arhangela",
                        titlteENG: `The Monastery of the Holy Archangels`,
                        to: "/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/prizrenski-okrug/manastir-svetih-arhangela"
                    },
                    {
                        title: "Vodopad Miruša",
                        titlteENG: `The Mirusha Waterfall`,
                        to: "/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/prizrenski-okrug/vodopad-mirusa"
                    }
                ]
            },
            {
                title: 'Uroševački Okrug',
                titleENG: 'Uroševac District',
                submenu: [
                    {
                        title: "Uroševac",
                        to: "/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/urosevacki-okrug/urosevac"
                    },
                    {
                        title: "Ski centar Brezovica",
                        titleENG: `Ski Resort Brezovica`,
                        to: "/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/urosevacki-okrug/brezovica"
                    },
                    {
                        title: "Ljuboten - Šar Planina",
                        titleENG: `Ljuboten – Šar Mountains`,
                        to: "/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/urosevacki-okrug/ljuboten"
                    }
                ]
            }
        ]
    },
    {
        title: 'ŽUMADIJA I ZAPADNA SRBIJA',
        titleENG: 'ŠUMADIJA AND WESTERN SERBIA',
        submenu: [
            {
                title: 'Kolubarski Okrug',
                titleENG: 'Kolubara District',
                submenu: [
                    {
                        title: 'Valjevo',
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/valjevo"
                    },
                    {
                        title: "Taorska Vrela",
                        titleENG: `Taor Springs`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/taorska-vrela"
                    },
                    {
                        title: "Petnica i Petnička pećina",
                        titleENG: `Petnica and Petnica Cave`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/petnicka-pecina"
                    },
                    {
                        title: "Reka Gradac",
                        titleENG: `The Gradac River`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/reka-gradac"
                    },
                    {
                        title: "Manastir Lelić",
                        titleENG: `The Lelić Monastery`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/manastir-lelic"
                    },
                    {
                        title: "Vidikovac Velika stena",
                        titleENG: `The Big Stone viewpoint`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/vidikovac-velika-stena"
                    },
                    {
                        title: "Vrh Rajac",
                        titleENG: `Rajac Peak`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/vrh-rajac"
                    },
                    {
                        title: "Manastir Ćelije",
                        titleENG: `Ćelije Monastery`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/manastir-celije"
                    },
                    {
                        title: "Divčibare",
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/divcibare"
                    }
                ]
            },
            {
                title: 'Mačvanski Okrug',
                titleENG: 'Mačva District',
                submenu: [
                    {
                        title: 'Šabac',
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/sabac"
                    },
                    {
                        title: "Gučevo",
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/gucevo"
                    },
                    {
                        title: "Zvorničko jezero",
                        titleENG: `Zvorničko Lake`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/zvornicko-jezero"
                    },
                    {
                        title: "Manastir Tronoša",
                        titleENG: `Tronoša Monastery`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/manastir-tronosa"
                    },
                    {
                        title: "Planina Cer",
                        titleENG: `Cer Mountain`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/planina-cer"
                    },
                    {
                        title: "Mačkov Kamen",
                        titleENG: `Zvorničko Lake`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/mackov-kamen"
                    },
                    {
                        title: "Tršić",
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/trsic"
                    }
                ]
            },
            {
                title: 'Moravički Okrug',
                titleENG: 'Moravica District',
                submenu: [
                    {
                        title: 'Čačak',
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/cacak"
                    },
                    {
                        title: "Gornji Milanovac",
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/gornji-milanovac"
                    },
                    {
                        title: "Jezero Međuvršje",
                        titleENG: `Lake Međuvršje`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/jezero-medjuvrsje"
                    },
                    {
                        title: "Ovčarsko - kablarska klisura",
                        titleENG: `Ovčar-Kablar Gorge`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura"
                    },
                    {
                        title: "Manastir Blagoveštenje",
                        titleENG: `The Blagoveštenje Monastery`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/manastir-blagovestenje"
                    },
                    {
                        title: "Guča",
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/guca"
                    },
                    {
                        title: "Planina Rudnik",
                        titleENG: `Mount Rudnik`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/planina-rudnik"
                    },
                    {
                        title: "Manastir Sretenje",
                        titleENG: `The Sretenje Monastery`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/manastir-sretenje"
                    }
                ]
            },
            {
                title: 'Pomoravski Okrug',
                titleENG: 'Pomoravlje District',
                submenu: [
                    {
                        title: 'Jagodina',
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/jagodina"
                    },
                    {
                        title: "Grza",
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/grza"
                    },
                    {
                        title: "Manastir Manasija",
                        titleENG: `Manasija Monastery`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/manastir-manasija"
                    },
                    {
                        title: "Vodopad Lisine",
                        titleENG: `Waterfall Lisine`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/vodopad-lisine"
                    },
                    {
                        title: "Manastir Jošanica",
                        titleENG: `Jošanica Monastery`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/manastir-josanica"
                    },
                    {
                        title: "Resavska Pećina",
                        titleENG: `Resava Cave`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/resavska-pecina"
                    },
                    {
                        title: "Vodopad Prskalo",
                        titleENG: `Waterfall Prskalo`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/vodopad-prskalo"
                    },
                    {
                        title: "Manastir Ravanica",
                        titleENG: `Ravanica Monastery`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/manatir-ravanica"
                    },
                    {
                        title: "Prirodnjački centar",
                        titleENG: `The Natural History Center`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/prirodnjacki-centar"
                    }
                ]
            },
            {
                title: 'Rasinski okrug',
                titleENG: 'Rasina District',
                submenu: [
                    {
                        title: 'Kruševac',
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/krusevac"
                    },
                    {
                        title: "Jezero Ćelije",
                        titleENG: `Lake Ćelije`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/jezero-celije"
                    },
                    {
                        title: "Srpski srednjovekovni grad Koznik",
                        titleENG: `The Serbian medieval fortified town of Koznik`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/tvrdjava-koznik"
                    },
                    {
                        title: "Manastir Đunis",
                        titleENG: `Đunis Monastery`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/manastir-djunis"
                    },
                    {
                        title: "Svetilište Metođe",
                        titleENG: `The Metođe Sanctuary`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/svetiliste-metodje"
                    },
                    {
                        title: "Ribarska Banja",
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/ribarska-banja"
                    },
                    {
                        title: "Manastir Ljubostinja",
                        titleENG: `Ljubostinja Monastery`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/manastir-ljubostinja"
                    },
                    {
                        title: "Vodopad Jelovarnik",
                        titleENG: `Jelovarnik Waterfall`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/vodopad-jelovarnik"
                    },

                ]
            },
            {
                title: 'Raški Okrug',
                titlteENG: 'Raški District',
                submenu: [
                    {
                        title: "Kraljevo",
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/kraljevo"
                    },
                    {
                        title: "Manastir Studenica",
                        titlteENG: `Studenica Monastery`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/manastir-studenica"
                    },
                    {
                        title: "Planina Kopaonik",
                        titlteENG: `Mount Kopaonik`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/planina-kopaonik"
                    },
                    {
                        title: `Vrnjačka Banja`,
                        titlteENG: `The Marble Cave`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/vrnjacka-banja"
                    },
                    {
                        title: "Manastir Žiča",
                        titlteENG: `Žiča Monastery`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/manastir-zica"
                    },
                    {
                        title: "Tvrđava Maglič",
                        titlteENG: `Maglič Fortress`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/tvrdjava-maglic"
                    },
                    {
                        title: "Planina Goč",
                        titlteENG: `Mount Goč`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/planina-goc"
                    },
                    {
                        title: "Manastir Đurđevi Stupovi",
                        titlteENG: `Đurđevi Stupovi Monastery`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/manastir-djurdjevi-stupovi"
                    },
                    {
                        title: "Tvrđava Stari Ras",
                        titlteENG: `Stari Ras fortress`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/tvrdjava-stari-ras"
                    },
                    {
                        title: "Manastir Sopoćani",
                        titleENG: `Sopoćani Monastery`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/manastir-sopocani"
                    }
                ]
            },
            {
                title: 'Šumadijski Okrug',
                titlteENG: 'Šumadija District',
                submenu: [
                    {
                        title: "Kragujevac",
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac/"
                    },
                    {
                        title: "Arandjelovac",
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/arandjelovac"
                    },
                    {
                        title: "Oplenac",
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/oplenac"
                    },
                    {
                        title: "Gružansko jezero",
                        titlteENG: `Lake Gruža`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/gruzansko-jezero"
                    },
                    {
                        title: "Manastir Blagoveštenje Rudničko",
                        titlteENG: `The Blagoveštenje Rudničko Monastery`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/manastir-blagovestenje-rudnciko"
                    },
                    {
                        title: "Manastir Petkovica",
                        titlteENG: `The Petkovica Monastery`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/manastir-petkovica"
                    },
                    {
                        title: "Planinarska staza Žeželj i Bešnjaja",
                        titlteENG: `The hiking trail Žeželj – Bešnjaja`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/zezelj-i-besnjaja"
                    }
                ]
            },
            {
                title: 'Zlatiborski Okrug',
                titleENG: 'Zlatibor District',
                submenu: [
                    {
                        title: "Užice",
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/uzice"
                    },
                    {
                        title: "Reka Uvac",
                        titleENG: `Uvac River`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/reka-uvac"
                    },
                    {
                        title: 'Nacionalni Park "Tara"',
                        titleENG: `Tara National Park`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/nacionalni-park-tara"
                    },
                    {
                        title: "Planina Zlatibor",
                        titleENG: `Mount Zlatibor`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/planina-zlatibor"
                    },
                    {
                        title: "Manastir Mileševa",
                        titleENG: `The Mileševa Monastery`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/manastir-mileseva"
                    },
                    {
                        title: "Jezero Perućac",
                        titleENG: `Perućac Lake`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/jezero-perucac"
                    },
                    {
                        title: "Vodopad Sopotice",
                        titleENG: `The Sopotnica Waterfall`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/vodopad-sopotnice"
                    },
                    {
                        title: "Manastir Rujan",
                        titleENG: `Rujan Monastery`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/manastir-rujan"
                    },
                    {
                        title: "Planina Zlatar",
                        titleENG: `Mount Zlatar`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/planina-zlatar"
                    },
                    {
                        title: "Zaovinsko Jezero",
                        titleENG: `Zaovine Lake`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/zaovinsko-jezero"
                    },
                    {
                        title: "Stopića Pećina",
                        titleENG: `Stopića Cave`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/stopica-pecina"
                    },
                    {
                        title: "Vodopad Gostilje",
                        titleENG: `Gostilje Waterfall`,
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/vodopad-gostilje"
                    },
                    {
                        title: "Mokra Gora",
                        to: "/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/mokra-gora"
                    }
                ]
            }
        ]
    },
]

export default regionsText;