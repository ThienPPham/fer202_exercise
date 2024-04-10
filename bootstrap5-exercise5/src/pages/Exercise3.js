import '../App.css';

export default function Exercise3() {
    return (
        <div>
            <div className="slider">
                <h1>Let's test the grid</h1>
            </div>

            <div className='nav'>
                <ul className='list'>
                    <li style={{ color: 'blue' }}>Active</li>
                    <li style={{ color: 'blue' }}>Link</li>
                    <li style={{ color: 'blue' }}>Link</li>
                    <li>Disabled</li>
                </ul>
            </div>

            <div className='container container-exercise1'>
                <div className='row'>
                    <div className='col col-exercise1'>First col</div>
                    <div className='col col-exercise1'>Second col</div>
                </div>
                <div className='row'>
                    <div className='col col-exercise1'>col</div>
                    <div className='col col-exercise1'>col</div>
                    <div className='col col-exercise1'>col</div>
                </div>
                <div className='row'>
                    <div className='col col-exercise1'>col</div>
                    <div className='col col-exercise1'>col</div>
                    <div className='col col-exercise1'>col</div>
                    <div className='col col-exercise1'>col</div>
                </div>
            </div>

            <div className='footer'>
                <h1>Created by ABC</h1>
            </div>
        </div>
    );
}