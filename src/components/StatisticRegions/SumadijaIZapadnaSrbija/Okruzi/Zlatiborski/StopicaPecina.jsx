import stopicaPecina1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/StopicaPecina/desktop/stopicaPecina1.jpg";
import stopicaPecina2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/StopicaPecina/desktop/stopicaPecina2.jpg";
import stopicaPecina3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/StopicaPecina/desktop/stopicaPecina3.jpg";
import stopicaPecina4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/StopicaPecina/desktop/stopicaPecina4.jpg";
import stopicaPecina5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/StopicaPecina/desktop/stopicaPecina5.jpg";
import stopicaPecina6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/StopicaPecina/desktop/stopicaPecina6.jpg";
import stopicaPecina11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/StopicaPecina/mobile/MstopicaPecina1.jpg";
import stopicaPecina22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/StopicaPecina/mobile/MstopicaPecina2.jpg";
import stopicaPecina33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/StopicaPecina/mobile/MstopicaPecina3.jpg";
import stopicaPecina44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/StopicaPecina/mobile/MstopicaPecina4.jpg";
import stopicaPecina55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/StopicaPecina/mobile/MstopicaPecina5.jpg";
import stopicaPecina66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/StopicaPecina/mobile/MstopicaPecina6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zlatiborskiOkrugPathRoutes } from "./ZlatiborskiOkrugPahtRoutes";

export const StopicaPecina = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(zlatiborskiOkrugPathRoutes.home)} style={{fill: 'white'}} />
      <header></header>
      <img srcSet={`${stopicaPecina11} 400w, ${stopicaPecina1} `} alt="Stopica Pecina 1" />

      <h2 style={{color: 'white'}}>Stopića Pećina</h2>

      <p style={{ paddingTop: "50px" }}>
        Stopića pećina smeštena je na severoistočnim padinama Zlatibora, između
        sela Rožanstvo i Trnava, nedaleko od puta Zlatibor-Sirogojno. Njena
        blizina glavne saobraćajnice čini je jednom od najdostupnijih pećina u
        Srbiji. Od turističkog centra Zlatibora udaljena je 19 kilometara. Ova
        impozantna pećina privukla je pažnju stručnjaka još početkom 20. veka, a
        prvi pisani podaci o njoj nalaze se u Zapisniku Srpskog geološkog
        društva iz 1901. godine. Temeljna speleološka istraživanja sproveo je
        Jovan Cvijić, pionir naučne speleologije u Srbiji, u periodu od 1909. do
        1913. godine. Stopića pećina je 2005. godine, Uredbom Vlade Republike
        Srbije, proglašena za spomenik prirode i zaštićeno prirodno dobro od
        izuzetnog značaja. Ova odluka doneta je zbog njenog jedinstvenog
        morfološkog i hidrološkog karaktera, posebno impresivnih bigrenih kada,
        retkih po veličini i načinu nastanka, kao i zbog očuvane pećinske flore
        i celokupnog ekosistema. Upravljač pećine je Turistička organizacija
        Zlatibor, a za posetioce je otvorena 2009. godine, kada je izgrađena i
        pešačka staza koja vodi od parkinga do ulaza u pećinu.
      </p>

      <img srcSet={`${stopicaPecina22} 400w, ${stopicaPecina2} `} alt="Stopica Pecina 2" />

      <p>
        Stopića pećina je ime dobila po obližnjem zaseoku Stopići. Današnja
        pešačka staza povezuje se sa nekadašnjom prilaznom stazom, kojom su
        ranije posetioci dolazili do pećine. Jedan od najzanimljivijih delova te
        stare trase jeste prolazak između vigleda – otvora u pećinskoj tavanici,
        poznatih i kao dugure. U pećini ih ima ukupno šest, a svaki je povezan s
        njom kroz sistem bočnih kanala. Veličina vigleda varira, pri čemu je
        najveći dug 22,5 metara i širok 16 metara. Već u ranim istraživanjima
        potvrđeno je da su ovi otvori deo pećinskog sistema, ali su meštani to
        otkrili i pre speleologa na zanimljiv način. Bacali su obojeno kamenje u
        svaki od šest otvora u zemlji, a kasnije bi iste kamenčiće pronalazili
        unutar pećine, što je nedvosmisleno dokazalo njihovu povezanost.
        Trenutno je prolazak ovom trasom zabranjen, jer staza još uvek nije u
        potpunosti uređena.
      </p>

      <img srcSet={`${stopicaPecina33} 400w, ${stopicaPecina3} `} alt="Stopica Pecina 3" />

      <p>
        Ulaz u Stopića pećinu jedan je od najvećih pećinskih otvora u Srbiji, sa
        impozantnim dimenzijama. Visok je 18 metara, a širina varira između 30 i
        40 metara. Smesten je na 711 metara nadmorske visine, na desnoj obali
        reke Prištevice, čiji se huk jasno čuje dok se približavate pećini. Reka
        Prištavica je brza planinska reka, a u prošlosti su duž njenog toka, od
        ulaza u pećinu nizvodno, postojale vodenice koje su koristili meštani
        okolnih sela za mlevenje žita, koristeći snagu ove divlje reke. Prilaz
        pećini i plato ispred ulaza uređeni su 2009. godine, kada je pećina
        otvorena za turiste. Tom prilikom je izgrađena biletarnica, postavljeni
        stolovi i klupice za odmor posetilaca, a ceo prilazni kompleks je
        rekonstruisan 2018. godine.
      </p>

      <img srcSet={`${stopicaPecina44} 400w, ${stopicaPecina4} `} alt="Stopica Pecina 4" />

      <p>
        Stopića pećina je rečna pećina kroz koju protiče Trnavski potok, a njen
        ceo pećinski sistem dugačak je 1.691 metar. Pećina ima razgranatu
        strukturu i sastoji se od pet speleomorfoloških celina: Svetle dvorane,
        Tamne dvorane, Sale sa kadama, Kanala sa kadama, koji su uređeni za
        turističke obilaske, i Rečnog kanala, koji još nije otvoren za javnost.
        Svetla i Tamna dvorana, zajedno sa Salom sa kadama, deo su Glavnog
        kanala, dok se dalje pećina deli na dva ogranka. Jedan od njih vodi do
        ponora Trnavskog potoka, a drugi, Kanal sa kadama, vodi do Pećinice.
        Stopića pećina, ponor Trnavskog potoka i Pećinica čine deo istog
        speleološkog sistema i međusobno su povezani. Iako su brojne ekspedicije
        istraživale pećinu, ceo sistem su uspeli da istraže samo češki
        speleolozi tokom svojih poseta 1983. i 1984. godine.
      </p>

      <img srcSet={`${stopicaPecina55} 400w, ${stopicaPecina5} `} alt="Stopica Pecina 5" />
      <p>
        Svetla dvorana prostire se od ulaza do granice gde dolazi dnevno svetlo.
        Dugačka je 76 metara i zauzima površinu od 2.800 kvadratnih metara. Na
        30 metara udaljenosti od ulaza, sa leve strane, nalazi se siparska kupa
        prečnika od 15 do 20 metara i visine 8 metara. Iznad nje se nalazi
        vigled – otvor u tavanici kroz koji je siparski materijal dospeo i
        formirao kupu. Visina tavanice iznad vrha siparske kupe iznosi 16
        metara, a visina vertikalnog kanala do površine zemlje je 44 metra.
        Tokom istraživanja 1984. godine, na siparskoj kupi su pronađeni
        mumificirani ostaci pasa, pa je ovo područje poznato i kao „Pseće
        groblje“. Tamna dvorana počinje na mestu gde prestaje dnevno svetlo i
        gde nastaje senka, odnosno mrak. Ova dvorana je duga 98,5 metara i ima
        površinu od 1.200 kvadratnih metara. Tu se nalazi i najveća visina
        Stopića pećine, koja iznosi 25,5 metara. Godine 2015. uređene su nove
        pešačke staze na metalnoj konstrukciji, a u 2017. godini regulisan je
        tok Trnavskog potoka. Pre nego što je izgrađena brana i uređeno rečno
        korito, dno Tamne dvorane je bilo potpuno poplavljeno pri većim vodama.
      </p>

      <img srcSet={`${stopicaPecina66} 400w, ${stopicaPecina6} `} alt="Stopica Pecina 5" />
      <p>
        Svetla i Tamna dvorana siromašne su pećinskim nakitom, s golim i
        stenovitim zidovima, dok je značajan deo tavanice takođe bez ukrasa.
        Ovaj izgled je posledica velikog pećinskog otvora, koji omogućava snažan
        uticaj spoljašnje klime na unutrašnje prostore pećine. Zbog širokog
        ulaza u prve dve dvorane, prisutno je jako strujanje vazduha, što
        smanjuje vlažnost i sprečava nastanak bogatog pećinskog nakita. Međutim,
        ostali delovi pećine su izuzetno bogati različitim pećinskim ukrasima.
        Živi svet pećine obuhvata slepe miševe, paukove i rečne rakove, koji su,
        usled nedostatka prirodnog svetla, vremenom izgubili pigment i sada
        imaju karakterističnu belu boju. Sala sa kadama dugačka je 30 metara i
        prostire se na površini od 450 kvadratnih metara. Ova dvorana je
        izuzetno bogata pećinskim nakitom, ali njen posebni značaj leži u
        prisustvu bigrenih kadi, koje su jedinstvene u celoj Evropi. Zbog svoje
        jedinstvenosti, one su postale glavni element uređenja pećine za
        turističke obilaske. Kade su raspoređene duž nagiba sale, počevši od
        korita Trnavskog potoka, formirajući vijugave, rumenkaste bigrene nabore
        koji čine udubljenja različitih širina, dužina i dubina. Ispod ovih
        kadi, bigrena masa se spušta do visine od jednog metra, a dalje, u
        produžetku, plitki i uski nabori prelaze u sve dublje i šire formacije.
      </p>
    </div>
  );
};
