import styled from "styled-components";
import { Color } from "../../../interfaces/api";
import { useAppDispatch } from "../../../store/store";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../interfaces/api";
import { DEFAULT_ERROR_MESSAGE } from "../../../utils/constants";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";

type PropTypes = {
	data: Color[];
};

const ErrorContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const DataTable = ({ data }: PropTypes) => {
	const dispatch = useAppDispatch();
	const appSelector = useSelector((state: ReducerState) => state.app);

	const tableHeaders = ["ID", "Name", "Year"];

	const handleModalOpen = (color: Color) => {
		dispatch({ type: "modal/open", payload: color });
	};

	if (data?.length === 0)
		return (
			<ErrorContainer>
				<Typography>{appSelector.error || DEFAULT_ERROR_MESSAGE}</Typography>
			</ErrorContainer>
		);

	return (
		<Table>
			<TableHead>
				<TableRow>
					{tableHeaders.map((header) => (
						<TableCell sx={{ fontWeight: "bold" }}>{header}</TableCell>
					))}
				</TableRow>
			</TableHead>
			<TableBody>
				{data?.map((row) => (
					<TableRow
						key={row.id}
						sx={{ backgroundColor: row.color, cursor: "pointer" }}
						onClick={() => handleModalOpen(row)}
					>
						<TableCell>{row.id}</TableCell>
						<TableCell>{row.name}</TableCell>
						<TableCell>{row.year}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};
