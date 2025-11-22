import { ThemeProvider } from "styled-components";
import React from "react";
import {
	GlobalStyle,
	Card,
	lightTheme,
	darkTheme,
	Badge,
	Button,
	ButtonLink,
} from "./lib";

function App() {
	const switcher = true;
	return (
		<ThemeProvider theme={switcher ? lightTheme : darkTheme}>
			<GlobalStyle />
			<main>
				<Card
					buttonText="Перейти"
					newsData="22.11.2025"
					text="Подразделение ветроэнергетического дивизиона «Росатома» и «Кьези» подписали соглашение на приобретение «зеленых» сертификатов I-REC"
				></Card>
				<Button appearance="primary" size="base" text="Hello primary" />
				<Button
					appearance="primary"
					iconBefore="user"
					size="small"
					text="Hello primary"
				/>
			</main>
		</ThemeProvider>
	);
}

export default App;
