Restaurant.create!(
  name:  "In n Out",
  address: "456 Test Drive, San Diego, CA 12345",
  category: "Fast Food",
  opening_time: "8:00 A.M",
  closing_time: "2:00 A.M",
  price_range: 1,
  image: File.open(Rails.root.join('public/uploads/directory/product1.jpg')), filename: 'product1.jpg', content_type: 'image/jpg'
)
