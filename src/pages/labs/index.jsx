import { Fragment } from 'react'
import { Box, Text } from '@chakra-ui/react'
import Navigation from '../../components/navigation'
import { useDatablogs } from '../../api/blog'
import Herolabs from '../../components/labs/heroLabs'
import LabContent from '../../components/labs/labContent'
import Footer from '../../components/footer'
import Loading from '../../components/loading'

function Labs() {

    const { data: blogs, isLoading, isError } = useDatablogs()

    return (
        <Fragment>
            {isError && (
                <Fragment>
                    <Text>Something Went Wrong. Please Try Again.</Text>
                </Fragment>
            )}
            {isLoading ? <Loading />
                :
                <Fragment>
                    <Navigation />
                    <Herolabs />
                    <LabContent blog={blogs} />
                    <Box mt={200}>
                        <Footer />
                    </Box>

                </Fragment>
            }
        </Fragment>
    )
}

export default Labs