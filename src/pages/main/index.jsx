import React, { Fragment } from 'react'
import Navigation from '../../components/navigation'
import Hero from '../../components/main/hero'
import About from '../../components/main/about'
import Project from '../../components/main/project'
import Experience from '../../components/main/experience'
import Contact from '../../components/main/contact'
import Footer from '../../components/footer'

function Index() {
    return (
        <Fragment>
            <Navigation />
            <Hero />
            <About />
            <Project />
            <Experience />
            <Contact />
            <Footer />
        </Fragment>
    )
}

export default Index