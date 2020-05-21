import React, { useState, useContext } from "react";
import { Context } from "../../Context";
import { Redirect } from "@reach/router";
import { LogInContainer, Button, TituloLogIn } from "./styles";

import { InputPassword } from "../inputs/InputPassword";
import { InputMail } from "../inputs/InputMail";
import { Spinner } from "../general/Spinner";

export const LogIn = () => {
	const { activateAuth, isAuth } = useContext(Context);
	const [cargando, setCargando] = useState(false);
	const submitForm = () => {
		setCargando(true);
		setTimeout(() => {
			activateAuth();
			setCargando(false);
		}, 2000);
	};
	return (
		<LogInContainer>
			<TituloLogIn>Iniciar secion</TituloLogIn>
			<InputMail titulo="Usuario" disable={cargando} />
			<br />
			<InputPassword titulo="Contraseña" disable={cargando} />
			{isAuth && <Redirect noThrow from="/" to="/encuesta" />}
			<Button onClick={submitForm}>
				{cargando ? <Spinner /> : "Iniciar secion"}
			</Button>
		</LogInContainer>
	);
};
