import React from 'react';
import { SingleSourceResult } from './singleSourceResult';
import { data } from '../data/index';


export class SingleSourceMain extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            score: 0,
            noResult: false
        }
    }
    handleClick = (event) => {
        let aadharNo = document.getElementById('aadharInput').value;
        let phone = document.getElementById('phoneNumberInput').value;
        if (!phone && !aadharNo) {
            return false;
        }
        let result = data.filter(entry => entry.aadharNo === aadharNo || entry.phone === phone ? entry : '');

        this.setState({ 'noResult': result.length ? false : true });
        this.setState({ score: (result && result[0] && result[0].score) ? result[0].score : 0 })
    }
    render() {
        let { score, noResult } = this.state;

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