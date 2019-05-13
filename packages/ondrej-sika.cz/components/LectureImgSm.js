const LectureImg = (props) => (
  <div className='d-block d-sm-block d-md-none'>
    <h3 className='pt-4 pb-2'>{props.LectureImgHeader}</h3>
    <div className="container-flex banner-courses">
      <div className="d-flex row">
        <div className="box col-12">
          <div className='row'>
            <div className='col-4 box box-docker'>
              <img src='/static/docker-w.svg' id='docker' className='img img-fluid p-3'/>
            </div>
            <div className='col-8'>
              <h4 className='course-header'>DOCKER</h4>
              <p className='pb-3'>Provozujte cokoliv a kdekoliv. Uz necekejte na nastaveni vaseho serveru nebo na aktualizaci nejake knihovny. Mejte prostredi jako soucast vasi aplikace.</p>
            </div>
          </div>
        </div>
        <div className="box col-12">
          <div className='row'>
            <div className='col-4 box box-kubernetes'>
              <img src='/static/kubernetes.png' id='kubernetes' className='img img-fluid p-3'/>
            </div>
            <div className='col-8'>
              <h4 className='course-header'>KUBERNETES</h4>
              <p className='pb-3'>Kubernetes je dnes nejpoužívanější orchestrator kontejneru. Pokud chcete vsadit na jistotu pri provozovani Docker kontejneru, zvolte Kubernetes.</p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className='row'>
            <div className='col-4 box box-git' >
              <img src='/static/git-w.svg' id='git' className='img img-fluid p-3'/>
            </div>
            <div className='col-8'>
              <h4 className='course-header'>GIT</h4>
              <p className='pb-3'>Moderni verzovaci nastroj. Dnes defakto standart a nezbytna soucat kazdeho vyvojarskeho tymu.</p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className='row'>
            <div className='col-4 box box-gitlab-ci' >
              <img src='/static/gitlab-ci.svg' id='gitlab-ci' className='img img-fluid p-3'/>
            </div>
            <div className='col-8'>
              <h4 className='course-header'>GITLAB-CI</h4>
              <p className='pb-3'>Nástroj na automaticke testovani a automaticke nasazovani integrovane primo v Gitlabu. Testujte kazdy jednotlivi commit a nasazujte stisknutim tlacitka.</p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className='row'>
            <div className='col-4 box box-ansible' >
              <img src='/static/ansible.png' id='ansible' className='img img-fluid p-3'/>
            </div>
            <div className='col-8'>
              <h4 className='course-header'>ANSIBLE</h4>
              <p className='pb-3'>Ansible je nástroj na hromadnou správu konfiguraci a nasazování. Vy deklarujete vysledný stav serveru a služeb a Ansible se postará o provedení.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default LectureImg
