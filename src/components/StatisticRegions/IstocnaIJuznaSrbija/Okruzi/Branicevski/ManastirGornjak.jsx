import gronjak1 from '../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirGornjak/gornjak1.jpg'
import gronjak2 from '../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirGornjak/gornjak2.jpg'
import gronjak3 from '../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirGornjak/gornjak3.jpg'
import gronjak4 from '../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirGornjak/gornjak4.jpg'
import gronjak5 from '../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirGornjak/gornjak5.jpg'

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const ManastirGornjak = () => {
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
      <img src={gronjak1} alt="Manastir Gornjak 1" />

      <h2>Manastir Gornjak</h2>

      <p style={{ paddingTop: "50px" }}>
        Manastir Gornjak pripada Eparhiji braničevskoj Srpske pravoslavne crkve
        i predstavlja nepokretno kulturno dobro kao spomenik kulture. Nalazi se
        u dolini reke Mlave, između Petrovca na Mlavi i Žagubice, 65 km
        jugoistočno od Požarevca, odnosno na 18 km od Petrovca ka Žagubici.
        Izgrađen je u periodu od 1376–1380. godine kao zadužbina kneza Lazara.
        Prema brojnim istorijskim izvorima, manastir je neprekidno bio naseljen
        monaškim životom. Od srednjovekovnih građevina sačuvani su glavna
        manastirska crkva, posvećena Vavedenju, i kapela u pećini, posvećena
        Svetom Nikoli.
        <br />
        <br />
        Po arhitektonskoj koncepciji, gornjačka crkva pripada moravskoj školi.
        Crkva Vavedenja ima trolisnu osnovu sa kupolom. Priprata je naknadno
        dozidana, kao i zvonik sa tremom. Živopis je slabije očuvan, a 1847.
        godine preslikao ga je Živko Pavlović, slikar iz Požarevca. Freske u
        kapeli Svetog Nikole bolje su sačuvane. Poznati srpski pisac Đura Jakšić
        napisao je poemu „Put u Gornjak“.
      </p>

      <img src={gronjak3} alt="Manastir Gornjak 2" />

      <p>
        Manastir Ždrelo, kasnije nazvan Gornjak, nalazi se na maloj zaravni
        iznad leve obale Mlave, ispod strmih litica planine Ježevac. Ova
        zadužbina kneza Lazara podignuta je u predivnom i živopisnom kraju,
        toliko očaravajućem da je Đura Jakšić u oduševljenju pevao: „Od Velikog
        Sela do samoga Ždrela, ko da je vila neka ćilim razastrela.“ Felix Kanic
        je zapisao: „Zastali smo kao opčinjeni raskošnom idilom ovog predela gde
        su boravili srpski pustinjaci.“
        <br />
        <br />
        Manastir je podignut 1378. godine, kada je knez izdao osnivačku povelju,
        a patrijarh Spiridon je potvrdio svojom duhovnom vlašću. Kao motiv za
        izgradnju manastira, knez Lazar je naveo želju da učini mali prinos
        Bogorodici „s nadom u njenu pomoć na Strašnom sudu Hristovom“. Međutim,
        pored duhovnih razloga, mogući su i određeni državnički motivi. Naime,
        Lazar je tek ovladao ovim krajevima i želeo je da to obeleži svojom
        zadužbinom.
      </p>

      <img src={gronjak2} alt="Manastir Gornjak 3" />

      <p>
        Za vreme trajanja srednjovekovne srpske države, manastir je uživao sva
        prava iz osnivačke povelje, kao i veliki ugled među narodom i monaštvom.
        Za to je najviše zaslužan njegov ktitor, knez Lazar, koji se opredelio
        za Carstvo nebesko, jer „zemaljsko je za malena carstvo, a nebesko uvek
        i do veka“. Iguman manastira Gornjaka zamonašio je oko 1503. godine
        despota Đorđa Brankovića, unuka despota Đurđa, sina Stefana Slepeg,
        dodelivši mu monaško ime Maksim.
        <br />
        <br />
        Ipak, tursko ropstvo donelo je mnoge nevolje kako narodu, tako i
        monasima. Prvi turski popis beleži Vavedenje u Ždrelu zajedno sa selom
        Bistricom, sa zajedničkim obavezama. Manastir je tada bio „nastanjen“,
        što znači da su u njemu živeli monasi. U prvoj polovini XVI veka popis
        beleži šest kaluđera, dok je godišnji prihod sultanovoj blagajni iznosio
        437 akči. Kasniji popisi beleže napredak manastira – broj monaha raste
        na osam, a godišnji prihod od dažbina (najviše od vina) dostiže 2.681
        akču.
      </p>

      <img src={gronjak4} alt="Manastir Gornjak 4" />

      <p>
        Međutim, popis iz vremena Murata III (1574–1595) pokazuje pad manastira
        – broj monaha opada na dva, a godišnji prihod se smanjuje na 1.000 akči.
        U ovom popisu prvi put se javlja novo ime manastira – Gornjak. Ime ne
        potiče od zapadnog vetra, već od „gornjeg grada“. Naime, Gornjačka
        klisura prepuna je ostataka starih utvrđenja: na visu Vukanu nalazio se
        gradić, na Uzengiji još jedno utvrđenje, dok je na suprotnoj strani, na
        Ježevcu, stajala stražarska osmatračnica s koje se mogao videti ceo
        predeo, čak do Beograda. Pored reke su postojale zidine i kapije koje su
        zatvarale taj jedini i teško prohodni prolaz u Homolje.
      </p>

      <img src={gronjak5} alt="Manastir Gornjak 5" />
      <p>
        Manastir Gornjak, iako vladarska zadužbina, skromnih je dimenzija, što
        je često izazivalo sumnju u Lazarovo ktitorstvo. Mnogi manastirski
        objekti nisu sačuvani u prvobitnom stanju. Tokom Drugog svetskog rata
        spaljena su oba konaka.
        <br />
        <br />
        Danas manastirski kompleks čine manastirska crkva, kapela Grigorija
        Sinajita, Zimska kapela i kapela Svetog Ilije, kao i stari i novi konak.
        Izvan manastirskog kompleksa nalaze se dva objekta – jednospratna zgrada
        za duhovnika i goste, kao i trpezarija za vernike koji se ovde okupljaju
        za velike praznike.
      </p>
    </div>
  );
};
