"use client"
import { useState } from 'react';
import { registrationFormControls } from "@/utils";
import InputFields from "../components/formElements/inputFields/page";
import { loginFormControls } from "@/utils";
import SelectComponent from "../components/formElements/selectFields/page";
import { usePathname, useRouter } from "next/navigation";

export default function Register() {
    const register = false;
    const router = useRouter(); // Initialize the router object
    const [formData, setFormData] = useState({
        name: '',
        email: '', // Define email in the state
        password: '', // Define password in the state
        role: '', // Add role to your form fields
    });


    // Handle changes in form fields
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData) // Use formData from state
            });
            console.log(formData, 'formData')
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data, 'data'); // Log the response data from the API

            // You can add logic here to handle a successful registration response
            // For example, you can display a success message or redirect the user.

        } catch (error) {
            console.error('Error:', error.message);
            // You can add logic here to handle errors, such as displaying an error message.
        }
    }

    return (
        <div>
            <div className="flex flex-col bg-white justify-center max-w-2xl py-7 mt-20 px-10 mx-auto shadow-2xl">
                <p className="w-full text-4xl font-medium text-center mb-10">
                    Register
                </p>
                {register ?

                    <div className="text-center">
                        <p className="text-2xl font-bold">Already  register please login</p>
                        <button onClick={() => router.push("/login")} className="bg-gray-500 w-full p-5 rounded-sm my-20 text-white text-2xl">Login</button>
                    </div>
                    :
                    <form onSubmit={handleSubmit}>
                        {registrationFormControls.map((item) =>
                            item.componentType === 'input' ? (
                                <InputFields
                                    key={item.id}
                                    label={item.label}
                                    placeholder={item.placeholder}
                                    onChange={(event) => {
                                        setFormData({
                                            ...formData,
                                            [item.id]: event.target.value,
                                        });
                                    }}
                                    value={formData[item.id] || ''} // Get value from formData state
                                    type={item.type}
                                    componentType={item.input}
                                />
                            ) : item.componentType === 'select' ? (
                                <SelectComponent
                                    key={item.id}
                                    options={item.options}
                                    label={item.label}
                                    onChange={(event) => {
                                        setFormData({
                                            ...formData,
                                            [item.id]: event.target.value,
                                        });
                                    }}
                                    value={formData[item.id] || ''} // Get value from formData state
                                />
                            ) : null
                        )}
                        <button className="bg-gray-500 w-full p-5 rounded-sm text-white text-2xl" type="submit">Register</button>
                    </form>
                }

            </div>
        </div>
    )
}