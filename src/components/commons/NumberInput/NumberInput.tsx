import {Input} from "@mui/material"

type PropTypes = {
    fullWidth?: boolean
    placeholder?: string
}

export const NumberInput = ({fullWidth=false, placeholder=""}: PropTypes) => {
    return(
        <Input type="number" fullWidth={fullWidth} placeholder={placeholder} inputProps={{min: 1}}  />
    )
}