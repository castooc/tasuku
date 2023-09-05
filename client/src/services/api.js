export const getUsers = async () => {
  const res = await fetch(`/tasuku/users`);
  return await res.json();
};

export const getUser = async (userId) => {
  const res = await fetch(`/tasuku/users/${userId}`);
  return await res.json();
};

export const createUser = async (body) => {
  const res = await fetch("/tasuku/createuser", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  return await res.json();
};

// export const deleteCartItem = async (itemId) => {
//   const res = await fetch(`/ecommercewatch/deleteitemcart/${itemId}`, {
//     method: "DELETE"
//   });
//   return await res.json();
// };

// export const deleteCartItems = async () => {
//   const res = await fetch(`/ecommercewatch/deleteitemscart`, {
//     method: "DELETE"
//   });
//    return await res.json();
// };

// export const updateCart = async (itemId, quantity) => {
//   const res = await fetch(`/ecommercewatch/quantityitem/${itemId}/${quantity}`, {
//     method: "PATCH",
//     headers: {
//       "Accept": "application/json",
//       "Content-Type": "application/json"
//     }
//   });
//   return res.json();
// }

// export const updateQuantity = async (itemId, quantity) => {
//   const res = await fetch(`/ecommercewatch/updatequantity/${itemId}/${quantity}`, {
//     method: "PATCH",
//     headers: {
//       "Accept": "application/json",
//       "Content-Type": "application/json"
//     }
//   });
//   return res.json();
// }

// export const getCategories = async () => {
//   const res = await fetch(`/ecommercewatch/categorie`);
//   return await res.json();
// }