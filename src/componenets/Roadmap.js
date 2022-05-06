import React, { useState, useEffect } from 'react'
import { Flex, VStack, Box, HStack, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Image, Spacer } from '@chakra-ui/react'
import cerceve1 from "../assets/images/cerceve1.png"
import nftGif from "../assets/images/nftGif.gif"
import sampleim1 from "../assets/images/sample_im1.png"
import sampleim2 from "../assets/images/sample_im2.png"
import sampleim3 from "../assets/images/sample_im3.png"
import sampleim4 from "../assets/images/sample_im4.png"
import roadmapimg from "../assets/images/roadmap.png"
import staking from "../assets/images/staking.PNG"
import {
    Timeline,
    Events,
    UrlButton,
    ImageEvent,
    TextEvent,
    YouTubeEvent,
    themes, createTheme
} from '@merc/react-timeline';

import styled from "styled-components";
function Roadmap() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(false);
    const [innerWidth, setinnerWidth] = useState(0);


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
        setinnerWidth(window.innerWidth)
    }, []);

    const customTheme = createTheme(themes.default, {
        "timeline": {

            "a": {
                "color": "yellow"
            },
            "marginLeft": "330px",
            "alignSelf": "middle"

        },
        "timelineTrack": {
            "marginLeft": "40rem",
            "left": "50%",
            "width": "3px",
            "height": "100%",
            "backgroundColor": "#C6C5E7",
            "content": "''",
            "background": "linear-gradient(to bottom,  #d85bcf 0%,#f0799d 100%);",
            "marginLeft": "33%"
        },
        "marker": {
            "backgroundColor": "#C6C5E7",
            "border": "2px solid #fff",
            "borderRadius": "50%",
            "width": "16px",
            "height": "16px",
            "zIndex": 100,
            "left": "1px",

            "marginLeft": "33%"
        },
        "card": {
            "borderRadius": "4px",
            "backgroundColor": "#eee",
            "color": "#52392E",
            "padding": "10px",
            "boxShadow": "0 4px 6px 0 hsla(0, 0%, 0%, 0.9)",
            "width": "100%",
            "maxWidth": "560px",
            "a": {
                "color": "#EC24B5"
            }
        },
        "date": {
            "backgroundColor": "#9221C1",
            "padding": "6px",
            "color": "#fff",
            "borderRadius": "4px",
            "fontWeight": 500,
            "fontSize": ".85rem"
        },
        "events": {
            "padding": "10px"
        },
        "event": {
            "marginBottom": "20px",

        },
        "textAtom": {}
    });

    window.addEventListener('resize', showButton);

    return (
        <div>
            <VStack w='100%'>
                <Image src={staking} w='60%' alignSelf={'center'}>
                </Image>
            <VStack w='100%' marginBottom={'6em'} bgImage={roadmapimg} backgroundSize={'50% 100%'} backgroundPosition={'center center'} backgroundRepeat='no-repeat'>                
                    
                
                <Text mx='auto' alignSelf={'middle'} fontWeight="semibold" marginTop='10px' fontSize={!button ? '4xl' : '2xl'} color='#52392E'>
                    Roadmap
                </Text>

                <Timeline theme={customTheme} >
                    <Events>
                        <TextEvent date="04/2022" text="Sophia The Cat collection opens to minting. Staking is open to earn $KAT coin. Minters will be able to mint from collection using $KAT coin" />
                        <TextEvent date="05/2022" text="All charities that are promised will be done and shared with public" />
                        <TextEvent date="06/2022" text="We drop a special 'Paintings on photos' Travel edition collection. This collection will be open to minting by $KAT coin also" />
                        <TextEvent date="07/2022" text="New merchandise is out, special design of Sophia The Cat Shirts will be open to buy at printify.com" />
                        <TextEvent date="08/2022" text="There will be a YouTube channel where you can find animated short films of Sophia's daily life." />
                    </Events>
                </Timeline>

            </VStack>
            </VStack>


        </div>

    )
}

export default Roadmap

