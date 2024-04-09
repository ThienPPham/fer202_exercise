export default function Exercise2Data() {
    const sum = (array) => array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const product = (array) => array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

    const array = [1, 2, 3, 4];

    return (
        <div>
            <h1>Operation Array</h1>
            <p>Array: {array.join(', ')}</p>
            <p>sum: {sum(array)}</p>
            <p>product: {product(array)}</p>
        </div>
    );
}