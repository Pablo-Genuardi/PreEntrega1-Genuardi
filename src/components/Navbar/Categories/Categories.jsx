
export default function Categories() {
  return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Guitars</a></li>
                <li><a className="dropdown-item" href="#">Amps</a></li>
                <li><a className="dropdown-item" href="#">Pedals/Effects</a></li>
                <li><a className="dropdown-item" href="#">Synthesizers</a></li>
                <li><a className="dropdown-item" href="#">Studio/Live Sound</a></li>
                <li><a className="dropdown-item" href="#">Accesories</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Used deparment</a></li>
            </ul>
        </li>
    )
}
