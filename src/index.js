import React from 'react';
import ReactDOM from 'react-dom';

const user = {
    name: 'Jen',
    luckyNumber: luckyNumber()
}

function luckyNumber() {
    const randomNumber = Math.ceil(Math.random() * 1000);
    return randomNumber;
}

const greeting = (user) => {
console.log('user',user)
    return (
        <div className="container">
            <h1>Hello {user.name},</h1>
            <h2 className="text-muted">Your lucky number is: {user.luckyNumber}</h2>
        </div>
    );
}

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);
