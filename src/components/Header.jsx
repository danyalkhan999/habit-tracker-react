import { Nav, Container } from 'react-bootstrap'

const Header = () => {
  const date = new Date()
  return (
    <Nav className=' p-2 bdr-btm'>
      <Container className='d-flex justify-content-between align-items-center'>
        <h3 className='fw-bold'>Consistency</h3>
        <span>{date.toDateString()}</span>
      </Container>
    </Nav>
  )
}

export default Header
