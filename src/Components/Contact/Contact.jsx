
const Contact = () => {
    return (
        <div>
            <div className="max-w-3xl mx-auto">
                <h1 className="text-6xl font-semibold  text-center">Contact us</h1>
                <p className="text-2xl font-medium  text-gray-400 text-center my-5">For further questions, including partnership opportunities, please email hello@creative-tim.com or contact using our contact form.</p>
                <form className="my-10">
                    <div className="flex justify-center space-x-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Full name" className="input input-bordered w-80" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='name' placeholder="Email" className="input input-bordered w-80" required />
                        </div>
                    </div>
                    <div className=" flex justify-center mt-5">
                        <textarea className="border-2  rounded-lg" name="textarea" cols="80" rows="10"></textarea>
                    </div>
                    <div className="w-72 mx-auto my-5">
                        <label className="cursor-pointer label">
                            <input type="checkbox"  className="checkbox checkbox-info" />
                            <span className="label-text">Accept Our Terms And Conditions</span>
                        </label>
                    </div>
                    <div className="w-[86%] mx-auto">
                        <button className="btn btn-primary w-full ">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;