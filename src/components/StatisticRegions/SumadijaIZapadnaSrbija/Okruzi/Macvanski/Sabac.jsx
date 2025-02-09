import sabac1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Sabac/sabac1.jpg";
import sabac2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Sabac/sabac2.jpg";
import sabac3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Sabac/sabac3.jpg";
import sabac4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Sabac/sabac4.jpg";
import sabac5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Sabac/sabac5.jpg";
import sabac6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Sabac/sabac6.jpg";
import sabac7 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Sabac/sabac7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const Sabac = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={sabac1} alt="Šabac 1" />

      <h2 style={{color: 'white'}}>Šabac</h2>

      <p style={{ paddingTop: "50px", marginTop: "-10px" }}>
        Šabac je jedan od značajnijih i prepoznatljivijih gradova u Srbiji,
        smešten u severozapadnom delu zemlje, na tromeđi Mačve, Pocerine i
        Posavine, na desnoj obali reke Save. Grad pokriva površinu od 795 km² i
        sastoji se od 49 katastarskih opština i 52 naselja, sa ukupnim brojem
        stanovnika od 122.893. Granici sa opštinama Bogatić, Loznica, Vladimirci
        i Koceljeva. U njegovom zaleđu nalaze se tri mikroregije: Mačva na
        zapadu, Pocerina na jugu i Posavina na istoku. Šabac se nalazi na 80
        metara nadmorske visine i ima ravničarski, nizijski i dolinski karakter.
        Saobraćajno je odlično povezano sa okolinom.
      </p>

      <img src={sabac2} alt="Šabac 2" />

      <p style={{ marginTop: "-10px" }}>
        Centar Šapca je atraktivno i dinamično područje koje nudi brojne
        turističke sadržaje i znamenitosti. Grad je bogat istorijskim, kulturnim
        i arhitektonskim nasleđem, a njegov centralni deo je središte kulturnih
        i društvenih dešavanja. U centru Šapca se nalaze i značajne institucije,
        kao što su Muzej Šabac, gde posetioci mogu saznati više o istoriji grada
        i regiona, kao i Narodna biblioteka, koja nudi bogat fond knjiga i
        organizuje različite kulturne događaje. Za ljubitelje kulture, u centru
        grada se povremeno organizuju koncerti, izložbe i pozorišne predstave, a
        Šabačko pozorište je jedno od važnih kulturnih mesta. Šabac je takođe
        poznat po manifestacijama kao što su Šabački festival i proslava
        Mišarske bitke, koje privlače posetioce iz zemlje i inostranstva. Sve u
        svemu, centar Šapca je savršen za sve one koji žele da uživaju u
        istoriji, kulturi i životnoj energiji ovog grada.
      </p>

      <img src={sabac3} alt="Gradski park Šabac" />

      <p style={{ marginTop: "-10px" }}>
        Gradski park u Šapcu, osnovan u drugoj polovini 19. veka na mestu bivše
        Jevremove bašte, predstavlja jedan od omiljenih prostora za opuštanje i
        rekreaciju. U parku se nalaze biste značajnih ličnosti, kao što su Kneza
        Ive od Semberije, Kosta Abrašević i Janko Veselinović, čime se odaje
        počast kulturnoj baštini. Park je takođe dom dvema fontanama, koje
        pružaju osveženje tokom letnjih meseci, i sportskim terenima koji su
        popularno mesto za fizičke aktivnosti i druženje. Šetajući parkom,
        dolazite do Knez Mihailove ulice, gde možete uživati u hladu jorgovana,
        čije su grane bile inspiracija za pesmu "Ulica jorgovana", koju je
        šabački pesnik Ivan Glišić napisao i koja je postala veliki
        jugoslovenski hit sedamdesetih godina.
      </p>

      <img src={sabac4} alt="Narodni Muzej Šabac" />

      <p style={{ marginTop: "-10px" }}>
        Narodni muzej u Šapcu osnovan je 1934. godine, a od 1954. godine smešten
        je u zgradu bivše Polugimnazije, u kojoj se i danas nalazi. Na 800 m²
        izložbenog prostora nalaze se galerija za izložbe i deo stalne postavke.
        Muzej u Šapcu posjeduje bogate muzejske zbirke koje obuhvataju period
        praistorije, antike i numizmatike. Posebno se izdvaja zbirka likovne
        umetnosti, koja uključuje dela značajnih umetnika kao što su Stevan
        Čalić, Mara Lukić-Jelešić, Branko Lala Stanković, Milić od Mačve i drugi
        poznati slikari iz šabačkog kraja. Istorijsko odeljenje muzeja čuva tri
        odlikovanja koja je Šabac dobio zbog stradanja u Prvom svetskom ratu:
        Francuski ratni krst sa palminom grančicom, Češkoslovački ratni krst i
        Karađorđevu zvezdu sa mačevima 4. reda. Etno-zbirka je najatraktivniji
        deo stalne postavke muzeja, koja prikazuje enterijer seoske kuće sa
        ognjištem, oko kojeg se odvijao svakodnevni život porodice.
      </p>

      <img src={sabac5} alt="Šabačka tvrđava"/>
      <p>
        Šabačka tvrđava, tihi svedok prošlih vremena na desnoj obali Save,
        vekovima je odolevala sukobima koji su zadesili grad Šabac. I danas,
        njeni ostaci, nekadašnje artiljerijsko utvrđenje, prkose vetrovima sa
        reke. Njena pozicija, tik uz Savu, označava i kraj i početak današnjeg
        grada Šapca. Prva tvrđava na ovom mestu podignuta je 1470. godine, dok
        današnja datira iz 17. veka. Prethodnik današnje tvrđave bila je masivna
        građevina koja je prema mišljenju stručnjaka služila kao odbrambeni
        štit, jer se nalazila na granici, uz reku Savu. Bila je to vrsta zaštite
        za sve one koji su pokušavali da pređu Savi i nastave put ka Evropi. O
        njenoj burnoj istoriji svedoči činjenica da je više od deset puta
        prelazila iz ruku u ruke. Današnje utvrđenje, novijeg datuma, ima osnovu
        pravilnog četvorougla sa po jednom kružnom kulom na svakom od temena.
        Slične tvrđave mogu se pronaći duž obala reka Save i Dunava. Ostatci
        starih gradova otkrivaju dramatičnu priču o usponu, padu i obnovi srpske
        države. U srednjem veku, Srbija je imala više od 200 „tvrdih gradova“,
        od kojih su mnogi nastali u vreme vladavine Nemanjića.
      </p>

      <img src={sabac6} alt="Gospodar Jevremova ulica Šabac" style={{ marginBottom: "-10px" }} />
      <p>
        Gospodar Jevremova ulica je posebna celina koja je, zahvaljujući svojim
        istorijskim i kulturnim spomenicima, stekla status kulturno-istorijskog
        dobra. Danas se može pohvaliti autentičnim izgledom, iako je tokom svoje
        istorije prošla kroz mnoge promene i obnavljanja. Ova ulica je nazvana
        po Jevremu Obrenoviću 1890. godine, a od samog početka bila je deo
        centra grada Šapca. Kroz nju je prolazilo mnogo ljudi, a ovde se
        razvijala trgovina i društveni život, naročito među uglednijim građanima
        koji su u ovoj ulici gradili svoje kuće. U početku je ulica imala
        orijentalni karakter, ali je tokom druge polovine 19. veka počela da se
        menja pod uticajem srednjoevropske arhitekture. Na početku 20. veka,
        nove moderne zgrade su počele da prete da unište autentičan izgled
        ulice. U tom periodu srušen je i konak Gospodara Jevrema, što je
        pokrenulo inicijativu za očuvanje njenog karakterističnog izgleda. Danas
        je ovaj prostor obnovljen i zaštićen kao kulturno-istorijska celina.
      </p>

      <img src={sabac7} alt="Saborni hram Svetih Prvovrhovnih Apostola Petra i Pavla u Šapcu" style={{ marginBottom: "-10px" }} />
      <p>
        Saborni hram Svetih Prvovrhovnih Apostola Petra i Pavla u Šapcu, poznat
        u pisanim izvorima i u narodnom govoru kao "šabačka crkva", predstavlja
        katedralnu crkvu šabačkih episkopa i najstariju do danas očuvanu crkvu
        na teritoriji grada Šapca. Takođe, ovo je jedna od najstarijih crkava u
        okviru današnje Šabačke eparhije. Izgradnja Sabornog hrama u Šapcu
        odvijala se u periodu nakon velikih i krvavih ustanka srpskog naroda za
        slobodu, vođenih pod vođstvom Karađorđa i Miloša, od 1804. do 1815.
        godine. Ovaj period označava početak nove epohe za srpski narod, koji je
        živeo unutar granica tadašnjeg Beogradskog pašaluka. Srbija je počela da
        se budi iz višestoljetnog sna, praveći prve korake ka boljem i mirnijem
        životu, lečeći rane iz prošlih bitaka.
      </p>
    </div>
  );
};
