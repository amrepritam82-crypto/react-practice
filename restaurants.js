export const restaurants =  [
  {
    id: 1,
    restaurantName: "Pizza Palace",
    dishName: "Margherita Pizza",
    image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.5,
    deliveryTime: 30,
    location: "Koregaon Park, Pune",
    cuisine: ["Italian", "Pizza"],
    priceForTwo: 600,
    discount: {
      type: "FLAT",
      value: 100,
      description: "Flat ₹100 OFF"
    }
  },
  {
    id: 2,
    restaurantName: "Burger Town",
    dishName: "Double Cheese Burger",
    image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.2,
    deliveryTime: 25,
    location: "Baner, Pune",
    cuisine: ["American", "Fast Food"],
    priceForTwo: 500,
    discount: null
  },
  {
    id: 3,
    restaurantName: "Spice Hub",
    dishName: "Chicken Biryani",
    image: "https://images.pexels.com/photos/1111313/pexels-photo-1111313.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.7,
    deliveryTime: 35,
    location: "Hinjewadi, Pune",
    cuisine: ["Indian", "Biryani"],
    priceForTwo: 700,
    discount: {
      type: "PERCENTAGE",
      value: 20,
      description: "20% OFF up to ₹150"
    }
  },
  {
    id: 4,
    restaurantName: "Sushi World",
    dishName: "Salmon Sushi Platter",
    image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.6,
    deliveryTime: 40,
    location: "Viman Nagar, Pune",
    cuisine: ["Japanese", "Seafood"],
    priceForTwo: 1200,
    discount: null
  },
  {
    id: 5,
    restaurantName: "Green Bowl",
    dishName: "Veg Buddha Bowl",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.3,
    deliveryTime: 28,
    location: "Wakad, Pune",
    cuisine: ["Healthy", "Salads"],
    priceForTwo: 550,
    discount: {
      type: "FLAT",
      value: 75,
      description: "Flat ₹75 OFF"
    }
  },
  {
    id: 6,
    restaurantName: "Tandoori Nights",
    dishName: "Paneer Tikka",
    image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.4,
    deliveryTime: 32,
    location: "Aundh, Pune",
    cuisine: ["Indian", "North Indian"],
    priceForTwo: 650,
    discount: null
  },
  {
    id: 7,
    restaurantName: "Dragon Wok",
    dishName: "Hakka Noodles",
    image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.1,
    deliveryTime: 27,
    location: "Kharadi, Pune",
    cuisine: ["Chinese", "Asian"],
    priceForTwo: 500,
    discount: {
      type: "PERCENTAGE",
      value: 15,
      description: "15% OFF up to ₹100"
    }
  },
  {
    id: 8,
    restaurantName: "The South Kitchen",
    dishName: "Masala Dosa",
    image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.6,
    deliveryTime: 22,
    location: "Magarpatta, Pune",
    cuisine: ["South Indian"],
    priceForTwo: 400,
    discount: null
  },
  {
    id: 9,
    restaurantName: "Rolls Mania",
    dishName: "Chicken Kathi Roll",
    image: "https://images.pexels.com/photos/4194612/pexels-photo-4194612.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.0,
    deliveryTime: 20,
    location: "Camp, Pune",
    cuisine: ["Street Food", "Rolls"],
    priceForTwo: 350,
    discount: {
      type: "FLAT",
      value: 50,
      description: "Flat ₹50 OFF"
    }
  },
  {
    id: 10,
    restaurantName: "The Dessert Lab",
    dishName: "Chocolate Lava Cake",
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.8,
    deliveryTime: 18,
    location: "FC Road, Pune",
    cuisine: ["Desserts", "Bakery"],
    priceForTwo: 450,
    discount: null
  },
  {
    id: 11,
    restaurantName: "Arabian Delights",
    dishName: "Chicken Shawarma",
    image: "https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.3,
    deliveryTime: 29,
    location: "Hadapsar, Pune",
    cuisine: ["Middle Eastern"],
    priceForTwo: 550,
    discount: {
      type: "PERCENTAGE",
      value: 10,
      description: "10% OFF"
    }
  },
  {
    id: 12,
    restaurantName: "BBQ Nation Express",
    dishName: "Grilled Chicken Platter",
    image: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.6,
    deliveryTime: 38,
    location: "Shivaji Nagar, Pune",
    cuisine: ["Barbecue", "Grill"],
    priceForTwo: 900,
    discount: null
  },
  {
    id: 13,
    restaurantName: "The Pasta House",
    dishName: "Alfredo Pasta",
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.4,
    deliveryTime: 26,
    location: "Pimple Saudagar, Pune",
    cuisine: ["Italian"],
    priceForTwo: 650,
    discount: {
      type: "FLAT",
      value: 120,
      description: "Flat ₹120 OFF"
    }
  },
  {
    id: 14,
    restaurantName: "Chaat Junction",
    dishName: "Pani Puri",
    image: "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.1,
    deliveryTime: 15,
    location: "JM Road, Pune",
    cuisine: ["Street Food"],
    priceForTwo: 300,
    discount: null
  },
  {
    id: 15,
    restaurantName: "Healthy Greens",
    dishName: "Avocado Salad",
    image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.5,
    deliveryTime: 24,
    location: "Kalyani Nagar, Pune",
    cuisine: ["Healthy", "Vegan"],
    priceForTwo: 750,
    discount: {
      type: "PERCENTAGE",
      value: 25,
      description: "25% OFF up to ₹200"
    }
  }
];
