import React, { Fragment, useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import Navigation from '../components/navigation'
import { getAllBlogs } from '../api/blog'
import Herolabs from '../components/heroLabs'
import LabContent from '../components/labContent'
import Footer from '../components/footer'
import Loading from '../components/loading'

function Labs() {

    const [blog, setBlog] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getAllBlogs()
            .then(data => {
                setBlog(data)
                setIsLoading(false)
            })
    }, [])

    return (
        <Fragment>
            {isLoading ? <Loading />
                :
                <Fragment>
                    <Navigation />
                    <Herolabs />
                    <LabContent blog={blog} />
                    <Box mt={200}>
                        <Footer />
                    </Box>

                </Fragment>
            }
        </Fragment>
    )
}

export default Labs