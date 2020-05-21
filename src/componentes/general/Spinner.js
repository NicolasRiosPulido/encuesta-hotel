import React, { Fragment } from "react";
import "./styles.css";

export const Spinner = () => {
	return (
		<Fragment>
			<div class="lds-ellipsis">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</Fragment>
	);
};
