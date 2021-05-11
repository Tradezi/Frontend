import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'


import "../styles/Overview.css"

function Overview( {userFunds, userStockDetails} ) {

    const funds = "$ " + String(parseFloat(userFunds).toFixed(2));
    const invested = "$ " + String(parseFloat(userStockDetails.invested).toFixed(2));
    const current = "$ " + String(parseFloat(userStockDetails.current).toFixed(2));
    const balance = "$ " + String(parseFloat(userStockDetails.balance).toFixed(2));
    return(
        <div className="overview">
            <div className="cards">
                <Card>
                  <Card.Body>
                    <Card.Title>Funds</Card.Title>
                    <Card.Text>
                        {funds}
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card>
                  <Card.Body>
                    <Card.Title>Invested</Card.Title>
                    <Card.Text>
                        {invested}
                    </Card.Text>
                  </Card.Body>
                </Card>
                
                <Card>
                  <Card.Body>
                    <Card.Title>Current</Card.Title>
                    <Card.Text>
                        {current}
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card>
                  <Card.Body>
                    <Card.Title>Balance</Card.Title>
                    <Card.Text>
                        {balance}
                    </Card.Text>
                  </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Overview
