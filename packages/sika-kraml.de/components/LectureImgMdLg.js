const LectureImg = (props) => (
  <div className='d-none d-md-block d-lg-block'>
    <h3 className='pt-4 pb-2'>{props.LectureImgHeader}</h3>
    <div className="container-flex banner-courses">
      <div className="d-flex flex-row">
        <div className="box" id='docker'>
          <h4 className='text-center text-white course-header pt-3'><a href='/docker' className='course-header'>DOCKER</a></h4>
          <a href={props.LectureImgLinkDocker}><img src={props.LectureImgLinkDockerImg} className='img img-fluid p-3'/></a>
        </div>
        <div className="box" id='kubernetes'>
          <h4 className='text-center text-white course-header pt-3'><a href='/kubernetes' className='course-header'>KUBERNETES</a></h4>
          <a href={props.LectureImgLinkKubernetes}><img src={props.LectureImgLinkKubernetes} className='img img-fluid p-3'/></a>
        </div>
        <div className="box" id='git'>
          <h4 className='text-center text-white course-header pt-3'><a href='/git' className='course-header'>GIT</a></h4>
          <a href={props.LectureImgLinkGit}><img src={props.LectureImgLinkGitImg} className='img img-fluid p-3'></img></a>
        </div>
        <div className="box" id='gitlab-ci'>
          <h4 className='text-center text-white course-header pt-3'><a href='/gitlab-ci' className='course-header'>GITLAB-CI</a></h4>
          <a href={props.LectureImgLinkGitlabCI}><img src={props.LectureImgLinkGitlabCIImg} className='img img-fluid p-3'></img></a>
        </div>
        <div className="box " id='ansible'>
          <h4 className='text-center text-white course-header pt-3'><a href='/ansible' className='course-header'>ANSIBLE</a></h4>
          <a href={props.LectureImgLinkAnsible}><img src={props.LectureImgLinkAnsibleImg} className='img img-fluid p-3'></img></a>
        </div>
      </div>
    </div>
  </div>
)

export default LectureImg
