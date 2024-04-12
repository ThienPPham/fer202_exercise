import '../App.css'
function Header() {
    return (
        <div className='header'>
            <div className='navbar1'>
                <img src='/images/e26f21bb42a8278e6b2890d43364591c.jpg' />
            </div>
            <div>
                <ul className='navbar2'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;