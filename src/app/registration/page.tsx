    import BigTitle from "@/components/BigTitle/page";
import ContactForm from "../../components/ContactForm/page"
    
    const registration = () => {
        return (
            <div>
                
              <BigTitle text1={"Registration"} text2={"Page"} />
                <div className="flex flex-col w-[300px] md:w-[450px] m-6">
                    <h1 className="text-white h2">Register for Our Events</h1>
                    <h2 className="text-c-pink h2 w-[300px] md:w-[740px] lg:w-[1000px] ">
                        Don't miss the chance to be part of our exciting events! Register now to secure your spot and join a vibrant community of like-minded individuals. 
                    </h2>
                </div>

              <ContactForm />
            </div>
        )
    };
    
    export default registration
     