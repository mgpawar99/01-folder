// function User() {
//   return (
   
//         <h1>Ayy Saru kay kartey I love You mala tuzi lai 8van yetiye..... </h1>
   
//   );
// }

// export default User;
 

import { useEffect, useState } from "react";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

   
    useEffect(() => {
      console.log("useEffect Start");
    fetch("https://localhost:7068/api/Product")
        .then(response => {
          debugger;
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }

            return response.json();
        })
        .then(data => {
            console.log("API DATA:", data);
            setProducts(data);
            setLoading(false);
        })
        .catch(error => {
            console.error("API ERROR:", error);
            setError(error.message);
            setLoading(false);
        });
}, []);


    if (loading) {
        return <h3>Loading...</h3>;
    }

    if (error) {
        return <h3>Error: {error}</h3>;
    }

    return (
        <div>
            <h2>Product List</h2>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map(product => (
                        <tr key={product.productID}>
                            <td>{product.productID}</td>
                            <td>{product.productName}</td>
                            <td>{product.productPrice}</td>
                        </tr>
                 
                 ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductList;
