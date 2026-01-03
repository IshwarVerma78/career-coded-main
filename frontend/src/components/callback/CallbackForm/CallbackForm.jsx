import React from 'react'
import "./CallbackForm.css";
// import "../../layout/ui/Button/Button";
import Button from '../../layout/ui/Button/Button';

function CallbackForm({onSuccess}) {

  
  function handleSubmit(e) {
    e.preventDefault();

    // 🔥 future me API call yahin aayega

    onSuccess(); // success trigger
  }

  return (
    <form className="callback-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Your Name" required />
      <input type="tel" placeholder="Phone Number" required />
      <input type="email" placeholder="Email Address" />

      <Button variant="primary" type="submit">
        Submit Request
      </Button>
    </form>
  );
}

export default CallbackForm;
