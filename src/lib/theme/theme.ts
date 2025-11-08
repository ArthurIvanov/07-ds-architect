import { DefaultTheme } from "styled-components";
import { colors } from "./tokens";

export const lightTheme: DefaultTheme = {
	colors: {
		bg: {
			disabled: colors.grey[100],
			neutral: {
				section: {
					calm: colors.white,
					calmInverted: colors.grey[800],
					bold: colors.grey[800],
					lightStatic: colors.white,
					darkStatic: colors.grey[800],
				},
				global: {
					calm: colors.grey[50],
				},
			},
			lead: {
				calm: {
					enabled: colors.blue[50],
					hover: colors.blue[100],
					active: colors.blue[200],
				},
				loud: {
					enabled: colors.blue[400],
					hover: colors.blue[500],
					active: colors.blue[600],
				},
				loudStatic: {
					enabled: colors.blue[400],
					hover: colors.blue[500],
					active: colors.blue[600],
				},
			},
			green: {
				calm: {
					enabled: colors.green[50],
					hover: colors.green[100],
					active: colors.green[200],
				},
				loud: {
					enabled: colors.green[400],
					hover: colors.green[500],
					active: colors.green[600],
				},
				bold: {
					enabled: colors.green[500],
					hover: colors.green[600],
					active: colors.green[700],
				},
			},
			cyan: {
				calm: {
					enabled: colors.cyan[50],
					hover: colors.cyan[100],
					active: colors.cyan[200],
				},
				loud: {
					enabled: colors.cyan[400],
					hover: colors.cyan[500],
					active: colors.cyan[600],
				},
				bold: {
					enabled: colors.cyan[500],
					hover: colors.cyan[600],
					active: colors.cyan[700],
				},
			},
			blue: {
				calm: {
					enabled: colors.blue[50],
					hover: colors.blue[100],
					active: colors.blue[200],
				},
				loud: {
					enabled: colors.blue[400],
					hover: colors.blue[500],
					active: colors.blue[600],
				},
				bold: {
					enabled: colors.blue[500],
					hover: colors.blue[600],
					active: colors.blue[700],
				},
			},
			pink: {
				calm: {
					enabled: colors.pink[50],
					hover: colors.pink[100],
					active: colors.pink[200],
				},
				loud: {
					enabled: colors.pink[400],
					hover: colors.pink[500],
					active: colors.pink[600],
				},
				bold: {
					enabled: colors.pink[500],
					hover: colors.pink[600],
					active: colors.pink[700],
				},
			},
			grey: {
				calm: {
					enabled: colors.grey[50],
					hover: colors.grey[100],
					active: colors.grey[200],
				},
				loud: {
					enabled: colors.grey[400],
					hover: colors.grey[500],
					active: colors.grey[600],
				},
				bold: {
					enabled: colors.grey[500],
					hover: colors.grey[600],
					active: colors.grey[700],
				},
			},
			critical: {
				calm: {
					enabled: colors.red[50],
					hover: colors.red[100],
					active: colors.red[200],
				},
				loud: {
					enabled: colors.red[400],
					hover: colors.red[500],
					active: colors.red[600],
				},
				bold: {
					enabled: colors.red[500],
					hover: colors.red[600],
					active: colors.red[700],
				},
			},
		},
		border: {
			disabled: colors.grey[100],
			lead: {
				calm: {
					enabled: colors.blue[200],
					hover: colors.blue[100],
					active: colors.blue[50],
				},
				loud: {
					enabled: colors.blue[400],
					hover: colors.blue[500],
					active: colors.blue[600],
				},
				onLight: {
					enabled: colors.blue[400],
					hover: colors.blue[500],
					active: colors.blue[600],
				},
				onDark: {
					enabled: colors.blue[200],
					hover: colors.blue[100],
					active: colors.blue[50],
				},
				inverted: {
					enabled: colors.blue[200],
					hover: colors.blue[100],
					active: colors.blue[50],
				},
			},
			green: {
				calm: {
					enabled: colors.green[200],
				},
				bold: {
					enabled: colors.green[500],
				},
			},
			cyan: {
				calm: {
					enabled: colors.cyan[200],
				},
				bold: {
					enabled: colors.cyan[500],
				},
			},
			blue: {
				calm: {
					enabled: colors.blue[200],
				},
				bold: {
					enabled: colors.blue[500],
				},
			},
			pink: {
				calm: {
					enabled: colors.pink[200],
				},
				bold: {
					enabled: colors.pink[500],
				},
			},
			grey: {
				calm: {
					enabled: colors.grey[200],
				},
				bold: {
					enabled: colors.grey[500],
				},
			},
			critical: {
				calm: {
					enabled: colors.red[200],
				},
				bold: {
					enabled: colors.red[500],
				},
			},
		},
		text: {
			main: colors.grey[800],
			mainOnLight: colors.grey[800],
			mainOnDark: colors.grey[50],
			secondary: colors.grey[500],
			tertiary: colors.grey[400],
			disabled: colors.grey[300],
			inverted: colors.white,
			green: {
				calm: {
					enabled: colors.green[200],
				},
				loud: {
					enabled: colors.green[400],
				},
			},
			cyan: {
				calm: {
					enabled: colors.cyan[50],
				},
				loud: {
					enabled: colors.cyan[400],
				},
			},
			blue: {
				calm: {
					enabled: colors.blue[50],
				},
				loud: {
					enabled: colors.blue[400],
				},
			},
			pink: {
				calm: {
					enabled: colors.pink[50],
				},
				loud: {
					enabled: colors.pink[400],
				},
			},
			grey: {
				calm: {
					enabled: colors.grey[50],
				},
				loud: {
					enabled: colors.grey[400],
				},
			},
			critical: {
				calm: {
					enabled: colors.red[50],
				},
				loud: {
					enabled: colors.red[400],
				},
			},
		},
		link: {
			calm: {
				enabled: colors.blue[100],
				hover: colors.blue[200],
				active: colors.blue[300],
			},
			loud: {
				enabled: colors.blue[400],
				hover: colors.blue[500],
				active: colors.blue[600],
			},
			onLight: {
				enabled: colors.blue[400],
				hover: colors.blue[500],
				active: colors.blue[600],
			},
			onDark: {
				enabled: colors.blue[200],
				hover: colors.blue[100],
				active: colors.blue[50],
			},
			inverted: {
				enabled: colors.blue[200],
				hover: colors.blue[100],
				active: colors.blue[50],
			},
		},
	},
};

export const darkTheme = {
	...lightTheme,
	colors: {
		bg: {
			disabled: colors.grey[700],
			neutral: {
				section: {
					calm: colors.grey[800],
					calmInverted: colors.white,
					bold: colors.grey[100],
					lightStatic: colors.white,
					darkStatic: colors.grey[800],
				},
				global: {
					calm: colors.grey[900],
				},
			},
			lead: {
				calm: {
					enabled: colors.blue[50],
					hover: colors.blue[100],
					active: colors.blue[200],
				},
				loud: {
					enabled: colors.blue[400],
					hover: colors.blue[500],
					active: colors.blue[600],
				},
				loudStatic: {
					enabled: colors.blue[400],
					hover: colors.blue[500],
					active: colors.blue[600],
				},
			},
			green: {
				calm: {
					enabled: colors.green[50],
					hover: colors.green[100],
					active: colors.green[200],
				},
				loud: {
					enabled: colors.green[400],
					hover: colors.green[500],
					active: colors.green[600],
				},
				bold: {
					enabled: colors.green[500],
					hover: colors.green[600],
					active: colors.green[700],
				},
			},
			cyan: {
				calm: {
					enabled: colors.cyan[50],
					hover: colors.cyan[100],
					active: colors.cyan[200],
				},
				loud: {
					enabled: colors.cyan[400],
					hover: colors.cyan[500],
					active: colors.cyan[600],
				},
				bold: {
					enabled: colors.cyan[500],
					hover: colors.cyan[600],
					active: colors.cyan[700],
				},
			},
			blue: {
				calm: {
					enabled: colors.blue[50],
					hover: colors.blue[100],
					active: colors.blue[200],
				},
				loud: {
					enabled: colors.blue[400],
					hover: colors.blue[500],
					active: colors.blue[600],
				},
				bold: {
					enabled: colors.blue[500],
					hover: colors.blue[600],
					active: colors.blue[700],
				},
			},
			pink: {
				calm: {
					enabled: colors.pink[50],
					hover: colors.pink[100],
					active: colors.pink[200],
				},
				loud: {
					enabled: colors.pink[400],
					hover: colors.pink[500],
					active: colors.pink[600],
				},
				bold: {
					enabled: colors.pink[500],
					hover: colors.pink[600],
					active: colors.pink[700],
				},
			},
			grey: {
				calm: {
					enabled: colors.grey[50],
					hover: colors.grey[100],
					active: colors.grey[200],
				},
				loud: {
					enabled: colors.grey[400],
					hover: colors.grey[500],
					active: colors.grey[600],
				},
				bold: {
					enabled: colors.grey[500],
					hover: colors.grey[600],
					active: colors.grey[700],
				},
			},
			critical: {
				calm: {
					enabled: colors.red[50],
					hover: colors.red[100],
					active: colors.red[200],
				},
				loud: {
					enabled: colors.red[400],
					hover: colors.red[500],
					active: colors.red[600],
				},
				bold: {
					enabled: colors.red[500],
					hover: colors.red[600],
					active: colors.red[700],
				},
			},
		},
		border: {
			disabled: colors.grey[100],
			lead: {
				calm: {
					enabled: colors.blue[200],
					hover: colors.blue[100],
					active: colors.blue[50],
				},
				loud: {
					enabled: colors.blue[400],
					hover: colors.blue[500],
					active: colors.blue[600],
				},
				onLight: {
					enabled: colors.blue[400],
					hover: colors.blue[500],
					active: colors.blue[600],
				},
				onDark: {
					enabled: colors.blue[200],
					hover: colors.blue[100],
					active: colors.blue[50],
				},
				inverted: {
					enabled: colors.blue[200],
					hover: colors.blue[100],
					active: colors.blue[50],
				},
			},
			green: {
				calm: {
					enabled: colors.green[200],
				},
				bold: {
					enabled: colors.green[500],
				},
			},
			cyan: {
				calm: {
					enabled: colors.cyan[200],
				},
				bold: {
					enabled: colors.cyan[500],
				},
			},
			blue: {
				calm: {
					enabled: colors.blue[200],
				},
				bold: {
					enabled: colors.blue[500],
				},
			},
			pink: {
				calm: {
					enabled: colors.pink[200],
				},
				bold: {
					enabled: colors.pink[500],
				},
			},
			grey: {
				calm: {
					enabled: colors.grey[200],
				},
				bold: {
					enabled: colors.grey[500],
				},
			},
			critical: {
				calm: {
					enabled: colors.red[200],
				},
				bold: {
					enabled: colors.red[500],
				},
			},
		},
		text: {
			main: colors.grey[50],
			mainOnLight: colors.grey[800],
			mainOnDark: colors.grey[50],
			secondary: colors.grey[200],
			tertiary: colors.grey[300],
			disabled: colors.grey[400],
			inverted: colors.grey[800],
			green: {
				calm: {
					enabled: colors.green[200],
				},
				loud: {
					enabled: colors.green[400],
				},
			},
			cyan: {
				calm: {
					enabled: colors.cyan[50],
				},
				loud: {
					enabled: colors.cyan[400],
				},
			},
			blue: {
				calm: {
					enabled: colors.blue[50],
				},
				loud: {
					enabled: colors.blue[400],
				},
			},
			pink: {
				calm: {
					enabled: colors.pink[50],
				},
				loud: {
					enabled: colors.pink[400],
				},
			},
			grey: {
				calm: {
					enabled: colors.grey[50],
				},
				loud: {
					enabled: colors.grey[400],
				},
			},
			critical: {
				calm: {
					enabled: colors.red[50],
				},
				loud: {
					enabled: colors.red[400],
				},
			},
		},
		link: {
			calm: {
				enabled: colors.blue[100],
				hover: colors.blue[200],
				active: colors.blue[300],
			},
			loud: {
				enabled: colors.blue[400],
				hover: colors.blue[500],
				active: colors.blue[600],
			},
			onLight: {
				enabled: colors.blue[400],
				hover: colors.blue[500],
				active: colors.blue[600],
			},
			onDark: {
				enabled: colors.blue[200],
				hover: colors.blue[100],
				active: colors.blue[50],
			},
			inverted: {
				enabled: colors.blue[200],
				hover: colors.blue[100],
				active: colors.blue[50],
			},
		},
	},
};
