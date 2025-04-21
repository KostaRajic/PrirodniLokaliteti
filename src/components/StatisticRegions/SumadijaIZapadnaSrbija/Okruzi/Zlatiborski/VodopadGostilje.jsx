import gostilje1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/VodopadGostilje/vodopadGostilje1.jpg";
import gostilje2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/VodopadGostilje/vodopadGostilje2.jpg";
import gostilje3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/VodopadGostilje/vodopadGostilje3.jpg";
import gostilje4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/VodopadGostilje/vodopadGostilje4.jpg";
import gostilje5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/VodopadGostilje/vodopadGostilje5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zlatiborskiOkrugPathRoutes } from "./ZlatiborskiOkrugPahtRoutes";

export const VodopadGostilje = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(zlatiborskiOkrugPathRoutes.vodopadGostilje)} />
      <header></header>
      <img src={gostilje2} alt="Vodopad Gostilje 1" />

      <h2>Vodopad Gostilje</h2>

      <p style={{ paddingTop: "50px" }}>
        Vodopad Gostilje, smešten u selu Gostilje, u blizini Zlatibora, na
        padinama Čigote i Borkovca na 850 metara nadmorske visine, predstavlja
        jednu od najvećih prirodnih atrakcija u ovom regionu. Na ušću u reku
        Katušnicu, voda se sa visine od oko dvadeset metara obrušava, stvarajući
        spektakularan prizor. Ovaj vodopad spada među najlepše u Srbiji i jedno
        je od glavnih obeležja okoline. Poznat je i pod nazivom Vrelo. Nizvodno
        od vodopada, reka formira manja potoka, virove i slapove, sve dok ne
        utopi u reku Katušnicu.
      </p>

      <img src={gostilje5} alt="Vodopad Gostilje 2" />

      <p>
        U blizini vodopada postavljene su klupe za odmor, klackalice i ljuljaške
        za decu, kao i mini zoo vrt. Sedenje na klupi pored kristalno čiste vode
        koja škripi kroz kamenčiće i pada sa manjih visina stvarajući male
        slapove predstavlja pravo uživanje. Nedaleko se nalazi fudbalski teren i
        uredni bazen, koji se puni izvorskom vodom, pružajući dodatnu atrakciju
        za posetioce.
      </p>

      <img src={gostilje3} alt="Vodopad Gostilje 3" />

      <p>
        Pristup vodopadu je veoma jednostavan i omogućava posetiocima da lako
        dođu do slapova i potoka. Ovaj potok je značajan zbog svog
        hidropotencijala, koji je sredinom prošlog veka bio korišćen za
        snabdevanje Gostilja električnom energijom. Voda u okolini je veoma
        hladna, a boravak u neposrednoj blizini vodopada pruža osećaj kao pod
        hladnim tušem, što je savršeno osveženje tokom vrućih letnjih dana.
        Milioni vodenih kapi, uz zvuke prirode, raspršuju se dok padaju od vrha
        vodopada, dodirujući prve kamenčiće na svom putu.
      </p>

      <img src={gostilje4} alt="Vodopad Gostilje 4" />

      <p>
        Prostor oko vodopada je potpuno prilagođen turističkim posetama. U
        poslednjim godinama, vodopad je postao mnogo posećeniji, naročito u
        proleće kada je najlepši, a priroda bujna, čineći celokupni pejzaž još
        impresivnijim. Okolinu vodopada čine šume bora i bukve, kao i raznovrsno
        lekovito bilje. Na putu do vodopada nalazi se restoran Gostiljska vrela,
        idealno mesto za uživanje u obroku ili piću. Na meniju restorana, osim
        tradicionalnih jela, može se uživati u specijalitetima poput žara
        pastrmke iz obližnjeg ribnjaka kalifornijske pastrmke.
      </p>

      <img src={gostilje1} alt="Vodopad Gostilje 5" />
      <p>
        Prema starom predanju, na ovom vodopadu su se nekada kupale vile, koje
        su svojim magičnim moćima povezivale zaljubljene parove. Veruje se da,
        kada momak i devojka prođu kroz vodopad, zauvek ostaju zajedno, a njihov
        život biće ispunjen lepotom i ljubavlju, posut cvećem. Danas, posetioci
        imaju jedinstvenu priliku da osete snagu i lepotu netaknute prirode,
        uživajući u njenoj neukrotivosti. Stene prekrivene mahovinom, iz kojih
        izbija voda, deluju kao iz bajke. Ovaj prirodni fenomen, snaga vode i
        divna priroda, okupljeni su na ovom mestu u srcu planine Zlatibor, koji
        je pravo utočište netaknute lepote. Bistra, providna voda daje ovom
        kraju posebnu svežinu i harmoniju.
      </p>
    </div>
  );
};
