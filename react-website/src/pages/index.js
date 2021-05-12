import React, {useState} from 'react'
import HeroSection from '../components/heroSection'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import InfoSection from '../components/infoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/infoSection/Data'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
        </>
    )
}

export default Home
