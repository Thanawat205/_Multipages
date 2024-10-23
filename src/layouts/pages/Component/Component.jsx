import './Component.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Add from './component/Add/Add'
import Counter from './component/Counter/Counter'
import Temperatures from './component/Temperature/Temperatures'
import Timer from './component/Timer/Timer'


function Component() {
    return (
        <div className="component">
            <div className="main-container">
                <h1 className="title">REACT COMPONENT</h1>
                <div className="components-container">
                    <div className="counter"><Counter name="Counter" value={0}/></div>
                    <div className="add"><Add aValue={0} bValue={0}/></div>
                    <div className="timer"><Timer/></div>
                    <div className="temperatures"><Temperatures/></div>
                </div>
            </div>
        </div>
    )
}

export default Component