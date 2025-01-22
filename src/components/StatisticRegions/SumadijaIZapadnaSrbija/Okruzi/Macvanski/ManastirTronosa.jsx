import tronosa1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ManastirTronosa/tronosa1.jpg";
import tronosa2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ManastirTronosa/tronosa2.jpg";
import tronosa3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ManastirTronosa/tronosa3.jpg";
import tronosa4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ManastirTronosa/tronosa4.jpg";
import tronosa5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ManastirTronosa/tronosa5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const ManastirTronosa = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} style={{fill: 'white'}} />
      <header></header>
      <img src={tronosa1} alt="Manastir Tronoša 1" />

      <h2>MANASTIR TRONOŠA</h2>

      <p style={{ paddingTop: "50px", marginTop: "-10px" }}>
        Prema predanju, Tronoša je svoje ime dobila po tri rečice koje nose
        vodu, a koje se kod manastira spajaju u jednu. Po Tronoškom letopisu,
        manastir je podigla Katarina, žena kralja Dragutina. Ovoj kraljevskoj
        porodici pripisuje se izgradnja više manastira i crkava: Tronoše, Tavne,
        Papraće i Rače. Odmah nakon pada Srbije pod tursko ropstvo, posle
        Kosovske bitke, mnoge srpske crkve i manastiri su uništeni. Ni Tronoša
        nije izbegla tu sudbinu. Zapaljena je i sravnjena sa zemljom. Na mestu
        gde je nekada stajao veličanstveni Dragutinov manastir ostalo je samo
        zgarište, ali i dalje sveto tlo za pravoslavni narod koji se okupljao na
        tom crkvištu, molio i palio sveće na temeljima spaljene, ali ne i
        zaboravljene Tronoše.
      </p>

      <img src={tronosa3} alt="Manastir Tronoša 2" />

      <p style={{ marginTop: "-10px" }}>
        Dolaskom Makarija Sokolovića na stolicu srpskih patrijarha 1557. godine
        i obnovom Pećke patrijaršije, u narodnom i crkvenom životu došlo je do
        nevrovatnog oživljavanja. Na narodnom saboru u Tronoši, na Uskrs 1559.
        godine, odlučeno je da se podigne novi hram na starom crkvištu. Za manje
        od godinu dana, sa manastirskog zvonika ponovo su zazvonila zvona.
        Obnovljeni manastir, osim što je nastavio sa uobičajenim bogoslužbenim i
        duhovnim aktivnostima, postao je i kulturno i duhovno središte ovog
        kraja Srbije. Učeni i snalažljivi tronoški iguman Jovan pokreće i
        organizuje prepisivačku radionicu. U ovoj radionici prepisivane su
        bogoslužbene knjige za sopstvenu upotrebu, ali i za druge crkve i
        manastire širom Srbije. Teška situacija i siromaštvo u okupiranoj i
        opljačkanoj zemlji, nedostatak papira, mastila i bogoslužbenih predmeta,
        naterali su monahe da putuju u daleku Rusiju, gde su tražili milostinju
        i nabavljali potrebne materijale.
      </p>

      <img src={tronosa4} alt="Manastir Tronoša 3" />

      <p style={{ marginTop: "-10px" }}>
        Za vreme Stefana Jovanovića, Tronoša je bila duhovni i kulturni centar
        severozapadne Srbije. U manastiru je postojala škola koja je obrazovala
        srpsku omladinu, a među učenicima bio je i dečak Vuk Stefanović Karadžić
        iz obližnjeg sela Tršića. Stefan je, osim što ga je naučio pismenosti,
        podsticao njegovu ljubav prema narodnom stvaralaštvu, narodnim junačkim
        pesmama, pričama, poslovicama i drugim umotvorinama. Zahvaljujući
        pažljivom igumanu Stefanu, Vuk je uspeo da sazna šta se nalazi u
        manastirskim knjigama, u koje mu ostali monasi nisu dozvoljavali da
        zaviri.
      </p>

      <img src={tronosa2} alt="Manastir Tronoša 4" />

      <p style={{ marginTop: "-10px" }}>
        Crkva manastira Tronoše, skromnih dimenzija, izgrađena je u obliku
        slobodnog krsta, sa kupolom iznad centralnog dela. Arhitektonsko rešenje
        ovog hrama podseća na građevine u raškom stilu. Hram je sazdan od
        lomljenog i obrađenog kamena. Kasnijim dograđivanjem baroknog zvonika
        prostor je proširen, jer se ispod zvonika nalazi glavni ulaz sa jednim
        odeljkom i pregradom između priprate i srednjeg dela crkve.
      </p>

      <img src={tronosa5} alt="Manastir Tronoša 5" />
      <p>
        Za manastir Tronošu vezan je jedan od najlepših srpskih narodnih običaja
        – zajedničko prikupljanje i darivanje velikih "ratarnih" ili "oračkih"
        voskastih sveća. Nakon što se sakupi dovoljno priloga i kupi vosak,
        kojem se dodaju ostaci neizgorenih sveća iz prethodne godine, izliju se
        sveće visine do dva metra i težine oko 50 kilograma. One se donose u
        manastir na Veliki četvrtak, pred bdenje. Kada donosioci stignu na pola
        sata udaljenosti od manastira, pucnjima iz prangiја najavljuju svoj
        dolazak. Često ih tu čeka i rađevska sveća, koja se na isti način izlije
        i donese do manastira. Kada se svi sastanu, kreću u svečanu litiju prema
        manastiru. Po dolasku u manastir, čim se čuju prangije, zvona počnu da
        zvone i zvone dok se sveće ne unesu u crkvu, pri čemu se jadarna stavi
        ispred Spasiteljeve ikone, a rađevska ispred Bogorodičine. Ove sveće
        prvi put gore na Veliki petak i pale se sve do sledećeg Velikog
        četvrtka, kada se prave nove.
      </p>
    </div>
  );
};
