import React,{useState} from 'react';
import QuizStart from './QuizStart';
import Modal from '@mui/material/Modal';
import Details from './Details';
import quizData from '../quiz.json';
export default function Btn(props){
    let interval
    console.log(quizData)


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [step, setStep] = useState(1);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [time, setTime] = useState(0);

    const quizStartHandler = () => {
        setStep(2);
        interval = setInterval(() => {
          setTime(prevTime => prevTime + 1);
        }, 1000);
      }
      const resetClickHandler = () => {
        setActiveQuestion(0);
        setAnswers([]);
        setStep(2);
        setTime(0);
        interval = setInterval(() => {
          setTime(prevTime => prevTime + 1);
        }, 1000);
    }
    return(
        <div>
            <button className='card-btn' onClick={handleOpen}>{props.text}</button>
            {props.className==="btn-details"&&
            <Modal
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
                    quickStarthandler={quizStartHandler}
                    />
            </Modal>
            }
        </div>
    )
}