import React, { Fragment } from 'react'
import { motion } from 'framer-motion'
import { Card, CardBody, Image, Flex, Heading, Text, Divider, Grid, Box, Button } from '@chakra-ui/react'
import useWindowSize from '../hooks/useWindowSize'
import { primaryColor, primaryFontColor } from '../utils/globalTheme'

function LabContent({ blog }) {

    const { width } = useWindowSize()

    return (
        <Fragment>
            {width > 768 && (
                <Fragment>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: 1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>
                        <Grid style={{ marginTop: '100px', marginInline: width > 768 ? '100px' : '20px' }} templateColumns={width < 1280 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'} gap={6} >
                            {blog.map((item) => (
                                <Card borderRadius={'2xl'} height={'500px'} boxShadow={'2xl'}>
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center">
                                        <Image
                                            h={'300px'}
                                            src={item.image}
                                            alt={item.image_alt}
                                            borderRadius='lg'
                                        />
                                    </Box>
                                    <CardBody backgroundColor={primaryColor}>
                                        <Flex height={'200px'} mt='6' direction='column'>
                                            <Heading color={primaryFontColor} size='md'>{item.title}</Heading>
                                            <Text color={primaryFontColor}>
                                                {item.short_description.length > 230
                                                    ? `${item.short_description.slice(0, 200)}...` // Truncate the string
                                                    : item.short_description}
                                            </Text>
                                            <Button mt={5} w={'100px'} colorScheme='purple' color={primaryFontColor} rounded={'2xl'} fontSize={'xs'}>Read More...</Button>
                                        </Flex>
                                    </CardBody>
                                    <Divider />
                                </Card>
                            ))}
                        </Grid>
                    </motion.div>
                </Fragment>
            )}
            {width <= 768 && (
                <Fragment>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: 1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>
                        {blog.map((item) => (
                            <Card m={5} style={{ marginTop: '100px' }} borderRadius={'2xl'} height={'500px'} boxShadow={'2xl'}>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center">
                                    <Image
                                        h={'300px'}
                                        src={item.image}
                                        alt={item.image_alt}
                                        borderRadius='lg'
                                    />
                                </Box>
                                <CardBody backgroundColor={primaryColor}>
                                    <Flex height={'200px'} mt='6' direction='column'>
                                        <Heading color={primaryFontColor} size='md'>{item.title}</Heading>
                                        <Text color={primaryFontColor}>
                                            {item.short_description.length > 230
                                                ? `${item.short_description.slice(0, 200)}...` // Truncate the string
                                                : item.short_description}
                                        </Text>
                                        <Button mt={5} w={'100px'} colorScheme='purple' color={primaryFontColor} rounded={'2xl'} fontSize={'xs'}>Read More...</Button>
                                    </Flex>
                                </CardBody>
                                <Divider />
                            </Card>
                        ))}
                    </motion.div>
                </Fragment>
            )}
        </Fragment >
    )
}

export default LabContent