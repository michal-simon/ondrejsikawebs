const Navbar = (props) => (
  <div>
    <div className="container-fluid">

      <div className='container pt-2 pb-2'>

        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="/">
            <strong>{props.NavName}</strong>
            <div className='text-gray-s fs-8 d-none d-sm-block'>{props.NavUnderheader}</div>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdownaa" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdownaa">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">{props.Home}<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {props.Lecturing}</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/skoleni/docker">DOCKER</a>
                  {/* <div className="dropdown-divider"></div> */}
                  <a className="dropdown-item" href="/skoleni/kubernetes">KUBERNETES</a>
                  <a className="dropdown-item" href="/skoleni/gitlab-ci">GITLAB CI</a>
                  <a className="dropdown-item" href="/skoleni/ansible">ANSIBLE</a>
                  <a className="dropdown-item" href="/skoleni/git">GIT</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/verejne-terminy">{props.PublicTerms}</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/blog">{props.Blog}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/kontakt">{props.Contacts}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
)

export default Navbar
