
import { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import FlashMessage from 'react-flash-message'

export const FlashMessageDisplay = forwardRef((props, ref): JSX.Element => {
    const [ flashError, setFlashError] = useState('')
    const [ flashSuccess, setFlashSuccess ] = useState('')
    const flashDuration = 5000

    // forwardRef, useImperativeHandle this lets us call / set state from parent component/s useRef
    useImperativeHandle(ref, () => ({
        setErrorMessage(message: string) {
            setFlashError(message)
        },
        setSuccessMessage(message: string) {
            setFlashSuccess(message)
        }
    }))

    useEffect(() => {
        setTimeout(() => {setFlashError('')}, flashDuration)
        setTimeout(() => {setFlashSuccess('')}, flashDuration)
    }, [flashError, flashSuccess])

    return (
        <>
            {flashError != '' &&
                <FlashMessage duration={flashDuration} persistOnHover={true}>
                    <p className="m-5 p-2 bg-red-200 border-red-900 border-2 text-center text-red-700" >{flashError}</p>
                </FlashMessage>   
            }
            {flashSuccess != '' &&
                <FlashMessage duration={flashDuration} persistOnHover={true}>
                    <p className="m-5 p-2 bg-green-200 border-green-900 border-2 text-center text-green-700" >{flashSuccess}</p>
                </FlashMessage>       
            }         
        </>
    )
})