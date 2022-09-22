import {HomeDemo2Feature1 , HomeDemo2SmallCar} from '../../utils/allImgs'
import PolygonLogo from '../../assets/img/core-img/polygonlogo.png'
import AntenaLogo from '../../assets/img/core-img/antenna.png'
import MonedaLogo from '../../assets/img/icons/moneda.png'




const FuelFeatures = () => {

    return (

      <section className="special fuel-features section-padding-100 clearfix">
        <div className="container has-shadow">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 offset-lg-0 col-md-12 no-padding-left">
              <div className="welcome-meter mb-30">
                <img draggable="false" src={HomeDemo2Feature1} alt="" />
              </div>
            </div>
            <div className="col-12 col-lg-6 offset-lg-0">
              <div className="who-we-contant">
                <div className="dream-dots text-left">
                  <span className="gradient-text blue">Be part of this revolution</span>
                </div>
                <h4 className="fadeInUp" data-wow-delay="0.3s">Get your OHMIO Box and start to Earn! <img src={MonedaLogo} style={{width:'2rem'}}></img></h4>
                <p className="fadeInUp" data-wow-delay="0.4s">With this device you will be able to generate rewards in OHMIO coins, the token with which you can carry out transactions within our ecosystem.</p>
                <div className="services-block-four align-items-center">
                  <div className="inner-box">
                    <div className="icon-img-box">
                      <img draggable="false" src={AntenaLogo} alt="" width={140} />
                    </div>
                    <h3><a href="#">Radio/Tv Station</a></h3>
                    <div className="text">Run our nodes in your station and generate a new income.</div>
                  </div>
                </div>
                <div className="services-block-four align-items-center">
                  <div className="inner-box">
                    <div className="icon-img-box" style={{justifyContent:'center', alignItems:'center'}}>
                      <img draggable="false" src={PolygonLogo} alt="" width={110} style={{paddingLeft:'2rem'}}/>
                    </div>
                    <h3><a href="#">Polygon Hosted</a></h3>
                    <div className="text">OHMIO is currently on Polygon Mainnet Network.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

}

export default FuelFeatures;