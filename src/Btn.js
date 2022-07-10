import React,{useState} from 'react';
import QuizStart from './QuizStart';
import Modal from '@mui/material/Modal';
import Details from './Details';
import './Pets.css'


export default function Btn(props){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

   
    return(
        <div>
            <button className='card-btn' onClick={handleOpen}>{props.text}</button>
            {props.className==="btn-details"&&
            <Modal className="my-modal"
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
                <Details
                  item={props.item}
                  img={props.img}
                />
            </Modal>
            }
            {props.className==="btn-adopt"&&
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
                  <QuizStart
                    item={props.item}
                    img={props.img}

                    />
            </Modal>
            }
            
          
        </div>
    )
}