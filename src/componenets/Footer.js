import React, { useState, useEffect } from 'react'
import AvalancheImage from '../assets/images/avalanche.png'
import { Box, HStack, VStack, Image, Button, Spacer, Text } from '@chakra-ui/react'
import { FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdAccountBalanceWallet } from "react-icons/md"
import { Icon } from '@chakra-ui/icons';


function Footer() {
    const [button, setButton] = useState(false);

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

            <HStack w='100%' bg='#43403f' h='20vh' pl='20vw' spacing='auto' pr='15vw'>
                

                <HStack >
                    <Box
                        align='center'
                        w='4vw'
                        fontSize='3xl'
                        fontWeight='semibold'
                        p='3'
                        borderRadius='xl'
                        _hover={{ borderRadius: 'xl', fontSize: '4xl' }}
                    >
                        <a href='https://twitter.com/sophiathecatNFT'>
                            <Icon h={button ? 5 : 8} as={FaTwitter} color='#9a6e5d' />
                        </a>
                    </Box>
                    <Box
                        align='center'
                        w='4vw'
                        fontSize='3xl'
                        fontWeight='semibold'
                        p='3'
                        borderRadius='xl'
                        _hover={{ borderRadius: 'xl', fontSize: '4xl' }}
                    >
                        <a href='https://www.instagram.com/sophiathecat16/'>
                            <Icon h={button ? 5 : 8} as={FaInstagram} color='#9a6e5d' />
                        </a>
                    </Box>
                    <Box
                        align='center'
                        w='4vw'
                        fontSize='3xl'
                        fontWeight='semibold'
                        p='3'
                        borderRadius='xl'
                        _hover={{ borderRadius: 'xl', fontSize: '4xl' }}
                    >
                        <a href='https://discord.gg/KTFYec4m'>
                            <Icon h={button ? 5 : 8} as={FaDiscord} color='#9a6e5d' />
                        </a>
                    </Box>
                </HStack>
            </HStack>

        </div>
    )
}

export default Footer
