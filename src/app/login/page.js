"use client";

import { loginFormControls } from "@/utils";
import InputFields from "../components/formElements/inputFields/page";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter(); // Initialize the router object
    return (
        <div>
            <div className="flex flex-col bg-white justify-center max-w-2xl py-7 mt-20 px-10 mx-auto shadow-2xl">
                <p className="w-full text-4xl font-medium text-center font-serif mb-10">
                    Login
                </p>
                {loginFormControls.map((item) => (

                    <InputFields label={item.label}
                        placeholder={item.placeholder}
                        onChange={() => console.log('dd')}
                        value={'value'}
                        type={item.type}

                    />
                )

                )}
                <button className="bg-gray-500 w-full p-5 rounded-sm text-white text-2xl">Login</button>
                <p className="w-full text-base   font-serif my-5">
                    New to website ?
                </p>

                <button onClick={() => router.push("/register")} className="bg-gray-500 w-full p-5 rounded-sm text-white text-2xl">Register</button>
            </div>


        </div>
    )
}