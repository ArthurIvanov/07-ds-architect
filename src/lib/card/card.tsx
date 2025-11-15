import { ButtonLink } from "../button";

interface ICardProps {
	appearance?: "blue" | "green" | "pink" | "cyan" | "grey";
	textSize: "base" | "large";
	newsData?: string;
	badgeText?: string;
	buttonText?: string;
	children: React.ReactNode;
	text: string;
}

export const Card = () => {
	return (
		<div>
			<div className="card-content">
				<div className="card-header">
					<div>NEWS DATE</div>
					<div>NEWS BADGE</div>
				</div>
				<div className="card-body">
					<p>CARD TEXT</p>
					<div>CHILDREN</div>
				</div>
			</div>
			<ButtonLink text="Подробнее" appearance="primary" />
		</div>
	);
};
