import React from 'react'
import logo from '../logo.jpeg'

export default function NavBar() {
    return (
      <div className="wholeNav">
        <nav className="navbar navbar-expand-lg navbar-light bg-light navwhite ">
  <div className="container-fluid navitems">
      <img className="logo" src={logo} alt="logo"></img>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse navbaritems" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Product
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Live Chat</a></li>
            <li><a className="dropdown-item" href="/">Chat Bots</a></li>
            <li><hr className="dropdown-divider"/></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Pricing</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Help center
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Knowledge Base</a></li>
            <li><a className="dropdown-item" href="/">Integrations</a></li>
            <li><hr className="dropdown-divider"/></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="/" tabindex="-1" aria-disabled="true">Blog</a>
        </li>
      </ul>
      <div className="nav-rightside">
      <button type="button" class="btn btn-primary sidebutton"><span className="btnspace">Try</span><span className="btnspace">it</span><span className="btnspace">out</span></button>
    <a className="" href="/">Logout</a>
  </div>
    </div>
  </div>
</nav>
</div>
    )
}
