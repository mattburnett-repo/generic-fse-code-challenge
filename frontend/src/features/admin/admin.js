
import adminIcon from '../../images/admin_01.png'

export const Admin = () => {
    return (
        <div className="flex justify-around text-center border-2 my-5 p-5 bg-white border-black mx-auto">
            <div className="p-10 border-2 border-blue-300 rounded-lg">
                <img src={adminIcon} alt="customer image here" className="w-96 h-96" /> 
                <p className='pt-20 text-3xl'>Admin</p>                    
            </div>            
        </div>
    )
}