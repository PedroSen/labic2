import { FC, useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
    StyledContainer,
    StyledCard,
    StyledLabel,
    StyledText,
    StyledTitle,
    StyledSubtitle,
    StyledTime,
    StyledDate,
    StyledLocation,
    StyledLocationIcon,
    StyledLocationText,
    StyledLocationTitle,
    StyledLocationContent,
    StyledMentors,
    StyledMentorsTitle,
    StyledMentorContent,
    StyledMentorName,
} from "./style";
import Button from "../../../../components/Button";
import LocationIcon from "/assets/icons/location.png";

interface EventCardsProps {
    date: string;
    title: string;
    subtitle?: string;
    time: string;
    location?: string;
    mentors?: string[];
    mediators?: string[];
    url: string;
}

const EventCard: FC<EventCardsProps> = ({
    date,
    title,
    subtitle,
    time,
    location,
    mentors,
    mediators,
    url,
}) => {
    const [isVisible, setIsVisible] = useState(false);

    const cardVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    const handleClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <StyledContainer>
            <StyledLabel onClick={handleClick}>
                <StyledDate>{date}</StyledDate>
                <StyledText>
                    <StyledTitle>{title}</StyledTitle>
                    {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
                </StyledText>
                <StyledTime>{time}</StyledTime>
            </StyledLabel>
            <AnimatePresence>
                {isVisible && (
                    <StyledCard
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={cardVariants}
                        transition={{ duration: 0.5 }}
                    >
                        <StyledLocation>
                            <StyledLocationIcon src={LocationIcon} />
                            <StyledLocationText>
                                <StyledLocationTitle>
                                    Local:
                                </StyledLocationTitle>
                                <StyledLocationContent>
                                    {location}
                                </StyledLocationContent>
                            </StyledLocationText>
                        </StyledLocation>
                        <StyledMentors>
                            {mentors && (
                                <StyledMentorsTitle>
                                    Mentores:
                                </StyledMentorsTitle>
                            )}
                            {mediators && (
                                <StyledMentorsTitle>
                                    Mediadora:
                                </StyledMentorsTitle>
                            )}
                            <StyledMentorContent>
                                {mentors &&
                                    mentors.map((mentor, index) => (
                                        <StyledMentorName key={index}>
                                            {mentor}
                                        </StyledMentorName>
                                    ))}
                                {mediators &&
                                    mediators.map((mentor, index) => (
                                        <StyledMentorName key={index}>
                                            {mentor}
                                        </StyledMentorName>
                                    ))}
                            </StyledMentorContent>
                        </StyledMentors>
                        <Button
                            text={{
                                value: "Clique aqui e assista",
                                color: "#ffffff",
                                fontWeight: 700,
                                fontSize: "1rem",
                            }}
                            url={url}
                            backgroundColor={"var(--purple-1)"}
                            size={"small"}
                            disabled={false}
                        />
                    </StyledCard>
                )}
            </AnimatePresence>
        </StyledContainer>
    );
};

export default EventCard;
