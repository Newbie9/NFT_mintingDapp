import React, {useState, useEffect}  from 'react'
import {Flex, VStack, Box, HStack, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon} from '@chakra-ui/react'
function FAQ() {
    
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
        <Flex bg='white'>
                <VStack w='100%' px='3vw' py='5vw'>
                  <Text pb='4vh' style={{ textAlign: "center", fontSize: 45, fontWeight: "bold" }} >
                    {"FAQ"}
                  </Text>
                  <Accordion w='60vw' >
                    <AccordionItem bg="gray.200" borderRadius='xl'>
                      <h2>
                        <AccordionButton>
                          <Box flex="1" fontSize='xl' textAlign="center">
                            What are Treasure Hunters?
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel fontSize='md' pb={4} textAlign="center">
                        100 of the Avax Foxes will have the trait Treasure Hunter. People who mint them will receive 5 Avax.
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem borderRadius='xl'>
                      <h2>
                        <AccordionButton>
                          <Box flex="1" fontSize='xl' textAlign="center">
                            What is the top minter leaderboard?
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel fontSize='md' pb={4} textAlign="center">
                        At the end of the minting phase, the account which has the highest minting points will receive the prize of 100 Avax.
                        Treasure Hunters are equal to 10 minting points each and rest of the collection is equal to just 1 minting point.
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem bg="gray.200" borderRadius='xl'>
                      <h2>
                        <AccordionButton>
                          <Box flex="1" fontSize='xl' textAlign="center">
                            What is reflection?
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel fontSize='md' pb={4} textAlign="center">
                        For every minted Avax Fox %10 of minting price will be shared among minters.
                        Also %5 of every sale in FoxMarket will be distributed among AvaxFoxes holders and original minters of AvaxFoxes earn 2% royalties each time their AvaxFoxes is resold!
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem bg="white" borderRadius='xl'>
                      <h2>
                        <AccordionButton>
                          <Box flex="1" fontSize='xl' textAlign="center">
                            Is there a limit on minting?
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel fontSize='md' pb={4} textAlign="center">
                        We will limit people to mint 20 Avax Fox per transaction. However, you can visit the minting section as many times as you like.
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem bg="gray.200" borderRadius='xl'>
                      <h2>
                        <AccordionButton>
                          <Box flex="1" fontSize='xl' textAlign="center">
                            Can I sell my Avax Fox?
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel fontSize='md' pb={4} textAlign="center">
                        Ofcourse all Avax Foxes are stored with ERC-721 contract. You can sell them in any marketplace that supports Avalanche and also our FoxMarket.
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </VStack>
              </Flex>
    )
}

export default FAQ

