"use client"
import { registrationFormControls } from "@/utils";
import InputFields from "../components/formElements/inputFields/page";
import { loginFormControls } from "@/utils";
import SelectComponent from "../components/formElements/selectFields/page";
import { usePathname, useRouter } from "next/navigation";

export default function Register() {
    const register = true;
    const router = useRouter(); // Initialize the router object
    return (
        <div>
            <div className="flex flex-col bg-white justify-center max-w-2xl py-7 mt-20 px-10 mx-auto shadow-2xl">
                <p className="w-full text-4xl font-medium text-center font-serif mb-10">
                    Register
                </p>
                {register ?

                    <div className="text-center">
                        <p className="text-2xl font-bold">Already  register please login</p>
                        <button onClick={() => router.push("/login")} className="bg-gray-500 w-full p-5 rounded-sm my-20 text-white text-2xl">Login</button>

                    </div>
                    :
                    <>
                        {registrationFormControls.map((item) =>

                            item.componentType === "input" ?
                                (


                                    <InputFields label={item.label}
                                        placeholder={item.placeholder}
                                        onChange={() => console.log('dd')}
                                        value={'value'}
                                        type={item.type}
                                        componentType={item.input}

                                    />
                                )
                                :
                                item.componentType === "select" ? (
                                    <SelectComponent
                                        options={item.options}
                                        label={item.label}
                                        // onChange={(event) => {
                                        //     setFormData({
                                        //         ...formData,
                                        //         [item.id]: event.target.value,
                                        //     });
                                        // }}
                                        value={item[item.id]}
                                    />
                                ) : null

                        )}
                        <button className="bg-gray-500 w-full p-5 rounded-sm text-white text-2xl">Register</button>
                    </>
                }

            </div>
        </div>
    )
}