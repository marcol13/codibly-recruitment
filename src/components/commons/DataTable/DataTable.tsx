import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import { Color } from '../../../interfaces/api';

type PropTypes = {
    data: Color[]
}

export const DataTable = ({data}: PropTypes) => {

    if(data?.length === 0) return (<div>No data</div>)

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell sx={{fontWeight: "bold"}}>ID</TableCell>
                    <TableCell sx={{fontWeight: "bold"}}>Name</TableCell>
                    <TableCell sx={{fontWeight: "bold"}}>Year</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data?.map((row) => (
                    <TableRow key={row.id} sx={{backgroundColor: row.color}}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.year}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}