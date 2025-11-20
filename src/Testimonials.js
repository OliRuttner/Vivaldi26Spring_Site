import React, { useState } from "react";

const testimonials = [
  {
    text: "Pe mine, participarea la un curs BEST m-a ajutat să ies din zona de confort foarte mult, mi-am făcut o mulțime de prieteni noi peste tot în Europa și mi-am exersat engleza. Aș recomanda 100% experiența, mai ales dacă ești pasionat de travelling și îți place să experimentezi culturi noi.",
    author: "Anda Bodea",
    picture: require('./anda_bodea.jpg')
  },
  {
    text:"Cursul din Torino a fost primul meu curs și o experiență grozavă. Am cunoscut o mulțime de oameni cu care încă vorbesc. Am stat mai mult de o săptămână și am explorat orașul pentru un preț foarte mic. De-abia aștept următoarea dată când merg la un curs!",
    author: "Raul Petruț",
    picture: require('./raul_petrut.jpg')
  },
  {
    text: "Am participat toamna aceasta la cursul BEST din Valladolid, Spania. Nu cunoșteam pe nimeni, nu au fost alți participanți din România și a fost prima dată când am călătorit singură. În ciuda acestor lucruri, m-am simțit ca acasă încă din prima zi! Mi-am făcut mulți prieteni, am vizitat mai multe orașe și am rămas cu amintiri la care mă gândesc cu drag. Pe scurt, cursul a fost cel mai frumos lucru pe care l-am făcut vara aceasta!",
    author: "Patricia Fătu",
    picture: require('./patricia_fatu.jpg')
  },
  {
    text:"A fost highlight-ul verii mele!! Combinația perfectă între fun și util. E imposibil să nu-ți faci prieteni când ești înconjurat de oameni atât de faini. Ajungi să te apropii super repede de ei, iar apoi păstrezi legătura până în prezent. Pur și simplu trăiești momentul, te bucuri de tot și ajungi să faci o grămadă de lucruri pe care, în mod normal, nu le-ai fi făcut. Sigur aș recomanda oricui experiența asta, pentru că e mult mai frumos decât îți poți imagina.",
    author: "Riana Horvath",
    picture: require('./riana_horvath.jpg')
  },
  {
    text:"Toată experiența cursului se simte exact ca o pauză din orice rutină obișnuită. Nu se pot descrie în cuvinte toate lucrurile noi pe care le experimentezi, cunoștințele pe care le câștigi și interacțiunea cu oamenii. Rămâi cu prieteni și amintiri care îți îmbunătățesc instant starea de spirit de fiecare dată când îți reapar în gând. Aș recomanda oricui să își pregătească curajul și entuziasmul de a aplica la cursuri.", 
    author: "Bianca Lungu",
    picture: require('./bianca_lungu.jpg')
  },
  {
    text:"Pentru mine, să particip la un curs BEST a fost o experiență mai plăcută decât mă așteptam. În fiecare zi simțeam că mă distrez tot mai bine și nicio secundă nu a fost lipsită de activitate. Consider că e o experiență pe care toată lumea trebuie să o încerce măcar o dată, pentru că poți descoperi o nouă latură a ta. Mi-am făcut prieteni în toate colțurile Europei și cu mulți dintre ei deja m-am revăzut sau am făcut planuri să ne reîntâlnim! ",
    author: "Raul Modi",
    picture: require('./raul_modi.jpg')
  }
];
const Testimonials = () => {

const [index, setIndex] = useState(0);

const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
const goTo = (i) => setIndex(i);

  return (
    <div className="testimonials-section" id="testimonials">
      <div className="testimonial-carousel">
      <h2>Testimonials</h2>
        <div className="testimonial">
          <p className="text">{testimonials[index].text}</p>
          <h4 className="text">{testimonials[index].author}</h4>
          <img className="testimonial-image" src={testimonials[index].picture} alt={testimonials[index].author} />
        </div>

        <div className="testimonial-buttons">
          <button className="prev" onClick={prev}>❮</button>
          <button className="next" onClick={next}>❯</button>
        </div>

        <div className="testimonial-dots" role="tablist" aria-label="Testimonials">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? 'active' : ''}`}
              onClick={() => goTo(i)}
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
 
export default Testimonials;