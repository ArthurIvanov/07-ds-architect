import { FC } from "react";
import styled from "styled-components";

interface ISpinnerProps {
	size: "base" | "small";
	appearance?:
		| "inverted"
		| "secondary"
		| "primary"
		| "leadOnDark"
		| "leadOnLight"
		| "leadInverted";
	className?: string;
}

const StyledSpinner = styled.div<ISpinnerProps>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
    
	& > div {
		display: block;
		box-sizing: border-box;
		width: 80%;
		height: 80%;
		border-radius: 50%;
		border: 8px solid;
        
		${(props) =>
			props.size === "small" &&
			`
            border-width: 1px;
            width: 16px;
            height: 16px;
            `}
            
            ${(props) =>
				props.size === "base" &&
				`
                border-width: 2px;
                width: 20px;
	    height: 20px;
        `}

        ${(props) =>
			props.appearance === "inverted" &&
			`
            
            border-color: ${props.theme.colors.text.inverted} transparent;
            `}
        ${(props) =>
			props.appearance === "secondary" &&
			`
            
            border-color: ${props.theme.colors.text.secondary} transparent;
            `}
        ${(props) =>
			props.appearance === "primary" &&
			`
            
            border-color: ${props.theme.colors.link.loud.enabled} transparent;
            `}
        ${(props) =>
			props.appearance === "leadOnDark" &&
			`
            
            border-color: ${props.theme.colors.link.onDark.enabled} transparent;
            `}
        ${(props) =>
			props.appearance === "leadOnLight" &&
			`
            
            border-color: ${props.theme.colors.link.onLight.enabled} transparent;
            `}
        ${(props) =>
			props.appearance === "leadInverted" &&
			`
            
            border-color: ${props.theme.colors.link.inverted.enabled} transparent;
            `}


	animation: spinner 1.2s linear infinite;

	@keyframes spinner {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export const Spinner: FC<ISpinnerProps> = ({
	size = "base",
	appearance = "secondary",
	className,
}) => (
	<StyledSpinner appearance={appearance} size={size} className={className}>
		<div />
	</StyledSpinner>
);
