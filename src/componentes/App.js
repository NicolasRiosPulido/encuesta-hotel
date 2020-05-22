import React, { Fragment, useContext } from "react";
import { Router, Redirect } from "@reach/router";
import { GlobalStyles } from "../styles/global";
import { Context } from "../Context";
import { Encuesta } from "./Ecuesta";
import { LogIn } from "./LogIn";

export const App = () => {
	const { isAuth } = useContext(Context);
	return (
		<Fragment>
			<GlobalStyles />
			<Router>
				<LogIn path="/" />
				{!isAuth && <Redirect noThrow from="/encuesta" to="/" />}
				<Encuesta path="/encuesta" />
			</Router>
		</Fragment>
	);
};
