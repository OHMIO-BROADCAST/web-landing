import {useEffect} from "react";
import {addRemoveClassBody} from '../../utils'

import {
        OurTeamInfo,
        OurBlogInfo
       } from '../../data/data-containers/HomeDemo3/data-HomeDemo3.js';


import FeaturesOtherTop from '../../data/data-containers/HomeDemo3/data-FeaturesOtherTop.json';
import FeaturesOtherDown from '../../data/data-containers/HomeDemo3/data-FeaturesOtherDown.json';
import TokenDistributionInfo from '../../data/data-containers/HomeDemo3/data-TokenDistributionInfo.json';
import FaqInfo from '../../data/data-containers/HomeDemo3/data-FaqInfo.json';

import './wppbtn.css'

import {

    HomeDemo3FeaturesS1,
    HomeDemo3FeaturesS2,
    HomeDemo3FeaturesS3,
    HomeDemo3FeaturesS4,

    HomeDemo3FeaturesF1,
    HomeDemo3FeaturesF2,
    HomeDemo3FeaturesF3,
    HomeDemo3FeaturesF4,
    HomeDemo3FeaturesF5,
    HomeDemo3FeaturesF6,

    HomeDemo3TeamImg1,
    HomeDemo3TeamImg2,
    HomeDemo3TeamImg3,
    HomeDemo3TeamImg4,

    HomeDemo3BlogImg1,
    HomeDemo3BlogImg2,
    HomeDemo3BlogImg3,

} from '../../utils/allImgs'

import {
        HomeDemo3Wwhitepaper,
        HomeDemo3About1
        } from '../../utils/allImgs'

import './style/HomeDemo3.scss'

import Header from "../../layouts/Header"
import FooterPages from '../../layouts/Footer/FooterPages'

import SecHeroSection from '../../components/HeroSection'
import SecAbout from '../../components/SecAbout'
import FuelFeatures from '../../components/FuelFeatures'
import Features2 from '../../components/Features2'
import SpreadMap from '../../components/SpreadMap'
import SmartContract from '../../components/SmartContract'
import TokenDistribution from '../../components/TokenDistribution'
import Roadmap from '../../components/Roadmap'
import Faq from '../../components/Faq'
import OurTeam from '../../components/OurTeam'
import Subscribe from '../../components/Subscribe'
import OurBlog from '../../components/OurBlog'

import OurPlatform from './OurPlatform'
import TokenFeatures from "./TokenFeatures"

import { I18nextProvider, useTranslation } from 'react-i18next';


const HomeNABContainer = () => {

      const { t, i18n } = useTranslation();
  const i18nfile = i18n


    useEffect(() => {
      addRemoveClassBody('darker')
    }, [])
    
    const OurPatformInfo =[
    {
        "NameMarked":t('ohmiobox-f1')
    },
    {
        "NameMarked":t('ohmiobox-f2')
    },
    {
        "NameMarked":t('ohmiobox-f3')
    },
    {
        "NameMarked":t('ohmiobox-f4')
    }
    ]

    const TokenFeaturesTop = [
    {
        img:HomeDemo3FeaturesF1,
        title:t("features-f1title"),
        message:t("features-f1")
    },
    {
        img:HomeDemo3FeaturesF2,
        title:t("features-f2title"),
        message:t("features-f2")
    }
]

 const TokenFeaturesMed = [
    {
        img:HomeDemo3FeaturesF3,
        title:t("features-f3title"),
        message:t("features-f3")
    },
    {
        img:HomeDemo3FeaturesF4,
        title:t("features-f4title"),
        message:t("features-f4")
    },
]
 const TokenFeaturesDown = [
    {
        img:HomeDemo3FeaturesF5,
       title:t("features-f5title"),
        message:t("features-f5")
    },
    {
        img:HomeDemo3FeaturesF6,
        title:t("features-f6title"),
        message:t("features-f6")
    }
 ]
    
    const SmartContractinfo = [
    {
        img:HomeDemo3FeaturesS1,
       title:t("sc-f1title"),
        message:t("sc-f1")
    },
    {
        img:HomeDemo3FeaturesS2,
       title:t("sc-f2title"),
        message:t("sc-f2")
    },
    {
        img:HomeDemo3FeaturesS3,
       title:t("sc-f3title"),
        message:t("sc-f3")
    },
    {
        img:HomeDemo3FeaturesS4,
        title:t("sc-f4title"),
        message:t("sc-f4")
    },
    ]
    
    const RoadmapInfo=[
    {
        "month":"23 Apr",
        "year":"2022",
        "title":t("roadmap-f1title"),
        "message":t("roadmap-f1")
    },
    {
        "month":"10 Jul",
        "year":"2022",
       "title":t("roadmap-f2title"),
        "message":t("roadmap-f2")
    },
    {
        "month":"05 Aug",
        "year":"2022",
        "title":t("roadmap-f3title"),
        "message":t("roadmap-f3")
    },
    {
        "month":"02 Sep",
        "year":"2022",
       "title":t("roadmap-f4title"),
        "message":t("roadmap-f4")
    },
    {
        "month":"IN PROCESS",
        "year":"2022",
        "title":t("roadmap-f5title"),
        "message":t("roadmap-f5")
    }
]

    return (
    <I18nextProvider i18n={i18nfile}>
      <div>
        <Header Title="OHMIO Broadcast | Descentralized Technology for Broadcast Industry" />
        <SecHeroSection
          ClassSec="hero-section de-3 section-padding"
          ClassDiv="col-12 col-lg-5 col-md-12 "
          specialHead={t('hero-title-amarillo')}
          title={t('hero-title-amarillo')}
          link1={t('hero-nabevent')}
          link2={t('hero-ontheair')}
          link3={t('hero-addmetamask')}
          description1={t('hero-description1')}
          description2={t('hero-description2')}
          HomeDemo1Or4Or5Or6={false}
        />
        <div className="clearfix" href="#products"/>
        <OurPlatform
            data={OurPatformInfo}
            ClassSpanTitle="gradient-text blue"
        />
   {/*  <SecAbout
          imgDwon={true}
          title="Best Trading Experience"
          text=" Trade crypto currency and refer new members to get bounes."
          img={HomeDemo3About1}
        /> */}
        <FuelFeatures />
        <TokenFeatures
            TokenFeaturesTop={TokenFeaturesTop}
            TokenFeaturesMed={TokenFeaturesMed}
            TokenFeaturesDown={TokenFeaturesDown}
            ClassSpanTitle="gradient-text blue"
        />
        <SmartContract data={SmartContractinfo} />
        <div className="clearfix" />
        <SpreadMap
            Wwhitepaper={HomeDemo3Wwhitepaper}
        />
        {/* <TokenDistribution
            data={TokenDistributionInfo}
            ClassSpanTitle="gradient-text blue"
        /> */}
        <Roadmap
            data={RoadmapInfo}
            ClassSpanTitle="gradient-text blue"
        />
{/*         <Features2
            icoCounterClass="ico-counter dotted-bg mb-30"
            addOther={true}
            FeaturesOtherTop={FeaturesOtherTop}
            FeaturesOtherDown={FeaturesOtherDown}
        />
        <Faq
            data={FaqInfo}
            ClassSpanTitle="gradient-text blue"
        /> */}
   {/*      <OurTeam
            data={OurTeamInfo}
            ClassSpanTitle="gradient-text blue"
        />
        <Subscribe />
        <OurBlog
            data={OurBlogInfo}
            ClassSpanTitle="gradient-text blue"
        /> */}
        <FooterPages
            ClassSpanTitle="gradient-text blue"
        />
<a href="https://api.whatsapp.com/send?phone=17866704647&text=Hi%21%20I%20want%20more%20info%20about%20OHMIO" className="float" target="_blank">
<i className="fa fa-whatsapp my-float"></i>
</a>
            </div>
            </I18nextProvider>
    );
};

export default HomeNABContainer