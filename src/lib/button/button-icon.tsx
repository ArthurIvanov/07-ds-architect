import styled from "styled-components";
import { Icon } from "../icon";

type TIconName =
	| "chevronDown"
	| "chevronLeft"
	| "chevronRight"
	| "chevronUp"
	| "user"
	| "close";

interface IButtonIconProps {
	appearance?: "primary" | "secondary" | "inverted";
	size?: "base" | "large";
	disabled?: boolean;
	loading?: boolean;
	icon?: TIconName;
}

const StyledButtonIcon = styled.button<IButtonIconProps>`
	border: 1px solid transparent;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: ${(props) => props.theme.spacing.inner.close};
	cursor: pointer;
	&:focus {
		box-shadow: ${(props) => props.theme.focus};
	}

	${(props) =>
		props.appearance === "primary" &&
		`
        &:enabled {
            background: ${props.theme.colors.bg.lead.loud.enabled};
            color: ${props.theme.colors.text.inverted};
        }

        &:hover {
            background: ${props.theme.colors.bg.lead.loud.hover};
            color: ${props.theme.colors.text.inverted};
        }
        
          &:active {
            background: ${props.theme.colors.bg.lead.loud.active};
            color: ${props.theme.colors.text.inverted};
        }

    `}

	${(props) =>
		props.appearance === "secondary" &&
		`
        &:enabled {
            background: transparent;
            border-color: ${props.theme.colors.border.lead.loud.enabled};
            color: ${props.theme.colors.link.loud.enabled};
        }

        &:hover {
            background: transparent;
            border-color: ${props.theme.colors.border.lead.loud.hover};
            color: ${props.theme.colors.link.loud.hover};
        }
        
          &:active {
            background: transparent;
            border-color: ${props.theme.colors.border.lead.loud.active};
            color: ${props.theme.colors.link.loud.active};
        }    

    `}

    ${(props) =>
		props.appearance === "inverted" &&
		`
        &:enabled {
            background: transparent;
            border-color: ${props.theme.colors.border.lead.inverted.enabled};
            color: ${props.theme.colors.link.inverted.enabled};
        }

        &:hover {
            background: transparent;
            border-color: ${props.theme.colors.border.lead.inverted.hover};
            color: ${props.theme.colors.link.inverted.hover};
        }
        
          &:active {
            background: transparent;
            border-color: ${props.theme.colors.border.lead.inverted.active};
            color: ${props.theme.colors.link.inverted.active};
        }

    `}

    ${(props) =>
		props.disabled &&
		`
        &:disabled {
        border-color: ${props.theme.colors.border.disabled};
		background: ${props.theme.colors.bg.disabled};
		color: ${props.theme.colors.text.disabled};
		cursor: not-allowed;
	}
    `}

    ${(props) =>
		props.size === "large" &&
		`
        height: ${props.theme.spacing.height.base};
        width: ${props.theme.spacing.width.base};
        
    `}

     ${(props) =>
		props.size === "base" &&
		`
        height: ${props.theme.spacing.height.small};
         width: ${props.theme.spacing.width.small};
        
    `}
`;

export const ButtonIcon: React.FC<IButtonIconProps> = ({
	appearance = "primary",
	size = "base",
	disabled,
	loading,
	icon = "user",
}) => {
	return (
		<StyledButtonIcon
			appearance={appearance}
			size={size}
			loading={loading}
			disabled={disabled}
		>
			<Icon size={size === "base" ? 16 : 20} iconName={icon} />
		</StyledButtonIcon>
	);
};
