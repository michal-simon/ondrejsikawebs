const LectureImg = (props) => (
  <div className='d-none d-md-block d-lg-block'>
    <h3 className='pt-4 pb-2'>{props.LectureImgHeader}</h3>
    <div className="container-flex banner-courses">
      <div className="d-flex flex-row">
        <div className="box" id='docker'>
          <h4 className='text-center text-white course-header pt-3'><a href='/docker' class='course-header'>DOCKER</a></h4>
          <a href='/skoleni/docker'><img src='/static/docker-w.svg' className='img img-fluid p-3'/></a>
        </div>
        <div className="box" id='kubernetes'>
          <h4 className='text-center text-white course-header pt-3'><a href='/kubernetes' class='course-header'>KUBERNETES</a></h4>
          <a href='/skoleni/kubernetes'><img src='/static/kubernetes.png' className='img img-fluid p-3'/></a>
        </div>
        <div className="box" id='git'>
          <h4 className='text-center text-white course-header pt-3'><a href='/git' class='course-header'>GIT</a></h4>
          <a href='/skoleni/git'><img src='/static/git-w.svg' className='img img-fluid p-3'></img></a>
        </div>
        <div className="box" id='gitlab-ci'>
          <h4 className='text-center text-white course-header pt-3'><a href='/gitlab-ci' class='course-header'>GITLAB-CI</a></h4>
          <a href='/skoleni/gitlab-ci'><img src='/static/gitlab-ci.svg' className='img img-fluid p-3'></img></a>
        </div>
        <div className="box " id='ansible'>
          <h4 className='text-center text-white course-header pt-3'><a href='/ansible' class='course-header'>ANSIBLE</a></h4>
          <a href='/skoleni/ansible'><img src='/static/ansible.png' className='img img-fluid p-3'></img></a>
        </div>
      </div>
    </div>
  </div>
)

export default LectureImg
