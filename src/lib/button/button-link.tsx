import styled from "styled-components";
import { Icon } from "../icon";

type TIconName =
	| "chevronDown"
	| "chevronLeft"
	| "chevronRight"
	| "chevronUp"
	| "user"
	| "close";

interface IButtonLinkProps {
	appearance?: "primary" | "inverted";
	size?: "base" | "small";
	disabled?: boolean;
	loading?: boolean;
	text: string;
	iconBefore?: TIconName;
	iconAfter?: TIconName;
}

const StyledButtonLink = styled.button<IButtonLinkProps>`
	background: transparent;
	border: 1px solid transparent;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: ${(props) => props.theme.spacing.inner.close};
	cursor: pointer;
	font-family: ${(props) => props.theme.typography.fontFamily.text};
	font-size: ${(props) => props.theme.typography.fontSize.component.base};
	line-height: ${(props) => props.theme.typography.lineHeight.component.base};
	font-weight: ${(props) => props.theme.typography.fontWeight.medium};
	&:focus {
		box-shadow: ${(props) => props.theme.focus};
	}

	${(props) =>
		props.appearance === "primary" &&
		`
        &:enabled {
           
            color: ${props.theme.colors.link.loud.enabled};
        }

        &:hover {
            
            color: ${props.theme.colors.link.loud.hover};
        }
        
          &:active {
            
            color: ${props.theme.colors.link.loud.active};
        }

    `}

	${(props) =>
		props.appearance === "inverted" &&
		`
        &:enabled {
            
            color: ${props.theme.colors.link.inverted.enabled};
        }

        &:hover {
            
            color: ${props.theme.colors.link.inverted.hover};
        }
        
          &:active {
            
            color: ${props.theme.colors.link.inverted.active};
        }

    `}

    ${(props) =>
		props.disabled &&
		`
        &:disabled {
		color: ${props.theme.colors.text.disabled};
		cursor: not-allowed;
	}
    `}
`;

export const ButtonLink: React.FC<IButtonLinkProps> = ({
	appearance = "primary",
	size = "base",
	disabled,
	loading,
	iconAfter,
	iconBefore,
	text = "Я кнопка",
}) => {
	return (
		<StyledButtonLink
			appearance={appearance}
			size={size}
			loading={loading}
			disabled={disabled}
			text={text}
		>
			{iconBefore ? (
				<Icon size={size === "base" ? 20 : 16} iconName={iconBefore} />
			) : null}
			{text}
			{iconAfter ? (
				<Icon size={size === "base" ? 20 : 16} iconName={iconAfter} />
			) : null}
		</StyledButtonLink>
	);
};
