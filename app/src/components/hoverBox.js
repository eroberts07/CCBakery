import React from 'react';


const hoverBox = (props) => {
    return (
        <div className='img-wrapper'>
            <img className='blur' src={ props.Img } alt='A picture is here'/> 
            <div className='content'>
            <a href='#'>{ props.content }</a>
            </div>
        </div>
    );
}
export default hoverBox;