import React, { useState } from "react";
import { Contador } from "./Contador";
import {
	Tarjeta,
	ConInputs,
	CuerpoTarjeta,
	BtnAdelante,
	PaginaN,
	Body,
} from "./styles";
import { InputComponente } from "../inputs/InputComponente";
import { useInput } from "../../hooks/useInput";

export const Trabajadores = () => {
	const [count, setCount] = useState(1);
	const [position, setPosition] = useState(0);
	const [componentes, setComponentes] = useState([4]);
	const Nombre = useInput("text");
	const Apellido = useInput("text");
	const cedula = useInput("number");

	return (
		<Body>
			<PaginaN>Trabajadores</PaginaN>
			<Contador count={count} setCount={setCount} />
			<Tarjeta>
				<PaginaN>{`Pagina ${position}`}</PaginaN>
				<CuerpoTarjeta>
					<BtnAdelante onClick={() => setPosition(position - 1)}>{"<"}</BtnAdelante>
					{componentes.map((data, index) => (
						<ConInputs>
							<InputComponente {...Nombre} titulo="Nombre" disable={false} />
							<InputComponente {...Apellido} titulo="Apellido" disable={false} />
							<InputComponente {...cedula} titulo="Cedula" disable={false} />
						</ConInputs>
					))}
					<BtnAdelante onClick={() => setPosition(position + 1)}>{">"}</BtnAdelante>
				</CuerpoTarjeta>
			</Tarjeta>
		</Body>
	);
};
