export default function About(){
    return <>
    <section className="section6">
      <div className="container" >
    <h3 className="title">A propos</h3>
    <div className="about" data-animation>
          <div className="about__container" data-with-animation data-animation-begin="left" data-animation-delay="1">
            <div className="circle circle4"></div>
            <div className="circle circle5"></div>
            <div className="blur"></div>
            <div className="about__img">
              <img className="picaso" src="./images/picaso.svg" alt=""/>
            </div>
          </div>
          <div className="awwards">
            <div className="awward" data-with-animation data-animation-begin="right" data-animation-delay="1">
              <div className="awward__img">
                <img src="./images/exp.svg" alt=""/>
              </div>
              <div className="awward__info">
                <h3 className="awward__title">+1 an d'expérience</h3>
              </div>
            </div>
            <div className="awward" data-with-animation data-animation-begin="right" data-animation-delay="1.3">
              <div className="awward__img">
                <img src="./images/finish.svg" alt="" />
              </div>
              <div className="awward__info">
                <h3 className="awward__title">+3 projets terminés</h3>
              </div>
            </div>
            <div className="awward" data-with-animation data-animation-begin="right" data-animation-delay="1.3">
              <div className="awward__img">
                <img src="./images/project.svg" alt=""/>
              </div>
              <div className="awward__info">
                <h3 className="awward__title">+2 clients satisfaits</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
}