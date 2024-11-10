export async function fetchCategories() {
    const response = await fetch('http://localhost:3000/api/categories');
    if (!response.ok) {
        throw new Error('Failed to fetch data.');
    }
    return await response.json();
}

export async function fetchProducts() {
    const response = await fetch('http://localhost:3000/api/products');
    if (!response.ok) {
        throw new Error('Failed to fetch data.');
    }
    return await response.json();
}