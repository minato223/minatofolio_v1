export default function Experiences(){
    return <>
    <section className="section4" id="experiences">
      <div className="container" data-animation>
        <h3 className="title">Expériences Proféssionnelle</h3>
        <div className="experiences">
          <div className="experience">
            <div className="experience__level">
              <div className="round"></div>
              <div className="bar"></div>
            </div>
            <div className="experience__container">
              <h3 className="experience__title" data-with-animation data-animation-begin="bottom" data-animation-delay="1">AGETIC</h3>
              <h4 className="experience__subtitle" data-with-animation data-animation-begin="bottom" data-animation-delay="1.1">Nov-2020 | Jan-2021</h4>
              <ul className="experience__list">
                <li className="task" data-with-animation data-animation-begin="bottom" data-animation-delay="1.2">Configuration d'une base de données firebase</li>
                <li className="task" data-with-animation data-animation-begin="bottom" data-animation-delay="1.3">Connexion d'une base de données firebase avec Flutter</li>
                <li className="task" data-with-animation data-animation-begin="bottom" data-animation-delay="1.4">Mis en place d'une application mobile de Gestion Universitaire</li>
              </ul>
            </div>
          </div>
          <div className="experience">
            <div className="experience__level">
              <div className="round"></div>
              <div className="bar"></div>
            </div>
            <div className="experience__container">
              <h3 className="experience__title" data-with-animation data-animation-begin="bottom" data-animation-delay="1">EST Innov</h3>
              <h4 className="experience__subtitle" data-with-animation data-animation-begin="bottom" data-animation-delay="1.1">Sep-2020 | Actuel</h4>
              <ul className="experience__list">
                <li className="task" data-with-animation data-animation-begin="bottom" data-animation-delay="1.2">Mis en place d'une API REST </li>
                <li className="task" data-with-animation data-animation-begin="bottom" data-animation-delay="1.4">Création d'une application web de Gestion de stock</li>
                <li className="task" data-with-animation data-animation-begin="bottom" data-animation-delay="1.3">Création d'une carte interactive</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
}