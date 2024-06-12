import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

function Messages() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'formSubmissions'));
                const messagesData = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    const message = {
                        id: doc.id,
                        name: data.name || '', 
                        message: data.message || '', 
                        time: data.time ? data.time.toDate().toLocaleTimeString() : '', 
                        selectedChip: data.selectedChip || '',
                        email: data.email || '',
                    };
                    return message;
                });
                setMessages(messagesData);
            } catch (error) {
                console.error('Error fetching messages: ', error);
            }
        };

        fetchMessages();

        // Clean up function
        return () => {
            // Any cleanup tasks can go here
        };
    }, []);

    return (
        <div className="container mt-4 message-container" style={{ maxHeight: '600px', overflowY: 'auto' }}>
            {messages.map(message => (
                <div key={message.id} className="d-flex align-items-start gap-3 pb-4">
                    
                    <div className="flex-grow-1 p-3 border bg-light rounded message-item">
                        <div className="d-flex align-items-center mb-2">
                            <span className="fw-bold text-primary">{message.name}</span>
                            <span className="ms-2 text-muted">{message.email}</span>
                            <span className="ms-auto text-muted">{message.time}</span>
                        </div>
                        <p className="mb-1 message-content">{message.message}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Messages;
