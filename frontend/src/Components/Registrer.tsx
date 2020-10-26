import React from "react";

const Registrer = () => {
    function Registrer() {
        sessionStorage.setItem('status', 'innlogget');
    }

    return (
        <>
            <form onSubmit={Registrer}>
                <h1>Registrer ny bruker</h1>
                <p>Brukernavn:</p>
                <input type='text'/>
                <input type='submit' value="Registrer"/>
            </form>

        </>
        );
};
export default Registrer;