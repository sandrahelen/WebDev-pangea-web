import React from "react";
import {Table} from "react-bootstrap";
import SearchField from "react-search-field";

const AlleLand = () => {
    return (
        <>
            <h1>Alle land</h1>
            <SearchField placeholder="Search..." classNames="search"/>
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
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                </tbody>
            </Table>
        </>
        );
};
export default AlleLand;