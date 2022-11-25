import React from "react";
import Card from 'react-bootstrap/Card';


export const CardDetail = (CardDetailProps) => {
    return(

        <Card style={{ width: '75rem'}}>
            <Card.Body>
                <Card.Title>{CardDetailProps.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{CardDetailProps.subtitle}</Card.Subtitle>

                <Card.Text>
                   {CardDetailProps.body}
                </Card.Text>
            </Card.Body>
        </Card>

    );
}