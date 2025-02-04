import manastirPetkovica1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ManastirPetkovica/manastirPetkovica1.jpg";
import manastirPetkovica2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ManastirPetkovica/manastirPetkovica2.jpg";
import manastirPetkovica3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ManastirPetkovica/manastirPetkovica3.jpg";
import manastirPetkovica4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ManastirPetkovica/manastirPetkovica4.jpg";
import manastirPetkovica5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ManastirPetkovica/manastirPetkovica5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const ManastirPetkovica = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={manastirPetkovica1} alt="Manastir Petkovica 1" />

      <h2>MANASTIR PETKOVICA</h2>

      <p style={{ paddingTop: "50px" }}>
        Iznad Srebreničke reke, u blizini Stragara, nalazi se obnovljeni
        manastir Petkovica. Sagrađen je početkom XXI veka na temeljima delimično
        sačuvane crkve, nekropole i ostataka ograđenog zida. Tačan datum
        osnivanja manastira nije poznat, ali se pretpostavlja da je nastao u
        periodu između kraja XIII i početka XV veka, kada su u okolini podizane
        mnoge građevine. Najverovatnije je podignut krajem XIII veka, u vreme
        vladavine kralja Dragutina, dok je temeljna obnova izvedena u prvoj
        deceniji XV veka, za vreme despota Stefana Lazarevića.
      </p>

      <img src={manastirPetkovica2} alt="Manastir Petkovica 2" />

      <p>
        Za datiranje Petkovice posebno su značajne originalne freske sačuvane u
        niši iznad ulaznog portala. Paleografska obeležja u natpisu, umetnička
        koncepcija i intenzivan koloritet povezuju ovo slikarstvo sa umetnošću
        poslednje decenije XIII veka. Mlađi sloj fresaka, izrađen u duhu
        slikarstva prve decenije XV veka, pokazuje sličnost sa radovima u
        obližnjim crkvama. Ovo potvrđuje i jedini pouzdani pisani podatak o
        datiranju manastira Petkovice – natpis na nadgrobnoj ploči otkrivenoj
        tokom arheoloških istraživanja. Na ploči se delimično očuvao zapis da je
        jedan monah preminuo 1379. godine. Iz tog podatka se zaključuje da je
        Petkovica u vreme kneza Lazara bila muški manastir i da je preminuli
        kaluđer pripadao drugoj ili trećoj generaciji monaha koji su osnovali
        manastir. Još jedan natpis, sa monaškog groblja, beleži smrt brata
        manastira 1443. godine, što potvrđuje da je Petkovica funkcionisala sve
        do pada Srbije pod tursku vlast.
      </p>

      <img src={manastirPetkovica3} alt="Manastir Petkovica 3" />

      <p>
        Među brojnim manastirima koje turski popisi iz XVI veka beleže na ovom
        području, veruje se da je bila i Petkovica, koja je, najverovatnije,
        bila posvećena Arhangelima. Nalazila se, kako se pretpostavlja, blizu
        sela Pridvorica, kako su Turci nazivali srednjovekovnu Srebrenicu. Zbog
        male udaljenosti od ovog značajnog grada, manastir nije mogao dugo da
        opstane i zapusteo je zajedno sa Srebrenicom. Crkva je građena u dve
        faze. Naos, zidani ikonostas i stariji sloj živopisa potiču s kraja XIII
        veka, dok su narteks, južni paraklis i freske na zapadnom zidu crkve i
        istočnom delu priprate nastali krajem XIV ili početkom XV veka.
        Građevina je skromnih dimenzija, pravougaone osnove, sa svodom u obliku
        poluobličja i polukružnom apsidom na istoku. Đakonikon i protesis su
        dograđeni uz zidove oltara. Na zapadnom delu nalazi se ulazni portal
        lučnog oblika sa oslikanom lunetom.
      </p>

      <img src={manastirPetkovica4} alt="Manastir Petkovica 4" />

      <p>
        Pripratna prostorija je dograđena krajem XIV veka sa zapadne strane
        crkve. Osmišljena je kao dvostruka kula sa zvonikom na vrhu. Osnova je
        pravougaona, sa drvenom međuspratnom konstrukcijom i četvoro-slivnim
        krovom. Uz južni zid crkve prislonjen je mali paraklis, čiji su ostaci
        sačuvani samo do visine od metar i po. Od starijeg fresko-slikarstva,
        sačuvano je samo veliko poprsje Hrista Pantokratora u luneti iznad ulaza
        iz priprate u naos. Liki je oblikovan u duhu slikarstva kraja XIII veka
        i odlikuje se snažnom modelacijom, oštrim crtežom i naglašenim pastelno
        svetlim koloritima. Čista boja se prostire po slikanoj površini,
        stvarajući lazurne svetlosne odbljese.
      </p>

      <img src={manastirPetkovica5} alt="Manastir Petkovica 5" />

      <p>
        Mlađem slikarstvu pripadaju ostaci monumentalne kompozicije
        Bogorodičinog Uspenja u naosu, Deizis, kao i najjasnije scene iz
        Hristovog života u priprati. Snažan crtež, oštra modelacija i kontrastni
        kolorit osnovne su karakteristike ovog značajnog slikarstva. Nesumnjivo,
        srednjovekovni život manastira Petkovica bio je usko povezan sa važnim
        političkim i privrednim centrom Despotovine – obližnjim gradom
        Srebrenicom, u kojem je održan i poslednji državnog sabor u slobodnoj
        Srbiji, kada je za naslednika despota Stefana Lazarevića određen Đurađ
        Branković.
      </p>
    </div>
  );
};
