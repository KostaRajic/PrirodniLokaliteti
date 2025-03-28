import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { kolubarskiOkrugData } from "./KulubarskiOkrugData";

export const KolubarskiOkrug = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === kolubarskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? kolubarskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Valjevo") {
      navigate("Valjevo");
    } else if (name === "Taorska Vrela") {
      navigate("TaorskaVrela");
    } else if (name === "Petnica i Petnička pećina") {
      navigate("PetnickaPecina");
    } else if (name === "Reka Gradac") {
      navigate("RekaGradac");
    } else if (name === "Manastir Lelić") {
      navigate("ManastirLelic");
    } else if (name === "Vidikovac Velika stena") {
      navigate("VidikovacVelikaStena");
    } else if (name === "Vrh Rajac") {
      navigate("VrhRajac");
    } else if (name === "Manastir Ćelije") {
      navigate("ManastirCelije");
    } else if (name === "Divčibare") {
      navigate("Divcibare");
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
      <section className="kolubarski okrug">
        <h1>Kolubarski Okrug</h1>
        <form>
          <p>
            <span>Površina: </span>oko 2.474 km²
          </p>
          <p>
            <span>Broj stanovnika: </span>približno 175.000
          </p>
          <p>
            <span>Geografske karakteristike: </span>Brdovito područje, bogatstvo
            rudnih resursa, reka Kolubara, pogodnost za poljoprivredu, rudarstvo
            i industriju.
          </p>
        </form>
        <div>
          Kolubarski okrug se nalazi u zapadnom delu Srbije i prostire se između
          reka Kolubare i Ljiga, obuhvatajući područja koja su poznata po
          raznovrsnim prirodnim i kulturnim karakteristikama. Ovaj okrug
          uključuje grad Valjevo, kao administrativni, ekonomski i kulturni
          centar, zajedno sa opštinama kao što su Lajkovac, Ub, Ljig, Mionica i
          Osečina. Valjevo se ističe svojim bogatim istorijskim nasleđem, kao i
          razvijenom industrijom, trgovinom i turizmom. Kolubarski okrug je
          poznat po rudarstvu, posebno eksploataciji lignita iz rudarskog basena
          Kolubara, ali i po plodnim dolinama koje su pogodne za poljoprivredu,
          uzgajanje voća, povrća i stočarstvo. Turistički potencijali okruga
          uključuju prirodne znamenitosti poput Divčibara, planinskog područja
          koje je popularno za odmor i rekreaciju, kao i brojnih reka, šuma i
          termalnih izvora. Kulturni život Kolubarskog okruga obogaćen je
          manifestacijama poput Tešnjarskih večeri u Valjevu, koje okupljaju
          ljubitelje umetnosti i tradicije. Ovo područje nudi brojne mogućnosti
          za rekreativni turizam, uključujući planinarenje, lov, ribolov i
          biciklizam, a očuvane tradicije i običaji čine ga atraktivnim i
          autentičnim delom Srbije.
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
          {kolubarskiOkrugData?.map((okrug, index) => (
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
