import SectionHeading from "../../../components/SectionHeading"
import TrustItem from "./TrustItem"

const SecTrust = ({data}) => {

    return (

      <div className="trust-section section-padding-100-70">
        <SectionHeading
          title="Potencializa tus resultados"
          text="Nuestros componentes"
        />
        <div className="container">
          <div className="row" style={{ justifyContent:'center', alignItems:'center', justifyContent:'center'}}>
            {data && data.map((item , key) => (
              <TrustItem
                key={key}
                img={item.img}
                CheckIcon={item.CheckIcon}
                value={item.value}
              />
            ))}
          </div>
        </div>
      </div>
    );
}

export default SecTrust;