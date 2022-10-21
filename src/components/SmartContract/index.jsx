import Contract from "./Contract"

const SmartContract = ({data}) => {

    return (

      <section className="smart-contract section-padding-0-70 mt-5 clearfix">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-lg-6 offset-lg-0">
              <div className="who-we-contant">
                <div className="dream-dots text-left fadeInUp" data-wow-delay="0.2s">
                  <span className="gradient-text blue">Smart Contract</span>
                </div>
                <h4 className="fadeInUp" data-wow-delay="0.3s">Comprehensive smart contracts.</h4>
                <p className="fadeInUp" data-wow-delay="0.4s">We are leading change in the broadcast industry using the benefits of the Internet of Value (IoV) and Internet of Things (IoT).</p>
                <p className="fadeInUp" data-wow-delay="0.5s">Creating innovative devices that allow the use of the IoT to monitor your Broadcast Station in a way never seen before. Now you can connect your RF transmitters, connect your OHMIO Box and start to <text style={{textDecoration:'underline',fontWeight:'bold'}}>earn</text> OHMIO while ensuring and optimizing your processes.</p>
                <a className="btn more-btn mt-30 fadeInUp" data-wow-delay="0.6s" href="#" target={'_blank'}>Start to Earn</a>
              </div>
            </div>
            <div className="col-12 col-lg-6 offset-lg-0 mt-s">
              {data && data.map((item , key) => (
                <Contract
                  key={key}
                  img={item.img}
                  title={item.title}
                  message={item.message}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );

}

export default SmartContract;