import React, { Fragment } from 'react'
import Navigation from '../components/navigation'
import Hero from '../components/hero'
import About from '../components/about'
import Project from '../components/project'
import Experience from '../components/experience'
import Contact from '../components/contact'
import Footer from '../components/footer'

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