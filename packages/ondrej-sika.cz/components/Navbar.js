const Navbar = (props) => (
  <div>
    <div className="container-fluid">
      <div className='container pt-2 pb-2'>
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="/">
            <strong>{props.NavName}</strong>
            <div className='text-gray-s fs-8 d-none d-sm-block'>{props.NavUnderheader}</div>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdownaa" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdownaa">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">{props.Home}<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {props.Lecturing}</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="/skoleni/docker">DOCKER</a>
                  {/* <div class="dropdown-divider"></div> */}
                  <a class="dropdown-item" href="/skoleni/kubernetes">KUBERNETES</a>
                  <a class="dropdown-item" href="/skoleni/gitlab-ci">GITLAB CI</a>
                  <a class="dropdown-item" href="/skoleni/ansible">ANSIBLE</a>
                  <a class="dropdown-item" href="/skoleni/git">GIT</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/verejne-terminy">{props.PublicTerms}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/kontakt">{props.Contacts}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
)

export default Navbar
