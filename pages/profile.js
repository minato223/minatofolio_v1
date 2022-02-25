export default function Profile(){
    return <>
    <section className="section2" id="profile">
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>
        <div className="container">
          <div className="profil" data-animation>
            <div className="profil__image">
              <div className="profil__image__container" data-with-animation data-animation-begin="left" data-animation-delay="1.2">
                <img src="./images/me.JPG" alt="" data-with-animation data-animation-begin="right" data-animation-delay="1"/>
              </div>
            </div>
            <div className="profil__information">
              <h3 className="profil__title" data-with-animation data-animation-begin="bottom" data-animation-delay="0.5">A propos de moi</h3>
              <p data-with-animation data-animation-begin="bottom" data-animation-delay="1">
                e travaille en tant que développeur indépendant depuis 2019. J'ai toujours été quelqu'un qui a à la fois
un côté créatif et un côté logique. Lorsque j'ai découvert la conception de sites Web à l'université, j'ai
réalisé que ce serait la solution idéale. Je pouvais utiliser mon côté créatif pour concevoir et mon côté
logique pour coder. En prime, être à la fois concepteur et développeur me permet de m'assurer qu'aucun détail n'est perdu dans la traduction.
              </p>
              <ul className="list__info">
                <li data-with-animation data-animation-begin="bottom" data-animation-delay="1.1">
                  <span><i className="fa fa-user"></i> </span>
                  <span>Moi</span>
                  <span>:</span>
                  <span style={{'textAlign': 'left'}}>Lamine Diarra</span>
                </li>
                <li data-with-animation data-animation-begin="bottom" data-animation-delay="1.2">
                  <span><i className="fa fa-home"></i> </span>
                  <span>Domicile</span>
                  <span>:</span>
                  <span style={{'textAlign': 'left'}}>Kalaban-coura | Bamako</span>
                </li>
                <li data-with-animation data-animation-begin="bottom" data-animation-delay="1.3">
                  <span><i className="fa fa-envelope"></i></span>
                  <span>Email</span>
                  <span>:</span>
                  <span style={{'textAlign': 'left'}}>id491112@gmail.com</span>
                </li>
                <li data-with-animation data-animation-begin="bottom" data-animation-delay="1.4">
                  <span><i className="fa fa-phone"></i></span>
                  <span>Contact</span>
                  <span>:</span>
                  <span style={{'textAlign': 'left'}}>82 46 55 62</span>
                </li>
              </ul>
              <h3 className="interet__title" data-with-animation data-animation-begin="bottom" data-animation-delay="1.5">Centre d'interet</h3>
              <div className="loisirs">
                <div className="loisir" data-with-animation data-animation-begin="bottom" data-animation-delay="1.62">
                  <i className="fa fa-connectdevelop"></i>
                  <h3>Technologie</h3>
                </div>
                <div className="loisir" data-with-animation data-animation-begin="bottom" data-animation-delay="1.64">
                  <i className="fa fa-gamepad"></i>
                  <h3>Jeux vidéos</h3>
                </div>
                <div className="loisir" data-with-animation data-animation-begin="bottom" data-animation-delay="1.66">
                  <i className="fa fa-codiepie"></i>
                  <h3>Manga</h3>
                </div>
                <div className="loisir" data-with-animation data-animation-begin="bottom" data-animation-delay="1.68">
                  <i className="fa fa-book"></i>
                  <h3>Lecture</h3>
                </div>
                <div className="loisir" data-with-animation data-animation-begin="bottom" data-animation-delay="1.7">
                  <i className="fa fa-music"></i>
                  <h3>Musique</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    </>
}
