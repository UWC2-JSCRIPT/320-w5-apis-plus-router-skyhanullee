import { Link } from "react-router-dom"

function Navbar() {
  return (
    <header>
      <nav className='top-nav'>
        <ul className="links-container">
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul>
        <div className="icon-container">
          
        </div>
      </nav>
    </header>
  )
}
export default Navbar