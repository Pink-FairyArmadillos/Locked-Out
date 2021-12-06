import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Entries = () => {
    const [url, setURL] = useState('');
    const [password, setPassword] = useState('');
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        console.log(url, password)
    }, [url, password]);

    const userID = useSelector((state) => state.userID);

    const handleSaveEntries = () => {
        fetch(`/api/addEntry?id=6&urlEntry=${url}&userID=${userID}&passwordEntry=${password}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then(data => console.log("Successful", data));
    }

    return (
        <React.Fragment>
            <label>Url</label>
            <input url={url} onChange={(e, url) => setURL(url)}></input>
            <label>Password</label>
            <input password={password} onChange={() => setPassword("is setpassword working???")}></input>
            <button onClick={() => handleSaveEntries()}>Save</button>
            <table>
                <th>
                    <tr>

                    </tr>
                </th>
                <tr>

                </tr>
            </table>
        </React.Fragment>
    );
}

export default Entries