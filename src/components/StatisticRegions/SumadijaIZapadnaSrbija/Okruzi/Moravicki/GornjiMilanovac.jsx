import gMilanovac1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/GornjiMilanovac/gornjiMilanovac1.jpg";
import gMilanovac2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/GornjiMilanovac/gornjiMilanovac2.jpg";
import gMilanovac3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/GornjiMilanovac/gornjiMilanovac3.jpg";
import gMilanovac4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/GornjiMilanovac/gornjiMilanovac4.jpg";
import gMilanovac5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/GornjiMilanovac/gornjiMilanovac5.jpg";
import gMilanovac6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/GornjiMilanovac/gornjiMilanovac6.jpg";
import gMilanovac7 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/GornjiMilanovac/gornjiMilanovac7.jpg";
import gMilanovac8 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/GornjiMilanovac/gornjiMilanovac8.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { moravickiOkrugPathRoutes } from "./MoravickiOkrugPathRoutes";

export const GornjiMilanovac = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(moravickiOkrugPathRoutes.home)}
      />
      <header></header>
      <img src={gMilanovac1} alt="Gornji Milanovac" />

      <h2>Gornji Milanovac</h2>

      <p style={{ paddingTop: "50px" }}>
        Opština Gornji Milanovac pripada Moravičkom okrugu, koji se nalazi u
        centralnom delu Republike Srbije, zajedno sa opštinama: Čačak, Lučani i
        Ivanjica. Opština Gornji Milanovac smeštena je na dodiru zapadne Srbije,
        Gruže i Pomoravlja, u jugozapadnom delu Šumadije. Obuhvata prostor
        podgorina planina Rudnika, Suvobora i Maljena. Teritorija opštine Gornji
        Milanovac sa severa se graniči sa područjima opština Ljig i Aranđelovac,
        sa severoistoka i istoka sa područjima opština Topola i Kragujevac, sa
        jugoistoka i juga sa područjima opština Knić i Čačak, dok sa zapada i
        severozapada graniči sa opštinama Požega i Mionica.
      </p>

      <img src={gMilanovac7} alt="Gornji Milanovac" />

      <p>
        Gornji Milanovac je najveće naselje koje ima sve karakteristike modernog
        grada. Malo je gradskih naselja poput Gornjeg Milanovca, koji se od svog
        osnivanja razvijao prema urbanističkom planu. Ulice su projektovane tako
        da su dovoljno široke za savremen saobraćaj i gotovo sve se seku pod
        pravim uglom. U centru naselja nalazi se prostran i lepo uređen trg sa
        kojeg se pružaju pogledi prema Rudniku, Ždrebanju i Vujnu, što
        predstavlja posebnu vrednost grada. Na početku se Gornji Milanovac
        razvijao na desnoj strani Despotovice, ali se nakon rata brzo širio, pa
        je gradnja prešla i na levu obalu reke.
      </p>

      <div className="displayFlexClassic">
        <img
          src={gMilanovac3}
          alt="Takovo"
          style={{ padding: "50px", width: "47%" }}
        />

        <img
          src={gMilanovac2}
          alt="Takovo 2"
          style={{ padding: "50px", width: "47%" }}
        />
      </div>

      <p>
        U blizini Gornjeg Milanovca nalazi se naselje Takovo, koje je postalo
        simbol narodnog otpora protiv osmanske vlasti. Takovski ustanak, koji je
        izbio 1815. godine, predstavlja jedan od ključnih trenutaka u istoriji
        borbe Srbije za slobodu. Bio je to drugi u nizu ustanka protiv Turaka, a
        vođa ustanka bio je knez Miloš Obrenović, koji je predvodio pobunu
        srpskog naroda protiv Osmanskog carstva. Ustanici su, u tom trenutku,
        osvojili važno strateško područje, a sam ustanak je imao veliki uticaj
        na dalji razvoj srpskog otpora i formiranje autonomije Srbije unutar
        Osmanskog carstva. Takovo se smatra mestom gde je Miloš Obrenović
        podigao ustanak, te je poznato kao istorijsko središte borbe za slobodu.
        Danas se na tom području nalazi i spomenik, koji podseća na važnost
        Takovskog ustanka za istoriju Srbije.
      </p>

      <img src={gMilanovac4} alt="Gornji Milanovac 3" />

      <p>
        Grebenom Rudnik-Suvobor opština je podeljena na manji severni i znatno
        veći južni deo, a grebenom Rudnik-Vujan na veći zapadni i manji istočni
        deo. Podgorinski prostor Rudnika, Suvobora, Maljena i Vujna poznat je
        kao takovski kraj, koji je u 19. veku pripadao Rudničkoj nahiji. U
        geološkoj prošlosti ovaj prostor je predstavljao niz abrazionih
        površina, koje su putem različitih endogenih i egzogenih agenasa u
        postjezerskoj fazi oblikovale današnji reljef ovog područja. Današnji
        reljef je rezultat kombinovanog dejstva tektonskih pokreta i fluvijalne
        erozije. Tektonski pokreti su uslovili dinamiku terena, izraženu
        tektonskim uzvišenjima. Erozioni procesi su modifikovali teren, tako da
        se prvobitni tektonski oblici ne pojavljuju neposredno u crtama reljefa.
      </p>

      <img src={gMilanovac5} alt="Gornji Milanovac 4" />

      <p>
        Crkva Svetog Nikole u Staroj čaršiji, selo Brusnica (Opština Gornji
        Milanovac), zadužbina gospodara Jovana Obrenovića, podignuta je 1837.
        godine kao jednobrodna građevina sa polukružnim svodom i polukružnom
        apsidom spolja i iznutra, te masivnim trospratnim zvonikom koji se
        nadovezuje na zapadno pročelje. U zvonik se ulazi uskim kamenim
        stepeništem koje je uzidano uz crkvu sa južne strane. Fasade su izvedene
        od tesanika, ukrašene kamenim okvirima prozora i portala sa stilizovanim
        biljnim i životinjskim ornamentima. Ikonostasna pregrada je oslikana
        1851. godine u maniru zakašnjelog baroka. Autor je nepoznat, ali se na
        osnovu ikonografske kompozicije i zanatskog umeća može pretpostaviti da
        je reč o jednom od boljih majstora sredine 19. veka. Na severnom i
        južnom stubu pored ikonostasa naslikani su, tehnikom al secco, prikazi
        svetog Nikole i svetog Đorđa. Tokom 2005/06. godine izvedeni su manji
        sanacioni radovi na unutrašnjoj arhitekturi crkve i uređena je porta.
      </p>

      <img src={gMilanovac8} alt="Gornji Milanovac 5" />

      <p>
        Spomen-park Brdo mira je spomenički kompleks u Gornjem Milanovcu koji
        obuhvata oko 4,5 hektara zasađenih sa više od 3000 stabala, koja
        pripadaju 50 različitih vrsta četinarskog i listopadnog drveća, kao i
        ukrasnog šiblja. Stabla su posadili srednjoškolci iz Gornjeg Milanovca u
        periodu od 1961. do 1966. godine. Zvanično je otvoren 2. oktobra 1962.
        godine, kada su Josip Broz Tito i Leonid Iljič Brežnjev otkrili
        spomen-kosturnicu crvenoarmejaca i partizana koji su pali u borbama za
        oslobođenje Gornjeg Milanovca i Čačka. Spomen-park nema konačan oblik, a
        ostavljena je mogućnost da se dopunjava novim sadržajem od istorijskog i
        kulturno-umetničkog značaja. Kao spomenički kompleks i botanička bašta,
        predstavlja poseban pejzažni element koji krasi grad i privlači mnoge
        posetioce.
      </p>

      <img src={gMilanovac6} alt="Gornji Milanovac 6" />

      <p>
        Savinac, omiljeno izletište Milanovčana nalazi se u zaseoku Šarani 4 km od
        Takova. Prema legendi nekada davno ovde je prošao Sv. Sava po kome je i
        mesto dobilo ime, a otisak kopita njegovog konja se i danas može videti
        u kamenu. Ovde se nalaze i dva izvora mineralne vode Svetinja i Mlačac.
        Prema narodnom predanju Knez Miloš je zajedno sa ustanicima posle skupa
        u Takovu krenuvši ka Ljubiću zastao da se odmori na izvoru Svetinja u
        koritu reke Dičine gde se umio, okrepio i zakleo da će na ovom mestu
        izgraditi crkvu ukoliko pobedi Turke. I zaista, 1819. godine poćinje
        gradnju svoje prve zadužbine koju završava 2 godine kasnije posvetivši
        je Svetom Savi. 1860. godine za pokoj duše svoje supruge Ljubice
        obnavlja crkvu o čemu svedoči i natpis koji se nalazi u samom hramu. Kao
        grobna crkva porodica Obrenović i Vukomanović čuva kosti i Mine
        Vukomanović – Karadžić, čerke Vuka Karadžića, srpske slikarke i
        književnice. Preko puta crkve iznad samog izvora i reke nalazi se kafana
        u kojoj možete uživati u pogledu i žuboru reke. Pored crkve je i
        nadaleko čuveni restoran kod Mića gde gosti uživaju u specijalitetima sa
        roštilja.
      </p>
    </div>
  );
};
