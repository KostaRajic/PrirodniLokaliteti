import gruzanskoJezero1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/GruzanskoJezero/gruzanskoJezero1.jpg";
import gruzanskoJezero2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/GruzanskoJezero/gruzanskoJezero2.jpg";
import gruzanskoJezero3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/GruzanskoJezero/gruzanskoJezero3.jpg";
import gruzanskoJezero4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/GruzanskoJezero/gruzanskoJezero4.jpg";
import gruzanskoJezero5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/GruzanskoJezero/gruzanskoJezero5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const GruzanskoJezero = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(-1)}
      />
      <header></header>
      <img src={gruzanskoJezero1} alt="Gružansko jezero 1" />

      <h2>GRUŽANSKO JEZERO</h2>

      <p style={{ paddingTop: "50px" }}>
        Godine 1979. prepravljena je jedna od najdužih i vodom najbogatijih reka
        Šumadije, Gruža, prema kojoj je dobilo ime Gružansko jezero. Nakon dve
        godine izgradnje betonsko-lučne brane u mestu Pajsijević, u opštini
        Knić, formirana je višenamenska akumulacija. Punjenje jezera završeno je
        1983. godine.
      </p>

      <img src={gruzanskoJezero2} alt="Gružansko jezero 2" />

      <p>
        Gružansko jezero je domaćin velikom broju prelepih ptica, sa 87
        identifikovanih vrsta, od kojih se čak 25 gnezdi na ovom području. Ova
        raznovrsnost čini jezero atraktivnim i za posmatrače ptica. Tokom
        letnjih meseci, Gružansko jezero postaje centar okupljanja veslačkih i
        kajakaških timova iz cele Srbije. Sa dužinom od oko 10 km i strateškim
        položajem između dva brda, jezero pruža idealne uslove za razvoj vodenih
        sportova. Hemijska svojstva vode, njena gustina i vodene struje
        omogućavaju veslačima odlične uslove za trening. Kada to dozvoljavaju
        vremenski uslovi, sve više jedriličara dolazi na jezero da uživa u ovoj
        aktivnosti.
      </p>

      <img src={gruzanskoJezero3} alt="Gružansko jezero 3" />

      <p>
        Na Gružanskom jezeru često se organizuju takmičenja u ribolovu. Jezero
        je bogato raznim vrstama riba, poput šarana, štuke, soma, babuške,
        bandara, jezerske pastrmke, deverike i drugih. Najčešće se love
        deverike, babuške, crvenperke i belice, a popularna mesta za pecanje su
        oko glavnog mosta na magistralnom putu Čačak-Kragujevac i u zalivima kod
        mesta Žunje. Lokalni pecaroši ističu da otežavajući faktor predstavlja
        divlja gradnja, koja otežava pristup obali na određenim mestima oko
        jezera. Neki delovi jezera su posebno rezervisani za takmičenja, jer su
        njihove obale pogodne za sportski ribolov. Za pecanje na ovom jezeru
        potrebna je ribolovačka dozvola, budući da pripada ribarskoj zoni
        „Srbija-jugozapad“.
      </p>

      <img src={gruzanskoJezero4} alt="Gružansko jezero 4"/>

      <p>
        Jezero se prostire na 900 hektara, sa obimom od oko 40 kilometara, a
        njegova širina varira od 2800 do 3000 metara, dok dužina iznosi oko 10
        kilometara. Obala je niska, dobro razuđena i prekrivena livadama,
        šumarcima i niskim listopadnim žbunjem. Formiranje akumulacije zahtevalo
        je izgradnju nove infrastrukture, uključujući most na magistralnom putu
        M-23 (Kragujevac – Čačak) kako bi se omogućio nesmetan saobraćaj.
      </p>

      <img src={gruzanskoJezero5} alt="Gružansko jezero 5" />

      <p>
        2019. godine, Gružansko jezero bilo je domaćin 6. Evropskog prvenstva u
        pecanju iz kajaka. Ovo prestižno takmičenje prvi put je organizovano u
        Srbiji, upravo zbog izvanrednih uslova koje jezero nudi. Na takmičenju
        je učestvovalo 50 takmičara iz 15 evropskih zemalja, koji su se borili
        za titulu najboljeg.
      </p>
    </div>
  );
};
