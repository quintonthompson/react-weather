import React from 'react';
import styled from '@emotion/styled';

const Icon = () => {
    const Image = styled.img`
        width: 40%;
    `
    return (  
        <Image src="./img/clouds.png" alt="WeatherIcon"/>
    );
}
 
export default Icon;