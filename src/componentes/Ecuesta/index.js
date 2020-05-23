import React, { useState, useContext } from "react";
import { Redirect } from "@reach/router";
import { Context } from "../../Context";
import { MdArrowBack } from "react-icons/md";
import {
	Label,
	Input,
	Select,
	Titulo,
	MainTittle,
	Cuerpo,
	Button,
} from "./styles";
import { Spinner } from "../general/Spinner";
import { Trabajadores } from "../Trabajadores";
import { InputComponente } from "../inputs/InputComponente";
import { useInput } from "../../hooks/useInput";

export const Encuesta = () => {
	const { removeAuth, isAuth } = useContext(Context);
	const [cargando, setCargando] = useState(false);
	const [enviado, setEnviado] = useState(false);

	const licenciaNumero = useInput("number");
	const nombre = useInput("text");

	const cerrarSesion = () => {
		removeAuth();
	};
	const submitForm = () => {
		setCargando(true);
		setTimeout(() => {
			setCargando(false);
			setEnviado(true);
		}, 2000);
	};
	return (
		<Cuerpo>
			<MdArrowBack
				size="30px"
				style={{ cursor: "pointer" }}
				onClick={cerrarSesion}
			/>
			<MainTittle>Encuesta</MainTittle>
			<Titulo>1. Informacion obra</Titulo>
			<Label>1.1 tipo protocolo</Label>
			<Select>
				<option>Construccion</option>
				<option>Hotelero</option>
				<option>Restaurantes</option>
			</Select>
			<InputComponente
				{...licenciaNumero}
				titulo="1.2 #Licencia"
				disable={cargando}
			/>
			<Label>1.2 Typo de Licencia</Label>
			<Input type="text" />
			<InputComponente {...nombre} titulo="1.3 Nombre" disable={cargando} />
			<Label>1.4 Apellido</Label>
			<Input type="text" />
			<Label>1.5 CC o documento de identidad</Label>
			<Select>
				<option>CC</option>
				<option>documento de identidad</option>
			</Select>
			<Label>Metros cuadrados</Label>
			<Input type="text" />
			<Label>Numero de trabajadores</Label>
			<Input type="text" />
			<Trabajadores />
			{enviado ? (
				<MainTittle>Informacion enviada</MainTittle>
			) : (
				<Button onClick={submitForm}>{cargando ? <Spinner /> : "Enviar"}</Button>
			)}
			{!isAuth && <Redirect noThrow from="/encuesta" to="/" />}
		</Cuerpo>
	);
};
