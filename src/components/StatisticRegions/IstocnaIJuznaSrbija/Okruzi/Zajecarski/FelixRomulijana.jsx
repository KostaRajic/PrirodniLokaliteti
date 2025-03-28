import gamzigrad1 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/FeliksRomulijana/feliksRomulijana1.jpg";
import gamzigrad2 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/FeliksRomulijana/feliksRomulijana2.jpg";
import gamzigrad3 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/FeliksRomulijana/feliksRomulijana3.jpg";
import gamzigrad4 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/FeliksRomulijana/feliksRomulijana9.jpg";
import gamzigrad5 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/FeliksRomulijana/feliksRomulijana5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const FelixRomulijana = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={gamzigrad1} alt="Gamzigrad 1" />

      <h2>Felix Romulijana - Gamzigrad</h2>

      <p style={{ paddingTop: "50px" }}>
        Feliks Romulijana bila je jedna od najveličanstvenijih građevina kasne
        antike, a njen značaj i raskoš mogli bi se uporediti s najpoznatijim
        srednjovekovnim katedralama i impresivnim novovekovnim dvorcima. Ovo
        arheološko nalazište, čije ime nosi simboliku sreće (Felix Romuliana),
        očarava svojim monumentalnim ostacima palata i moćnih zidina. Dok
        istražujemo njegovu bogatu istoriju, postajemo svesni prolaznosti
        ljudskih carstava i religija – moći koje su nekada oblikovale svet, da
        bi zatim, u samo nekoliko decenija, iščezle bez traga.
      </p>

      <img src={gamzigrad2} alt="Felix Romulijana 1" />

      <p>
        Palata je podignuta krajem 3. i početkom 4. veka nove ere, u periodu
        tetrarhije – sistema vladavine u kome su Rimskim carstvom upravljala
        četvorica vladara: dvojica avgusta i dvojica cezara. Jedan od njih bio
        je i graditelj Feliks Romulijane, Gaj Valerije Maksimilijan Galerije,
        sin žene varvarskog porekla, koja je pobegla preko Dunava, i skromnog
        rimskog stočara. Zbog svog porekla, Galerija je tokom života pratio
        nadimak Armentarius (stočar). U znak poštovanja prema svojoj majci
        Romuli, koju je izuzetno cenio, palatu je nazvao po njoj – Feliks
        Romulijana.
      </p>

      <img src={gamzigrad3} alt="Gamzigrad 2" />

      <p>
        Galerijev uspon do carskih visina bio je neverovatno brz, a njegova
        društvena pokretljivost nadmašuje čak i ono što danas nazivamo
        „američkim snom“. Njegov put ka moći trasirale su vojne pobede, koje su
        ga učinile poznatim i cenjenim kod moćnog Dioklecijana. Ne obazirući se
        na Galerijevo skromno poreklo – sin varvarke i rimskog stočara –
        Dioklecijan ga je posinio i oženio svojom ćerkom Valerijom.
        <br />
        <br />
        Kao vrhunski vojskovođa, Galerije je 297. godine izvojevao značajnu
        pobedu nad Persijancima. U rodnoj Priobalnoj Dakiji započeo je izgradnju
        raskošne palate, želeći da ostavi trajni trag u svom zavičaju. Palatu je
        nazvao Romulijana, u čast svoje majke Romule, dok odrednica Feliks, koja
        se može prevesti kao „srećna“, u ovom kontekstu zapravo označava
        božansku zaštitu.
        <br />
        <br />
        Važno je istaći da je na području današnje Srbije rođeno čak 16 rimskih
        imperatora – više nego u bilo kom delu nekadašnjeg Rimskog carstva, osim
        same Italije.
      </p>

      <img src={gamzigrad4} alt="Felix Romulijana 2" />

      <p>
        Feliks Romulijana je dugo smatrana običnim rimskim utvrđenjem (castrum),
        sve dok arheološka istraživanja nisu otkrila da je reč o raskošnom
        kompleksu carske palate. Okružena je zidinama na tri nivoa, što je dugo
        zbunjivalo istraživače i podsticalo teoriju da je reč isključivo o
        vojnom utvrđenju – što je delovalo logično s obzirom na blizinu
        Dunavskog limesa.
        <br />
        <br />
        Međutim, unutar ovih moćnih zidina otkriveni su ostaci carske
        rezidencije i hramova posvećenih raznim paganskim božanstvima – ne samo
        rimskog panteona, već i bogova istočnjačkog porekla.
      </p>

      <img src={gamzigrad5} alt="Gamzigrad 3" />

      <p>
        Galerije je bio ambiciozan i nesumnjivo kontroverzan čovek.
        Uživao je u životu, dobroj hrani, vinu i zabavama. Ipak, ostao je do
        kraja odan svojoj majci Romuli i poočimu tastu, moćnom Dioklecijanu. Njegov
        uzor bio je bog Dionis, zaštitnik vina, uživanja i prirode, čiji su
        likovi ovde sačuvani na mozaicima i u statuama.
        <br />
        <br />
        Galerijevo duboko poštovanje prema Dionisu može se protumačiti i kroz
        njegovu želju da sebe i svoju majku uzdigne na božanski nivo. Baš kao
        što je Dionis uzneo svoju majku Semelu na Olimp nakon svog trijumfa u
        Indiji, Galerije – Novi Dionis – želeo je da posle pobede nad
        Persijancima obezbedi sebi i svojoj majci besmrtnost.
      </p>
    </div>
  );
};
