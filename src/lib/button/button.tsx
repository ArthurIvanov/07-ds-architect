import styled from "styled-components";
import { Icon } from "../icon";

type TIconName =
	| "chevronDown"
	| "chevronLeft"
	| "chevronRight"
	| "chevronUp"
	| "user"
	| "close";

interface IButtonProps {
	/**
	 * Визуальный вес компонента
	 */
	appearance?: "primary" | "secondary" | "onDark" | "onLight" | "inverted";

	/**
	 * Размер компонента
	 */
	size?: "base" | "small";

	/**
	 * Делает кнопку недоступной для взаимодействия
	 */
	disabled?: boolean;

	/**
	 * Отображает процесс выполнения вызванный нажатием
	 */
	loading?: boolean;

	/**
	 * Наполнение текстом
	 */
	text: string;

	/**
	 * Отображает иконку до текста
	 */
	iconBefore?: TIconName;

	/**
	 * Отображает иконку после текста
	 */
	iconAfter?: TIconName;
}

const StyledButton = styled.button<IButtonProps>`
	border: 1px solid transparent;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: ${(props) => props.theme.spacing.inner.close};
	cursor: pointer;
	padding: unset;
	font-family: ${(props) => props.theme.typography.fontFamily.text};
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
		props.size === "base" &&
		`
        height: ${props.theme.spacing.height.base};
        padding: 0 ${props.theme.spacing.padding.relaxed};
        font-size: ${props.theme.typography.fontSize.component.base};
        line-height: ${props.theme.typography.lineHeight.component.base};
        font-weight: ${props.theme.typography.fontWeight.medium};
    `}

     ${(props) =>
		props.size === "small" &&
		`
        height: ${props.theme.spacing.height.small};
        padding: 0 ${props.theme.spacing.padding.default};
        font-size: ${props.theme.typography.fontSize.component.small};
        line-height: ${props.theme.typography.lineHeight.component.small};
        font-weight: ${props.theme.typography.fontWeight.medium};
    `}
`;

/**
 * Используется как призыв к действию.
 */
export const Button: React.FC<IButtonProps> = ({
	appearance = "primary",
	size = "base",
	disabled,
	loading,
	iconAfter,
	iconBefore,
	text = "Я кнопка",
}) => {
	return (
		<StyledButton
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
		</StyledButton>
	);
};
