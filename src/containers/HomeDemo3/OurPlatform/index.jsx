import {
    HomeDemo3Platform,
    HomeDemo3Rings,
} from '../../../utils/allImgs'

import ohmiobox from '../../../assets/img/uhf-transmitter-rs.png'
import ohmiofondo2 from '../../../assets/img/bg-img/AMBIENTENFT2.png';

import SectionHeading from "../../../components/SectionHeading"

const OurPlatform = ({data , ClassSpanTitle}) => {

    return (
      <section className="features section-padding-100">
        <div className="container" >
          <SectionHeading
            title="We present"
            text="OHMIO BOX"
            ClassSpanTitle={ClassSpanTitle}
          />
          <div className="row align-items-center">
            <div className="service-img-wrapper col-lg-7 col-md-12 col-sm-12 mt-s">
              <div className="image-box">
                <img draggable="false" src={ohmiobox} className="center-block img-responsive phone-img" alt="" />
                <img draggable="false" src={HomeDemo3Rings} className="center-block img-responsive rings " alt="" />
              </div>
            </div> 
            <div className="service-img-wrapper how col-lg-5 col-md-9 col-sm-12 mt-s no-padding-right">
              <div className="features-list v2">
                <div className="who-we-contant">
                  <h4 className="w-text ">The OHMIO Box</h4>
                  <p className="w-text ">Is a dedicated piece of hardware that provides a node in order to interact with OHMIO Network from Broadcast Stations.</p>
                </div>
                <ul className="list-marked">
                  {data && data.map((item , key) => (
                      <li key={key} className="text-white"><i className="fa fa-check" />{item.NameMarked}</li>
                  ))}
                </ul>
                <a className="btn more-btn mt-30 " href="https://ohmio.gitbook.io/" target="_blank" >Whitepaper</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default OurPlatform;