import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import "../styles/Overview.css"

function Overview() {
    return(
        <div className="overview">
            <Card>
              <Card.Body>
                <Card.Title>Invested: </Card.Title>
                <Card.Text>
                    ₹ 20,000.00
                </Card.Text>
              </Card.Body>
            </Card>
        </div>
    )
}

export default Overview
