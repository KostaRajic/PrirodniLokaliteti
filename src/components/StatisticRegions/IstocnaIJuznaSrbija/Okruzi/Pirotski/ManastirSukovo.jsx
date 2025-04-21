import manastirSukovo1 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ManastirSukovo/manastirSukovo1.jpg";
import manastirSukovo2 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ManastirSukovo/manastirSukovo2.jpg";
import manastirSukovo3 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ManastirSukovo/manastirSukovo3.jpg";
import manastirSukovo4 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ManastirSukovo/manastirSukovo4.jpg";
import manastirSukovo5 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ManastirSukovo/manastirSukovo5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pirotskiOkrugPathRoutes } from "./PirotskiOkrugPathRoutes";

export const ManastirSukovo = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(pirotskiOkrugPathRoutes.home)}
        style={{ fill: "white" }}
      />
      <header></header>
      <img src={manastirSukovo1} alt="Manastir Sukovo 1" />

      <h2>Manastir Sukovo</h2>

      <p style={{ paddingTop: "50px" }}>
        Sukovski manastir nalazi se u neposrednoj blizini sela Sukovo, 18 km
        istočno od Pirota, na desnoj obali reke Jerme, okružen vrletima gustog
        šumovitog brda Carev kamen. Zbog svoje zaklonjenosti od glavnog puta i
        impresivnog prirodnog okruženja, guste šume i neposredne blizine same
        klisure reke Jerme, Sukovski manastir već pri prvom susretu ostavlja
        snažan emotivni utisak spokoja i duhovnog mira. Iako, nažalost, još uvek
        nema dokumentovanih dokaza o postojanju starijeg, čak i ranehrišćanskog
        sakralnog objekta na mestu današnjeg manastirskog hrama, istoričari ne
        isključuju mogućnost da se ta prvobitna građevina datira u IV vek.
        Današnji izgled manastira posvećenog Uspenju Presvete Bogorodice, čiji
        je kult bio poštovan na ovom području, svakako potiče iz perioda
        1857-1859. godine, o čijem postanku postoji zanimljivo narodno predanje
        koje je u velikoj meri doprinosilo popularnosti njegove istorije i dalo
        mu karakterističnu folklornu notu.
      </p>

      <img src={manastirSukovo2} alt="Manastir Sukovo 2" />

      <p>
        Današnje celokupno manastirsko imanje pripadalo je Turčinu Sali-begu iz
        Pirota, koji je imao sina jedinca po imenu Emin, te je on često boravio
        na tom mestu. Jednom, šetajući imanjem, Sali-beg sreće Veљu, siroče iz
        Velikog Sela blizu Krupca, koji je na mestu današnje crkve čuvao ovce i
        zaspao. Veљa je bio neobično dete. Voleo je da sanja, a u snovima mu se
        često, kao i tada, javljala Presveta Bogorodica, okružena zborovima
        anđela. Tom prilikom mu je u snu rekla da na tom mestu podigne manastir.
        Nakon što se krupački pop Jovan Madić, koji je Veљu prihvatio kao sina,
        uverio u istinitost Veљinih snova, naredio je da se na mestu zvanom
        "Crkvište" otkopa manastir. Veљa se odmah, sa još nekoliko meštana,
        hrabro prihvatio posla, dok nisu naišli na ikonu i kandilo u zemlji, što
        je ukazivalo na postojanje prethodnih temelja Božijeg hrama.
      </p>

      <img src={manastirSukovo3} alt="Manastir Sukovo 3" />

      <p>
        Mladog i bahatog Emina razbesaše ova dešavanja, te je hteo da obezvrti
        ovo mesto. U tom trenutku oduze mu se telo i izgubi pamet, a otac i
        majka, prestravljeni brigom, pozvaše popa Jovana u pomoć. On izgovori
        molitvu Bogorodici pred svim prisutnim meštanima, a Emini odmah bi
        lakše. Nakon što se Sali-beg pokloni ovom svetom mestu i poljubi Veljinu
        ruku, njegov sin potpuno ustade i ozdravi. Tada se Turčin Sali-beg
        obaveza da će pomoći u izgradnji hrama i zaista, ubrzo, 1856. godine,
        pop Jovan dobija carski fermana iz Konstantinopola, koji je preveo
        kasniji starešina manastira, iguman Partenije: "...kako je moja carska
        neprekidna želja da svi slojevi podanika u carstvu uživaju sve blagodeti
        mira i spokoja, ...da im se znanje i časti umnože,...ja sam uvažio molbu
        patrijarha i stanovnika Sukova i dozvolio da se predviđena crkva
        popravi...". 1857. godine, pop Jovan Madić proda svoje imanje u Krupcu i
        zajedno sa Veljom se nastani u Sukovu. Ubrzo, vladika Antim, Grk,
        zamonaši Veljua u Staroj crkvi u Pirotu, od kada je ovaj smerni mladić,
        blagog duhovnog bića i pronalazač Sukovskog manastira, postao monah
        Venijamin. On i monahinja Efimija prikupiše dovoljno priloga i tako se
        završila gradnja manastirske crkve, o čemu svedoči natpis iznad prozora
        na zapadnoj fasadi: POČE SE LETO 1857. ZAVRŠI SE LETO 1859.
      </p>

      <img src={manastirSukovo4} alt="Manastir Sukovo 4" />

      <p>
        Hram Presvete Bogorodice je spolja jednostavna longitudinalna građevina
        u obliku trikona. Pomalo asimetričnog tlocrta, sa ravnim pročeljem i
        bočnim zidovima razvedenim retkim polukružnim prozorskim otvorima, po
        jedan na svakoj konhi, odaje utisak čvrste, provincijalne arhitektonske
        varijante skromnog i jednostavnog ukusa, što je opravdano imajući u vidu
        specifične istorijske okolnosti koje su bile određene balkanskim i
        svetskim ratovima, kao i čestim sporednim srpsko-turskim i
        srpsko-bugarskim sukobima. Crkvu su zidali majstori meštani od sivog
        tesanog kamena, naizmenično sa vrućim krečom, a krovna konstrukcija je
        pokrivena običnom ćeramidom, sa niskim osmerokutnim tamburom na vrhu,
        koji je ukrašen piramidom, obavijenom praktično jedinim arhitektonskim
        dekorom – kupama kanaličama i reljefnim vencem izvedenim u opeki. Ovo je
        skroman marginalni odjek monumentalnog moravskog graditeljskog stila.
        Sličnim dekoracijama u opeki ukrašeni su i polukružni otvori kojima je
        tambur oživeo. Apsida, kao i severna i južna pevnice, takođe su
        pokrivene kupama kanaličama.
      </p>

      <img src={manastirSukovo5} alt="Manastir Sukovo 5" />

      <p>
        Trijem ili priprata, kroz koju se ulazi u centralni hram, srušena je
        tokom II svetskog rata zbog slabog građevinskog materijala, ali je
        zahvaljujući nastojanjima monahinja obnovljena 1947. godine. U priprati,
        levo od ulaza, nalazi se zajednička grobnica osnivača i pronalazača
        manastira, monaha Venijamina i popa Jovana. Cela priprata je oslikana
        prema utvrđenim zahtevima u pogledu sadržaja i rasporeda fresaka, sa
        scenama Strašnog suda. Unutrašnjost centralnog hrama odlikuje se
        izuzetno dinamičnom prostornom koncepcijom, stubovima koji su vizuelno
        podeljeni na tri traveja, i širokom impostaacijom, što je freskopiscu
        omogućilo da sa neskrivenom retorikom "ispravi" sve najvažnije događaje
        iz Hristovog i Bogorodičinog života.
      </p>
    </div>
  );
};
