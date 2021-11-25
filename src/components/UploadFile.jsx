 import React, {useCallback,useState,useMemo} from 'react'
 import {useDropzone} from 'react-dropzone'
 import PureModal from 'react-pure-modal';
 import 'react-pure-modal/dist/react-pure-modal.min.css';
 import { RMIUploader } from "@dieyne/react-images-uploader";

 export function UploadButton({handleShow}){
     return (
      <button
      color="danger"
      onClick={handleShow}
    >
      Click Me
    </button>
   )
 }

export function UploadFileModal({handleClose,show,}){
  const [modal, setModal] = useState(false);
      return (
    <>
       
    <PureModal
      header="Your header"
      width="800px"
        isOpen={show}
        closeButton="close"
        closeButtonPosition="bottom"
        onClose={handleClose}
    > 
    <div >

    <MyDropzone></MyDropzone>

    </div>
    </PureModal>;
  </>
  );
      
}

  function MyDropzone() {
    const [visible, setVisible] = useState(false);
    const handleSetVisible = () => {
      setVisible(true);
    };
    const hideModal = () => {
      setVisible(false);
    };
    const onUpload = (data) => {
      console.log("Upload files", data);
    };
    const onSelect = (data) => {
      console.log("Select files", data);
    };
    const onRemove = (id) => {
      console.log("Remove image id", id);
    };
      return (
        <div className="App">
      <button onClick={handleSetVisible}>Show Me</button>
      <RMIUploader
        isOpen={false}
      
    
        onUpload={onUpload}
       
        
      />
    </div>
      )
    }
    
