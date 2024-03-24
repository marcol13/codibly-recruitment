import { Button as MuiButton } from "@mui/material"

type PropTypes = {
    children: string
}

export const Button = ({children}: PropTypes) => {
    return (
        <MuiButton variant="contained" color="primary">
            {children}
        </MuiButton>
    )
}