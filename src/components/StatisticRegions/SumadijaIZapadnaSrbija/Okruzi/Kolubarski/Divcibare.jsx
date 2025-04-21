import divcibare1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Divcibare/divcibare1.jpg";
import divcibare2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Divcibare/divcibare2.jpg";
import divcibare3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Divcibare/divcibare3.jpg";
import divcibare4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Divcibare/divcibare4.jpg";
import divcibare5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Divcibare/divcibare5.jpg";
import divcibare6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Divcibare/divcibare6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { kulubarskiOkrugPathRoutes } from "./KolubarskiOkrugPathRoutes";

export const Divcibare = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(kulubarskiOkrugPathRoutes.home)} />
      <header></header>
      <img src={divcibare1} alt="Divčibare 1" />

      <h2 style={{ marginLeft: "50px" }}>Divčibare</h2>

      <p style={{ paddingTop: "50px" }}>
        Divčibare su gradsko naselje i popularno planinsko-turističko odredište
        grada Valjeva u okrugu Kolubara, smešteno na planini Maljen. Prema
        popisu iz 2022. godine, naselje broji 88 stalnih stanovnika. Divčibare
        se nalaze 38 km jugoistočno od Valjeva, a 107 km od Beograda. To je
        planinsko polje koje se prostire od Crnog vrha, Pa Ljbe, Golupca do
        Velikog brda. Naselje je na visini od 980 metara nadmorske visine, a
        najviši vrh je Kraljev sto, koji se uzdiže na 1.104 metra.
      </p>

      <img src={divcibare2} alt="Divčibare 2" />

      <p>
        Visoravan je dobila naziv Divčibare, ili devojačke bare, u spomen na
        tragičnu smrt jedne mlade devojke. Prema narodnom predanju, mlada
        čobanica se nesrećnim slučajem utopila u nabujaloj Crnoj Kamenici. Sam
        naziv se pominje još 1476. godine u turskom popisu Smederevskog
        sandžaka. Značajan podatak za istoriju ovog kraja jeste da je knjaz
        Miloš Obrenović, nakon Drugog srpskog ustanka, od svog turskog pobratima
        Deli-age otkupio čitavu visoravan, uključujući torove i druge
        građevinske objekte.
      </p>

      <img src={divcibare3} alt="Divčibare 3" />

      <p>
        Poznato je da je knjaz Miloš često posećivao ovaj kraj, obilazio čobane
        i nadzirao njihov rad. U blizini Gospodarskih koliba nalazio se izvor
        hladne planinske vode, koji je kasnije postao poznat kao knjaz Miloševa
        česma. Tokom austrijske vladavine u delu Srbije (od 1718. do 1739.
        godine), granica između Austrije i Turske prolazila je kroz Maljen. Sve
        do kraja 18. veka, naš narod je Povlen, Maljen i Suvobor nazivao
        zajedničkim imenom: Crna Gora. To se može videti u starim srpskim
        zapisima. Krajem 18. veka, planine Povlen, Maljen i Suvobor gube svoje
        zajedničko ime Kara-dag, odnosno Crna Gora.
      </p>

      <img src={divcibare4} alt="Planina Divčibare 4" />

      <p>
        Maljen je planina koja pripada Dinarskom planinskom sistemu u
        severozapadnoj Srbiji i spada u rudarne planine. Odlikuje se specifičnim
        reljefom, što je omogućilo povoljne klimatske uslove, kao i bogat i
        raznovrstan biljni i životinjski svet. U centralnom delu Maljena nalaze
        se Divčibare. Visovi koji okružuju Divčibare štite ih od vetrova, a
        istovremeno pružaju panoramski pogled na delove masiva Maljena, kao i na
        okolinu. Najviši vrh Maljena je Kraljev sto, koji se uzdiže na 1103 m,
        dok je drugi po visini Crni vrh sa 1098 m.
      </p>

      <img src={divcibare6} alt="Divčibare 5" />

      <p>
        Vis Stražara deli Divčibare na dva dela: Divčibare u užem smislu i
        Pitomine. Ovaj vis je dobio ime tokom austrougarske uprave u severnoj
        Srbiji, od 1718. do 1739. godine, kada je granica između Austrije i
        Turske prolazila tim putem, a tu je bila smeštena i austrijska granična
        straža. Stražaru su činili hajduci, stanovnici okolnih sela, uglavnom iz
        sela Krčmara. Sa Stražare se pruža pogled na celo divčibarsko polje,
        ostale visove Maljena, kao i na veći broj planina i grad Valjevo. Iako
        se često spominje da su Divčibare planina, zapravo je reč o polju koje
        se nalazi na planini Maljen. Zbog svog specifičnog reljefa i geografskog
        položaja, Divčibare se smatra zasebnom turističkom celinom. Kao takve,
        predstavljaju se svim zainteresovanim turistima koji žele da posete ovu
        atraktivnu destinaciju i uživaju u svim njenim lepotama i blagodetima.
      </p>

      <img src={divcibare5} alt="Divčibare 6" />

      <p>
        Ljuti krš Vidikovac je popularno izletište na Divčibarama, smešteno na
        visokom delu ove planine, sa kojeg se pruža spektakularan panoramski
        pogled na okolna područja. Ovaj vidikovac nudi jedinstvenu priliku za
        uživanje u prirodi, sa pogledom na okolne vrhove Maljena, Divčibarsko
        polje i grad Valjevo. Ime "Ljuti krš" potiče od karakterističnog,
        stena-krševitog terena koji se nalazi na ovom mestu. Zbog svog
        specifičnog položaja i prirodnih lepota, Ljuti krš Vidikovac predstavlja
        omiljeno odredište za ljubitelje prirode, planinarenja i fotografije,
        ali i one koji žele da se opuste u mirnom okruženju.
      </p>
    </div>
  );
};
