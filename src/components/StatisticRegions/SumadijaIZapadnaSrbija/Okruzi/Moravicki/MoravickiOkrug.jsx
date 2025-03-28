import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { moravickiOkrugData } from "./moravickiOkrugData";

export const MoravickiOkrug = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === moravickiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? moravickiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === 'Čačak') {
      navigate('Cacak')
    } else if ( name === 'Ovčarsko - kablarska klisura' ) {
      navigate('OvcarskoKablarskaKlisura')
    } else if ( name === 'Jezero Međuvršje' ) {
      navigate('JezeroMedjuvrsje')
    } else if ( name === 'Manastir Blagoveštenje' ) {
      navigate('ManastirBlagovestenje')
    } else if ( name === 'Guča' ) {
      navigate('Guca')
    } else if ( name === 'Gornji Milanovac' ) {
      navigate('GornjiMilanovac')
    } else if ( name === 'Planina Rudnik' ) {
      navigate('PlaninaRudnik')
    } else if ( name === 'Manastir Sretenje' ) {
      navigate('ManastirSretenje')
    } else if ( name === 'Manastir Svete Trojice' ) {
      navigate('ManastirSveteTrojice')
    }
  };

  return (
    <div className="okrugBackground">
      <header>
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(-1)}
          style={{ fill: "white"}}
        />
      </header>
      <section className="moravicki okrug">
        <h1>Moravički Okrug</h1>
        <form>
          <p>
            <span>Površina: </span>oko 3.211 km²
          </p>
          <p>
            <span>Broj stanovnika: </span>približno 270.000
          </p>
          <p>
            <span>Geografske karakteristike: </span>Raznovrsni pejzaži, blagi
            brežuljci, plodne ravnice, reka Morava, pogodnost za poljoprivredu,
            stočarstvo i turizam.
          </p>
        </form>
        <div>
          Moravički okrug se nalazi u centralnom delu Srbije, a njegova
          teritorija obuhvata grad Čačak, koji je administrativni, ekonomski i
          kulturni centar okruga, kao i opštine poput Gornji Milanovac, Lučani,
          Ivanjica, i drugi. Ovaj okrug je poznat po bogatoj istoriji, a grad
          Čačak se ponosi značajem iz perioda Rimskog carstva, kao i tradicijom
          razvoja industrije i trgovine. Moravički okrug je prepoznatljiv po
          prirodnim lepotama, sa velikim brojem reka, jezera i planinskih
          oblasti, uključujući planinu Ovčar, koja je jedan od najlepših delova
          ovog regiona. Turizam u Moravičkom okrugu uključuje poznate lokalitete
          poput Ovčarsko-Kablarske klisure, prirodnog rezervata, manastira iz
          perioda srednjeg veka, kao i čuvenih jezera i termalnih izvora. Okrug
          je takođe poznat po tradiciji stočarstva i poljoprivrede, naročito u
          proizvodnji voća, povrća i mlečnih proizvoda. Domaći proizvodi i
          suveniri privlače turiste i posetioce, dok je i gastronomija ovog
          kraja bogata i raznolika. Rekreativni turizam je razvijen zahvaljujući
          planiranim stazama za planinarenje, biciklizam, kao i mogućnostima za
          lov i ribolov. Okrug nudi bogat kulturni život sa brojnim
          manifestacijama, kao što su Čačanska kulturna leta, Sabor tamburaša, i
          mnoge druge manifestacije koje oživljavaju tradiciju i običaje ovog
          kraja. Moravički okrug je idealno mesto za ljubitelje prirode,
          istorije i tradicije, a domaćini su poznati po gostoprimstvu.
        </div>
      </section>
      <section className="citatClass">
        <p>
          Putujemo zato što su udaljenost i raznolikost tajni osveživači
          kreativnosti. Kada stignemo kući, kuća je i dalje ista. Ali nešto
          unutar našeg uma se promenilo, i to sve menja. (Johan Lehrer)
        </p>
      </section>
      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {moravickiOkrugData?.map((okrug, index) => (
            <div
              key={okrug.id}
              style={{ backgroundImage: `url(${okrug.img})` }}
              className={
                slide === index
                  ? "caruoselBackground caruoselBackground-visible"
                  : "caruoselBackground caruoselBackground-hidden"
              }
            >
              <BsArrowLeftCircleFill
                className="arrow arrow-left"
                onClick={prevContent}
              />
              <div className="caruoselInfo" style={{ padding: "0" }}>
                <h3>{okrug.name}</h3>
                <p>{okrug.mainText}</p>
                <button onClick={() => readMore(okrug.name)}>
                  Pročitaj više
                </button>
              </div>
              <BsArrowRightCircleFill
                className="arrow arrow-right"
                onClick={nextContent}
              />
            </div>
          ))}
        </div>
      </section>
      <footer></footer>
      <Outlet />
    </div>
  );
};
