import React, {useState, useEffect}  from 'react'
import { useDispatch, useSelector } from "react-redux";
import {Flex, VStack, Box, HStack, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, SimpleGrid, Spacer, Image} from '@chakra-ui/react'
function OwnedNFTS() {
    
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(false);   
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [viewNFTs, setviewNFTs] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)
    const [NFTS, setNFTS] = useState([]);
    const [LoadingNFTS, setLoadingNFTS] = useState(false);

    const fetchMetatDataForNFTS = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null && LoadingNFTS) {
          setNFTS([]);
          //blockchain.smartContract.methods.mintsOfOwner(blockchain.account).call().then(console.log)
          //blockchain.smartContract.methods.getMostMinters().call().then(console.log)
    
          for (let i = 0; i < data.tokensOfUser.length; i++) {
            let nft = data.tokensOfUser[i];
            blockchain.smartContract.methods.tokenURI(nft).call()
              .then((uri) => fetch(uri.replace("ipfs://", "https://ipfs.io/ipfs/")))
              .then((response) => response.json())
              .then((metaData) => {
                setNFTS((prevState) => [
                  ...prevState,
                  { id: nft, metaData: metaData },
                ]);
              }).then(function () {
                if (i == data.tokensOfUser.length - 1) {
                  setLoadingNFTS(false)
                  setNFTS((prevState) =>
                    prevState.sort((a, b) => a.id < b.id ? 1 : -1)
                  )
                }
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
    

    useEffect(() => {
        showButton();
    }, []);
    useEffect(() => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
          fetchMetatDataForNFTS();
         
        }
      }, [data]);
    

    window.addEventListener('resize', showButton);

    return (
        <div>
        {blockchain.account !== "" &&
                blockchain.smartContract !== null && viewNFTs ? (
                <VStack pt='30' bgGradient={'linear(to-b, transparent, blackAlpha.600)'} pb='5%' px='3vw' spacing='3%'>

                  <Text style={{ textAlign: "center", fontSize: 35, fontWeight: "bold" }} >
                    {"Your Avax Foxes"}
                  </Text>
                  {data.tokensOfUser.length == 0 ? (
                    <Text style={{ textAlign: "center", fontSize: 25, fontWeight: "bold" }} >
                      {"You don't have any Avax Foxes"}
                    </Text>
                  ) : (null)}
                  <SimpleGrid columns={4} spacingX="40px" spacingY="20px">
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

                          <VStack align='center' key={index} w='20vw ' bg='whiteAlpha.600' py='2vh' px='1vw' borderRadius='xl' boxShadow='xl' spacing='3%'>
                            <Text align='center' fontWeight='semiBold' fontSize='xl'> {nft.metaData.name} </Text>
                            <Image
                              alt={nft.metaData.name}
                              src={nft.metaData.image.replace("ipfs://", "https://ipfs.io/ipfs/")}
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

