import bg1 from "../../../assets/images/Beograd/Beograd/desktop/BG1.jpg";
import bg2 from "../../../assets/images/Beograd/Beograd/desktop/BG2.jpg";
import bg3 from "../../../assets/images/Beograd/Beograd/desktop/BG3.jpg";
import bg4 from "../../../assets/images/Beograd/Beograd/desktop/BG4.jpg";
import bg5 from "../../../assets/images/Beograd/Beograd/desktop/BG5.jpg";
import bg6 from "../../../assets/images/Beograd/Beograd/desktop/BG6.jpg";
import bg7 from "../../../assets/images/Beograd/Beograd/desktop/BG7.jpg";
import bg8 from "../../../assets/images/Beograd/Beograd/desktop/BG8.jpg";
import bg9 from "../../../assets/images/Beograd/Beograd/desktop/BG9.jpg";
import bg10 from "../../../assets/images/Beograd/Beograd/desktop/BG10.jpg";
import bg11 from "../../../assets/images/Beograd/Beograd/mobile/BGM1.jpg";
import bg22 from "../../../assets/images/Beograd/Beograd/mobile/BGM2.jpg";
import bg33 from "../../../assets/images/Beograd/Beograd/mobile/BGM3.jpg";
import bg44 from "../../../assets/images/Beograd/Beograd/mobile/BGM4.jpg";
import bg55 from "../../../assets/images/Beograd/Beograd/mobile/BGM5.jpg";
import bg66 from "../../../assets/images/Beograd/Beograd/mobile/BGM6.jpg";
import bg77 from "../../../assets/images/Beograd/Beograd/mobile/BGM7.jpg";
import bg88 from "../../../assets/images/Beograd/Beograd/mobile/BGM8.jpg";
import bg99 from "../../../assets/images/Beograd/Beograd/mobile/BGM9.jpg";
import bg100 from "../../../assets/images/Beograd/Beograd/mobile/BGM10.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../ScrollToTop";
import { beogradPathRoutes } from "./BeogradPathRoutes";

export const Beograd2 = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(beogradPathRoutes.home)} />
      <header></header>
      <img srcSet={`${bg33} 400w, ${bg3} `} alt="Beograd 1" />

      <h2>Beograd</h2>

      <p>
        Beograd je glavni grad Srbije, smešten na ušću reka Save i Dunava. Grad
        ima bogatu istoriju koja seže više od 2.000 godina unazad i bio je pod
        vlašću mnogih carstava, uključujući Rimljane, Osmanlije i
        Austro-Ugarsku. Danas je Beograd važno političko, kulturno i ekonomsko
        središte, sa velikim brojem muzeja, galerija, pozorišta i restorana.
        Grad je poznat po svojim istorijskim spomenicima kao što su Beogradska
        tvrđava i Hram Svetog Save, ali i po modernim četvrtima i živahnom
        noćnom životu. Beograd je takođe i važan saobraćajni centar, sa
        međunarodnim aerodromom i razvijenim železničkim i autobuskim mrežama.
        Sa populacijom od oko 1.7 miliona, Beograd je jedan od najvećih gradova
        na Balkanu, poznat po gostoprimstvu i energičnoj atmosferi.
      </p>

      <img srcSet={`${bg55} 400w, ${bg5} `} alt="Beograd 2" />

      <p>
        Beograd je dinamičan grad koji spaja prošlost i savremenost na
        jedinstven način. Kroz istoriju, bio je pod vlašću različitih
        civilizacija, što je ostavilo trag na njegovoj arhitekturi i kulturi.
        Grad je bio ključna tačka na trgovinskim rutama i često je bio meta
        vojnih osvajanja. Iako je često razaran, Beograd je svaki put uspevao da
        se obnovi i postane još značajniji. Danas je Beograd političko i
        ekonomsko srce Srbije, a ujedno i važan centar Balkana.
      </p>

      <img srcSet={`${bg11} 400w, ${bg1} `} alt="Beograd 3" />

      <p>
        Grad se odlikuje prelepim parkovima, promenadama uz reke, ali i modernim
        četvrtima i poslovnim centrima. Beograd ima bogat noćni život i poznat
        je po kafanama, klubovima i koncertima. Grad je i važno kulturno
        središte, domaćin mnogim manifestacijama, filmovima, muzičkim
        festivalima i izložbama. Njegova arhitektura je mešavina starih i
        modernih zgrada, sa uticajem neoklasicizma, baroka, ali i brutalizma.
        Grad je domaćin velikim univerzitetima i istraživačkim institucijama.
        Beograd je i grad sporta, poznat po velikim klubovima kao što su Crvena
        zvezda i Partizan, koji se takmiče u brojnim sportovima.
      </p>

      <img srcSet={`${bg44} 400w, ${bg4} `} alt="Grad Beograd" />
      <p>
        Beograd se brzo razvija, sa rastućim sektorima tehnologije i turizma. Sa
        svojom živahnom atmosferom, Beograd privlači turiste iz celog sveta.
        Grad je poznat po svojoj multikulturalnosti, jer su u njemu živeli i
        radili ljudi svih vera i nacija. Beograd je grad koji se nikada ne
        spava, uvek je u pokretu i ima mnogo da ponudi svakom posetiocu.
      </p>

      <img srcSet={`${bg22} 400w, ${bg2} `} alt="Zemun" />
      <p>
        Za Zemun se često kaže da je "grad u gradu", a simbol ovog posebnog dela
        Beograda je Milenijumska kula na brdu Gardoš, koja se nalazi u središtu
        najstarijeg sačuvanog utvrđenja iz 14. veka. Kula, poznata kao Kula
        Sibinjanin Janka, otvorena je za posetioce tokom celog dana, a njen
        najlepši deo je terasa-vidikovac, sa kojeg se pruža prelep pogled na
        okolinu, naročito u zimskim mesecima, kada teleskop omogućava detaljno
        posmatranje panorama. Stari Zemun očarava svojom autentičnom atmosferom,
        sa uskim ulicama i starim građevinama iz perioda austrougarske vlasti.
        Grad je prepoznatljiv po gostoljubivosti svojih ljudi, tradiciji, kao i
        bogatoj ponudi nacionalne kuhinje. Zemun je idealno mesto za šetnju,
        naročito duž Zemunskog keja, koji je uvek pun posetilaca i pruža
        opuštajuću atmosferu uz obalu Dunava. Tu možete uživati u ribljim
        specijalitetima i opuštati se uz zvuke starogradske muzike.
      </p>

      <img srcSet={`${bg66} 400w, ${bg6} `} alt="Park Topčider"/>
      <p>
        Park Topčider predstavlja ostatak nekadašnjih beogradskih šuma i deo
        prirodne baštine grada. Tokom tridesetih godina 19. veka, knez Miloš
        Obrenović izgradio je ovde dvorski kompleks, stvarajući centar
        političkog, kulturnog i duhovnog života Beograda. Ovaj park, smešten u
        blizini samog centra grada, nekada je bio omiljeno izletište i lovište
        kneževske porodice, a posetioci su dolazili u karucama i čezama. Krajem
        19. veka, Topčider je postao dostupniji građanima jer je počela da
        saobraća tramvajska linija. Danas, omeđen bulevarima vojvode Mišića i
        vojvode Putnika, kao i tramvajskom linijom broj 3, Park Topčider ostaje
        najstariji uređeni park u Srbiji i jedno od najlepših beogradskih
        izletišta. Sa leve strane Topčiderske reke, u parku možete uživati u
        šetnjama i obići značajne kulturne i istorijske spomenike, uključujući i
        stalnu postavku Muzeja istorije Srbije u Konaku kneza Miloša.
      </p>

      <img srcSet={`${bg77} 400w, ${bg7} `} alt="Savamala" />
      <p>
        Savamala, nekada industrijska četvrt, danas je postala epicentar urbane
        kulture u Beogradu. Sa starim zgradama koje odišu baroknim i secesijskim
        stilovima, ovo područje uz obalu Save sada je domaćin brojnim kulturnim
        sadržajima, kao i popularnim kafićima, restoranima i barovima. Mesto je
        posebno omiljeno među mladima koji uživaju u noćnom životu, gde klubovi
        i muzičke večeri traju do zore. Beton hala, koja se nalazi u neposrednoj
        blizini reke, jedno je od najpoznatijih mesta, sa restoranskim i
        klupskim sadržajem koji pružaju prelep pogled na ušće Save u Dunav.
        Nastavak šetnje duž keja vodi do Sava Promenade, koja se prostire na 1,8
        km i predstavlja omiljeni deo grada za sve generacije. Ova promenada je
        deo modernog beogradskog kompleksa Belgrade Waterfront, a idealna je za
        šetnje, vožnju biciklom ili uživanje u rekreaciji. Sava Promenada nudi
        raznovrsnu gastronomiju, kao i brojne terase sa pogledom na reku, a tu
        su i sportske površine, kao što su teren za odbojku i teretana na
        otvorenom. Kroz čitavu godinu, ovaj prostor postaje centar kulturnih,
        sportskih i drugih događanja, a vikendom je naročito živahno, sa brojnim
        manifestacijama koje okupljaju posetioce.
      </p>

      <img
        srcSet={`${bg88} 400w, ${bg8} `}
        alt="Ušće Shopping Center"
      />
      <p>
        Ušće Shopping Center je jedan od najvećih i najmodernijih tržnih centara
        u Beogradu. Smešten u blizini reke Save, u samom srcu Beograda, pruža
        posetiocima širok spektar prodavnica, restorana, kafića i zabavnih
        sadržaja. Posetioci mogu uživati u kupovini poznatih brendova, kao i u
        raznovrsnoj ponudi elektronike, odeće i obuće. Osim toga, Ušće nudi i
        bioskop, što ga čini idealnim mestom za celodnevni izlazak. Tržni centar
        je popularno odredište za porodice, jer pored prodavnica i restorana,
        nudi i igraonice i druge zabavne aktivnosti za decu. Sa odličnom
        povezanošću sa gradom i velikim parkingom, Ušće Shopping Center je lako
        dostupno i omiljeno mesto za sve ljubitelje kupovine i zabave.
      </p>

      <img
srcSet={`${bg99} 400w, ${bg9} `}
        alt="Noćni život Beograd"
      />
      <p>
        Beograd, grad koji nikada ne spava, nudi nezaboravan noćni život sa
        bogatom ponudom zabave za sve generacije. Spavovi na obalama Save i
        Dunava pružaju celonočnu zabavu, sa muzičkim žanrovima koji variraju od
        narodne muzike, domaćeg popa, rock’n’rolla do elektronske muzike.
        Popularne lokacije su obala Dunava kod Hotela Jugoslavija, obala Save
        između mostova, kao i Ada Ciganlija. Odabir mesta za izlazak je
        jednostavan – dovoljno je oslušnuti ritam muzike, pogledati ko ulazi i
        izlazi i odlučiti se prema atmosferi. Na obali Dunava nalaze se
        moderniji i sofisticiraniji klubovi, dok obala Save nudi boemsku i
        urbanu atmosferu, dok Ada Ciganlija pruža opuštenu i laganu atmosferu uz
        jezero. Uz uživanje u ludo provedenim noćima na spavovima i u klubovima
        sa poznatim DJ-evima, jedinstvena beogradska iskustva čine i večeri uz
        tamburaše u restoranima, što posetiocima Beograda ostaje u nezaboravnom
        sećanju kao pravi ugođaj za dušu.
      </p>

      <img
        srcSet={`${bg100} 400w, ${bg10} `}
        alt="Beogradski ZOO vrt"
      />
      <p>
        Beogradski zoološki vrt, poznat i kao "Vrt dobre nade", jedan je od
        najstarijih i najposećenijih zooloških vrtova u Srbiji. Smesten je u
        samom centru Beograda, u parku Kalemegdan, i prostire se na površini od
        oko 7 hektara. Ovaj zoološki vrt dom je brojnim vrstama životinja,
        uključujući sisavce, ptice, reptile i druge egzotične vrste. Beogradski
        zoo vrt je odlično uređen, sa različitim paviljonima i enclosures koji
        omogućavaju posetiocima da izbliza vide životinje u njihovim prirodnim
        uslovima. Pored klasičnih životinja, kao što su lavovi, tigar, slonovi i
        majmuni, ovde se mogu videti i retke i ugrožene vrste, kao što su albino
        krokodili, žirafe, antilope i mnoge ptice, uključujući i razne vrste
        papagaja. Zoološki vrt je popularno odredište za porodice sa decom, ali
        i za sve one koji žele da se opuste i uživaju u prirodi i životinjskom
        svetu. Pored stalnih izložbi, vrt često organizuje edukativne programe i
        manifestacije, kao i tematske događaje. Vrt takođe aktivno učestvuje u
        zaštiti ugroženih vrsta i u realizaciji različitih projekata očuvanja
        prirode. Beogradski zoološki vrt pruža jedinstveno iskustvo za
        ljubitelje životinja i prirode, kao i priliku da saznate više o važnosti
        očuvanja biodiverziteta.
      </p>
    </div>
  );
};
