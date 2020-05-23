import styled from "styled-components";

export const Input = styled.input`
	height: 40px;
	border-radius: 8px;
	width: -webkit-fill-available;
	border: 1px solid #000;
	font-size: 1em;
	padding: 0 10px;
	background: ${(props) => (props.error ? "rgba(233, 27, 30, 0.1)" : "#FFF")};
	border-color: ${(props) => (props.error ? "#E91B1E" : "#000")};
`;
export const ContenedorInput = styled.div`
	margin: 0 10px;
	width: -webkit-fill-available;
`;

export const ContenedorError = styled.div`
	display: flex;
	align-items: center;
`;
export const ImgError = styled.img`
	height: 30px;
	width: 30px;
`;
export const ErrorMsg = styled.label`
	color: red;
`;
export const Label = styled.h3`
	margin: 8px 0px;
	font-weight: 400;
`;

export const Select = styled.select`
	height: 40px;
	border-radius: 8px;
	width: -webkit-fill-available;
	border: 1px solid #000;
	font-size: 1em;
	padding: 0 10px;
	background: ${(props) => (props.error ? "rgba(233, 27, 30, 0.1)" : "#FFF")};
	border-color: ${(props) => (props.error ? "#E91B1E" : "#000")};
`;
