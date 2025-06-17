import kalemegdan1 from "../../../assets/images/Beograd/Kalemegdan/desktop/kalemegdan2.jpg";
import kalemegdan2 from "../../../assets/images/Beograd/Kalemegdan/desktop/kalemegdan1.jpg";
import kalemegdan3 from "../../../assets/images/Beograd/Kalemegdan/desktop/kalemegdan3.jpg";
import kalemegdan4 from "../../../assets/images/Beograd/Kalemegdan/desktop/kalemegdan4.jpg";
import kalemegdan5 from "../../../assets/images/Beograd/Kalemegdan/desktop/kalemegdan5.jpg";
import kalemegdan6 from "../../../assets/images/Beograd/Kalemegdan/desktop/kalemegdan6.jpg";
import kalemegdan11 from "../../../assets/images/Beograd/Kalemegdan/mobile/kalemegdanM2.jpg";
import kalemegdan22 from "../../../assets/images/Beograd/Kalemegdan/mobile/kalemegdanM1.jpg";
import kalemegdan33 from "../../../assets/images/Beograd/Kalemegdan/mobile/kalemegdanM3.jpg";
import kalemegdan44 from "../../../assets/images/Beograd/Kalemegdan/mobile/kalemegdanM4.jpg";
import kalemegdan55 from "../../../assets/images/Beograd/Kalemegdan/mobile/kalemegdanM5.jpg";
import kalemegdan66 from "../../../assets/images/Beograd/Kalemegdan/mobile/kalemegdanM6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../ScrollToTop";
import { beogradPathRoutes } from "./BeogradPathRoutes";

export const Kalemegdan = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(beogradPathRoutes.home)} />
      <header></header>
      <img srcSet={`${kalemegdan44} 400w, ${kalemegdan4} `} alt="Kalemegdan 1" />

      <h2>Kalemegdan</h2>

      <p>
        Beogradska tvrđava, smeštena na grebenu iznad ušća Save u Dunav,
        predstavlja istorijski kompleks od strateškog značaja koji je nastajao
        od I do XVIII veka kao vojni odbrambeni objekat. Danas je to spomenik
        kulture i muzejski kompleks koji osvetljava istoriju Beograda. Ovaj
        kompleks čine sama tvrđava, podeljena na Gornji i Donji grad, kao i park
        Kalemegdan. Na ovom mestu je krajem I veka nove ere izgrađeno rimsko
        utvrđenje, kastelum, koji je služio kao stalni vojni logor IV Flavijeve
        legije. Nakon što je utvrđenje uništeno od strane Gota i Huna,
        obnovljeno je u prvim decenijama VI veka, ali je ubrzo ponovo razrušeno
        od strane Avara i Slovena.
      </p>

      <img srcSet={`${kalemegdan22} 400w, ${kalemegdan2} `} alt="Kalemegdan 2" />

      <p>
        Na brdu iznad ušća Save u Dunav nastao je antički Singidunum, a na istom
        mestu kasnije i slovenski Beograd. Tokom vekova, srednjovekovni grad se
        razvijao unutar zidina tvrđave, tražeći zaštitu među njenim bedemima.
        Beogradska tvrđava je više puta bila uništavana i obnavljana. Iznad
        rimskih temelja podignuti su srpski bedemi, a preko njih kasnije turske
        i austrijske fortifikacije. U 12. veku, vizantijski car Manojlo Komnin
        sagradio je novi kastel na mestima rimskih ruševina. U prvim decenijama
        14. veka, ovo skromno utvrđenje na brdu prošireno je sve do rečnih
        obala. Pod vlašću despota Stefana Lazarevića, Beograd je postao novo
        političko i vojno središte Srbije, a tvrđava je ojačana velikim
        utvrđenjima Gornjeg i Donjeg grada. U starom kastelu izgrađen je
        Despotov dvor, a na Savi je formirano ratno pristanište. Unutar bedema
        izgrađen je razvijen srednjovekovni grad. Nakon turskog osvajanja 1521.
        godine, sve do kraja 17. veka, Beogradska tvrđava nije doživela veće
        promene.
      </p>

      <img srcSet={`${kalemegdan11} 400w, ${kalemegdan1} `} alt="Kalemegdan 3" />

      <p>
        Novo razdoblje započelo je austrijsko-turskim ratom. Kao ključna utvrda
        u centru ratnih sukoba tokom 18. veka, tvrđava je tri puta
        rekonstruisana. Stari kastel je uništen, a veliki deo srednjovekovnih
        bedema prekrili su novi fortifikacioni objekti. Tokom austrijske
        okupacije, od 1717. do 1739. godine, nakon izgradnje novih modernih
        utvrđenja, Beogradska tvrđava je postala jedno od najjačih vojnih
        uporišta u Evropi. Građena je prema projektima generala Nikole Doksa
        Demoreza, Švajcarca u austrijskoj službi. Igrom sudbine, u zoru jednog
        martovskog dana 1738. godine, zbog poraza kod Niša, upravo pred bedemima
        tvrđave streljan je njen graditelj. Povratak Turaka u Beograd 1740.
        godine prethodilo je rušenje svih novopodignutih utvrđenja. Do kraja 18.
        veka, Beogradska tvrđava je dobila svoj konačni izgled. Tokom ratnih
        razaranja u prethodnim decenijama, gotovo svi objekti u Gornjem i Donjem
        gradu su uništeni, a bedemi su pretrpeli ozbiljna oštećenja.
      </p>

      <img srcSet={`${kalemegdan33} 400w, ${kalemegdan3} `} alt="Kalemegdan 4" />

      <p>
        Beogradska tvrđava ima nekoliko značajnih kapija koje su kroz istoriju
        služile kao glavna ulaza u tvrđavu. Evo nekoliko najpoznatijih: Stambol
        kapija – Jedna od glavnih kapija, koja se sastoji od spoljne i
        unutrašnje kapije, bila je glavna ulazna tačka za putnike koji su
        ulazili u Beograd. Naziv je dobila po putu koji vodi ka Istanbulu
        (Stambolu). Sahat kapija – Kapija sa satom koja je bila deo spoljnog
        utvrđenja i značajna za odbranu tvrđave. Zindan kapija – Ovo je kapija
        sa istočne strane tvrđave, kroz koju su ulazili posetioci u srednjem
        veku, u blizini današnjeg Zoološkog vrta. Despotova kapija – Kapija koja
        je vodila u Gornji grad, koja je bila značajna za ulaz u deo grada pod
        zaštitom despota. Vidin kapija – Kapija koja se nalazi na ulazu u Donji
        grad i povezuje ga sa savskim putem. Mračna kapija – Nalazi se u
        Karađorđevoj ulici i bila je važan ulaz u Donji grad. Sve ove kapije su
        deo jedinstvenog sistema fortifikacija Beogradske tvrđave i ključne su
        za razumevanje odbrambene strategije kroz istoriju.
      </p>

      <img
        srcSet={`${kalemegdan55} 400w, ${kalemegdan5} `}
        alt="Kalemegdan 5"
      />
      <p>
        "Pobednik" je naziv trijumfalnog spomenika podignutog na Gornjem gradu
        1928. godine. Nalazi se na velikom platou Kalemegdana, s kojeg se pruža
        prelep pogled na ušće Save u Dunav i Novi Beograd. Ovaj spomenik je delo
        poznatog kipara Ivana Meštrovića. Zbog svoje izuzetne lokacije i
        pogleda, predstavlja popularno mesto za odmor, fotografisanje i uživanje
        u prirodi. Spomenik je postavljen povodom desetogodišnjice proboja
        Solunskog fronta, što ga čini simbolom ne samo tvrđave Kalemegdan, već i
        samog Beograda. Sa tog mesta lako se silazi do Rimskog bunara,
        specifičnog rezervoara za vodu.
      </p>

      <img
srcSet={`${kalemegdan66} 400w, ${kalemegdan6} `}
        alt="Kalemegdan 5"
      />
      <p>
        Život na grebenu iznad ušća Save u Dunav traje neprekidno više od dva
        milenijuma. Prošlo je punih šest vekova otkako je Beograd, po prvi put u
        svojoj istoriji, postao prestonica. Srž, oko koje se danas razvila
        dvomilionska aglomeracija, čine Beogradska tvrđava i Kalemegdanski park.
        Ove dve celina predstavljaju jedinstavni prostor u kojem su jasno
        uočljivi tragovi Tvrđave, podeljene na Gornji i Donji grad, sa dva
        prepoznatljiva arhitektonska stila – elementi srednjovekovne gradnje
        spajaju se sa baroknim rešenjima koja dominiraju iz XVIII veka.
        Kalemegdanski park, sa Velikim i Malim parkom, nastao je na mestu
        nekadašnjeg gradskog polja, i danas je omiljeno mesto za odmor i
        uživanje. Zajedno, Beogradska tvrđava i Kalemegdanski park čine spomenik
        kulture od izuzetnog značaja, prostor za mnogobrojne sportske, kulturne
        i umetničke manifestacije, kao i mesto zabave i opuštanja za sve
        generacije Beograđana i sve brojnije posetioce grada.
      </p>

    </div>
  );
};
