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

export const InputSelect = ({ useValor, mensaje, disable, titulo }) => {
	return (
		<ContenedorInput>
			<Label>{titulo}</Label>
			<Input />
			{mensaje ? (
				<ContenedorError>
					<ImgError src={LogoError} alt="error" />
					<ErrorMsg>{mensaje}</ErrorMsg>
				</ContenedorError>
			) : null}
		</ContenedorInput>
	);
};
