function SumUnknow(...numbers){
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

function SumDisplay(){
    const numbers = [1, 2, 3, 4, 5];

    return(
        <div>
            <h2>Sum of Numbers</h2>
            <p>{SumUnknow(...numbers)}</p>
        </div>
    );
}

export default SumDisplay;