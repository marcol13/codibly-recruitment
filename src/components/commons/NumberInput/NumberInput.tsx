import {Input} from "@mui/material"
import { Ref } from "react"

type PropTypes = {
    fullWidth?: boolean
    placeholder?: string
    inputRef?: Ref<HTMLInputElement>
}

export const NumberInput = ({fullWidth=false, placeholder="", inputRef}: PropTypes) => {
    return(
        <Input type="number" fullWidth={fullWidth} placeholder={placeholder} inputProps={{min: 1}} inputRef={inputRef} />
    )
}