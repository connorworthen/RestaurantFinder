10.times do |x|
  Restaurant.create(
    name: "Test#{x}",
    address: "123 Test Drive, San Diego, CA 12345",
    category: "Test Category",
    opening_time: "8:00 A.M",
    closing_time: "2:00 A.M",
    price_range: 2
  )
end
