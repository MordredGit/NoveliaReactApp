import React from "react";

function Navbar() {
  return (
    //     <nav className="navbar navbar-expand-lg ml-5 mr-3">
    //     <div className="container-fluid">
    //       <a className="navbar-brand text-white" href="#">Navbar</a>
    //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //         <span className="navbar-toggler-icon"></span>
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link text-white" href="#">Link</a>
    //           </li>
    //           <li className="nav-item dropdown">
    //             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //               Dropdown
    //             </a>
    //             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    //               <li><a className="dropdown-item text-white" href="#">Action</a></li>
    //               <li><a className="dropdown-item text-white" href="#">Another action</a></li>
    //               <li><hr className="dropdown-divider" /></li>
    //               <li><a className="dropdown-item text-white" href="#">Something else here</a></li>
    //             </ul>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link disabled text-white" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    //           </li>
    //         </ul>
    //         <form className="d-flex">
    //           <button className="btn btn-outline-success text-white" type="submit">Login</button>
    //         </form>
    //       </div>
    //     </div>
    //   </nav>
    <nav class="navbar navbar-expand-lg navbar-light bg-transperent px-0 py-3">
      <div class="container-xl">
        <a class="navbar-brand" href="/">
          Novelia
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav mx-lg-auto">
            <a class="nav-item nav-link active" href="/" aria-current="page">
              Home
            </a>
            <a class="nav-item nav-link" href="/browse">
              Browse
            </a>
            <a class="nav-item nav-link" href="/createBook">
              Create
            </a>
          </div>

          {/* <div class="navbar-nav ms-lg-4">
        <a class="nav-item nav-link" href="#">Sign in</a>
      </div> */}

          <div class="d-flex align-items-lg-center mt-3 mt-lg-0">
            <a href="/login" class="btn btn-sm btn-primary w-full w-lg-auto">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
