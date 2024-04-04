import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Nav.jsx'
import Section1 from './first-section.jsx'
import Gallery from './gallery.jsx'
import Appart from './appart.jsx'

ReactDOM.createRoot(document.getElementById('naviguation')).render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>,
)


ReactDOM.createRoot(document.getElementById('first-section')).render(
  <React.StrictMode>
    <Section1 />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('gallery')).render(
  <React.StrictMode>
    <Gallery />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('appart-page')).render(
  <React.StrictMode>
    <Appart />
  </React.StrictMode>,
)



