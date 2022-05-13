const TrustItem = ({
  img,
  value
}) => {

    return (
      <div className="col-12 col-sm-6 col-md-3 col-lg-4">
        <div className="trust-item text-center fadeInUp" data-aos="fade-up">
          <div className="ico-platform-logo">
            <img draggable="false" src={img} alt="" style={{maxWidth:'9rem'}} />
          </div>
          <div className="check">
            {value && <div style={{display:'flex',justifyContent:'center',alignItems:'center', textAlign:'center',fontWeight:'bold', paddingTop:'5px'}}>{value}</div>}
          </div>
        </div>
      </div>
    );
}

export default TrustItem;