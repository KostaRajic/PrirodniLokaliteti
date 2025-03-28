import krupajskoVrelo1 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/KrupajskoVrelo/krupajskoVrelo1.jpg";
import krupajskoVrelo2 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/KrupajskoVrelo/krupajskoVrelo2.jpg";
import krupajskoVrelo3 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/KrupajskoVrelo/krupajskoVrelo3.jpg";
import krupajskoVrelo4 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/KrupajskoVrelo/krupajskoVrelo4.jpg";
import krupajskoVrelo5 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/KrupajskoVrelo/krupajskoVrelo5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const KrupajskoVrelo = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} style={{fill: 'white'}} />
      <header></header>
      <img src={krupajskoVrelo1} alt="Krupajsko Vrelo 1" />

      <h2>Krupajsko Vrelo</h2>

      <p style={{ paddingTop: "50px" }}>
        Krupajsko vrelo se nalazi u istočnoj Srbiji, ispod zapadnog krečnjačkog
        odseka Beljanice, sa desne strane Krupajske reke, na nadmorskoj visini
        od 220 metara. Smešteno je u ataru sela Milanovca, oko 35 kilometara od
        Žagubice. Ovo vrelo pripada grupi kraških izvora, a temperatura vode se
        kreće između 9 i 11 °C. Okruženo je strmim, mestimično vertikalnim
        stenama koje formiraju amfiteatralni oblik.
        <br />
        <br />
        Potok koji izvire iz vrela, dug 435 metara, najpre teče ka severu u
        dužini od 130 metara, zatim skreće ka zapadu i nakon oko 300 metara
        uliva se u Krupajsku reku. Zbog izgradnje brane visoke oko 3 metra,
        vrelo danas ima izgled izduženog jezerca dužine 40 i širine 17 metara.
        Njegova voda se preko krune ustave preliva u vidu atraktivnog vodopada,
        dodatno naglašavajući lepotu ovog prirodnog bisera.
      </p>

      <img src={krupajskoVrelo4} alt="Krupajsko Vrelo 2" />

      <p>
        Speleoronilačkim istraživanjima iz 1998. godine, koja su predstavljala
        izuzetan naučni poduhvat, otkriven je inverzni krak pećinskog sifona
        dublji od 70 metara, kroz koji vode vrela dospevaju iz krečnjačkog
        masiva Beljanice. Od brane do starog mlina, vrelski potok protiče kroz
        krečnjačku sutjesku strmih strana i slapovitog korita.
      </p>

      <img src={krupajskoVrelo3} alt="Krupajsko Vrelo 3" />

      <p>
        Hidrološki režim vrela i njegova izdašnost nisu dovoljno istraženi. Kao
        i većina kraških izvora, ovo vrelo pokazuje velike promene u izdašnosti
        tokom godine, a naročito u višegodišnjem periodu. Pored zgrade mlina
        nalazi se betonska česma sa pet metalnih cevi iz kojih izvire topla voda
        temperature 26 °C i izdašnosti od 6 do 10 litara u sekundi. Ova voda
        potiče iz prirodnog termalnog izvora koji je kaptiran i podzemno
        sproveden do česme.
        <br />
        <br />
        Na oko deset metara od česme nalazi se još jedna termalna pojava – izvor
        u obliku minijaturnog vodopada, koji je nastao na samoizlivnoj geološkoj
        bušotini.
      </p>

      <img src={krupajskoVrelo2} alt="Krupajsko Vrelo 4" />

      <p>
        Krupajsko vrelo i njegov ambijent, koji obuhvata površinu od 9 hektara,
        zaštićeni su kao spomenik prirode od nacionalnog značaja Republike
        Srbije. Spomenik prirode „Krupajsko vrelo“ proglašen je Uredbom Vlade
        Republike Srbije („Službeni glasnik RS“, br. 9/95), na osnovu Zakona o
        zaštiti životne sredine.
        <br />
        <br />
        Ovo prirodno dobro od izuzetnog značaja predstavlja jedan od
        najizdašnijih kraških izvora u Srbiji. Zbog morfologije svog izvorišta,
        hidroloških funkcija i pratećih prirodnih karakteristika, ubraja se među
        najreprezentativnija gravitaciona vrela u zemlji.
      </p>

      <img src={krupajskoVrelo5} alt="Krupajsko Vrelo 5" />
      <p>
        Pored Krupajskog vrela nalazi se restoran koji nudi prijatan ambijent u
        prirodnom okruženju, sa pogledom na samo vrelo i njegovu kristalno čistu
        vodu. Restoran je popularno mesto za odmor i uživanje u domaćoj kuhinji,
        gde posetioci mogu probati tradicionalna srpska jela, svežu ribu i
        specijalitete pripremljene od lokalnih sastojaka.
        <br />
        <br />
        Atmosfera je opuštajuća, a prirodni pejzaž i šum vode doprinose
        jedinstvenom doživljaju. Restoran je omiljeno mesto kako za turiste,
        tako i za lokalno stanovništvo koje posećuje Krupajsko vrelo tokom cele
        godine.
      </p>
    </div>
  );
};
