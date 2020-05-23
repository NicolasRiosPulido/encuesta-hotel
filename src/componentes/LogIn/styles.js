import styled from "styled-components";

export const LogInContainer = styled.div`
	background: #eee;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 10px 20px;
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

export const TituloLogIn = styled.h1`
	text-align: center;
	margin-bottom: 20px;
`;
