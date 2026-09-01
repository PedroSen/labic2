import styled from 'styled-components';
import {motion} from "framer-motion";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;

export const StyledLabel = styled.div`
    background-color: #FFFFFF;
    border-radius: 3rem;
    cursor: pointer;
    font-family: var(--open-sans);
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50rem;
    height: 7.5rem;
    position: relative;
    padding: 0 4rem 0 8rem;

    @media (max-width: 1024px) {
        width: 90%;
    }

    @media (max-width: 768px) {
        width: 80%;
    }

    @media (max-width: 540px) {
        width: 85%;
        height: 5rem;
        padding: 0 2rem 0 5.5rem;
    }
`;

export const StyledText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
`;

export const StyledTitle = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }

    @media (max-width: 540px) {
        font-size: 1rem;
    }

    @media (max-width: 540px) {
        font-size: 0.8rem;
    }
`;

export const StyledSubtitle = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 540px) {
        font-size: 0.8rem;
    }

    @media (max-width: 540px) {
        font-size: 0.6rem;
    }
`;

export const StyledTime = styled.h4`
    font-size: 2rem;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }

    @media (max-width: 540px) {
        font-size: 1.6rem;
    }

    @media (max-width: 540px) {
        font-size: 1.4rem;
    }
`;

export const StyledDate = styled.h4`
    background-color: #7342F5;
    color: #FFFFFF;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: 600;
    position: absolute;
    left: -5%;

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }

    @media (max-width: 540px) {
        font-size: 1.6rem;
    }

    @media (max-width: 540px) {
        width: 6rem;
        height: 6rem;
        font-size: 1.4rem;
    }
`;

export const StyledCard = styled(motion.div)`
    background-color: #FFFFFF;
    font-family: var(--open-sans);
    width: 40rem;
    padding: 2rem 4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    z-index: 0;

    @media (max-width: 1024px) {
        width: 90%;
    }

    @media (max-width: 768px) {
        width: 80%;
    }

    @media (max-width: 540px) {
        width: 85%;
        padding: 2rem;
    }
`;

export const StyledLocation = styled.div`
    display: flex;
    gap: 1rem;
`;

export const StyledLocationIcon = styled.img`
    width: 1rem;
    height: 1.75rem;
    transform: translateY(-0.25rem);

    @media (max-width: 540px) {
        width: 0.75rem;
        height: 1.25rem;
        transform: translateY(0)
    }
`;

export const StyledLocationText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const StyledLocationTitle = styled.h5`
    font-size: 1.2rem;
    font-weight: 700;
    color: #7342F5;

    @media (max-width: 540px) {
        font-size: 1rem;
    }
`;

export const StyledLocationContent = styled.p`
    font-size: 1rem;

    @media (max-width: 540px) {
        font-size: 0.8rem;
    }
`;

export const StyledMentors = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const StyledMentorsTitle = styled.h5`
    font-size: 1.2rem;
    font-weight: 700;
    color: #7342F5;

    @media (max-width: 540px) {
        font-size: 1rem;
    }
`;

export const StyledMentorContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-weight: 500;

    @media (max-width: 540px) {
        font-size: 0.8rem;
    }
`;

export const StyledMentorName = styled.p``;