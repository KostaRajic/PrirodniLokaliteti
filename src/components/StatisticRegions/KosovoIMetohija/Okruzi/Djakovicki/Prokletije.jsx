import prokletije1 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Prokletije/desktop/prokletije1.jpg";
import prokletije2 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Prokletije/desktop/prokletije2.jpg";
import prokletije3 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Prokletije/desktop/prokletije3.jpg";
import prokletije4 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Prokletije/desktop/prokletije4.jpg";
import prokletije5 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Prokletije/desktop/prokletije5.jpg";
import prokletije11 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Prokletije/mobile/Mprokletije1.jpg";
import prokletije22 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Prokletije/mobile/Mprokletije2.jpg";
import prokletije33 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Prokletije/mobile/Mprokletije3.jpg";
import prokletije44 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Prokletije/mobile/Mprokletije4.jpg";
import prokletije55 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Prokletije/mobile/Mprokletije5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { djakovickiOkrugPathRoutes } from "./DjakovickiOkrugPathRoutes";

export const Prokletije = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(djakovickiOkrugPathRoutes.home)} style={{fill: 'white'}} />
      <header></header>
      <img srcSet={`${prokletije11} 400w, ${prokletije1} `} alt="Planina Prokletije 1" />

      <h2>Planina Prokletije</h2>

      <p style={{ paddingTop: "50px" }}>
        Srpske (severne) oblasti Prokletija počinju na Mokrim Gorama i Suvoj
        planini na severoistoku i nastavljaju se u blagom luku duž linije Istok
        – Peć – Dečani – Junik do reke Ribnik na jugoistoku. Zapadna granica je
        granica Srbije sa Crnom Gorom, a zatim granica Crne Gore sa Albanijom.
        Ova oblast obuhvata oko 40 odvojenih planina koje zajedno čine jedan od
        najvećih masiva Dinarskih planina. U poređenju sa drugim delovima
        Dinarskih planina, geološka građa Prokletija je složenija. Tu se nalaze
        krečnjaci i dolomiti, dijabaz-ružna formacija, bankoviti i masivni
        krečnjaci, argilozisti, peskari i konglomerati.
      </p>

      <img srcSet={`${prokletije22} 400w, ${prokletije2} `} alt="Planina Prokletije 2" />

      <p>
        Prokletije su u prošlosti imale različite nazive: „Beriseldi“,
        „Severoalbanski Alpi“, „Alpi na jugu Evrope“, „Crnogorski Alpi“ i drugi.
        Današnji naziv u množini – Prokletije, koji označava veći broj
        planinskih venaca, prvi je uveo geograf Jovan Cvijić. Istražujući ovu
        planinsku grupu, primetio je da je srpsko stanovništvo ovde nazivalo
        Bogićevicu, Greben, Bjelić, Karanfile i Trojan zajedničkim imenom
        Prokletije, što znači „proklete planine“. Ovaj naziv je Cvijić proširio
        u svojim radovima na ceo planinski venac, počevši od Skadarskog jezera
        pa do Ibra i Metohije. Naziv je danas prihvaćen u opštem jeziku i
        toponimiji. Albansko stanovništvo Prokletije naziva (alb. Bjeshkët e
        Nemuna), što u prevodu znači „proklete“ ili „zabranjene“ planine. Naziv
        Prokletije ima dvostruko etimološko značenje. On simbolizuje, ne samo
        prirodne karakteristike ovog prostora (krševitost, divljinu,
        nepristupačnost), već i nekadašnje društveno-istorijske okolnosti koje
        su bile prisutne na ovom području (lična nesigurnost, anarhija, razne
        opasnosti i dr.).
      </p>

      <img srcSet={`${prokletije33} 400w, ${prokletije3} `} alt="Planina Prokletije 3" />

      <p>
        Đeravica, sa 2.656 metara nadmorske visine, drugi je najviši vrh Srbije.
        Ovaj vrh se nalazi u južnoj Srbiji, opština Dečani, pokrajina Kosovo i
        Metohija, iznad srednjovekovnog manastira Visoki Dečani. U neposrednoj
        blizini vrha smeštena su brojna ledenička jezera, od kojih je najveće
        Đeravičko. Ono se nalazi na oko 2.200 metara nadmorske visine, a iz
        njega izvire reka Ribnik (Erenik), koja protiče kroz Metohiju. Jezero
        ima oblik zuba, sa najvećom dužinom od 240 i širinom od 120 metara, dok
        mu je najveća dubina 3,8 metara. Ovo jezero je stanište nekoliko vrsta
        vodozemaca iz porodice salamandriida, koji se hrane letećim insektima.
      </p>

      <img srcSet={`${prokletije44} 400w, ${prokletije4} `} alt="Planina Prokletije 4" />

      <p>
        U geografskom istraživanju, preovlađuju mišljenja da su Prokletije
        završne planine Dinarskog planinskog sistema. Istina, Prokletije dele
        brojne karakteristike sa planinama ovog sistema. Međutim, među geolozima
        i geografima postoje i stavovi da su Prokletije samostalan planinski
        sistem. Jovan Cvijić je među prvima ukazao na geografsku specifičnost
        prokletijskog planinskog masiva. Glavni kriterijumi za izdvajanje
        Prokletija kao samostalnog geološkog i geomorfološkog kompleksa svakako
        su facijalno-stratigrafski karakter i pravac pružanja glavnog grebena.
      </p>

      <img srcSet={`${prokletije55} 400w, ${prokletije5} `} alt="Planina Prokletije 4" />

      <p>
        Na Prokletijama se javlja specifična hidrografija, koja je uglavnom
        vezana za krečnjačke terene. Ona obuhvata ne samo krška vrela, već i
        delove rečnih tokova kroz klisure i kanjone sa vodopadima i velikim
        kamenim kotlovima, ponore i krške izvore. U kanjonu Grlje, istoimena
        reka pravi pet vodopada na dužini od 500 metara, što znači da na svakih
        100 metara dolazi do jednog vodopada. Prvi vodopad na ulazu u kanjon,
        koji stvara reka Skakavica, visok je 15 metara, dok najviši, poslednji
        vodopad dostiže visinu od oko 25 metara. Plavsko jezero je najveći
        limnološki objekat ledeničkog porekla.
      </p>
    </div>
  );
};
