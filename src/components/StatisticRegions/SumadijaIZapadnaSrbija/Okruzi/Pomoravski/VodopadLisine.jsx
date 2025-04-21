import lisine1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/VodopadLisine/vodopadLisine1.jpg";
import lisine2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/VodopadLisine/vodopadLisine2.jpg";
import lisine3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/VodopadLisine/vodopadLisine3.jpg";
import lisine4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/VodopadLisine/vodopadLisine4.jpg";
import lisine5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/VodopadLisine/vodopadLisine5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pomoravskiOkrugPathRoutes } from "./PomoravskiOkrugPathRoutes";

export const VodopadLisine = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(pomoravskiOkrugPathRoutes.home)}
        style={{ fill: "white" }}
      />
      <header></header>
      <img src={lisine1} alt="Vodopad Lisine 1" />

      <h2 style={{ color: "white" }}>Vodopad Lisine</h2>

      <p style={{ paddingTop: "50px" }}>
        Vodopad Veliki Buk, poznat i kao Lisine, jedno je od prirodnih čuda koja
        se nalaze na padinama Beljanice u istočnoj Srbiji. Ovaj veličanstveni
        vodopad smešten je na rečici Vrelu, desnoj pritoci reke Resave, i svojom
        impozantnom pojavom oduševljava sve koji ga posete. Sa visinom od oko 25
        metara, Veliki Buk se smatra jednim od najviših vodopada u Srbiji.
      </p>

      <img src={lisine2} alt="Vodopad Lisine 2" />

      <p>
        Vodopad Veliki Buk, smešten na nadmorskoj visini od oko 380 metara, u
        neposrednoj blizini poznate Resavske pećine, dodatno povećava turističku
        atraktivnost ovog kraja. Ovaj prirodni biser spada u akumulacione
        vodopade, čije spektakularne pojave nastaju akumulacijom bigra,
        stvarajući maleno, plitko jezerce koje je okruženo karakterističnim
        bigrenim blokovima. Vodopad Lisine, zajedno sa izvorom rečice Vrelo, ima
        poseban status kao spomenik prirode, pod zaštitom države, pod nazivom
        „Vodopad Lisine“, čime se ističe njegova vrednost kao važan deo
        geološkog nasleđa Srbije. Ovaj region je izvor mnogih voda koje potiču
        sa širokih kraških predela Beljanice, čime se uspostavlja direktna
        hidrografska povezanost sa ponornim rekama iz uvala Rečke i Busovate.
      </p>

      <img src={lisine3} alt="Vodopad Lisine 3" />

      <p>
        Područje oko Vodopada Veliki Buk, smeštenog na padinama Beljanice u
        istočnoj Srbiji, predstavlja pravu prirodnu oazu, prilagođenu za lak
        pristup posetiocima. Sve staze i područja su jasno obeležena, što
        omogućava sigurnu i jednostavnu posetu. Pored samog vodopada, turisti
        mogu uživati u lokalnim restoranima koji nude bogatstvo domaćih
        specijaliteta. Takođe, tu su i prenoćišta za one koji žele da produže
        svoj boravak i u potpunosti uživaju u ovoj prelepoj prirodi.
      </p>

      <img src={lisine4} alt="Vodopad Veliki Buk" />

      <p>
        Hidrosistem Lisine obuhvata izvor Veliko vrelo, vodotok i Vodopad Veliki
        Buk, stvarajući savršenu harmoniju vode i prirode koja pruža nezaboravno
        iskustvo posetiocima. Veliko vrelo, sa svojom čistom, bistrijom vodom,
        doprinosi lepotama vodopada, naročito u proleće kada je bogato vodom,
        pružajući zvučni spektakl koji odjekuje pod imenom Veliki Buk. Ispod
        celokupnog vodotoka, uređena je staza za pešake, koja omogućava prijatnu
        šetnju kroz ovaj prelep prirodni ambijent. U okolini su se divno
        uklopili etno restorani, vodenice i brvnare, stvarajući mali etno
        gradić. Restorani nude autentične specijalitete, a posetioci mogu
        uživati u domaćim proizvodima poput voćnih sokova, džemova, meda i
        raznih suvenira.
      </p>

      <img src={lisine5} alt="Vodopad Veliki Buk 2" />

      <p>
        Kada posetite Lisine, bićete očarani netaknutom prirodom Južnog Kučaja i
        Beljanice, bez obzira da li dolazite iz Ćuprije ili Despotovca. Ovi
        prelepi pejzaži postavljaju pitanje kako je moguće da ovakva lepota
        postoji baš u Srbiji. Osim Vodopada Veliki Buk, turistička ponuda
        Resavskog kraja je vrlo bogata i raznolika. Obavezno istražite okolna
        mesta, uključujući Resavsku pećinu, Krupajsko vrelo, manastire Ravanicu,
        Manasiju, Sisojevac, kao i jedinstveni vodopad Prskalo. Za ljubitelje
        avantura, tu je i Veliko vrelo, jedan od mnogobrojnih izvora smeštenih
        ispod Beljanice, koji nudi istraživanje divljeg i nepristupačnog terena.
      </p>
    </div>
  );
};
