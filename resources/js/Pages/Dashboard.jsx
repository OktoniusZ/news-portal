import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { router } from '@inertiajs/react'

export default function Dashboard({ auth }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = () => {
        const data = {
            title, description, category
        }
        
        router.post('/news', data)
        setTitle('')
        setDescription('')
        setCategory('')
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12" data-theme="light">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 text-gray-900">
                        <input
                            type="text"
                            placeholder="Type here"
                            className="m-2 input input-bordered w-full" onChange={(title) => setTitle(title.target.value)} value={title}
                        />
                        <input
                            type="text"
                            placeholder="Type here"
                            className="m-2 input input-bordered w-full" onChange={(description) => setDescription(description.target.value)} value={description}
                        />
                        <input
                            type="text"
                            placeholder="Type here"
                            className="m-2 input input-bordered w-full" onChange={(category) => setCategory(category.target.value)} value={category}
                        />
                        <button className="btn btn-outline m-2" onClick={() => handleSubmit()}>SUBMIT</button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
