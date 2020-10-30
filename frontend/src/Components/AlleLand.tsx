import React, {useState} from "react";
import {Table} from "react-bootstrap";
import {gql, useQuery} from "@apollo/client";
import Pagination from "react-js-pagination";
//import Pagination from "react-bootstrap/Pagination";

const GET_COUNTRIES = gql`
    query countries ($filter: String!, $search: String!, $sort: Int, $skip: Int) {
        countries (filter: $filter, search: $search, sort: $sort, skip: $skip){
            country
            continent
            city
            dish
        }
    }
`;

const AlleLand = () => {
    const [activePage, setActivePage] = useState(1);
    const [sort, setSort] = useState(1);

    function handlePageChange(pageNumber:number) {
        console.log(`active page is ${pageNumber}`)
        setActivePage(pageNumber);
    }

    function filterContinent(continent:string) {
        sessionStorage.setItem('continent', continent);
        window.location.reload();
    }
    function sortCountry() {
        if (sort === 1) {
            setSort(-1);
        }
        else {
            setSort(1);
        }
        console.log(sort)
    }

let input:any;
    const { data, error, loading } = useQuery(GET_COUNTRIES,
        {variables: { filter: sessionStorage.getItem('continent') || " ",
                search: sessionStorage.getItem('search') || " ",
                sort: sort,
                skip: activePage !== 1 ? (activePage - 1) * 10 : 0
                }},);
    if (error) return <p>Error! ${error}</p>
    return (
        <>

            <h1>Alle land</h1>
            <button className={"Knapp"} onClick={() => filterContinent(" ")}>Alle land</button>
            <button className={"Knapp"} onClick={() => filterContinent("Asia")}>Asia</button>
            <button className={"Knapp"} onClick={() => filterContinent("Europe")}>Europe</button>
            <button className={"Knapp"} onClick={() => filterContinent("Africa")}>Africa</button>
            <button className={"Knapp"} onClick={() => filterContinent("Oceania")}>Oceania</button>
            <button className={"Knapp"} onClick={() => filterContinent("North America")}>North America</button>
            <button className={"Knapp"} onClick={() => filterContinent("South America")}>South America</button>
            <button className={"Knapp"} onClick={() => filterContinent("Antarctica")}>Antactica</button>
             <button className={"Knapp"} onClick={() => sortCountry()}>Sorter land</button>

            <form
                onSubmit={e => {
                    e.preventDefault();
                    sessionStorage.setItem('search', input.value);
                    window.location.reload();
                }}
                >
                    <input
                        ref={node => {
                            input = node;
                        }}
                        type={"text"}
                        name={"search"}
                        placeholder={"Skriv her"}
                    />
                    <input type='submit' value="Søk land"/>
                </form>


            {error ? <p>Oh no! {error}</p> : null}
            {loading ? (<p>Loading ...</p>) : (
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>Land</th>
                    <th>Hovedsted</th>
                    <th>Kontinent</th>
                    <th>Nasjonalrett</th>
                </tr>
                </thead>
                <tbody>

                {data.countries.map((countryData: { country: React.ReactNode; city: React.ReactNode; continent: React.ReactNode; dish: React.ReactNode; }) => (
                    <tr>
                        <td>{countryData.country}</td>
                        <td>{countryData.city}</td>
                        <td>{countryData.continent}</td>
                        <td>{countryData.dish}</td>
                    </tr>
                ))}

                </tbody>
            </Table>

            )}
            <Pagination totalItemsCount={243} onChange={handlePageChange.bind(activePage)} activePage={activePage}/>
        </>
        );
};
export default AlleLand;
