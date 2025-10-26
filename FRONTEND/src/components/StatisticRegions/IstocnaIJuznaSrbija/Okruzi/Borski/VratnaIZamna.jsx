/* eslint-disable react/no-unknown-property */
import vratnaIZamna1 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/KanjonVratnaIZamna/desktop/vratnazamna1.jpg";
import vratnaIZamna2 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/KanjonVratnaIZamna/desktop/vratnazamna2.jpg";
import vratnaIZamna3 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/KanjonVratnaIZamna/desktop/vratnazamna3.jpg";
import vratnaIZamna4 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/KanjonVratnaIZamna/desktop/vratnazamna4.jpg";
import vratnaIZamna5 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/KanjonVratnaIZamna/desktop/vratnazamna5.jpg";
import vratnaIZamna6 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/KanjonVratnaIZamna/desktop/vratnazamna6.jpg";
import vratnaIZamna7 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/KanjonVratnaIZamna/desktop/vratnazamna7.jpg";
import vratnaIZamna8 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/KanjonVratnaIZamna/desktop/vratnazamna8.jpg";
import vratnaIZamna9 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/KanjonVratnaIZamna/desktop/vratnazamna9.jpg";
import vratnaIZamna1M from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/KanjonVratnaIZamna/mobile/vratnazamna1M.jpg";
import vratnaIZamna2M from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/KanjonVratnaIZamna/mobile/vratnazamna2M.jpg";
import vratnaIZamna3M from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/KanjonVratnaIZamna/mobile/vratnazamna3M.jpg";
import vratnaIZamna4M from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/KanjonVratnaIZamna/mobile/vratnazamna4M.jpg";
import vratnaIZamna5M from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/KanjonVratnaIZamna/mobile/vratnazamna5M.jpg";
import vratnaIZamna6M from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/KanjonVratnaIZamna/mobile/vratnazamna6M.jpg";
import vratnaIZamna7M from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/KanjonVratnaIZamna/mobile/vratnazamna7M.jpg";
import vratnaIZamna8M from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/KanjonVratnaIZamna/mobile/vratnazamna8M.jpg";
import vratnaIZamna9M from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/KanjonVratnaIZamna/mobile/vratnazamna9M.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { borskiOkrugPathRoutes } from "./BorskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const RajkovaPecina = () => {
    const navigate = useNavigate();
    const { switchLanguage } = useContextAuth();
    const { lang } = useParams();

    useEffect(() => {
        if (lang && lang !== switchLanguage) {
            const newPath = window.location.pathname.replace(/^\/[^\/]+/, `/${switchLanguage}`);
            navigate(newPath, { replace: true });
        }
    }, [switchLanguage, lang, navigate]);


    return (
        <>

            <Helmet>
                <title>
                    {switchLanguage === 'rs'
                        ? "Kanjon reke Vratne i Zamne – Prirodni Spomenik i Turistička Atrakcija u Srbiji | Serbia Wonders"
                        : "Vratna and Zamna River Canyons – Natural Monuments and Tourist Attractions in Serbia | Serbia Wonders"}
                </title>
                <meta
                    name="description"
                    content={switchLanguage === 'rs'
                        ? "Kanjon reke Vratne i Zamne u istočnoj Srbiji poznat je po prirodnim kamenim mostovima, pećinama i bogatoj flori i fauni. Idealna destinacija za ljubitelje prirode, planinarenja i ekoturizma."
                        : "The Vratna and Zamna River Canyons in eastern Serbia are famous for natural stone bridges, caves, and rich flora and fauna. A perfect destination for nature lovers, hiking, and ecotourism."}
                />
                <meta
                    name="keywords"
                    content={switchLanguage === 'rs'
                        ? "Vratna, Zamna, kanjon, prirodni mostovi, pećine, planinarenje, ekoturizam, Srbija priroda, turistička destinacija"
                        : "Vratna, Zamna, canyon, natural bridges, caves, hiking, ecotourism, Serbia nature, tourist destination"}
                />
                <meta name="author" content="Serbia Wonders" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link
                    rel="canonical"
                    href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/vratnaizamna`}
                />
                <link
                    rel="alternate"
                    hreflang="sr"
                    href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/vratnaizamna"
                />
                <link
                    rel="alternate"
                    hreflang="en"
                    href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/vratnaizamna"
                />
                <link
                    rel="alternate"
                    hreflang="x-default"
                    href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/vratnaizamna"
                />
            </Helmet>


            <div className="placeBackground">
                <ScrollToTop />
                <FaArrowLeft
                    className="arrowLeft"
                    onClick={() => navigate(borskiOkrugPathRoutes.home(switchLanguage))}
                    style={{ fill: "white" }}
                />
                <header></header>
                <img srcSet={`${vratnaIZamna1M} 450w, ${vratnaIZamna1} `} alt="Kanjon reke Vratna" />


                {switchLanguage === 'rs' ?
                    (
                        <>

                            <h1>Kanjon reke Vratne i Zamne</h1>

                            <section lang="sr">
                                <p>
                                    <strong>Vratna</strong> je planinska reka u istočnoj Srbiji, koja protiče pored istoimenog sela, nedaleko od <strong>Brze Palanke</strong>, i uliva se u Dunav sa desne strane. Posebno je poznata po tri prirodna kamena mosta – najvišim u Evropi – nazvanim <em>prerasti</em>, koji svojom formom podsećaju na vrata, po čemu je reka i dobila ime. Izvire na padinama Velikog Grebena i duga je oko 26 kilometara. Tokom leta voda na više mesta ponire u podzemlje i ponovo izbija na površinu, što dodatno doprinosi njenoj posebnosti. Na ulazu u kanjon nalazi se srednjovekovni <strong>manastir Vratna</strong>, za koji se veruje da potiče iz XIV veka, dok je okolina poznata po lovištu u kome obitavaju mufloni i jeleni lopatari.
                                </p>
                            </section>

                            <img srcSet={`${vratnaIZamna2M} 450w, ${vratnaIZamna2} `} alt="Kanjon reke Vratna 2" />


                            <section lang="sr">
                                <p>
                                    U kanjonu reke Vratne nalaze se tri impozantna prirodna kamena mosta. Dva su smeštena u neposrednoj blizini manastira Vratna, dok se treći nalazi dublje u samoj klisuri. Do njih vodi lepo obeležena planinarska staza, koja je nekada prolazila kroz manastirski kompleks, ali se danas kreće obilaznicom oko imanja i izlazi na reku kod Male prerasti.
                                </p>
                                <p>
                                    <strong>Mala prerast</strong> smeštena je oko 200 metara uzvodno od manastira. Njena dužina iznosi 15 m, otvor je širok 33 m, visok 34 m, dok je svod iznad otvora debeo oko 10 m.
                                </p>
                                <p>
                                    <strong>Velika prerast</strong> udaljena je približno 100 metara od Male prerasti. Ovaj prirodni luk dugačak je 45 m, širine otvora 23 m, visine 26 m, a debljina svoda prelazi 30 m, što ga čini posebno impresivnim.
                                </p>
                                <p>
                                    <strong>Suva prerast</strong> nalazi se oko 2 km uzvodno od prethodna dva mosta. Njena dužina je 34 m, širina otvora 15 m, visina 20 m, a svod je debeo oko 10 m. Ime je dobila zbog toga što se reka Vratna u letnjem periodu povlači u podzemlje pedesetak metara pre same prerasti, da bi se potom ponovo pojavila, nestala još jednom i na kraju izbila iz stene nastavljajući svoj površinski tok.
                                </p>


                            </section>

                            <img srcSet={`${vratnaIZamna3M} 450w, ${vratnaIZamna3} `} alt="Kanjon reke Vratna 3" />

                            <section lang="sr">
                                <p>
                                    <strong>Prirodni kameni mostovi Vratne</strong> nastali su različitim procesima. Prva dva mosta su zapravo ostaci nekadašnjeg pećinskog tunela kroz koji je tekla reka Vratna, a čiji se deo svoda urušio, dok je <strong>Suva prerast</strong> formirana usled poniranja reke. U njihovoj neposrednoj blizini otkriveni su i zanimljivi oblici <em>krašnog reljefa</em>, među kojima se izdvajaju tri neistražene pećine – jedna odlikovana dužinom, druga složenom mrežom tunela i hodnika, dok treća krije malo podzemno jezero.
                                </p>
                            </section>

                            <img srcSet={`${vratnaIZamna9M} 450w, ${vratnaIZamna9} `} alt="Kanjon reke Vratna 4" />

                            <section lang="sr">
                                <p>
                                    Na obalama reke <strong>Vratne</strong> raste preko 24 vrste drvenastih biljaka, među kojima se ističu bukva, orah, mečija leska, jorgovan, gorski javor i jasen, kao i više od 170 vrsta zeljastih biljaka. Ovaj predeo bogat je i životinjskim svetom – u lovištu obitavaju mufloni i jeleni lopatari, dok duž reke živi čak 57 vrsta ptica, 10 vrsta slepih miševa, ali i retke životinje poput stepskog tvora, vidre, jazavca i kune. Zahvaljujući tolikoj raznovrsnosti flore i faune, Vratna predstavlja pravo utočište za ljubitelje prirode i ekoturizma u Srbiji.
                                </p>
                            </section>

                            <img srcSet={`${vratnaIZamna5M} 450w, ${vratnaIZamna5} `} alt="Kanjon reke Zamna 1" />

                            <section lang="sr">
                                <p>
                                    <strong>Zamna</strong> je isto kao i Vratna, planinska reka, duga oko 41 kilometar i desna pritoka Dunava. Njen kanjon prepoznatljiv je po pećinama, prirodnim kamenim lukovima i slikovitim klisurama, zbog čega se smatra jednom od skrivenih prirodnih atrakcija ovog dela zemlje. Meštani je često zovu i <em>Zemna</em>. Deo kanjona, poznat pod imenom „Tunelski pećinski luk u kanjonu Zamne“, zaštićen je kao <strong>spomenik prirode Republike Srbije</strong>, što ovo područje čini značajnim i za turizam i za očuvanje prirode.
                                </p>
                            </section>

                            <img srcSet={`${vratnaIZamna6M} 450w, ${vratnaIZamna6} `} alt="Kanjon reke Zamna 2" />

                            <section lang="sr">
                                <p>
                                    <strong>Zamna</strong> izvire na istočnim padinama planine <strong>Deli Jovan</strong>, ispod <strong>Crnog Vrha</strong>, na nadmorskoj visini od 1.039 metara. Reka prvobitno protiče u pravcu istoka, a kod sela <strong>Plavna</strong> s leve strane prima pritoku <strong>Medveđu</strong> (poznatu i kao Medvedica). Na svom ušću, Zamna je formirala impresivan prirodni luk, poznat kao <strong>Rajski prerast</strong> ili „Rajski luk“, smešten 25 km od centra sela i zaklonjen gustim šumama. Ovi pećinski lukovi nastaju urušavanjem poroznog krečnjačkog svoda pećina, a Rajski luk u kanjonu Zamne predstavlja najviši prirodni stenoviti luk u Evropi, što ga čini jedinstvenom turističkom atrakcijom i prirodnim fenomenom Srbije.
                                </p>
                            </section>

                            <img srcSet={`${vratnaIZamna7M} 450w, ${vratnaIZamna7} `} alt="Kanjon reke Zamna 3" />

                            <section lang="sr">
                                <p>
                                    Austrijski putnik <strong>Feliks Filip Kanic</strong> posetio je ovo područje u drugoj polovini 19. veka i opisao planinu <strong>Deli Jovan</strong> koja se uzdiže iznad reke u četiri terase, kao i bogatu drvenu floru – bukvu, hrast, orah i lesku. Područje je prvi detaljno istražio geografski naučnik <strong>Jovan Cvijić</strong> 1895. godine, dajući naučna objašnjenja za nastanak pećinskih lukova.
                                </p>
                                <p>
                                    Pećinu je oblikovala reka, koja je tokom vremena izazvala i urušavanje plafona na dve lokacije, poznate kao <em>vigledi</em>. Sama pećina predstavlja kontinuirani pećinski tunel dug 155 metara. Ulazni deo je visok 18 m i širok 10 m, dok je završna šupljina visoka 10 m i široka 14 m. Budući da su rupe u srušenom plafonu udaljene 70 m, tunel je prirodno osvetljen dnevnom svetlošću. Iako pećina još uvek nije potpuno formirala luk, polako se razvija u impresivni <strong>Rajski prerast</strong>, čineći je jedinstvenom prirodnom atrakcijom i popularnom destinacijom za posetioce kanjona Zamne.
                                </p>
                            </section>

                            <img srcSet={`${vratnaIZamna8M} 450w, ${vratnaIZamna8} `} alt="Kanjon reke Zamna 4" />

                            <section lang="sr">
                                <p>
                                    Pored Rajskog prerasta, reka <strong>Zamna</strong> kod sela <strong>Plavna</strong> je oblikovala kanjon dug oko 4 km, tipičan za titonski krečnjački region. Kanjon je uklesan u masivu <strong>Deli Jovanovog Kuma</strong>, a u ovom delu se nalaze i dve poznate pećine: <strong>Dudićeva</strong> i <strong>Cvetkova pećina</strong>. Na kraju kanjona nalazi se <strong>Rajski luk</strong>, visok skoro 20 m, a širine od 4 do 12 m, sa vidikovcem iznad, koji pruža panoramski pogled na kanjon.
                                </p>

                                <p>
                                    Daljim tokom, reka kod sela <strong>Štubik</strong> skreće prema severoistoku i prima pritoke – sa desne strane <strong>Miljakovačku</strong> i sa leve <strong>Turiju</strong>. Prolazeći između sela <strong>Malajnica</strong> i <strong>Jabukovac</strong>, sa leve strane prima i <strong>Skocku</strong> pritoku. U donjem toku, Zamna vijuga pre nego što se ulije u Dunav kod <strong>Mihajlovca</strong>, preko ostrva <strong>Ostrov Mare</strong>.
                                </p>

                                <p>
                                    U blizini sela <strong>Jabukovac</strong> nalazi se i nekadašnje korito reke Zamne, dugog oko 100 metara, poznato po bogatom ribljem fondu, što ga čini interesantnom destinacijom i za ljubitelje ribolova.
                                </p>
                            </section>

                            <img srcSet={`${vratnaIZamna4M} 450w, ${vratnaIZamna4} `} alt="Kanjon reke Zamna 5" />

                            <section lang="sr">
                                <p>
                                    Bujne šume u dolini <strong>Zamne</strong> bogate su raznovrsnim drvećem i biljnim vrstama, među kojima dominiraju bukva, obični grab, različite vrste hrasta, kao i paprat i mahovina. Obradivo zemljište koristi se uglavnom za setvu kukuruza.
                                </p>

                                <p>
                                    Reka Zamna je bogata ribljim fondom, u kome se ističu klen, pastrmka, čamac i mrena. Osim ribe, u vodi se mogu naći i rakovi, što doprinosi biodiverzitetu ovog područja.
                                </p>

                                <p>
                                    Dolina Zamne obiluju i zmijama, uključujući belošku, smuku, poskoka i evropsku guju. Zbog blizine zaštićenog područja <strong>Vratna</strong>, u okolini reke mogu se videti i veći sisari poput jelena i divljih svinja, kao i različite vrste ptica grabljivica, što čini ovu lokaciju izuzetno interesantnom za ljubitelje prirode i ekoturizam.
                                </p>
                            </section>

                        </>
                    )
                    :
                    (
                        <>

                            <h1>Vratna and Zamna River Canyons</h1>

                            <section lang="en">
                                <p>
                                    <strong>Vratna</strong> is a mountain river in eastern Serbia, flowing past the village of the same name, near <strong>Brza Palanka</strong>, and joining the Danube from the right side. It is especially famous for three natural stone bridges – the tallest in Europe – called <em>prerasti</em>, which resemble gates, hence the river's name. The river springs from the slopes of Veliki Greben and stretches about 26 kilometers. During summer, water disappears underground at several points and re-emerges on the surface, adding to its unique charm. At the entrance of the canyon lies the medieval <strong>Vratna Monastery</strong>, believed to date back to the 14th century, while the surrounding area is known for a hunting ground inhabited by mouflons and fallow deer.
                                </p>
                            </section>

                            <img srcSet={`${vratnaIZamna2M} 450w, ${vratnaIZamna2} `} alt="Vratna River Canyon 2" />

                            <section lang="en">
                                <p>
                                    In the Vratna River canyon, there are three impressive natural stone bridges. Two are located near the Vratna Monastery, while the third is deeper in the gorge. A well-marked hiking trail leads to them, which used to pass through the monastery grounds, but now goes around the estate and reaches the river at the <strong>Small Prerast</strong>.
                                </p>
                                <p>
                                    <strong>Small Prerast</strong> is situated about 200 meters upstream from the monastery. Its length is 15 m, the arch is 33 m wide, 34 m high, and the vault above the opening is approximately 10 m thick.
                                </p>
                                <p>
                                    <strong>Big Prerast</strong> is about 100 meters from the Small Prerast. This natural arch is 45 m long, with an opening 23 m wide, 26 m high, and a vault thickness exceeding 30 m, making it particularly impressive.
                                </p>
                                <p>
                                    <strong>Dry Prerast</strong> is located about 2 km upstream from the other two bridges. Its length is 34 m, width 15 m, height 20 m, and the vault is about 10 m thick. It is named because, during summer, the Vratna River disappears underground about fifty meters before this arch, only to reappear, vanish again, and finally emerge from the rock, continuing its surface flow.
                                </p>
                            </section>

                            <img srcSet={`${vratnaIZamna3M} 450w, ${vratnaIZamna3} `} alt="Vratna River Canyon 3" />

                            <section lang="en">
                                <p>
                                    <strong>Natural stone bridges of Vratna</strong> formed through different geological processes. The first two bridges are remnants of a former cave tunnel through which the Vratna River once flowed, while the <strong>Dry Prerast</strong> formed due to the river's underground passages. Nearby, intriguing karst features have been discovered, including three unexplored caves – one notable for its length, another with a complex network of tunnels and corridors, and a third housing a small underground lake.
                                </p>
                            </section>

                            <img srcSet={`${vratnaIZamna4M} 450w, ${vratnaIZamna4} `} alt="Vratna River Canyon 4" />

                            <section lang="en">
                                <p>
                                    Along the banks of the <strong>Vratna</strong> River, over 24 species of woody plants grow, including beech, walnut, hazel, lilac, mountain maple, and ash, alongside more than 170 herbaceous plant species. This area is also rich in wildlife – the hunting ground hosts mouflons and fallow deer, while along the river there are 57 bird species, 10 bat species, and rare animals such as steppe polecats, otters, badgers, and martens. With such diverse flora and fauna, Vratna represents a true haven for nature lovers and ecotourism enthusiasts in Serbia.
                                </p>
                            </section>

                            <img srcSet={`${vratnaIZamna5M} 450w, ${vratnaIZamna5} `} alt="Zamna River Canyon 1" />

                            <section lang="en">
                                <p>
                                    <strong>Zamna</strong>, like Vratna, is a mountain river about 41 km long and a right tributary of the Danube. Its canyon is known for caves, natural stone arches, and picturesque gorges, making it one of the hidden natural attractions of this region. Locals often call it <em>Zemna</em>. Part of the canyon, known as the “Tunnel Cave Arch in Zamna Canyon,” is protected as a <strong>natural monument of Serbia</strong>, making the area important for both tourism and nature conservation.
                                </p>
                            </section>

                            <img srcSet={`${vratnaIZamna6M} 450w, ${vratnaIZamna6} `} alt="Zamna River Canyon 2" />

                            <section lang="en">
                                <p>
                                    <strong>Zamna</strong> originates on the eastern slopes of <strong>Deli Jovan</strong> Mountain, below <strong>Crni Vrh</strong>, at an altitude of 1,039 meters. The river initially flows east, and near the village of <strong>Plavna</strong>, it receives the left tributary <strong>Medveđa</strong> (also known as Medvedica). At its mouth, Zamna has formed an impressive natural arch, called the <strong>Paradise Prerast</strong> or “Paradise Arch,” located 25 km from the village center and hidden by dense forests. These cave arches form through the collapse of porous limestone ceilings, and the Paradise Arch is the highest natural stone arch in Europe, making it a unique tourist attraction and natural wonder of Serbia.
                                </p>
                            </section>

                            <img srcSet={`${vratnaIZamna7M} 450w, ${vratnaIZamna7} `} alt="Zamna River Canyon 3" />

                            <section lang="en">
                                <p>
                                    The Austrian traveler <strong>Felix Philipp Kanitz</strong> visited the area in the late 19th century and described Deli Jovan Mountain rising above the river in four terraces, along with the rich wooden flora including beech, oak, walnut, and hazel. The area was first properly studied by geographer <strong>Jovan Cvijić</strong> in 1895, providing scientific explanations for the formation of the cave arches.
                                </p>
                                <p>
                                    The cave was shaped by the river, which over time also caused the collapse of the ceiling in two locations, known as <em>vigledi</em>. The cave itself is a continuous tunnel 155 meters long. The entrance is 18 m high and 10 m wide, while the final chamber is 10 m high and 14 m wide. Because the holes in the collapsed ceiling are 70 m apart, the tunnel is fully illuminated by natural daylight. Although the cave has not yet fully formed into an arch, it is slowly developing into an impressive <strong>Paradise Prerast</strong>, making it a unique natural attraction and popular destination for visitors of the Zamna Canyon.
                                </p>
                            </section>

                            <img srcSet={`${vratnaIZamna8M} 450w, ${vratnaIZamna8} `} alt="Zamna River Canyon 4" />

                            <section lang="en">
                                <p>
                                    Besides the Paradise Arch, Zamna near <strong>Plavna</strong> has carved a canyon about 4 km long, typical of the Titon limestone region. The canyon is cut into the Deli Jovanov Kum massif and contains two well-known caves: <strong>Dudićeva</strong> and <strong>Cvetkova</strong>. At the end of the canyon stands the <strong>Paradise Arch</strong>, almost 20 m high and 4–12 m wide, with a viewpoint above offering panoramic views of the canyon.
                                </p>

                                <p>
                                    Further downstream, near the village of <strong>Štubik</strong>, the river turns northeast, receiving tributaries – <strong>Miljakovačka</strong> on the right and <strong>Turija</strong> on the left. Passing west of <strong>Malajnica</strong> and east of <strong>Jabukovac</strong>, it also receives the <strong>Skocka</strong> tributary from the left. In the lower course, Zamna meanders before flowing into the Danube near <strong>Mihajlovac</strong>, across the island of <strong>Ostrov Mare</strong>.
                                </p>

                                <p>
                                    Near <strong>Jabukovac</strong>, there is also an old Zamna riverbed about 100 meters long, rich in fish, making it an attractive spot for fishing enthusiasts.
                                </p>
                            </section>

                            <img srcSet={`${vratnaIZamna9M} 450w, ${vratnaIZamna9} `} alt="Zamna River Canyon 5" />

                            <section lang="en">
                                <p>
                                    The lush forests in the Zamna valley are rich in diverse trees and plant species, dominated by beech, common hornbeam, various oak species, ferns, and moss. Arable land is primarily used for corn cultivation.
                                </p>

                                <p>
                                    Zamna River is abundant in fish species, including roach, trout, chub, and barbel. Crayfish are also present, adding to the biodiversity of the area.
                                </p>

                                <p>
                                    The Zamna valley is also home to snakes such as the Aesculapian snake, grass snake, European viper, and European whip snake. Due to its proximity to the protected Vratna area, larger mammals like deer and wild boars, as well as birds of prey, can be observed, making this location highly attractive for nature lovers and ecotourism enthusiasts.
                                </p>
                            </section>


                        </>
                    )}

            </div>
        </>
    );
};


export default RajkovaPecina;