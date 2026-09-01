import styled from "styled-components";

interface StyledTextProps {
    size?: 'small' | 'medium' | 'large';
}

export const StyledContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    gap: 0.5rem;
    align-items: center;
    padding: 0 4rem;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
    }

    @media (max-width: 540px) {
        flex-direction: column;
        gap: 20px;
    }
`;

export const StyledText = styled.div`
    width: 50%;
    align-items: center;
    justify-content: center;
    margin-left: 4rem;

    @media (max-width: 768px) {
        width: 90%;
        margin-left: 0;
    }

    @media (max-width: 540px) {
        width: 90%;
        margin-left: 0;
    }
`;

export const InfoDataTxt = styled.p<StyledTextProps>`
    color: white;
    text-align: justify;
    font-weight: 600;
    line-height: 1.5;
    font-family: var(--open-sans);
    font-size: ${({size}) => {
        switch (size) {
            case 'small':
                return '1.2rem';
            case 'large':
                return '1.5rem';
            case 'medium':
            default:
                return '1.35rem';
        }
    }};

    @media (max-width: 768px) {
        font-size: 1.30rem;
        line-height: 1.2;
    }

    @media (max-width: 540px) {
        font-size: 1.2rem;
        line-height: 1.2;
    }
    
`;

export const InfoDataFig = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;

`;

export const InfoDataImg = styled.img`
    max-width: 30rem;
    height: 25rem;
`;