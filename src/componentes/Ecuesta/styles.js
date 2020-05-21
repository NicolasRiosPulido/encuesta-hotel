import styled from "styled-components";

export const Label = styled.h3`
	margin: 5px 10px;
	width: 100%;
`;
export const Titulo = styled.h1`
	margin: 12px 0px;
	font-size: 1.6em;
`;

export const Input = styled.input`
	margin: 0px 10px;
	height: 40px;
	border-radius: 8px;
	width: -webkit-fill-available;
	border: 1px solid #000;
	padding: 0px 8px;
	font-size: 1em;
`;
export const Select = styled.select`
	margin: 0px 10px;
	height: 40px;
	border-radius: 8px;
	width: -webkit-fill-available;
	background: #fff;
	border: 1px solid #000;
	padding: 0px 4px;
	font-size: 1em;
`;
export const MainTittle = styled.h1`
	text-align: center;
	margin: 20px 0px;
`;

export const Cuerpo = styled.div`
	background: #bbb;
	padding: 10px;
`;

export const Button = styled.button`
	background: green;
	border-radius: 8px;
	height: 40px;
	width: -webkit-fill-available;
	color: #fff;
	margin: 10px;
	font-size: 1em;
	margin-top: 20px;
	cursor: pointer;
	&:hover {
		opacity: 0.7;
	}
`;
