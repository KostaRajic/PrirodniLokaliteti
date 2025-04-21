import peckaPatrijarsija1 from '../../../../../assets/images/KosovoIMetohija/Pecki/PeckaPatrijarsija/peckaPatrijarsija1.jpg'
import peckaPatrijarsija2 from '../../../../../assets/images/KosovoIMetohija/Pecki/PeckaPatrijarsija/peckaPatrijarsija2.jpg'
import peckaPatrijarsija3 from '../../../../../assets/images/KosovoIMetohija/Pecki/PeckaPatrijarsija/peckaPatrijarsija3.jpg'
import peckaPatrijarsija4 from '../../../../../assets/images/KosovoIMetohija/Pecki/PeckaPatrijarsija/peckaPatrijarsija4.jpg'


import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { peckiOkrugPathRoutes } from './PeckiOkrugPathRoutes';

export const PeckaPatrijarsija = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(peckiOkrugPathRoutes.home)} style={{fill: "white"}} />
      <header></header>
      <img src={peckaPatrijarsija1} alt="Pećka Patrijaršija 1" />

      <h2>Pećka Patrijaršija</h2>

      <p style={{ paddingTop: "50px" }}>
        Od trenutka kada je prvi patrijarh u okviru Srpske patrijaršije, koja je
        tada odnovljena, ustoličen 1924. godine u manastiru Pećka patrijaršija,
        svaki naredni je ustoličen upravo u toj svetinji, nadomak Peći.
        <br />
        <br />U klisuri reke Pećke Bistrice nekada su se nalazile pećine, koje
        su koristili monasi. Upravo zahvaljujući tim pećinama, obližnji grad Peć
        dobi naziv, ali i Pećka patrijaršija. Manastirski kompleks sačinjen je
        od četiri crkve, koje su građene u periodu dužem više od jednog veka.
        Tačnije, u periodu od 30-ih godina 13. veka do polovine narednog.
      </p>

      <img src={peckaPatrijarsija2} alt="Pećka Patrijaršija 2" />

      <p>
        zuzev “zajedničke spoljne priprate na zapadnoj strani”, u okviru
        kompleksa manastira Pećka patrijaršija nalazi se crkva Svetih Apostola,
        koja se smatra glavnom, kao i crkva posvećena Svetom Dimitriju. Tu je i
        Bogorodočina crkva, ali i svetinja koja je manja od ostalih i posvećena
        je Svetom Nikoli.
        <br />
        <br />
        Polovinom 14. veka ovaj manastirski kompleks postaje patrijaršija i to
        nakon što je iz Žiče upravo tu i zvanično preneto sedište tadašnje
        arhiepiskopije. Patrijarh Makarije, rođeni brat Mehmed paše Sokolovića
        bio je prvi patrijarh nakon obnove patrijaršije, što se zbilo u drugoj
        polovini 16. veka.
      </p>

      <img src={peckaPatrijarsija3} alt="Pećka Patrijaršija 3" />

      <p>
        Budući da je prva među četiri svetinje podignuta, to se crkva Svetih
        Apostola smatra glavnom crkvom Pećke patrijaršije i funkcionisala je
        najpre kao metoh manastira Žiča. Zbog naziva koji ima, smatra se da je
        trebalo da funkcioniše kao grobna crkva, u koju će biti sahranjivani
        arhiepiskopi.
        <br />
        <br />
        Zahvaljujući nasledniku Svetog Save, arhiepiskopu Arseniju Prvom, nikla
        je ova značajna bogomolja. Zanimljivo je pomenuti da je fasada crkve
        Svetih Apostola bila istovetne, crvene boje kao i fasada manastira Žiča.
      </p>

      <img src={peckaPatrijarsija4} alt="Pećka Patrijaršija 4" />

      <p>
        Izuzev patrijarha Arsenija Prvog, u ovoj svetinji manastira Pećka
        patriajršija nalaze se i grobnice još dvojice arhiepiskopa. Joanikija
        Drugog i Save Drugog.
        <br />
        <br />
        Oko vek docnije niče i crkva posvećena Svetom Dimitriju i to zaslugom
        arhiepiskopa Nikodima. U njoj se danas nalaze i mošti dvojice
        patrijarha, Jefrema i Save Četvrtog.
        <br />
        <br />
        Nasuprot te crkve je oko 1330. godine podignuta i Bogorodičina crkva.
        Zapravo je u pitanju crkva Bogorodice Odigitrije, odnosno Bogorodice
        Putevoditeljke. Pećki arhiepiskop Danilo Drugi smatra se zaslužnim za
        gradnju te svetinje, budući da je on bio taj koji je naredio da bude
        izgrađena. U toj crkvi se u mermernom sarkofagu, ružičaste boje nalaze i
        njegove mošti.
        <br />
        <br />
        Takođe zaslugom arhiepiskopa Danila Drugog podignut su i omanja crkva
        koja je posvećena Svetom Nikoli, kao i priprata.
      </p>
    </div>
  );
};
