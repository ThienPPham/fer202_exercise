import { useState } from "react";

const CRUDCompany = (props) => {
    const [inputText, setInputText] = useState('');
    const [filterCompanies, setFilterCompanies] = useState(props.companies);
    const [companies, setCompanies] = useState(props.companies)
    const addNewCompany = () => {
        const newCompany = {
            name: "Company Ten", category: "Finance", start: 1981, end: 2004
        };
        const updateNewCompany = [...companies, newCompany];
        setCompanies(updateNewCompany);
    }

    const deleteCompany = (id) => {
        const filter = companies.filter(company => company.id !== id);
        setCompanies(filter);
    }
    const updateCompany = (id) => {
        const newCompany = {
            id: Math.random(), name: "Company Ten", category: "Finance", start: 1981, end: 2004
        };
        const updateCompanies = companies.map((company) => {
            if (company, id === id)
                return { ...company, name: 'CompanyTen' };
            return company;
        })
        setCompanies(updateCompanies);
    }
    const handleSubmit = () => {
        const filteredCompanies = props.companies.filter(company => company.start > inputText);
        setFilterCompanies(filteredCompanies);
    }
    const handleInputChange = (event) => {
        setInputText(event.target.value);
    }
    return (
        <>
            {
                companies.map((company) => (
                    <div key={company.id}>
                        <h1>{company.name}</h1>
                        <h1>{company.id}</h1>
                        <button onClick={() => updateCompany(company.id)}>
                            Click me
                        </button>
                    </div>
                ))
            }
        </>
    );

}

export default CRUDCompany;