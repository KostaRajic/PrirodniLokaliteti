import metodje1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Metodje/metodje1.jpg";
import metodje3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Metodje/metodje3.jpg";
import metodje4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Metodje/metodje4.jpg";
import metodje5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Metodje/metodje5.jpg";
import metodje6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Metodje/metodje6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const SvetilisteMetodje = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(-1)}

      />
      <header></header>
      <img src={metodje1} alt='Prirodni rezervat "Metođe" 1' />

      <h2 style={{ color: "white" }}>Prirodni rezervat "Metođe"</h2>

      <p style={{ paddingTop: "50px" }}>
        Nedaleko od Pančićevog vrha, na nadmorskoj visini između 1200 i 1700
        metara, nalazi se zaštićeno prirodno dobro prvog stepena – „Metođe“. Ovo
        područje, koje se prostire na 110 hektara padina Kopaonika, predstavlja
        stanište mnogih retkih biljnih i životinjskih vrsta.
        <br />
        <br /> Zbog svog izuzetnog značaja, ljudska delatnost u ovom prostoru
        strogo je regulisana. Posetioci, pre nego što uđu u zaštićenu zonu,
        nailaze na rampu pored oštre krivine na putu između Kopaonika i Brzeća,
        gde se podstiču da parkiraju svoja vozila i nastave pešice. Šetajući
        ovim posebnim krajem, mogu uživati u bogatstvu raznobojnog planinskog
        cveća, koje se smenjuje u cvetanju tokom cele godine, kao i u
        veličanstvenom letu sivog sokola, najpoznatijeg stanovnika Metođa.
      </p>

      <img src={metodje3} alt='Prirodni rezervat "Metođe" 2' />

      <p>
        Ovaj posebni deo Kopaonika ne privlači posetioce samo zbog bogatstva
        flore i faune, već i zbog svog duhovnog značaja. U srcu Metođa nalazi se
        drevno svetilište posvećeno svetom Metodiju. Važno je napomenuti da se
        ne radi o poznatom misonaru među Slovenima i bratu Ćirila, već o
        episkopu grada Patare u Likiji, učenom bogoslovu i borcu protiv jeresi,
        koji je stradao od neznabožaca 311. godine, samo dve godine pre
        donošenja Milanskog edikta.
        <br />
        <br />
        Prema predanju, Metođe na Kopaoniku ima verski značaj još od trećeg
        veka, kada su se na ovom uzvišenom mestu molili i lokalno stanovništvo i
        rudari, koji su od davnina vadili rudu na Srebrnoj planini – kako su
        stari Rimljani nazivali Kopaonik. Uostalom, i samo ime Kopaonik jasno
        ukazuje na njegovu dugu rudarsku tradiciju.
      </p>

      <img src={metodje4} alt='Prirodni rezervat "Metođe" 3' />

      <p>
        Neposredno uz svetilište, u steni, nalazi se izvor koji teče iz njenog
        gornjeg dela. Vekovno iskustvo naroda sa Kopaonika ukazuje da ova voda
        ima lekovita svojstva, posebno za oči, dok neki veruju da pijenje veće
        količine ove vode može pomoći u lečenju šećerne bolesti. Mnogi posetioci
        koriste ovu vodu za umivanje, a 1996. godine, na tom mestu, podignut je
        hram, zahvaljujući inicijativi Nacionalnog parka Kopaonik i podršci
        meštana. Svake godine, 3. jula, ovde se okuplja veliki broj ljudi kako
        bi proslavili praznik svetog Metodija, koji, prema rečima vernika, nije
        samo slava Nacionalnog parka Kopaonik, već i svih stanovnika ove
        planine.
      </p>

      <img src={metodje5} alt='Prirodni rezervat "Metođe" 4' />

      <p>
        Posetioci koji odluče da prošeću stazama ovog dela Kopaonika mogu
        uživati u prelepim prizorima i zvucima vodopada. Na relativno malom
        prostoru nalazi se veliki broj izvora. Ovdje se nalazi i veoma retka
        prirodna pojava za Srbiju – gejzir, koji je nastao tokom hidroloških
        istraživanja bušenjem, a mlaz vode obično dostiže visinu od oko 5
        metara. Kopaonik je poznat i kao jedna od najvodenijih planina u Evropi.
      </p>

      <img src={metodje6} alt='Prirodni rezervat "Metođe" 5' />

      <p>
        Nedavno je uklonjen masivni barokni ikonostas iz 19. veka, koji, iako
        predstavlja kvalitetno umetničko delo, nije odgovarao starosti zida,
        starog više od sedam vekova. Na osnovu tragova na mermernom podu,
        ustanovljeno je kako je otprilike izgledao originalni kameni ikonostas,
        pa je na osnovu tih saznanja napravljen novi, niži ikonostas, koji sada
        omogućava vernicima i ljubiteljima umetnosti da uživaju u starim
        freskama iz oltara.
      </p>
    </div>
  );
};
