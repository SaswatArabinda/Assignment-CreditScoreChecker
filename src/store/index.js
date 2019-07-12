import { createStore } from "redux";
import { reducer } from "../reducers";
import { data } from '../data';

let mappedData = new Map();
data.forEach((ele, i) => {
    if (ele.aadharNo) {
        mappedData.set(ele.aadharNo, ele.score);
    }
    if (ele.phone) {
        mappedData.set(ele.phone, ele.score);
    }
});

let initialState = {
    singleSrcStore: {
        score: 0,
        noResult: false
    },
    batchReqStore: {
        selectedFile: "Choose a file",
        cols: [],
        rows: []
    },
    mappedData
};

export const store = createStore(reducer, initialState);