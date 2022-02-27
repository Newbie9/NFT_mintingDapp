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
        <HStack w='100%' h='50vh' pt='5vh' pb='5vh' alignItems='center' spacing={!button ? '10%' : '1%'} >
            <VStack marginLeft={!button ? '15vw' : '5%'} alignItems='auto' w={!button ? '45vw' : '80%'} h='100%' pt='2%' bgImage={cerceve1} backgroundSize={'100% 100%'} backgroundPosition={'center center'} backgroundRepeat='no-repeat'>
                <Text mx='auto' fontWeight="semibold" marginTop='10px' fontSize={!button ? '4xl' : 'l'} color='#52392E'>
                    Roadmap
                </Text>
                <Text paddingLeft={!button ? '10' : '4'} paddingRight={!button ? '10' : '4'} fontSize={!button ? 'xl' : 'small'} color='#52392E'>
                    %25 Minted => We release a limited edition NFT airdropped to 5 lucky holders                    
                </Text>
                <Text paddingLeft={!button ? '10' : '4'} paddingRight={!button ? '10' : '4'} fontSize={!button ? 'xl' : 'small'} color='#52392E'>
                    %50 Minted => We release a limited edition NFT airdropped to 5 lucky holders                    
                </Text>
                <Text paddingLeft={!button ? '10' : '4'} paddingRight={!button ? '10' : '4'} fontSize={!button ? 'xl' : 'small'} color='#52392E'>
                    %75 Minted => We release a limited edition NFT airdropped to 5 lucky holders                    
                </Text>
                <Text paddingLeft={!button ? '10' : '4'} paddingRight={!button ? '10' : '4'} fontSize={!button ? 'xl' : 'small'} color='#52392E'>
                    %100 Minted => We release a limited edition NFT airdropped to 5 lucky holders                    
                </Text>
            </VStack>
            <Box  w='30%' h={!button ? '120%' : '70%'} >
                <Image w={!button ? '70%' : '100%'} h='100%' src={sampleim1} />
            </Box>
        </HStack>
    )
}

export default Roadmap

