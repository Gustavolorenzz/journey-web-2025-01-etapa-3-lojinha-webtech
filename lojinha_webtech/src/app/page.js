import Image from "next/image";
import Product from "./components/Product";

export default function Home() {
  // Sample product data with ratings
  const products = [
    { id: 1, name: "Smartphone Galaxy Pro", price: 899.99, image: "https://via.placeholder.com/200x200/4A90E2/FFFFFF?text=Smartphone", rating: 4.5 },
    { id: 2, name: "Notebook Gamer Ultra", price: 2499.99, image: "https://via.placeholder.com/200x200/50C878/FFFFFF?text=Notebook", rating: 4.8 },
    { id: 3, name: "Fone Bluetooth Premium", price: 199.99, image: "https://via.placeholder.com/200x200/FF6B6B/FFFFFF?text=Fone", rating: 4.3 },
    { id: 4, name: "Smartwatch Fitness", price: 299.99, image: "https://via.placeholder.com/200x200/9B59B6/FFFFFF?text=Watch", rating: 4.1 },
    { id: 5, name: "Câmera DSLR Professional", price: 1599.99, image: "https://via.placeholder.com/200x200/E67E22/FFFFFF?text=Camera", rating: 4.7 },
    { id: 6, name: "Tablet Pro Max", price: 699.99, image: "https://via.placeholder.com/200x200/3498DB/FFFFFF?text=Tablet", rating: 4.4 },
    { id: 7, name: "Console Gaming Next", price: 499.99, image: "https://via.placeholder.com/200x200/2ECC71/FFFFFF?text=Console", rating: 4.9 },
    { id: 8, name: "Monitor 4K Ultra Wide", price: 399.99, image: "https://via.placeholder.com/200x200/F39C12/FFFFFF?text=Monitor", rating: 4.2 },
    { id: 9, name: "Teclado Mecânico RGB", price: 149.99, image: "https://via.placeholder.com/200x200/E74C3C/FFFFFF?text=Teclado", rating: 4.6 },
    { id: 10, name: "Mouse Gamer Pro", price: 89.99, image: "https://via.placeholder.com/200x200/8E44AD/FFFFFF?text=Mouse", rating: 4.0 },
    { id: 11, name: "Caixa de Som Bluetooth", price: 119.99, image: "https://via.placeholder.com/200x200/16A085/FFFFFF?text=Caixa", rating: 4.3 },
    { id: 12, name: "Carregador Sem Fio", price: 59.99, image: "https://via.placeholder.com/200x200/D35400/FFFFFF?text=Carregador", rating: 3.9 }
  ];
  
  return (
    <main className="max-w-screen-xl mx-auto py-8 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Lojinha WebTech</h1>
        <p className="text-lg text-gray-600">Tecnologia de qualidade ao seu alcance</p>
      </div>
      
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-700">Nossos Produtos</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="transform transition-transform hover:scale-105">
              <Product 
                image={product.image}
                name={product.name}
                rating={product.rating}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Por que escolher a WebTech?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-4">
            <div className="text-4xl mb-3">🚚</div>
            <h4 className="font-semibold text-lg mb-2">Entrega Rápida</h4>
            <p className="text-gray-600">Receba seus produtos em até 24h</p>
          </div>
          <div className="p-4">
            <div className="text-4xl mb-3">🛡️</div>
            <h4 className="font-semibold text-lg mb-2">Garantia Total</h4>
            <p className="text-gray-600">1 ano de garantia em todos os produtos</p>
          </div>
          <div className="p-4">
            <div className="text-4xl mb-3">💳</div>
            <h4 className="font-semibold text-lg mb-2">Pagamento Seguro</h4>
            <p className="text-gray-600">Transações 100% seguras</p>
          </div>
        </div>
      </section>
    </main>
  );
}
