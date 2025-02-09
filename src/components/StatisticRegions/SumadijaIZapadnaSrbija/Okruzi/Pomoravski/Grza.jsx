import grza1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Grza/Grza1.jpg";
import grza2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Grza/Grza2.jpg";
import grza3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Grza/Grza3.jpg";
import grza4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Grza/Grza4.jpg";
import grza5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Grza/Grza5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const Grza = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} style={{fill: 'white'}}/>
      <header></header>
      <img src={grza1} alt="Grza 1" />

      <h2 style={{ color: "white" }}>Reka Grza</h2>

      <p style={{ paddingTop: "50px" }}>
        Grza je reka u istočnom delu Srbije, duga 23 km. Nastaje spajanjem reka
        Ivanštice (Gornje Grze) i Velike Čestobrodice, između turističkog
        naselja Grza i sela Izvor. Ova reka je leva pritoka Crnice, koja teče
        kroz Paraćin i na zapadu grada se uliva u Veliku Moravu. Gornja Grza i
        njene pritoke formirale su kratke klisure, u kojima raste specifična,
        reliktna vegetacija. Dolina Ivanštice je duga 11 km, a dubina klisure
        prelazi 300 m. Meandarska klisura je duga oko 2 km, a njena dubina
        iznosi više od 250 m.
      </p>

      <img src={grza2} alt="Grza 2" />

      <p>
        Magistralni put koji povezuje Paraćin i Zaječar prolazi duž reke Grze i
        Čestobrodice, spajajući doline Velike Morave i Timoka. Uz reku i u
        blizini izvora postavljeni su broji putokazi, nadstrešnice i klupe za
        turiste i planinare. Na kraju staze nalaze se vrela koja predstavljaju
        izvor reke Grze. Vrelo je izuzetno lepo, a reka formira dva jezera,
        Donje i Gornje jezero, plavo-zelene boje sa kristalno čistom vodom. U
        blizini izvora smešteno je "Turističko naselje Grza", koje sadrži hotel,
        restoran, planinarski dom i brojne vikendice. Grza je i popularna
        destinacija za ribolov, jer je bogata potočnom i kalifornijskom
        pastrmkom. Od izletišta Grza kreću dve pešačke staze koje vode do
        vidikovaca.
      </p>

      <img src={grza3} alt="Grza 3" />

      <p>
        Vrelo Grze, smešteno u podnožju Južnog Kučaja, jedno je od najpoznatijih
        izletišta, udaljeno 20 km od Paraćina. Ispod vrela, reka Grza stvara dva
        očaravajuća jezera, bistre i blistave vodene površine.
      </p>

      <img src={grza4} alt="Grza 4" />

      <p>
        Staze koje prolaze kroz šumu, uz reku i jezera, ostavljaju nezaboravan
        utisak. Okolina izvora je lepo uređena, sa drvenim mostovima, klupama i
        prostorima za piknik, a tu je i pećina koja dodatno upotpunjuje prirodnu
        lepotu ovog područja.
      </p>

      <img src={grza5} alt="Grza 5" />

      <p>
        Voda je i tokom leta hladna, pa se tek poneki hrabri kupač odlučuje na
        osveženje u njenoj bistroj vodi, iako takav poduhvat nije za svakog.
        Ribarima je dobro poznato da je Grza izuzetno bogata potočnom i
        kalifornijskom pastrmkom, a u izletištu se nalazi restoran koji savršeno
        priprema pastrmke.
      </p>
    </div>
  );
};
