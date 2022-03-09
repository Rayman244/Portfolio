import React,{useState} from "react";
import { Button } from "react-bootstrap";
import './NavStyles.css'

export default function Navigator() {
  const[currentPage, setCurrentPage]=useState('about')

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navigator pt-0">
      <div className="container-fluid navigator">
        <a className="navbar-brand" href="/">
          Ray Hewitt
        </a>
        <Button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <div
          className="collapse navbar-collapse text-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a
              className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
              aria-current="page"
              href="/"
              onClick={() => setCurrentPage("Home")}
            >
              About Me
            </a>
            <a
              className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
              href="/Portfolio"
              onClick={() => setCurrentPage("Projects")}
            >
              Portfolio
            </a>
            <a
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              href="/Contact"
              onClick={() => setCurrentPage("Contact")}
            >
              Contact
            </a>
            <a
               className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              href="/Resume"
              onClick={() => setCurrentPage("Resume")}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
