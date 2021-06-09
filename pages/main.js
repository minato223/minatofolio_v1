export default function Main(){
    return <>
    <section className="section1" id="particles-js">
      <div className="container">
        <div className="information" data-animation>
          <div className="left__information">
            <h3 className="name"><span>Salut,</span></h3>
            <h3 style={{"marginBottom":"20px"}}>je suis LAMINE DIARRA </h3>
            <h2 className="profession" data-with-animation data-animation-begin="right" data-animation-delay="1">Dévéloppeur</h2>
            <p className="profession__information" data-with-animation data-animation-begin="right" data-animation-delay="1.5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto amet eos qui consequatur alias nemo, aliquam debitis at
              asperiores rerum optio vel minima, nihil veniam quia soluta quidem
              sapiente eveniet?
            </p>
            <div className="contact__buttons">
              <a href="mailto:id491112@gmail.com" className="contact__button" data-with-animation data-animation-begin="bottom" data-animation-delay="1.5">M'embaucher</a>
              <a href="cv.pdf" className="cv__button" data-with-animation data-animation-begin="bottom" data-animation-delay="1.8">Mon CV</a>
            </div>
          </div>
          <div className="right__information">
            <a href="https://github.com/minato223" target="_blank" className="social__icon github"><i className="fa fa-github social" data-with-animation data-animation-begin="left" data-animation-delay="1"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100008944208707" target="_blank" className="social__icon facebook"><i className="fa fa-facebook social" data-with-animation data-animation-begin="left" data-animation-delay="1.5"></i></a>
            <a href="https://www.linkedin.com/in/lamine-diarra-a46504196?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BE%2FiS%2FgdGRKu0deO%2BL%2FcrZw%3D%3D" target="_blank" className="social__icon linkedin"><i className="fa fa-linkedin social" data-with-animation data-animation-begin="left" data-animation-delay="2"></i></a>
            <img
              src="./images/minato.png"
              className="my__profil"
              alt="mon_profil"
              data-with-animation data-animation-begin="bottom" data-animation-delay="1"
            />
          </div>
        </div>
      </div>
    </section>
    </>
}