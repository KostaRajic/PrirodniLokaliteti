import manastirSvetogNikole1 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/ManastirSvetogNikole/manastirSvetogNikole1.jpg";
import manastirSvetogNikole2 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/ManastirSvetogNikole/manastirSvetogNikole2.jpg";
import manastirSvetogNikole3 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/ManastirSvetogNikole/manastirSvetogNikole3.jpg";
import manastirSvetogNikole4 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/ManastirSvetogNikole/manastirSvetogNikole4.jpg";
import manastirSvetogNikole5 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/ManastirSvetogNikole/manastirSvetogNikole5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { toplickiOkurgPathRoutes } from "./ToplickiOkurgPathRoutes";

export const ManastirSvetogNikole = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(toplickiOkurgPathRoutes.home)} />
      <header></header>
      <img
        src={manastirSvetogNikole1}
        alt="Manastir Svteog Nikole kod Kuršumlije 1"
      />

      <h2>Manastir Svteog Nikole</h2>

      <p style={{ paddingTop: "50px" }}>
        Manastir Svetog Nikole u Kuršumliji je najstarija zadužbina Stefana
        Nemanje, koju je on zajedno sa obližnjim manastirima posvećenim
        Bogorodici, podigao između 1159. i 1166. godine. Manastir se nalazi na
        uzvišenju koje se uzdiže iznad grada, iznad ušća Banjske u Toplicu.
        <br />
        <br />
        Manastirska crkva je danas obnovljena. Planira se obnova celokupnog
        kompleksa, koji je od 1979. godine pod zaštitom države kao spomenik
        kulture od izuzetnog značaja.
      </p>

      <img
        src={manastirSvetogNikole2}
        alt="Manastir Svteog Nikole kod Kuršumlije 2"
      />
      <p>
        U načinu gradnje su vidljivi vizantijski uticaji (primećuju se sličnosti
        sa nikejskom crkvom Svete Sofije, carigradskim crkvama i Vlahernskom
        kapijom u okviru gradskih bedema), ali i prisustvo romanijskih elemenata
        iz priobalnih oblasti (priprota sa dve kule zvonare, slično crkvi Svetog
        Trifuna u Kotoru), što predstavlja svojevrsnu najavu Raškog stila u
        arhitekturi, koji će se razviti samo nekoliko godina kasnije.
        Unutrašnjost crkve sadrži fragmenta fresaka iz XIV veka, a manastir je
        bio prvi centar za prepisivanje u Nemanjićkoj Srbiji.
      </p>

      <img
        src={manastirSvetogNikole3}
        alt="Manastir Svteog Nikole kod Kuršumlije 3"
      />

      <p>
        Nemanja, koji je vladao Toplicom kao udeo, podigao je, pored manastira
        posvećenog Bogorodici, i manastir posvećen Svetom Nikoli. Ovo je, prema
        njegovim životopisima, dovelo do sukoba sa starijom braćom, iz kojeg je
        izašao kao apsolutni pobednik. Crkva je jednobrodna građevina sa kupolom
        koja je, po uzoru na carigradske crkve, podeljena u obliku krsne kruške.
        Oltarski prostor je trodelan, a u južnom delu izgrađen je poseban deo
        predviđen za grobnicu. Nemanjin sin Stefan (veliki župan 1196–1217,
        kralj 1217–1228) dogradio je otvoreni egzonarteks (trem) sa dve kule
        zvonare i još jednim grobnim mestom u jednoj od njih.
      </p>

      <img
        src={manastirSvetogNikole4}
        alt="Manastir Svteog Nikole kod Kuršumlije 4"
      />

      <p>
        Početkom XIV veka, kralj Milutin (1282–1321) je sa severne strane
        dogradio kapelu. Manastirska crkva je bila pokrivena olovom, kao i crkva
        obližnjeg manastira Bogorodice, zbog čega je i samo mesto (današnja
        Kuršumlija) u poznom srednjem veku i tokom ranog perioda turske vlasti
        bilo poznato kao Bela Crkva, zbog belog odsjaja Sunca na olovnim
        krovovima.
      </p>

      <img
        src={manastirSvetogNikole5}
        alt="Manastir Svteog Nikole kod Kuršumlije 5"
      />

      <p>
        Manastir je zapušten nakon Velike seobe Srba 1690. godine, kada su
        Osmanlije skinule olovni krov, čime je započelo njegovo propadanje.
        Vremenom su uništene preostale manastirske zgrade, a crkva je ostala u
        ruševinama, sa samo središnjim delom koji je pokriven 1910. godine.
        Posle Drugog svetskog rata, 1948. godine, započeti su radovi na
        istraživanju celog kompleksa i obnovi manastirske crkve, a radovi su
        završeni 2003. godine. U planu je rekonstrukcija celokupnog manastirskog
        kompleksa.
      </p>
    </div>
  );
};
