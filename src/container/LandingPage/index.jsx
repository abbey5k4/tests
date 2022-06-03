import React from 'react'
import { DemoComponent } from '../../components/demo'
import { AccessToMedical } from './components/access'
import { AppsSection } from './components/apps'
import { DoctorsSection } from './components/doctors'
import { Footer } from './components/footer'
import { HeaderComponent } from './components/header'
import { SeamlesslySection } from './components/seamless'
import { Simplify } from './components/simplify'
import { TextBg } from './components/text'

export const LandingPageLayout = () => {
    return (
        <div className='container-fluids'>
            <HeaderComponent />
            <DoctorsSection />
            <Simplify />
            <SeamlesslySection />
            <TextBg />
            <AccessToMedical />
            <AppsSection />
            <DemoComponent />
            <Footer />
        </div>
    )
}
