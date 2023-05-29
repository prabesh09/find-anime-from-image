import { useRef } from 'react'
import ReactDOM from 'react-dom'
import { AiOutlineLink, AiOutlineSearch } from 'react-icons/ai'

const Input = (props) => {
    const inputRef = useRef()

    const getImageLink = async () => {
        await fetch(
            `https://api.trace.moe/search?cutBorders&url=${encodeURIComponent(
                `${inputRef.current.value}`
            )}`
        ).then(e => e.json().then(item => props.getImage(item.result)))
    }

    return (
        ReactDOM.createPortal(
            <div className='url-container' onClick={() => (window.scrollBy(0, -window.innerHeight))}>
                <AiOutlineLink />
                <input ref={inputRef} type="text" placeholder='Enter the image link...' />
                <AiOutlineSearch className='cursor-pointer' onClick={getImageLink} />
            </div>,
            document.getElementById("dialog")
        )
    )
}

export default Input