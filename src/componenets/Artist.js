import React, { useState, useEffect } from 'react'
import { Flex, VStack, Box, HStack, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Image } from '@chakra-ui/react'
import cerceve1 from "../assets/images/cerceve1.png"
import nftGif from "../assets/images/nftGif.gif"
import sampleim1 from "../assets/images/sample_im1.png"
import sampleim2 from "../assets/images/sample_im2.png"
import sampleim3 from "../assets/images/sample_im3.png"
import sampleim4 from "../assets/images/sample_im4.png"
import { Icon } from '@chakra-ui/icons';
import { Fa500Px, FaInstagram, FaYoutube } from "react-icons/fa"
function Artist() {

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
                <HStack w='100%' pt='5vh' pb='5vh' alignItems='center' spacing={!button ? '7%' : '1%'} >
                    <VStack marginLeft={!button ? '15vw' : '5%'} alignItems='auto' w={!button ? '45vw' : '80%'} h='100%' pt='2%' bgImage={cerceve1} backgroundSize={'100% 100%'} backgroundPosition={'center center'} backgroundRepeat='no-repeat'>
                        <Text mx='auto' fontWeight="semibold" marginTop='10px' fontSize={!button ? '4xl' : 'l'} color='#52392E'>
                            Artist
                        </Text>
                        <Text paddingLeft={!button ? '10' : '4'} paddingRight={!button ? '10' : '4'} fontSize={!button ? 'xl' : 'small'} color='#52392E'>
                            Hi, it's me Saliha. I'm a freelance photographer/designer who has 8+ years of experience. I'm incredibly passionate about NFT photography and want to share my first NFT photo collection after this project.
                        </Text>
                        <Text fontWeight="bold" paddingLeft={!button ? '10' : '4'} paddingRight={!button ? '10' : '4'} fontSize={!button ? 'xl' : 'small'} color='#52392E'>
                            <strong> I would like to make discounts or give free NFTs to Sophia The Cat owners who supported me early in my journey as a photographer/designer.</strong>
                        </Text>
                        <Text paddingLeft={!button ? '10' : '4'} paddingRight={!button ? '10' : '4'} fontSize={!button ? 'xl' : 'small'} color='#52392E'>
                            I also love creating films for youtube where you can see the colorful side of the daily life.
                            You can check and support my work from my social medias :)
                        </Text>
                        <HStack paddingLeft={!button ? '10' : '4'} paddingTop={!button ? '5' : '2'} paddingBottom={!button ? '10' : '10'} spacing='4%'>
                            <a href='https://www.youtube.com/channel/UChOt7j8ExcuJIMWvQhtyR0g'>
                                <Icon w={!button ? '50px' : '30px'} h={!button ? '50px' : '30px'} as={FaYoutube} color='#9a6e5d' />
                            </a>
                            <a href='https://www.instagram.com/eksi.film/'>
                                <Icon w={!button ? '50px' : '30px'} h={!button ? '50px' : '30px'} as={FaInstagram} color='#9a6e5d' />
                            </a>
                            <a href='https://500px.com/p/salihauguz?view=photos'>
                                <Icon w={!button ? '50px' : '30px'} h={!button ? '50px' : '30px'} as={Fa500Px} color='#9a6e5d' />
                            </a>
                        </HStack>

                    </VStack>
                    <Box w='25%' h={!button ? '100%' : '70%'} >
                        <Image w={!button ? '100%' : '100%'} h='100%' src={sampleim3} />
                    </Box>
                </HStack>
                :
                <VStack w='100%' pt='5vh' pb='5vh' alignItems='center' spacing={!button ? '7%' : '5%'} >
                    <VStack  alignItems='auto' w={!button ? '45vw' : '80%'} h='100%' pt='2%' bgImage={cerceve1} backgroundSize={'100% 100%'} backgroundPosition={'center center'} backgroundRepeat='no-repeat'>
                        <Text mx='auto' fontWeight="semibold" marginTop='10px' fontSize={!button ? '4xl' : 'l'} color='#52392E'>
                            Artist
                        </Text>
                        <Text paddingLeft={!button ? '10' : '4'} paddingRight={!button ? '10' : '4'} fontSize={!button ? 'xl' : 'small'} color='#52392E'>
                            Hi, it's me Saliha. I'm a freelance photographer/designer who has 8+ years of experience. I'm incredibly passionate about NFT photography and want to share my first NFT photo collection after this project.
                        </Text>
                        <Text fontWeight="bold" paddingLeft={!button ? '10' : '4'} paddingRight={!button ? '10' : '4'} fontSize={!button ? 'xl' : 'small'} color='#52392E'>
                            <strong> I would like to make discounts or give free NFTs to Sophia The Cat owners who supported me early in my journey as a photographer/designer.</strong>
                        </Text>
                        <Text paddingLeft={!button ? '10' : '4'} paddingRight={!button ? '10' : '4'} fontSize={!button ? 'xl' : 'small'} color='#52392E'>
                            I also love creating films for youtube where you can see the colorful side of the daily life.
                            You can check and support my work from my social medias :)
                        </Text>
                        <HStack paddingLeft={!button ? '10' : '4'} paddingTop={!button ? '5' : '2'} paddingBottom={!button ? '10' : '10'} spacing='4%'>
                            <a href='https://www.youtube.com/channel/UChOt7j8ExcuJIMWvQhtyR0g'>
                                <Icon w={!button ? '50px' : '30px'} h={!button ? '50px' : '30px'} as={FaYoutube} color='#9a6e5d' />
                            </a>
                            <a href='https://www.instagram.com/eksi.film/'>
                                <Icon w={!button ? '50px' : '30px'} h={!button ? '50px' : '30px'} as={FaInstagram} color='#9a6e5d' />
                            </a>
                            <a href='https://500px.com/p/salihauguz?view=photos'>
                                <Icon w={!button ? '50px' : '30px'} h={!button ? '50px' : '30px'} as={Fa500Px} color='#9a6e5d' />
                            </a>
                        </HStack>

                    </VStack>
                    <Box w='40%' h= {(window.innerWidth*40/100).toString() }  >
                        <Image w={!button ? '100%' : '100%'} h='100%' src={sampleim3} />
                    </Box>
                </VStack>
            }
        </div>


    )
}

export default Artist

