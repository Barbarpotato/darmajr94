import { Fragment, useState } from 'react'
import { Heading, Flex, Box, Input, Textarea, Button, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { primaryColor, primaryFontColor, ternaryColor } from '../utils/globalTheme'
import useWindowSize from '../hooks/useWindowSize'

function Contact() {

    const OverlaySendMessage = () => (
        <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropInvert='80%'
            backdropBlur='2px'
        />
    )

    const { width } = useWindowSize()

    const [contactMessage, setContactMessage] = useState({
        name: '',
        email: '',
        message: ''
    })

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [overlay, setOverlay] = useState(<OverlaySendMessage />)

    const handleSendMessage = () => {
        
    }

    return (
        <Fragment>
            {width >= 768 && (
                <Fragment>
                    <Heading id='contact' pt={20} pb={10} textAlign={'center'} opacity={0.8} color={primaryFontColor}><span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{"<"}
                    </span>Contact Me<span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{'>'}</span>
                    </Heading>
                    <Flex mx={1} padding={5} justifyContent={'center'}>
                        <Flex mx={10} p={4} className='lighting-effect-pink' borderRadius={'2xl'} alignItems={'center'} backgroundColor={primaryColor}>
                            <iframe style={{ filter: 'invert(100%)' }}
                                className="rounded-2xl shadow-xl mb-12" title="Address"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127166.45478409877!2d119.33258672746267!3d-5.111485701012477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee329d96c4671%3A0x3030bfbcaf770b0!2sMakassar%2C%20Makassar%20City%2C%20South%20Sulawesi!5e0!3m2!1sen!2sid!4v1670937256226!5m2!1sen!2sid"
                                width={width > 1020 ? '500px' : '400px'}
                                height={width >= 1280 ? 500 : 300}
                                loading="lazy"></iframe>
                            <form>
                                <Input onChange={(e) => setContactMessage({ ...contactMessage, name: e.target.value })} color={primaryFontColor}
                                    borderRadius={'2xl'} my={5} mx={10} w={'80%'} size={'lg'} borderWidth={3} placeholder='Name' colorScheme='purple' borderColor={"#536189"} focusBorderColor={ternaryColor} />
                                <Input onChange={(e) => setContactMessage({ ...contactMessage, email: e.target.value })} color={primaryFontColor}
                                    borderRadius={'2xl'} my={5} mx={10} w={'80%'} size={'lg'} borderWidth={3} placeholder='Email' colorScheme='purple' borderColor={"#536189"} focusBorderColor={ternaryColor} />
                                <Textarea onChange={(e) => setContactMessage({ ...contactMessage, message: e.target.value })} color={primaryFontColor}
                                    resize={'none'} borderRadius={'2xl'} my={5} mx={10} w={'80%'} size={'lg'} borderWidth={3} placeholder='Message' colorScheme='purple' borderColor={"#536189"} focusBorderColor={ternaryColor} ></Textarea>
                                <Button onClick={handleSendMessage} my={5} mx={10} fontWeight={'bold'} colorScheme='purple' color={'black'}>Send Message</Button>
                            </form>
                        </Flex>
                    </Flex>
                </Fragment>
            )}
            {width < 768 && (
                <Fragment>
                    <Heading id='contact' pt={20} pb={10} textAlign={'center'} opacity={0.8} color={primaryFontColor}><span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{"<"}
                    </span>Contact Me<span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{'>'}</span>
                    </Heading>
                    <Flex mx={1} px={5} pb={20} justifyContent={'center'}>
                        <Box p={4} className='lighting-effect-pink' borderRadius={'2xl'} alignItems={'center'} backgroundColor={primaryColor}>
                            <form>
                                <Input color={primaryFontColor} borderRadius={'2xl'} my={5} mx={2} size={'lg'} borderWidth={3} width={'90%'} placeholder='Name' colorScheme='purple' borderColor={"#536189"} focusBorderColor={ternaryColor} />
                                <Input color={primaryFontColor} borderRadius={'2xl'} my={5} mx={2} size={'lg'} borderWidth={3} width={'90%'} placeholder='Email' colorScheme='purple' borderColor={"#536189"} focusBorderColor={ternaryColor} />
                                <Textarea color={primaryFontColor} resize={'none'} borderRadius={'2xl'} my={5} mx={2} width={'90%'} size={'lg'} borderWidth={3} placeholder='Message' colorScheme='purple' borderColor={"#536189"} focusBorderColor={ternaryColor} ></Textarea>
                                <Button my={5} mx={2} fontWeight={'bold'} colorScheme='purple' color={'black'}>Send Message</Button>
                            </form>
                        </Box>
                    </Flex>
                </Fragment>
            )}
        </Fragment >
    )
}

export default Contact