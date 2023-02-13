import Contract from "./Contract"
import { I18nextProvider, useTranslation } from 'react-i18next';

const SmartContract = ({data}) => {
     const { t, i18n } = useTranslation();
  const i18nfile = i18n
    return (
    <I18nextProvider i18n={i18nfile}>
      <section className="smart-contract section-padding-0-70 mt-5 clearfix">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-lg-6 offset-lg-0">
              <div className="who-we-contant">
                <div className="dream-dots text-left fadeInUp" data-wow-delay="0.2s">
                  <span className="gradient-text blue">{t("sc-title-azul")}</span>
                </div>
                <h4 className="fadeInUp" data-wow-delay="0.3s">{t("sc-title")}</h4>
                <p className="fadeInUp" data-wow-delay="0.4s">{t("sc-description1")}</p>
                <p className="fadeInUp" data-wow-delay="0.5s">{t("sc-description2")}</p>
                <a className="btn more-btn mt-30 fadeInUp" data-wow-delay="0.6s" href="https://main.d3thd78bg7l3yq.amplifyapp.com/" target={'_blank'}>{t("sc-bton")}</a>
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
    </I18nextProvider>
    );

}

export default SmartContract;