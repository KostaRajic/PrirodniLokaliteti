import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { rasinskiOkrugData } from "./rasinskiOkrugData";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { rasinskiOkrugPathRoutes } from "./RasinskiOkrugPathRoutes";

export const RasinskiOkrug = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === rasinskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? rasinskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Kruševac") {
      navigate(rasinskiOkrugPathRoutes.krusevac);
    } else if (name === "Jezero Ćelije") {
      navigate(rasinskiOkrugPathRoutes.jezeroCelije);
    } else if (name === "Srpski srednjovekovni grad Koznik") {
      navigate(rasinskiOkrugPathRoutes.tvrdjavaKoznik);
    } else if (name === "Manastir Đunis") {
      navigate(rasinskiOkrugPathRoutes.manastirDjunis);
    } else if (name === "Svetilište Metođe") {
      navigate(rasinskiOkrugPathRoutes.svetilisteMetodje);
    } else if (name === "Ribarska Banja") {
      navigate(rasinskiOkrugPathRoutes.ribarskaBanja);
    } else if (name === "Manastir Ljubostinja") {
      navigate(rasinskiOkrugPathRoutes.manastirLjubostinja);
    } else if (name === "Vodopad Jelovarnik") {
      navigate(rasinskiOkrugPathRoutes.vodopadJelovarnik);
    }
  };

  return (
    <div className="okrugBackground">
      <header>
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(serbianMapPathRoutes.SumadijaIZapadnaSrbija)}
          style={{ fill: "white"}}
        />
      </header>
      <section className="rasinski okrug">
        <h1>Rasinski Okrug</h1>
        <form>
          <p>
            <span>Površina: </span>oko 2.667 km²
          </p>
          <p>
            <span>Broj stanovnika: </span>približno 240.000
          </p>
          <p>
            <span>Geografske karakteristike: </span>Brežuljkasti predeli, plodne
            doline, reka Zapadna Morava, planina Kopaonik, pogodnost za
            vinogradarstvo, poljoprivredu i turizam.
          </p>
        </form>
        <div>
          Rasinski okrug se nalazi u centralnom delu Srbije, a njegova
          teritorija obuhvata grad Kruševac, koji je administrativni, ekonomski
          i kulturni centar okruga, kao i opštine poput Trstenik, Aleksandrovac,
          Varvarin, Brus i Ćićevac. Okrug je poznat po bogatoj istoriji,
          naročito iz doba srednjovekovne Srbije, kada je Kruševac bio
          prestonica kneza Lazara. Rasinski okrug obiluje kulturno-istorijskim
          spomenicima, poput manastira Ljubostinja, Naupare i Veluće, dok je
          Lazarica jedan od najznačajnijih pravoslavnih hramova u Srbiji.
          Prirodne lepote ovog okruga čine ga privlačnim za turizam – planina
          Kopaonik pruža idealne uslove za zimske sportove i rekreaciju, dok
          reka Zapadna Morava omogućava razvoj ribolova i ekoturizma. Rasinski
          okrug je posebno poznat po vinogradima u Aleksandrovačkoj Župi, gde se
          proizvode visokokvalitetna vina. Poljoprivreda je značajna privredna
          grana, uzgajaju se voće, povrće i lekovito bilje, dok su domaći
          proizvodi, poput vina i rakije, popularni i među turistima. Kulturna
          scena okruga bogata je manifestacijama, među kojima se ističe "Župska
          berba", festival vina i grožđa u Aleksandrovcu. Gastronomska ponuda
          uključuje tradicionalna jela poput svadbarskog kupusa i jagnjetine
          ispod sača. Pored toga, Rasinski okrug nudi mogućnosti za biciklizam,
          planinarenje, lov i ribolov. Gostoprimstvo domaćina, istorijsko
          nasleđe i prirodne lepote čine ovaj okrug atraktivnim mestom za posetu
          i istraživanje.
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
          {rasinskiOkrugData?.map((okrug, index) => (
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
