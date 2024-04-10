import '../App.css'

export default function Exercise4() {
    return (
        <div>
            <div className='header'>
                <div className='navbar1'>
                    <img src={require('../images/e26f21bb42a8278e6b2890d43364591c.jpg')}/>
                </div>
                <div>
                    <ul className='navbar2'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className='content'>
                <div className='subcontent1'>
                    <h1>About</h1>
                    <p>This is about section of the website</p>
                </div>
                <div className='subcontent2'>
                    <h1>Contact</h1>
                    <p>For any inquiries, please contact us at example@example.com</p>
                </div>
            </div>
            <div className='foot'>
                    <p>© 2023 Website. All rights reserved</p>
            </div>
        </div>
    );
}