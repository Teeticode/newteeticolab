import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InfoModal from './InfoModal';
import EditModal from './EditModal';
import { useSelector } from 'react-redux';
import Verify from './Verify';


function AddInfo() {
  const {about} = useSelector(state=>state.about)
  const {user} = useSelector(state=>state.user)
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [verify, setVerify] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  useEffect(()=>{
    if(about){
      setEdit(true)
    }else{
      setEdit(false)
    }
    if(user.verified===true){
      setVerify(true)
    }else{  
      setVerify(false)
    }
  },[about])
  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => {
    setShow(true)
  };

  return (
    <div >
      {(user.verified === true)?(
        <>
          
        {(about)?(
          <span onClick={handleShow} style={{padding:'30px'}} className="button button--flex">
          Edit Info &nbsp; <i className="uil uil-edit"></i>
      </span>
        ):(
          <span onClick={handleShow} style={{padding:'30px'}} className="button button--flex">
            Add Info &nbsp; <i className="uil uil-plus-circle"></i>
        </span>
        )}
        </>
      ):(
        <>
          <span onClick={() => setSmShow(true)} style={{padding:'20px',cursor:'pointer', opacity:0.6, color:'black',background:'#4b59a4'}} className="premium button button--flex">
            Premium access &nbsp; <i className="uil uil-lock"></i>
        </span>
        </>
      )}
        

     
        <>
          {
            verify?(
             
              <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit About</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                    <EditModal user={user}/>
                    </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                
              </Modal.Footer>
              </Modal>
              
            ):(
              <Modal
              size="sm"
              show={smShow}
              onHide={() => setSmShow(false)}
              aria-labelledby="example-modal-sizes-title-sm"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                  OTP Verification
                </Modal.Title>
              </Modal.Header>
              <Modal.Body><Verify user={user}/></Modal.Body>
            </Modal>
              
            )
          }
          </>
         
    </div>
  );
}

export default AddInfo;