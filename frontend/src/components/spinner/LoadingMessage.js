// https://blog.hubspot.com/website/css-loading-animation

import './Loading.css';

export default function LoadingMessage(props) {
    let { type, message } = props;

    if(!message) {
        message = "... loading";
    }

    switch(type) {
        case('spinner'): {
            return (
                <>
                    <div className='spinner'></div>  
                    <div className="spinnerText">{message}</div>
                </>
            );
        }
        default: {
            return (
                <div>
                    <div className="spinnerText">{message}</div>
                    <div className='spinner'></div>  
                </div>
            );          
        }
    }
}