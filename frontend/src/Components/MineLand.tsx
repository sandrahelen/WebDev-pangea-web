import React from "react";
import { gql, useQuery } from '@apollo/client';
import {Table} from "react-bootstrap";

const GET_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            username
        }
    }
`;

//const MineLand = () => {
function MineLand() {

    const { loading, error, data } = useQuery(GET_USER, {variables: { username: 'test5' },});
  if (loading) return null;
  if (error) return `Error! ${error}`;

    return (
        <h1>Hello {data.user.username}!</h1>

        );
};
export default MineLand;

/*
<>
            <h1>Mine land</h1>


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
 */