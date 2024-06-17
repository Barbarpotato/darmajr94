import { Fragment, useState } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import { motion } from 'framer-motion'
import { primaryFontColor, ternaryColor } from '../../theme/globalTheme'
import { Box, Text, Input, Flex, Button, Heading } from '@chakra-ui/react'
import Navigation from '../../components/navigation'
import { useDatablogs } from '../../api/blog'
import Herolabs from '../../components/labs/heroLabs'
import LabContent from '../../components/labs/labContent'
import Footer from '../../components/footer'
import Loading from '../../components/loading'

function Labs() {

    const { width } = useWindowSize()

    const [searchQuery, setSearchQuery] = useState("");

    const { data: blogs, isLoading, isError, isFetching, refetch } = useDatablogs(searchQuery)

    return (
        <Fragment>
            {
                isError && (
                    <Fragment>
                        <Text>Something Went Wrong. Please Try Again.</Text>
                    </Fragment>
                )
            }
            {
                isLoading ? <Loading />
                    :
                    <Fragment>
                        <Navigation />
                        <Herolabs />

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 1.5,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}>
                            <Flex marginTop={width > 768 ? '100px' : '30px'} marginInline={width > 768 ? '100px' : '30px'}>
                                <Input onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} placeholder='Search Cotent Labs...'
                                    color={primaryFontColor} borderTopLeftRadius={'2xl'} borderBottomLeftRadius={'2xl'} borderTopRightRadius={'0'} borderBottomRightRadius={'0'}
                                    size={width > 768 ? 'lg' : 'md'} borderWidth={3} colorScheme='purple' borderColor={"#536189"} focusBorderColor={ternaryColor}
                                />
                                <Button borderTopLeftRadius={'0'} borderBottomLeftRadius={'0'} size={width > 768 ? 'lg' : 'md'} onClick={() => refetch()} fontWeight={'bold'}
                                    colorScheme='purple' color={'black'}>
                                    Search
                                </Button>
                            </Flex>
                        </motion.div>

                        {
                            isFetching ? <Loading /> : <LabContent blog={blogs} itemsPerPage={9} />
                        }
                        <Box mt={200}>
                            <Footer />
                        </Box>

                    </Fragment>
            }
        </Fragment >
    )
}

export default Labs