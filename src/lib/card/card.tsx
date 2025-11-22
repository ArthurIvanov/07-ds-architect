import { ButtonLink } from "../button";
import { Badge } from "../badge";
import styled from "styled-components";

interface ICardProps {
	/**
	 * Визуальное разделение новости
	 */
	appearance?: "blue" | "green" | "pink" | "cyan" | "grey";

	/**
	 * Используется для текста
	 */
	text?: string;

	/**
	 * Дата новости, может быть календарной или отметкой сегодня
	 */
	newsData?: string;

	/**
	 * Меняет размер шрифта
	 */
	textSize?: "base" | "large";

	/**
	 * Классификатор новости
	 */
	badgeText?: string;

	/**
	 * Текст кнопки
	 */
	buttonText?: string;

	/**
	 * Используется для сложной композиции внутри карточки
	 */
	children?: React.ReactNode;
}

const StyledCard = styled.div<ICardProps>`
	padding: ${(props) => props.theme.spacing.padding.default};
	border: 1px solid ${(props) => props.theme.colors.border.grey.calm.enabled};
	background: ${(props) => props.theme.colors.bg.neutral.section.calm};
	font-family: ${(props) => props.theme.typography.fontFamily.text};
	min-width: 320px;
	max-width: 600px;
	display: inline-flex;
	flex-direction: column;
	justify-content: end;
	gap: ${(props) => props.theme.spacing.gap.grouped};

	.card-content {
		display: flex;
		flex-direction: column;
		gap: ${(props) => props.theme.spacing.gap.grouped};
	}

	.card-header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.card-news-data {
		color: ${(props) => props.theme.colors.text.main};

		font-size: ${(props) =>
			props.theme.typography.fontSize.component.small};
		line-height: ${(props) =>
			props.theme.typography.lineHeight.component.small};
		font-weight: ${(props) => props.theme.typography.fontWeight.medium};
	}

	.card-body {
		display: flex;
		flex-direction: column;
		gap: ${(props) => props.theme.spacing.gap.grouped};
	}

	.card-body-text {
		color: ${(props) => props.theme.colors.text.main};
	}

	${(props) =>
		props.textSize === "base" &&
		`
        font-size: ${props.theme.typography.fontSize.text.base};
		line-height: ${props.theme.typography.lineHeight.text.base};
		font-weight: ${props.theme.typography.fontWeight.regular};
    `}

	${(props) =>
		props.textSize === "large" &&
		`
        font-size: ${props.theme.typography.fontSize.heading.h4};
		line-height: ${props.theme.typography.lineHeight.heading.h4};
		font-weight: ${props.theme.typography.fontWeight.semiBold};
    `}

    ${(props) =>
		props.appearance &&
		`
        background: ${props.theme.colors.bg[props.appearance].loud.enabled};
        border-color: ${props.theme.colors.bg[props.appearance].loud.enabled};

        .card-news-data {
		color: ${props.theme.colors.text.inverted};
        }
        .card-body-text {
		    color: ${props.theme.colors.text.inverted};
	    }

    `}
`;

/**
 * Используется для отображения новостей
 */
export const Card: React.FC<ICardProps> = ({
	text,
	newsData = "01.01.2026",
	badgeText = "Новости",
	buttonText = "Подробнее",
	textSize = "base",
	appearance,
	children,
}) => {
	return (
		<StyledCard textSize={textSize} appearance={appearance}>
			<div className="card-content">
				<div className="card-header">
					<div className="card-news-data">{newsData}</div>
					<Badge
						text={badgeText}
						appearance={appearance}
						size="small"
					/>
				</div>
				<div className="card-body">
					<p className="card-body-text">{text}</p>
					{children ? <div>{children}</div> : null}
				</div>
			</div>
			<div>
				<ButtonLink
					iconAfter="chevronRight"
					text={buttonText}
					appearance={appearance ? "inverted" : "primary"}
				/>
			</div>
		</StyledCard>
	);
};
