import React from 'react';
import Table from './table';

const students = [
    {name: 'Bruce Lee', course: 'Say water', grade: 90},
    {name: 'Jacky Chan', course: 'Get injured', grade: 85},
    {name: 'Ip Man', course: 'Yong Chun', grade: 99},
];

const App = () => {

    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    );
}

export default App;
