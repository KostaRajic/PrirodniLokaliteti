import zajecar1 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Zajecar/zajecar1.jpg";
import zajecar2 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Zajecar/zajecar2.jpg";
import zajecar3 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Zajecar/zajecar3.jpg";
import zajecar4 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Zajecar/zajecar4.jpg";
import zajecar5 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Zajecar/zajecar5.jpg";
import zajecar6 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Zajecar/zajecar6.jpg";
import zajecar8 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Zajecar/zajecar44.jpg";
import zajecar7 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Zajecar/zajecar7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { useEffect, useState } from "react";
import { zajecarskiOkrugPathRoutes } from "./ZajecarskiOkrugPathRoutes";

export const Zajecar = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(zajecarskiOkrugPathRoutes.home)} />
      <header></header>
      <img src={zajecar1} alt="Zaječar 1" />

      <h2>Zaječar</h2>

      <p style={{ paddingTop: "50px" }}>
        Zaјečar je grad i sedište grada Zaječara i Zaječarskog upravnog okruga u
        istočnoj Srbiji. Grad je domaćin više osnovnih i srednjih škola, kao i
        više škole za menadžment i prvog privatnog fakulteta u Srbiji, Fakulteta
        za menadžment Megatrend univerziteta. Zaječarska gimnazija, osnovana
        1836. godine, jedna je od najstarijih škola tog tipa u Srbiji i bila je
        najstarija nakon Kragujevačke gimnazije u to vreme. Zaječar je poznat po
        muzičkom festivalu Zaječarska gitarijada, koji traje više od 50 godina,
        kao i po festivalu "Zalet" posvećenom savremenoj umetnosti.
      </p>

      <img src={zajecar2} alt="Zaječar 2" />

      <p>
        Legende o nastanku imena Zaječara i danas su deo usmene tradicije u
        istočnoj Srbiji. One su prisutne u svakodnevnom životu ljudi ovog kraja
        i predstavljaju oblik običajne i društvene prakse, kao i komunikacije.
        <br />
        <br />
        Postoji nekoliko legendi o poreklu imena Zaječara:
        <br />
        <br />
        Grad Zaječar prvi put se pominje u popisu stanovništva iz 1446. godine,
        kada je bio deo Vidinskog sandžaka i brojao osam porodica. Prema jednoj
        legendi, na području Zaječara je nekada bilo mnogo zecova, pa je grad
        dobio ime po njima. Što se tiče porekla imena grada, pretpostavlja se da
        je nastalo od reči „zajec“ (što znači zec u timočkom dijalektu), a
        budući da je pripadao Vidinskom sandžaku, na bugarskom jeziku „zajčar“
        označavalo je čuvara zecova. Kombinovanjem ova dva naziva, grad je dobio
        ime Zaječar.
      </p>

      <img src={zajecar3} alt="Zaječarn 3" />

      <p>
        Drugo predanje tvrdi da je ime grada poteklo od Saida Ashar paše,
        turskog komandanta iz Vidinskog sandžaka kojem je Zaječar pripadao tokom
        osmanske vladavine. Prema ovoj priči, Said Ashar paša je na ušću Crnog i
        Belog Timoka sagradio svoje imanje i podigao naselje, naseljavajući ga
        ljudima iz Bugarske i Vlasima. Tokom Prvog srpskog ustanka, on je
        postavio svoju vojsku u dolini Timoka, u kriznim godinama za srpsku
        despotovinu. Veruje se da je ime Zaječar nastalo vremenom od imena Said
        Ashar.
      </p>

      <img src={zajecar7} alt="Zaječar 4" />

      <p>
        Grad je prvobitno bio smešten na desnoj obali Crnog Timoka, prostirući
        se do brda na kojem se danas nalazi park-šuma Kraljevica. Kasnije se
        život preselio i na levu obalu reke, šireći se ka zapadu. Doseljavanjem
        sve većeg broja srpskih porodica, Zaječar je postao srpski grad. Značaj
        predaja o nastanku imena Zaječara leži u tome što zajednica pokušava da
        objasni poreklo svog naselja i imena, čime doprinosi oblikovanju svog
        identiteta. Drevne priče i legende vekovima se u istočnoj Srbiji prenose
        sa generacije na generaciju, postajući svojevrsni „zaštitni znak“ ovog
        kraja Srbije. Stara usmena predaja sačuvana u ovom delu Srbije
        predstavlja dragoceni deo nematerijalnog kulturnog nasleđa.
      </p>

      {isMobile ? (
        <div className="displayFlexClassic">
          <img
            src={zajecar4}
            alt="Kraljevica 1 mob"
            style={{ padding: "20px", width: "47%", height: "250px" }}
          />

          <img
            src={zajecar8}
            alt="Kraljevica 2 mob"
            style={{ padding: "20px", width: "47%", height: "250px" }}
          />
        </div>
      ) : (
        <div className="displayFlexClassic">
          <img
            src={zajecar4}
            alt="Kraljevica 1"
            style={{ padding: "50px", width: "47%" }}
          />

          <img
            src={zajecar8}
            alt="Kraljevica 2"
            style={{ padding: "50px", width: "47%" }}
          />
        </div>
      )}

      <p>
        Kraljevica je brdo, spomen park-šuma i izletište južno od centra grada
        Zaječara, koje se prostire na oko 400 hektara. Ovo područje ima veliki
        istorijski značaj za grad i odlikuje se posebnim, slikovitim izgledom
        prirode, bogatom zimzelenom i četinarskom florom. Održavanje, uređenje i
        upravljanje Kraljevicom je u nadležnosti JKP Timok-održavanje Zaječar,
        ustanove osnovane 2018. godine. Ova institucija obuhvata kompleks
        sportskih terena i objekata različite namene na ukupnoj površini od
        55.000 m2: sportsku halu, bazen, fudbalski stadion, otvorene terene sa
        tvrdim podlogama i park-šumu „Kraljevica“.
        <br />
        <br /> Na Kraljevici se nalaze i druge atrakcije kao što su vašar,
        hipodrom, trim i ski staza, planinarski dom, Kazamet, i konjički klub.
        Od istorijskih spomenika, tu su spomenik junaku iz Timoke bune Ljubi
        Didiću, vešala koja su podignuta u čast ljudi stradalih tokom Drugog
        svetskog rata, rimske (turske) stepenice, tvrđave iz perioda Prvog
        srpskog ustanka (istočna i zapadna) i krst posvećen žrtvama posle Drugog
        svetskog rata.
      </p>

      <img src={zajecar5} alt="Zaječar 5" />

      <p>
        Vrška čuka je najseverniji deo Stare planine, smešten 12 km istočno od
        Zaječara. Prostire se u pravcu severozapad–jugoistok, a visina se
        postepeno povećava od 382 do 672 m prema jugoistoku. Preko najvišeg vrha
        prelazi srpsko-bugarska granica. <br />
        <br /> Severno od Vrške čuke nalazi se granični prelaz Vrška Čuka na
        putu Zaječar–Kula. Na padinama ove planine, koje su obrasle vegetacijom,
        nalaze se izvorišta Bujukovog i Prlitskog potoka, Topovljevca i Dobrovog
        dola.
        <br />
        <br /> Geološka građa Vrške čuke sastoji se od sprudnih krečnjaka i
        peščara srednje i gornje jure. Na više mesta u ovom području nalaze se
        bogata nalazišta fosila, a na većim dubinama mogu se pronaći naslage
        kamenog uglja.
      </p>

      <img src={zajecar6} alt="Zaječar 6" />

      <p>
        Grliško jezero je veštačko akumulaciono jezero u istočnoj Srbiji, na
        teritoriji Grada Zaječara. Smešteno je u dolini između naselja Grlišta i
        Leskovca. Nastalo je 1989. godine pregradišćem Grliške reke, 4,5 km
        uzvodno od njenog ušća u Beli Timok. Jezero ima višestruku namenu:
        koristi se za snabdevanje Zaječara pijaćom vodom, zbog čega nisu
        izgrađeni objekti za turizam i upotreba čamaca je zabranjena. Takođe,
        koristi se za navodnjavanje i zadržavanje nanosa. U eksploataciji je od
        1990. godine, a voda je bistra i providna.
      </p>
    </div>
  );
};
