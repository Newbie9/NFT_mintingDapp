import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import { Box, Container, Text, Spacer, VStack, HStack, Button, Center, Flex, Image, SimpleGrid, Divider } from "@chakra-ui/react";
import Countdown from "react-countdown";

import { useToast } from "@chakra-ui/react"
import { send } from 'emailjs-com';
import Navbar from "./componenets/Navbar";
import Footer from "./componenets/Footer"
import FAQ from "./componenets/FAQ"
import OwnedNFTS from "./componenets/ownedNFTS"
import Cover from "./componenets/Cover"
import nftGif from "./assets/images/nftGif.gif"
import yildizgif from "./assets/images/yildiz_gif4.gif"
import pawimage from "./assets/images/paw.png"
import textureimg from "./assets/images/texture.png"
import cerceve1 from "./assets/images/cerceve1.png"
import stringsimg from "./assets/images/strings.PNG"
import yumurta from "./assets/images/Yumurta.png"
import { ScrollTo } from "react-scroll-to";

import { initializeApp } from "@firebase/app";
import { getAnalytics } from "@firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [feedback, setFeedback] = useState("");
  const [claimingNft, setClaimingNft] = useState(false);
  const [amount, setAmount] = useState(1);
  
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);
  
  const [LoadingMostMinters, setLoadingMostMinters] = useState(false);

  const [mintingOpen, setmintingOpen] = useState(false);
  const firebaseConfig = {
    apiKey: "AIzaSyA_J0kX2L1t5pSrX082D67B9UYyPDKSmvo",
    authDomain: "avaxfoxes-deneme.firebaseapp.com",
    projectId: "avaxfoxes-deneme",
    storageBucket: "avaxfoxes-deneme.appspot.com",
    messagingSenderId: "982796810661",
    appId: "1:982796810661:web:4c0b37281ed9b3446b104c",
    measurementId: "G-KB4G6YE0CS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const toast = useToast()
  var triedConnect = false;


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)
  const [mostMinters, setmostMinters] = useState([]);

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
  var baseURI = "";

  const claimNFTs = (_amount) => {
    if (!mintingOpen) {
      return
    }
    if (_amount <= 0) {
      return;
    }
    setFeedback("Minting your Avax Fox...");
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(_amount)
      .send({
        //gasLimit: "985000",
        to: "0x9E073C3613cF70ebB666431f27cC2CD97b9F0ddB", // Smart Contract Adress
        from: blockchain.account,
        value: blockchain.web3.utils.toWei((1 * _amount).toString(), "ether"),
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          "You now own a AvaxFox."
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };


  

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));

    }
  };
  useEffect(() => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      getData();
    } else {
      if (!triedConnect) {
        triedConnect = true;
        dispatch(connect())
      }
    }
  }, [blockchain.smartContract, blockchain.account]);

  

  return (
    <div>
      
      {button ?
        <div>
        </div>


        :


        <div>
          <HStack w='100%'  alignItems='top' minH='80vh' paddingX={'0px'} spacing='0px'>
            
            <VStack w='100%'  marginX={'0%'} spacing={'0'} spacingX={'0'}>
            <Navbar />
            <Flex w='100%' bg='#43403f' bgImage={textureimg} backgroundSize={'80% 100%'} backgroundPosition={'center center'} backgroundRepeat='no-repeat'>
            <VStack w='100%'  marginX={'0%'} minH='80vh' alignItems='left' theme="theme" bgImage={stringsimg} backgroundSize={'80% 100%'} backgroundPosition={'center center'} backgroundRepeat='no-repeat'>

              <HStack w='100%'  pt='5vh' pb='5vh' alignItems='center' >
                <VStack marginLeft={'15vw'}  w='35vw' h='40vh' pt='2%' py='5%' bgImage={cerceve1} backgroundSize={'100% 100%'} backgroundPosition={'center center'} backgroundRepeat='no-repeat'>
                  <Text mt='10px' mx='auto' fontWeight="semibold" fontSize='4xl' color='#52392E'>
                    What is Sophia the Cat
                  </Text>
                  <Text margin='1em' fontSize='xl' color='#52392E'>
                    Sophia the Cat is an NFT collection of uniquely designed elegant kats.                    
                  </Text>
                  <Text mx='auto' fontSize='xl' color='#52392E'>                    
                    The combination of sketchy and edgy looks will give you a new aspect for
                  </Text>
                  <Text mx='auto' fontSize='2xl' color='#52392E'>                    
                     NFT
                  </Text>
                </VStack>
                <Flex w='25vw' h='50vh' alignItems={'center'} bgImage={yumurta} backgroundSize={'100% 100%'} backgroundPosition={'center center'} backgroundRepeat='no-repeat'  marginEnd='300px'> 
                  <Image  marginLeft={'1vw'} src={nftGif} objectFit="contain" pos = {'center', 'center'}/>
                </Flex>
              </HStack>

              <HStack pt='30' px='5vw' p='3vw' overflow='false' >
                <Box
                  ml='25%'
                  w='50%'
                  px='24'
                  pt='30'
                  pb='30'
                  borderRadius='150'
                >
                  {Number(data.totalSupply) == 500 ? (
                    <>
                      <Text style={{ textAlign: "center" }} fontSize='4xl'>
                        The sale has ended
                      </Text>
                    </>
                  ) : (
                    <>
                      <Text fontSize='xl' color = '#9a6e5d' style={{ textAlign: "center" }}>
                        1 Cat costs 1 Avax.
                      </Text>
                      <Spacer />
                      <Text color = '#9a6e5d' style={{ textAlign: "center" }}>
                        {feedback}
                      </Text>

                      <VStack spacing='10'>
                        <Text color = '#9a6e5d' style={{ textAlign: "center", fontSize: 45, fontWeight: "bold" }} >
                          {data.totalSupply}/500 {"Cats Minted"}
                        </Text>
                        <HStack mt='5vh' spacing='10'>
                          <Button borderColor="red.500"
                            boxShadow='lg'
                            borderRadius='150'
                            variant="outline"
                            textColor='9a6e5d'
                            onClick={() => {
                              if (amount > 1) {
                                setAmount(amount - 1)
                              }

                            }}>
                            -
                          </Button>
                          <Text color = '#9a6e5d'>
                            {amount}
                          </Text>
                          <Button
                            borderColor='green'
                            borderRadius='20'
                            boxShadow='lg'
                            variant="outline"
                            textColor='9a6e5d'
                            onClick={() => {
                              if (amount < 20) {
                                setAmount(amount + 1)
                              }
                            }}>
                            +
                          </Button>
                        </HStack>
                        <HStack > 
                            <Flex w='16vw' h='20vh' bgImage={pawimage} backgroundSize={'14vw 24vh'} backgroundPosition={'center center'} alignItems={'auto'}>
                              <Button                                
                                w='20vw'
                                h='20vh'                              
                                position={'center center'}                              
                                //backgroundImage={'./assets/images/paw.png'}
                                bg={'transparent'}
                                _hover={{ bg: "transparent" }}
                                color='white'
                                mx-auto
                                onClick={(e) => {
                                  e.preventDefault();
                                  claimNFTs(amount);
                                }}

                              >
                              </Button>
                            </Flex>
                        </HStack>                        
                      </VStack>

                    </>
                  )}

                </Box>
              </HStack>
              

                               
              <OwnedNFTS/>                 
              <FAQ/>

            </VStack>
            </Flex>
            </VStack>
            
          </HStack>

        </div>
      }
      <Footer />
    </div>
  );
}

export default App;
