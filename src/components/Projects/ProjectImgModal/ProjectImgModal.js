import Modal from '../../../components/UI/Modal/Modal';
import React from "react";
import classes from './ProjectImgModal.css';

const projectImgModal = (props) => (
  <Modal modalClosed={props.modalClosed}>
    <img className={classes.ProjectImg} src={props.imgSource} alt="ProjectImg"/>
  </Modal>
)

export default projectImgModal;