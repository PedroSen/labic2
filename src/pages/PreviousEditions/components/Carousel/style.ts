import styled from "styled-components";

interface CustomArrowProps {
    direction: 'left' | 'right';
  }

interface ImageProps {
  elements: number;
}

export const CustomArrow = styled.div<CustomArrowProps>`
  width: 60px;
  height: 250px;
  //background-color: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  //color: "none";
  //margin-top: 100px;
  //gap: 10px;
  

  
`;

export const ArrowImg = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 15px;
`;


export const CardImg = styled.img<ImageProps>`
    width: ${(props) => {
    if (props.elements === 1) return '6rem';
    if (props.elements === 2) return '10rem';
    if (props.elements === 3) return '15rem';
    return '12rem'; // valor padrão
  }};
  height: ${(props) => {
    if (props.elements === 1) return '10.5rem';
    if (props.elements === 2) return '14,5rem';
    if (props.elements === 3) return '15rem';
    return '16.5rem'; // valor padrão
  }};

`;