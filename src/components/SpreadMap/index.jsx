const SpreadMap = ({Wwhitepaper , SectionIcon11}) => {

  return (

    <section className="spread-map download">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-xs-12">
            <div className="welcome-meter">
              <img draggable="false" src={Wwhitepaper} className="center-block" alt="" />
            </div>
          </div> 
          <div className="col-lg-6 col-xs-12 mt-s">
            <div className="who-we-contant">
              <div className="dream-dots text-left">
                <img draggable="false" src={SectionIcon11} alt="" />
              </div>
              <h4 className="text-white">Descarga nuestra Wallet</h4>
              <p className="text-white">Para interactuar en nuestra plataforma hace falta una cartera capaz de usar la Red de Polygon, existen muchas opciones en el mercado, nosotros te sugerimos directamente nuestra wallet custodiada multicadena. Aqui podrás centralizar tus fondos y recibir constantes beneficios.</p>
              <a className="btn dream-btn mt-30" href="#">
                Get Android
              </a>
              <a className="btn dream-btn mt-30 ml-5" href="#">
              Get IOs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

export default SpreadMap