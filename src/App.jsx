import React, { useState } from 'react'
import './styles/style.css'
import Input from './components/Input'
import Content from './components/Content'

const App = () => {
  const [image, setImage] = useState()
  const [toggleSection, setToggleSection] = useState(true)

  const getImageLink = (e) => {
    setImage(e)
    console.log(e)
    setToggleSection(false)
  }

  return (
    <>
      {toggleSection &&
        <>
          <section className='main-container'>
            <div>
            </div>
          </section>

          <Input getImage={getImageLink} />
        </>
      }
      {image && <Content image={image} />}
    </>
  )
}

export default App
