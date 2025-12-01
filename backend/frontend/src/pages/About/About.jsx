import "./About.css"

const About = () => {
    
    return (
        <main className="about-container">
            <div className="aboutUs-box" id="box">

                <section className="about">
                    <div className="about-header">Mida me pakume?</div>
                        <div className="about-second-header">MataTuutor - sinu teejuht matemaatika mõistmisel.
                            </div>
                            <div className="about-paragraph">Pakume mugavat veebiplatvormi, kus üliõpilased saavad kiiresti leida endale sobiva matemaatika eraõpetaja. Meie eesmärk on muuta õppimine lihtsaks, mugavaks ja tulemuslikuks, et iga õppija leiaks endale sobiva tempo ja juhendaja</div>
                            <div className="about-platform"><span className="platform-title">Platvormil saad:</span>
                            <ul>
                                <li>Leida sobiva õpetaja sulle vastavalt <span id="colored">erialale</span>, <span id="colored">kogemusele</span> ja <span id="colored">hinnatasemele</span></li>
                                <li>Broneerida tunni just sulle sobival ajal</li>
                                <li>Maksta turvaliselt otse veebis, <span id="colored">ilma lisatasudeta</span></li>
                                <li>Lugeda teiste õppijate tagasisidet ja valida endale <span id="colored">parim õpetaja</span></li>
                                <li>Keskenduda tulemusele – meie hoolitseme kõige muu eest</li>
                            </ul>
                        </div>
                        <div className="about-paragraph">Meie missioon on pakkuda Eesti tudengitele <span id="colored">kohalikke</span> ja <span id="colored">usaldusväärseid</span> õpetajaid, kes aitavad sul matemaatika teemadest päriselt aru saada.</div>

            </section>
            </div>

        </main>
    )
}

export default About