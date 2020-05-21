import React from "react";
import { Input, ContenedorInput } from "./styles";

export const InputPassword = ({ titulo, disable }) => {
	return (
		<ContenedorInput>
			<label>{titulo}</label>
			<Input type="password" disabled={disable} />
		</ContenedorInput>
	);
};
