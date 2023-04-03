import React, { useState,useEffect,memo } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InfoModal from '../home/InfoModal';
import EditModal from '../home/EditModal';
import { useDispatch, useSelector } from 'react-redux';
import { getAbout } from '../../redux-store/features/AboutSlice';


function AddInfo({ }) {
  const {user} = useSelector(state=>state.user)
  const {about} = useSelector(state=>state.about)
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false)
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch() 
  function isEmpty(object) {
    return Object.keys(object).length === 0;
  }
  useEffect(()=>{
    dispatch(getAbout(user?.userid))
  },[])
  const handleClose = () => {
    setShow(false)
    setShowEdit(false)
  };
  const handleShow = () => {
    setShow(true)
  };
  const handleShowedit = ()=>{
    setShowEdit(true)
  }

  return (
    <div style={{width:'100%'}}>
        {(about)?(
          <span onClick={handleShowedit} style={{padding:'30px'}} className="button button--flex">
          Edit Info &nbsp; <i className="uil uil-edit"></i>
      </span>
        ):(
          <span onClick={handleShow} style={{padding:'30px'}} className="button button--flex">
            Add Info &nbsp; <i className="uil uil-plus-circle"></i>
        </span>
        )}
        

      
        
        {(about)?
          (
            <Modal show={showEdit} onHide={handleClose}>
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
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add About</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <InfoModal user={user}/>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          </Modal.Footer>
      </Modal>
          ) 
        }
        
          
        

      
        
    
    </div>
  );
}

export default memo(AddInfo);