import '../App.css'
export default function () {
    return (
        <div>
            <div className='slider'>
                <h1 className='h1-new'>My First Bootstrap Page</h1>
            </div>
            <div className='container container-exercise1'>
                <div className='row'>
                    <div className='col'>
                        <img src={require('../images/html.png')}></img>
                    </div>
                    <div className='col'>
                        <img src={require('../images/html.png')}></img>
                    </div>
                    <div className='col'>
                        <img src={require('../images/html.png')}></img>
                    </div>
                </div>
            </div>
        </div>

    );
}