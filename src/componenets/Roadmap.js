import React, {useState, useEffect}  from 'react'
import {Flex, VStack, Box, HStack, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon} from '@chakra-ui/react'
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
        
    )
}

export default Roadmap

