"use client";

import React, { useState, useEffect } from "react";
import { auth, db } from '../firebase-config';
import { signOut } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import Login from "./Login";
import Messages from "./Messages";

function NavTest() {
    const [isOpen, setIsOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [isMessageDialogOpen, setIsMessageDialogOpen] = useState(false);
    const [documentCount, setDocumentCount] = useState(0);

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        setLoggedIn(true);
      }
    }, []);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
    };

    const openDialog = () => {
      setShowDialog(true);
    };

    const closeDialog = () => {
      setShowDialog(false);
    };

    const handleLogout = async () => {
      try {
        await signOut(auth);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setLoggedIn(false);
      } catch (error) {
        console.error(error);
      }
    };

    const handleMessagesClick = () => {
      setIsMessageDialogOpen(true);
    };

    useEffect(() => {
      const fetchDocumentCount = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, 'formSubmissions'));
          const count = querySnapshot.size;
          setDocumentCount(count);
        } catch (error) {
          console.error('Error fetching document count:', error);
        }
      };

      fetchDocumentCount();
    }, []);

    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm p-4">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="Movini.jpg" alt="logo" width="100px"/>
            </a>
            <button className="navbar-toggler" type="button" onClick={toggleMenu}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className="nav-link" href='#'>Home</a></li>
                <li className="nav-item"><a className="nav-link" href='#about'>About</a></li>
                <li className="nav-item"><a className="nav-link" href='#tech'>Tech Stack</a></li>
                <li className="nav-item"><a className="nav-link" href='#project'>Projects</a></li>
                <li className="nav-item"><a className="nav-link" href='#education'>Education</a></li>
                <li className="nav-item"><a className="nav-link" href='#qualification'>Qualification</a></li>
                <li className="nav-item"><a className="nav-link" href='#experience'>Experience</a></li>
                <li className="nav-item"><a className="nav-link" href='#contact'>Contact</a></li>
                {!loggedIn && <li className="nav-item"><a className="nav-link" onClick={openDialog}>Login</a></li>}
                {loggedIn && (
                  <>
                    <li className="nav-item">
                      <a onClick={handleMessagesClick} className="nav-link">Messages
                        <span className="badge bg-danger ms-2">{documentCount.toString()}</span>
                      </a>
                    </li>
                    <li className="nav-item"><a onClick={handleLogout} className="nav-link">Logout</a></li>
                  </>
                )}
                <div className='d-flex'>
                    <a className='nav-link' href='https://github.com/movinigamage'><img src="Vector.jpg" className='navbar-icon w-6 h-6' width='32px'/></a>
                    <a className='nav-link' href=''><img src="twitter.jpg" className='navbar-icon w-6 h-6' width='32px'/></a>
                    <a className='nav-link' href='https://www.linkedin.com/in/movini/'><img src='linked.jpg' className='navbar-icon w-6 h-6' width='32px'/></a>
                </div>
              </ul>
            </div>
          </div>
        </nav>
        
        {/* Dialog Boxes */}
        {showDialog && (
          <div className="modal fade show" style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Login</h5>
                  <button type="button" className="btn-close" onClick={closeDialog}></button>
                </div>
                <div className="modal-body">
                  <Login onLoginSuccess={() => {
                    setLoggedIn(true);
                    setTimeout(closeDialog, 4000);
                  }} />
                </div>
              </div>
            </div>
          </div>
        )}
  
        {isMessageDialogOpen && (
          <div className="modal fade show" style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Messages</h5>
                  <button type="button" className="btn-close" onClick={() => setIsMessageDialogOpen(false)}></button>
                </div>
                <div className="modal-body">
                  <Messages />
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    )
  }
  
  export default NavTest;
