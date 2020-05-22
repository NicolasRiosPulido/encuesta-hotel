import React from "react";
import {
	Input,
	ContenedorInput,
	ContenedorError,
	ImgError,
	ErrorMsg,
} from "./styles";
import LogoError from "../../Assets/valid-form.svg";

const ERROR_STYLE = {
	borderColor: "#E91B1E",
	background: "rgba(233, 27, 30, .1)",
	color: "#000",
	width: "-webkit-fill-available",
};

export const InputPassword = ({ useValor, mensaje, disable, titulo }) => {
	console.log(mensaje);

	return (
		<ContenedorInput>
			<label>{titulo}</label>
			<Input
				type="password"
				disabled={disable}
				style={mensaje ? ERROR_STYLE : null}
				onChange={useValor}
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
