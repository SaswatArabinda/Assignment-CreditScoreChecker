import React from 'react';
import { data } from '../data/index';

export const DisplayResult = (props) => {
    let mappedData = new Map();
    data.forEach((ele, i) => {
        if (ele.aadharNo) {
            mappedData.set(ele.aadharNo, ele.score);
        }
        if (ele.phone) {
            mappedData.set(ele.phone, ele.score);
        }
    });
    return (
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Aadhar Card</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Score</th>
                </tr>
            </thead>
            <tbody>
                {props.rows.map((ele, i) => {
                    if (i > 1) {
                        if (ele[0] && mappedData.has(`${ele[0]}`)) {
                            return (<tr><th scope="row">{i - 1}</th><td>{ele[0] ? ele[0] : 'NA'}</td><td>{ele[1] ? ele[1] : 'NA'}</td><td>{mappedData.get(`${ele[0]}`)}</td></tr>)
                        } else if (ele[1] && mappedData.has(`${ele[1]}`)) {
                            return (<tr><th scope="row">{i - 1}</th><td>{ele[0] ? ele[0] : 'NA'}</td><td>{ele[1] ? ele[1] : 'NA'}</td><td>{mappedData.get(`${ele[1]}`)}</td></tr>)
                        }
                        else {
                            return (<tr><th scope="row">{i - 1}</th><td colSpan='3'><b>No result found for {ele[0] ? ele[0] : ele[1]} </b></td></tr>)
                        }
                    }
                    return false

                })}
            </tbody>
        </table>
    );
}