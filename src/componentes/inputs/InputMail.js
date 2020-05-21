import React from "react";
import { Input, ContenedorInput } from "./styles";

export const InputMail = ({ titulo, disable }) => {
	return (
		<ContenedorInput>
			<label>{titulo}</label>
			<Input disabled={disable} />
		</ContenedorInput>
	);
};
