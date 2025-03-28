import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { raskiOkrugData } from "./raskiOkrugData";

export const RaskiOkrug = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === raskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? raskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === 'Kraljevo') {
      navigate('Kraljevo')
    } else if (name === 'Manastir Studenica') {
      navigate('ManastirStudenica')
    } else if (name === 'Planina Kopaonik') {
      navigate('PlaninaKopaonik')
    } else if (name === 'Vrnjačka Banja') {
      navigate('VrnjackaBanja')
    } else if (name === 'Manastir Žiča') {
      navigate('ManastirZica')
    } else if (name === 'Tvrđava Maglič') {
      navigate('TvrdjavaMaglic')
    } else if (name === 'Planina Goč') {
      navigate('PlaninaGoc')
    } else if (name === 'Manastir Đurđevi Stupovi') {
      navigate('ManastirDjurdjeviStupovi')
    } else if (name === 'Tvrđava Stari Ras') {
      navigate('TvrdjavaStariRas')
    } else if (name === 'Manastir Sopoćani') {
      navigate('ManastirSopocani')
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
      <section className="raski okrug">
        <h1>Raški Okrug</h1>
        <form>
          <p>
            <span>Površina: </span>oko 3.788 km²
          </p>
          <p>
            <span>Broj stanovnika: </span>približno 240.000
          </p>
          <p>
            <span>Geografske karakteristike: </span>Planinski predeli, reka
            Ibar, šumski kompleks, pogodnost za stočarstvo, poljoprivredu i
            turizam.
          </p>
        </form>
        <div>
          Raški okrug se nalazi u jugozapadnom delu Srbije, a njegova teritorija
          obuhvata grad **Kraljevo**, koji je administrativni, ekonomski i
          kulturni centar okruga, kao i opštine poput Novi Pazar, Raška, Tutin,
          Sjenica i drugi. Okrug je poznat po svojoj bogatoj istoriji, jer je u
          ovom regionu bio važan kulturni centar u srednjem veku, a grad Novi
          Pazar je bio jedan od najvažnijih trgovačkih i verskih centara.
          Kraljevo, sa svoje strane, takođe ima značajnu istorijsku ulogu i
          razvio se kao ekonomski i industrijski centar. Raški okrug se ponosi
          svojim prirodnim lepotama, sa planinskim masivima, rekama i šumama,
          dok reka Ibar pruža posebnu vrednost ovom regionu. Turizam u Raškom
          okrugu obuhvata istorijske lokalitete, manastire, i kulturne
          spomenike, dok su prirodni predeli pogodna destinacija za ljubitelje
          planinarenja, biciklizma i lova. Okrug je takođe poznat po stočarstvu,
          posebno u proizvodnji mleka i mesa, kao i poljoprivredi, koja se
          temelji na gajenju žitarica, voća i povrća. Domaći proizvodi, kao što
          su sirevi i mesni proizvodi, popularni su suveniri i privlače turiste.
          Gastronomija Raškog okruga je bogata, sa tradicionalnim jelima koja
          odražavaju specifičan ukus i tradiciju ovog kraja. Okrug je idealno
          odredište za ljubitelje prirode, istorije i autentične kulture, dok je
          gostoprimstvo domaćina nadaleko poznato. Tokom godine, okrug nudi
          razne manifestacije, kulturne događaje, kao i sajmove, a posetioci
          mogu uživati u rekreativnim aktivnostima poput planinarenja, ribolova
          i biciklizma.
        </div>
      </section>
      <section className="citatClass">
        <p>
          Putnik vidi ono što vidi. Turista vidi ono što je došao da vidi. (G.K.
          Česterton)
        </p>
      </section>
      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {raskiOkrugData?.map((okrug, index) => (
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
