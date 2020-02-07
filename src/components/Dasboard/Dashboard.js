import React from 'react';
import './Dashboard.css';

// input
import InputField from './InputField/InputField';
import ShowNotes from './ShowNotes/ShowNotes';


const Dashboard = () => {
    return (
        <div>
            <div className="notes">
                    <h1 className="notes__header--title">Notes</h1>
                    <h3 className="notes__header--subtitle">Which remember your memories</h3>
            </div>

            <div className="input--field">
                <InputField/>
            </div>
            
            <div className="notes--field">
                <ShowNotes/>
            </div>
            
        </div>
    )
}


export default Dashboard;