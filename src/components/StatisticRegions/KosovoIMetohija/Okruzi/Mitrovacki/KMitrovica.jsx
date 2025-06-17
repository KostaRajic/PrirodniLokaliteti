import mitrovica1 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/KMitrovica/desktop/kMitrovica1.jpg";
import mitrovica2 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/KMitrovica/desktop/kMitrovica2.jpg";
import mitrovica3 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/KMitrovica/desktop/kMitrovica3.jpg";
import mitrovica4 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/KMitrovica/desktop/kMitrovica4.jpg";
import mitrovica5 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/KMitrovica/desktop/kMitrovica5.jpg";
import mitrovica11 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/KMitrovica/mobile/MkMitrovica1.jpg";
import mitrovica22 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/KMitrovica/mobile/MkMitrovica2.jpg";
import mitrovica33 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/KMitrovica/mobile/MkMitrovica3.jpg";
import mitrovica44 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/KMitrovica/mobile/MkMitrovica4.jpg";
import mitrovica55 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/KMitrovica/mobile/MkMitrovica5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { mitrovackiOkrugPathRoutes } from "./MitrovackiOkrugPathRoutes";

export const KosovskaMitrovica = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(mitrovackiOkrugPathRoutes.home)} />
      <header></header>
      <img srcSet={`${mitrovica11} 400w, ${mitrovica1} `} alt="Kosovska Mitrovica 1" />

      <h2>Kosovska Mitrovica</h2>

      <p style={{ paddingTop: "50px" }}>
        Kosovska Mitrovica je gradsko naselje i sedište istoimene opštine u
        Srbiji, koje se nalazi u severnom delu Kosova i Metohije i
        administrativni je centar Kosovskomitrovačkog upravnog okruga. Nakon
        završetka rata na Kosovu i Metohiji, Kosovska Mitrovica je etnički
        podeljena između Srba, koji naseljavaju severni deo grada, i Albanaca,
        koji žive na jugu. Granicu između severnog i južnog dela Kosovske
        Mitrovice čini reka Ibar, dok je most na Ibru postao glavni simbol
        podele grada.
      </p>

      <img srcSet={`${mitrovica22} 400w, ${mitrovica2} `}  alt="Kosovska Mitrovica 2" />

      <p>
        Kao rudarski grad, Trepča se pominje 1303. godine. U Starom Trgu se do
        bombardovanja 1999. godine nalazio Muzej kristala. U blizini se nalaze
        ostaci tvrđave Ćutet (13. vek). U Brnjaku je postojao grad-dvorac (druga
        polovina 13. veka) koji je pripadao ženi srpskog kralja Stefana Uroša I,
        Jeleni Anžujskog, koja je u njemu umrla 1314. godine. U vreme Nemanjića,
        kraj Kosovske Mitrovice već je bio domaćin grada Zvečana, koji je imao
        važnu ulogu u srednjovekovnoj istoriji Srbije, a čiji se ostaci kula i
        danas uzdižu na obližnjem istoimenom brdu.
      </p>

      <img srcSet={`${mitrovica55} 400w, ${mitrovica5} `}  alt="Kosovska Mitrovica 3" />

      <p>
        Kosovska Mitrovica se nalazi na jugoistočnom rubu Dinarskih planina, u
        severnom delu kosovske oblasti, tamo gde Ibar pravi veliku oku i ulazi u
        Ibarsku klisuru, ispred koje, s desne strane, prima svoju najveću
        pritoku, Sitnicu. Smeštena je na severu Kosovske kotline, na 496 metara
        nadmorske visine. Sa istoka, severa i zapada okružena je planinama
        Mokrom Gorom i obroncima Golije i Kopaonika, sa juga granicama Čičavice,
        a sa severozapada obroncima Rogozne.
        <br />
        <br />
        Kroz grad teku reke Ibar, koji ga deli na južni i severni deo, Sitnica i
        pritoka Ibra, Ljushta, čije je ušće u samom gradu.
        <br />
        <br />
        Od grada na severu počinje Ibarska klisura kroz koju Ibar teče ka
        Kraljevu, gde se uliva u Zapadnu Moravu.
      </p>

      <img srcSet={`${mitrovica33} 400w, ${mitrovica3} `}  alt="Muzej Kosovska Mitrovica" />

      <p>
        Gradski muzej Kosovska Mitrovica je muzejska institucija kulture koja se
        nalazi u Kosovskoj Mitrovici. Otvoren je za javnost 1954. godine.
        Organizuje izložbe u svom galerijskom prostoru. Gradski muzej u
        Kosovskoj Mitrovici započeo je u martu prošle godine veliku akciju
        prikupljanja kulturnih, umetničkih i istorijskih predmeta sa Kosova i
        Metohije, od praistorije do kraja 20. veka.
      </p>

      <img srcSet={`${mitrovica44} 400w, ${mitrovica4} `}  alt="Most na Ibru" />

      <p>
        Most na Ibru, poznat i kao Novi most ili Mitrovački most, je čelični
        most u Kosovskoj Mitrovici koji prelazi reku Ibar na severu Kosova i
        Metohije. Most je postao simbol podele Kosovske Mitrovice, jer razdvaja
        Albance na jugu i Srbe na severu grada.
      </p>
    </div>
  );
};
