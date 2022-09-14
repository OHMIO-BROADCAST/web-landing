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
              <h4 className="text-white">Download our Wallet</h4>
              <p className="text-white">In order to interact with our platform you need a wallet capable of using the Polygon Network, there are many options on the market, we directly suggest our multi-chain guarded wallet. Here you can centralize your funds and receive constant benefits.</p>
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