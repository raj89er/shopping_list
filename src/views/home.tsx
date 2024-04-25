import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import AddItemForm from "../components/AddItemForm";
import ItemCard from "../components/ItemCard";
import { ItemType, AddItemFormType } from "../types";

let sampleList: ItemType[] = [
    { id: 1, item: "Butterbeer", quantity: "2 bottles", buyBy: "2024-05-15" },
    {
        id: 2,
        item: "Bertie Bott's Every Flavor Beans",
        quantity: "1 box",
        buyBy: "2024-05-20",
    },
    {
        id: 3,
        item: "Chocolate Frogs",
        quantity: "3 packs",
        buyBy: "2024-05-10",
    },
    {
        id: 4,
        item: "Pumpkin Pasties",
        quantity: "5 pieces",
        buyBy: "2024-05-25",
    },
    {id: 5,
        item: "Polyjuice Potion",
        quantity: "1 flask",
        buyBy: "2024-06-01"},
    { id: 6, item: "Felix Felicis", quantity: "1 vial", buyBy: "2024-06-05" },
    {id: 7,item: "Quill and Ink Set", quantity: "1 set", buyBy: "2024-05-30" },
    { id: 8, item: "Marauder's Map", quantity: "1 copy", buyBy: "2024-06-10" },
    { id: 9, item: "Remembrall", quantity: "1 piece", buyBy: "2024-06-15" },
    { id: 10, item: "Hogwarts Robes", quantity: "1 set", buyBy: "2024-06-20" },
];

export default function Home() {
    const [items, setItems] = useState<ItemType[]>(sampleList);

    const [newItem, setNewItem] = useState({ item: '', quantity: '', buyBy: '' });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewItem({ ...newItem, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const newItemWithId = { ...newItem, id: items.length + 1 }
        setItems( [...items, newItemWithId] )
        setNewItem({ item: '', quantity: '', buyBy: '' })
    };

    return (
        <>
            <Container className="mt-4">
                <Row>
                    <Col md={6}>
                        <Card className="mt-5">
                            <Card.Header>Add New Item:</Card.Header>
                            <Card.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Label>Item Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter item name"
                                        name="item"
                                        value={newItem.item}
                                        onChange={handleInputChange}
                                    />
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter quantity"
                                        name="quantity"
                                        value={newItem.quantity}
                                        onChange={handleInputChange}
                                    />
                                    <Form.Label>Buy By</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="buyBy"
                                        value={newItem.buyBy}
                                        onChange={handleInputChange}
                                    />
                                    <Button className="w-100 mt-3 btn btn-dark"
                                        type="submit"
                                    >
                                        Add Item
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-4">
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
