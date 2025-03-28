import pokajnica1 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/ManastirPokajnica/pokajnica1.jpg";
import pokajnica2 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/ManastirPokajnica/pokajnica2.jpg";
import pokajnica3 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/ManastirPokajnica/pokajnica3.jpg";
import pokajnica4 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/ManastirPokajnica/pokajnica4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const ManastirPokajnica = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(-1)}
        style={{ fill: "white" }}
      />
      <header></header>
      <img src={pokajnica1} alt="Manastir Pokajnica 1" />

      <h2>Manastir Pokajnica</h2>

      <p style={{ paddingTop: "50px" }}>
        Manastir Pokajnica nalazi se između Velike Plane i Radovanja, u ataru
        Starog Sela, na dva kilometra od Carigradskog druma, nekada značajne
        saobraćajnice na Balkanskom poluostrvu, a danas autoputa E-75. Smešten
        je „na lepom mestu“ , u hladu obližnje šume, nedaleko od Grabovačkog
        potoka. <br />
        <br /> Posle Prvog i Drugog srpskog ustanka, kao ktitori crkava prvi put
        se pojavljuju takozvane narodne starešine – novoimenovani vojvode i
        knezovi. Podizanjem bogomolja za narod, nastojali su, između ostalog, da
        se oduže za sva krvoprolića, nepravedna bogaćenja, nasilja i
        zloupotrebe. Godine 1818, vojvoda, a kasnije knez smederevske nahije,
        Vujica Vulićević, uz podršku kneza Miloša Obrenovića i njegove supruge
        kneginje Ljubice, podiže i jednu crkvu brvnaru, koju je narod nazvao
        Pokajnicom. O godini osnivanja i ktitoru crkve svedoče zapis urezan u
        brvno pored vrata, sa zapadne strane hrama, kao i natpis na prestojoj
        ikoni svetog Đorđa: „sie cerkov ogradi gospodar Vuica za pomen 1818“.
      </p>

      <img src={pokajnica2} alt="Manastir Pokajnica 2" />

      <p>
        Prema propisima Srpske pravoslavne crkve, običaj je da crkva dobije ime
        ili po svetitelju kome je posvećena ili po svom osnivaču (ktitoru).
        Međutim, neretko se naziva i prema motivi sa kojom je osnovana. <br />
        <br />
        Namena sa kojom je vojvoda Vujica Vulićević podigao crkvu kasnije je
        odredila i njeno ime. Prema narodnom predanju i istorijskim izvorima,
        vojvoda Vujica Vulićević je u julu 1817. učestvovao u zaveri i ubistvu
        svog kuma, vođe Prvog srpskog ustanka protiv Turaka, vožda Đorđa
        Petrovića – Karađorđa. Neposredno nakon ubistva, koje se dogodilo u
        današnjem Radovanjskom lugu, vojvoda je napustio mesto zločina noseći sa
        sobom voždovu glavu, njegovo odelo, sablju, ordenje i bisage sa 4000
        dukata.
        <br />
        <br /> Međutim, već na obližnjem proplanku, gde je zastao da se odmori,
        suočio se sa svojom savešću i težinom učinjenog zločina. Tada je odlučio
        da podigne crkvu kako bi okajao svoje grehe. U tome su ga podržali
        bogobojazljiva kneginja Ljubica i njen muž, knez Miloš, koji je odobrio
        da se pronađenih 4000 dukata iskoristi za izgradnju.
        <br />
        <br />
        Za manje od godinu dana, na mestu gde je nekada vojvoda ubeđivao
        Karađorđa da napusti Srbiju, nikla je mala crkva. Kako je bila
        sastavljena od tesanih hrastovih debala iz obližnje šume, smatra se
        pretečom svih kasnijih crkava brvnara koje su građene širom Srbije nakon
        dobijanja Hatišerifa i slobode veroispovesti (1830). <br />
        <br /> Iako je crkva zvanično nazvana Velikoplanska, narod ju je, u znak
        sećanja na pokajanje Vujice Vulićevića, nazvao Pokajnica.
      </p>

      <img src={pokajnica3} alt="Manastir Pokajnica 3" />

      <p>
        Pokajnica je u početku služila kao parohijska crkva za okolna naselja:
        Staro Selo, Novo Selo, Rakinac, Radovanje i Veliku Planu. U tom periodu,
        međutim, nije imala značajniju ulogu u opštim zbivanjima niti u
        kulturno-prosvetnom radu. <br />
        <br /> Godine 1954. episkop Hrizostom proglasio ju je muškim manastirom,
        a četrdeset godina kasnije, 1992, episkop Sava (Andrić) promenio joj je
        status u ženski. Starateljstvo nad manastirom poverio je igumaniji
        Ilariji i sestrinstvu, koje je dovedeno iz manastira Sveta Trojica sa
        Kosova i Metohije. <br />
        <br />
        Prvi konzervatorski radovi na crkvi izvedeni su nakon Drugog svetskog
        rata, 1951. godine, a 1979. manastir je proglašen kulturnim dobrom od
        izuzetnog značaja.
      </p>

      <img src={pokajnica4} alt="Manastir Pokajnica 4" />

      <p>
        Građevina se, za razliku od većine crkava brvnara, ne odlikuje
        pravougaonom već kružnom jednobrodnom osnovom. Podeljena je na četiri
        nejednaka dela: trem, pripratu, naos i oltar. <br />
        <br /> Sedmougaoni i poluotvoreni trem, koji je naknadno podignut 1880.
        godine, oslanja se na šest stubova. Istraživači dodavanje trema tumače
        kao praktično rešenje za proširivanje crkava u vreme kada nije bilo
        sredstava za izgradnju novih i prostranijih bogomolja, ali i kao
        svedočanstvo novog, mirnog doba, kada više nije bilo potrebe za malim i
        privremenim crkvama za zbeg. <br />
        <br /> Na trem se nastavlja priprata, popločana opekom, čija je ravna
        tavanica sastavljena od profilisanih dasaka. Sa severne strane priprate
        nalaze se drvene stepenice koje vode na galeriju. Od priprate se,
        odvojen drvenom pregradom, pruža svetao i prostran naos, koji se
        nastavlja na polukružni oltarski deo. <br />
        <br /> Čitava crkva pokrivena je visokim krovom od šindre, koji je i do
        dva puta viši od zidova i završava se veoma spuštenom strehom duž ivica.
        Temelj, blago izdignut od tla, sazidan je od lomljenog kamena peščara i
        zatim betoniran. Zidovi, vrata i prozori izrađeni su od tesanih
        hrastovih greda. Crkva je u slučaju turskih napada mogla da se rasklopi
        i premesti na sigurnije mesto. <br />
        <br /> U porti, zapadno od crkve, nalazi se zvonara, postavljena na
        četiri drvena stuba, sa krovom od klisa. Zvonik je sličan onima u Takovu
        i Orašcu, ali dugo nije bio u funkciji jer Turci nisu dozvoljavali
        zvonjavu.
        <br />
        <br /> U porti se nalaze i stari konak, verovatno iz vremena izgradnje
        crkve, kao i novi konak, koji je 1998. godine osveštao patrijarh Pavle.
      </p>
    </div>
  );
};
