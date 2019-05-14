const Navbar = (props) => (
  <div>
    <div className="container-fluid">
      <div className='container pt-2 pb-2'>
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="/">
            <strong>{props.NavName}</strong>
            <div className='text-gray-s fs-8'>{props.NavUnderheader}</div>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">{props.Home}<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {props.Lecturing}</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="/git">GIT</a>
                  <a class="dropdown-item" href="/docker">DOCKER</a>
                  {/* <div class="dropdown-divider"></div> */}
                  <a class="dropdown-item" href="/kubernetes">KUBERNETES</a>
                  <a class="dropdown-item" href="/ansible">ANSIBLE</a>
                  <a class="dropdown-item" href="/gitlab-ci">GITLAB CI</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">{props.PublicTerms}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">{props.Reference}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contacts">{props.Contacts}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
)

export default Navbar
