// const References = (props) => (
//   <>
//     <p>{props.reference}</p>
//     <div className="row">
//       <div className="col-4">
//         <img src={props.e} className="img-fluid rounded-circle" alt="" />
//       </div>
//       <div className="col-8">
//         <p><strong>{props.nameRefer}</strong></p>
//         <p className="company">{props.position}</p>
//       </div>
//     </div>
//   </>
// )

// export default References

import React from 'react'

import recommendations from '@app/data/training/recommendations/recommendations.yaml'

let recommendation_id_map = {}
recommendations.map((element, i) => {
  recommendation_id_map[element.id] = i
})

class References extends React.Component {
  render() {
    return (
      <div>
        <div className='container border mb-4 mt-4'>
          {
            this.props.ids.map((id, i) => {
              let recommendation = recommendations[recommendation_id_map[id]]
              let img = require(`@app/data/training/recommendations/` + recommendation.photo)
              return (
                <div key={i}>
                  {
                    (() => {
                      if (i > 0) {
                        return <hr />
                      }
                    })()
                  }
                  <div className='row pt-3'>
                    <div className='col-1 pt-2 d-none d-lg-block d-xl-block'>
                      <img src={img} className='img-fluid rounded-circle' />
                    </div>
                    <div className='col-3'>
                      <p className='mb-1'><b>{recommendation.name}</b></p>
                      <p className='mb-1'>{recommendation.role[this.props.lang]}</p>
                      <p className='text-secondary'>{recommendation.date[this.props.lang]}</p>
                    </div>
                    <div className='col-lg-8 col-md-9 col-sm-9 col-9 pt-2'>
                      <p>{recommendation.text[this.props.lang]}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default References

