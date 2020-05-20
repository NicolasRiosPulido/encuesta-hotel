import React, { useState } from "react";
import { Label, Input, Select, Titulo } from "./styles";

export const Encuesta = () => {
	return (
		<div className="cuerpo">
			<h1>Encuesta En test kjaskjasd</h1>
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
		</div>
	);
};
