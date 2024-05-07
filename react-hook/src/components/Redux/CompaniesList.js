import { removeCompany, increment } from './store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
function CompaniesList() {
    const companies = useSelector(state => state.companies);
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter = {counter}</h1>
            <button onClick={() => dispatch(increment())}>
                increment
            </button>
            <h1>companies</h1>
            <ul>
                {companies.map(company => (
                    <li key={companies.id}>
                        {company.name} - {company.category}
                        <button onClick={() => dispatch(removeCompany(company.id))}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CompaniesList;