import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddItemForm from '../components/AddItemForm';
import ItemCard from '../components/ItemCard';
import { ItemType } from '../types';

let sampleList: ItemType[] = [
    { id: 1, item: 'Butterbeer', quantity: '2 bottles', buyBy: '2024-05-15' },
    { id: 2, item: 'Bertie Bott\'s Every Flavor Beans', quantity: '1 box', buyBy: '2024-05-20' },
    { id: 3, item: 'Chocolate Frogs', quantity: '3 packs', buyBy: '2024-05-10' },
    { id: 4, item: 'Pumpkin Pasties', quantity: '5 pieces', buyBy: '2024-05-25' },
    { id: 5, item: 'Polyjuice Potion', quantity: '1 flask', buyBy: '2024-06-01' },
    { id: 6, item: 'Felix Felicis', quantity: '1 vial', buyBy: '2024-06-05' },
    { id: 7, item: 'Quill and Ink Set', quantity: '1 set', buyBy: '2024-05-30' },
    { id: 8, item: 'Marauder\'s Map', quantity: '1 copy', buyBy: '2024-06-10' },
    { id: 9, item: 'Remembrall', quantity: '1 piece', buyBy: '2024-06-15' },
    { id: 10, item: 'Hogwarts Robes', quantity: '1 set', buyBy: '2024-06-20' }
];

export default function Home() {
    const [items, setItems] = useState<ItemType[]>(sampleList);

    const addItem = (newItem: ItemType) => {
        setItems([...items, newItem]);
    };

    return (
        <>
            <Container className='mt-4'>
                <Row>
                    <Col md={6}>
                        <AddItemForm addNewItem={addItem} />
                    </Col>
                </Row>
                <Row className='mt-4'>
                    {items.map((item) => (
                        <Col key={item.id} md={3}>
                            <ItemCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}
