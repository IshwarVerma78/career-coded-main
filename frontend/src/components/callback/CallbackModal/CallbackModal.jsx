import React, { useState } from 'react'
import "./CallbackModal.css";
import CallbackForm from "../CallbackForm/CallbackForm";
import CallbackSuccess from '../CallbackSuccess/CallbackSuccess';

function CallbackModal({ isOpen, onClose }) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    if (!isOpen) return null;

    function handleClose() {
        setIsSubmitted(false); // reset for next time
        onClose();
    }


  return (
        <div className="callback-overlay" onClick={handleClose}>
            <div
                className="callback-modal"
                onClick={(e) => e.stopPropagation()}
            >
                
            <button className="close-btn" onClick={handleClose}>✕</button>

            {!isSubmitted ? (
            <>
                <h2>Request a Callback</h2>
                <p>Fill the form and our team will contact you.</p>

                <CallbackForm onSuccess={() => setIsSubmitted(true)} />
            </>
            ) : (
            <CallbackSuccess onClose={handleClose} />
            )}
            </div>
        </div>
    );
 }

export default CallbackModal;

