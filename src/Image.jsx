import React, { Component } from 'react'
import ScrollReveal from 'scrollreveal'


 class Image extends Component {
    componentDidMount()
    {
        const config = {
            
            origin: 'right',
            duration: 2000,
            delay: 100,
            distance: '500 px',
            scale: 1,
            easing: 'ease',
          }
      ScrollReveal().reveal('.revels', config);
    }
    render() {
        const {image}=this.props;
        console.log(image);
        return (
            
           <div className="col-md-3 col-sm-3  col-xs-3 ">
           <div className="revels">
            <img  src={image.src.large} alt="Not Found"
            className="img-fluid" />
           </div>
           </div>
            
        )
    }
}

export default Image
