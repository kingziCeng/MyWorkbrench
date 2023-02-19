import { Link } from "react-router-dom";

function Topbar() {
    return (<div>
        <div style={{ display: 'flex' }}>
            <Link to="/first_one">
                <div style={{ width: '100px', height: '65px', background: 'white', textAlign: 'center', cursor: 'pointer' }}>
                    first-one
                </div>
            </Link>
            <Link to="/first_two">
                <div style={{ width: '100px', height: '65px', background: 'white', textAlign: 'center', cursor: 'pointer', marginLeft: '10px' }}>
                    first-two
                </div>
            </Link>
        </div>
    </div>)
}

export default Topbar;