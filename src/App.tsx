import { ThemeProvider } from "styled-components";
import React from "react";
import { GlobalStyle, Placeholder, lightTheme, darkTheme } from "./lib";

function App() {
	const switcher = false;
	return (
		<ThemeProvider theme={switcher ? lightTheme : darkTheme}>
			<GlobalStyle />
			<main>
				<Placeholder text="Styled!" />
			</main>
		</ThemeProvider>
	);
}

export default App;
