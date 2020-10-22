restaurant = Restaurant.new(
  name:  "In n Out",
  address: "456 Test Drive, San Diego, CA 12345",
  category: "Fast Food",
  opening_time: "8:00 A.M",
  closing_time: "2:00 A.M",
  price_range: 1
)
restaurant.image.attach(io: File.open('public/uploads/directory/product1.jpg'), filename: 'product1.jp')