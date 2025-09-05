// import React, { useEffect, useState } from 'react'
// import { useAppContext } from '../context/AppContext'
// // import { dummyOrders } from '../assets/assets'
// // import { dummyOrders } from '../assets/assets'

// const MyOrders = () => {

//     const [myorders,setMyOrders] = useState([])
//     const {currency, axios, user} = useAppContext()

//     const fetchMyOrders= async ()=>{
//         try {
//             const { data } = await axios.get('/api/order/user')
//             if(data.success){
//                 setMyOrders(data.message || ['No orders found']);
//             }
//         } catch (error) {
//             console.log(error)
//         }
       
//     }

//     useEffect(()=>{
//         if(user){
//              fetchMyOrders()
//         }     
        
//     },[user])

//   return (
//     <div className='mt-16 pb-16'>
//         <div className='flex flex-col items-end w-max mb-8'>
//             <p className='text-2xl font-medium uppercase'>My Orders</p>
//             <div className='w-16 h-0.5 bg-primary rounded-full'></div>
//         </div>
//         {myorders.map((order,index)=>(
//             <div key={index} className='border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl'>
//                 <p className='flex justify-between md:items-center text-gray-400 md:font-medium max-md:flex-col'>
//                     <span>OrderId : {order._id}</span>
//                     <span>Payment : {order.paymentType}</span>
//                     <span>Total Amount : {currency}{order.amount}</span>
//                 </p>
//                 {order.items.map((item,index)=>(
//                     <div key={index}
//                     className={`relative bg-white text-gray-500/70 ${order.items.length !== index + 1 && "border-b"} border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 md:gap-16 w-full max-w-4xl`}>
//                         <div className='flex items-center mb-4 md:mb-0'>
//                             <div className='bg-primary/10 p-4 rounded-lg'>
//                                 <img src={item.product.image[0]} alt="" className='w-16 h-16' />
//                             </div>
//                             <div className='ml-4'>
//                                 <h2 className='text-xl font-medium text-gray-800'>{item.product.name}</h2>
//                                 <p>Category : {item.product.category}</p>
//                             </div>
//                         </div>
//                         <div className='flex flex-col justify-center md:ml-8 mb-4 md:mb-0'>
//                             <p>Quantity: {item.quantity || "1"}</p>
//                             <p>Status: {order.status}</p>
//                             <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
//                         </div>
//                         <p className='text-primary text-lg font-medium'>
//                             Amount: {currency}{item.product.offerPrice * item.quantity}
//                         </p>
                            

//                     </div>
//                 ))}
//             </div>
//         ))}
//     </div>
//   )
// }

// export default MyOrders










// import React, { useEffect, useState } from 'react';

// import { useAppContext } from '../context/AppContext';

// const MyOrders = () => {
//   const [myOrders, setMyOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const { currency, axios, user } = useAppContext();

//   const fetchMyOrders = async () => {
//     try {
//       setLoading(true);
//       const { data } = await axios.get('/api/order/user');
//       console.log(data);
//       if (data.success) {
//         setMyOrders(data.message || []);
//       } else {
//         setError('Failed to fetch orders');
//       }
//     } catch (err) {
//       setError(err.message || 'An error occurred while fetching orders');
//     } finally {
//       setLoading(false);
//     }
//   };

// //     const fetchMyOrders = async () => {
// //   try {
// //     setLoading(true);
// //     const { data } = await axios.get('/api/order/user');
// //     console.log(data);
// //     if (data.success) {
// //       setMyOrders(data.message || []);
// //     } else {
// //       setError('Failed to fetch orders');
// //     }
// //   } catch (err) {
// //     setError(err.message || 'An error occurred while fetching orders');
// //   } finally {
// //     setLoading(false);
// //   }
// // };

//   useEffect(() => {
//     if (user) {
//       fetchMyOrders();
//     } else {
//       setLoading(false);
//       setMyOrders([]);
//     }
//   }, [user]);

//   if (loading) return <div className="mt-16 pb-16"><p>Loading...</p></div>;
//   if (error) return <div className="mt-16 pb-16"><p className="text-red-500">{error}</p></div>;

//   return (
//     <div className="mt-16 pb-16">
//       <div className="flex flex-col items-end w-max mb-8">
//         <p className="text-2xl font-medium uppercase">My Orders</p>
//         <div className="w-16 h-0.5 bg-primary rounded-full"></div>
//       </div>
//       {myOrders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         myOrders.map((order) => (
//           <div key={order._id} className="border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl">
//             <p className="flex justify-between md:items-center text-gray-400 md:font-medium max-md:flex-col">
//               <span>OrderId : {order._id}</span>
//               <span>Payment : {order.paymentType}</span>
//               <span>Total Amount : {currency}{order.amount}</span>
//             </p>
//             {Array.isArray(order.items) && order.items.length > 0 ? (
//               order.items.map((item, idx) => (
//                 <div
//                   key={item.product._id || idx}
//                   className={`relative bg-white text-gray-500/70 ${order.items.length !== idx + 1 ? "border-b" : ""} border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 md:gap-16 w-full max-w-4xl`}
//                 >
//                   <div className="flex items-center mb-4 md:mb-0">
//                     <div className="bg-primary/10 p-4 rounded-lg">
//                       <img src={item.product.image[0]} alt={item.product.name} className="w-16 h-16" />
//                     </div>
//                     <div className="ml-4">
//                       <h2 className="text-xl font-medium text-gray-800">{item.product.name}</h2>
//                       <p>Category : {item.product.category}</p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col justify-center md:ml-8 mb-4 md:mb-0">
//                     <p>Quantity: {item.quantity || "1"}</p>
//                     <p>Status: {order.status}</p>
//                     <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
//                   </div>
//                   <p className="text-primary text-lg font-medium">
//                     Amount: {currency}{item.product.offerPrice * item.quantity}
//                   </p>
//                 </div>
//               ))
//             ) : (
//               <p>No items found for this order.</p>
//             )}
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default MyOrders





// import React, { useEffect, useState } from 'react'
// import { useAppContext } from '../context/AppContext'

// const MyOrders = () => {
//     const [myorders, setMyOrders] = useState([])
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState('')
//     const { currency, axios, user } = useAppContext()

//     const fetchMyOrders = async () => {
//         try {
//             setLoading(true)
//             const { data } = await axios.get('/api/order/user')
//             if (data.success) {
//                 setMyOrders(data.message || [])
//             } else {
//                 setError('Failed to fetch orders')
//             }
//         } catch (error) {
//             setError(error.message || 'An error occurred while fetching orders')
//         } finally {
//             setLoading(false)
//         }
//     }

//     // Remove order from DB and UI
//     const handleCancelOrder = async (orderId) => {
//         if (!window.confirm('Are you sure you want to cancel and remove this order?')) return
//         try {
//             const { data } = await axios.delete(`/api/order/${orderId}`)
//             if (data.success) {
//                 setMyOrders(prev => prev.filter(order => order._id !== orderId))
//             } else {
//                 alert(data.message || 'Failed to remove order')
//             }
//         } catch (error) {
//             alert(error.message || 'Error removing order')
//         }
//     }

//     useEffect(() => {
//         if (user) {
//             fetchMyOrders()
//         } else {
//             setLoading(false)
//             setMyOrders([])
//         }
//     }, [user])

//     if (loading) return <div className="mt-16 pb-16"><p>Loading...</p></div>
//     if (error) return <div className="mt-16 pb-16"><p className="text-red-500">{error}</p></div>

//     return (
//         <div className='mt-16 pb-16'>
//             <div className='flex flex-col items-end w-max mb-8'>
//                 <p className='text-2xl font-medium uppercase'>My Orders</p>
//                 <div className='w-16 h-0.5 bg-primary rounded-full'></div>
//             </div>
//             {myorders.length === 0 ? (
//                 <p>No orders found.</p>
//             ) : (
//                 myorders.map((order, index) => (
//                     <div key={order._id || index} className='border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl'>
//                         <p className='flex justify-between md:items-center text-gray-400 md:font-medium max-md:flex-col'>
//                             <span>OrderId : {order._id}</span>
//                             <span>Payment : {order.paymentType}</span>
//                             <span>Total Amount : {currency}{order.amount}</span>
//                         </p>
//                         <button
//                             className="mt-2 mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//                             onClick={() => handleCancelOrder(order._id)}
//                         >
//                             Cancel & Remove Order
//                         </button>
//                         {Array.isArray(order.items) && order.items.length > 0 ? (
//                             order.items.map((item, itemIndex) => (
//                                 <div key={item.product._id || itemIndex}
//                                     className={`relative bg-white text-gray-500/70 ${order.items.length !== itemIndex + 1 && "border-b"} border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 md:gap-16 w-full max-w-4xl`}>
//                                     <div className='flex items-center mb-4 md:mb-0'>
//                                         <div className='bg-primary/10 p-4 rounded-lg'>
//                                             <img src={item.product.image[0]} alt={item.product.name} className='w-16 h-16' />
//                                         </div>
//                                         <div className='ml-4'>
//                                             <h2 className='text-xl font-medium text-gray-800'>{item.product.name}</h2>
//                                             <p>Category : {item.product.category}</p>
//                                         </div>
//                                     </div>
//                                     <div className='flex flex-col justify-center md:ml-8 mb-4 md:mb-0'>
//                                         <p>Quantity: {item.quantity || "1"}</p>
//                                         <p>Status: {order.status}</p>
//                                         <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
//                                     </div>
//                                     <p className='text-primary text-lg font-medium'>
//                                         Amount: {currency}{item.product.offerPrice * item.quantity}
//                                     </p>
//                                 </div>
//                             ))
//                         ) : (
//                             <p>No items found for this order.</p>
//                         )}
//                     </div>
//                 ))
//             )}
//         </div>
//     )
// }

// export default MyOrders




import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { currency, axios, user } = useAppContext();

    const fetchMyOrders = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get('/api/order/user');
            if (data.success) {
                setMyOrders(data.message || []);
            } else {
                setError('Failed to fetch orders');
            }
        } catch (err) {
            setError(err.message || 'An error occurred while fetching orders');
        } finally {
            setLoading(false);
        }
    };

    const handleCancelOrder = async (orderId) => {
        if (!window.confirm('Are you sure you want to cancel and remove this order?')) return;
        try {
            const { data } = await axios.delete(`/api/order/${orderId}`);
            if (data.success) {
                setMyOrders(prev => prev.filter(order => order._id !== orderId));
            } else {
                alert(data.message || 'Failed to remove order');
            }
        } catch (error) {
            alert(error.message || 'Error removing order');
        }
    };

    useEffect(() => {
        if (user) {
            fetchMyOrders();
        } else {
            setLoading(false);
            setMyOrders([]);
        }
    }, [user]);

    if (loading) return <div className="mt-16 pb-16"><p>Loading...</p></div>;
    if (error) return <div className="mt-16 pb-16"><p className="text-red-500">{error}</p></div>;

    return (
        <div className='mt-16 pb-16'>
            <div className='flex flex-col items-end w-max mb-8'>
                <p className='text-2xl font-medium uppercase'>My Orders</p>
                <div className='w-16 h-0.5 bg-primary rounded-full'></div>
            </div>
            {myOrders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                myOrders.map((order, index) => (
                    <div key={order._id || index} className='border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl relative'>
                        {/* Cancel button at the right side */}
                        <button
                            className="absolute top-4 right-4 px-3 py-0.5 bg-primary text-white rounded hover:bg-primary-dull"
                            onClick={() => handleCancelOrder(order._id)}
                        > Cancel & Remove
                           
                        </button>
                        <p className='flex justify-between md:items-center text-gray-400 md:font-medium max-md:flex-col'>
                            <span>OrderId : {order._id}</span>
                            <span>Payment : {order.paymentType}</span>
                            <span>Total Amount : {currency}{order.amount}</span>
                        </p>
                        {Array.isArray(order.items) && order.items.length > 0 ? (
                            order.items.map((item, itemIndex) => (
                                <div key={item.product._id || itemIndex}
                                    className={`relative bg-white text-gray-500/70 ${order.items.length !== itemIndex + 1 && "border-b"} border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 md:gap-16 w-full max-w-4xl`}>
                                    <div className='flex items-center mb-4 md:mb-0'>
                                        <div className='bg-primary/10 p-4 rounded-lg'>
                                            <img src={item.product.image[0]} alt={item.product.name} className='w-16 h-16' />
                                        </div>
                                        <div className='ml-4'>
                                            <h2 className='text-xl font-medium text-gray-800'>{item.product.name}</h2>
                                            <p>Category : {item.product.category}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-center md:ml-8 mb-4 md:mb-0'>
                                        <p>Quantity: {item.quantity || "1"}</p>
                                        <p>Status: {order.status}</p>
                                        <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                                    </div>
                                    <p className='text-primary text-lg font-medium'>
                                        Amount: {currency}{item.product.offerPrice * item.quantity}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p>No items found for this order.</p>
                        )}
                    </div>
                ))
            )}
        </div>
    );
};

export default MyOrders;