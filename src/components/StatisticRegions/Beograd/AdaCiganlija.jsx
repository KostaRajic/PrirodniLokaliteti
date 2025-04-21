import adaCiganlija1 from "../../../assets/images/Beograd/AdaCiganlija/adaCiganlija1.jpg";
import adaCiganlija2 from "../../../assets/images/Beograd/AdaCiganlija/adaCiganlija2.jpg";
import adaCiganlija3 from "../../../assets/images/Beograd/AdaCiganlija/adaCiganlija3.jpg";
import adaCiganlija4 from "../../../assets/images/Beograd/AdaCiganlija/adaCiganlija4.jpg";
import adaCiganlija5 from "../../../assets/images/Beograd/AdaCiganlija/adaCiganlija5.jpg";
import adaCiganlija6 from "../../../assets/images/Beograd/AdaCiganlija/adaCiganlija6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../ScrollToTop";
import { beogradPathRoutes } from "./BeogradPathRoutes";

export const AdaCiganlija = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(beogradPathRoutes.home)}
        style={{ fill: "white" }}
      />
      <header></header>
      <img src={adaCiganlija6} alt="Ada Ciganlija 1" />

      <h2>Ada Ciganlija</h2>

      <p>
        Ada Ciganlija, koja se nalazi na samo 4 km od centra Beograda, na reci
        Savi u blizini njenog ušća u Dunav. Nekada je bila ostrvo, a danas je
        poluostrvo. Ovo područje, bogato gustim listopadnim šumama, proplancima
        i livadama, postalo je najpoznatije i najposećenije izletište, kupalište
        i odmaralište Beograđana. Ime "Ada Ciganlija" potiče od keltskih reči
        "singa" (ostrvo) i "lia" (podvodno zemljište), a kroz vreme je došlo do
        promene u obliku reči, koja je na kraju postala "ciganlija". Ada je
        odavno bila prepoznata kao prirodno bogatstvo, a još za vreme Karađorđa
        i kneza Miloša Obrenovića bila je pod posebnom pažnjom. 1821. godine
        proglašena je državnim dobrom, status koji i danas ima.
      </p>

      <img src={adaCiganlija2} alt="Ada Ciganlija 2" />

      <p>
        Donja i gornja pregrada na rukavcu reke Save izgrađene su 1967. godine,
        čime je Beograd dobio jedinstveno jezero dužine 4,2 km, prosečne širine
        200 m i dubine između 4 i 6 m. Tokom letnjih meseci, Ada Ciganlija
        privuče do 300.000 posetilaca dnevno, koji se kupaju ili uživaju u
        raznim oblicima rekreacije. Ukupna površina ove oblasti, uključujući Adu
        Međicu i akvatorijum, iznosi 800 hektara. Ada Ciganlija je značajan
        ekološki centar, zahvaljujući povoljnoj kombinaciji vodenih površina i
        šumskih područja, koja stvara specifičnu mikroklimu. Ova mikroklima
        karakteriše se većom vlagom u vazduhu i nešto nižim letnjim
        temperaturama u poređenju sa ostatkom Beograda.
      </p>

      <img src={adaCiganlija3} alt="Ada Ciganlija 3" />

      <p>
        Savsko jezero (Ada Ciganlija) je idealno za vrhunska takmičenja na mirnim vodama,
        zahvaljujući svom položaju, kvalitetu vode, opremljenosti objekata i
        dužini staza. Pogodno je za različite vodene sportove kao što su
        plivanje, veslanje, kajak, vaterpolo, skakanje u vodu, jedrenje na dasci
        i mnoge druge aktivnosti. Na jezeru su se održavala brojna svetska i
        domaća prvenstva. Ada Ciganlija nudi više od 50 sportskih terena na
        otvorenom, uključujući golf teren i žičaru za skijanje na vodi. Tu se
        nalaze i fudbalski, teniski, rukometni, odbojkaški i košarkaški tereni,
        kao i igrališta za bejzbol, ragbi i hokej na travi. Pored toga, postoje
        tereni za odbojku na pesku i akva-soker, dok ljubitelji ekstremnih
        sportova mogu uživati u bandži džampu, veštačkoj steni za penjanje i
        peintbolu. Za ljubitelje ribolova tu je i jezero Ada safari.
      </p>

      <img src={adaCiganlija4} alt="Ada Ciganlija 4" />

      <p>
        Glavna vrsta vegetacije na Adi Ciganliji su hrastove i brestove šume.
        Tokom sredine prošlog veka, flora je obogaćena uvođenjem američke topole
        i zelenog jasena. Najdivlji delovi ostrva prekriveni su netaknutom
        vegetacijom, što otežava prolaz, ali u isto vreme podstiče istraživačku
        radoznalost i avanturistički duh. Ada je bogata životinjskim svetom, a
        među najbrojnijim vrstama su ptice, naročito divlje patke i galebovi,
        kao i fazani i prepelice. Ova lokacija je i jedno od retkih urbanih
        mesta gde je moguće videti srne ili zečeve u prirodnom okruženju. Plaža
        oko Savskog jezera je potpuno uređena i opremljena svim potrebnim
        infrastrukturnim sadržajem, što je čini jednom od najvećih i najlepših
        plaža na veštačkim jezerima u Evropi. Voda Savskog jezera je toplija i
        čistija od rečne, što ga čini idealnim mestom za masovnu rekreaciju.
      </p>

      <img
        src={adaCiganlija5}
        alt="Ada Ciganlija 5"
        style={{ marginBottom: "-10px" }}
      />
      <p>
        Ada Ciganlija je kulturno-zabavni centar Beograda, posebno u letnjem
        periodu. Organizuju se brojne manifestacije u kojima učestvuju
        najpoznatiji književnici, dramski i estradni umetnici,
        kulturno-umetnička društva, horovi, orkestri i amateri iz raznih
        oblasti. Ugostiteljsku ponudu Ade čini više desetina restorana u
        rustik-stilu, splav-restorana i kućica na vodi, koji svojim sadržajem
        čuvaju i neguju boemsku tradiciju Beograda. Na ulazu su parking-prostor
        za hiljadu vozila i marina u Čukaričkom rukavcu, pogodna za pristajanje
        čamaca, jahti i manjih brodova. Posetiocima Ade Ciganlije stoje na
        raspolaganju i prodavnice, prostori za piknik, kuglana, mini-golf,
        kočije sa konjima, turistički vozić, pedaline i sandoline za vožnju
        jezerom, kao i eko-brod na električni pogon.
      </p>

      <img
        src={adaCiganlija1}
        alt="Ada Ciganlija 5"
        style={{ marginBottom: "-10px" }}
      />
      <p>
        Ada Ciganlija je poznata i po svojoj ponudi ekstremnih sportova, a jedan
        od najuzbudljivijih sadržaja je bandži džamp. Na ovom mestu, posetioci
        mogu doživeti adrenalin u najčišćem obliku, skačući sa visine sa
        sigurnosnim sistemom koji omogućava bezbedan pad. Bandži džamp na Adi
        Ciganliji je popularan među ljubiteljima ekstremnih sportova koji žele
        da se suoče sa strahom i uživaju u nezaboravnom iskustvu skakanja sa
        visine, uz fantastičan pogled na okolinu.
      </p>
    </div>
  );
};
