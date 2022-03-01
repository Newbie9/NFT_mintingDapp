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
        <div>
            {!button ?
                <HStack w='100%' pt='3%' pb='3%' alignItems='center' spacing='5%' >
                    <VStack marginLeft={'15vw'} alignItems='auto' w={!button ? '35%' : '60%'} h={!button ? '65%' : '100%'} pt='2%' py='5%' bgImage={cerceve1} backgroundSize={'100% 100%'} backgroundPosition={'center center'} backgroundRepeat='no-repeat'>
                        <Text mx='auto' fontWeight="semibold" fontSize={!button ? '4xl' : 'l'} color='#52392E'>
                            What is Sophia the Cat
                        </Text>
                        <Text paddingLeft={'10'} paddingRight={'10'} marginLeft={'10'} fontSize={!button ? 'xl' : 'small'} color='#52392E'>
                            Sophia the Cat is a NFT collection of uniquely designed elegant kats.The combination of sketchy and edgy looks will give you a new aspect for
                            NFT
                        </Text>
                    </VStack>
                    <Box w='30%' h='100%'>
                        <Image w='100%' h='100%' paddingBottom={'15%'} src={nftGif} />
                    </Box>
                </HStack>
                :
                <VStack w='100%' pt='3%'  alignItems='center' spacing='5%' >
                    <VStack  alignItems='auto' w={!button ? '35%' : '60%'} h={!button ? '65%' : '100%'} pt='2%' py='5%' bgImage={cerceve1} backgroundSize={'100% 100%'} backgroundPosition={'center center'} backgroundRepeat='no-repeat'>
                        <Text mx='auto' fontWeight="semibold" fontSize={!button ? '4xl' : 'l'} color='#52392E'>
                            What is Sophia the Cat
                        </Text>
                        <Text paddingLeft={'10'} paddingRight={'10'} marginLeft={'10'} fontSize={!button ? 'xl' : 'small'} color='#52392E'>
                            Sophia the Cat is a NFT collection of uniquely designed elegant kats.The combination of sketchy and edgy looks will give you a new aspect for
                            NFT
                        </Text>
                    </VStack>
                    <Box w='40%' h='100%'>
                        <Image w='100%' h='100%' paddingBottom={'10%'} src={nftGif} />
                    </Box>
                </VStack>
            }

        </div>

    )
}

export default Roadmap

