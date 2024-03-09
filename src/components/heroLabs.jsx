import { Flex, Heading, Box, Image, Text } from '@chakra-ui/react'
import React, { useState, useEffect, Fragment } from 'react';
import { motion } from 'framer-motion';
import { primaryFontColor, secondaryColor } from '../utils/globalTheme'
import useWindowSize from '../hooks/useWindowSize'

function Herolabs() {

    const { width } = useWindowSize()

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        // Update the current date every second
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures the effect runs only once on mount

    // Convert the current date to a string representing the date and time
    const dateTimeString = currentDate.toLocaleString();

    return (
        <Fragment>
            <Box style={{ marginInline: width > 768 ? '100px' : '20px' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}>
                    <Heading my={10} style={{ fontSize: width > 768 ? '100px' : '50px' }} color={primaryFontColor}><span style={{ color: secondaryColor }}>M</span>y Labs</Heading>
                </motion.div>

                <Fragment>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: 1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>
                        <Flex direction={width > 1280 ? 'row' : 'column'}>
                            <Image
                                boxShadow={'2xl'}
                                borderRadius={'2xl'}
                                width={width > 1280 ? '60%' : '100%'}
                                src='https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/blog-content%2Fintro-labs.jpg?alt=media&token=22ab3f4b-9f49-4f61-bee5-50a457f4f332' />
                            <Box m={8}>
                                <Text color={primaryFontColor} opacity={0.7}>{dateTimeString}</Text>
                                <Heading fontSize={width < 768 ? '5xl' : '7xl'} color={primaryFontColor}><span style={{ color: secondaryColor }}>W</span>elcome to <span style={{ color: secondaryColor }}>M</span>y <span style={{ color: secondaryColor }}>P</span>ersonal <span style={{ color: secondaryColor }}>L</span>abs!</Heading>
                                <Text my={2} opacity={0.7} color={primaryFontColor}>Hello, I am Covering a range of topics from the latest technologies, coding tutorials, to work experiences, and personal perspectives,
                                    I hope this labs can serve as a source of inspiration and knowledge for those interested in the tech world.</Text>
                            </Box>
                        </Flex>
                    </motion.div>
                </Fragment>
            </Box >

        </Fragment >
    )
}

export default Herolabs