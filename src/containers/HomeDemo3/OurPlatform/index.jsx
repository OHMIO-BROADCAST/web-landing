import {
    HomeDemo3Platform,
    HomeDemo3Rings,
} from '../../../utils/allImgs'

import ohmiobox from '../../../assets/img/uhf-transmitter-rs.png'
import ohmiofondo2 from '../../../assets/img/bg-img/AMBIENTENFT2.png';

import SectionHeading from "../../../components/SectionHeading"
import { I18nextProvider, useTranslation } from 'react-i18next';


const OurPlatform = ({data , ClassSpanTitle}) => {
        const { t, i18n } = useTranslation();

  const i18nfile = i18n

  return (
          <I18nextProvider i18n={i18nfile}>
      <section className="features section-padding-100" id="products">
        <div className="container" >
          <SectionHeading
            title={(t('ohmiobox-title-azul'))}
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
                  <h4 className="w-text ">{(t('ohmiobox-title'))}</h4>
                  <p className="w-text ">{(t('ohmiobox-description'))}</p>
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
      </I18nextProvider>
    );
}

export default OurPlatform;