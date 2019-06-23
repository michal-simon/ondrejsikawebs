import React from 'react'

var img = {
  width: '50%',
  margin: 'auto',
  padding: '15px',
  display: 'inherit',
}

class LectureInnerLg extends React.Component {
  render() {
    var box = {
      flex: '0 0 20%',
      maxWidth: '20%',
    }
    if (! this.props.first) {
      box.borderLeft = '1px solid #51AFAB'
    }

    return (
      <div className="" style={box}>
        <a href={this.props.link}>
          <h2 className='text-center'>{this.props.title}</h2>
        </a>
        <a href={this.props.link} >
          <div style={{ width: '100%' }}>
            <img src={this.props.image} style={img} className='img img-fluid center' />
          </div>
        </a>
      </div>
    )
  }
}

export default LectureInnerLg
