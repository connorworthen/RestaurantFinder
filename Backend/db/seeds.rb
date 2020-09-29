User.create!([{
  name: "Test1",
  email: "test1@foodfinder.com"
},
{
  name: "Test2",
  email: "test2@foodfinder.com"
}])

Restaurant.create!([{
  name: "Taco Bell",
  address: "123 Test Street, San Diego, Ca, ZIP",
  opening_time: "10:00 A.M",
  closing_time: "2:00 A.M",
  price_range: 1
},
{
  name: "Brigantine",
  address: "456 Test Street, San Diego, Ca, ZIP",
  opening_time: "11:00 A.M",
  closing_time: "10:00 P.M",
  price_range: 3
}])

p "Created #{User.count}"
p "Created #{Restaurant.count}"