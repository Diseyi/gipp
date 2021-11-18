import React from 'react';
import PasswordResetModal from '../../../reusable/PasswordResetModal';
import lock from '../../../assets/lock.svg';


const PasswordReset = () => {
    return (
        <div>
            <PasswordResetModal
             value="Create a New Password"
             src={lock}
             h1="Create a New Password"
            />
        </div>
    )
}

export default PasswordReset
