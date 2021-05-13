import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './heroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
               <HeroH1>Inventory Management Made Easy</HeroH1>
               <HeroP>
                   Sign up to gain access to the next generation of orginizational tech
               </HeroP>
               <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
               </HeroBtnWrapper> 
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
