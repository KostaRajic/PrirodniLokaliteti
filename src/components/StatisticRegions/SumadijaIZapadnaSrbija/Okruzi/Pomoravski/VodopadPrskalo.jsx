import prskalo1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/VodopadPrskalo/vodopadPrskalo4.jpg";
import prskalo2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/VodopadPrskalo/vodopadPrskalo1.jpg";
import prskalo3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/VodopadPrskalo/vodopadPrskalo2.jpg";
import prskalo4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/VodopadPrskalo/vodopadPrskalo3.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const VodopadPrskalo = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(-1)}

      />
      <header></header>
      <img src={prskalo1} alt="Vodopad Prskalo 1" />

      <h2 style={{ color: "white" }}>Vodopad Prskalo</h2>

      <p style={{ paddingTop: "50px" }}>
        Vodopad Prskalo smešten je na padinama planinskog masiva Južni Kučaj, u
        centralnom delu Srbije. Nalazi se u dolini reke Nekudovo, na oko 15
        kilometara udaljenosti od naselja Resavica u opštini Despotovac. Vodopad
        je lako dostupan jer je u neposrednoj blizini puta koji povezuje
        Resavicu i Čestobrodicu.
      </p>

      <img src={prskalo2} alt="Vodopad Prskalo 2" />

      <p>
        Vodopad Prskalo ima visinu od 15 metara i nalazi se na nadmorskoj visini
        od 769 metara. Iako tokom godine nema mnogo vode, nikada ne presušuje.
        Izgledom podseća na visoku kamenu skulpturu, čineći ga jedinstvenom
        prirodnom pojavom na planini Kučaj. Formacija stenovitih slojeva,
        nastalih od bigrenih naslaga, stvorena je kroz vekove delovanjem vode
        koja teče uskim kanalom duž samog vrha, stvarajući pad sa najisturenije
        ivice.
      </p>

      <img src={prskalo3} alt="Vodopad Prskalo 3" />

      <p>
        Iako nije daleko od glavnog puta, pristup vodopadu nije nimalo lak, jer
        je okružen gustim rastinjem. Međutim, svaki uložen napor će se
        isplatiti, jer ćete teško želeti da napustite ovo mesto, a sigurno ćete
        poželeti da se ponovo vratite. Mir i tišina u okruženju netaknute
        prirode pružiće vam pravi odmor za dušu. Vodopad Prskalo je nastao od
        bigrenih naslaga koje je voda taložila kroz vekove. Sa leve strane
        vodopada, postoji uska staza koja vodi do izvora reke Nekudovo, koji se
        nalazi samo 50 metara od vodopada. Izvor reke nalazi se na samoj "glavi"
        Prskala. Reka, nakon što "kaplje" sa vodopada, nastavlja da teče prema
        Resavici. Na pola puta, između Prskala i Resavice, nalazi se područje
        zvano Uviralo, gde je postavljena tabla sa istim imenom. Na dnu kanjona,
        ispod ogromne stene, reka Nekudovo nestaje, tj. ponire.
      </p>

    </div>
  );
};
