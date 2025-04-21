import vlasinsko1 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/VlasinskoJezero/vlasinskoJezero1.jpg";
import vlasinsko2 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/VlasinskoJezero/vlasinskoJezero2.jpg";
import vlasinsko3 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/VlasinskoJezero/vlasinskoJezero3.jpg";
import vlasinsko4 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/VlasinskoJezero/vlasinskoJezero4.jpg";
import vlasinsko5 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/VlasinskoJezero/vlasinskoJezero5.jpg";
import vlasinsko6 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/VlasinskoJezero/vlasinskoJezero6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pcinjskiOkrugPathRoutes } from "./PcinjskiOkrugPathRoutes";

export const VlasinskoJezero = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(pcinjskiOkrugPathRoutes.home)} />
      <header></header>
      <img src={vlasinsko1} alt="Vlasinsko Jezero 1" />

      <h2>Vlasinsko Jezero</h2>

      <p style={{ paddingTop: "50px" }}>
        Vlasinsko jezero, drugo po veličini u Srbiji, prostire se na površini od
        16,5 kvadratnih kilometara. Smešteno je u jugoistočnom delu zemlje,
        unutar opštine Surdulica. Jezero se nalazi 30 kilometara zapadno od
        doline Južne Morave i granice sa Bugarskom na jugu. Na nadmorskoj visini
        od 1213 metara, Vlasinsko jezero je najviše jezero u Srbiji.
      </p>

      <img src={vlasinsko2} alt="Vlasinsko Jezero 2" />

      <p>
        Vlasinsko jezero je nastalo na mestu gde je nekada postojala tresava,
        poznata kao Vlasinsko blato, sa širokim područjima ševare, trske i
        povremenim vodenim površinama. Iz tih močvarnih predela izvire reka
        Vlasina, na kojoj je kasnije formirano jezero. Istorijski podaci o
        Vlasinskoj visoravni datiraju još iz osamnaestog veka, kada je bila
        poznata kao Vlasinsko blato ili Vlasinska tresava, usled nakupljenog
        treseta i blata koje je nastalo erozijom rečnih tokova. Tako je u
        kanjonu dugom oko 20 kilometara stvorena močvara, koja je na određenim
        mestima bila prekrivena živim peskom.
      </p>

      <img src={vlasinsko3} alt="Vlasinsko Jezero 3" />

      <p>
        Izgradnja brane na jezeru trajala je od 1946. do 1949. godine. Jezero je
        počelo da se puni 9. aprila 1949. godine, a 1954. je dostiglo svoj puni
        kapacitet od 165 miliona kubnih metara vode.
        <br />
        <br />
        Nakon izgradnje, deo jezera bio je prekriven plovećim ostrvima, odnosno
        delovima treseta koji su se otkinuli sa dna novoformiranog jezera. U
        početku su ostrva bila vezivana za obalu, ali su od sredine sedamdesetih
        godina prošlog veka počela da privlače pažnju zbog svoje jedinstvenosti.
        I danas postoji nekoliko ovakvih plovećih ostrva.
      </p>

      <img src={vlasinsko6} alt="Vlasinsko Jezero 4" />

      <p>
        Vlasinsko jezero je akumulaciono jezero sa površinom od 16,5 kvadratnih
        kilometara, što ga svrstava na drugo mesto među najvećim jezerima
        Srbije, odmah iza Đerdapskog jezera. Pri maksimalnom vodostaju, dužina
        jezera iznosi 9 kilometara, dok širina dostiže 3,5 kilometara. Najveća
        dubina jezera je 35 metara, a prosečna dubina je oko 25 metara. Ukupni
        kapacitet jezera je 165 miliona kubnih metara vode.
        <br />
        <br />
        Jezero je smešteno na nadmorskoj visini od 1213 metara, a okružuju ga
        planine Plana, Gramada, Vardenik i Čemernik. Boja vode se menja od
        sivo-plave uz obalu do tamno-plave u sredini, sa zelenim priobalnim
        površinama. Jezero svakog minuta prima 2 kubna metra vode, a njegove
        glavne reke su Vlasina, Jerma, Božička reka, Lisinska reka, Ljubatska
        reka, Strvna i Čemernica. U slivu Vlasinskog jezera nalazi se više od
        100 reka, uključujući njihove pritoke.
      </p>

      <img src={vlasinsko5} alt="Vlasinsko Jezero 5" />

      <p>
        Vlasinsko jezero ima dva stalna ostrva, Stratoriju i Dugi Del.
        Stratorija je nekada bila ostrvo unutar Vlasinskog blata, dok je Dugi
        Del bio poluostrvo pre izgradnje brane. Osim ovih, jezero je poznato i
        po plutajućim ostrvima, koja se tokom vremena pomeraju. Ova ostrva su
        nastala od podvodnih biljaka koje su rasle na tresetu, a zatim su se
        otkinule sa dna jezera i isplivale. Na nekim od tih ostrva izrasle su
        vrbe i breze, drveće tipično za ovu oblast.
      </p>

      <img src={vlasinsko4} alt="Vlasinsko Jezero 6" />

      <p>
        Vlasinsko jezero je okruženo valovitom visoravni, koja podseća na šareni
        ćilim, sa livadama, pašnjacima i šumama, a sve to krije bogat biljni i
        životinjski svet. Planinski masivi koji se uzdižu iznad jezera
        dominiraju pejzažom, dok na njihovim padinama leži oko šezdeset
        vlasinskih naselja. Kroz ovo područje teku bistri potoci i rečice, a
        klisure su prekrivene gustim šumama. Među planinama koje okružuju
        jezero, posebnu pažnju privlače Čemernik, Plana i Vardenik.
      </p>
    </div>
  );
};
