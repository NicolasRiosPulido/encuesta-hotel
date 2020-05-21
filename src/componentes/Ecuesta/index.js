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

export const Encuesta = () => {
	const { removeAuth, isAuth } = useContext(Context);
	const [cargando, setCargando] = useState(false);
	const [enviado, setEnviado] = useState(false);
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
			<Label>1.2 #Licencia</Label>
			<Input type="text" />
			<Label>1.2 Typo de Licencia</Label>
			<Input type="text" />
			<Label>1.3 Nombre</Label>
			<Input type="text" />
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

			{enviado ? (
				<MainTittle>Informacion enviada</MainTittle>
			) : (
				<Button onClick={submitForm}>{cargando ? <Spinner /> : "Enviar"}</Button>
			)}
			{!isAuth && <Redirect noThrow from="/encuesta" to="/" />}
		</Cuerpo>
	);
};
