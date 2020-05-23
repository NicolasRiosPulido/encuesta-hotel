import React from "react";
import { ContContador, BotonesContador } from "./styles";

export const Contador = ({ count, setCount }) => {
	return (
		<ContContador>
			<BotonesContador
				onClick={() => {
					setCount(count - 1);
				}}
				disabled={count === 0}
			>
				-
			</BotonesContador>
			<h1>{count}</h1>
			<BotonesContador
				onClick={() => {
					setCount(count + 1);
				}}
				disabled={count === 20}
			>
				+
			</BotonesContador>
		</ContContador>
	);
};
