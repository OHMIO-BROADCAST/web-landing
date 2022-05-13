const Subscribe = () => {

    return (

      <section className="container mb-5" style={{marginTop:'3rem'}}>
        <div className="subscribe section-padding-0-0">
          <div className="row">
            <div className="col-sm-12">
              <div className="subscribe-wrapper">
                <div className="section-heading text-center">
                  <h2 data-aos="fade-up" data-aos-delay="300">No te pierdas ninguna actualización!</h2>
                  <p data-aos="fade-up" data-aos-delay="400">También hacemos Airdrops y recompensas sobre nuestros usuarios. Consulta nuestro <a style={{textDecoration:"underline"}} data-aos="fade-up" data-aos-delay="400">Centro de Recompensas</a>.  </p>

            
                </div>
                <div className="service-text text-center">
                  <div className="subscribe-section has-shadow">
                    <div className="input-wrapper">
                      <i className="fa fa-home" />
                      <input type="email" placeholder="Ingresa tu Email" />
                    </div>
                    <button className="btn more-btn">Suscribirse</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </section>
    );

}

export default Subscribe