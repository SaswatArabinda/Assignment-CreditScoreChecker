import React from 'react';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    return (
        <div id="mySidebar" className="sidebar col-md-3 col-sm-3">
            <Link to='/Single-Source'><span className="icon-text">Single Score</span></Link>
            <Link to='/Batch-Request'><span className="icon-text">Batch request</span></Link>
        </div>
    )
}