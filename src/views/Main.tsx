import { NumberInput } from "../components/commons/NumberInput/NumberInput"
import { Button } from "../components/commons/Button/Button"
import { Container, Pagination } from "@mui/material"
import { DataTable } from "../components/commons/DataTable/DataTable"
import { DataDialog } from "../components/commons/DataDialog/DataDialog"
import styled from "styled-components"
import { useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { fetchData } from "../store/actions"
import { ReducerState } from "../interfaces/api"
import { useAppDispatch } from "../store/store"
import { ITEMS_PER_PAGE } from "../utils/constants"
import { getQueryParams, updateUrl } from "../utils/services"

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
    const appSelector = useSelector((state: ReducerState) => state.app)
    const modalSelector = useSelector((state: ReducerState) => state.modal)
    const paginationRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const urlParams = getQueryParams()
        if(urlParams?.page) {
            const pageNo = parseInt(urlParams.page as string) + 1
            console.log(pageNo)
            paginationRef.current?.querySelectorAll("button")[pageNo].click()
        }
        dispatch(fetchData(urlParams))
        // fetch(`${API_URL}?per_page=5`).then(response => response.json()).then(data => console.log(data))
    }, [])

    return (
        <Container maxWidth="sm" sx={{marginTop: "4rem"}}>
            <FilterContainer>
                <NumberInput placeholder="Select color ID" fullWidth={true} inputRef={inputRef}/>
                <div>

                <Button onClick={() => {
                    updateUrl({id: inputRef.current?.value})
                    dispatch(fetchData({id: inputRef.current?.value}))
                    }}>
                    Find
                </Button>
                <Button onClick={() => {
                    updateUrl({})
                    if(inputRef.current?.value){
                        inputRef.current.value = ""
                    }
                    dispatch(fetchData())}}>
                    Reset
                </Button>
                </div>

            </FilterContainer>
            <DataTable data={appSelector.data} />

        <DataDialog open={modalSelector.open} data={modalSelector.data} />

        <NavigationContainer>
            {
                appSelector.total > ITEMS_PER_PAGE && <Pagination ref={paginationRef} page={appSelector.page} count={appSelector.totalPages} color="primary" onChange={(_, page) => {
                    updateUrl({page: page})
                    dispatch(fetchData({page: page}))}} />

            }
        

        </NavigationContainer>
        </Container>
    )


}