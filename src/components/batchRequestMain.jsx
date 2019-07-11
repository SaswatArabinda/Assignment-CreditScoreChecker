import React from 'react';
import { ExcelRenderer } from 'react-excel-renderer';
import { DisplayResult } from './displayResult';

export class BatchRequestMain extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onFileSelection = this.onFileSelection.bind(this);
        this.fileInput = React.createRef();
        this.state = {
            selectedFile: "Choose a file",
            cols: [],
            rows: []
        }
    }
    handleSubmit(event) {
    }

    onFileSelection(event) {
        let fileInput = event.target;
        let fileName = fileInput.value.split("\\").pop();
        this.setState({
            selectedFile: fileName
        });


        let fileObj = this.fileInput.current.files[0];
        //just pass the fileObj as parameter
        ExcelRenderer(fileObj, (err, resp) => {
            if (err) {
                console.log(err);
            }
            else {
                this.setState({
                    cols: resp.cols,
                    rows: resp.rows
                });
            }
        });
    }

    render() {
        let { selectedFile, rows } = this.state;
        return (
            <div id="main" className="col-md-9 col-sm-9">
                <h2>Welcome to batch request page.</h2>
                <div className="input-group mb-3">
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="inputGroupFile02" ref={this.fileInput} onChange={this.onFileSelection} />
                        <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="inputGroupFileAddon02">{selectedFile}</label>
                    </div>
                    <div className="input-group-append">
                        <span className="input-group-text" id="inputGroupFileAddon02">Upload</span>
                    </div>
                </div>

                {rows && rows.length > 1 && <DisplayResult {...this.state} />}
            </div>
        )
    }

}