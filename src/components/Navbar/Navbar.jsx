import CartWidget from "../CartWidget/CartWidget"
import Categories from "./Categories/Categories"
import Sections from "./Sections/Sections"
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Space-Cat-Gear</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <Sections/>
                    <Categories/>
                </ul>
                    <CartWidget cartQuantity={0}/>
            </div>
       
        </div>
   </nav>
  )
}