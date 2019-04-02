import React from 'react';

export default props => {
    const {info} = props;
    return (
        <div>
            <img src={info['im:image'][2].label} alt="Movie Image"/>
            <h3>{info['im:name'].label}</h3>
            <p>{info.summary.label}</p>
            <div>
                <video height="200" controls="true" src={info.link[1].attributes.href} type="video/mp4"></video>
            </div>
        </div>
    );
}
