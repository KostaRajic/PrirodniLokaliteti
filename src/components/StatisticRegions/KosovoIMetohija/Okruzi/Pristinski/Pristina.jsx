import pristina1 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Pristina/pristina1.jpg";
import pristina2 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Pristina/pristina2.jpg";
import pristina3 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Pristina/pristina3.jpg";
import pristina4 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Pristina/pristina4.jpg";
import pristina5 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Pristina/pristina5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pristinskiOkrugPathRoutes } from "./PristinskiOkrugPathRoutes";

export const Pristina = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(pristinskiOkrugPathRoutes.home)} />
      <header></header>
      <img src={pristina1} alt="Priština 1" />

      <h2>Priština</h2>

      <p style={{ paddingTop: "50px" }}>
        Tokom srednjeg veka, Priština je postala važan grad unutar Srpskog
        kraljevstva, a kasnije i Srpskog carstva. U blizini grada, srpski kralj
        Milutin Nemanjić podigao je manastir Gračanicu, koji je i danas značajan
        kulturni spomenik. Godine 1389. na Gazimestanu, nedaleko Prištine,
        odigrala se čuvena Bitka na Kosovu, u kojoj su poginuli srpski vladar
        knez Lazar Hrebeljanović i osmanski sultan Murat I. Iako je srpska
        vojska u toj bitci ostvarila pobedu, Osmansko Carstvo je kasnije
        osvojilo Balkan i veliki deo Evrope. U periodu nakon bitke, stanovnici
        Prištine su bili pod snažnim uticajem islamizacije, koja je bila
        najizraženija među Albancima, dok su Srbi nastavili sa praksom
        pravoslavlja. Ipak, srpsko stanovništvo je bilo obavezano da plaća
        džiziju, porez koji je nemuslimansko stanovništvo moralo plaćati
        Osmanskom Carstvu.
      </p>

      <img src={pristina2} alt="Narodna biblioteka u Pristini" />

      <p>
        Narodna i univerzitetska biblioteka „Ivo Andrić” predstavlja najvažniju
        biblioteku na Kosovu i Metohiji, smeštenu u Prištini. Njena misija je da
        prikuplja, čuva, promoviše i učini dostupnim dokumentarno i
        intelektualno nasleđe. Biblioteka je poznata po jedinstvenoj istoriji i
        arhitektonskom stilu zgrade, koju je projektovao jugoslovenski i
        hrvatski arhitekta Andrija Mutnjaković. Zbirke koje pripadaju
        hrišćanskoj i muslimanskoj verskoj zajednici smatraju se najstarijim
        arhivskim bibliotekama na Kosovu i Metohiji. Biblioteka je zvanično
        otvorena novembra 1944. godine u Prizrenu. Godine 1982. biblioteka je
        premeštena u svoju sadašnju zgradu u Prištini, a tokom vremena promenila
        je nekoliko imena.
      </p>

      <img src={pristina3} alt="Muzej Kosova i Metohije" />

      <p>
        Muzej Kosova i Metohije nalazi se u Prištini i osnovan je 1949. godine
        od strane vlasti FNR Jugoslavije. To je najveći muzej na Kosovu i
        Metohiji, smešten u zgradi iz 1889. godine koja je izgrađena u
        austriјsko-ugarskom stilu i koja je prethodno bila sedište visoke vojne
        komande.
        <br />
        <br />
        Ovaj muzej je prva institucija kulturnog nasleđa na Kosovu i Metohiji,
        osnovana s ciljem očuvanja, restauracije, konzervacije i prezentacije
        pokretnog nasleđa na ovom području. Muzej se nalazi u posebnoj zgradi
        koja je značajna i sa arhitektonske strane, kao i zbog svoje lokacije u
        starom jezgru gradskog centra.
      </p>

      <img src={pristina4} alt="Noćni život u Prištini" />

      <p>
        Noćni život u Prištini je živahna i dinamična, sa brojnim barovima,
        restoranima i klubovima koji privlače lokalne i međunarodne posetioce.
        Grad je poznat po opuštenoj atmosferi, a popularna mesta poput Trga
        Majke Tereze i ulica u centru grada nude širok izbor zabave, muzike i
        hrane. Mladi ljudi često izlaze u kafiće i noćne klubove gde se
        održavaju koncerti i tematske večeri. Priština je takođe domaćin
        različitim kulturnim događanjima i manifestacijama, čime obogaćuje noćnu
        scenu i nudi nešto za svakog.
      </p>

      <img src={pristina5} alt="Park prirode Grmija" />

      <p>
        Park prirode Grmija smešten je na istočnom rubu Velikokosovske kotline,
        u neposrednoj blizini Prištine, i predstavlja glavno izletište za
        stanovnike grada. Njegovu severnu granicu čini dolina reke Prištavke,
        dok južnu granicu čine reke Mramorska, Badovačka i Gračanka.
        Najistaknutiji reljefni oblik je venac Butovačkog brega (1.095 m), koji
        je takođe hrdogeografsko čvorište reka Prištavke, Veluše i Gračanke.
        Najznačajnija geomorfološka celina je izvorni basen Veluše.
      </p>
    </div>
  );
};
