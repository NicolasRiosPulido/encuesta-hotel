import React from "react";

import {
	Input,
	ContenedorInput,
	ContenedorError,
	ImgError,
	ErrorMsg,
	Label,
} from "./styles";
import LogoError from "../../Assets/valid-form.svg";

export const InputComponente = ({
	useValor,
	mensaje,
	disable,
	titulo,
	tipo,
	usekeypress,
}) => {
	return (
		<ContenedorInput>
			<Label>{titulo}</Label>
			<Input
				type={tipo === "password" ? "password" : "text"}
				disabled={disable}
				error={mensaje}
				onChange={useValor}
				onKeyPress={usekeypress}
			/>
			{mensaje ? (
				<ContenedorError>
					<ImgError src={LogoError} alt="error" />
					<ErrorMsg>{mensaje}</ErrorMsg>
				</ContenedorError>
			) : null}
		</ContenedorInput>
	);
};
