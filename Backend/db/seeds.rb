@restaurant = Restaurant.create(
  name:  "Test",
  address: "456 Test Drive, San Diego, CA 12345",
  category: "Fast Food",
  opening_time: "8:00 A.M",
  closing_time: "2:00 A.M",
  price_range: 1
)

@restaurant.image.attach(io: File.open('./public/images/restaurant1.jpg'), filename: 'restaurant1.jpg', content_type: 'application/jpg')