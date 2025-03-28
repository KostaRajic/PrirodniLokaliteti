import bovanskoJezero1 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/BovanskoJezero/bovanskoJezero1.jpg";
import bovanskoJezero2 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/BovanskoJezero/bovanskoJezero2.jpg";
import bovanskoJezero3 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/BovanskoJezero/bovanskoJezero3.jpg";
import bovanskoJezero4 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/BovanskoJezero/bovanskoJezero4.jpg";
import bovanskoJezero5 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/BovanskoJezero/bovanskoJezero5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const BovanskoJezero = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={bovanskoJezero1} alt="Bovansko Jezero 1" />

      <h2>Bovansko Jezero</h2>

      <p style={{ paddingTop: "50px" }}>
        Mesto Bovan, koje se nalazi između Sokobanje i Aleksinca, domaćin je
        veštačkog Bovanskog jezera, koje je nastalo kao deo sistema
        hidrocentrale Đerdap. Iako je njegovo osnovno značenje u tehnološkim
        funkcijama, Bovansko jezero je vremenom steklo reputaciju zahvaljujući
        prirodnim lepotama i turističkim potencijalima, pa je danas postalo
        jedno od popularnijih odredišta u ovom delu Srbije.
      </p>

      <img src={bovanskoJezero2} alt="Bovansko Jezero 2" />

      <p>
        Bovansko jezero je nastalo izgradnjom brane na reci Sokobanjskoj
        Moravici, čime su stvorena brojna atraktivna mesta za kupanje i
        opuštanje. Jezero je dugo 8 kilometara i široko 500 metara, a
        projektovano je tako da akumulira vodu iz planinskih reka i obezbeđuje
        snabdevanje Aleksinca pijaćom vodom. Zbog svoje važnosti u različitim
        aspektima, ovo jezero je postalo prepoznatljivo, a poslednjih godina
        posebno se izdvaja kao omiljena destinacija za odmor i zabavu.
      </p>

      <img src={bovanskoJezero3} alt="Bovansko Jezero 3" />

      <p>
        Bovansko jezero, smešteno u prelepom prirodnom okruženju, deluje kao da
        je oduvek bilo deo ovog kraja. Njegove obale su lako pristupačne, a
        prostrane plaže savršene su za sve koji žele da se opuste i osveže u
        bistroj vodi tokom vrelih letnjih dana. Jezero je pogodno i za mlade i
        za starije posetioce, nudeći raznovrsne aktivnosti.
        <br />
        <br />
        Plivanje i kupanje su posebno prijatni zahvaljujući čistoj i svežoj
        vodi. Ljubitelji ribolova uživaće u velikoj raznovrsnosti riba koje
        nastanjuju jezero, kao što su som, smuđ, šaran, mrena, a povremeno se
        može uloviti i štuka. Za one koji vole sportove na vodi, jezero je
        idealno za plovidbu, jedrenje ili splavljanje. Takođe, u okolini se
        nalaze prostrana mesta pogodna za piknike, roštiljanje i kampovanje, što
        je odlično za one koji žele da uživaju u prirodi.
      </p>

      <img src={bovanskoJezero4} alt="Bovansko Jezero 4" />

      <p>
        U blizini sela Bovan imate priliku da iznajmite pedalinu ili čamac i
        uživate u opuštajućoj vožnji po jezeru. Ovo je savršeno mesto za
        opuštanje, zabavu i odmor, jer će vas mirno okruženje Bovanskog jezera
        potpuno opustiti i razmaziti. Zbog svega toga, ovo jezero predstavlja
        idealnu destinaciju za letnji odmor, ali i odličnu alternativu za one
        koji žele uživanje u prirodi, a ne na moru.
      </p>

      <img src={bovanskoJezero5} alt="Bovansko Jezero 5" />

      <p>
        Bovansko jezero takođe domaćin je jedriličarske regate "Bovan", koja se
        održava u aprilu i septembru, a možete joj prisustvovati i uživati u
        uzbudljivim takmičenjima. Pored toga, često se organizuju i razna
        ribolovačka takmičenja, koja privlače ljubitelje ribolova sa svih
        strana.
      </p>
    </div>
  );
};
