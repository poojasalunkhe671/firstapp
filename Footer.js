import React from 'react'
import Instagram from '@mui/icons-material/Instagram'
import Twitter from '@mui/icons-material/Twitter'
import Facebook from '@mui/icons-material/Facebook'
import Linkdin from '@mui/icons-material/LinkedIn'
import './styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
<Instagram/>
<Twitter/>
<Facebook/>
<Linkdin/>
        </div>
        <p>&copy:2025 Pooja's Pizza</p>
     
    </div>
  )
}

export default Footer
