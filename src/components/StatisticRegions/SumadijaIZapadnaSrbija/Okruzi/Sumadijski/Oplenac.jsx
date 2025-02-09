import oplenac1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Oplenac/oplenac6.jpg";
import oplenac2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Oplenac/oplenac1.jpg";
import oplenac3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Oplenac/oplenac2.jpg";
import oplenac4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Oplenac/oplenac3.jpg";
import oplenac5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Oplenac/oplenac4.jpg";
import oplenac6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Oplenac/oplenac5.jpg";
import oplenac7 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Oplenac/oplenac7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const Oplenac = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} style={{fill: 'white'}}/>
      <header></header>
      <img src={oplenac1} alt="Oplenac 1" />

      <h2 style={{ color: "white" }}>Oplenac</h2>

      <p style={{ paddingTop: "50px" }}>
        Hram Svetog Đorđa i mauzolej dinastije Karađorđević podignuti su na
        samom vrhu stene brda Oplenac. Kameni krš ovog uzvišenja bio je prepun
        krivih stabala jedne vrste hrasta, koja su zbog svog nepravilnog,
        razgranatog oblika, domaćini koristili za opaljenje – drvene delove na
        seoskim kolima. Tako je brdo i dobilo ime Oplenac.
      </p>

      <img src={oplenac2} alt="Oplenac 2" />

      <p>
        Izuzetan geografski položaj grada Topola, smeštenog na padinama i
        podnožju brda Oplenac, na strateškom raskršću puteva koji povezuju
        Beograd, Kragujevac, Rudnik i Šabac, sa dalekim pogledima na okolne
        bregove Šumadije i plodne predela Pomoravlja, omogućio je ovom malom
        gradu da postane političko-administrativni centar oslobođene Srbije u
        vreme Karađorđa. Stari naziv grada bio je Kameniica, po istoimenoj
        rečici koja protiče pored današnjeg naselja. Ime Topola prvi put se
        pojavljuje u zvaničnim popisima austrijskih kartografa iz početka 18.
        veka. Prema predaji, na raskrsnici pomenutih puteva, gde su se okupljali
        i odmarali trgovci, izraslo je veliko drvo topole čiji je hlad bio
        savršen za odmor putnicima. Kako je to drvo postalo poznato, mesto je
        ubrzo dobilo ime po njemu, a zatim i celokupno naselje.
      </p>

      <img src={oplenac3} alt="Crkva Svetog Djordja na Oplencu" />

      <p>
        Topola je doživela svoj prvi uspon tokom Prvog srpskog ustanka. Vođa
        srpske revolucije, Karađorđe Petrović, rođen u obližnjem selu Viševcu,
        nastanio se pred ustanak u blizini grada, u zaseoku Krćevec. Kao Vrhovni
        vođa, Karađorđe je učinio Topolu glavnim centrom oslobođene Srbije.
        Između 1811. i 1813. godine, podignut je utvrđeni grad s tropratnim
        kulama i bedemima, sa šancima za odbranu i vojnu obuku. Unutar tvrđave
        nalazili su se porodični i gostinski konaci, kao i crkva posvećena
        Presvetoj Bogorodici, poznatija kao Karađorđeva crkva. Zvonik crkve bio
        je smešten u jugoistočnoj kuli, a zvona koja su se oglasila prvi put u
        slobodnoj Srbiji izlivena su u Beogradskoj tvrđavi. Nakon sloma ustanka
        i povratka turskih trupa, Karađorđev grad je srušen i zapaljen. Nakon
        dolaska kneza Miloša i ubistva Karađorđa, Topola je izgubila svoj
        prvobitni značaj.
      </p>

      <img src={oplenac7} alt="Oplenac 3" />

      <p>
        Ovaj kraj je doživeo novi procvat tokom vladavine Karađorđevog sina,
        kneza Aleksandra, koji је sa velikom pažnjom obnovio očevu baštinu,
        vinograde i voćnjake na jugoistočnim padinama Oplenca. Tamo je izgradio
        prostranu kuću i vinogradarski podrum. Knez Aleksandar je, obnavljajući
        očevu imanje, privukao bogate i uticajne ljude, što je Topolu brzo
        transformisalo u šarmantnu varošicu sa lepšim, čvršće građenim kućama i
        prodavnicama. Međutim, povratak Obrenovića na vlast 1858. godine doveo
        je do dužeg perioda stagnacije u ovom delu zemlje, koji je trajao sve do
        1903. godine. Nakon tragične smrti kneza Mihaila, namestništvo je
        stavilo Карађорђев grad na licitaciju, a meštani Topole i okolnih sela
        usmerili su napore da prikupe sredstva i otkupe Karađorđevu crkvu za
        svoju crkvenu zajednicu. Nažalost, napušteni ostaci Karađorđevog grada
        su nakon potiskivanja antiobrenovićevskog ustanka iz 1877. godine
        potpuno uništeni.
      </p>

      <img
        src={oplenac4}
        alt="Oplenac 4"
      />

      <p>
        Dolaskom Kralja Petra I na vlast 1903. godine, Topola, kao rodni grad
        Karađorđevića, ulazi u novi period napretka. Već naredne godine,
        varošica se odvaja od sela i postaje samostalna opština i
        trgovačko-zanatsko naselje. S obzirom na to da je Kralj napustio svoju
        domovinu kao dete i proveo 45 godina u izgnanstvu, nije iznenađujuće što
        je osećao duboku nostalgičnost i vezanost za kraj iz kojeg potiče. Kralj
        Petar je ubrzo u potpunosti posvetio svoje napore ostvarenju
        dugogodišnje želje i ispunjenju amaneta svojih roditelja, da se u Topoli
        izgradi veliki hram, u kojem bi se svi članovi porodice Karađorđević
        sahranjivali. Uzimajući u obzir njegovu želju, uzvišeni brežuljak
        Oplenac je delovao kao savršeno mesto za ostvarenje ovog životnog sna.
      </p>

      <img src={oplenac5} alt="Spomenik Karađorđu na Oplencu" />
      <p>
        Spomenik Karađorđu u Oplencu postavljen je 1911. godine kao čast vođi
        Prvog srpskog ustanka, osnivaču dinastije Karađorđević i simbolu borbe
        za slobodu Srbije. Spomenik se nalazi u neposrednoj blizini crkve Svetog
        Đorđa, na Oplencu, u blizini Karađorđevog mauzoleja, u kojem je kasnije
        sahranjeno više članova dinastije Karađorđević. Spomenik je delo
        vladarskog umetničkog vladara i vajara Đorđa Jovanovića, a prikazuje
        Karađorđa u punoj borbenoj opremi, uz njegovu prepoznatljivu figuru na
        konju. Ovaj monument simbolizuje Karađorđa kao lidera srpske borbe za
        slobodu i kao velikog vođu srpskog naroda. Spomenik je deo kulturnog
        nasleđa koje čuva sećanje na značajnu ličnost iz srpske istorije i
        postao je jedan od simbola Topole i Oplenca.
      </p>

      <img src={oplenac6} alt="Kuća Kralja Petra Prvog" />
      <p>
        Kuća Kralja Petra I u Oplencu, poznata i kao "Kraljevska kuća", bila je
        letnjikovac koji je izgradio Kralj Petar I Karađorđević. Smeštena je na
        padinama brda Oplenac, u blizini crkve Svetog Đorđa i Karađorđevog
        mauzoleja. Kralj Petar I je ovo imanje koristio kao svoj privatni
        rezidencijalni prostor, gde je provodio vreme u mirnom okruženju, daleko
        od političkih obaveza. Kuća je, zajedno sa okolnim parkom, imala veliki
        značaj za kralja, koji je želeo da povrati kontakt sa svojom porodicom i
        narodnim korenima. U njenoj neposrednoj blizini nalazi se i vinski
        podrum, koji je takođe bio deo kraljevskog imanja. Zgrada ima
        jednostavnu ali elegantnu arhitekturu, sa naglaskom na funkcionalnost i
        udobnost. Nakon smrti Kralja Petra I, kuća je prešla u vlasništvo
        njegove porodice, a danas je deo turističke ponude Oplenca i popularno
        je mesto za posetioce koji žele da saznaju više o životu i nasleđu
        srpske kraljevske dinastije Karađorđević.
      </p>
    </div>
  );
};
