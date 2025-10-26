import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { pristinskiOkrugData } from "./PristinskiOkrugData";
import { pristinskiOkrugPathRoutes } from "./PristinskiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { useContextAuth } from "../../../../../Context";

const PristinskiOkrug = () => {
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
    setSlide(slide === prizrenskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? prizrenskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Priština") {
      navigate(pristinskiOkrugPathRoutes.pristina(switchLanguage))
    } else if (name === "Gračanica") {
      navigate(pristinskiOkrugPathRoutes.gracanica(switchLanguage))
    } else if (name === "Gazimestan") {
      navigate(pristinskiOkrugPathRoutes.gazimestan(switchLanguage))
    } else if (name === "Mermerna Pećina") {
      navigate(pristinskiOkrugPathRoutes.mermernaPecina(switchLanguage))
    } else if (name === "Tvrđava Novo Brdo") {
      navigate(pristinskiOkrugPathRoutes.tvrdjavaNovoBrdo(switchLanguage))
    }
  };

  return (
    <div className="okrugBackground">
      <header>
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(serbianMapPathRoutes.KosovoIMetohija(switchLanguage))}
          style={{ fill: "white" }}
        />
      </header>

      {switchLanguage === 'rs' ?
        (
          <>

            <section className="pristinki okrug" lang="sr">
              <h1>Prištinski Okrug</h1>
              <div className="basicInfo">
                <p>
                  <strong>Površina: </strong>oko 1.000 km²
                </p>
                <p>
                  <strong>Broj stanovnika: </strong>približno 450.000
                </p>
                <p>
                  <strong>Geografske karakteristike: </strong>Planinske oblasti, reke Sitnica i Gračanica, brojne šume, plodne doline i bogata kulturna baština.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {!isMobile && showArticle &&
                <article lang="sr">
                  <p>
                    <strong>Prištinski okrug</strong> se nalazi u centralnom delu Kosova, obuhvatajući grad Prištinu i opštine Priština, Gračanica, Laplje Selo, Novo Brdo i druge manje opštine. Sedište okruga je grad Priština, koji je i glavni grad Kosova.
                  </p>
                  <p>
                    Prema poslednjem popisu, u okrugu živi oko 450.000 stanovnika. Okrug se prostire na planinskim i brdovitim predelima, ali se odlikuje i plodnim dolinama koje su pogodne za poljoprivredu, posebno za proizvodnju žitarica, voća i povrća.
                  </p>
                  <p>
                    Region je bogat šumama, dok su reke Sitnica i Gračanica najznačajniji vodotokovi.
                  </p>
                  <p>
                    Prištinski okrug je prepoznatljiv po svojoj kulturnoj baštini, a grad Priština ima značajnu istorijsku i političku ulogu na Kosovu. Okrug je domaćin brojnih kulturnih, umetničkih i naučnih događaja, a bogata tradicija i običaji ovog kraja često se ističu kroz manifestacije.
                  </p>
                  <p>
                    Priština, kao najveći grad, nudi i brojne turističke atrakcije, uključujući istorijske spomenike, muzeje i galerije. Prištinski okrug je od ključnog značaja za privredu Kosova, sa razvijenim sektorima industrije, trgovine i usluga.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Ne putujemo da bismo pobegli od života, nego da život ne pobegne od nas. (nepoznati autor)
              </blockquote>
            </section>


          </>
        )
        :
        (
          <>

            <section className="pristinki okrug" lang="en">
              <h1>Pristina District</h1>
              <div className="basicInfo">
                <p>
                  <strong>Area: </strong>approximately 1,000 km²
                </p>
                <p>
                  <strong>Population: </strong>around 450,000
                </p>
                <p>
                  <strong>Geographic features: </strong>Mountainous areas, the Sitnica and Gračanica rivers, numerous forests, fertile valleys, and rich cultural heritage.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="en">
                  <p>
                    <strong>The Pristina District</strong> is located in the central part of Kosovo, encompassing the city of Pristina and the municipalities of Pristina, Gračanica, Laplje Selo, Novo Brdo, and other smaller municipalities. The administrative center of the district is the city of Pristina, which is also the capital of Kosovo.
                  </p>
                  <p>
                    According to the latest census, about 450,000 people live in the district. The area consists of mountainous and hilly terrain, but also includes fertile valleys suitable for agriculture, especially for the production of grains, fruits, and vegetables.
                  </p>
                  <p>
                    The region is rich in forests, while the Sitnica and Gračanica rivers are the most significant watercourses.
                  </p>
                  <p>
                    The Pristina District is known for its cultural heritage, and the city of Pristina plays an important historical and political role in Kosovo. The district hosts numerous cultural, artistic, and scientific events, and the rich traditions and customs of the area are often showcased through festivals and celebrations.
                  </p>
                  <p>
                    As the largest city, Pristina offers many tourist attractions, including historical monuments, museums, and galleries. The Pristina District is of key importance to Kosovo’s economy, with well-developed sectors of industry, trade, and services.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                We don’t travel to escape life, but so life doesn’t escape us. (unknown author)
              </blockquote>
            </section>


          </>
        )}

      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          <div className="caruoselClass" style={{ padding: "0" }}>
            {pristinskiOkrugData?.map((okrug, index) => (
              <div
                key={okrug.id}
                className={
                  slide === index
                    ? "caruoselBackground caruoselBackground-visible"
                    : "caruoselBackground caruoselBackground-hidden"
                }
              >
                <img
                  src={okrug.img}
                  loading="lazy"
                  alt={switchLanguage === 'en' ? okrug.nameENG ?? okrug.name : okrug.name}
                />
                <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevContent} />
                <div className="caruoselInfo">
                  <h3>{switchLanguage === 'en' ? okrug.nameENG ?? okrug.name : okrug.name}</h3>
                  <p>{switchLanguage === 'en' ? okrug.mainTextENG : okrug.mainTextSRB}</p>
                  <button onClick={() => readMore(okrug.name)}>
                    {switchLanguage === 'rs' ? 'Pročitaj više' : 'Read more'}
                  </button>
                </div>

                <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextContent} />
              </div>
            ))}
          </div>

        </div>
      </section>
      <footer></footer>
      <Outlet />
    </div>
  );
};


export default PristinskiOkrug;