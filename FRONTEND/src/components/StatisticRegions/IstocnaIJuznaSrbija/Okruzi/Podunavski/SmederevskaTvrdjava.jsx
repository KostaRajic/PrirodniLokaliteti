/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import smederevskaTvrdjava1 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/SmederevskaTvrdjava/desktop/smederevskaTvrdjava1.jpg";
import smederevskaTvrdjava2 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/SmederevskaTvrdjava/desktop/smederevskaTvrdjava2.jpg";
import smederevskaTvrdjava3 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/SmederevskaTvrdjava/desktop/smederevskaTvrdjava3.jpg";
import smederevskaTvrdjava4 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/SmederevskaTvrdjava/desktop/smederevskaTvrdjava4.jpg";
import smederevskaTvrdjava5 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/SmederevskaTvrdjava/desktop/smederevskaTvrdjava5.jpg";
import smederevskaTvrdjava11 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/SmederevskaTvrdjava/mobile/smederevskaTvrdjavaM1.jpg";
import smederevskaTvrdjava22 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/SmederevskaTvrdjava/mobile/smederevskaTvrdjavaM2.jpg";
import smederevskaTvrdjava33 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/SmederevskaTvrdjava/mobile/smederevskaTvrdjavaM3.jpg";
import smederevskaTvrdjava44 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/SmederevskaTvrdjava/mobile/smederevskaTvrdjavaM4.jpg";
import smederevskaTvrdjava55 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/SmederevskaTvrdjava/mobile/smederevskaTvrdjavaM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { podunavskiOkrugPathRoutes } from "./PodunavskiOkrugPathRouts";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const SmederevskaTvrdjava = () => {
  const navigate = useNavigate();
  const { switchLanguage } = useContextAuth();
  const { lang } = useParams();

  useEffect(() => {
    if (lang && lang !== switchLanguage) {
      const newPath = window.location.pathname.replace(/^\/[^\/]+/, `/${switchLanguage}`);
      navigate(newPath, { replace: true });
    }
  }, [switchLanguage, lang, navigate]);


  return (
    <>
      <Helmet>

        <title>{switchLanguage === 'rs' ? "Smederevska tvrđava – Poslednja prestonica Srpske Despotovine | Serbia Wonders" : "Smederevo Fortress – The Last Capital of the Serbian Despotate | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Smederevska tvrđava je velika srednjovekovna tvrđava na ušću Jezave u Dunav, izgrađena u 15. veku kao prestonica despota Đurđa Brankovića i važno vojno utvrđenje."
            :
            "Smederevo Fortress, built in the 15th century at the confluence of the Jezava and Danube rivers, was the capital of Despot Đurađ Branković and a key medieval military stronghold."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Smederevska tvrđava, Smederevo, Srpska Despotovina, Đurađ Branković, srednjovekovna tvrđava, Dunav, srpska istorija, utvrđenje"
            :
            "Smederevo Fortress, Serbian Despotate, Đurađ Branković, medieval fortress, Danube, Serbian history, fortification"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/podunavski-okrug/smederevska-tvrdjava`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/podunavski-okrug/smederevska-tvrdjava"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/podunavski-okrug/smederevska-tvrdjava"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/podunavski-okrug/smederevska-tvrdjava"
        />
      </Helmet >



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(podunavskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${smederevskaTvrdjava11} 450w, ${smederevskaTvrdjava1} `} alt="Smederevska Tvrđava 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Smederevska Tvrđava</h1>

              <section lang="sr">
                <p>
                  <strong>Smederevska tvrđava</strong>, poslednja prestonica srpske srednjovekovne države, nalazi se u istoimenom gradu, na ušću reke <em>Jezave</em> u <em>Dunav</em>. Podignuta je u drugoj četvrtini 15. veka kao novo prestono mesto i utvrđeni dvor despota <strong>Đurđa Brankovića</strong>.
                  <br /><br />
                  Građena je s namerom da odoli osmanskim napadima i sastojala se od <strong>Velikog</strong> i <strong>Malog grada</strong>, koje je štitilo 25 kula i snažni bedemi. Ova građevina se smatra poslednjim značajnim ostvarenjem srpske srednjovekovne vojne arhitekture. Površinom od <strong>14,5 hektara</strong>, ubraja se među najveća ravničarska utvrđenja Evrope.
                  <br /><br />
                  Iako je izdržala više opsada, tvrđava je pala pod <em>osmansku vlast</em> 1459. godine, čime je označen kraj Srpske despotovine. Tokom 20. veka bila je znatno oštećena u oba svetska rata, ali je zadržala svoju monumentalnost.
                  <br /><br />
                  Danas su na prostoru <strong>Malog grada</strong> izvedeni konzervatorski i restauratorski radovi, dok <em>bedemi i kule Velikog grada</em> čekaju na obnovu.
                </p>
              </section>

              <img srcSet={`${smederevskaTvrdjava33} 450w, ${smederevskaTvrdjava3}`} alt="Smederevska Tvrđava 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Prvi pisani pomen <strong>Smedereva</strong> potiče iz početka <strong>11. veka</strong>, iz povelje cara <em>Vasilija II</em> iz 1019. godine, kada su ti krajevi bili pod vlašću Vizantije. Sledeći trag o Smederevu potiče iz <strong>1381. godine</strong>, iz hrisovulje kneza <strong>Lazara</strong>, kojom daruje posede manastiru <em>Ravanici</em>.
                  <br /><br />
                  Naselje stiče značaj početkom 14. veka, tokom turskog napredovanja, kada se srpska država povlači ka severu, a prestonica biva premeštena u Beograd.
                </p>
              </section>

              <img srcSet={`${smederevskaTvrdjava22} 450w, ${smederevskaTvrdjava2}`} alt="Smederevska Tvrđava 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Pravi procvat Smedereva počinje dolaskom despota <strong>Đurđa Brankovića</strong> (1427–1456), kada grad postaje nova prestonica i glavno upravno, privredno, kulturno i crkveno središte Despotovine.
                  <br /><br />
                  Nakon gubitka Beograda, Đurađ je izabrao Smederevo zbog strateške lokacije na <em>Dunavu</em> i blizine granice sa <em>Ugarskom</em>, odakle je mogao zatražiti pomoć ili se povući u slučaju opasnosti. Tvrđava je time postala <strong>tampon zona</strong> između Ugarske i Osmanlija.
                </p>
              </section>

              <img srcSet={`${smederevskaTvrdjava44} 450w, ${smederevskaTvrdjava4}`} alt="Smederevska Tvrđava 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Sudbina Srbije tada je zavisila od složenih odnosa između <strong>Osmanskog carstva</strong> i <strong>Ugarske</strong>. Despot Đurađ, kao dvostruki vazal, morao je balansirati između ovih sila.
                  <br /><br />
                  Da bi izgradio Smederevsku tvrđavu, Đurađ je 1428. godine dobio dozvolu od sultana <strong>Murata II</strong>. Sultan je verovao da će to zaustaviti širenje Ugarske, dok je Đurađ u tvrđavi video sredstvo za odbranu od Osmanlija i oslonac za savez sa Mađarima.
                </p>
              </section>

              <img srcSet={`${smederevskaTvrdjava55} 450w, ${smederevskaTvrdjava5}`} alt="Smederevska Tvrđava 5" loading="lazy" />

              <section lang="sr">
                <p>
                  Grad je bio sedište Despotovine sve do <strong>1459. godine</strong>, osim u periodu 1439–1444. godine kada je kratko bio pod osmanskom kontrolom.
                  <br /><br />
                  Tvrđava je odolela opsadama 1439, 1453. i 1456. godine, ali je konačno pala 1459. godine, čime je simbolično i stvarno označen kraj srpske srednjovekovne države. Pod turskom vlašću, Smederevo je bilo sedište <strong>Smederevskog sandžaka</strong>.
                  <br /><br />
                  U periodu 1718–1739. bio je u sastavu <em>Austro-Ugarske</em>, ali je zatim vraćen Turcima. Konačno, 1867. godine <em>ključevi grada</em> predati su knezu <strong>Mihailu Obrenoviću</strong>, čime se Smederevo vratio pod srpsku upravu.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1>Smederevo Fortress</h1>

              <section lang="en"> <p> <strong>Smederevo Fortress</strong>, the last capital of the medieval Serbian state, is located in the city of the same name, at the confluence of the <em>Jezava River</em> into the <em>Danube</em>. It was built in the second quarter of the 15th century as a new capital and fortified court of Despot <strong>Đurađ Branković</strong>. <br /><br /> It was constructed with the intent to withstand Ottoman attacks and consisted of the <strong>Great Town</strong> and the <strong>Small Town</strong>, protected by 25 towers and strong walls. This building is considered the last significant achievement of Serbian medieval military architecture. Covering an area of <strong>14.5 hectares</strong>, it ranks among the largest lowland fortifications in Europe. <br /><br /> Although it withstood several sieges, the fortress fell under <em>Ottoman rule</em> in 1459, marking the end of the Serbian Despotate. During the 20th century, it was significantly damaged in both World Wars but retained its monumental character. <br /><br /> Today, conservation and restoration works have been carried out in the area of the <strong>Small Town</strong>, while the <em>walls and towers of the Great Town</em> await renovation. </p> </section>
              <img srcSet={`${smederevskaTvrdjava33} 450w, ${smederevskaTvrdjava3}`} alt="Smederevo Fortress 2" loading="lazy" />

              <section lang="en"> <p> The first written mention of <strong>Smederevo</strong> dates from the beginning of the <strong>11th century</strong>, in the charter of Emperor <em>Basil II</em> from 1019, when these lands were under Byzantine rule. The next record about Smederevo comes from <strong>1381</strong>, in a chrysobull issued by Prince <strong>Lazar</strong>, granting estates to the monastery of <em>Ravanica</em>. <br /><br /> The settlement gained importance at the beginning of the 14th century, during the Ottoman advance, when the Serbian state retreated north and the capital was moved to Belgrade. </p> </section>
              <img srcSet={`${smederevskaTvrdjava22} 450w, ${smederevskaTvrdjava2}`} alt="Smederevo Fortress 3" loading="lazy" />

              <section lang="en"> <p> The true flourishing of Smederevo began with the arrival of Despot <strong>Đurađ Branković</strong> (1427–1456), when the city became the new capital and the main administrative, economic, cultural, and ecclesiastical center of the Despotate. <br /><br /> After losing Belgrade, Đurađ chose Smederevo because of its strategic location on the <em>Danube</em> and proximity to the border with <em>Hungary</em>, from where he could request aid or retreat in case of danger. The fortress thus became a <strong>buffer zone</strong> between Hungary and the Ottomans. </p> </section>
              <img srcSet={`${smederevskaTvrdjava44} 450w, ${smederevskaTvrdjava4}`} alt="Smederevo Fortress 4" loading="lazy" />

              <section lang="en"> <p> The fate of Serbia then depended on the complex relations between the <strong>Ottoman Empire</strong> and <strong>Hungary</strong>. Despot Đurađ, as a dual vassal, had to balance between these powers. <br /><br /> To build Smederevo Fortress, Đurađ obtained permission from Sultan <strong>Murad II</strong> in 1428. The Sultan believed this would halt Hungarian expansion, while Đurađ saw the fortress as a means of defense against the Ottomans and a support for an alliance with the Hungarians. </p> </section>
              <img srcSet={`${smederevskaTvrdjava55} 450w, ${smederevskaTvrdjava5}`} alt="Smederevo Fortress 5" loading="lazy" />

              <section lang="en"> <p> The city remained the seat of the Despotate until <strong>1459</strong>, except for the period 1439–1444, when it was briefly under Ottoman control. <br /><br /> The fortress withstood sieges in 1439, 1453, and 1456, but finally fell in 1459, symbolically and factually marking the end of the medieval Serbian state. Under Turkish rule, Smederevo was the seat of the <strong>Sanjak of Smederevo</strong>. <br /><br /> From 1718 to 1739, it was part of the <em>Austro-Hungarian Empire</em>, but was then returned to the Turks. Finally, in 1867, the <em>keys to the city</em> were handed over to Prince <strong>Mihailo Obrenović</strong>, marking Smederevo’s return to Serbian administration. </p> </section>

            </>
          )}

      </div>
    </>
  );
};


export default SmederevskaTvrdjava;