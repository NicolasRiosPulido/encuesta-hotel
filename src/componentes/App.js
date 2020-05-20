import React, { Fragment } from "react";
import { Encuesta } from "./Ecuesta";
import { GlobalStyles } from "../styles/global";

export const App = () => {
	return (
		<Fragment>
			<GlobalStyles />
			<Encuesta />
		</Fragment>
	);
};
