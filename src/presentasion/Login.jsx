import readValue, { readFirebase } from "../model/GetNotedData"

export default function LoginPage(){
    return(
        <section className="
        bg-gray-50
        ">
            <div className="
            flex flex-col items-center justify-center px-6 py-8 mx-auto
            md:h-screen lg:py-0
            ">
                <div className="
                w-full rounded-lg shadow dark:border
                md:mt-0 sm:max-w-md xl:p-0
                ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                     <TitleCard></TitleCard>   
                     <LoginForm></LoginForm>
                    </div>
                </div>
            </div>
        </section>
    )
}

function TitleCard(){
    return(
        <h1 className="
        text-xl font-bold md:text-2xl
        ">
            Login to your account
        </h1>
    )
}

function LoginForm(){
    return(
        <form className="space-y-4 md:space-y-6" action="">
            <EmailBox></EmailBox>
            <PasswordBox></PasswordBox>
            <ButtonSubmit></ButtonSubmit>
        </form>
    )
}

function EmailBox(){
    return(
        <div>
            <label for="email" className="block mb-2 text-sm">
                email
            </label>
            <input 
            type="email" name="email" id="email" 
            className="bg-gray-50 border border-gray-300 
            text-gray-900 sm:text-sm rounded-lg 
            :ring-primary-600 focus:border-primary-600 
            block w-full p-2.5 " 
            placeholder="name@company.com" required=""></input>
        </div>
    )
}

function PasswordBox(){
    return(
        <div>
            <label for="email" className="block mb-2 text-sm">
                password
            </label>
            <input 
            type="email" name="email" id="email" 
            className="bg-gray-50 border border-gray-300 
            text-gray-900 sm:text-sm rounded-lg 
            :ring-primary-600 focus:border-primary-600 
            block w-full p-2.5 " 
            placeholder="name@company.com" required=""></input>
        </div>
    )
}

function ButtonSubmit(){
    return(
        <button type="submit" 
        className="w-full text-white bg-gray-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        onClick={()=>{
            console.log(readFirebase)
        }}
        >Sign In</button>
    )

}