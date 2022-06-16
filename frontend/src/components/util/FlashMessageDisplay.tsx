
import { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import FlashMessage from 'react-flash-message'

export const FlashMessageDisplay = forwardRef((props, ref): JSX.Element => {
    const [ flashError, setFlashError] = useState('')
    const [ flashSuccess, setFlashSuccess ] = useState('')
    const [ flashInfo, setFlashInfo ] = useState('')

    const flashDuration = 5000

    // forwardRef, useImperativeHandle this lets us call / set state from parent component/s useRef
    useImperativeHandle(ref, () => ({
        setErrorMessage(message: string) {
            setFlashError(message)
        },
        setSuccessMessage(message: string) {
            setFlashSuccess(message)
        },
        setInfoMessage(message: string) {
            setFlashInfo(message)
        }
    }))

    useEffect(() => {
        setTimeout(() => {setFlashError('')}, flashDuration)
        setTimeout(() => {setFlashSuccess('')}, flashDuration)
        setTimeout(() => {setFlashInfo('')}, flashDuration)
    }, [flashError, flashSuccess])

    return (
        <>
            <div className='mb-2 text-center'>
                {flashError != '' &&
                    <FlashMessage duration={flashDuration} persistOnHover={true}>
                        <p className="text-red-700">{flashError}</p>
                    </FlashMessage>   
                }
                {flashSuccess != '' &&
                    <FlashMessage duration={flashDuration} persistOnHover={true}>
                        <p className="text-green-700">{flashSuccess}</p>
                    </FlashMessage>       
                }  
                {flashInfo != '' &&
                    <FlashMessage duration={flashDuration} persistOnHover={true}>
                        <p className="text-blue-500">{flashInfo}</p>
                    </FlashMessage>       
                }                    
            </div>
     
        </>
    )
})