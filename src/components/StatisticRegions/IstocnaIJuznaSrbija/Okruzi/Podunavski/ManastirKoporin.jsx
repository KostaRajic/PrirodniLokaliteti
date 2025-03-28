import koporin1 from '../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/ManastirKoporin/manastirKoporin1.jpg'
import koporin2 from '../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/ManastirKoporin/manastirKoporin2.jpg'
import koporin3 from '../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/ManastirKoporin/manastirKoporin3.jpg'
import koporin4 from '../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/ManastirKoporin/manastirKoporin4.jpg'


import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const ManastirKoporin = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(-1)}

      />
      <header></header>
      <img src={koporin1} alt="Manastir Koporin 1" />

      <h2>Manastir Koporin</h2>

      <p style={{ paddingTop: "50px" }}>
        Manastir Koporin smešten je u dolini istoimene reke, oko 3 km od Velike
        Plane, u trouglu koji formira put Velika Plana – Smederevska Palanka –
        Rača. Nalazi se u pitomom predelu valovite Šumadije, okružen prostranim
        poljima pšenice i kukuruza, kao i zasadima vinograda i voćnjaka. Istočno
        od manastira teče Koporinska rečica, zapadno se uzdiže Koporinska kosa,
        severno se prostire plodna dolina reke Jasenice, dok se južno nalazi
        selo Radovanje. U srednjem veku ovuda je prolazio važan put koji je
        povezivao Beograd sa Carigradom. Veruje se da je bio od velikog značaja
        dok je trajala srpska srednjovekovna država, ali da je postao opasan
        tokom turske vlasti, jer su njime osmanski pljačkaški odredi lako
        dolazili do manastira.
      </p>

      <img src={koporin2} alt="Manastir Koporin 2" />

      <p>
        Tačno vreme izgradnje manastira Koporin, kao i njegov ktitor, ostaju
        nepoznati jer nisu sačuvani primarni izvori karakteristični za srpske
        srednjovekovne manastire, poput osnivačke povelje, ktitorskog natpisa
        ili ktitorske kompozicije. U pisanim izvorima iz srednjeg veka takođe
        nema podataka o njegovom podizanju i osnivaču. Prema narodnom predanju,
        manastir je podigao despot Stefan Lazarević. Njegov portret na južnoj
        strani zapadnog zida hrama ukazuje na neku vrstu njegovog učešća, ali s
        obzirom na to da u ruci ne drži model crkve – što je u tadašnjoj
        ikonografiji bio simbol ktitorstva – mnogi istraživači sumnjaju da je
        ovako skroman manastir mogao biti njegova zadužbina. Umesto toga,
        pretpostavlja se da je Stefan bio „suktitor“, odnosno da je završio već
        započeti manastir ili ga preuzeo od nekog velikaša zbog „neverstva“.{" "}
        <br />
        <br /> U nedostatku pisanih dokaza, vreme osnivanja manastira procenjuje
        se na osnovu analize starosti i sadržaja portreta despota Stefana. Ako
        se pretpostavi da je portret ujedno i ktitorska kompozicija, a budući da
        je Stefan na slici predstavljen sa simbolima despotskog dostojanstva –
        krunom, skiptrom i dolamom – može se zaključiti da je manastir podignut
        između 1402. godine, nakon bitke kod Angore u kojoj je Stefan učestvovao
        kao turski vazal, i 1427. godine, kada je preminuo.
      </p>

      <img src={koporin3} alt="Manastir Koporin 3" />

      <p>
        O poreklu imena manastira postoji više legendi, koje su svojevremeno
        zabeležili Dušan Milovanović i Dušan Mitošević. Sve te priče povezuju
        ime manastira sa glagolom „kopati“ ili „ukopavati“, a takođe pominju i
        neku vrstu učešća despota Stefana.
        <br />
        <br /> Prema tim predanjima, manastir je podignut na mestu gde je
        bratoubica sahranio svoje nevine žrtve, ili se do njega silazilo strmom
        stazom kao u ukop, ili je delimično bio ukopan u brdo Koporinske kose.
        Takođe, postoji priča da je narod svetište
        <br /><br /> S obzirom na to da je reka Koporinska, poznata i kao Koporinski
        potok ili Koporinka, starija od manastira, verovatno je da je upravo po
        njoj svetište dobilo ime. Prema novijim istraživanjima, toponim
        „Koporin“ potiče od dve reči – „kopo“, što se odnosi na rudarsko
        kopanje, i „rin“, što upućuje na rudare nemačkog porekla sa obala Rajne.
        Ovaj naziv može označavati naselje rudara poreklom iz tog kraja ili reku
        na čijoj obali su živeli. Iako su kasniji vekovi izbrisali tragove ovog
        naselja, njegovo ime ostalo je sačuvano u imenu manastira.
      </p>

      <img src={koporin4} alt="Manastir Koporin 4" />

      <p>
        Istoričarka Olga Zirojević, proučavajući turske deftere, zaključila je
        da se manastir prvobitno zvao Sveti Arhanđeo. Pošto izvori ne navode
        kojem je tačno arhanđelu bio posvećen, pretpostavlja se da je bio
        posvećen svetom arhanđelu Mihailu, svetom arhanđelu Gavrilu ili možda
        obojici, s obzirom na to da se njihov zajednički prikaz nalazi na južnom
        zidu crkve. <br />
        <br /> Međutim, u 19. veku, kada je manastir obnovljen, iz neznanja
        ili pod uticajem narodnog predanja, posvećen je svetom arhiđakonu i
        prvomučeniku Stefanu, prvom od sedmorice jerusalimskih đakona. On se u
        kalendaru Pravoslavne crkve slavi dva puta – 27. decembra (9. januara po
        novom kalendaru) i 2. avgusta (15. avgusta po novom kalendaru), na
        praznik Prenosa moštiju svetog Stefana. Manastir proslavlja upravo ovaj
        drugi praznik.
      </p>
    </div>
  );
};
