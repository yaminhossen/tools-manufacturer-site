import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import logo from '../../images/logo/google logo.png';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className="bg-warning w-50"></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className="bg-warning w-50"></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-warning  w-100'><img width={30} src={logo} alt="" /> Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;


// import React from 'react';
// import auth from '../../../firebase.init';
// import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
// // import logo from '../../../images/logo/google logo.png'
// import logo from '../../images/logo/google logo.png'
// import { useLocation, useNavigate } from 'react-router-dom';
// import Loading from '../Shared/Loading/Loading';
// // import Loading from '../../Shared/Loading/Loading';

// const SocialLogin = () => {
//     const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
//     const navigate = useNavigate();
//     const location = useLocation();
//     let from = location.state?.from?.pathname || "/";

//     let errorElement;
//     if (error) {
//         errorElement = <p className='text-danger'>Error: {error?.message}</p>
//     }
//     if (loading) {
//         return <Loading></Loading>
//     }
//     if (user) {
//         navigate(from, { replace: true });
//     }
//     return (
//         <div>
//             <div className='d-flex align-items-center'>
//                 <div style={{ height: '1px' }} className="bg-warning w-50"></div>
//                 <p className='mt-2 px-2'>or</p>
//                 <div style={{ height: '1px' }} className="bg-warning w-50"></div>
//             </div>
//             {errorElement}
//             <div>
//                 <button onClick={() => signInWithGoogle()} className='btn btn-warning  w-100'><img width={30} src={logo} alt="" /> Google Sign In</button>
//             </div>
//         </div>
//     );
// };

// export default SocialLogin;