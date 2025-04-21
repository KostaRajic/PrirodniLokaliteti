import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { prizrenskiOkrugData } from "./PrizrenskiOkrugData";
import { prizrenskiOkrugPathRoutes } from "./PrizrenskiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";

export const PrizrenskiOkrug = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === prizrenskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? prizrenskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Prizren") {
      navigate(prizrenskiOkrugPathRoutes.prizren)
    } else if (name === "Manastir Svetih Arhangela") {
      navigate(prizrenskiOkrugPathRoutes.manastirSvetihArhangela)
    } else if (name === "Vodopad Miruša") {
      navigate(prizrenskiOkrugPathRoutes.vodopadMirusa)
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
      <section className="prizrenski okrug">
        <h1>Prizrenski Okrug</h1>
        <form> <p> <span>Površina: </span>oko 2.000 km² </p> <p> <span>Broj stanovnika: </span>približno 300.000 </p> 
        <p> 
            <span>Geografske karakteristike: </span>Planinske oblasti, reke Bistrica i Lepenac, šumski predeli, plodne doline, i bogata istorijska i kulturna baština. </p> </form> 
        <div> Prizrenski okrug se nalazi u južnom delu Srbije i obuhvata grad Prizren, koji je kulturni i istorijski centar ovog regiona, kao i opštine Prizren, Suva Reka, Orahovac i druge manja naselja. Sedište okruga je grad Prizren, prepoznatljiv po svojoj bogatoj istoriji i tradiciji. 
            Prema poslednjem popisu, u okrugu živi oko 300.000 stanovnika.
Geografski, okrug se prostire kroz planinske i brdovite predela, dok reke Bistrica i Lepenac čine važnu vodnu mrežu ovog regiona. Okrug se odlikuje plodnim dolinama pogodnim za poljoprivredu, posebno za proizvodnju voća, povrća i vinove loze. 
Takođe, regija je bogata šumama koje su od velikog značaja za ekosistem.
Prizrenski okrug je poznat po svojoj kulturnoj baštini i istorijskim spomenicima, a grad Prizren je dom brojnim verskim objektima, manastirima i džamijama. Okrug je domaćin različitim kulturnim događanjima, festivalima i manifestacijama, a tradicija i običaji ovog kraja često se prikazuju kroz umetnost i muziku.
Prizren je, osim toga, popularna turistička destinacija, koja nudi istorijske spomenike, muzeje, galerije i prirodne lepote. Okrug je važan i za privredu Kosova, s razvijenim poljoprivrednim sektorom i trgovinom, a planinske oblasti i prirodne lepote čine ga atraktivnim za ekološki i avanturistički turizam.

</div>
      </section>
      <section className="citatClass">
        <p>
        Najveći rizik od svih je provesti život ne radeći ono što želite, misleći kako ćete kasnije moći da kupite slobodu kako biste to činili. (Radni Komisar)
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
