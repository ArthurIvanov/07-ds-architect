import { ThemeProvider } from "styled-components";
import React from "react";
import { GlobalStyle, Card, lightTheme, darkTheme } from "./lib";

function App() {
	const switcher = true;
	return (
		<ThemeProvider theme={switcher ? lightTheme : darkTheme}>
			<GlobalStyle />
			<main>
				<Card />
			</main>
		</ThemeProvider>
	);
}

export default App;
