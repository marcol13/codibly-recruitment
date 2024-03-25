import { Button as MuiButton } from "@mui/material";

type PropTypes = {
	children: string;
	onClick?: () => void;
};

export const Button = ({ children, onClick }: PropTypes) => {
	return (
		<MuiButton variant="contained" color="primary" onClick={onClick}>
			{children}
		</MuiButton>
	);
};
