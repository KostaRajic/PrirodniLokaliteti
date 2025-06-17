import pancevo1 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/desktop/pancevo2.jpg";
import pancevo2 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/desktop/pancevo3.jpg";
import pancevo3narodnaBasta1 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/desktop/pancevo4narodnaBasta1.jpg";
import pancevo3narodnaBasta2 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/desktop/pancevo4narodnaBasta2.jpg";
import pancevo3narodnaBasta3 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/desktop/pancevo4narodnaBasta3.jpg";
import pancevo3narodnaBasta4 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/desktop/pancevo4narodnaBasta4.jpg";
import pancevo4 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/desktop/pancevo5.jpg";
import pancevo5 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/desktop/pancevo6.jpg";
import pancevo6 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/desktop/pancevo7.jpg";
import pancevo7 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/desktop/pancevo8.jpg";
import pancevo11 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/mobile/Mpancevo2.jpg";
import pancevo22 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/mobile/Mpancevo3.jpg";
import pancevo3narodnaBasta11 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/mobile/Mpancevo4narodnaBasta1.jpg";
import pancevo3narodnaBasta22 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/mobile/Mpancevo4narodnaBasta2.jpg";
import pancevo3narodnaBasta33 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/mobile/Mpancevo4narodnaBasta3.jpg";
import pancevo3narodnaBasta44 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/mobile/Mpancevo4narodnaBasta4.jpg";
import pancevo44 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/mobile/Mpancevo5.jpg";
import pancevo55 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/mobile/Mpancevo6.jpg";
import pancevo66 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/mobile/Mpancevo7.jpg";
import pancevo77 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/mobile/Mpancevo8.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { juznoBanatskiPathRoutes } from "./JuznoBanatskiPathRoutes";

export const Pancevo = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(juznoBanatskiPathRoutes.home)} />
      <header></header>
      <img srcSet={`${pancevo44} 400w, ${pancevo4} `} alt="Pančevo grad" />

      <h2>Pančevo</h2>

      <p style={{ paddingTop: "50px"}}>
        Pančevo je jedan od najistaknutijih gradova u Vojvodini, prepoznatljiv
        po visokom stepenu industrijalizacije. I pored toga, grad ima bogatu
        kulturnu baštinu i značajnu ulogu u očuvanju tradicija ovog regiona.
        Pančevo je takođe važan centar za turizam, sa brojnim ponudama koje
        zadovoljavaju različite ukuse. Na našoj stranici posvećenoj ovom gradu,
        možete pronaći sve potrebne informacije za nezaboravno putovanje: od
        najboljih restorana, udobnih apartmana, do najinteresantnijih atrakcija.
        Otkrijte lepotu Banata i uživajte u svemu što Pančevo nudi!
      </p>

      <img srcSet={`${pancevo22} 400w, ${pancevo2} `} alt="Pančevo grad 2" />

      <p>
        Pančevo, smešteno na ušću reke Tamiš u Dunav, predstavlja značajan grad
        u južnom delu Vojvodine. Osim što je industrijski centar, Pančevo je
        poznato i po svojoj bogatoj istoriji koja datira još od rimskih vremena.
        Grad se razvijao kroz različite kulturne epohe, što je ostavilo dubok
        trag na njegovu arhitekturu, tradiciju i svakodnevni život. Jedna od
        ključnih karakteristika Pančeva je njegov strateški položaj, što ga čini
        važnim čvorištem saobraćaja, povezujući ga sa Beogradom i drugim
        delovima Srbije. Grad je dom brojnim kulturnim institucijama, među
        kojima se izdvaja Narodni muzej, kulturni centar, kao i brojne galerije
        i pozorišta koja bogate kulturnu ponudu. Pančevo je takođe poznato po
        tradiciji sporta, a sportski entuzijasti mogu uživati u raznim
        manifestacijama i takmičenjima.
      </p>

      <div className="fourImages">
        <img
          srcSet={`${pancevo3narodnaBasta11} 400w, ${pancevo3narodnaBasta1} `}
          alt="Pančevo Narodna Bašta 1"
          // style={ window.innerWidth < 600 ? { width: "180px", height: '180px' } : { width: "1250px" }}
        />
        <img
          srcSet={`${pancevo3narodnaBasta22} 400w, ${pancevo3narodnaBasta2} `}
          alt="Pančevo Narodna Bašta 2"
          // style={ window.innerWidth < 600 ? { width: "180px", height: '180px' } : { width: "1250px" }}
        />
      </div>
      <div className="fourImages">
        <img
          srcSet={`${pancevo3narodnaBasta33} 400w, ${pancevo3narodnaBasta3} `}
          alt="Pančevo Narodna Bašta 3"
          // style={ window.innerWidth < 600 ? { width: "180px", height: '180px' } : { width: "1250px" }}
        />
        <img
          srcSet={`${pancevo3narodnaBasta44} 400w, ${pancevo3narodnaBasta4} `}
          alt="Pančevo Narodna Bašta 4"
          // style={ window.innerWidth < 600 ? { width: "180px", height: '180px' } : { width: "1250px" }}
        />
      </div>

      <p>
        Na inicijativu brigadnog generala Mihajla Mihaljevića, mala zelena
        površina na ivici grada je 1829. godine uređena i pretvorena u pravi
        zeleni raj, postajući najveći park u Pančevu. Od tog trenutka, Narodna
        bašta je postala omiljeno šetalište i mesto za uživanje u prirodi. Park
        je doživeo svoj vrhunac tokom priprema i održavanja „Velike zanatske i
        poljoprivredne izložbe Pančeva i okoline“, koja se održala od 15.
        avgusta do 15. septembra 1905. godine. Međunarodnu izložbu posetilo je
        čak 104.080 ljudi. Od 2008. godine, započela je rekonstrukcija parka,
        koji je tokom devedesetih godina bio u lošem stanju. Zahvaljujući
        velikom trudu JKP „Zelenilo“, Narodna bašta je doživela potpuni
        preporod. Urađene su pešačke staze, postavljena dečija igrališta,
        otvorena kafe-galerija, instalirane sprave za rekreaciju, a
        rekonstruisan je i pavillon u kojem se tokom leta održavaju koncerti i
        kulturni programi.
      </p>

      <img srcSet={`${pancevo11} 400w, ${pancevo1} `} alt="Pančevo Nardoni Muzej" />

      <p>
        Narodni muzej je osnovao dr Borisav Jankulov 1923. godine. Mузеј je
        nastao iz privatnih zbirki i spada među starije institucije ovog tipa u
        zemlji. To je muzejski kompleks sa različitim odeljenjima, uključujući
        etnologiju, arheologiju, istoriju, istoriju umetnosti, kao i centar za
        dokumentaciju, biblioteku, foto i preparatorsku laboratoriju. Danas,
        Narodni muzej predstavlja modernu instituciju sa bogatom i vrednom
        stalnom postavkom, galerijama i depoima u kojima se čuvaju hiljade
        pažljivo prikupljenih i stručno obrađenih muzealija. Takođe, muzejski
        rad je unapređen korišćenjem računarske i druge elektronske opreme, koja
        je neophodna za rad muzeja u 21. veku. Među eksponatima koji se ovde
        čuvaju su i dela od velikog značaja, poput slike „Seobe Srba“ Paje
        Jovanovića, zastave Srpskog Vojvodstva iz 1848. godine, kao i predmeti
        iz „Starčevačke kulture“, stari više hiljada godina, koji svojom
        vrednošću daleko prevazilaze lokalne okvire.
      </p>

      <img srcSet={`${pancevo55} 400w, ${pancevo5} `} alt="Pančevo Park Prirode Ponjavica" />
      <p>
        Parka prirode Ponjavica smešten je 15 kilometara od Pančeva, između sela
        Omoљica i Banatski Brestovac. Poњavica se formira kod sela Omoљica i
        proteže se na deset kilometara, od kojih 7,2 kilometra čini zaštićeni
        deo. Ukupna površina parka je 134 hektara. Jedinstvene karakteristike
        parka prirode Poњavica su stalne vodene površine i kontrast između strme
        leve i niske desne obale reke, koja je omeđena koritom. Na ovom prostoru
        se nalaze mozaici biljnih zajednica različitih tipova vegetacije,
        uključujući vodene, barske i močvarne biljne vrste, kao i šumske
        ekosisteme. Ovaj park se odlikuje i raznolikošću zelenih površina koje
        se smenjuju, kao i prisustvom žbunova, voćnjaka i stabala, dok je
        njegova blizina naselja i vikend zona dodatno upotpunjuje. Ova biološka
        i ekološka raznovrsnost stvara potencijal za razvoj turističkih
        sadržaja, sa posebnim naglaskom na rekreaciju i ekološko obrazovanje.
      </p>

      <img
        srcSet={`${pancevo66} 400w, ${pancevo6} `}
        alt="Pančevo Ivanovačka Ada"
      />
      <p>
        Na svega 2,5 kilometra od sela Ivanovo i 21 kilometar od Pančeva, nalazi
        se specijalni rezervoar prirode Ivanovačka ada, koja je poznata kao
        preostali deo nekadašnjih poplavnih šuma koje su prekrivale dunavske
        ade. Rezervat obuhvata usku Adu širine od 2 do 7 kilometara i zbog
        prisustva autohtonih vrsta drveća, kao što su topola, crna i bela vrba,
        jasen i posebno hrast lužnjak, svrstava se u botanički dragulj prirode.
        Za ljubitelje prirode i ribolova, posebno su zanimljiva područja
        Dunaovac i Zimovnik, gde možete napraviti spektakularne fotografije u
        svim godišnjim dobima i vremenskim uslovima. Jedan od najimpresivnijih
        stanovnika ovog područja je hrast lužnjak, star više od 180 godina, koji
        se nalazi u blizini Dunaovca i predstavlja pravi prirodni spomenik,
        podsećajući nas na nekadašnju dominaciju ove vrste u regionu.
      </p>

      <img
        srcSet={`${pancevo77} 400w, ${pancevo7} `}
        alt="Pančevo Gradska Šuma"
      />
      <p>
        Na svega nekoliko minuta hoda od centra Pančeva, na desnoj obali reke
        Tamiš, smeštena je prava prirodna oaza – močvarno područje koje je dom
        za brojne ptice, među kojima se izdvajaju siva čaplja i izuzetno
        ugrožena crna roda. Ovaj prostor, koji se prostire od železničkog mosta
        do ušća u Dunav, poznat je kao Gradska šuma. Biljni svet ovog područja
        karakterišu pretežno drvenaste vrste, kao što su hrast lužnjak, vrba i
        crna i bela topola. Takođe, nije retko videti srne i divlje svinje koje
        se kreću kroz ovu bogatu vegetaciju. Za samo nekoliko minuta vožnje
        čamcem, možete se potpuno distancirati od gradske vreve i uroniti u
        tišinu prirode. Prelaskom na drugu obalu Tamiša, nasipom možete krenuti
        uzvodno prema Jabuци i poznatim kubicima ili nizvodno do jednog od
        simbola Pančeva – svetiionika. Prelaz sa gradskog Keja moguć je
        svakodnevno od 11 časova, a vožnje traju do kasno u noć, omogućavajući
        posetiocima da uživaju u prelepim pejzažima i mirnom okruženju.
      </p>
    </div>
  );
};
