import React, { useState, useEffect } from 'react'
import { Flex, VStack, Box, HStack, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Image } from '@chakra-ui/react'
import cerceve1 from "../assets/images/cerceve1.png"
import nftGif from "../assets/images/nftGif.gif"
import sampleim1 from "../assets/images/sample_im1.png"
import sampleim2 from "../assets/images/sample_im2.png"
import sampleim3 from "../assets/images/sample_im3.png"
import sampleim4 from "../assets/images/sample_im4.png"
function Roadmap() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(false);
    const [innerWidth, setinnerWidth] = useState(0);


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
        setinnerWidth(window.innerWidth)
    }, []);



    window.addEventListener('resize', showButton);

    return (
        <div>
            {!button ?
                <HStack w='100%' pt='5vh' minH='43vh' pb='5vh' alignItems='center' spacing={!button ? '7%' : '1%'} >
                    <VStack borderRadius='30' marginLeft='15vw' alignItems='auto' w='45vw' minH='33vh' pt='2%' bgImage={cerceve1} backgroundSize={'100% 100%'} backgroundPosition={'center center'} backgroundRepeat='no-repeat'>
                        <Text mx='auto' fontWeight="semibold" marginTop='10px' fontSize={!button ? '4xl' : 'l'} color='#52392E'>
                            Roadmap
                        </Text>
                        <Text alignSelf={'center'} paddingLeft={!button ? '10' : '6'} paddingRight={!button ? '10' : '4'} fontSize={!button ? 'xl' : 'small'} color='#52392E'>
                    %25 Minted => We airdrop 1 AVAX to 3 lucky holders
                        </Text>
                        <Text alignSelf={'center'} paddingLeft={!button ? '10' : '6'} paddingRight={!button ? '10' : '4'} fontSize={!button ? 'xl' : 'small'} color='#52392E'>
                    %50 Minted => We airdrop 2 AVAX to 3 lucky holders
                        </Text>
                        <Text alignSelf={'center'} paddingLeft={!button ? '10' : '6'} paddingRight={!button ? '10' : '4'} fontSize={!button ? 'xl' : 'small'} color='#52392E'>
                    %75 Minted => We airdrop 3 AVAX to 3 lucky holders
                        </Text>
                        <Text alignSelf={'center'} paddingLeft={!button ? '10' : '6'} paddingRight={!button ? '10' : '4'} paddingBottom={!button ? '10' : '4'} fontSize={!button ? 'xl' : 'small'} color='#52392E'>
                    %100 Minted => We airdrop 4 AVAX to 3 lucky holders
                        </Text>
                    </VStack>
                    <Box  w='25%' h={!button ? '120%' : '70%'} >
                        <Image w={!button ? '100%' : '100%'} h='100%' src={sampleim1} position={'center center'} />
                    </Box>
                </HStack>
                :
                <VStack w='100%' minH='70vh' pt='5vh' pb='5vh' alignItems='center' spacing={!button ? '7%' : '5%'} >
                    <VStack borderRadius='30' alignItems='auto' w={!button ? '45vw' : '80%'} h='100%' pt='2%' bgImage={cerceve1} backgroundSize={'100% 100%'} backgroundPosition={'center center'} backgroundRepeat='no-repeat'>
                        <Text mx='auto' fontWeight="semibold" marginTop='10px' fontSize={!button ? '4xl' : 'l'} color='#52392E'>
                            Roadmap
                        </Text>
                        <Text alignSelf={'center'} paddingLeft={!button ? '10' : '6'}  paddingRight={!button ? '10' : '6'} fontSize={!button ? 'xl' : 'small'} color='#52392E'>
                %25 Minted => We airdrop 1 AVAX to 3 lucky holders
                        </Text>
                        <Text alignSelf={'center'} paddingLeft={!button ? '10' : '6'} paddingRight={!button ? '10' : '6'} fontSize={!button ? 'xl' : 'small'} color='#52392E'>
                %50 Minted => We airdrop 2 AVAX to 3 lucky holders
                        </Text>
                        <Text alignSelf={'center'} paddingLeft={!button ? '10' : '6'} paddingRight={!button ? '10' : '6'} fontSize={!button ? 'xl' : 'small'} color='#52392E'>
                %75 Minted => We airdrop 3 AVAX to 3 lucky holders
                        </Text>
                        <Text alignSelf={'center'} paddingLeft={!button ? '10' : '6'} paddingRight={!button ? '10' : '6'} paddingBottom={!button ? '10' : '6'} fontSize={!button ? 'xl' : 'small'} color='#52392E'>
                %100 Minted => We airdrop 4 AVAX to 3 lucky holders
                        </Text>
                    </VStack>
                    <Box marginTop={'10'} w='40%'  h= '70%' >
                        <Image w={!button ? '100%' : '100%'} h='100%' src={sampleim1} position={'center center'} />
                    </Box>
                </VStack>
            }
        </div>

    )
}

export default Roadmap

