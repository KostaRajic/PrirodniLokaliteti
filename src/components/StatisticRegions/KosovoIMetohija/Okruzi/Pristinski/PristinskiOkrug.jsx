import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { pristinskiOkrugData } from "./PristinskiOkrugData";
import { pristinskiOkrugPathRoutes } from "./PristinskiOkrugPathRoutes";
import { prizrenskiOkrugData } from "../Prizrenski/PrizrenskiOkrugData";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";

export const PristinskiOkrug = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === prizrenskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? prizrenskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Priština") {
        navigate (pristinskiOkrugPathRoutes.pristina)
    } else if (name === "Gračanica") {
        navigate (pristinskiOkrugPathRoutes.gracanica)
    } else if (name === "Gazimestan") {
        navigate (pristinskiOkrugPathRoutes.gazimestan)
    } else if (name === "Mermerna Pećina") {
        navigate (pristinskiOkrugPathRoutes.mermernaPecina)
    } else if (name === "Tvrđava Novo Brdo") {
        navigate (pristinskiOkrugPathRoutes.tvrdjavaNovoBrdo)
    }
  };

  return (
    <div className="okrugBackground">
      <header>
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(serbianMapPathRoutes.KosovoIMetohija)}
          style={{ fill: "white" }}
        />
      </header>
      <section className="pristinki okrug">
        <h1>Prištinski Okrug</h1>
        <form>
          <p>
            <span>Površina: </span>oko 1.000 km²
          </p>
          <p>
            <span>Broj stanovnika: </span>približno 450.000
          </p>
          <p>
            <span>Geografske karakteristike: </span>Planinske oblasti, reke
            Sitnica i Gračanica, brojne šume, plodne doline i bogata kulturna
            baština.
          </p>
        </form>
        <div>
          Prištinski okrug se nalazi u centralnom delu Kosova, obuhvatajući grad
          Prištinu i opštine Priština, Gračanica, Laplje Selo, Novo Brdo, i
          druge manje opštine. Sedište okruga je grad Priština, koji je i glavni
          grad Kosova. Prema poslednjem popisu, u okrugu živi oko 450.000
          stanovnika. Okrug se prostire na planinskim i brdovitim predelima, ali
          se odlikuje i plodnim dolinama koje su pogodne za poljoprivredu,
          posebno za proizvodnju žitarica, voća i povrća. Region je bogat
          šumama, dok su reke Sitnica i Gračanica najznačajniji vodotokovi.
          Prištinski okrug je prepoznatljiv po svojoj kulturnoj baštini, a grad
          Priština ima značajnu istorijsku i političku ulogu na Kosovu. Okrug je
          domaćin brojnih kulturnih, umetničkih i naučnih događaja, a bogata
          tradicija i običaji ovog kraja često se ističu kroz manifestacije.
          Priština, kao najveći grad, nudi i brojne turističke atrakcije,
          uključujući istorijske spomenike, muzeje i galerije. Prištinski okrug
          je od ključnog značaja za privredu Kosova, sa razvijenim sektorima
          industrije, trgovine i usluga.
        </div>
      </section>
      <section className="citatClass">
        <p>
        Ne putujemo da bismo pobegli od života, nego da život ne pobegne od nas. (nepoznati autor)
        </p>
      </section>
      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {prizrenskiOkrugData?.map((okrug, index) => (
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
