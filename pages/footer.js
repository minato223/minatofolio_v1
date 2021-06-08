export default function Footer(){
    return <>
    <section className="section9">
      <div className="container">
        <div className="contact" data-animation>
          <div className="left__information">
              <h3 className="title" data-with-animation data-animation-type="scale" data-animation-delay="1">Vous avez un projet en tête</h3>
            <p data-with-animation data-animation-type="scale" data-animation-delay="1.5">Contactez moi maintenant et cumulez jusqu'à 20%</p>
            <p data-with-animation data-animation-type="scale" data-animation-delay="1.7">de réduction sur votre nouveau projet</p>
            <a className="contact__button" href="mailto:id491112@gmail.com" data-with-animation data-animation-type="scale" data-animation-delay="2">Me contacter</a>
          </div>
          <div className="right__information">
            <img src="./images/minato_profil2.png" alt="" data-with-animation data-animation-begin="right" data-animation-delay="1.5"/>
          </div>
        </div>
      </div>
    </section>
    </>
}