import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Listing, MapContainer } from '../../components'
import { listingData } from '../../helpers';

import './styles.css';

class Home extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            listings: listingData()
        }
    }

    render() {
        let { listings } = this.state;

        return (
           <Container fluid>
                <Row>
                    <Col md={6} className="listings-container">
                        {
                            listings.map((data, index) => {
                                console.log(data)
                                return (
                                    <Listing listing={data} />
                                )
                            })
                        }
                    </Col>
                    <Col md={6} className="map-container">
                        <MapContainer />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;