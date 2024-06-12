"use client";

import React, { useState } from 'react';
import { db } from '../firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [selectedChip, setSelectedChip] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "formSubmissions"), {
                ...formData,
                selectedChip: selectedChip || "None",
                timestamp: new Date()
            });
            console.log("Document written with ID: ", docRef.id);
            toast.success(`Hello ${formData.name}, thanks for connecting with me. Your message was submitted.`);
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const handleChipClick = (chip) => {
        setSelectedChip(chip);
    };

    return (
        <div>
            <ToastContainer />
            <div className='text-center my-5' id='contact'>
                <h1 className='fw-bold' style={{ fontSize: '2.5rem' }}>Contact</h1>
                <p className="gradient-text-contact fw-bold">For more details contact me</p>
            </div>

            <div className='d-flex justify-content-center'>
                <div className="card cardCustom">
                    <h2 className='fw-bold mb-3' style={{ fontSize: '1.5rem' }}>I'm interested in...</h2>
                    <div className="mb-3">
                        <button className={`btn chip ${selectedChip === "Ui/Ux" ? 'chipSelected' : ''}`} onClick={() => handleChipClick("Ui/Ux")}>Ui/Ux</button>
                        <button className={`btn chip ${selectedChip === "Web design" ? 'chipSelected' : ''}`} onClick={() => handleChipClick("Web design")}>Web design</button>
                        <button className={`btn chip ${selectedChip === "Graphic" ? 'chipSelected' : ''}`} onClick={() => handleChipClick("Graphic")}>Graphic</button>
                        <button className={`btn chip ${selectedChip === "Design system" ? 'chipSelected' : ''}`} onClick={() => handleChipClick("Design system")}>Design system</button>
                        <button className={`btn chip ${selectedChip === "Other" ? 'chipSelected' : ''}`} onClick={() => handleChipClick("Other")}>Other</button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input type="text" className="form-control formControl" id="name" name="name" placeholder="Your name" required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control formControl" id="email" name="email" placeholder="Your email" required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control formControl" id="message" name="message" rows="4" placeholder="Your message" required
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn buttonPrimary">
                            <img src='/send.png' alt="send" width={20} height={20} className="me-2" />
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
