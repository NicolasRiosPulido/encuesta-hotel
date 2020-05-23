import React, { useState, useContext } from "react";
import { Context } from "../../Context";
import { Redirect } from "@reach/router";
import { LogInContainer, Button, TituloLogIn } from "./styles";
import axios from "axios";
import sha512 from "js-sha512";

import { InputComponente } from "../inputs/InputComponente";
import { useInput } from "../../hooks/useInput";

import { Spinner } from "../general/Spinner";

export const LogIn = () => {
	const { activateAuth, isAuth } = useContext(Context);
	const [cargando, setCargando] = useState(false);
	const mail = useInput("textoAll");
	const password = useInput("password");
	const submitForm = () => {
		const passworError = password.useError();
		const mailError = mail.useError();

		if (!passworError && !mailError) {
			setCargando(true);
			const login = "vargas_j";
			const credencial = sha512("87654321");
			axios
				.post("http://encuesta.idtek.com.co/servicios/login.php", {
					login: login,
					credencial: credencial,
				})
				.then((res) => {
					console.log("respuesta", res);
				})
				.catch((errar) => console.log(errar));
			setTimeout(() => {
				activateAuth();
				setCargando(false);
			}, 2000);
		}
	};
	return (
		<LogInContainer>
			<TituloLogIn>Iniciar secion</TituloLogIn>
			<InputComponente {...mail} titulo="Usuario" disable={cargando} />
			<br />
			<InputComponente {...password} titulo="Contraseña" disable={cargando} />
			{isAuth && <Redirect noThrow from="/" to="/encuesta" />}
			<Button onClick={submitForm}>
				{cargando ? <Spinner /> : "Iniciar secion"}
			</Button>
		</LogInContainer>
	);
};
