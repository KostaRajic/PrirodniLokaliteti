import indjija1 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/desktop/indjija8.jpg";
import indjija2 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/desktop/indjija2.jpg";
import indjija3 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/desktop/indjija3.jpg";
import indjija4 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/desktop/indjija4.jpg";
import indjija5 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/desktop/indjija10.jpg";
import indjija6 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/desktop/indjija6.jpg";
import indjija7 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/desktop/indjija7.jpg";
import indjija8 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/desktop/indjija9.jpg";
import indjija11 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/mobile/Mindjija8.jpg";
import indjija22 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/mobile/Mindjija2.jpg";
import indjija33 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/mobile/Mindjija3.jpg";
import indjija44 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/mobile/Mindjija4.jpg";
import indjija55 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/mobile/Mindjija10.jpg";
import indjija66 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/mobile/Mindjija6.jpg";
import indjija77 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/mobile/Mindjija7.jpg";
import indjija88 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/mobile/Mindjija9.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { sremskiOkrugPathRoutes } from "./SremskiOkrugPathRoutes";

export const Indjija = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(sremskiOkrugPathRoutes.home)} />
      <header></header>
      <img srcSet={`${indjija11} 400w, ${indjija1} `} alt="Inđija 1" />

      <h2>Inđija</h2>

      <p>
        Opština Inđija se nalazi u severoistočnom delu Srema, na jugozapadnim
        padinama Fruške gore. Prostire se na površini od 384 km² i sastoji se od
        11 naselja: Inđija, Beška, Novi Slankamen, Novi Karlovci, Krčedin,
        Čortanovci, Maradik, Ljukovo, Stari Slankamen, Jarkovci i Slankamenački
        Vinogradi. Prema popisu iz 2022. godine, opština broji 43.755
        stanovnika, koji potiču iz različitih etničkih grupa. Opština Inđija je
        poznata po bogatoj istoriji i tradiciji, a njena kulturna baština je
        značajan faktor identiteta. Pored toga, opština beleži i značajan
        ekonomski napredak, sa fokusom na poljoprivredu, industriju i razvoj
        turizma. Geografski, Inđija ima strateški položaj, jer se nalazi u
        neposrednoj blizini Beograda i važnih saobraćajnih pravaca, što joj
        omogućava lak pristup tržištima i olakšava privrednu razmenu.
      </p>

      <img srcSet={`${indjija55} 400w, ${indjija5} `} alt="Inđija 5" />

      <p>
        Indjija je grad bogat zelenim površinama i parkovima, idealnim za odmor
        i rekreaciju. U samom centru grada nalazi se park sa uređenim stazama,
        klupama i igralištima, pogodnim za porodice i decu. Takođe, tu su i
        manji parkovi i drvoredi koji pružaju prijatan ambijent za šetnje, dok
        veći parkovi nude prostor za sport i opuštanje na otvorenom. Zeleni
        prostori u Indjiji doprinose opuštenoj atmosferi i kvalitetu života u
        ovom gradskom okruženju.
      </p>

      <div className="displayFlexClassic">
        <img
          srcSet={`${indjija33} 400w, ${indjija3} `}
          alt="Inđija centar"
          style={{ padding: "50px", width: "47%" }}
        />
        <img
          srcSet={`${indjija88} 400w, ${indjija8} `}
          alt="Inđija crkva sv. Georgija"
          style={{ padding: "50px", width: "47%" }}
        />
      </div>

      <p>
        Indjija je domaćin i modernom Outlet Shopping Parku, savremenom
        trgovačkom centru koji se nalazi na ulazu u grad i nudi posetiocima
        raznovrsne prodavnice brendiranih proizvoda po povoljnim cenama. Ovde se
        mogu naći prodavnice odeće, obuće, elektronike, ali i restorani i
        kafići, koji čine ovo mesto idealnim za šoping, uživanje i opuštanje. U
        samom centru Indjije, nalazi se i Crkva Svetog Georgija, prelepa barokna
        crkva koja je ne samo verski centar, već i značajna kulturna tačka. Sa
        svojim freskama i ikonama, crkva je simbol istorije i tradicije grada,
        dok je Sveti Georgije zaštitnik ove verske ustanove. Oba mesta, Outlet i
        Crkva, savršeno se uklapaju u sliku Indjije kao grada koji spaja moderni
        život i bogatu kulturnu baštinu.
      </p>

      <img srcSet={`${indjija22} 400w, ${indjija2} `} alt="Inđija 2" />

      <p>
        Keltsko selo je tematski turistički kompleks smešten u
        sportsko-rekreativnoj zoni Inđije, na ulazu u grad iz pravca Novog Sada.
        Inspirisan životom Kelta na ovim prostorima u III veku pre nove ere,
        kompleks je zabavno-edukativnog karaktera i namenjen je pre svega deci.
        Unutar visokim, drvenim ogradama ograđenog kompleksa nalazi se nekoliko
        tipova keltskih kuća, pokrivenih trskom i napravljenih od drveta i
        blata, koje predstavljaju autentična keltska domaćinstva i zanatske
        radionice. Ovaj kompleks omogućava posetiocima da se upoznaju sa životom
        i tradicijom Kelta, kao i da učestvuju u različitim edukativnim i
        zabavnim aktivnostima koje se često organizuju tokom godine, uključujući
        radionice, predstave i igre za decu. Keltsko selo je odlična destinacija
        za porodice, školsku decu, kao i sve koji žele da se upuste u
        interaktivno istraživanje istorije ovog zanimljivog perioda.
      </p>

      <img srcSet={`${indjija44} 400w, ${indjija4} `} alt="Inđija 4" />
      <p>
        Zoo VRT Koki je mali zoološki vrt je popularno mesto za porodice i
        školsku decu, jer nudi priliku da se vide različite vrste životinja u
        opuštenoj i edukativnoj atmosferi. Zoološki vrt nije prevelik, ali je
        dovoljno interesantan i raznovrstan da pruži zabavu i edukaciju
        posetiocima svih uzrasta. U Zoo vrtu Koki možete videti razne domaće i
        egzotične životinje. Iako možda nije toliko poznat kao veći zoološki
        vrtovi u Srbiji, ovaj mali vrt se ističe svojom pristupačnošću i
        ljubaznim osobljem, kao i dobrom organizacijom prostora. Ovo je odlično
        mesto za one koji žele da provedu neko vreme u prirodi i upoznaju se sa
        životinjama u prijatnoj atmosferi.
      </p>

      <img srcSet={`${indjija66} 400w, ${indjija6} `} alt="Inđija 6" />
      <p>
        Dunav protiče kroz teritoriju opštine Inđija u dužini od 27 km,
        formirajući jedan od najlepših i najromantičnijih delova svog toka.
        Obalu reke, od Čortanovaca, preko Beške i Krčedina, do Slankamenačkih
        Vinograda i ušća Tise u Dunav kod Starog Slankamena, krasi očuvana
        priroda i slikovita ruralna sredina. Ovdje se smeste vikend naselja,
        riblje čarde, prostrane plaže, peščane ade i zeleni kutci koji privlače
        ljubitelje nautičkog turizma, ribolova i eko turizma. Ovaj deo Dunava je
        pravi raj za sve koji žele da uživaju u tišini reke, prirodnoj lepoti i
        rekreativnim aktivnostima na vodi.
      </p>

      <img srcSet={`${indjija77} 400w, ${indjija7} `} alt="Inđija 7" />
      <p>
        Krečidinska ada je rečno ostrvo smešteno uz levu obalu Dunava naspram
        naselja Krečidin. Predstavlja veoma značajan deo Specijalnog rezervata
        prirode „Koviljsko-petrovaradinski rit“ i jedna je od najvažnijih ada u
        Podunavlju. Sa obalom dugom oko 10 km i površinom od skoro 9 km², spada
        u grupu najvećih dunavskih ada od ušća Drave do ušća Tise u Dunav. Ada
        je stanište brojnih retkih vrsta biljaka i životinja, značajno je
        mrestilište riba, a od davnina je poznata po brojnim stadima konja,
        podolskih goveda, magaraca i ovaca koja se na njoj pašu.
      </p>
    </div>
  );
};
