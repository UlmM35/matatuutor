import { useEffect } from "react";
import "./TermsAndPrivacy.css"
const TermsAndPrivacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // leht liigub ülesse kui avad vaate
  }, []);

  return (
    <main className="terms-container">
      <h1>Kasutustingimused ja privaatsuspoliitika</h1>

      <section>
        <h2>1. Üldtingimused</h2>
        <p className="text">
          Käesolevad kasutustingimused („Tingimused“) reguleerivad veebilehe ja sellega seotud teenuste kasutamist. 
          Veebilehe kasutamine eeldab, et oled tutvunud tingimustega ning nendega nõustunud. 
          Kui sa tingimustega ei nõustu, palume teenust mitte kasutada. Veebilehe haldaja jätab endale õiguse igal ajal tingimusi muuta, täiendada või ajakohastada. 
          Kõik muudatused jõustuvad nende avaldamisel veebilehel. Soovitame tingimusi regulaarselt üle vaadata, et olla kursis võimalikest uuendustest.
        </p>
      </section>

      <section>
        <h2>2. Kasutajakonto ja registreerimine</h2>
        <p className="text">
          Teenuse kasutamiseks võib olla vajalik kasutajakonto loomine. Konto loomisel kohustud esitama tõesed, täpsed ja ajakohased andmed. Valeandmete esitamine võib viia konto peatamise või kustutamiseni. 
          Oled vastutav oma konto ja parooli turvalisuse eest. Kui märkad, et sinu kontot on kasutatud loata, palun teavita sellest koheselt e-posti teel aadressil info@matatuutor.ee.
          Veebilehe haldajal on õigus sulgeda või peatada kasutajakonto, kui on alust arvata, et on toimunud rikkumine, väärkasutus või ebaaus tegevus.
        </p>
      </section>

      <section>
        <h2>3. Privaatsus ja andmekaitse</h2>
        <p className="text">
          Sinu privaatsus on meile oluline. Töötleme isikuandmeid vastavalt Euroopa Liidu isikuandmete kaitse üldmäärusele (GDPR) ning kehtivatele Eesti andmekaitse seadustele.
          Kogume ja töötleme isikuandmeid üksnes ulatuses, mis on vajalik teenuse pakkumiseks, kasutajatoe osutamiseks ja seadusest tulenevate kohustuste täitmiseks.
        </p>
        <h3>Kogutavad andmed</h3>
        <ul>
          <li>Ees- ja perekonnanimi</li>
          <li>E-posti aadress</li>
          <li>Kasutajakonto andmed ja parool (krüpteeritult)</li>
          <li>Teenuse kasutamise logid ja tehnilised andmed (nt IP-aadress, seadme tüüp)</li>
        </ul>
        <h3>Andmete kasutamise eesmärgid</h3>
        <ul>
            <li>Kasutajakonto loomine ja haldamine</li>
            <li>Teenuse osutamine ja kasutajakogemuse parandamine</li>
            <li>Kasutajatoe pakkumine ja probleemide lahendamine</li>
            <li>Turunduslike teadete saatmine ainult kasutaja eelneval nõusolekul</li>
        </ul>
        <h3>Andmete jagamine ja säilitamine</h3>
        <p>
            Sinu isikuandmeid ei jagata kolmandate osapooltega, välja arvatud juhul, kui see on vajalik teenuse osutamiseks (nt makseteenuse pakkuja) või seadusest tulenevate kohustuste täitmiseks.
            Kõiki andmeid säilitatakse turvaliselt ning ainult seni, kuni see on vajalik andmete kogumise eesmärgi täitmiseks. 
            Sul on õigus oma andmetega tutvuda, neid parandada, kustutada või piirata nende töötlemist, kirjutades aadressil info@matatuutor.ee.
        </p>
      </section>

      <section>
        <h2>4. Küpsised</h2>
        <p className="text">
          Veebileht kasutab küpsiseid kasutajakogemuse parandamiseks. Küpsiste kasutamist saab
          piirata brauseri seadetes.
        </p>
      </section>

      <section>
        <h2>5. Intellektuaalne omand</h2>
        <p className="text">
            Kõik veebilehel olev sisu, sealhulgas tekstid, logod, pildid, graafika ja tarkvara, kuulub veebilehe omanikule või on kasutusõigusega litsentsitud.
            Sisu kopeerimine, levitamine või muutmine ilma kirjaliku loata on keelatud.
        </p>
      </section>

      <section>
        <h2>6. Vastutuse piirang</h2>
        <p className="text">
            Veebilehe haldaja ei vastuta kahjude eest, mis tekivad veebilehe kasutamisest, katkestustest, vigadest või andmete kadumisest. 
            Teenus on esitatud põhimõttel „nagu on“ („as is“) ja ilma otseste või kaudsete garantiideta.
        </p>
      </section>

      <section>
        <h2>7. Kontakt</h2>
        <p className="text">
            Kui sul tekib küsimusi kasutustingimuste või privaatsuspoliitika kohta, võta meiega ühendust: <a>info@matatuutor.ee</a>
        </p>
      </section>

      <p className="update-date">
        Viimati uuendatud: 11.11.2025
      </p>
    </main>
  );
}

export default TermsAndPrivacy
