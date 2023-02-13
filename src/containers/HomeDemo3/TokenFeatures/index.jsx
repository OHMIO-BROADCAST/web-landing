import SectionHeading from "../../../components/SectionHeading"

import Block from "./Block"
import { I18nextProvider, useTranslation } from 'react-i18next';

const TokenFeatures = ({TokenFeaturesTop , TokenFeaturesMed , TokenFeaturesDown , ClassSpanTitle}) => {
     const { t, i18n } = useTranslation();
  const i18nfile = i18n
    return (
    <I18nextProvider i18n={i18nfile}>
      <section className="about-us-area features section-padding-100-70 clearfix">
        <div className="container">
          <SectionHeading
            title={t("features-title-azul")}
            text={t("features-title")}
            ClassSpanTitle={ClassSpanTitle}
          />
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6 col-sm-12 mt-md-30">
              {TokenFeaturesTop && TokenFeaturesTop.map((item , key) => (
                  <Block
                    key={key}
                    img={item.img}
                    title={item.title}
                    message={item.message}
                  />
              ))}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-md-30 mt-sm-0">
              {TokenFeaturesMed && TokenFeaturesMed.map((item , key) => (
                  <Block
                    key={key}
                    img={item.img}
                    title={item.title}
                    message={item.message}
                  />
              ))}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-md-30 mt-sm-0">
              {TokenFeaturesDown && TokenFeaturesDown.map((item , key) => (
                  <Block
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

export default TokenFeatures