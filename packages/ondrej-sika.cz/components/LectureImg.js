const LectureImg = (props) => (
  <div>
    <h3 className='pt-4 pb-2'>{props.LectureImgHeader}</h3>
    <div className="container-flex banner-courses">
      <div className="d-sm-flex flex-row">
        <div className="box" id='docker'>
          <img src='/static/docker-w.svg' className='img img-fluid p-3'></img>
          <h4 className='text-center text-white course-header'>DOCKER</h4>
        </div>
        <div className="box" id='kubernetes'>
          <img src='/static/kubernetes.png' className='img img-fluid p-3'></img>
          <h4 className='text-center text-white course-header'>KUBERNETES</h4>
        </div>
        <div className="box" id='git'>
          <img src='/static/git-w.svg' className='img img-fluid p-3'></img>
          <h4 className='text-center text-white course-header'>GIT</h4>
        </div>
        <div className="box" id='gitlab-ci'>
          <img src='/static/gitlab-ci.svg' className='img img-fluid p-3'></img>
          <h4 className='text-center text-white course-header'>GITLAB-CI</h4>
        </div>
        <div className="box" id='ansible'>
          <img src='/static/ansible.png' className='img img-fluid p-3'></img>
          <h4 className='text-center text-white course-header'>ANSIBLE</h4>
        </div>
      </div>
    </div>
  </div>
)

export default LectureImg
