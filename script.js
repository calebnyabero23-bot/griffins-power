let products = [
    { id: 1, name: "Apple iPhone 13 Pro", price: 999.00, cat: "Smartphones", img: "https://images.unsplash.com/photo-1632649680184-75f0701d203e?w=400", featured: true },
    { id: 2, name: "Sony Wireless Headphones", price: 199.00, cat: "Audio", img: "https://images.unsplash.com/photo-1546435770-a3e426ff472b?w=400", featured: true },
    { id: 3, name: "Samsung 4K Smart TV", price: 749.90, cat: "Electronics", img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400", featured: true },
    { id: 4, name: "Dell XPS 13 Laptop", price: 1199.00, cat: "Laptops", img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400", featured: true }
];

let cart = [];

// Navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);
    if(pageId === 'home') renderFeatured();
    if(pageId === 'products') renderAll();
}

// Render Featured Products (Home)
function renderFeatured() {
    const grid = document.getElementById('featuredGrid');
    const featured = products.filter(p => p.featured);
    grid.innerHTML = featured.map(p => createCard(p)).join('');
}

// Render All Products
function renderAll() {
    const grid = document.getElementById('allProductsGrid');
    grid.innerHTML = products.map(p => createCard(p)).join('');
}

function createCard(p) {
    return `
        <div class="p-card">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <span class="price">KES ${p.price}</span>
            <button class="shop-now-btn" onclick="addToCart(${p.id})">Shop Now</button>
        </div>
    `;
}

// Cart
function addToCart(id) {
    const p = products.find(x => x.id === id);
    cart.push(p);
    document.getElementById('cart-count').innerText = cart.length;
    alert(p.name + " added to cart!");
}

// Login Logic
function handleLogin() {
    const user = document.getElementById('loginUser').value;
    const pass = document.getElementById('loginPass').value;
    const err = document.getElementById('loginErr');

    if(user === "admin" && pass === "admin123") {
        showPage('admin');
    } else {
        err.innerText = "Invalid credentials. Try admin / admin123";
    }
}

// Admin Add
function adminAddProduct() {
    const name = document.getElementById('admName').value;
    const price = document.getElementById('admPrice').value;
    const img = document.getElementById('admImg').value;
    const cat = document.getElementById('admCat').value;

    if(name && price && img) {
        products.push({ id: Date.now(), name, price, img, cat, featured: true });
        alert("Product added successfully!");
        showPage('home');
    } else {
        alert("Please fill all fields.");
    }
}

// Initial Run
renderFeatured();