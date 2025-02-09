import celije1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirCelije/manastirCelije1.jpg";
import celije2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirCelije/manastirCelije2.jpg";
import celije3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirCelije/manastirCelije3.jpg";
import celije4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirCelije/manastirCelije4.jpg";
import celije5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirCelije/manastirCelije5.webp";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const ManastirCelije = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(-1)}
        style={{fill: 'white'}}
      />
      <header></header>
      <img src={celije4} alt="Manastir Ćelije 1" />

      <h2 style={{marginLeft: '50px', color: 'white'}}>Manastir Ćelije</h2>

      <p style={{ paddingTop: "50px" }}>
        Manastir Ćelije posvećen svetom velikomučeniku Georgiju nalazi se oko 3
        km jugoistočno od Lajkovca, a 2 km istočno od ušća reke Ljig u reku
        Kolubaru. Takođe, u neposrednoj blizini ušća tih dveju reka, na oko 1 km
        udaljenosti, nalazi se arheološko nalazište Anine iz Rimskog doba.
        Manastirska crkva je sagrađena u uvali ispod Vrače brda (kota 293) i
        brda Čovke (kota 272) na nadmorskoj visini od 139 m. Pored manastira u
        uvali protiče plitak potok Kameniča. U toj skrivenoj dolini,
        najverovatnije tokom XIV ili početkom XV veka, podignut je manji
        manastirski kompleks sastavljen od jednobrodne crkve i nekoliko
        objekata. Prošlost manastira sv. Georgija u selu Ćelije kod Lajkovca
        veoma je tajanstvena. Dosadašnji pokušaji da se ona odgonetnu nisu mogli
        biti zasnovani na uobičajenim pisanim izvorima, jer ih gotovo da nije ni
        bilo, već isključivo na izvorima drugačije prirode.
      </p>

      <img src={celije2} alt="Manastir Ćelije 2" />

      <p>
        Tačan datum nastanka manastira nije poznat, ali prema opštem istorijskom
        pregledu, manastir potiče iz srednjeg veka. Narodno predanje ga povezuje
        sa vladavinom kralja Dragutina, koji je od 1282. do 1316. godine
        upravljao ovim područjem, a bio je poznat i kao Sremski kralj. Manastir
        Ćelije, kao i manastir kraj sela Lelić, pominje se u turskim izvorima iz
        1560. godine, a tokom XVIII veka, Ćelije su bile centar svih dešavanja u
        valjevskom kraju. Ugledni monasi ovog manastira imali su značajnu ulogu
        u podsticanju buna protiv Turaka, zbog čega je paša Bušatlija 1791.
        godine zapalio manastir Ćelije, zajedno sa 13 crkava u valjevskom
        okrugu. U ovom manastiru je sveštenički čin primio i Hadži Ruvim.
      </p>

      <img src={celije3} alt="Manastir Ćelije 3" />

      <p>
        Najstarija ikona u manastiru je ikona Sabora Svetih Arhangela,
        zaštitnika ove crkve, koja potiče iz perioda pre 1798. godine, kada je
        priložena manastiru. Najstarija knjiga u manastiru je "Boženstvenaja
        skrižalj" (u zapisima poznata kao Skrižali), koju je crnogorski vladika
        Danilo Petrović kupio 1715. godine u Rusiji i zatim poklonio manastiru.
        Među starim knjigama nalaze se i dva mineja za mesece mart i novembar,
        koja, prema načinu štampe, malom formatu i zapisima, datiraju iz prve
        polovine XVIII veka, a veruje se da su štampana u Veneciji. Veliki
        trebnik, štampan u Rusiji u drugoj polovini XVIII veka, postao je deo
        manastirske biblioteke oko 1814. godine. Takođe, u manastiru se čuva i
        Sveto pismo Starog zaveta na crkvenoslovenskom jeziku, koje je nekada
        pripadalo proti Matiji Nenadoviću, a ima značajnu istorijsku vrednost.
      </p>

      <img src={celije1} alt="Manastir Ćelije 4" />

      <p>
        Manastir je bio namenjen za smeštaj manjeg broja monaha, a svojim
        izgledom i konceptom podseća na mnoge manastire koji su u to vreme, pod
        uticajem Svete Gore, podignuti u Srbiji. Najverovatnije je nastao u
        drugoj polovini XIV ili početkom XV veka, kada je nepoznati predstavnik
        srpske vlastele, vođen duhovnim motivima i pod snažnim uticajem
        svetogorskih ideja, odlučio da u srednjovekovnoj župi Pepelevac, u
        skrivenoj dolini pored malog potoka, podigne hram posvećen svetom
        Georgiju. Izbor jednog od svetih ratnika kao zaštitnika i lokacije za
        gradnju u pograničnom području prema Ugarskoj ukazuju da je osnivač bio
        predstavnik srpske vojne vlastele. Nakon svoje smrti, osnivač manastira
        je najverovatnije sahranjen u južnom delu zapadnog traveja crkve, uz
        postavljanje kamene nadgrobne ploče. Tokom gradnje spomen-kosturnice,
        ktitorski grob je bio oštećen.
      </p>

      <img src={celije5} alt="sveti Ava Justin" />

      <p>
        Manastir Ćelije poznat je po tome što je u njemu boravio arhimandrit dr
        Justin Popović (1894—1979), poznat kao Sveti Ava Justin, Veliki
        Svetionik Ćelijski, Svesrpski i Svepravoslavni. Njegov grob se nalazi na
        južnoj strani oltara, a prema njegovoj želji, grob nije obeležen
        nikakvim spomenikom osim velikog kamenog krsta i cveća na humci. Sa leve
        strane crkve, prema oltaru, odmah iza severnih vrata, nalazi se grob
        Ilije Birčanina, vojvode iz Podgorine, obor-kneza sa Medvednika. On je,
        zajedno sa valjevskim knezom Aleksom Nenadovićem, bio pogubljen od
        strane turskih dahija na Kolubarskoj ćupriji u Valjevu 1804. godine.
      </p>
    </div>
  );
};
