import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function Index({ products, auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Products</h2>}
        >
            <Head title="Products" />

            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="mb-4">
                    <InertiaLink href="/products/create" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Create Product
                    </InertiaLink>
                </div>

                {products.length > 0 ? (
                    <table className="table-fixed">
                        <thead>
                        <tr>
                            <th className="w-1/3 px-4 py-2">Name</th>
                            <th className="w-1/3 px-4 py-2">Description</th>
                            <th className="w-1/3 px-4 py-2">Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td className="border px-4 py-2">{product.name}</td>
                                <td className="border px-4 py-2">{product.description}</td>
                                <td className="border px-4 py-2">{product.price}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
