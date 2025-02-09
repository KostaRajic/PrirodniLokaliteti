import fruska2 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NacionalniParkFruskaGora/Fruska1.jpg";
import fruska3 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NacionalniParkFruskaGora/Fruska5.jpg";
import fruska4 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NacionalniParkFruskaGora/Fruska3.jpg";
import fruska5 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NacionalniParkFruskaGora/Fruska4.jpg";
import fruska6 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NacionalniParkFruskaGora/Fruska8.jpg";
import fruska11 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NacionalniParkFruskaGora/zanimljivosti/1.jpg";
import fruska12 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NacionalniParkFruskaGora/zanimljivosti/2.jpg";
import fruska13 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NacionalniParkFruskaGora/zanimljivosti/dombo1.jpg";
import fruska14 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NacionalniParkFruskaGora/zanimljivosti/gradac.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const FruskaGora = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(-1)}
        style={{ fill: "white" }}
      />
      <header></header>
      <img src={fruska2} alt="Fruska Gora 1" />

      <h2 style={{ color: "white" }}>Nacionalni Park "Fruška Gora"</h2>

      <p style={{ paddingTop: "50px" }}>
        Najviši vrh je Crveni Čot (539 m), a najznačajniji turistički centar
        Iriški venac. Pruža se duž desne obale Dunava, duga 78, a široka 15 km.
        Stvaranje planine počelo je u mezozoiku, pre 90 miliona godina; naučnici
        je nazivaju „ogledalo geološke prošlosti“. Na njoj su pronađene 164
        životinjske fosilne vrste, stare oko 123 miliona godina. Floru Fruške
        gore čini oko 1500 biljnih vrsta.
      </p>

      <hr />
      <div style={{ flexDirection: "column", display: "flex" }}>
        {window.innerWidth < 500 ? (
          <>
            <img
              src={fruska4}
              alt="Fruska Gora 2"
              className="fruskaGoraClassImg"
            />
            <p className="fruskaGoraParagh">
              Fruška gora bogata je šumama hrasta, graba, bukve, lipe i drugog
              drveća, sa zaštićenih preko 50 biljnih vrsta. Na planini postoji i
              više arheoloških nalazišta (neolit, bakarno, bronzano i rimsko
              doba), kao i stari fruškogorski manastiri (ukupno 17), nastali od
              kraja 15. do 18. veka, poznati po specifičnoj arhitekturi, bogatim
              riznicama, bibliotekama i freskama. Središte uprave Nacionalnog
              parka je u Sremskoj Kamenici.
            </p>
          </>
        ) : (
          <div className="flexColumn" style={{ display: "flex" }}>
            <p className="fruskaGoraParagh">
              Fruška gora bogata je šumama hrasta, graba, bukve, lipe i drugog
              drveća, sa zaštićenih preko 50 biljnih vrsta. Na planini postoji i
              više arheoloških nalazišta (neolit, bakarno, bronzano i rimsko
              doba), kao i stari fruškogorski manastiri (ukupno 17), nastali od
              kraja 15. do 18. veka, poznati po specifičnoj arhitekturi, bogatim
              riznicama, bibliotekama i freskama. Središte uprave Nacionalnog
              parka je u Sremskoj Kamenici.
            </p>
            <img
              src={fruska4}
              alt="Fruska Gora 2"
              className="fruskaGoraClassImg"
            />
          </div>
        )}

        <hr />
        <div className="flexColumn" style={{ display: "flex" }}>
          <img
            src={fruska6}
            alt="Fruska Gora 3"
            className="fruskaGoraClassImg"
          />

          <p className="fruskaGoraParagh">
            Flora Fruške gore je veoma raznolika i specifična. Na prostoru uže
            zone Nacionalnog parka raste oko 1000 vrsta biljaka, a njihov ukupan
            broj, zajedno sa biljkama na prostoru zaštitne zone, prelazi cifru
            od 1500 vrsta. Ovako velikom raznovrsnošću Fruška gora može da se
            poredi sa mnogo većim i višim planinama u Srbiji. Fruška gora je
            poznata po prisustvu velikog broja (oko 700) lekovitih biljaka. Veći
            deo njih su autohtone, „divlje“ vrste, a manji deo su alohtone,
            gajene biljke.
          </p>
        </div>

        <hr />

        {window.innerWidth < 500 ? (
          <>
            <img
              src={fruska3}
              alt="Fruska Gora 4"
              className="fruskaGoraClassImg"
            />
            <p className="fruskaGoraParagh">
              Izletišta na Fruškoj gori su prostori najčešće pored
              saobraćajnica, kulturno-istorijskih spomenika i ugostiteljskih
              objekata. Osim izletišta, uređuju se i prostori sa kojih se pruža
              mogućnost uživanja u lepim vidicima na užu i dalju okolinu, kakav
              je npr. vidikovac iznad naselja Vrdnik. Sa Iriškog venca se vidi
              pola Bačke, Avala, Cer i druge naše planine. Taj vidik je pravi
              lek za sve one koji traže mir u tišini i prirodi. Tek tu čovek
              oseti veličinu i snagu prirode i istovremeno lepotu života. Od
              izletišta koja se uređuju, značajnija su: Čortanovačka šuma,
              Stražilovo, Partizanski put, Iriški venac, Hopovo, Glavica,
              Popovica, Zmajevac, Letenka, Hajdučki breg, Andrevlje, Testera,
              Ciganski logor, Ležimir, Rohalj baze, Lipovača i dr.
            </p>
          </>
        ) : (
          <div style={{ display: "flex" }} className="flexColumn">
            <p className="fruskaGoraParagh">
              Izletišta na Fruškoj gori su prostori najčešće pored
              saobraćajnica, kulturno-istorijskih spomenika i ugostiteljskih
              objekata. Osim izletišta, uređuju se i prostori sa kojih se pruža
              mogućnost uživanja u lepim vidicima na užu i dalju okolinu, kakav
              je npr. vidikovac iznad naselja Vrdnik. Sa Iriškog venca se vidi
              pola Bačke, Avala, Cer i druge naše planine. Taj vidik je pravi
              lek za sve one koji traže mir u tišini i prirodi. Tek tu čovek
              oseti veličinu i snagu prirode i istovremeno lepotu života. Od
              izletišta koja se uređuju, značajnija su: Čortanovačka šuma,
              Stražilovo, Partizanski put, Iriški venac, Hopovo, Glavica,
              Popovica, Zmajevac, Letenka, Hajdučki breg, Andrevlje, Testera,
              Ciganski logor, Ležimir, Rohalj baze, Lipovača i dr.
            </p>
            <img
              src={fruska3}
              alt="Fruska Gora 4"
              className="fruskaGoraClassImg"
            />
          </div>
        )}

        <hr />

        {window.innerWidth < 500 ? (
          <div>
          <img
            src={fruska5}
            alt="Fruska Gora 5"
            className="fruskaGoraClassImg"
          />
          <p className="fruskaGoraParagh">
            Posetiocima Nacionalnog parka Fruška gora se nude brojne
            mogućnosti za planinarenje. Bilo da se radi o jednodnevnim ili
            višednevnim izletima, važno je da budete fizički i mentalno
            pripremljeni za planinarenje, a takođe i da imate odgovarajuću
            opremu. Planinarske staze na Fruškoj gori vode kroz prelepe
            listopadne šume i preko livada. Neke od staza nude pešačenje bez
            mnogo napora, sa blagim usponima, dok druge zahtevaju više napora
            zbog njihove dužine i uspona. Većina staza je obeležena
            planinarskim oznakama (beo krug sa crvenim srcem u sredini), što
            obezbeđuje sigurnost posetiocima parka da se neće izgubiti, kao i
            mogućnost da dođu do planinarskih domova.
          </p>
        </div>
        ) : (
          <div style={{ display: "flex" }}>
            <img
              src={fruska5}
              alt="Fruska Gora 5"
              className="fruskaGoraClassImg"
            />
            <p className="fruskaGoraParagh">
              Posetiocima Nacionalnog parka Fruška gora se nude brojne
              mogućnosti za planinarenje. Bilo da se radi o jednodnevnim ili
              višednevnim izletima, važno je da budete fizički i mentalno
              pripremljeni za planinarenje, a takođe i da imate odgovarajuću
              opremu. Planinarske staze na Fruškoj gori vode kroz prelepe
              listopadne šume i preko livada. Neke od staza nude pešačenje bez
              mnogo napora, sa blagim usponima, dok druge zahtevaju više napora
              zbog njihove dužine i uspona. Većina staza je obeležena
              planinarskim oznakama (beo krug sa crvenim srcem u sredini), što
              obezbeđuje sigurnost posetiocima parka da se neće izgubiti, kao i
              mogućnost da dođu do planinarskih domova.
            </p>
          </div>
        )}
        <hr />

        <h3
          style={{
            backgroundColor: "white",
            color: "rgb(19 17 35)",
            textAlign: "center",
            padding: "40px 0 10px 0",
            fontSize: "37px",
          }}
        >
          Zanimljivosti
        </h3>

        {window.innerWidth < 500 ? (
          <div>
            <img
              src={fruska11}
              alt="Beli Majdan"
              className="fruskaGoraClassImg"
            />
            <p className="fruskaGoraParagh">
              Beli Majdan je jedno od poznatih lokaliteta na Fruškoj gori,
              smešteno u blizini naselja Iriški venac. Ovaj naziv je vezan za
              specifičan geološki fenomen – stenovite izloženosti koje se
              karakterišu belim krečnjačkim stenom. Beli Majdan je bio značajan
              rudarski lokalitet, jer su se u prošlosti ovde vadile rude,
              posebno u 18. i 19. veku. Pored toga, Beli Majdan je danas poznat
              kao prirodno i turističko odredište koje privlači posetioce zbog
              svog prelepog okruženja, specifične flore i faune, te mogućnosti
              za pešačenje i uživanje u prirodi. Ovaj lokalitet se nalazi u
              blizini Iriškog venca, što ga čini popularnim među ljubiteljima
              prirode i turizmom na Fruškoj gori.
            </p>
          </div>
        ) : (
          <div style={{ display: "flex" }}>
            <p className="fruskaGoraParagh">
              Beli Majdan je jedno od poznatih lokaliteta na Fruškoj gori,
              smešteno u blizini naselja Iriški venac. Ovaj naziv je vezan za
              specifičan geološki fenomen – stenovite izloženosti koje se
              karakterišu belim krečnjačkim stenom. Beli Majdan je bio značajan
              rudarski lokalitet, jer su se u prošlosti ovde vadile rude,
              posebno u 18. i 19. veku. Pored toga, Beli Majdan je danas poznat
              kao prirodno i turističko odredište koje privlači posetioce zbog
              svog prelepog okruženja, specifične flore i faune, te mogućnosti
              za pešačenje i uživanje u prirodi. Ovaj lokalitet se nalazi u
              blizini Iriškog venca, što ga čini popularnim među ljubiteljima
              prirode i turizmom na Fruškoj gori.
            </p>
            <img
              src={fruska11}
              alt="Beli Majdan"
              className="fruskaGoraClassImg"
            />
          </div>
        )}
        {window.innerWidth < 500 ? (
          <div>
            <img
              src={fruska12}
              alt="Vrdnicka kula"
              className="fruskaGoraClassImg"
            />
            <p className="fruskaGoraParagh">
              Vrdnička kula je istorijski spomenik koji se nalazi u blizini
              Iriškog venca. Ova kula je poznata po svom značaju u istoriji
              Srema i celokupne Srbije, a veruje se da datira iz srednjeg veka,
              iako tačan period njenog nastanka nije potpuno potvrđen. Prema
              nekim izvorima, Vrdnička kula je bila deo sistema odbrambenih
              utvrđenja koja su se koristila za zaštitu od napada u to vreme, a
              njena funkcija bila je i signalna tačka. Kula je sagrađena na
              uzvišenju, što je omogućavalo širok pogled na okolinu i kontrolu
              prolaza kroz dolinu.
            </p>
          </div>
        ) : (
          <div style={{ display: "flex" }}>
            <img
              src={fruska12}
              alt="Vrdnicka kula"
              className="fruskaGoraClassImg"
            />
            <p className="fruskaGoraParagh">
              Vrdnička kula je istorijski spomenik koji se nalazi u blizini
              Iriškog venca. Ova kula je poznata po svom značaju u istoriji
              Srema i celokupne Srbije, a veruje se da datira iz srednjeg veka,
              iako tačan period njenog nastanka nije potpuno potvrđen. Prema
              nekim izvorima, Vrdnička kula je bila deo sistema odbrambenih
              utvrđenja koja su se koristila za zaštitu od napada u to vreme, a
              njena funkcija bila je i signalna tačka. Kula je sagrađena na
              uzvišenju, što je omogućavalo širok pogled na okolinu i kontrolu
              prolaza kroz dolinu.
            </p>
          </div>
        )}

        {window.innerWidth < 500 ? (
          <div>
            <img
              src={fruska13}
              alt="Samostan Dombo"
              className="fruskaGoraClassImg"
            />
            <p className="fruskaGoraParagh">
              Na brdu Belegir, u Novom Rakovcu, odmah nasuprot osnovne škole,
              nalaze se ostaci utvrđenog samostana Dombo. Samostan je sve do
              sedamdesetih godina XX veka bio skriven pod zemljom, a svetlost
              dana je ugledao zahvaljujući upornom istraživačkom radu arheologa
              Šandora Nađa. Ono što čini zanimljivim ovaj lokalitet je njegova
              sledljivost (kontinuitet) kroz istoriju. Celi civilizacijski
              slojevi su ostavili svoj trag na njemu. Arheolozi su pronašli
              tragove Keltskog naselja na čijim temeljima je izgrađeno Rimsko.
            </p>
          </div>
        ) : (
          <div style={{ display: "flex" }}>
            <p className="fruskaGoraParagh">
              Na brdu Belegir, u Novom Rakovcu, odmah nasuprot osnovne škole,
              nalaze se ostaci utvrđenog samostana Dombo. Samostan je sve do
              sedamdesetih godina XX veka bio skriven pod zemljom, a svetlost
              dana je ugledao zahvaljujući upornom istraživačkom radu arheologa
              Šandora Nađa. Ono što čini zanimljivim ovaj lokalitet je njegova
              sledljivost (kontinuitet) kroz istoriju. Celi civilizacijski
              slojevi su ostavili svoj trag na njemu. Arheolozi su pronašli
              tragove Keltskog naselja na čijim temeljima je izgrađeno Rimsko.
            </p>
            <img
              src={fruska13}
              alt="Samostan Dombo"
              className="fruskaGoraClassImg"
            />
          </div>
        )}

        {window.innerWidth < 500 ? (
          <div>
            <img
              src={fruska14}
              alt="Tvrdjava Gradac"
              className="fruskaGoraClassImg"
            />
            <p className="fruskaGoraParagh">
              Arheološko nalazište Gradač se nalazi između mesta Čerevića i
              Banoštra, na istoimenom uzvišenju. Tu se nalazilo rimsko utvrđenje
              izgrađeno u 1. veku, koje zahvata površinu od oko 20 metara puta
              80 metara, uokvireno manjim šančevima. Zidovi su građeni od
              lomljenog kamena i opeke sa vezivnim materijalom od hidroličnog
              kreča, debljine oko 1,50 metara, koji su i danas dobro očuvani.
              Očuvan je ceo jedan zid i pregradni, zaštitni zidovi prema
              severozapadu i jugoistoku. Prema severu i Dunavu je strma, okomita
              litica sa dva manja, plitka zemljana šanca, neposredno ispod
              zidova.
            </p>
          </div>
        ) : (
          <div style={{ display: "flex" }}>
            <img
              src={fruska14}
              alt="Tvrdjava Gradac"
              className="fruskaGoraClassImg"
            />
            <p className="fruskaGoraParagh">
              Arheološko nalazište Gradač se nalazi između mesta Čerevića i
              Banoštra, na istoimenom uzvišenju. Tu se nalazilo rimsko utvrđenje
              izgrađeno u 1. veku, koje zahvata površinu od oko 20 metara puta
              80 metara, uokvireno manjim šančevima. Zidovi su građeni od
              lomljenog kamena i opeke sa vezivnim materijalom od hidroličnog
              kreča, debljine oko 1,50 metara, koji su i danas dobro očuvani.
              Očuvan je ceo jedan zid i pregradni, zaštitni zidovi prema
              severozapadu i jugoistoku. Prema severu i Dunavu je strma, okomita
              litica sa dva manja, plitka zemljana šanca, neposredno ispod
              zidova.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
