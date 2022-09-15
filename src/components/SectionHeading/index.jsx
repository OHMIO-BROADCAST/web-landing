import ohmiofondo2 from '../../assets/img/bg-img/AMBIENTENFT2.png';

const SectionHeading = ({
	title,
	text,
	description,
	img,
	ClassSpan="dream-dots justify-content-center",
	ClassSpanTitle=""
}) => {

  return (
  	<>
  	{img ? (
	      <div className="section-heading text-center">	      		
	        <div className="dream-dots justify-content-center" data-aos="fade-up">
	          <img draggable="false" src={img} alt="" />
	        </div>
	        <h2 data-aos="fade-up">{title}</h2>
	        <p data-aos="fade-up">{text}</p>
	      </div>
      	):(
	      <div className="section-heading text-center">	    
			{/* <img draggable="false" src={ohmiofondo2}  style={{width:'100%', objectFit:'cover'}} alt="" /> */}
	        <div className={ClassSpan} data-aos="fade-up">
	            <span className={ClassSpanTitle}>{title}</span>
	        </div>
            <h2 data-aos="fade-up">{text}</h2>
            <p data-aos="fade-up">{description}</p>
	      </div>

      	)}
    </>
  );
}

export default SectionHeading;