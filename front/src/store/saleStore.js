import { create } from 'zustand';

const useSaleStore = create((set) => ({
    products: [
      { id: 1, code: "1", name: "Producto Uno", quantity: 3, price: 7100, image: "@/assets/images/coca_lata.png" },
      { id: 2, code: "2", name: "Producto Dos", quantity: 1, price: 4300, image: "@/assets/images/coca_lata.png" },
      { id: 3, code: "3", name: "Producto Tres", quantity: 6, price: 5400, image: "@/assets/images/coca_lata.png" },
      { id: 4, code: "4", name: "Producto Cuatro", quantity: 2, price: 3200, image: "@/assets/images/coca_lata.png" },
      { id: 5, code: "5", name: "Producto Cinco", quantity: 5, price: 8100, image: "@/assets/images/coca_lata.png" },
      { id: 6, code: "6", name: "Producto Seis", quantity: 4, price: 6400, image: "@/assets/images/coca_lata.png" },
      { id: 7, code: "7", name: "Producto Siete", quantity: 7, price: 9100, image: "@/assets/images/coca_lata.png" },
      { id: 8, code: "8", name: "Producto Ocho", quantity: 8, price: 10200, image: "@/assets/images/coca_lata.png" },
      { id: 9, code: "9", name: "Producto Nueve", quantity: 9, price: 11300, image: "@/assets/images/coca_lata.png" },
      { id: 10, code: "10", name: "Producto Diez", quantity: 10, price: 12400, image: "@/assets/images/coca_lata.png" },
      { id: 11, code: "11", name: "Producto Once", quantity: 11, price: 13500, image: "@/assets/images/coca_lata.png" },
      { id: 12, code: "12", name: "Producto Doce", quantity: 12, price: 14600, image: "@/assets/images/coca_lata.png" },
      { id: 13, code: "13", name: "Producto Trece", quantity: 13, price: 15700, image: "@/assets/images/coca_lata.png" },
      { id: 14, code: "14", name: "Producto Catorce", quantity: 14, price: 16800, image: "@/assets/images/coca_lata.png" },
      { id: 15, code: "15", name: "Producto Quince", quantity: 15, price: 17900, image: "@/assets/images/coca_lata.png" },
      { id: 16, code: "16", name: "Producto Dieciseis", quantity: 16, price: 19000, image: "@/assets/images/coca_lata.png" },
      { id: 17, code: "17", name: "Producto Diecisiete", quantity: 17, price: 20100, image: "@/assets/images/coca_lata.png" },
      { id: 18, code: "18", name: "Producto Dieciocho", quantity: 18, price: 21200, image: "@/assets/images/coca_lata.png" },
      { id: 19, code: "19", name: "Producto Diecinueve", quantity: 19, price: 22300, image: "@/assets/images/coca_lata.png" },
      { id: 20, code: "20", name: "Producto Veinte", quantity: 20, price: 23400, image: "@/assets/images/coca_lata.png" },
    ],
    cart: [],
    setProducts: (products) => set({products}),
    addToCart: (product) => set((state) => {
        const existingItem = state.cart.find((item) => item.id === product.id);
  
        if (existingItem) {
          return {
            cart: state.cart.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          };
        }
  
        return {
          cart: [...state.cart, { ...product, quantity: 1 }],
        };
      }),
    subtractFromCart: (id) =>
        set((state) => ({
            cart: state.cart
            .map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0),
    })),
    removeFromCart: (id) =>
        set((state) => ({ cart: state.cart.filter((item) => item.id !== id)
    })),
    emptyCart: () => set(() => ({ cart: []}))
}));

const items = [];

export default useSaleStore;