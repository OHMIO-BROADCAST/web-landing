import React, {useEffect} from 'react';
import BackgroundAnimation from '../Animations/Background/BackgroundAnimation.jsx';

import { use } from '@maticnetwork/maticjs'
import Web3ClientPlugin from '@maticnetwork/maticjs-web3';


const SecHeroSection = ({
      ClassSec="",
      ClassDiv="",
      specialHead="",
      title="",
      link1="",
      link2="",
      link3="",
      img="",
      HomeDemo1Or3Or4Or5Or6=true,
      HomeDemo1Or4Or5Or6=true,
    }) => {

      // AbsoImgInfo="",
      // AddWrapper=false,
      // HomeDemo1=false,
      // HomeDemo2=false,
      // HomeDemo3=false,
      // HomeDemo4=false,
      // HomeDemo5=false,
      // HomeDemo6=false
      const tokenAddress = '0x4d0d3976300FD6Cc5B2A722575523aEAd7185E94';
      const tokenSymbol = 'OHMIO';
      const tokenDecimals = 18;
      const tokenImage = '../../assets/img/icons/moneda.png';

       useEffect(() => {      
        return () => {
            use(Web3ClientPlugin)

        }
      }, []) 

      
      
      async function addTokenToMetamask() {
        try {
          const {ethereum} =window;

          const wasAdded = await ethereum.request({
            method: 'wallet_watchAsset',
            params: {
              type: 'ERC20', 
              options: {
                address: tokenAddress, 
                symbol: tokenSymbol, 
                decimals: tokenDecimals, 
                image: tokenImage, 
              },
            },
          });
          if (wasAdded) {
            console.log('Thanks for your interest!');
          } else {
            console.log('HelloWorld Coin has not been added');
          }
        } catch (error) {
          console.log(error);
        }
        }

  return (
    <section className={ClassSec} id="home">

      <div className="hero-section-content">
      {/* <canvas id="canvas" /> */}
        <div className="container">
          <div className="row align-items-center">
            <div className={ClassDiv}>
              <div className="welcome-content">
                <div className="promo-section">
                  <h3 className="special-head dark">{specialHead}</h3>
                </div>
                <h1>{title}</h1>
                <p className="w-text fadeInUp" data-wow-delay="0.3s"><text style={{textDecoration:'underline'}}>OHMIO</text> is the solution for Broadcast Industry, using Blockchain technology and Internet of things (IoT). <text style={{textDecoration:'underline'}}>OHMIOBOX</text> makes possible tokenizing the efficiency and rating of transmission stations over the world.</p>
                <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s" style={{display:'flex', justifyContent:'center'}}>
                  <a href="https://ohmio.gitbook.io/" target="_blank" className="btn more-btn mr-3">{link1}</a>
                  <a href="https://app.ohmiobroadcast.io/" target="_blank" className="btn more-btn-app">{link2}</a>
                </div>
                <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s" style={{display:'flex', justifyContent:'center'}}>
                  <a onClick={()=>{addTokenToMetamask()}} target="_blank" className="btn more-btn-app" style={{margin:'2rem', color:'whitegit '}}>{link3}</a>
                </div>

              </div>
            </div>
            {HomeDemo1Or3Or4Or5Or6 && (
              <div className="col-lg-6">
                {HomeDemo1Or4Or5Or6 && (
                  <div className="illusto-2">
                    <img draggable="false" src={img} alt=""/>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>

  );
}

export default SecHeroSection;


    // <>
    //   {HomeDemo1 && (
    //     <section className={"hero-section moving section-padding"} id="home">
    //       <div className="moving-bg" />
    //       <div className="hero-section-content">
    //         <div className="container ">
    //           <div className="row align-items-center">
    //             <div className={"col-12 col-lg-5 col-md-12"}>
    //               <div className="welcome-content">
    //                 <div className="promo-section">
    //                   <h3 className="special-head dark">{specialHead}</h3>
    //                 </div>
    //                 <h1 className="" data-aos-delay="200">{title}</h1>
    //                 <p className="w-text " data-aos-delay="300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem blanditiis ad perferendis, labore delectus dolor sit amet, adipisicing elit. Eveniet.</p>
    //                 <div className="dream-btn-group " data-aos-delay="400">
    //                   <a href="#" className="btn more-btn mr-3">{link1}</a>
    //                   <a href="#" className="btn more-btn">{link2}</a>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="col-lg-6">
    //               <div className="dotted mt-30 " data-aos-delay="500">
    //                 <img draggable="false" src={img} alt="" />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   )}

    //   {HomeDemo2 && (
    //     <section className="hero-section app section-padding" id="home">
    //       <div className="hero-section-content">
    //         <div className="container">
    //           <div className="row align-items-center">
    //             <div className="col-12 col-lg-7 col-md-12">
    //               <div className="welcome-content">
    //                 <div className="promo-section">
    //                   <h3 className="special-head dark">{specialHead}</h3>
    //                 </div>
    //                 <h1>{title}</h1>
    //                 <p className="w-text">We have over 15 year exprience in business consultting arena. We have over 15 year exprience in business consultting arena and artficial intelligence.</p>
    //                 <div className="dream-btn-group">
    //                   <a href="#" className="btn more-btn mr-3">{link1}</a>
    //                   <a href="#" className="btn more-btn">{link2}</a>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   )}

    //   {HomeDemo3 && (
    //     <section className="hero-section de-3 section-padding" id="home">
    //       <div className="hero-section-content">
    //         <div className="container">
    //           <div className="row align-items-center">
    //             <div className="col-12 col-lg-5 col-md-12">
    //               <div className="welcome-content">
    //                 <div className="promo-section">
    //                   <h3 className="special-head dark">{specialHead}</h3>
    //                 </div>
    //                 <h1>{title}</h1>
    //                 <p className="w-text fadeInUp" data-wow-delay="0.3s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem blanditiis ad perferendis, labore delectus dolor sit amet, adipisicing elit. Eveniet.</p>
    //                 <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
    //                   <a href="#" className="btn more-btn mr-3">{link1}</a>
    //                   <a href="#" className="btn more-btn">{link2}</a>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="col-lg-6">
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   )}

    //   {HomeDemo4 && (

    //     <section className={ClassSec} id="home">
    //       <div className="hero-section-content">
    //         <div className="container ">
    //           <div className="row align-items-center">
    //             <div className={ClassDiv}>
    //               <div className="welcome-content">
    //                 <div className="promo-section">
    //                   <h3 className="special-head dark">{specialHead}</h3>
    //                 </div>
    //                 <h1>{title}</h1>
    //                 <p className="w-text fadeInUp" data-wow-delay="0.3s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem blanditiis ad perferendis, labore delectus dolor sit amet, adipisicing elit. Eveniet.</p>
    //                 <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
    //                   <a href="#" className="btn more-btn mr-3">{link1}</a>
    //                   <a href="#" className="btn more-btn">{link2}</a>
    //                 </div>
    //               </div>
    //             </div>
    //             {HomeDemo1Or3Or4Or5Or6 && (
    //               <div className="col-lg-6">
    //                 {HomeDemo1Or4Or5Or6 && (
    //                   <div className="illusto-2">
    //                     <img draggable="false" draggable="false" src={img} alt="" />
    //                   </div>
    //                 )}
    //               </div>
    //             )}
    //           </div>
    //         </div>
    //       </div>
    //     </section>

    //   )}

    //   {HomeDemo5 && (

    //     <section className="hero-section moving-2 section-padding" id="home">
    //       <div className="hero-section-content">
    //         <div className="container ">
    //           <div className="row align-items-center">
    //             <div className="col-12 col-lg-6 col-md-12">
    //               <div className="welcome-content">
    //                 <div className="promo-section">
    //                   <h3 className="special-head dark">{specialHead}</h3>
    //                 </div>
    //                 <h1>{title}</h1>
    //                 <p className="w-text fadeInUp" data-wow-delay="0.3s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem blanditiis ad perferendis, labore delectus dolor sit amet, adipisicing elit. Eveniet.</p>
    //                 <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
    //                   <a href="#" className="btn more-btn mr-3">{link1}</a>
    //                   <a href="#" className="btn more-btn">{link2}</a>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="col-lg-6">
    //               <div className="illusto-1 mt-30 fadeInUp" data-wow-delay="0.5s">
    //                 <img draggable="false" draggable="false" src="img/core-img/hero-img.png" alt="" />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   )}

    //   {HomeDemo6 && (

    //     <section className="hero-section moving section-padding" id="home">
    //       <div className="hero-section-content">
    //         <div className="container ">
    //           <div className="row align-items-center">
    //             <div className="col-12 col-lg-6 col-md-12">
    //               <div className="welcome-content">
    //                 <div className="promo-section">
    //                   <h3 className="special-head dark">{specialHead}</h3>
    //                 </div>
    //                 <h1>{title}</h1>
    //                 <p className="w-text fadeInUp" data-wow-delay="0.3s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem blanditiis ad perferendis, labore delectus dolor sit amet, adipisicing elit. Eveniet.</p>
    //                 <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
    //                   <a href="#" className="btn more-btn mr-3">{link1}</a>
    //                   <a href="#" className="btn more-btn">{link2}</a>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="col-lg-6">
    //               <div className="illusto mt-30 fadeInUp" style={{}} data-wow-delay="0.5s">
    //                 <img draggable="false" draggable="false" src="img/core-img/about-1.png" alt="" />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>

    //   )}
    // </>