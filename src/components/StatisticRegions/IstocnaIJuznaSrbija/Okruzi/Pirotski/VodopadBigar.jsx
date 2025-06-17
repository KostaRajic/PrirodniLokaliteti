import bigar1 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/VodopadBigar/desktop/vodopadBigar1.jpg";
import bigar2 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/VodopadBigar/desktop/vodopadBigar2.jpg";
import bigar3 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/VodopadBigar/desktop/vodopadBigar3.jpg";
import bigar4 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/VodopadBigar/desktop/vodopadBigar4.jpg";
import bigar11 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/VodopadBigar/mobile/vodopadBigarM1.jpg";
import bigar22 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/VodopadBigar/mobile/vodopadBigarM2.jpg";
import bigar33 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/VodopadBigar/mobile/vodopadBigarM3.jpg";
import bigar44 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/VodopadBigar/mobile/vodopadBigarM4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pirotskiOkrugPathRoutes } from "./PirotskiOkrugPathRoutes";

export const VodopadBigar = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(pirotskiOkrugPathRoutes.home)}
        style={{ fill: "white" }}
      />
      <header></header>
      <img srcSet={`${bigar11} 400w, ${bigar1} `} alt="Vodopad Bigar 1" />

      <h2>Vodopad Bigar</h2>

      <p style={{ paddingTop: "50px" }}>
        Vodopad Bigar smešten je na Staroj planini, otprilike 5 kilometara od
        sela Kalna. Visok je 35 metara i nalazi se na nadmorskoj visini od 450
        metara. Voda se sliva preko poroznog, rupičastog kamena, bigra, po kojem
        je vodopad i dobio svoje ime.
      </p>

      <img srcSet={`${bigar44} 400w, ${bigar4} `} alt="Vodopad Bigar 2" />

      <p>
        Vodopad Bigar je pravi dragulj turističke ponude Stare planine. Njegova
        magična lepota i prirodni šarm privlače mnoge posetioce.
        <br />
        <br /> Ovaj vodopad je prirodna atrakcija akumulativnog porekla, koja
        očarava svojom jedinstvenom lepotom. Njegovi odseci su nastali
        taloženjem bigra, specifične vrste kamena, po kojem je vodopad i dobio
        svoje ime. Bigar se sastoji od niza manjih odseka koji se nižu poput
        stepenica, stvarajući zaista spektakularan prizor.
      </p>

      <img srcSet={`${bigar33} 400w, ${bigar3} `} alt="Vodopad Bigar 3" />

      <p>
        Do 1927. godine, kanjon reke Jerme bio je potpuno izolovan i
        nepristupačan, sve dok nije došlo do ključnog trenutka kada je kroz ovu
        divlju klisuru probijena trasa uskog koloseka železnice. Ovaj važan
        događaj bio je deo plana za obezbeđivanje pristupa rudniku kamena uglja
        poznatom kao “Rakita”. U šezdesetim godinama 20. veka, rudnik je
        zatvoren, a sedamdesetih godina izgrađen je asfaltni put, koji je
        zamenio železničku prugu.
        <br />
        <br />
        Izgradnja puta otvorila je vrata prirodnoj lepoti kanjona reke Jerme,
        kao i Poganovskom manastiru, koji se nalazi uz samu reku. Zbog teške
        pristupačnosti kanjona pre 1927. godine, Poganovski manastir je ostao
        netaknut od mnogih osvajača kroz svoju istoriju.
      </p>

      <img srcSet={`${bigar22} 400w, ${bigar2} `} alt="Vodopad Bigar 4" />

      <p>
        Kanjon reke Jerme pruža širok spektar aktivnosti za posetioce koji žele
        da istraže ovu prelepu regiju. Pešačenje, planinarenje i vožnja biciklom
        najpopularniji su izbori među ljubiteljima prirode i avanturizma. Tokom
        letnjih meseci, reka Jerma postaje savršeno mesto za ribolov i kupanje.
        <br />
        <br />
        Za one koji žele da se upoznaju sa bogatom istorijom ovog kanjona,
        postoji mnogo pešačkih staza koje vode kroz značajna istorijska i
        kulturna mesta. Takođe, organizovane ture omogućavaju posetiocima da se
        detaljnije upoznaju sa ovom fascinantnom oblasti i njenim kulturnim
        nasleđem.
      </p>
    </div>
  );
};
