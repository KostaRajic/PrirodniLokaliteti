import zvornickoJezero1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ZvornickoJezero/zvornickoJezero1.jpg";
import zvornickoJezero2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ZvornickoJezero/zvornickoJezero2.jpg";
import zvornickoJezero3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ZvornickoJezero/zvornickoJezero3.jpg";
import zvornickoJezero4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ZvornickoJezero/zvornickoJezero4.jpg";
import zvornickoJezero5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ZvornickoJezero/zvornickoJezero5.jpg";
import zvornickoJezero6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ZvornickoJezero/zvornickoJezero6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const ZvornickoJezero = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={zvornickoJezero1} alt="Zvorničko jezero 1" />

      <h2>ZVORNIČKO JEZERO</h2>

      <p style={{ paddingTop: "50px", marginTop: "-10px" }}>
        Priča o Zvorničkom jezeru počinje 1948. godine, kada su započeti
        pripremni radovi za izgradnju brane i prateće infrastrukture. Godine
        1955. jezerski basen je napunjen vodom, stvarajući prelepi vodeni
        prostor na nadmorskoj visini od 140 metara. Jezero nudi savršene uslove
        za razvoj nautičkog turizma, a njegovu obalu krase male plaže, vikendice
        i brojni ugostiteljski objekti, koji upotpunjuju lepotu ovog prirodnog
        okruženja.
      </p>

      <img src={zvornickoJezero2} alt="Zvorničko jezero 2" />

      <p style={{ marginTop: "-10px" }}>
        Zvorničko jezero je popularna turistička destinacija, posebno za
        ribolovce, koji dolaze iz različitih delova sveta u Mali Zvornik. Glavni
        razlog za ovakav interes leži u bogatom ribljem fondu jezera, koje
        skriva velike primerke različitih vrsta riba. Najzastupljenije vrste
        uključuju deveriku, ploticu, grgeča, šarana, štuku, soma, mladicu,
        pastrmku, linjaka i mnoge druge.
      </p>

      <img src={zvornickoJezero3} alt="Zvorničko jezero 3" />

      <p style={{ marginTop: "-10px" }}>
        Bogatstvo ribljeg fonda jezera, kao ključna prednost za razvoj
        ribolovnog turizma, zajedno s atraktivnim izgledom jezera i njegove
        okolice, stvorilo je potrebu za organizovanjem različitih ribolovnih
        takmičenja i razvojem manifestacijskog turizma u opštini. Ove
        manifestacije pružaju priliku da se predstavi široka i raznovrsna
        turistička ponuda opštine. Takmičenje sa najdužom tradicijom je čuvena
        Somovijada, koja se na Zvorničkom jezeru održava od 1998. godine svakog
        leta, poslednjeg vikenda u julu, i okuplja brojne ribolovce, kao i sve
        ljubitelje prirode.
      </p>

      <img src={zvornickoJezero6} alt="Zvorničko jezero 4" />

      <p style={{ marginTop: "-10px" }}>
        Nekih 4 kilometra od Malog Zvornika, u selu Sakar, nalazi se jedna od
        najlepših i najbolje uređenih plaža u okolini. Obala je ravna i
        šljunkovita, što je iskoristila lokalna zajednica da stvori pravu
        turističku atrakciju. Ova plaža je definitivno mesto koje vredi
        posetiti, ukoliko se nađete u blizini Malog Zvornika.
      </p>

      <img src={zvornickoJezero4} alt="Zvorničko jezero 5" />
      <p>
        Ovo prelepo malo jezero prostire se uzvodno kroz drinski kanjon, od
        Zvornika (Republika Srpska) i Malog Zvornika (Srbija), sve do ušća reke
        Velika reka, koja pripada opštini Mali Zvornik. Bujični nanosi okolnih
        reka i potoka, koji se ulivaju u jezero, vremenom su prekrili više od
        polovine jezerskog bazena, stvarajući erozivne naslage. Najveći doprinos
        ovom procesu dale su reke Drinjača, Boranjska reka i Jošanica. Dodatnu
        lepotu i atraktivnost Zvorničkog jezera čine brojne manje ostruvke i
        poluostrva, nastala usled erozije i nanosa.
      </p>

      <img src={zvornickoJezero5} alt="Zvorničko jezero 6" />
      <p>
        Zvorničko jezero tokom zime pruža potpuno drugačiji, ali jednako
        fascinantan prizor. Dok zimske temperature padaju, površina jezera može
        zamrznuti, stvarajući zimski raj za ljubitelje prirode. Oko jezera, u
        zaleđu, snežne padavine prekrivaju pejzaž, a okolne šume postaju tihe i
        mistične. Zimska idila često privlači ljubitelje mirnog okruženja i
        fotografe, koji žele da zabeleže ovu tišinu i lepotu. Iako zimski uslovi
        smanjuju aktivnosti kao što je nautički turizam, jezero u ovom periodu
        postaje mirno utočište za one koji žele da uživaju u spokojnom
        okruženju, dok priroda prelazi u zimski san.
      </p>
    </div>
  );
};
