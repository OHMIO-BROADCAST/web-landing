import {
  HomeDemo1Platform,
  HomeDemo1Rings,
} from "../../../utils/allImgs"

import SectionHeading from "../../../components/SectionHeading"

const OurPlatform = ({data}) => {

    return (

      <section className="features section-padding-0-100 ">
        <div className="container">

          <SectionHeading
            title="Prueba TIPS"
            text="Nuestra Plataforma"
            description="TIPS utiliza Blockchain para llevar a cabo todo el aspecto de compra y recompensas del sistema de Inteligencia Artificial de trading de alta frecuencia (HFT)"
          />

          <div className="row align-items-center">
            <div className="service-img-wrapper col-lg-5 col-md-12 col-sm-12 no-padding-right">
              <div className="features-list">
                <div className="who-we-contant">
                  <h4 className="w-text" data-aos="fade-up" data-aos-delay="200">Contamos con una de las plataformas mas potentes del mercado:</h4>
                  <p className="w-text" data-aos="fade-up" data-aos-delay="300">Usando tecnologia Blockchain ofrecemos variedad de servicios Crypto.</p>
                </div>
                <ul className="list-marked">
                  {data && data.map((item , key) => (
                      <li key={key} className="text-white"><i className="fa fa-check" />{item.icoName}</li>
                  ))}
                </ul>
                <a className="btn more-btn mt-30" href="#">Read More</a>
              </div>
            </div>
            <div className="service-img-wrapper col-lg-7 col-md-12 col-sm-12 mt-s">
              <div className="image-box">
                <img draggable="false" src={HomeDemo1Platform} className="center-block img-responsive phone-img" alt="" />
                <img draggable="false" src={HomeDemo1Rings} className="center-block img-responsive rings " alt="" />
              </div>
            </div> 
          </div>
        </div>
      </section>
    );

}

export default OurPlatform;