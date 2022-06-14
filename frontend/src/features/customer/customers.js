
import customerIcon from '../../images/customer_01.png'

export const Customers = () => {
    return (
        <div className="flex justify-around text-center border-2 my-5 p-5 bg-white border-black mx-auto">
            <div className="p-10 border-2 border-red-300 rounded-lg">
                <img src={customerIcon} alt="customer image here" className="w-96 h-96" /> 
                <p className='pt-20 text-3xl'>Customers</p>                    
            </div>            
        </div>
    )
}