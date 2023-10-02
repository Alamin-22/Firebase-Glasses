import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {
    const {handleGoogleLogin}= useContext(AuthContext)
    // console.log(handleGoogleLogin);



    const handleSocialLogIn=(media)=>{
        media()
        .then(response=>{
            console.log(response.user)
        })
        .catch(error=>{
            console.log(error)
        })

    }


    return (
        <>
            <div className="divider">continue with</div>
            <div className="">
                <button onClick={()=>handleSocialLogIn(handleGoogleLogin)} className="btn btn-neutral btn-sm  btn-outline">Google</button>
            </div>
        </>
    );
};

export default SocialLogin;