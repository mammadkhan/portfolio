import Image from 'next/image';
import Link from 'next/link'
import {useState} from 'react';

import arrow_forward from '../public/arrow_forward.png'
import arrow_back from '../public/arrow_back.png'

import jobit_desktop from '../public/jobit_desktop.png';
import jobit_mobile from '../public/jobit_mobile.png';

import mcommerce_desktop from '../public/mcommerce_desktop.png';
import mcommerce_mobile from '../public/mcommerce_mobile.png';

import mbbankapp_desktop from '../public/mbbankapp_desktop.png';
import mbbankapp_mobile from '../public/mbbankapp_mobile.png';


function PortfolioSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = {
        0: {
            desk: jobit_desktop,
            mob: jobit_mobile,
            title: 'Jobit',
            desc: 'IT Job aggregator',
            link: 'https://azjobit.netlify.app/',
            linkPrev: 'azjobit.netlify.app',
        },    
        1: {
            desk: mcommerce_desktop,
            mob: mcommerce_mobile,
            title: 'MBCommerce',
            desc: 'E-commerce platform design',
            link: 'https://mbcommerce.netlify.app/',
            linkPrev: 'mbcommerce.netlify.app',
        },
        2: {
            desk: mbbankapp_desktop,
            mob: mbbankapp_mobile,
            title: 'MBBankApp',
            desc: 'Mobile banking app design',
            link: 'https://mbbankapp.netlify.app/',
            linkPrev: 'mbbankapp.netlify.app',
        }
    }

    const next = () => {
        if(Object.keys(slides).length - 1 === currentSlide) {
            setCurrentSlide(0);
        }else {
            setCurrentSlide(currentSlide + 1);
        }
    }

    const previus = () => {
        if(currentSlide === 0) {
            setCurrentSlide(Object.keys(slides).length - 1);
        }else {
            setCurrentSlide(currentSlide - 1);
        }
    }

  return (
    <div className="portfolioWrapper">
        <div onClick={()=> previus()} className="arrows" id="left"><Image src={arrow_back} layout="fill" alt="back arrow"/></div>
            <div className="slider">
                <div className="desktop">
                    <Image src={slides[currentSlide]["desk"]} layout="fill" alt="portfolio project design"/>
                </div>
                <div className="mobile">
                    <Image src={slides[currentSlide]["mob"]} layout="fill" alt="portfolio project design"/>
                </div>
            </div>
            <div className="projectInfo">
                <strong className="projectTitle">{slides[currentSlide]["title"]}</strong>
                <Link href={slides[currentSlide]["link"]}>
                    <a className="projectLink" target="_blank">{slides[currentSlide]["linkPrev"]}</a>
                </Link>
                <p className="projectAbout">{slides[currentSlide]["desc"]}</p>
            </div>
        <div onClick={()=> next()} className="arrows" id="right"><Image src={arrow_forward} layout="fill" alt="forward arrow"/></div>
    </div>
  )
}

export default PortfolioSlider
