import React from 'react';
import {Card} from 'react-bootstrap';

const PrayerCard = (prayer) => {
    return (
        <Card style={{ width: '11rem'}} className="mb-2 text-center">
            <Card.Body>
                <Card.Title style={{fontSize: 14}}>{prayer.soulName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" style={{fontSize: 12}}>from: {prayer.requestor}</Card.Subtitle>
            </Card.Body>
        </Card>
    );
};
export default PrayerCard;