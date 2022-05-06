import React, { useState, useEffect } from 'react'
import { Flex, VStack, Box, HStack, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Image } from '@chakra-ui/react'
import cerceve1 from "../assets/images/cerceve1.png"
import nftGif from "../assets/images/nftGif.gif"
import sampleim1 from "../assets/images/sample_im1.png"
import sampleim2 from "../assets/images/sample_im2.png"
import sampleim3 from "../assets/images/sample_im3.png"
import sampleim4 from "../assets/images/sample_im4.png"

// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.min.css';
// import styles
import "swiper/swiper-bundle.css";

function Collection() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(false);
    const [innerWidth, setinnerWidth] = useState(0);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const collectionIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];



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



    window.addEventListener('resize', showButton);

    return (
        <div>
            <VStack>
            <Text mx='auto' alignSelf={'middle'} fontWeight="semibold" marginTop='10px' marginBottom='10px'fontSize={!button ? '4xl' : '2xl'} color='#52392E'>
                    Collection
                </Text>
            <Swiper
                className="mySwiper"
                spaceBetween={100}
                slidesPerView={!button ? 3 : 1}
                navigation={false}
                pagination={true} modules={[Pagination]}
                pagination={{ clickable: true, dynamicBullets: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
            >
                {collectionIds.map((value, index) => {

                    return (
                        <SwiperSlide>
                            <Image

                                src={"/collection/" + value.toString() + '.png'}
                                boxSize="300px"
                                objectFit="cover"
                                pos={'center', 'center'}
                                //width={150}
                                borderRadius='300'
                            />

                        </SwiperSlide>
                    );
                })}



            </Swiper>
            </VStack>
        </div>

    )
}

export default Collection

