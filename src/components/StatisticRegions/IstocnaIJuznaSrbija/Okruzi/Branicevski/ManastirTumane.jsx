import tumane1 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirTumane/manastirTumane1.jpg";
import tumane2 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirTumane/manastirTumane2.jpg";
import tumane3 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirTumane/manastirTumane3.jpg";
import tumane4 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirTumane/manastirTumane4.jpg";
import tumane5 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirTumane/manastirTumane5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const ManastirTumane = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={tumane1} alt="Manastir Tumane 1" />

      <h2>Manastir Tumane</h2>

      <p style={{ paddingTop: "50px" }}>
        Manastir Tumane nalazi se oko 10 kilometara od Golupca, u podnožju
        Golubačkih planina, na levoj obali Tumanske reke. Okružen gustim šumama,
        skriven je od pogleda i odiše mirom. Smešten u prelepom prirodnom
        ambijentu, deluje kao mesto predodređeno za monaški život i molitvenu
        tišinu.
        <br />
        <br /> Prema predanju koje je i danas živo, manastir je zadužbina
        kosovskog junaka Miloša Obilića. Veruje se da je on živeo i vladao delom
        današnjeg Braničeva.
      </p>

      <img src={tumane2} alt="Manastir Tumane 2" />

      <p>
        Prema predanju, Miloš Obilić je lovio u šumama u okolini današnjeg
        manastira. Tokom lova, nehotično je ranio pustinjaka, Svetog Zosima.
        Pokušavajući da mu spase život, poneo ga je ka svom dvoru. Međutim, na
        mestu gde se danas nalazi manastir, svetac ga je zamolio da ga spusti,
        rekavši: „Tu mani i pusti me da umrem.“
        <br />
        <br /> Naziv manastira sačuvao se do danas, zajedno sa sećanjem na
        Svetog Zosima. Vernici već vekovima dolaze u manastir da zatraže njegov
        blagoslov i pronađu duhovnu utehu.
      </p>

      <img src={tumane3} alt="Manastir Tumane 3" />

      <p>
        Manastir se prvi put pominje u turskim popisima iz 1572–1573. godine.
        Drugi put se spominje u 16. veku, za vreme sultana Murata III, u
        kontekstu dažbina koje je plaćao turskom sultanu.
        <br />
        <br /> Pred Prvu veliku seobu Srba 1690. godine, u želji da podunavske
        Srbe podstaknu na ustanak protiv Osmanlija, u Tumanu su se sastali
        patrijarh Arsenije III Čarnojević i grof Đorđe Branković.
        <br />
        <br /> Egzarh Maksim (Ratković), izaslanik mitropolita beogradskog,
        posetio je u prvoj polovini 18. veka manastire u Braničevu. U svom
        izveštaju o manastiru Tumane beleži da je crkva bila pokrivena crepom,
        što je za tadašnje prilike bila prava retkost.
      </p>

      <img src={tumane4} alt="Manastir Tumane 4" />

      <p>
        Isposnica Zosima Sinajita nalazi se oko jedan kilometar od manastira
        Tumane, duboko u gustoj šumi. Unutar stene nalaze se dve pećine,
        povezane uskim prolazom.
        <br />
        <br />
        Zosim Tumanski je živeo u jednoj od pećina, dok je u drugoj provodio
        vreme u molitvi. Danas je na mestu njegove molitvene kelije uređena
        kapela. Pećine su gotovo netaknute ljudskom rukom, a u njima je sačuvan
        i nakit iz prošlih vremena.
        <br />
        <br />
        Pored isposnice se nalazi čudotvorni izvor, a iza njega prelep šumski
        vodopad sa naslagama bigra. Na tom mestu se nalazi i Spomenik prirode
        „Bigrena akumulacija kod manastira Tumane“.
      </p>

      <img src={tumane5} alt="Manastir Tumane 5" />
      <p>
        Crkva koju je opisao Egzarh Maksim bila je prvobitna manastirska crkva,
        koja je postojala sve do Kočine Krajine, kada su je Turci spalili. Narod
        je obnovio spaljeni manastir velikim zalaganjem oberkneza Pavla
        Bogdanovića u vreme vladavine kneza Miloša. Joakim Vujić je zabeležio da
        je obnovljena tumanjska crkva bila male veličine i da je delimično bila
        oslikana.
        <br />
        <br />
        Godine 1910. crkva je bila minirana i zbog velikih oštećenja, po naredbi
        vlasti, srušena do temelja. Tokom narednih četrnaest godina manastir
        Tumane bio je bez crkve, jer su mnoge okolnosti, među kojima i Prvi
        svetski rat, sprečavale obnovu.
        <br />
        <br />
        Sadašnja crkva podignuta je i osvećena 1924. godine. Novi izgled
        manastir je dobio dolaskom rusko-srpskog bratstva iz manastira Miljkovo
        1936. godine. Tada je počela aktivna obnova, pre svega u
        duhovno-bogoslužbenom smislu, a manastir je ojačao i ekonomski.
        Izgrađeni su novi veliki konak i prateći objekti koji su bili neophodni
        za život i rad monaškog bratstva.
      </p>
    </div>
  );
};
