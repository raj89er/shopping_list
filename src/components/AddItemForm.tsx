
// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';
// import { AddItemFormType , ItemType } from '../types';

// type AddItemFormProps = {
//     addNewItem: (newItem: ItemType) => void;
// };

// export default function AddItemForm({ addNewItem }: AddItemFormProps) {
//     const [newItem, setNewItem] = useState<AddItemFormType>({ item: '', quantity: '', buyBy: '' });

//     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setNewItem({ ...newItem, [event.target.name]: event.target.value });
//     };

//     const handleSubmit = (event: React.FormEvent) => {
//         event.preventDefault();
//         addNewItem(newItem);
//         setNewItem({ item: '', quantity: '', buyBy: '' })
//     };

//     return (
//         <>
//             <Card className='mt-5'>
//                 <Card.Header>Add New Item:</Card.Header>
//                 <Card.Body>
//                     <Form onSubmit={handleSubmit}>
//                         <Form.Label>Item Name</Form.Label>
//                         <Form.Control
//                             type='text'
//                             placeholder='Enter item name'
//                             name='item'
//                             value={newItem.item}
//                             onChange={handleInputChange}
//                         />
//                         <Form.Label>Quantity</Form.Label>
//                         <Form.Control
//                             type='text'
//                             placeholder='Enter quantity'
//                             name='quantity'
//                             value={newItem.quantity}
//                             onChange={handleInputChange}
//                         />
//                         <Form.Label>Buy By</Form.Label>
//                         <Form.Control
//                             type='date'
//                             name='buyBy'
//                             value={newItem.buyBy}
//                             onChange={handleInputChange}
//                         />
//                         <Button className='w-100 mt-3 btn btn-dark' type='submit'>
//                             Add Item
//                         </Button>
//                     </Form>
//                 </Card.Body>
//             </Card>
//         </>
//     );
// }
