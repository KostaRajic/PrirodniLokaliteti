import devic1 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/ManastirDevic/manastirDevic1.jpg";
import devic2 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/ManastirDevic/manastirDevic2.jpg";
import devic3 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/ManastirDevic/manastirDevic3.jpg";
import devic4 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/ManastirDevic/manastirDevic4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { mitrovackiOkrugPathRoutes } from "./MitrovackiOkrugPathRoutes";

export const ManastirDevic = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(mitrovackiOkrugPathRoutes.home)} style={{fill: "white"}}/>
      <header></header>
      <img src={devic1} alt="Crkva Svetog Stefana Manastir Banjska" />

      <h2>Manastir Devič</h2>

      <p style={{ paddingTop: "50px" }}>
        Manastir Devič se nalazi u Drenici, pod glavnim vencom istoimene
        planine, iznad Marinskog potoka, oko 2 kilometra južno od Srbice.
        <br />
        <br />
        Podignut je početkom XV veka, a prvi ktitor bio je Joanikije Devički,
        svetitelj za kojeg je vezana cela prošlost ove svetiinje.
      </p>

      <img src={devic2} alt="Manastir Banjska 2" />

      <p>
        Na tom mestu je oko 1434. godine, u znak zahvalnosti zbog ozdravljenja
        svoje kćeri – device (po kojoj je manastir i dobio ime), despot Đurađ
        Branković podigao drugu crkvu – crkvu Vavedenja Presvete Bogorodice.
        <br />
        <br />
        Manastir je imao četiri hramovne celine koje su se razlikovale po
        veličini i obliku. Bio je domaćin bogate zbirke rukopisnih i štampanih
        knjiga (prema nekim podacima, u manastiru je 1872. godine bilo više od
        100 rukopisnih i oko 10 štampanih srpskih knjiga).
      </p>

      <img src={devic3} alt="Manastir Banjska 3" />

      <p>
        Balisti su proleća 1941. godine minirali, razorili i spalili crkve i
        konake manastira. Manastir je srušen do temelja. Tom prilikom uništene
        su sve manastirske knjige i ikonaostasi, uključujući ikone iz ranijih
        perioda, ali i one iz III i II veka. Balisti nisu poštedeli nijednu
        srpsku svetiinju, pa ni one u kojima su se dešavala isceljenja,
        uključujući i one koje su pripadale albanskom narodu.
      </p>

      <img src={devic4} alt="Manastir Banjska 4" />

      <p>
        Do danas je manastir četiri puta bio srušen do temelja.
        <br />
        <br />
        Tokom izvođenja konzervatorskih radova 1966. godine u severnom paraklisu
        otkrivene su freske iz vremena prvog freskopisanja manastira. Pored lika
        svetog Joanikija Devičkog, obučenog u odelo velikoshimnika i sa očuvanim
        natpisom u kojem piše da je on „prvi ktitor ovog mesta“, sačuvan je i
        lik svetog Akakija, kao i kompozicije „Svadba u Kani Galilejskoj“ i
        „Isceljenje raslabljenog“. Takođe, dobro su očuvane slike drugih
        predstavki.
      </p>
    </div>
  );
};
