import React from 'react';
import { ImSpinner3 } from 'react-icons/im';

const Spinner: React.FC = () => {
    return (
        <div className="flex justify-center items-center">
            <ImSpinner3 className="animate-spin text-white-300 fill-white-300 mr-2 w-6 h-6" />
            <span className='sr-only'>Loading...</span>
        </div>
    );
};

export default Spinner;