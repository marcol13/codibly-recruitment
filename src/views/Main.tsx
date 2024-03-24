import { NumberInput } from "../components/commons/NumberInput/NumberInput"
import { Button } from "../components/commons/Button/Button"
import { Container, Pagination } from "@mui/material"
import { DataTable } from "../components/commons/DataTable/DataTable"
import { DataDialog } from "../components/commons/DataDialog/DataDialog"
import styled from "styled-components"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { fetchData } from "../store/actions"
import { ReducerState } from "../interfaces/api"
import { useAppDispatch } from "../store/store"

const FilterContainer = styled.div`
    display: flex;
    gap: 8px;

    & div {
        display: flex;
        justify-content: space-around;
        gap: 4px;
    }
    `

const NavigationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
`

export default function Main() {
    const dispatch = useAppDispatch()
    const data = useSelector((state: ReducerState) => state.app.data)
    const error = useSelector((state: ReducerState) => state.app.error)

    useEffect(() => {
        dispatch(fetchData())
        // fetch(`${API_URL}?per_page=5`).then(response => response.json()).then(data => console.log(data))
    }, [dispatch])

    return (
        <Container maxWidth="sm" sx={{marginTop: "4rem"}}>
            <FilterContainer>
                <NumberInput placeholder="Select color ID" fullWidth={true}/>
                <div>

                <Button>
                    Find
                </Button>
                <Button>
                    Reset
                </Button>
                </div>

            </FilterContainer>
            <DataTable data={data} />

        <DataDialog data={{
"id": 6,
"name": "blue turquoise",
"year": 2005,
"color": "#53B0AE",
"pantone_value": "15-5217"
        }} />

        <NavigationContainer>
        <Pagination count={10} color="primary" />

        </NavigationContainer>
        </Container>
    )


}