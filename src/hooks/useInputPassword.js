import { useState } from "react";

export const useInputPassword = (logIn) => {
	const [valor, setValor] = useState("");
	const [errorMesaje, setErrorMesaje] = useState("");
	const changeValue = (e) => {
		if (errorMesaje) {
			validarError();
		}
		setValor(e.target.value);
	};
	const validarError = () => {
		if (logIn) {
			if (valor.length === 0) {
				setErrorMesaje("Por favor complete el campo");
				return true;
			} else {
				setErrorMesaje("");
				return false;
			}
		} else {
			if (valor.length === 0 || valor.length < 8) {
				valor.length < 8 &&
					setErrorMesaje("La contraseña deve tener al menos 8 caracteres");

				valor.length === 0 && setErrorMesaje("Por favor complete el campo");
				return true;
			} else {
				setErrorMesaje("");
				return false;
			}
		}
	};
	return {
		mensaje: errorMesaje,
		value: valor,
		useValor: changeValue,
		useError: validarError,
	};
};
