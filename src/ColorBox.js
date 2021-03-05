import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  // render() {
  //   console.log(this.props.opacity)
  //   const newValue= this.props.opacity
  //   return (
  //     <div className="color-box" style={ { opacity: newValue } }>
  //       { this.props.opacity < 0.2 ? null : ( <div>
  //          <ColorBox opacity={ newValue - 0.1 } />
           
  //        </div>)
  //        }
  //     </div>
  //   )
  // }

  render() {
    let opacity = this.props.opacity;
    if (opacity >= 0.2) {
      return (
        <div className="color-box" style={{opacity}}>
          <ColorBox opacity={opacity - 0.1} />
        </div>
      );
    } else {
      return null;
    }
  }

}

