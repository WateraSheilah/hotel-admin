import { useState } from 'react';
import axios from 'axios';

const FoodForm = () => {
    const [form, setForm] = useState({
        category: '',
        foodname: '',
        components: '',
        notes: '',
        description: '',
        price: '',
        cookingtime: '',
        active: false,
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            setForm({
                ...form,
                [name]: (e.target as HTMLInputElement).checked,
            });
        } else {
            setForm({
                ...form,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('https://hotel-admin-opal.vercel.app/api/addmeal', form);
            console.log('Meal added:', response.data);
            // Optionally, reset the form or show a success message
            setForm({
                category: '',
                foodname: '',
                components: '',
                notes: '',
                description: '',
                price: '',
                cookingtime: '',
                active: false,
            });
            setError(null);
        } catch (err: any) {
            console.error('Error adding meal:', err);
            // Handle error, show error message, etc.
            setError(err.response?.data?.err || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-wrap w-3/4 border-b-black border-[1px] rounded-[10px] m-10">
            <form className="w-full h-[608px]" onSubmit={handleSubmit}>
                {/* Category */}
                <div className="md:flex md:items-center mb-6 p-4">
                    <div className='w-1/2 mt-10 ml-4'>
                        <div className="flex mb-3.5">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold mb-1 md:mb-0"
                                    htmlFor="category"
                                >
                                    Category
                                </label>
                            </div>
                            <div className="md:w-3/4">
                                <input
                                    className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
                                    id="category"
                                    type="text"
                                    name="category"
                                    value={form.category}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Food Name */}
                        <div className="flex mb-3.5">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold mb-1 md:mb-0"
                                    htmlFor="foodname"
                                >
                                    Food Name
                                </label>
                            </div>
                            <div className="md:w-3/4">
                                <input
                                    className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
                                    id="foodname"
                                    type="text"
                                    name="foodname"
                                    value={form.foodname}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Components */}
                        <div className="flex mb-3.5">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold mb-1 md:mb-0"
                                    htmlFor="components"
                                >
                                    Components
                                </label>
                            </div>
                            <div className="md:w-3/4">
                                <input
                                    className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
                                    id="components"
                                    type="text"
                                    name="components"
                                    value={form.components}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Notes */}
                        <div className="flex mb-3.5">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold mb-1 md:mb-0"
                                    htmlFor="notes"
                                >
                                    Notes
                                </label>
                            </div>
                            <div className="md:w-3/4">
                                <input
                                    className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
                                    id="notes"
                                    type="text"
                                    name="notes"
                                    value={form.notes}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div className="flex mb-3.5">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold mb-1 md:mb-0"
                                    htmlFor="description"
                                >
                                    Description
                                </label>
                            </div>
                            <div className="md:w-3/4">
                                <input
                                    className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
                                    id="description"
                                    type="text"
                                    name="description"
                                    value={form.description}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Price */}
                        <div className="flex mb-3.5">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold mb-1 md:mb-0"
                                    htmlFor="price"
                                >
                                    Price
                                </label>
                            </div>
                            <div className="md:w-3/4">
                                <input
                                    className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
                                    id="price"
                                    type="text"
                                    name="price"
                                    value={form.price}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Cooking Time */}
                        <div className="flex mb-3.5">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold mb-1 md:mb-0"
                                    htmlFor="cookingtime"
                                >
                                    Cooking Time
                                </label>
                            </div>
                            <div className="md:w-3/4">
                                <input
                                    className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
                                    id="cookingtime"
                                    type="text"
                                    name="cookingtime"
                                    value={form.cookingtime}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Active */}
                        <div className="flex mb-3.5">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold mb-1 md:mb-0"
                                    htmlFor="active"
                                >
                                    Active
                                </label>
                            </div>
                            <div className="md:w-3/4">
                                <input
                                    className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
                                    id="active"
                                    type="checkbox"
                                    name="active"
                                    checked={form.active}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="md:w-3/4 flex justify-between px-4">
                            <button
                                type="submit"
                                className='w-[100px] h-[30px] border border-black rounded-[6px] text-black'
                                disabled={loading}
                            >
                                {loading ? 'Saving...' : 'Save'}
                            </button>
                        </div>

                        {/* Error Handling */}
                        {error && <p className="text-red-500 text-sm mt-2 ml-4">{error}</p>}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FoodForm;
