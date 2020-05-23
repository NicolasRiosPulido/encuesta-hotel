import styled from "styled-components";

export const Body = styled.div`
	margin-top: 10px;
`;

export const ContContador = styled.div`
	display: flex;
	justify-content: space-around;
	margin-top: 15px;
`;
export const BotonesContador = styled.button`
	border-radius: 50%;
	background: #2e8000;
	height: 40px;
	width: 40px;
	color: #fff;
	font-size: 2em;
	&:disabled {
		background: #fedc04;
		opacity: 0.5;
		color: #000;
	}
`;
export const ConInputs = styled.div`
	width: -webkit-fill-available;
`;

export const Tarjeta = styled.div`
	background: #ccc;
	padding: 10px 8px 30px;
	border-radius: 10px;
	margin-top: 10px;
`;
export const BtnAdelante = styled.button`
	width: 40px;
	background: green;
	border-radius: 8px;
	cursor: pointer;
	color: #fff;
	font-weight: 700;
`;

export const CuerpoTarjeta = styled.div`
	display: flex;
`;

export const PaginaN = styled.h2`
	text-align: center;
`;
