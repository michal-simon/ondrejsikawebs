import React from 'react'

var img = {
  width: '70%',
  margin: 'auto',
  padding: '15px',
  display: 'inherit',
}

class LectureInnerMdSm extends React.component {
  render() {
    // DELSI RESENI
    // if (this.props.first) {
    //   var box = {
    //     borderTop: '1px solid #51AFAB',
    //     flex: '0 0 20%',
    //     maxWidth: '20%',
    //   }
    // }
    // else {
    //   var box = {
    //     borderBottom: '1px solid #51AFAB',
    //     flex: '0 0 20%',
    //     maxWidth: '20%',
    //   }
    // }
    var box = {
      flex: '0 0 20%',
      maxWidth: '20%',
    }
    if (! this.props.last) {
      box.borderLeft = '1px solid #51AFAB'
    }

        // return (
        //   <div className="" style={box}>
        //     <a href={this.props.link}>
        //       <h2 className='text-center'>{this.props.title}</h2>
        //     </a>
        //     <a href={this.props.link} >
        //       <div style={{ width: '100%' }}>
        //         <img src={this.props.image} style={img} className='img img-fluid center' />
        //       </div>
        //     </a>
        //   </div>
    return (
      <div className='col-3' style={box}>
        <a href={this.props.link}>
          <img src={this.props.image} style={img} className='img img-fluid p-3 center'/>
        </a>
      </div>
      <div className='col-9'>
        <a href={this.props.link}>
          <h4>{this.props.title}</h4>
        </a>
        <a href={this.props.link}>
          <p className='pb-3'>{this.props.text}</p>
        </a>
      </div>
    )
  }
}

export default LectureInnerMdSm
