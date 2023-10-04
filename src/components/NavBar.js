import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {
    Link
  } from "react-router-dom";

export class NavBar extends Component {


    render() {
        let { mode, toggleMode} = this.props;
        return (
            <div>
                <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/general">Navbar</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/general">Home</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/Link">Link</a>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/business">business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment">entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/general">general</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/health">health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/science">science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology">technology</Link>
                                </li>
                            </ul>

                            <div className="container-fluid d-flex flex-row bd-highlight justify-content-evenly">
                                {/* <div>
                                    <span>Page Size</span>
                                    <button type="button" className="btn btn-primary btn-sm mx-2" onClick={decPage}> &larr;</button>
                                    <span>{this.props.pageSize}</span>
                                    <button type="button" className="btn btn-secondary btn-sm mx-2" onClick={incPage}> &rarr;</button>
                                </div> */}
                                <div className={`form-check form-switch text-${mode === 'dark' ? 'light' : 'dark'}`}>
                                    <input className="form-check-input" onClick={toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar
