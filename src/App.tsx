import { ThemeProvider } from "styled-components";
import React from "react";
import {
	GlobalStyle,
	Button,
	ButtonLink,
	ButtonIcon,
	lightTheme,
	darkTheme,
} from "./lib";

function App() {
	const switcher = true;
	return (
		<ThemeProvider theme={switcher ? lightTheme : darkTheme}>
			<GlobalStyle />
			<main></main>
		</ThemeProvider>
	);
}

export default App;
