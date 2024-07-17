import { useEffect, useState } from 'react';
import axios from 'axios';

interface Meal {
    _id?: string;
    category: string;
    foodname: string;
    price: string;
    active: boolean;
}

const MealList = () => {
    const [meals, setMeals] = useState<Meal[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [filter, setFilter] = useState<string>('Lunch'); // Default filter value

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await axios.get<Meal[]>(
                    'http://localhost:3000/api/getmeals', {
                        params: { category: filter }
                    });
                setMeals(response.data);
            } catch (err: any) {
                console.error(err);
                setError(err.response?.data?.error || err.message || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchMeals();
    }, [filter]); // Trigger fetch on filter change

    const handleDeleteMeal = async (id: string) => {
        try {
            await axios.delete(`http://localhost:3000/api/deletemeal/${id}`);
            setMeals((prevMeals) => prevMeals.filter(meal => meal._id !== id));
        } catch (err: any) {
            console.error(err);
            setError(err.response?.data?.error || err.message || 'An error occurred');
        }
    };

    const handleChangeFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(event.target.value);
    };

    if (loading) return <p className="text-center mt-10">Loading...</p>;
    if (error) return <p className="text-center mt-10 text-red-500">Error: {error}</p>;

    return (
        <div className="container mx-auto mt-10">
            <div className="mb-4">
                <label className="mr-2">Filter by:</label>
                <select
                    value={filter}
                    onChange={handleChangeFilter}
                    className="p-2 rounded border"
                >
                    <option value="Lunch">Lunch</option>
                    <option value="Breakfast">Breakfast</option>
                    {/* Add more options for other categories as needed */}
                </select>
            </div>
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-gray-800 text-white">
                <tr>
                    <th className="py-2 px-4">Food Name</th>
                    <th className="py-2 px-4">Category</th>
                    <th className="py-2 px-4">Price</th>
                    <th className="py-2 px-4">Status</th>
                    <th className="py-2 px-4">Actions</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                {meals.map((meal) => (
                    <tr key={meal._id}>
                        <td className="py-2 px-4">{meal.foodname}</td>
                        <td className="py-2 px-4">{meal.category}</td>
                        <td className="py-2 px-4">{meal.price}</td>
                        <td className={`py-2 px-4 ${meal.active ? 'text-green-500' : 'text-red-500'}`}>
                            {meal.active ? 'Available' : 'Unavailable'}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default MealList;
