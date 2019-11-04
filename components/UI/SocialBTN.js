import React from 'react'
import styled from 'styled-components'
import { EvilIcons } from '@expo/vector-icons';

const SocialBTN = ({
    nameIcon = 'sc-facebook',
    colorIcon = 'white',
    backgroundColor = '#3B5798',
    backgroundColorLogo = '#283B68',
    color = '#fff',
    children }) => {

    return (
        <WrapTouchable>
            <SocialWrapper style={{ backgroundColor: backgroundColor }}>
                <LogoWrapper style={{ backgroundColor: backgroundColorLogo }}>
                    <EvilIcons
                        name={nameIcon}
                        size={32}
                        color={colorIcon}
                        style={{ lineHeight: 50 }} />
                </LogoWrapper>
                <TextButton style={{ color: color }}>
                    {children}
                </TextButton>
            </SocialWrapper>
        </WrapTouchable>

    )
}

const WrapTouchable = styled.TouchableOpacity`
`

const TextButton = styled.Text`
    padding-left: 23px;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 1px;
`

const SocialWrapper = styled.View`
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    width: 280;
    height: 50;
    align-self: center;
    align-items: center;
    align-content: center;
`

const LogoWrapper = styled.View`
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    width: 50;
    height: 50;
    background-color: ${bgColorLogo};
    align-self: center;
    align-items: center;
    align-content: center;
    
`

export default SocialBTN