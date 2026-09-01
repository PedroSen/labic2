import { FC } from "react";
import {
    StyledContainer,
    StyledText,
    StyledIcon,
    StyledButton,
} from "./style.ts";

interface TextProps {
    value: string;
    color?: string;
    fontSize?: string;
    fontWeight?: number;
}

interface IconProps {
    url?: string;
    width?: string;
    height?: string;
    position?: "left" | "right";
}

interface ButtonProps {
    disabled: boolean;
    text: TextProps;
    size?: "small" | "medium" | "large";
    icon?: IconProps;
    backgroundColor?: string;
    url?: string;
}

const Button: FC<ButtonProps> = ({
    disabled,
    text,
    size,
    icon,
    backgroundColor,
    url,
}) => {
    const onClick = () => {
        url && !disabled ? window.open(url, "_blank") : null;
    };

    return (
        <StyledContainer>
            <StyledButton
                disabled={disabled}
                color={text.color}
                backgroundColor={backgroundColor}
                size={size}
                fontSize={text.fontSize}
                fontWeight={text.fontWeight}
                onClick={onClick}
            >
                {icon && icon.position === "left" && (
                    <StyledIcon
                        src={icon.url}
                        width={icon.width}
                        height={icon.height}
                    />
                )}
                <StyledText
                    color={text.color}
                    fontSize={text.fontSize}
                    fontWeight={text.fontWeight}
                >
                    {text.value}
                </StyledText>
                {icon && icon.position === "right" && (
                    <StyledIcon
                        src={icon.url}
                        width={icon.width}
                        height={icon.height}
                    />
                )}
            </StyledButton>
        </StyledContainer>
    );
};

export default Button;
