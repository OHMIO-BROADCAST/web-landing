import SectionHeading from "../../../components/SectionHeading"

import Block from "./Block"

const TokenFeatures = ({TokenFeaturesTop , TokenFeaturesMed , TokenFeaturesDown , ClassSpanTitle}) => {

    return (

      <section className="about-us-area features section-padding-100-70 clearfix">
        <div className="container">
          <SectionHeading
            title="Token and Product Features"
            text="Why choose us"
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
    );

}

export default TokenFeatures