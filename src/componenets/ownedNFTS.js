import React, {useState, useEffect}  from 'react'
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";

import { fetchData } from "../redux/data/dataActions";
import {Flex, VStack, Box, HStack, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, SimpleGrid, Spacer, Image} from '@chakra-ui/react'
function OwnedNFTS() {
    
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(false);   
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [viewNFTs, setviewNFTs] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)
    const [NFTS, setNFTS] = useState([]);
    const [LoadingNFTS, setLoadingNFTS] = useState(false);
    const dispatch = useDispatch();

    const fetchMetatDataForNFTS = () => {
      
        if (blockchain.account !== "" && blockchain.smartContract !== null && !LoadingNFTS && !data.loading) {
          setLoadingNFTS(true);
          setNFTS([]);
          for (let i = 0; i < data.tokensOfUser.length; i++) {
            let nft = data.tokensOfUser[i];
            blockchain.smartContract.methods.tokenURI(nft).call()
              .then((uri) => fetch(uri.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/"), {crossDomain:true} ))
              .then((response) => response.json())
              .then((metaData) => {                
                setNFTS((prevState) => [
                  ...prevState,
                  { id: nft, metaData: metaData },
                ]);
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }
    
      };

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(true);
        } else {
          setButton(false);
        }
      };

      const getData = () => {
        
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
          console.log(blockchain.smartContract)
          dispatch(fetchData(blockchain.account));
    
        }
      };
    

    useEffect(() => {
        showButton();
    }, []);

    useEffect(() => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
          fetchMetatDataForNFTS();
        }
      }, [data]);

    useEffect(() => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
          getData();
        }
      }, [blockchain.smartContract, blockchain.account]);

    window.addEventListener('resize', showButton);

    return (
        <div>
        {blockchain.account !== "" &&
                blockchain.smartContract !== null && viewNFTs && data.tokensOfUser.length != 0 ? (
                <VStack pt='30'  pb='5%' px='3vw' spacing='3%'>
                  <Text color='#9a6e5d' style={{ textAlign: "center", fontSize: 35, fontWeight: "bold" }} >
                    {"Your Kets"}
                  </Text>                  
                  <SimpleGrid columns={!button ? 4 : 1} spacingX="40px" spacingY="20px">
                    {data.loading ? (
                      <>
                        <Spacer />
                        <Text style={{ textAlign: "center" }}>
                          loading...
                        </Text>
                      </>
                    ) : (
                      NFTS.map((nft, index) => {

                        return (

                          <VStack align='center' key={index} w={!button ? '20vw' : '80vw'} bg='whiteAlpha.600' py='2vh' px='1vw' borderRadius='xl' boxShadow='xl' spacing='3%'>
                            <Text align='center' fontWeight='semiBold' fontSize='xl'> {nft.metaData.name} </Text>
                            <Image
                              alt={nft.metaData.name}
                              src={nft.metaData.image.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/")}
                              boxSize="300px"
                              objectFit="cover"
                              pos={'center', 'center'}
                            //width={150}
                            />
                            <Text style={{ textAlign: "center" }}>  <strong>{nft.metaData.attributes[0].trait_type} </strong>: {nft.metaData.attributes[0].value} </Text>
                            <Text style={{ textAlign: "center" }}>  <strong>{nft.metaData.attributes[1].trait_type} </strong>: {nft.metaData.attributes[1].value} </Text>
                            <Text style={{ textAlign: "center" }}>  <strong>{nft.metaData.attributes[2].trait_type} </strong>: {nft.metaData.attributes[2].value} </Text>
                            <Text style={{ textAlign: "center" }}>  <strong>{nft.metaData.attributes[3].trait_type} </strong>: {nft.metaData.attributes[3].value} </Text>
                            <Text style={{ textAlign: "center" }}>  <strong>{nft.metaData.attributes[4].trait_type} </strong>: {nft.metaData.attributes[4].value} </Text>
                            <Text style={{ textAlign: "center" }}>  <strong>{nft.metaData.attributes[5].trait_type} </strong>: {nft.metaData.attributes[5].value} </Text>
                            <Text style={{ textAlign: "center" }}>  <strong>{nft.metaData.attributes[6].trait_type} </strong>: {nft.metaData.attributes[6].value} </Text>

                          </VStack>

                        );

                      })
                    )}
                  </SimpleGrid>
                </VStack>
              ) : (null)} 
              </div>           
    )
}

export default OwnedNFTS

