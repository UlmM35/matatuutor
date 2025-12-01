import "./KKK.css";
import { useState } from "react";

const KKK = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = [
    {
      title: "Üldine info",
      questions: [
        {
          q: "Mis veebileht see on?",
          a: "See on platvorm, mis ühendab matemaatika õpetajad ja õpilased. Siit saad leida endale sobiva õpetaja vastavalt tasemele ja eelistustele.",
        },
          {
          q: "Kas saan õpetajaga otse ühendust võtta?",
          a: "Jah, iga õpetaja profiilil on kontaktivõimalus või broneerimisvorm, mille kaudu saad otse õpetajaga suhelda.",
        },
        {
          q: "Kas teenus on tasuta?",
          a: "Õpetaja otsimine ja veebilehe kasutamine on tasuta. Maksad ainult valitud õpetajale tema tunni hinna järgi.",
        },
      ],
    },
    {
      title: "Õpilastele",
      questions: [
        {
          q: "Kuidas ma saan õpetajat otsida?",
          a: "Sisesta õpetaja nimi või vali aine, mida soovid õppida, ning vajuta nuppu OTSI.",
        },
        {
          q: "Kas saan õpetajaga otse ühendust võtta?",
          a: "Jah, iga õpetaja profiilil on kontaktivõimalus, mille kaudu saad temaga otse ühendust võtta ja tunni kokku leppida.",
        },
          {
          q: "Kas ma saan valida õpetaja hinna järgi?",
          a: "Jah, iga õpetaja profiilil on selgelt märgitud hind eurodes tunni kohta.",
        },
          {
          q: "Kas õpetajad annavad tunde veebis või kohapeal?",
          a: "Mõlemat! Iga õpetaja märgib oma profiilil, kas ta pakub veebitunde, kontaktõpet või mõlemat.",
        },
      ],
    },
    {
      title: "Õpetajatele",
      questions: [
        {
          q: "Kuidas ma saan ise õpetajaks hakata?",
          a: "Klõpsa lehe all olevale nupule 'Tule õpetajaks' ja täida avaldus. Pärast kinnitamist saad oma profiili ja pakkuda tunde.",
        },
        {
          q: "Kas õpetajaks olemine on tasuline?",
          a: "Õpetajad maksavad väikese vahendustasu, kui nad soovivad oma profiili platvormil nähtavaks muuta.",
        },
          {
          q: "Kas ma saan oma hinda ise määrata?",
          a: "Jah, iga õpetaja saab oma tunni hinna vabalt valida.",
        },
          {
          q: "Kas ma pean olema kutseline õpetaja, et siia lehele lisada?",
          a: "Ei pea. Platvormil on nii kutselised õpetajad kui ka üliõpilased ja tublid abituriendid, kes pakuvad abi noorematele.",
        },
      ],
    },
    {
      title: "Turvalisus ja privaatsus",
      questions: [
        {
          q: "Kuidas kaitstakse minu andmeid?",
          a: "Kõik kasutajate andmed on kaitstud vastavalt kehtivatele andmekaitse seadustele ning neid ei jagata kolmandate osapooltega.",
        },
        {
          q: "Kas minu kontaktandmed on teistele nähtavad?",
          a: "Ei. Sinu kontaktandmed muutuvad nähtavaks ainult siis, kui sa ise otsustad õpetajaga ühendust võtta.",
        },
          {
          q: "Kuidas ma saan oma profiili kustutada?",
          a: "Saada meile e-kiri aadressile support@opetajad.ee ja kustutame sinu konto kahe tööpäeva jooksul.",
        },
      ],
    },
  ];

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
    setOpenQuestion(null);
  };

  const toggleQuestion = (qIndex) => {
    setOpenQuestion(openQuestion === qIndex ? null : qIndex);
  };

  return (
    <main className="kkk-container">
      <h1 className="kkk-title">Korduma Kippuvad Küsimused</h1>

      {faqData.map((category, index) => (
        <div key={index} className="kkk-category">
          <div
            className="kkk-category-header"
            onClick={() => toggleCategory(index)}
          >
            <h2>{category.title}</h2>
            <span className={`arrow ${openCategory === index ? "open" : ""}`}>
              ▼
            </span>
          </div>

          {openCategory === index && (
            <div className="kkk-list">
              {category.questions.map((item, qIndex) => (
                <div key={qIndex} className="kkk-item">
                  <div
                    className="kkk-question"
                    onClick={() => toggleQuestion(qIndex)}
                  >
                    <span>{item.q}</span>
                    <span
                      className={`arrow ${
                        openQuestion === qIndex ? "open" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </div>
                  {openQuestion === qIndex && (
                    <div className="kkk-answer">{item.a}</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </main>
  );
};

export default KKK;
