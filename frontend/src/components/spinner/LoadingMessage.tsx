// https://blog.hubspot.com/website/css-loading-animation

import './Loading.css';

type ComponentProps = {
    type: string,
    message?: string
}

export default function LoadingMessage(props: ComponentProps) {
    let { type, message } = props;

    if(!message) {
        message = "... loading";
    }

    switch(type) {
        case('spinner'): {
            return (
                <>
                    <div className='spinner' ></div>  
                    <div role="presentation" className="spinnerText" aria-label="loading-text">{message}</div>
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