1.times do
  store = Store.create(
  name: Faker::Commerce.product_name,
  )
  10.times do
    Item.create(
      name: Faker::Commerce.product_name,
      description: Faker::Lorem.sentence,
      price: Faker::Commerce.price.to_f,
      department: Faker::Commerce.department,
      store_id: store.id
  )
  end
end 

puts "Wooo Seeded"
