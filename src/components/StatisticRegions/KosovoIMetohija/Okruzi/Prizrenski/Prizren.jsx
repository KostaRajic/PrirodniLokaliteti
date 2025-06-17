import prizren1 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/Prizren/desktop/prizren2.jpg";
import prizren2 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/Prizren/desktop/prizren1.jpg";
import prizren3 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/Prizren/desktop/prizren3.jpg";
import prizren4 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/Prizren/desktop/prizren4.jpg";
import prizren5 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/Prizren/desktop/prizren5.jpg";
import prizren6 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/Prizren/desktop/prizren6.jpg";
import prizren7 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/Prizren/desktop/prizren7.jpg";
import prizren11 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/Prizren/mobile/Mprizren2.jpg";
import prizren22 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/Prizren/mobile/Mprizren1.jpg";
import prizren33 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/Prizren/mobile/Mprizren3.jpg";
import prizren44 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/Prizren/mobile/Mprizren4.jpg";
import prizren55 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/Prizren/mobile/Mprizren5.jpg";
import prizren66 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/Prizren/mobile/Mprizren6.jpg";
import prizren77 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/Prizren/mobile/Mprizren7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { prizrenskiOkrugPathRoutes } from "./PrizrenskiOkrugPathRoutes";

export const Prizren = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(prizrenskiOkrugPathRoutes.home)} />
      <header></header>
      <img srcSet={`${prizren11} 400w, ${prizren1} `} alt="Prizren 1" />

      <h2>Prizren</h2>

      <p style={{ paddingTop: "50px" }}>
        Prizren je grad bogat istorijom i kulturnim nasleđem, u kojem se nalaze
        značajni spomenici poput crkve Bogorodice Ljeviške, koja je uvrštena na
        listu svetske baštine UNESCO, i Sinan-pašine džamije, izgrađene od
        ostataka crkve Svetih Arhangela Mihaila i Gavrila, koju je podigao
        srpski car Dušan.
        <br />
        <br />
        Ovaj grad je oduvek bio jedno od najvažnijih naselja na Kosovu i
        Metohiji, a danas nosi priznanje kao grad-muzej sa ostacima triju
        prethodnih gradova, crkvama koje su stekle međunarodnu slavu i džamijama
        koje svedoče o bogatoj istoriji. Prizren je zaista simbol prošlih
        vremena, gde se staro nasleđe još uvek oseća u uskim ulicama, starim
        čaršijama i impozantnom Kamenom mostu koji povezuje dve obale grada.
        Upravo zbog svega navedenog, nadimak “srpski Carigrad” iz srednjeg veka
        savršeno odražava dušu ovog grada.
        <br />
        <br />
        Branislav Nušić, poznati srpski komediograf, pisao je početkom 20. veka
        da je Prizren, prema mišljenju Turčina, grad nad gradovima zbog dva
        ključna faktora – lepe proslave (teferiča) i dobre vode. Ovaj opis
        savršeno oslikava prirodne i društvene vrednosti Prizrena, grada koji se
        prostire na padinama Šar planine, kroz koji protiče bistrica, pružajući
        sve potrebne uslove za skladan život.
        <br />
        <br />
        Ono što je sigurno je da je Prizren naseljen još od antičkog doba, a pod
        imenom “Theranda” postojao je i pre 6. veka, potvrđujući njegovu
        dugotrajniju istorijsku važnost.
      </p>

      <img srcSet={`${prizren22} 400w, ${prizren2} `} alt="Prizren 2" />

      <p>
        Grad Prizren svoje ime duguje Vizantijcima, dok su srpski srednjovekovni
        vladari učinili ovu varoš prepoznatljivom po svojoj lepoti i trgovinskoj
        važnosti. U nekoliko navrata, Prizren je bio proglašavan prestonicom, a
        i danas se mogu videti ostaci njegovih utvrđenja, kao što su Kaljaja i
        Višegrad, kao i brojnih crkava poput Bogorodice Ljeviške, Svete Nedelje
        i Svetog Nikole.
        <br />
        <br />
        Turski osvajači su, koristeći ostatke zadužbine cara Dušana – crkve
        Svetih Arhangela Mihaila i Gavrila, izgradili veličanstvenu Sinan-pašinu
        džamiju, koja je danas jedan od najpoznatijih simbola grada. Uz nju, tu
        je i Bajrakli džamija (Mehmed-pašina džamija), koja svakako zaslužuje
        pažnju posetilaca.
        <br />
        <br />
        Prizren je grad u kojem se lako može steći utisak da je vreme stalo.
        Tradicionalni sat na Sahat kuli i krivudavi Kameni most, koji povezuje
        dve obale, samo su neki od elemenata koji podsećaju na prošlost. U
        vrućim letnjim danima, posetioci mogu uživati i u hamamu, jednom od tri
        najveća turska kupatila u Srbiji.
        <br />
        <br />
        Lepota i kulturno nasleđe Prizrena prepoznati su i od strane UNESCO-a,
        koji je 2006. godine crkvu Bogorodice Ljeviške uvrstio na listu svetske
        baštine, zajedno sa drugim srednjovekovnim spomenicima na Kosovu i
        Metohiji, koji su tada stavljeni pod zaštitu.
      </p>

      <img srcSet={`${prizren33} 400w, ${prizren3} `} alt="Kameni most u Prizrenu" />

      <p>
        Kameni most u Prizrenu je simbol grada, smešten preko reke Prizrenskoj
        Bistrici i povezuje trg „Šadrvan“ sa delom grada poznatim kao Saračana.
        Most je dugačak 17 metara, a izgrađen je krajem 15. ili početkom 16.
        veka kao pešački most. Reka Prizrenska Bistrica deli grad na dva gotovo
        jednaka dela, a kroz istoriju je na ovoj reci bilo izgrađeno mnogo
        mostova. Ipak, Kameni most je najznačajniji i postao je prepoznatljiv
        simbol grada. Smesten je u starom gradskom jezgru, a u njegovoj blizini
        nalaze se Arasta most na istoku i Nalet most na zapadu. Kameni most
        direktno povezuje trg „Šadrvan“ i Saračanu.
      </p>

      <img srcSet={`${prizren44} 400w, ${prizren4} `} alt="Prizrenska Bogoslovija" />

      <p>
        Prizrenska Bogoslovija, osnovana 1871. godine u kući njenog osnivača,
        prepodobnog Simeona Andrejevića Igumanova – čika Sime Prizrenca, bila je
        važna institucija koja je kroz sve vreme svog postojanja služila ne samo
        kao obrazovni centar za pravoslavne Srbe, već i kao ključni kulturni i
        politički oslonac. Ovaj centar je pomogao narodu da opstane, očuva svoju
        veru, jezik i kulturu na prostoru Metohije, koji je oduvek bio težak za
        život.
        <br />
        <br />
        Značaj Bogoslovije bio je prepoznat kako od strane naše države, tako i
        od samog naroda, koji ju je podržavao i pomagao. Za Srbe sa Kosova i
        Metohije, velika uteha i radost bila je videti mlade ljude koji su
        odlučili da posvete svoj život Bogu i svom narodu. Ova odluka im je
        davala nadu i razlog da sa verom gledaju u budućnost, uprkos teškoj
        sadašnjosti koju je nosila kosovsko-metohijska stvarnost..
      </p>

      <img srcSet={`${prizren55} 400w, ${prizren5} `} alt="Bogorodica Ljeviška" />

      <p>
        Glavna crkva Prizrena bila je Bogorodica Ljeviška. Temeljno ju je
        obnovio kralj Milutin uz pomoć prizrenskih episkopa Damjana i Save
        između 1306. i 1309. godine. Hram je izgradio arhitekta i protomašter
        Nikola, sa pet kupola, a nad njim je podignuta priprata sa spratom i
        zvonik koji se uzdiže visoko iznad prizrenskih kuća, ističući duhovni
        centar grada. Prizren je bio jedno od omiljenih mesta boravka srpskih
        vladara, naročito poslednjeg iz dinastije Nemanjića. Prizrenska
        katedrala posvećena je Uspenju Presvete Bogorodice.
        <br />
        <br />
        Bogorodica Ljeviška, jedna od najlepših srpskih srednjovekovnih crkava,
        predstavlja petokupolnu građevinu koja je nastala spajanjem prvobitne
        trobrodne bazilike, čiji su bočni zidovi sačuvani, i krstoobraznog hrama
        sa spoljnim pripratama. Iznad priprate podignut je dvostruki zvonik sa
        dve bočne kapele. Daroviti i vešti protomašter Nikola pokazao je svoju
        graditeljsko-umetničku sposobnost kroz prostorno i konstruktivno
        rešenje, ali i u dekorativnoj obradi fasada koje su zidane naizmenično
        od opeke i sige, uz upotrebu kermoplastičnih elemenata. Kamenorezački
        radovi, kao što su polukružno ukrašeni otvori, meandri, cvetovi, zvezde
        i glave životinja, dodatno ukrašavaju građevinu, dok natpisi teku
        vodoravno duž apside, naglašavajući njen izgled.
        <br />
        <br />I nakon pada Srbije pod Turke, Saborna crkva je neko vreme bila
        hrišćanska bogomolja. To potvrđuje zapis nepoznatog učenog muslimana
        koji je na pažljivo odabranom mestu na fresci urezao stih najvećeg
        persijskog lirika Hafiza, u kojem je izrazio osećanje da je u njegovom
        oku nastanila lepota viđenog: "Zenica oka moga tebi je gnezdo" (počasti
        nas ulaskom, ovo je kuća tvoja). Empatiju koju je Hafiz izrazio ovim
        stihom izazvala je upravo Bogorodica Ljeviška, jedan od najlepših
        dragulja među više od dvadeset crkava u Prizrenu.
      </p>

      <img srcSet={`${prizren66} 400w, ${prizren6} `} alt="Saborna crkva Svetog Đorđa u Prizrenu" />

      <p>
        Saborna crkva Svetog Đorđa u Prizrenu predstavlja glavnu crkvu Srpske
        pravoslavne Eparhije raško-prizrenske. Zajedno sa Vladikanskim dvorom i
        obližnjom starom crkvom Svetog Đorđa, čini kompleks u samom centru
        eparhijske administracije u Prizrenu. Temeљi crkve postavljeni su 1856.
        godine, a izgradnja je završena 1887. godine, kada je crkva i osveštana.
        <br />
        <br />
        Prvobitni katedralni hram prizrenskih episkopa i mitropolita bila je
        drevna crkva Bogorodice Ljeviške, zadužbina srpskog kralja Stefana
        Milutina (1282-1321). Međutim, tokom turske vlasti, crkva Bogorodice
        Ljeviške je oduzeta od Srba i pretvorena u džamiju, pa je funkciju
        katedralnog hrama Prizrenske eparhije privremeno preuzela stara crkva
        Svetog Đorđa. Ova crkva, međutim, bila je premala da bi obavljala tu
        funkciju, zbog čega je u prvoj polovini 19. veka počelo planiranje
        izgradnje novog, većeg sabornog hrama. Ovaj projekat nije bilo lako
        sprovesti, pre svega zbog visokih troškova i opstrukcija od strane
        lokalnih turskih vlasti. Dozvola za izgradnju je dobijena tek 1855.
        godine, a temelji crkve postavljeni su na Ilinđan 1856. godine.
      </p>

      <img srcSet={`${prizren77} 400w, ${prizren7} `} alt="Utvrđeni grad Kaljaja" />

      <p>
        Utvrđeni grad Kaljaja nalazi se iznad današnjeg Prizrena, na brdu sa
        izuzetno povoljnim strateškim položajem. Bedemi ovog utvrđenja prate
        obode brda, a osnovna forma je nepravilna elipsa dimenzija 190x150
        metara. Glavni ulaz u grad, koji je podeljen na Gornji i Donji grad, bio
        je smešten na zapadnom bedemu. Gornji grad zauzimao je uzvišeni prostor
        u jugoistočnom delu utvrđenja i bio je zaštićen posebnim bedemima prema
        zapadu i severu. Ulaz u Gornji grad bio je kroz kapiju u zapadnom delu
        unutrašnjeg bedema. Tokom vremena, tvrđava je menjala vladare koji su je
        rušili, obnavljali i dograđivali. Arheološkim istraživanjima utvrđeni su
        dva glavna perioda izgradnje (srednjovekovni i turski), sa nekoliko faza
        razvoja. Srednjovekovni period obuhvata tri faze: vizantijska faza iz XI
        veka, period XII i XIII veka, kao i objekti iz vremena vladavine cara
        Dušana (južna kula, unutrašnji bedem, deo istočnog bedema do laguma i
        niži delovi zapadnog bedema). U turskom periodu postoje pet faza, pri
        čemu se druga faza, iz sredine XVII veka, odnosi na većinu objekata. Ove
        faze obuhvataju: južni grad, zasvođeni hodnik uz južni bedem Gornjeg
        grada, gornje delove zapadnog bedema Donjeg grada sa glavnom kapijom,
        istočni bedem sa polukružnom kulom i lagumom koji vodi ka Bistrici.
      </p>
    </div>
  );
};
