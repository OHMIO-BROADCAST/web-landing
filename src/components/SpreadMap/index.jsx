import Swal from 'sweetalert2'
import { I18nextProvider, useTranslation } from 'react-i18next';

const SpreadMap = ({Wwhitepaper , SectionIcon11}) => {

    const { t, i18n } = useTranslation();
  const i18nfile = i18n

  return (
    <I18nextProvider i18n={i18nfile}>
    <section className="spread-map download" id="wallet">
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
              <h4 className="text-white">{t('wallet-title')}</h4>
              <p className="text-white">{t('wallet-description')}</p>
              <a className="btn dream-btn mt-30" onClick={() => {
        Swal.fire({
          text: 'Stay tune',
          title: 'Coming soon!',
          icon: 'success'
        })
      }}>
                {t('wallet-android')}
              </a>
              <a className="btn dream-btn mt-30 ml-5" onClick={() => {
        Swal.fire({
          text: 'Stay tune',
          title: 'Coming soon!',
          icon: 'success'
        })
      }}>
              {t('wallet-ios')}
              </a>
            </div>
          </div>
        </div>
      </div>
      </section>
      </I18nextProvider>
  );

}

export default SpreadMap