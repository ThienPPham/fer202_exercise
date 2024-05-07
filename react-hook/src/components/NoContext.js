const C = (props) => {
    return <h1>{props.name}</h1>
}

const B = (props) => {
    return (
        <C name={props.name} />
    )
}

const A = (props) => {
    return (
        <C name={props.name} />
    )
}

const NoContext = (props) => {
    return (
        <div>
            <A name={props.name} />
        </div>
    );
}

export default NoContext;