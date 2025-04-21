import gracanica1 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Gracanica/gracanica2.jpg";
import gracanica2 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Gracanica/gracanica1.jpg";
import gracanica3 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Gracanica/gracanica3.jpg";
import gracanica4 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Gracanica/gracanica4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pristinskiOkrugPathRoutes } from "./PristinskiOkrugPathRoutes";

export const ManastirGracanica = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(pristinskiOkrugPathRoutes.home)}/>
      <header></header>
      <img src={gracanica1} alt="Manastir Gračanica 1" />

      <h2>Manastir Gračanica</h2>

      <p style={{ paddingTop: "50px" }}>
        Drevni manastir Gračanica, smešten na levoj obali reke Gračanke na
        Kosovu, zadužbina je kralja Milutina. Sagrađen je između 1315. i 1321.
        godine. Udaljen samo 9 km od Prištine, poslednji je u nizu
        veličanstvenih manastira koje je kralj Milutin, "nezasiti zidatelj
        božanskih crkava" (kako ga opisuje njegov blizak prijatelj, saradnik i
        biograf arhiepiskop Danilo II), podigao u svom otadžbini i van nje.
        <br />
        <br />
        Prema narodnom predanju, kralj Milutin je pred bitku na reci Gračanki
        zaspo, a tada mu se ukazao anđeo Gospodnji koji mu je saopštio da će
        pobediti i da bi, u znak zahvalnosti za pomoć od Boga, trebalo da
        izgradi crkvu čiji će oblik biti prikazan. Kada se probudio, na nebu je
        ugledao beli oblak u obliku crkve. Pošto je zaista pobedio u bitci,
        odmah je pozvao najbolje majstore – graditelje i naredio im da započnu
        izgradnju crkve koju je video na nebu.
      </p>

      <img src={gracanica2} alt="Manastir Gračanica 2" />

      <p>
        Gračanica je sagrađena nedaleko od Lipljana, antičkog grada Ulpijane, na
        ruševinama starije crkve Bogorodice iz XIII veka, koja je bila sedište
        lipljanskih episkopa unutar novoosnovane samostalne crkvene organizacije
        Svetog Save (oko 1220. godine). Ta crkva je, pak, podignuta na temeljima
        ranohrišćanske trobrodne bazilike iz VI veka. U povelji napisanoj na
        južnom zidu kapele, kralj Milutin navodi: "Vidih rušenje i pad hrama
        Svete Bogorodice gračaničke, episkopije lipljanske, sazidah je od
        osnivanja i popisah i ukrasih iznutra i spolja." Ovo je zabeleženo u
        6830. godini, odnosno 1321. godini po Hristu.
        <br />
        <br />
        Od manastirskog kompleksa danas je ostala samo crkva, prvobitno
        posvećena Blagovestima Bogorodice (kako je navodi arhiepiskop Danilo
        II), ali se kasnije kao manastirsko posvećenje pominje praznik Uspenje
        Presvete Bogorodice. Priprota sa kulom izgrađena je nekoliko decenija
        kasnije, sa ciljem zaštite fresaka na zapadnoj fasadi. Manastir je
        pretrpeo štetu tokom Kosovske bitke, a priprota je stradala tokom
        turskih napada između 1379. i 1383. godine, kada je kula izgorila
        zajedno sa bogatom zbirkom rukopisnih knjiga.
      </p>

      <img src={gracanica3} alt="Manastir Gračanica 3" />

      <p>
        Vizantijsko-srpski stil u srpskoj arhitekturi srednjeg veka obuhvata
        period od kraja XIII veka do kraja XIV veka, a prostire se na teritoriju
        Metohije, Kosova i severne Makedonije. Tokom vladavine kralja Milutina
        razvijaju se centralne crkve tipa upisanog krsta, sa pet kupola koje su
        sa svih strana podržane svodovima (kao što su Gračanica, Staro
        Nagoričino, Bogorodica Ljeviška...).
        <br />
        <br />
        Gračanička crkva sa pet kupola uzdiže se u vis, sa složenim krovnim
        površinama koje se smenjuju u obliku kupola i polukružnih svodova.
        Osnovu hrama čine dva upisana krsta, jedan unutar drugog, pri čemu je
        centralni krst vertikalno izdignut, što omogućava da centralna kupola,
        koja se oslanja na četiri slobodna stupa, bude postepeno podignuta u
        visinu. Između krakovа krsta uzdižu se četiri manja kupola koje
        ravnomerno raspoređuju težinu i celu gornju konstrukciju. Ovaj dvostruki
        upisani krst (kvadrat u kvadratu, crkva u crkvi) predstavlja koncept
        koji je jedinstven i teško se može naći premac, kako na Istoku, tako i
        na Zapadu. Nažalost, istorija ne pamti ime genijalnog arhitekte koji je
        stvorio ovo remek-delo.
      </p>

      <img src={gracanica4} alt="Spomenik Milosu Obilicu u Gracanici" />

      <p>
        Spomenik Milošu Obiliću simbolizuje srpskog srednjovekovnog junaka, koji
        je bio spreman da žrtvuje svoj život za sveti cilj. Spomenik je prvi put
        postavljen 1983. godine u centru grada koji nosi njegovo ime, Obilić.
        Zbog svog značaja za srpski narod na Kosovu, uništen je 1999. godine, a
        zatim je ponovo postavljen u Gračanici na Vidovdan, 28. juna 2014.
        godine, nedaleko od manastira Gračanica.
      </p>
    </div>
  );
};
