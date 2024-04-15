import React, { useState } from 'react';

const CompanyRender = (props) => {
    const [inputText, setInputText] = useState('');
    const [filterCompanies, setFilterCompanies] = useState(props.companies);

    const handleSubmit = () => {
        const filter = props.companies.filter (company => company.start>inputText);
        setFilterCompanies(filter);
    }
    const handleInputChange = (event) => {
        setInputText(event.target.value);
    }

    return (
        <>
        <input type='text' value={inputText} onChange={handleInputChange} />
        <button onClick={(e) => handleSubmit()}>
            Click me
        </button>
        {
            filterCompanies.map ((company) => (
                <h1>{company.name}</h1>
            ))
        }
        </>
    )
};

export default CompanyRender;