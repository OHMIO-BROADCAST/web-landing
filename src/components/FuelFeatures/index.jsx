import {HomeDemo2Feature1 , HomeDemo2SmallCar} from '../../utils/allImgs'
import PolygonLogo from '../../assets/img/core-img/polygonlogo.png'
import AntenaLogo from '../../assets/img/core-img/antenna.png'
import MonedaLogo from '../../assets/img/icons/moneda.png'
import { I18nextProvider, useTranslation } from 'react-i18next';




const FuelFeatures = () => {
 const { t, i18n } = useTranslation();
  const i18nfile = i18n
    return (
    <I18nextProvider i18n={i18nfile}>
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
                    <span className="gradient-text blue">{t('revolution-title-azul')}</span>
                </div>
                <h4 className="fadeInUp" data-wow-delay="0.3s">{t('revolution-title')}<img src={MonedaLogo} style={{width:'2rem'}}></img></h4>
                <p className="fadeInUp" data-wow-delay="0.4s">{t('revolution-description')}</p>
                <div className="services-block-four align-items-center">
                  <div className="inner-box">
                    <div className="icon-img-box">
                      <img draggable="false" src={AntenaLogo} alt="" width={140} />
                    </div>
                    <h3><a href="#">{t('revolution-f1title')}</a></h3>
                    <div className="text">{t('revolution-f1')}</div>
                  </div>
                </div>
                <div className="services-block-four align-items-center">
                  <div className="inner-box">
                    <div className="icon-img-box" style={{justifyContent:'center', alignItems:'center'}}>
                      <img draggable="false" src={PolygonLogo} alt="" width={110} style={{paddingLeft:'2rem'}}/>
                    </div>
                    <h3><a href="#">{t('revolution-f2title')}</a></h3>
                    <div className="text">{t('revolution-f2')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
      </I18nextProvider>
    );

}

export default FuelFeatures;