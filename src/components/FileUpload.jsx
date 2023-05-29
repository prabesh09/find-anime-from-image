import ReactDOM from 'react-dom'
import { useState, useRef } from 'react'

const FileUpload = (props) => {
    const [imageFile, setImageFile] = useState()
    const fileInputRef = useRef()
    const acceptedImageTypes = ['image/jpeg', 'image/png', 'image/jpeg']

    const uploadHandler = () => {
        fileInputRef.current.click()
    }

    const getImageHandler = (event) => {
        event.preventDefault()
        const imageFile = event.dataTransfer.files[0]
        if (imageFile && acceptedImageTypes.includes(imageFile.type)) {
            props.getImage(imageFile);
            setImageFile(imageFile);
        } else {
            console.error("Please select an image file.")
        }
    }

    const handleFileUpload = (event) => {
        const imageFile = event.target.files[0]
        if (imageFile && acceptedImageTypes.includes(imageFile.type)) {
            props.getImage(imageFile);
            setImageFile(imageFile);
        } else {
            console.error("Please select an image file.")
        }
    }

    return (
        ReactDOM.createPortal(
            <div className='input-container' onClick={uploadHandler} onDrop={getImageHandler} onDragOver={event => event.preventDefault()}>
                <img src="../../assets/icon-image.svg" alt="Image Icon" />
                <h1 className='input-text'>Drop your image here, or <span>browse.</span></h1>
                <p className='file-name'>
                    {imageFile && imageFile.name}
                </p>
                <input className='input-box' type="file" ref={fileInputRef} onChange={handleFileUpload} />
            </div>,
            document.getElementById("dialog")
        )
    )
}

export default FileUpload