import React, {useState, useEffect}  from 'react'
import {Box, HStack, Image, Button, Spacer, Text} from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
    IconButton
  } from "@chakra-ui/react"
import { useToast } from "@chakra-ui/react"
import Logo from "../assets/images/website_logo.png"
import {FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa"
import {GiHamburgerMenu} from "react-icons/gi"
import {MdAccountBalanceWallet, MdConstruction} from "react-icons/md"
import {IoIosConstruct} from "react-icons/io"
import { Icon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton
  } from "@chakra-ui/react"




function Navbar() {
    const data = useSelector((state) => state.data);
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(false);
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const toast = useToast()
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

    useEffect(() => {
        if (blockchain.errorMsg == ""){}
        else{
            toast({
                description: blockchain.errorMsg,
                status: "error",
                duration: 9000,
                isClosable: true,
            })}
        
    }, [blockchain.errorMsg]);

    useEffect(() => {
        if (blockchain.account == null){}
        else{
            toast({
                description: "Connected Successfully",
                status: "success",
                duration: 9000,
                isClosable: true,
            })}
        
    }, [blockchain.account]);

    window.addEventListener('resize', showButton);

    return (
        <div>
            
                <HStack
                    w='100%'
                    h='20vh'
                    spacing='auto'
                    pr='5vw'
                    bg='#43403f'
                    marginX={'0'}
                >  
                    <a href="https://sophiathecat.co/" >          
                    <Image
                        src={Logo}
                        w={!button ? '25vw' : '45vw'}
                        ml={!button ? '35vw' : '2vw'}               
                        h='20vh'                        
                    />
                    </a>
                    
                    <HStack>
                        
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
                        <a href='https://discord.gg/x2DqFMfV8Z'>
                            <Icon h={button ? 5 : 8} as={FaDiscord} color='#9a6e5d' />
                        </a>
                    </Box>
                        {blockchain.account === "" ||   blockchain.smartContract === null ? (
                        <Box paddingLeft={!button ? '0vw' : '12vw'}>
                            <Button
                                p='3'                                
                                w={!button ? '10vw' : '10vw'}
                                bg='transparent'
                                borderRadius='150'
                                boxShadow='5'
                                color='#9a6e5d'
                                //mx-auto
                                //bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
                                //variant="outline"
                                _hover={{ bg: "blackAlpha.400" }}
                                onClick={(e) => {
                                e.preventDefault();
                                dispatch(connect());
                                //getData();
                                }}
                                leftIcon=  {<Icon as={MdAccountBalanceWallet} color='#9a6e5d' w={button ? 5 : 8} h={button ? 5 : 8}/>}
                            >
                                
                                CONNECT
                            </Button>   
                        </Box>):(

                            null
                        

                        )}          
                    </HStack>
                         
                </HStack>
                
            
                       
        </div>
    )
}

export default Navbar
