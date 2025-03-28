import djerdap1 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/DjerdapskaKlisura/djerdap1.jpg";
import djerdap2 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/DjerdapskaKlisura/djerdap6.jpg";
import djerdap3 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/DjerdapskaKlisura/djerdap3.jpg";
import djerdap4 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/DjerdapskaKlisura/djerdap4.jpg";
import djerdap5 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/DjerdapskaKlisura/djerdap5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const DjerdapskaKlisura = () => {
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
      <img src={djerdap1} alt="Đerdapska Klisura 1" />

      <h2>Đerdapska Klisura</h2>

      <p style={{ paddingTop: "50px" }}>
        Đerdapska klisura, najveća i najlepša rečna klisura u Evropi, vekovima
        očarava posetioce iz svih delova sveta. Njeni jedinstveni pejzaži ne
        samo da svedoče o bogatoj istoriji ovog kraja, već i čuvaju tragove prve
        evropske civilizacije. Oduvek su ljudi osećali snažan poriv da istraže i
        osvoje divlju lepotu ovog područja.
        <br />
        <br />
        Ova impozantna klisura nastala je usled drevnih geoloških promena, kada
        se deo Karpatskog masiva rascenio, omogućivši isticanje Panonskog mora u
        Crno more. Đerdap zapravo obuhvata četiri zasebne klisure, svaka sa
        svojim jedinstvenim karakteristikama i prirodnim lepotama.
      </p>

      <img src={djerdap4} alt="Đerdapska Klisura 2" />

      <p>
        Tragovi ljudskih nastojanja da osvoje i prilagode ove surove predele
        vidljivi su i danas – urezani u stene klisure, razasuti duž peščanih
        obala i sačuvani u naseljima koja su vekovima opstajala na ovim
        prostorima, od rimskih legija do savremenih vremena.
        <br />
        <br />
        Đerdapski deo Dunava proteže se na 119 kilometara i odlikuje se
        dinamičnim i nepredvidivim karakteristikama. Nekada je ovaj sektor bio
        poznat po velikom padu reke, snažnim vrtlozima i visokim brzinama vode,
        kao i iznenadnim promenama širine korita i dubine. Plovidba je ovde
        oduvek predstavljala ozbiljan izazov, prepun skrivenih opasnosti od
        podvodnih stena i hridina.
      </p>

      <img src={djerdap3} alt="Đerdapska Klisura 3" />

      <p>
        Pre izgradnje hidroenergetskog sistema „Đerdap I“, Dunav je na najužem
        delu klisure bio širok samo 165 metara, dok je njegova najveća dubina
        dostizala 80 metara. Nakon izgradnje, širina reke porasla je na 220
        metara, a dubina na 105 metara, čime su se značajno promenili uslovi
        plovidbe.
        <br />
        <br />
        Na izlasku iz Đerdapske klisure, Dunav se naglo širi, ali ni tu nije
        imao miran tok. Podvodne stene koje su se prostirale duž korita gotovo
        su ga pregrađivale, a pri niskim vodostajima mnoge su izranjale iz vode.
        To je stvaralo iluziju da bi čovek, skačući s jedne stene na drugu,
        mogao preći reku s obale na obalu.
      </p>

      <img src={djerdap2} alt="Đerdapska Klisura 4" />

      <p>
        Đerdapska klisura, poznata i kao Železna vrata, nosi svoje ime
        zahvaljujući svojoj snazi, nepredvidivosti i nekadašnjoj neprohodnosti.
        Ova impozantna klisura zapravo se sastoji od više celina koje se protežu
        od Donjeg Milanovca do Sipa: Gornja klisura, Gospođin vir, Veliki i Mali
        Kazan, te Sipska klisura, međusobno odvojene tesnacima.
        <br />
        <br />
        Najveća dubina Dunava od 82 metra zabeležena je u Gospođinom viru, što
        ga svrstava među najdublje rečne delove na svetu. Najspektakularniji
        prizori pružaju se u Kazanu, gde se strme stene uzdižu i do 300 metara
        iznad reke. Ovde Dunav značajno menja svoju širinu, a njegovo korito
        poprima oblik nalik posudi – po čemu je ovaj deo klisure i dobio ime.
      </p>

      <img src={djerdap5} alt="Đerdapska Klisura 5" />
      <p>
        Nacionalni park Đerdap odlikuje se izuzetno bogatim biljnim i
        životinjskim svetom, a u njegovom sklopu nalazi se i jedna od najvećih
        hidroelektrana u ovom delu Evrope, sa ogromnim akumulacionim jezerom.
        Zahvaljujući povoljnom položaju i jedinstvenoj lepoti, ovo područje ima
        bogatu i dugu istoriju, što potvrđuju brojni kulturno-istorijski
        spomenici, poput Lepenskog vira, rimskog puta i srednjovekovnih tvrđava.
        <br />
        <br />
        Kada poželite predah od veličanstvenih prirodnih pejzaža, zakoračite u
        prošlost istražujući jedinstveno neolitsko naselje Lepenski vir, staro
        više od 6000 godina, ili se divite ostacima rimskih utvrđenja i drevnih
        tvrđava koje svedoče o burnim vremenima ovog kraja.
      </p>
    </div>
  );
};
