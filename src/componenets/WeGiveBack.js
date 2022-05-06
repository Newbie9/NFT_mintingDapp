import React, { useState, useEffect } from 'react'
import { Flex, VStack, Box, HStack, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Image } from '@chakra-ui/react'
import cerceve1 from "../assets/images/cerceve1.png"
import nftGif from "../assets/images/nftGif.gif"
import sampleim1 from "../assets/images/sample_im1.png"
import sampleim2 from "../assets/images/sample_im2.png"
import sampleim3 from "../assets/images/sample_im3.png"
import sampleim4 from "../assets/images/sample_im4.png"
function WeGiveBack() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(false);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)



    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(true);
        } else {
            setButton(false);
        }
    };


    useEffect(() => {
        showButton();
    }, []);



    window.addEventListener('resize', showButton);

    return (
        <div>
            {!button ?
                <HStack w='100%' minH='53vh' pt='5vh' pb='5vh' alignItems='center' spacing={!button ? '7%' : '1%'} >
                    <Box marginLeft={!button ? '15vw' : '5%'} w='25%' h={!button ? '120%' : '70%'} >
                        <Image w={!button ? '100%' : '100%'} h='100%' src={sampleim2} />
                    </Box>
                    <VStack borderRadius='30' alignItems='auto' w={!button ? '45vw' : '80%'} minH='100%' pt='2%' bgImage={cerceve1} backgroundSize={'100% 100%'} backgroundPosition={'center center'} backgroundRepeat='no-repeat'>
                        <Text mx='auto' fontWeight="semibold" marginTop='10px' fontSize={!button ? '4xl' : 'l'} color='#52392E'>
                            Charity
                        </Text>
                        <Text  alignSelf={'center'} paddingLeft={!button ? '10' : '4'} paddingRight={!button ? '10' : '4'} paddingBottom='10' fontSize={!button ? 'xl' : 'small'} color='#52392E'>
                            10% of all primary sales will go to two charities: Yeryüzü Doktorları, a charity that dedicates itself to reach the people in need who are unable to access health services and make them
                            hold on to life and the Malala Fund, a non-profit organization that champions every girl’s right to 12 years of free, safe, quality education. All donations will be shared on social media to keep ourselves accountable.
                        </Text>
                    </VStack>

                </HStack>
                :
                <VStack w='100%' minH='70vh' pb='5vh' pt='5vh' alignItems='center' spacing={!button ? '7%' : '5%'} >
                    
                    <VStack borderRadius='30' alignItems='auto' w={!button ? '45vw' : '80%'} h='100%' pt='2%' bgImage={cerceve1} backgroundSize={'100% 100%'} backgroundPosition={'center center'} backgroundRepeat='no-repeat'>
                        <Text mx='auto' fontWeight="semibold" marginTop='10px' fontSize={!button ? '4xl' : 'l'} color='#52392E'>
                            Charity
                        </Text>
                        <Text paddingBottom={!button ? '10' : '6'} alignSelf={'center'} paddingLeft={!button ? '10' : '6'} paddingRight={!button ? '10' : '4'} fontSize={!button ? 'xl' : 'small'} color='#52392E'>
                            10% of all primary sales will go to two charities: Yeryüzü Doktorları, a charity that dedicates itself to reach the people in need who are unable to access health services and make them
                            hold on to life and the Malala Fund, a non-profit organization that champions every girl’s right to 12 years of free, safe, quality education. All donations will be shared on social media to keep ourselves accountable.
                        </Text>
                    </VStack>
                    <Box marginLeft={!button ? '15vw' : '5%'} w='40%' h={!button ? '120%' : '70%'}  >
                        <Image w={!button ? '100%' : '100%'} h='100%' src={sampleim2} />
                    </Box>

                </VStack>
            }
        </div>

    )
}

export default WeGiveBack

