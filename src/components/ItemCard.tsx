import { useState } from 'react';
import { ItemType } from '../types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

type ItemCardProps = {
    item: ItemType;
};

export default function ItemCard({ item }: ItemCardProps) {
    // State to track the stock status
    const [inStock, setInStock] = useState(false);

    // Function to handle toggling the stock status
    const handleCompleteToggle = () => {
        setInStock(!inStock);
    };

    // Determine the button text based on the stock status
    const buttonText = inStock ? 'Own/Buy' : 'Own/Buy';

    return (
        <Card className='my-3' bg={inStock ? 'success' : 'warning'}>
            <Card.Header>{item.buyBy}</Card.Header>
            <Card.Body>
                <Card.Title>{item.item}</Card.Title>
                <Card.Text>{inStock ? <p>You already have this!</p> : <p>Need to Buy</p>}</Card.Text>
                <Card.Subtitle>{item.quantity}</Card.Subtitle>
            </Card.Body>
            {/* Button to toggle stock status */}
            <Button onClick={handleCompleteToggle} variant="outline-info" style={{ color: 'black' }}>
                {buttonText}
            </Button>
        </Card>
    );
}