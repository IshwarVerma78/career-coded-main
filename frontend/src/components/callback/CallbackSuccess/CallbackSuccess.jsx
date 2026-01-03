import React from 'react';
import "./CallbackSuccess.css";
import Button from '../../layout/ui/Button/Button';


function CallbackSuccess({ onClose }) {
  return (
    <div className="callback-success">
      <h2>✅ Request Submitted</h2>
      <p>
        Thank you! Our team will contact you shortly.
      </p>

      <Button variant="primary" onClick={onClose}>
        Close
      </Button>
    </div>
  );
}

export default CallbackSuccess
