import React, { useState } from "react";
export default function Exercise3Data() {
    const companies = [
        { name: "Company One", category: "Finance", start: 1981, end: 2004 },
        { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
        { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
        { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
        { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
        { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
        { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
        { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
        { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
    ];

    const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

    const person = {
        name: "Costas",
        address: {
            street: "Lalaland 12"
        }
    };

    const names = [];
    companies.forEach(company => {
        names.push(<li key={company.name}>{company.name}</li>);
    });
    //1
    const company1987 = companies.filter(company => company.start > 1987);
    //2
    const companyRetail = companies.filter(company => company.category === 'Retail');
    //3
    const sortDate = companies.sort((a, b) => a.end - b.end);
    //4
    const sumAge = ages => ages.reduce((accumulation, currentValue) => accumulation + currentValue);

    //5
    const { name, category } = companies[0];
    const newObj = {
        name,
        category,
        print() {
            return `Tên: ${this.name}`;
        }
    };

    const result = newObj.print();
    //8
    const { address: { street } } = person;

    //9
    const [count, setCount] = useState(0); // Initialize state for count

    // Function to increment count and update state
    const incrementNumber = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <h2>Name of Each Company:</h2>
            <ul>{names}</ul>

            <h2>Name of each company start after 1987</h2>
            <ul>{company1987.map(company => `Name: ${company.name}, Start: ${company.start}`).join(' ;')}</ul>

            <h2>Name of company with category Retail</h2>
            <ul>{companyRetail.map(company => `Name: ${company.name}, Category: ${company.category}`).join(' ;')}</ul>

            <h2>Ascending order Date</h2>
            <ul>{sortDate.map(company =>
                <li key={company.name}>{company.name} - EndYear: {company.end}</li>)}
            </ul>

            <h2>Sum of age</h2>
            <p>Sum of Ages: {sumAge(ages)}</p>

            <h2>New object
                <p>{result}</p>
            </h2>

            <h2>Street:</h2>
            <p>{street}</p>

            <h2>Incremented Number:</h2>
            <p>{count}</p>
            <button onClick={incrementNumber}>Increment</button>
        </div>
    )


}