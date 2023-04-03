import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Login from './Login';
import Register from './Register';
import './account.css';

function Account({}) {
  const [show, setShow] = useState(false);
  const [isLogin, setLogin] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{width:'100%'}}>
        
        <a href="#account" onClick={handleShow} className="nav__link">
          <i className="bx bx-user-circle nav__icon"></i> Account
        </a> 
        

      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          style={{
            background:'var(--color-bg)'
          }}
         closeButton>
          <Modal.Title><span style={{color:'black', fontWeight:'800'}}>Teeti</span><span style={{color:'mistyrose', fontWeight:'800'}}>Colab</span> <i className='uil uil-layers'></i></Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            background:'var(--color-bg)'
          }}
        >
          {
            isLogin?(
              <Login  setLogin={setLogin}/>
            ):(
              <Register setLogin={setLogin}/>
            )
          }
        </Modal.Body>
        <Modal.Footer
          style={{
            background:'var(--color-bg)'
          }}
        >
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Account;