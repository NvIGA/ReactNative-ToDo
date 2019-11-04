import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { StatusBar, StyleSheet, Animated, Easing, View} from 'react-native'
import { TODO_SCREEN } from '../routes'
import Svg, { Path, Line } from 'react-native-svg';
import { w } from '../constants'
import Carousel from "pinar";
import { SocialBTN } from '../components/UI';



const HomeScreen = (props) => {
    const [count] = useState(new Animated.Value(-300))
    const [control] = useState(new Animated.Value(600))
    const [opacityText] = useState(new Animated.Value(0))
    const [opacityCarousel] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(
            count,
            {
                toValue: -50,
                duration: 1000,
                easing: Easing.elastic()
            }
        ).start()

        Animated.timing(
            opacityText,
            {
                toValue: 1,
                duration: 1400
            }
        ).start()


        Animated.timing(
            control,
            {
                toValue: 0,
                duration: 1000,
                easing: Easing.elastic()
            }
        ).start()


        Animated.timing(
            opacityCarousel,
            {
                toValue: 1,
                duration: 1400
            }
        ).start()
    })

    return (
        <Container>

            <StatusBar backgroundColor="blue" barStyle="light-content" />
            <FlyHeader as={Animated.View} style={{ top: count }}>
                <TitleWrapper>
                    <TextOpacity as={Animated.View} style={{ opacity: opacityText }}>
                        <Description>
                            Hi there! Welcome to
                        </Description>
                        <MainTitle>
                            TDD
                        </MainTitle>
                    </TextOpacity>
                </TitleWrapper>
                <TitleRectangle style={styledc.conts} />
            </FlyHeader>
            <Animated.View style={{ opacity: opacityCarousel}}>
                <Carousel
                    showsControls={false}
                    autoplay={true}
                    height={100}
                    width={w}
                    autoplayInterva={1500}
                    loop={true}
                    style={{ marginBottom: 30, marginTop: 30 }}>

                    <CarouselWrapper>
                        <CarouselText> Neque volutpat ac tincidunt vitae
                         semper quis lectus.</CarouselText>
                    </CarouselWrapper>
                    <CarouselWrapper>
                        <CarouselText> Leo a diam sollicitudin tempor id eu. Consectetur
                        lorem donec massa </CarouselText>
                    </CarouselWrapper>
                    <CarouselWrapper>
                        <CarouselText> Quam viverra orci sagittis eu.
                         urna condimentum mattis pellentesque id.  </CarouselText>
                    </CarouselWrapper>
                </Carousel>
            </Animated.View>


            <ControlSection as={Animated.View} style={{ top: control }}>
                <SocialBTN>
                    FACEBOOK
                </SocialBTN>

                <ButtonWrapper>
                    <SocialBTN
                        nameIcon='sc-twitter'
                        backgroundColorLogo='#51B2E0'
                        backgroundColor='#59DCFF'>
                        TWITTER
                </SocialBTN>
                </ButtonWrapper>


                <MainBTN onPress={() => props.navigation.navigate(TODO_SCREEN)}>
                    <MainText>
                        Skip
                </MainText>
                </MainBTN>
            </ControlSection>




            {/* <Svg style={{ backgroundColor: 'white' }} height="250" width="250">
                <Path
                    d="M50 50 H 10 V 10 H 50 L 50 50"
                    fill='none'
                    stroke="green"
                    strokeWidth="4.5"
                />
                 <Line x1='50' y1='0' y2='10' stroke='green'  stroke-width='2px'/> 

            </Svg> */}
        </Container>

    )
}

const styledc = StyleSheet.create({
    conts: {
        width: w,
        height: 100,
        backgroundColor: '#221738',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.08,
        shadowRadius: 5.00,
        position: 'absolute',
        bottom: -100,
        elevation: 24,
        transform: [
            { scaleX: 1.1 },
            { scaleY: 0.3 },
            { translateY: -130 }
        ]
    }
})


HomeScreen.navigationOptions = {
    header: null
}

const ControlSection = styled.View`
    text-align: center;
    align-content: center;
`

const ButtonWrapper = styled.View`
    margin-top: 15px;
`

const FlyHeader = styled.View`
   
`
const TextOpacity = styled.View`

`
const CarouselWrapper = styled.View`
    width: 250px;
    justify-content: center;
    align-self: center;
    align-items: center;
`

const CarouselText = styled.Text`
    color: #ADADAD;
    font-size: 14;
    line-height: 23px;
    padding-bottom: 40px;
    text-align: center;
`

const TitleWrapper = styled.View`
    background-color: #221738;
    height: 284px;
    width: ${w};
    align-content: center;   
`
const MainTitle = styled.Text`
    text-align: center;
    color: white;
    font-size: 45;
    font-weight: 800;
`

const Description = styled.Text`
    padding-top: 120px;
    padding-bottom: 32;
    text-align: center;
    color: white;
    font-weight: 400;
    font-size: 14;
`

const TitleRectangle = styled.View`
`

const Container = styled.SafeAreaView`
    background-color: #140A26;
    flex: 1;
    align-items: center;
`

const MainText = styled.Text`
    color: #fff;
    font-size: 11px;
    text-align: center;
`
const MainBTN = styled.TouchableOpacity`
    margin-top: 32px;
    text-align: center;
`

export default HomeScreen
