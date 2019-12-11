import React from 'react'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Container, IconButton, Link} from '@material-ui/core'
import './category.css'

export default function Navbar() {
  const handleClick = () => {
    return 
  }
  
  return(
    <Container maxWidth="lg" className="Navbar">
      <div className="ChevronLeft">
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
      </div>
        <container className="Category">
          <Link className="ItemFirst" color="rgba(0,0,0,.76)" underline="none"  href="/" onClick={handleClick}>
            HOME
          </Link>
          <Link className="Item" underline="none" color="rgba(0,0,0,.76)" href="/" onClick={handleClick}>
            ONEZERO
          </Link>
          <Link className="Item" underline="none" color="rgba(0,0,0,.76)" href="/" onClick={handleClick}>
            ELEMENTAL
          </Link>
          <Link className="Item" underline="none" color="rgba(0,0,0,.76)" href="/" onClick={handleClick}>
            GEN
          </Link>
          <Link className="Item" underline="none" color="rgba(0,0,0,.76)" href="/" onClick={handleClick}>
            ZORA
          </Link>
          <Link className="Item" underline="none" color="rgba(0,0,0,.76)" href="/" onClick={handleClick}>
            FORGE
          </Link>
          <Link className="Item" underline="none" color="rgba(0,0,0,.76)" href="/" onClick={handleClick}>
            HUMAN PARTS
          </Link>
          <Link className="Item" underline="none" color="rgba(0,0,0,.76)" href="/" onClick={handleClick}>
            MARKER
          </Link>
          <Link className="Item" underline="none" color="rgba(0,0,0,.76)" href="/" onClick={handleClick}>
            LEVEL
          </Link>
          <Link className="Item" underline="none" color="rgba(0,0,0,.76)" href="/" onClick={handleClick}>
            HEATED
          </Link>
          <Link className="Item" underline="none" color="rgba(0,0,0,.76)" href="/" onClick={handleClick}>
            MODUS
          </Link>  
          <Link className="ItemLast" underline="none" color="rgba(0,0,0,.76)" href="/" onClick={handleClick}>
            MC
          </Link> 
        </container>
      <div className="ChevronRight">
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
        {/*  */}
      </div>
    </Container>
  )
}