import React,{useState,useEffect} from "react"

import "./dxf.css"

//import {Helper} from '../functions/dxfhelper/index'

//import fs from 'fs'
//import listReactFiles from 'list-react-files'
//console.log(fs)

/* const imgUrls = ['https://source.unsplash.com/PC_lbSSxCZE/800x600','https://source.unsplash.com/lVmR1YaBGG4/800x600','https://source.unsplash.com/5KvPQc1Uklk/800x600','https://source.unsplash.com/GtYFwFrFbMA/800x600','https://source.unsplash.com/Igct8iZucFI/800x600','https://source.unsplash.com/M01DfkOqz7I/800x600','https://source.unsplash.com/MoI_cHNcSK8/800x600','https://source.unsplash.com/M0WbGFRTXqU/800x600','https://source.unsplash.com/s48nn4NtlZ4/800x600','https://source.unsplash.com/E4944K_4SvI/800x600','https://source.unsplash.com/F5Dxy9i8bxc/800x600','https://source.unsplash.com/iPum7Ket2jo/800x600'
]; */
import { UploadFileModal,UploadButton } from "../components/UploadFile"

export default function SvgGallery(){

    const [imgUrls,setImgUrls] = useState([])
    const [currentIndex,setCurrentIndex] =useState(1)
    const [show, setShow] = useState(false);
      
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(async ()=>{

      try {
        
        const request = await fetch("http://localhost:3002/svg/get",);
        
        setImgUrls(request.json());
        console.log(imgUrls)
      } catch (error) {
        console.log(error.message)
      }
    },[])
   
    function renderImageContent(src, index) {
      console.log(src)
        return (
          <div onClick={(e) => openModal(e, index)}>
            <img src={src} key={src} />
          </div>
        ) 
      }
     function openModal(e, index) {
       console.log(index)
        setCurrentIndex(index)
      }
      function closeModal(e) {
        
        if (e != undefined) {
          e.preventDefault();
        }
        setCurrentIndex(null)
      }
      function findPrev(e) {
        if (e != undefined) {
          e.preventDefault();
        }

        setCurrentIndex(prevState => (prevState-1))
        
      }
      function findNext(e) {
        if (e != undefined) {
          e.preventDefault();
        }
        setCurrentIndex(prevState => (prevState+1))

      }
    return (<div className="gallery-container">
    <h1>🔥 This Gallery Is Lit 🔥</h1>
    <div className="galler
    y-grid">
      {imgUrls.length ? (<RenderImgs imgUrls={imgUrls}></RenderImgs>)
      :(<NoImgs handleShow={handleShow}></NoImgs>)} 
    </div>

    <UploadFileModal show={show} handleClose={handleClose}></UploadFileModal>
  </div>)
}



class GalleryModal extends React.Component {
  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    document.body.addEventListener('keydown', this.handleKeyDown);
  }  
  componentWillUnMount() {
    document.body.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown(e) {
    if (e.keyCode === 27)
      this.props.closeModal();
    if (e.keyCode === 37 && this.props.hasPrev)
      this.props.findPrev();
    if (e.keyCode === 39 && this.props.hasNext)
      this.props.findNext();
  }
  
  render () {
    console.log(src)
    const { closeModal, hasNext, hasPrev, findNext, findPrev, src } = this.props;
    if (!src) {
      console.log('whut')
      return null;
    }
    return (
      <div>
        <div className="modal-overlay" onClick={closeModal}>

        <div  className="_modal">
          <div className='modal-body'>
            <a href="#" className='modal-close' onClick={closeModal} onKeyDown={this.handleKeyDown}>&times;</a>
            {hasPrev && <a href="#" className='modal-prev' onClick={findPrev} onKeyDown={this.handleKeyDown}>&lsaquo;</a>}
            {hasNext && <a href="#" className='modal-next' onClick={findNext} onKeyDown={this.handleKeyDown}>&rsaquo;</a>}
            <img src={src} />
          </div>
        </div>
        </div>
       
      </div>
    )
  }
}


function NoImgs({handleShow}){

  return (<div
    style={{
      display:"flex",
      height:"100vh",
      marginTop:"10%",
      justifyContent:"center"
    }}
    
  >
    <div>
    <p>No tienes ninguna Imagen</p>
  <UploadButton handleShow={handleShow}></UploadButton>
    </div>
  </div>)
}


function  RenderImgs({imgUrls}){
  return (
    <div>
      {imgUrls.map((src,index)=>(
        <div onClick={(e) => openModal(e, index)}>
            <img src={src} key={src} />
          </div>))
      }
    </div>
  )
}