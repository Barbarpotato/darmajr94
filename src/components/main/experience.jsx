import { Heading, Card, Box, Flex, Image, Center, Text, Badge } from '@chakra-ui/react'
import { primaryColor, primaryFontColor } from '../../theme/globalTheme'
import React, { Fragment } from 'react'
import useWindowSize from '../../hooks/useWindowSize'

function Experience() {

    const { width } = useWindowSize()

    return (
        <Fragment>
            {/* // ** DESKTOP & TABLET SCREEN SIZE  */}
            {width >= 768 && (
                <Fragment>
                    <Heading pt={20} pb={10} textAlign={'center'} opacity={0.8} color={primaryFontColor}><span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{"<"}
                    </span>My Experience<span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{'>'}</span>
                    </Heading>
                    <Center >
                        <Card boxShadow='dark-lg' className='lighting-effect-white' w={'80%'} p={10} borderRadius={'xl'} mx={20} my={10} backgroundColor={primaryColor}>
                            <Flex alignItems={'center'}>
                                <Box>
                                    <Image src={"https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fexperiences%2Fkurniawan.png?alt=media&token=bcba6959-f692-4ce7-a2b9-842a1df4516f"} />
                                </Box>
                                <Box m={5}>
                                    <Heading fontSize={'3xl'} color={primaryFontColor}>PT. Samamaju Prima
                                        <Badge fontSize={'0.6em'} colorScheme='purple'>Software Engineer</Badge>
                                    </Heading>
                                    <Text color={primaryFontColor} opacity={0.5} fontWeight={'bold'}>by Kurniawan Group</Text>
                                    <Text color={primaryFontColor} my={4}>November 2023 - Present</Text>
                                    <Text fontSize={'xl'} fontWeight={'bold'} color={primaryFontColor} my={4}>The responsibilities include:</Text>
                                    <ul style={{ marginLeft: '20px', color: 'white' }}>
                                        <li>Design, Build, Testing and Maintain software for internal company used.</li>
                                        <li>Using proramming language PHP and MySQL</li>
                                        <li>Using internal company Model View Controller (MVC) framework engine call ingrid.</li>
                                    </ul>
                                </Box>
                                <Box>
                                </Box>
                            </Flex>
                        </Card>
                    </Center>

                    <Center>
                        <Card boxShadow='dark-lg' className='lighting-effect-white' w={'80%'} p={10} borderRadius={'xl'} mx={20} my={10} backgroundColor={primaryColor}>
                            <Flex alignItems={'center'}>
                                <Box>
                                    <Image src={'https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fexperiences%2Fnocode.png?alt=media&token=56103f52-ed60-4914-9c07-d856abb74bb0'} />
                                </Box>
                                <Box m={5}>
                                    <Heading fontSize={'3xl'} color={primaryFontColor}>Nocode Magician
                                        <Badge fontSize={'0.6em'} colorScheme='purple'>Front-End Developer</Badge>
                                    </Heading>
                                    <Text color={primaryFontColor} opacity={0.5} fontWeight={'bold'}>by Pipeline Marketing Technology</Text>
                                    <Text color={primaryFontColor} my={4}>March 2023 - December 2023</Text>
                                    <Text fontSize={'xl'} fontWeight={'bold'} color={primaryFontColor} my={4}>The responsibilities include:</Text>
                                    <ul style={{ marginLeft: '20px', color: 'white' }}>
                                        <li>Building React.js Web application that relevant with payment integrations</li>
                                        <li>Implement application that based on user login, OTP validation for user login</li>
                                        <li>Build Dashboard Web Application that represent all the data visualization</li>
                                        <li>Contribute with Wordpress application development with complex task using Oxygen plugin</li>
                                    </ul>
                                </Box>
                            </Flex>
                        </Card>
                    </Center>

                    <Center>
                        <Card boxShadow='dark-lg' className='lighting-effect-blue' w={'80%'} p={10} borderRadius={'xl'} mx={20} my={10} backgroundColor={primaryColor}>
                            <Flex alignItems={'center'}>
                                <Box>
                                    <Image src={'https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fexperiences%2Fbcf.png?alt=media&token=2f368ce3-05d6-498b-82a1-98e9ca8bf621'} />
                                </Box>
                                <Box m={5}>
                                    <Heading fontSize={'3xl'} color={primaryFontColor}>YAMALI TB
                                        <Badge fontSize={'0.6em'} colorScheme='purple'>IT & Database</Badge>
                                    </Heading>
                                    <Text color={primaryFontColor} opacity={0.5} fontWeight={'bold'}>by Bakrie Center Foundation</Text>
                                    <Text color={primaryFontColor} my={4}>March 2023 - December 2023</Text>
                                    <Text fontSize={'xl'} fontWeight={'bold'} color={primaryFontColor} my={4}>The responsibilities include:</Text>
                                    <ul style={{ marginLeft: '20px', color: 'white' }}>
                                        <li>Building the Interface of the Content Management Systen Dashboard of YAMALI TB Using React.js.</li>
                                        <li>Manage the content website of YAMALI TB, such as add some content, remove content, edit content and add, edit, delete Tubercolosis disease case for the visualization from the YAMALI TB Website</li>
                                        <li>Help Working with Data representation & Data management using MySql and PHP programming languages.</li>

                                    </ul>
                                </Box>
                            </Flex>
                        </Card>
                    </Center>

                    <Center>
                        <Card boxShadow='dark-lg' className='lighting-effect-red' w={'80%'} p={10} borderRadius={'xl'} mx={20} my={10} backgroundColor={primaryColor}>
                            <Flex alignItems={'center'}>
                                <Box>
                                    <Image src={'https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fexperiences%2Fbangkit.png?alt=media&token=7febc588-20e4-4f83-b7c2-eb7f61cd60b8'} />
                                </Box>
                                <Box m={5}>
                                    <Heading fontSize={'3xl'} color={primaryFontColor}>Bangkit Academy
                                        <Badge fontSize={'0.6em'} colorScheme='purple'>Machine Learning Path Cohort</Badge>
                                    </Heading>
                                    <Text color={primaryFontColor} opacity={0.5} fontWeight={'bold'}>by Google, GoTo, Traveloka</Text>
                                    <Text color={primaryFontColor} my={4}>March 2023 - December 2023</Text>
                                    <Text fontSize={'xl'} fontWeight={'bold'} color={primaryFontColor} my={4}>The responsibilities include:</Text>
                                    <ul style={{ marginLeft: '20px', color: 'white' }}>
                                        <li>Learn the key concepts and applications of AI to solve a wide range of ML problems with these specializations: Google IT Automation with Python, Google Data Analytics, Math for Machine Learning,
                                            Machine Learning Specialization, DeepLearning.AI
                                            TensorFlow Developer Professional Certificate, DeepLearning.AI Tensorflow Data and Deployment</li>
                                    </ul>
                                </Box>
                            </Flex>
                        </Card>
                    </Center>

                </Fragment>
            )
            }

            {/* // ** MOBILE SCREEN SIZE  */}
            {
                width < 768 && (
                    <Fragment>
                        <Heading pt={20} pb={10} textAlign={'center'} opacity={0.8} color={primaryFontColor}><span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{"<"}
                        </span>My Experience<span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{'>'}</span>
                        </Heading>
                        <Center>
                            <Card boxShadow='dark-lg' className='lighting-effect-white' w={'80%'} borderRadius={'xl'} mx={2} backgroundColor={primaryColor}>
                                <Center>
                                    <Image src={"https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fexperiences%2Fkurniawan.png?alt=media&token=bcba6959-f692-4ce7-a2b9-842a1df4516f"} />
                                </Center>
                                <Box p={4}>
                                    <Heading fontSize={'2xl'} color={primaryFontColor}>PT. Samamaju Prima
                                        <Badge fontSize={'0.6em'} colorScheme='purple'>Software Engineer</Badge>
                                    </Heading>
                                    <Text color={primaryFontColor} opacity={0.5} fontWeight={'bold'}>by Kurniawan Group</Text>
                                    <Text color={primaryFontColor} my={4}>November 2023 - Present</Text>
                                    <Text fontSize={'lg'} fontWeight={'bold'} color={primaryFontColor} my={4}>The responsibilities include:</Text>
                                    <ul style={{ marginLeft: '20px', color: 'white' }}>
                                        <li>Design, Build, Testing and Maintain software for internal company used.</li>
                                        <li>Using proramming language PHP and MySQL</li>
                                        <li>Using internal company Model View Controller (MVC) framework engine call ingrid.</li>
                                    </ul>
                                </Box>

                            </Card>
                        </Center>

                        <Center>
                            <Card boxShadow='dark-lg' className='lighting-effect-white' w={'80%'} borderRadius={'xl'} mx={2} my={10} backgroundColor={primaryColor}>

                                <Center>
                                    <Image src={'https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fexperiences%2Fnocode.png?alt=media&token=56103f52-ed60-4914-9c07-d856abb74bb0'} />
                                </Center>
                                <Box m={5}>
                                    <Heading fontSize={'2xl'} color={primaryFontColor}>Nocode Magician
                                        <Badge fontSize={'0.6em'} colorScheme='purple'>Front-End Developer</Badge>
                                    </Heading>
                                    <Text color={primaryFontColor} opacity={0.5} fontWeight={'bold'}>by Pipeline Marketing Technology</Text>
                                    <Text color={primaryFontColor} my={4}>March 2023 - December 2023</Text>
                                    <Text fontSize={'lg'} fontWeight={'bold'} color={primaryFontColor} my={4}>The responsibilities include:</Text>
                                    <ul style={{ marginLeft: '20px', color: 'white' }}>
                                        <li>Building React.js Web application that relevant with payment integrations</li>
                                        <li>Implement application that based on user login, OTP validation for user login</li>
                                        <li>Build Dashboard Web Application that represent all the data visualization</li>
                                        <li>Contribute with Wordpress application development with complex task using Oxygen plugin</li>
                                    </ul>
                                </Box>

                            </Card>
                        </Center>

                        <Center>
                            <Card boxShadow='dark-lg' className='lighting-effect-blue' w={'80%'} borderRadius={'xl'} mx={2} my={10} backgroundColor={primaryColor}>

                                <Center>
                                    <Image src={'https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fexperiences%2Fbcf.png?alt=media&token=2f368ce3-05d6-498b-82a1-98e9ca8bf621'} />
                                </Center>
                                <Box m={5}>
                                    <Heading fontSize={'2xl'} color={primaryFontColor}>YAMALI TB
                                        <Badge fontSize={'0.6em'} colorScheme='purple'>IT & Database</Badge>
                                    </Heading>
                                    <Text color={primaryFontColor} opacity={0.5} fontWeight={'bold'}>by Bakrie Center Foundation</Text>
                                    <Text color={primaryFontColor} my={4}>March 2023 - December 2023</Text>
                                    <Text fontSize={'lg'} fontWeight={'bold'} color={primaryFontColor} my={4}>The responsibilities include:</Text>
                                    <ul style={{ marginLeft: '20px', color: 'white' }}>
                                        <li>Building the Interface of the Content Management Systen Dashboard of YAMALI TB Using React.js.</li>
                                        <li>Manage the content website of YAMALI TB, such as add some content, remove content, edit content and add, edit, delete Tubercolosis disease case for the visualization from the YAMALI TB Website</li>
                                        <li>Help Working with Data representation & Data management using MySql and PHP programming languages.</li>

                                    </ul>
                                </Box>

                            </Card>
                        </Center>

                        <Center>
                            <Card py={2} boxShadow='dark-lg' className='lighting-effect-red' w={'80%'} borderRadius={'xl'} mx={2} my={10} backgroundColor={primaryColor}>

                                <Box>
                                    <Image src={'https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fexperiences%2Fbangkit.png?alt=media&token=7febc588-20e4-4f83-b7c2-eb7f61cd60b8'} />
                                </Box>
                                <Box mx={5}>
                                    <Heading fontSize={'2xl'} color={primaryFontColor}>Bangkit Academy
                                        <Badge fontSize={'0.6em'} colorScheme='purple'>Machine Learning Cohort</Badge>
                                    </Heading>
                                    <Text color={primaryFontColor} opacity={0.5} fontWeight={'bold'}>by Google, GoTo, Traveloka</Text>
                                    <Text color={primaryFontColor} my={4}>March 2023 - December 2023</Text>
                                    <Text fontSize={'lg'} fontWeight={'bold'} color={primaryFontColor} my={4}>The responsibilities include:</Text>
                                    <ul style={{ marginLeft: '20px', color: 'white' }}>
                                        <li>Learn the key concepts and applications of AI to solve a wide range of ML problems with these specializations: Google IT Automation with Python, Google Data Analytics, Math for Machine Learning,
                                            Machine Learning Specialization, DeepLearning.AI
                                            TensorFlow Developer Professional Certificate, DeepLearning.AI Tensorflow Data and Deployment</li>
                                    </ul>
                                </Box>

                            </Card>
                        </Center>

                    </Fragment>
                )
            }
        </Fragment >
    )
}

export default Experience