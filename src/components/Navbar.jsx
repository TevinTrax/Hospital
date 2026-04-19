import {FaHospital} from 'react-icons/fa';

function Navbar() {
    return(
        <nav className="w-full p-4 z-50 top-0 bg-linear-to-r from-blue-100 via-blue-50 to-blue-100 border-b border-blue-200 fixed">
            <div className="flex items-center justify-between">
                <div className='flex items-center'>
                    <div className='w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center mr-2'>
                        <FaHospital size={20} className="text-white" />
                    </div>
                    <h1 className="text-xl text-gray-800 font-bold">Manilla</h1>
                </div>
                <div>
                    <ul className="flex items-center space-x-8 text-md font-medium text-gray-600 cursor-pointer">
                        <li className='hover:text-gray-900'>Home</li>
                        <li className='hover:text-gray-900'>Services</li>
                        <li className='hover:text-gray-900'>Doctors</li>
                        <li className='hover:text-gray-900'>Appointments</li>
                        <li className='hover:text-gray-900'>Pharmacy</li>
                        <li className='hover:text-gray-900'>Contact</li>
                    </ul>
                </div>
                <div className='flex items-center justify-between gap-4'>
                    <button className='text-gray-800 text-md font-bold px-4 py-2 cursor-pointer'>Login</button>
                    <button className='bg-linear-to-br from-blue-500 to-blue-300 text-white px-4 py-2 rounded-lg transition-transform hover:scale-105 text-md font-bold cursor-pointer'>Register</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;