import React from 'react';
import { SingleSourceResult } from './singleSourceResult';
import { store } from '../store';
import { getSingleScore } from '../actions';


export class SingleSourceMain extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (event) => {
        const { mappedData } = store.getState();
        const aadharNo = document.getElementById('aadharInput').value;
        const phone = document.getElementById('phoneNumberInput').value;
        if (!phone && !aadharNo) {
            return false;
        }

        let result = mappedData.has(aadharNo) ? mappedData.get(aadharNo) : '';
        result = !result && mappedData.has(phone) ? mappedData.get(phone) : result;

        store.dispatch(getSingleScore({
            score: (result) ? result : 0,
            noResult: result ? false : true
        }))
    }
    render() {
        let { score, noResult } = store.getState().singleSrcStore;

        return (
            <div id="main" className="col-md-9 col-sm-9">
                <h2>Welcome to single source page.</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="aadharInput">Aadhar card number</label>
                        <input type="text" className="form-control" id="aadharInput" placeholder="Aadhar card number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumberInput">Phone number</label>
                        <input type="text" className="form-control" id="phoneNumberInput" placeholder="Phone number" />
                    </div>
                </form>
                {/* <button type="button" className="btn btn-light">Light</button> */}
                <button type="button" className="btn btn-dark" onClick={this.handleClick}>Submit</button>
                {!!score && <SingleSourceResult score={score} />}
                {noResult && (() => <div>No result</div>)()}
            </div>
        )
    }
}