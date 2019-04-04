import React from 'react';
import { Card } from 'react-bootstrap';

import './styles.css';

const Listing = ({listing}) => {
    return ( 
        <div className="listing">
            <div className="listing-image" style={{background: `url(${listing.first_photo.url}) no-repeat center center`}}></div>
            <div className="listing-body">
                <div className="listing-title">
                    <h5>
                        <a href="#">{listing.display_name}</a>
                    </h5>
                </div>
            </div>
        </div>
    );
};


export default Listing; 