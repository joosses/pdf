 import React, {useCallback,useState,useMemo} from 'react'
 import {useDropzone} from 'react-dropzone'
 import PureModal from 'react-pure-modal';
 import 'react-pure-modal/dist/react-pure-modal.min.css';

 import { Dropzone, FileItem } from "@dropzone-ui/react";

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
  
  
    const onUpload = async (data) => {
        
      const formdata = new FormData();
      data.forEach((file,index)=>{
        console.log(file)
        formdata.append("file"+index,file.file);
      })
      console.log(formdata)
 
       const request = await fetch("http://localhost:3002/upload",{
        method:"POST",
        body:formdata,
        
      }) 
      console.log("Upload files", data);
    };
    const onSelect = (data) => {
      console.log("Select files", data);
    };
    const onRemove = (id) => {
      console.log("Remove image id", id);
    };
    const [files, setFiles] = useState([]);
  const updateFiles = (incommingFiles) => {
    console.log(incommingFiles)
    setFiles(incommingFiles);
  };
      return (
        <Dropzone onChange={updateFiles} url={"http://localhost:3002/upload"} onUploadStart={()=>console.log("asdsd")} value={files}>
      {files.map((file,i) => (
        <FileItem key={i} {...file} preview />
      ))}
    </Dropzone>
      )
    }
    
