import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {
    const {handleGoogleLogin, handleGitHubLogin}= useContext(AuthContext)
    // console.log(handleGoogleLogin);
    const navigate= useNavigate();



    const handleSocialLogIn=(media)=>{
        media()
        .then(() => {
            toast.success("User Logged In Successfully")
            navigate("/")
        })
        .catch(error => {
            toast.error(error.message)
            console.log(error)
        })

    }


    return (
        <>
            <div className="divider">continue with</div>
            <div className=" flex justify-evenly">
                <button onClick={()=>handleSocialLogIn(handleGoogleLogin)} className="btn btn-neutral btn-sm  btn-outline">Google</button>
                <button onClick={()=>handleSocialLogIn(handleGitHubLogin)} className="btn btn-neutral btn-sm  btn-outline normal-case">GitHub</button>
            </div>
        </>
    );
};

export default SocialLogin;