const PricingItem = ({ Round, dollar, bonus }) => {

    return (
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <div className="pricing-item ">
          {/* <h4>Robot de Alta Frecuencia {Round}</h4>  */}
          <h4>Sistema de Alta Frecuencia</h4> 
          <h3><strong className="xzc-1-month">{dollar}</strong></h3> 
          <span>Proyección mensual = 10 ~ 15 %</span>
          <label><strong>Broker: FXWinning</strong></label>
        </div>
      </div>
    );
}

export default PricingItem;