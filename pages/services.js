export default function Services(){
    return <>
    <h3 className="title" id="services">Mes services</h3>
    <section className="section5">
      <div className="shadow"></div>
      <div className="container" data-animation>
        <div className="services">
          <div className="grid__item" data-with-animation data-animation-type="scale" data-animation-delay="1">
            <div className="grid__item__container">
              <div className="image__container">
                <div className="blur__shadow"></div>
                <img src="./images/mobile.svg" alt=""/>
              </div>
              <p>Conception d'Application mobile cross-plateforme</p>
            </div>
          </div>
          <div className="grid__item" data-with-animation data-animation-type="scale" data-animation-delay="1.5">
            <div className="grid__item__container">
              <div className="image__container">
                <div className="blur__shadow"></div>
                <img src="./images/web.svg" alt=""/>
              </div>
              <p>Conception d'Application web responsive</p>
            </div>
          </div>
          <div className="grid__item" data-with-animation data-animation-type="scale" data-animation-delay="2">
            <div className="grid__item__container">
              <div className="image__container">
                <div className="blur__shadow"></div>
                <img src="./images/desktop.svg" alt=""/>
              </div>
              <p>Conception de logiciel bureautique</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
}