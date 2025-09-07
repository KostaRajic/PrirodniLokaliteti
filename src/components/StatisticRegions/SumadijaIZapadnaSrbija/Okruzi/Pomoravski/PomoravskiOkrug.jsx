import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { pomoravskiOkrugData } from "./pomoravskiOkrugData";
import { pomoravskiOkrugPathRoutes } from "./PomoravskiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { useContextAuth } from "../../../../../Context";


const PomoravskiOkrug = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();
  const { switchLanguage } = useContextAuth();
  const [showArticle, setShowArticle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextContent = () => {
    setSlide(slide === pomoravskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? pomoravskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === 'Jagodina') {
      navigate(pomoravskiOkrugPathRoutes.jagodina(switchLanguage))
    } else if (name === 'Grza') {
      navigate(pomoravskiOkrugPathRoutes.grza(switchLanguage))
    } else if (name === 'Manastir Manasija') {
      navigate(pomoravskiOkrugPathRoutes.manastirManasija(switchLanguage))
    } else if (name === 'Vodopad Lisine') {
      navigate(pomoravskiOkrugPathRoutes.vodopadLisine(switchLanguage))
    } else if (name === 'Manastir Jošanica') {
      navigate(pomoravskiOkrugPathRoutes.manastirJosanica(switchLanguage))
    } else if (name === 'Resavska Pećina') {
      navigate(pomoravskiOkrugPathRoutes.resavskaPecina(switchLanguage))
    } else if (name === 'Vodopad Prskalo') {
      navigate(pomoravskiOkrugPathRoutes.vodopadPrskalo(switchLanguage))
    } else if (name === 'Manastir Ravanica') {
      navigate(pomoravskiOkrugPathRoutes.manastirRavanica(switchLanguage))
    } else if (name === 'Prirodnjački centar') {
      navigate(pomoravskiOkrugPathRoutes.prirodnjackiCentar(switchLanguage))
    }
  };

  return (
    <div className="okrugBackground">
      <header>
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(serbianMapPathRoutes.SumadijaIZapadnaSrbija(switchLanguage))}
          style={{ fill: "white" }}
        />
      </header>
      {switchLanguage === 'rs' ?
        (
          <>

            <section className="pomoravski okrug" lang="rs">
              <h1>Pomoravski okrug</h1>
              <div className="basicInfo">
                <p>
                  <strong>Površina: </strong><em>oko 3.685 km²</em>
                </p>
                <p>
                  <strong>Broj stanovnika: </strong><em>približno 260.000</em>
                </p>
                <p>
                  <strong>Geografske karakteristike: </strong>
                  <em>Plodne ravnice, reka Morava, brežuljci, pogodnost za poljoprivredu, stočarstvo i turizam.</em>
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="rs">
                  <p>
                    <strong>Pomoravski okrug</strong> se nalazi u <em>centralnom delu Srbije</em>, a njegova teritorija obuhvata grad <strong>Jagodinu</strong>, koji je <em>administrativni, ekonomski i kulturni centar</em> okruga, kao i opštine poput <strong>Svilajnac</strong>, <strong>Paraćin</strong>, <strong>Rekovac</strong> i druge.
                  </p>
                  <p>
                    Okrug je poznat po <em>bogatoj istoriji</em>, a grad Jagodina je značajan još iz perioda <strong>Rimskog carstva</strong> i <strong>srednjeg veka</strong>, sa tradicijom <em>trgovine i industrije</em>.
                  </p>
                  <p>
                    Pomoravski okrug je prepoznatljiv po <em>prirodnim lepotama</em>, sa velikim brojem <strong>reka, polja i brda</strong>, a <strong>Morava</strong>, koja protiče kroz ovaj region, daje <em>posebnu vrednost</em> ovom okrugu.
                  </p>
                  <p>
                    Turizam u Pomoravskom okrugu obuhvata <strong>istorijske lokalitete</strong>, <strong>manastire iz perioda srednjeg veka</strong>, <strong>kulturne spomenike</strong>, kao i brojne <em>rekreativne sadržaje</em>.
                  </p>
                  <p>
                    Okrug je takođe poznat po <strong>poljoprivredi</strong>, posebno u proizvodnji <strong>voća, povrća i žitarica</strong>. <em>Domaći proizvodi</em>, poput <strong>rakije</strong> i <strong>vina</strong>, popularni su <em>suveniri</em> i privlače turiste.
                  </p>
                  <p>
                    <strong>Gastronomija</strong> je bogata, sa <em>tradicionalnim jelima</em> ovog kraja. Pomoravski okrug je <strong>idealno mesto</strong> za <em>ljubitelje prirode, istorije i tradicije</em>, a <strong>gostoprimstvo domaćina</strong> je poznato i cenjeno.
                  </p>
                  <p>
                    Okrug nudi brojne <strong>manifestacije</strong> tokom godine, uključujući <em>kulturne događaje i sajmove</em>, kao i mogućnosti za <strong>lov, ribolov, biciklizam i planinarenje</strong>.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Svaki sanjar zna da je potpuno moguće biti nostalgičan prema mestima na kojima nikada nismo bili. (<em>Judit Turman</em>)
              </blockquote>
            </section>

          </>
        )
        :
        (
          <>

            <section className="pomoravski okrug" lang="en">
              <h1>Pomoravlje District</h1>
              <div className="basicInfo">
                <p>
                  <strong>Area: </strong><em>approximately 3,685 km²</em>
                </p>
                <p>
                  <strong>Population: </strong><em>around 260,000</em>
                </p>
                <p>
                  <strong>Geographical features: </strong>
                  <em>Fertile plains, the Morava River, rolling hills; suitable for agriculture, livestock breeding, and tourism.</em>
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="en">
                  <p>
                    <strong>The Pomoravlje District</strong> is located in the <em>central part of Serbia</em>, and its territory includes the city of <strong>Jagodina</strong>, which is the <em>administrative, economic, and cultural center</em> of the district, as well as municipalities such as <strong>Svilajnac</strong>, <strong>Paraćin</strong>, <strong>Rekovac</strong>, and others.
                  </p>
                  <p>
                    The district is known for its <em>rich history</em>, with Jagodina being significant since the time of the <strong>Roman Empire</strong> and the <strong>Middle Ages</strong>, with a tradition of <em>trade and industry</em>.
                  </p>
                  <p>
                    The Pomoravlje District is recognized for its <em>natural beauty</em>, with many <strong>rivers, fields, and hills</strong>, and the <strong>Morava River</strong>, which flows through the region, adds <em>special value</em> to the district.
                  </p>
                  <p>
                    Tourism in the Pomoravlje District includes <strong>historical sites</strong>, <strong>medieval monasteries</strong>, <strong>cultural landmarks</strong>, as well as numerous <em>recreational activities</em>.
                  </p>
                  <p>
                    The district is also known for its <strong>agriculture</strong>, especially in the production of <strong>fruits, vegetables, and grains</strong>. <em>Local products</em> such as <strong>rakija</strong> (fruit brandy) and <strong>wine</strong> are popular <em>souvenirs</em> and attract tourists.
                  </p>
                  <p>
                    <strong>Gastronomy</strong> is rich, with <em>traditional dishes</em> of the region. The Pomoravlje District is an <strong>ideal place</strong> for <em>nature, history, and tradition lovers</em>, and the <strong>hospitality of the locals</strong> is well known and appreciated.
                  </p>
                  <p>
                    The district offers many <strong>events</strong> throughout the year, including <em>cultural festivals and fairs</em>, as well as opportunities for <strong>hunting, fishing, cycling, and hiking</strong>.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Every dreamer knows it is entirely possible to be homesick for a place you've never been. (<em>Judit Thurman</em>)
              </blockquote>
            </section>

          </>
        )}

      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {pomoravskiOkrugData?.map((okrug, index) => (
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
                <h3>{switchLanguage === 'en' ? okrug.nameENG ? okrug.nameENG : okrug.name : okrug.name}</h3>
                <p>{switchLanguage === 'en' ? okrug.mainTextENG : okrug.mainTextSRB}</p>
                <button onClick={() => readMore(okrug.name)}>
                  {switchLanguage === 'rs' ? 'Pročitaj više' : 'Read more'}
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


export default PomoravskiOkrug;