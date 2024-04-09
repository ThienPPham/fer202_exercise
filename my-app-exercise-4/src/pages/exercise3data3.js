import React from 'react';

function parseQueryParameters(url) {
    const urlObject = new URL(url);
    const queryParams = {};

    for (const [key, value] of urlObject.searchParams.entries()) {
        queryParams[key] = value;
    }

    return queryParams;
}

function DisplayQueryParameters({ url }) {
    const queryParams = parseQueryParameters(url);

    return (
        <div>
            <h2>Query Parameters:</h2>
            <ul>
                {Object.entries(queryParams).map(([key, value]) => (
                    <li key={key}>
                        <strong>{key}:</strong> {value}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DisplayQueryParameters;