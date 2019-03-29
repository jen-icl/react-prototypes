import React, {Component} from 'react';
import ContactCard from './contact_card';

export default props => {
    const {contacts} = props;
    const list = contacts.map((item, index) => {
        return <ContactCard key={index} contact={item}/>
    });
    return (
        <div className="col-8">
            <div className="row">
                {list}
            </div>
        </div>
    );
}
