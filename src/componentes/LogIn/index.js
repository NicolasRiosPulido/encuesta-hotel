import React, { useState, useContext } from "react";
import { Context } from "../../Context";
import { Redirect } from "@reach/router";
import { LogInContainer, Button, TituloLogIn } from "./styles";
import axios from "axios";
import sha512 from "js-sha512";

import { InputPassword } from "../inputs/InputPassword";
import { useInputPassword } from "../../hooks/useInputPassword";
import { InputMail } from "../inputs/InputMail";
import { Spinner } from "../general/Spinner";

export const LogIn = () => {
	const { activateAuth, isAuth } = useContext(Context);
	const [cargando, setCargando] = useState(false);
	const password = useInputPassword(true);
	const submitForm = () => {
		const mailError = password.useError();
		if (!mailError) {
			const login = "vargas_j";
			const credencial = sha512("87654321");
			console.log(credencial);
			axios
				/* 				.post("http://encuesta.idtek.com.co/servicios/login.php", {
					login: login,
					credencial: credencial,
				}) */
				.get("https://rickandmortyapi.com/api/character/")
				.then((res) => console.log("respuesta", res))
				.catch((errar) => console.log(errar));
			setCargando(true);
			/* 			setTimeout(() => {
				activateAuth();
				setCargando(false);
			}, 2000); */
		}
	};
	return (
		<LogInContainer>
			<TituloLogIn>Iniciar secion</TituloLogIn>
			<InputMail titulo="Usuario" disable={cargando} />
			<br />
			<InputPassword {...password} titulo="Contraseña" disable={cargando} />
			{isAuth && <Redirect noThrow from="/" to="/encuesta" />}
			<Button onClick={submitForm}>
				{cargando ? <Spinner /> : "Iniciar secion"}
			</Button>
		</LogInContainer>
	);
};
