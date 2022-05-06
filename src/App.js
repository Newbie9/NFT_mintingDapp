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
import WeGiveBack from "./componenets/WeGiveBack"
import Artist from "./componenets/Artist"
import OwnedNFTS from "./componenets/ownedNFTS"
import Collection from "./componenets/Collection"
import WhatisSTC from "./componenets/WhatisSTC"
import Cover from "./componenets/Cover"
import nftGif from "./assets/images/nftGif.gif"
import yildizgif from "./assets/images/yildiz_gif4.gif"
import pawimage from "./assets/images/paw.gif"
import textureimg from "./assets/images/texture.png"
import cerceve1 from "./assets/images/cerceve1.png"
import stringsimg from "./assets/images/strings.PNG"
import yumurta from "./assets/images/Yumurta.png"
import mintplus from "./assets/images/mintplus.png"
import mintminus from "./assets/images/mintminus.png"
import { ScrollTo } from "react-scroll-to";

import { initializeApp } from "@firebase/app";
import { getAnalytics } from "@firebase/analytics";
import Roadmap from "./componenets/Roadmap";
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

  const [mintingOpen, setmintingOpen] = useState(true); 

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
    return
    if (data.paused) {
      return
    }
    if (_amount <= 0) {
      return;
    }
    setFeedback("Minting your Ket...");
    setClaimingNft(true);

    blockchain.smartContract.methods
      .mint(_amount)
      .send({
        //gasLimit: "985000",
        to: blockchain.smartContract._address, // Smart Contract Adress
        from: blockchain.account,
        value: (data.price * _amount).toString(),
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          "You now own a Ket."
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
      
      <Flex w='100%' bg='#819794' bgImage={textureimg} backgroundSize={!button ? '100% 100vh' : '100% 120vh'} backgroundPosition={'center top'} >
        <VStack w='100%' marginX={'0%'} minH='80%' alignItems='left' theme="theme"  backgroundSize={!button ? '80% 150vh' : '80% 120vh'} backgroundPosition={'center top'} backgroundRepeat='no-repeat'>
          <Navbar />
            <WhatisSTC/>
          
          <HStack pt='30' px='5vw' p='3vw' overflow='false' >
            <Box
              ml={!button ? '25%' : '0%'}
              w={!button ? '50%' : '100%'}
              px='24'
              pt='30'
              pb='30'
              borderRadius='150'
            >
              {Number(data.totalSupply) == 480 ? (
                <>
                  <Text style={{ textAlign: "center" }} fontSize='4xl'>
                    The sale has ended
                  </Text>
                </>
              ) : (
                <>
                  {blockchain.chain == 'Polygon' ? 
                    <Text fontSize='xl' color='#e9e5d6' style={{ textAlign: "center" }}>
                    1 Cat costs 80 MATIC
                    </Text>
                  :
                    <Text fontSize='xl' color='#e9e5d6' style={{ textAlign: "center" }}>
                    1 Cat costs 1.5 Avax
                    </Text>
                  }
                  
                  <Spacer />
                  <Text color='#e9e5d6' style={{ textAlign: "center" }}>
                    {feedback}
                  </Text>

                  <VStack spacing='10'>
                    <Text color='#e9e5d6' style={{ textAlign: "center", fontSize: 45, fontWeight: "bold" }} >
                      {data.totalSupply}/500 {"Cats Minted"}
                    </Text>
                    <HStack mt='5vh' spacing='10'>
                      <Flex w={!button ? '4vw' : '10vw'} h='6vh' bgImage={mintminus} backgroundSize={'100% 100%'} backgroundPosition={'center center'} alignItems={'auto'} backgroundRepeat='no-repeat'>
                        <Button
                          w='100%'
                          h='100%'
                          position={'center center'}
                          //backgroundImage={'./assets/images/paw.png'}
                          bg={'transparent'}
                          _hover={{ bg: "transparent" }}
                          color='white'
                          
                          onClick={() => {
                            if (amount > 1) {
                              setAmount(amount - 1)
                            }

                          }}>


                        </Button>
                      </Flex>

                      <Text color='#e9e5d6' fontSize={!button ? '4xl' : 'xl'}>
                        {amount}
                      </Text>
                      <Flex w={!button ? '4vw' : '10vw'} h='6vh' bgImage={mintplus} backgroundSize={'100% 100%'} backgroundPosition={'center center'} alignItems={'auto'} backgroundRepeat='no-repeat'>
                        <Button
                          w='100%'
                          h='100%'
                          position={'center center'}
                          //backgroundImage={'./assets/images/paw.png'}
                          bg={'transparent'}
                          _hover={{ bg: "transparent" }}
                          color='white'
                          
                          onClick={() => {
                            if (amount < 20) {
                              setAmount(amount + 1)
                            }
                          }}>


                        </Button>
                      </Flex>
                    </HStack>

                    <Flex w={!button ? '300px' : '25vw'} h={!button ? '300px' : '25vw'} bgImage={pawimage} backgroundSize={'100% 100%'} backgroundPosition={'center center'} alignItems={'auto'} backgroundRepeat='no-repeat'>
                      <Button
                        w='100%'
                        h='100%'
                        position={'center center'}
                        //backgroundImage={'./assets/images/paw.png'}
                        bg={'transparent'}
                        _hover={{ bg: "transparent" }}
                        color='white'
                        
                        onClick={(e) => {
                          e.preventDefault();
                          claimNFTs(amount);
                        }}

                      >
                      </Button>
                    </Flex>

                  </VStack>

                </>
              )}

            </Box>
          </HStack>
          <OwnedNFTS />
          <Roadmap/>
          <Collection/>
          <WeGiveBack />
          <Artist />
        </VStack>
      </Flex>
      <Footer />
    </div>
  )
}

export default App;
