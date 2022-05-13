import {
  HomeDemo1Computer
} from '../../utils/allImgs'

const AboutOther = ({ClassTitle="gradient-text blue"}) => {

  return (

    <section className="about-us-area section-padding-0-100 clearfix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 offset-lg-0">
            <div className="who-we-contant">
              <div className="dream-dots text-left fadeInUp" data-aos="fade-up" data-aos-delay="200">
                <span className={ClassTitle}>Plataforma de Trading Descentralizada</span>
              </div>
              <h4 className="fadeInUp" data-aos="fade-up" data-aos-delay="200">Conecta la Blockchain con el mundo real y comienza a hacer trading en FOREX</h4>
              <p className="fadeInUp" data-aos="fade-up" data-aos-delay="300">Es posible hacer Swaps o intercambios entre diferentes tokens. Compra y vende en segundos gracias al ecosistema TIPS.</p>
              <a className="btn more-btn mt-30" href="#">Read More</a>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-0 col-md-12 mt-30 no-padding-left">
            <div className="welcome-meter floating-anim fadeInUp">
              <img draggable="false" src={HomeDemo1Computer} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutOther;