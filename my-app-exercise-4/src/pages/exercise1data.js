export default function Exercise1Data() {
    var people = [
        { name: 'Jack', age: 50 },
        { name: 'Michael', age: 9 },
        { name: 'John', age: 40 },
        { name: 'Ann', age: 19 },
        { name: 'Elisabeth', age: 16 }
    ];
    const firstTeenager = people.find(person => person.age >= 10 && person.age <= 20);
    const allTeenager = people.filter(person => person.age >= 10 && person.age <= 20);
    const everyTeenager = people.every(person => person.age >= 10 && person.age <= 20);
    const AnyTeenager = people.some(person => person.age >= 10 && person.age <= 20);
    return (
        <div>
            <h2>First Teenager: </h2>
            {firstTeenager && (
                <p>Name: {firstTeenager.name}, Age: {firstTeenager.age}</p>
            )}
            <h2>All Teenager: </h2>
            <p>{allTeenager.map(teenager => `Name : ${teenager.name}, Age :${teenager.age}`).join(' ; ')}</p>
            <h2>All are Teenager: </h2>
            <p>{everyTeenager ? "True" : "False"}</p>
            <h2>Any are Teenager: </h2>
            <p>{AnyTeenager ? "True" : "False"}</p>
        </div>
    );
}