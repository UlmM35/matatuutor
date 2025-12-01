import "./AboutUs.css"

const AboutUs = () => {

    return(
        <main className="aboutUs-container">
            <div className="aboutUs-box" id="box">

                <section className="aboutUs">
                    <div className="aboutUs-header">Meist</div>
                        <div className="aboutUs-second-header">MataTuutor - sinu teejuht matemaatika mõistmisel.
                        </div>
                            <div className="aboutUs-paragraph">
                                <p>MataTuutor on kaasaegne veebiplatvorm, mis ühendab õppijad ja kogenud matemaatika eraõpetajad ühte paindlikku ja toetavasse õpikeskkonda. Meie eesmärk on muuta õppimine <span id="colored">lihtsaks</span>, <span id="colored">mugavaks</span> ja <span id="colored">tõeliselt tulemuslikuks</span>, et iga õppija leiaks endale sobiva tempo, juhendaja ja õppimisviisi.</p>
                                <p>Usume, et matemaatika ei pea olema hirmutav ega keeruline. Õige toe ja selgitustega võib see muutuda isegi huvitavaks ning loogiliselt rahuldust pakkuvaks aineks. Meie õpetajad on oma ala spetsialistid, kes oskavad keerulised teemad selgitada arusaadavalt ja vastavalt õppija tasemele — olgu eesmärk põhikooli kontrolltöö, gümnaasiumi riigieksam või ülikooli kursus.</p>
                            </div>
                </section>
            </div>

        </main>
    )
    }

export default AboutUs
