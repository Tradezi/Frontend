import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import "../styles/Overview.css"

function Overview() {
    return(
        <div className="overview">
            <h1>Portfolio</h1>
            <div className="cards">
                <Card>
                  <Card.Body>
                    <Card.Title>Invested: </Card.Title>
                    <Card.Text>
                        ₹ 20,000.00
                    </Card.Text>
                  </Card.Body>
                </Card>
                
                <Card>
                  <Card.Body>
                    <Card.Title>Current: </Card.Title>
                    <Card.Text>
                        ₹ 24,000.00
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card>
                  <Card.Body>
                    <Card.Title>Net Balance: </Card.Title>
                    <Card.Text>
                        ₹ 4,000.00
                    </Card.Text>
                  </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Overview
