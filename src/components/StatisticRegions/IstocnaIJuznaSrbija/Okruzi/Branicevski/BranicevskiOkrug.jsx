import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { branicevskiOkrugData } from "./BranicevskiOkrugData";

export const BranicevskiOkrug = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === branicevskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? branicevskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === 'Požarevac') {
        return navigate('Pozarevac')
    } else if (name === 'Tvrđava Golubac') {
      return navigate('TvrdjavaGolubac')
    } else if (name === 'Srebrno Jezero') {
      return navigate('SrebrnoJezero')
    } else if (name === 'Manastir Tumane') {
      return navigate('ManastirTumane')
    } else if (name === 'Krupajsko Vrelo') {
      return navigate('KrupajskoVrelo')
    } else if (name === 'Manastir Gornjak') {
      return navigate('ManastirGornjak')
    } else if (name === 'Planina Beljanica') {
      return navigate('PlaninaBeljanica')
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
      <section className="branicevski okrug">
        <h1>Braničevski Okrug</h1>
        <form>
          <p>
            <span>Površina: </span>oko 3.865 km²
          </p>
          <p>
            <span>Broj stanovnika: </span>približno 180.000
          </p>
          <p>
            <span>Geografske karakteristike: </span>Ravničarski i brdoviti
            predeli, reke Dunav, Velika Morava i Mlava, plodno zemljište pogodno
            za poljoprivredu, bogati šumski kompleksi i značajni rudarski
            resursi.
          </p>
        </form>
        <div>
          Braničevski okrug se nalazi u istočnom delu Srbije, uz obalu Dunava, i
          obuhvata područja bogata prirodnim lepotama i kulturno-istorijskim
          znamenitostima. Ovaj okrug uključuje gradove Požarevac, Golubac i
          Petrovac na Mlavi, koji su značajni administrativni, ekonomski i
          kulturni centri. Požarevac, kao najveći grad okruga, poznat je po
          svojoj istorijskoj i kulturnoj baštini, dok je Golubac poznat po
          istoimenoj tvrđavi, jednoj od najočuvanijih srednjovekovnih
          fortifikacija na Dunavu. Braničevski okrug obiluje prirodnim
          bogatstvima, a posebno su značajni Nacionalni park Đerdap, rečne
          doline i termalne vode koje doprinose razvoju turizma i rekreacije.
          Privreda ovog okruga oslanja se na poljoprivredu, vinogradarstvo,
          rudarstvo i industriju, dok Dunav omogućava razvoj rečnog transporta i
          trgovine. Turistički potencijali uključuju arheološki lokalitet
          Viminacijum, manastire Gornjak i Tumane, kao i prirodne atrakcije
          poput Golubačke klisure i izvora reke Mlave. Pored toga, brojne
          manifestacije, poput Ljubičevskih konjičkih igara, doprinose očuvanju
          tradicije i privlače turiste iz celog regiona. Braničevski okrug
          predstavlja spoj bogate istorije, prirodnih lepota i savremenog
          razvoja, čineći ga jednim od značajnijih delova Srbije.
        </div>
      </section>
      <section className="citatClass">
        <p>
          Ljudi ne polaze na putovanje. Putovanja polaze do njih. (Džon
          Stejnbek)
        </p>
      </section>
      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {branicevskiOkrugData?.map((okrug, index) => (
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
