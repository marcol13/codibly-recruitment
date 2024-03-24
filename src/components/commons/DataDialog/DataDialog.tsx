import { Dialog } from "@mui/material";
import { Color, DetailTableProperties } from "../../../interfaces/api";
import {Table, TableBody, TableCell, TableRow, IconButton, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import { useState } from "react";
import { useAppDispatch } from "../../../store/store";

type PropTypes = {
    data: Color | null;
    open?: boolean;
}

const DialogContainer = styled.div`
    padding: 50px;
`

const DialogContent = styled.div`
    position: relative;
`

const ColorHeadContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 30px;
    margin-bottom: 20px;

    & h2 {
        margin-bottom: 0px;
    }
`

const ColorSample = styled.div`
    width: 75px;
    height: 75px;
    background-color: ${({color}) => color};
    border-radius: 25%;
`

export const DataDialog = ({data, open=false}: PropTypes) => {
    const dispatch = useAppDispatch()

    const tableProperties: DetailTableProperties[] = [
        {label: "ID", key: "id"},
        {label: "Color", key: "color"},
        {label: "Year", key: "year"},
        {label: "Pantone Value", key: "pantone_value"},
    ]

    const handleClose = () => {
        dispatch({type: "modal/close"})
    }

    if(!data) return null

    return (
        <Dialog open={open} sx={{minWidth: "500px", minHeight: "500px"}}>
            <DialogContent>

            <IconButton sx={{position: "absolute", right: "15px", top: "15px"}} onClick={handleClose}>
                <CloseIcon />
            </IconButton>
            <DialogContainer>
            <ColorHeadContainer>
            <ColorSample color={data.color} />
            <Typography variant="h2" sx={{fontSize: "1.5rem", fontWeight: "600"}}>
            {data.name.toUpperCase()}
                </Typography>

            </ColorHeadContainer>
            <Table>
                <TableBody>
                    {
                        tableProperties.map((property) => (
                            <TableRow key={property.key}>
                                <TableCell sx={{fontWeight: "bold"}}>{property.label}</TableCell>
                                <TableCell>{data[property.key]}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
            </DialogContainer>
            </DialogContent>
        </Dialog>
    )
}