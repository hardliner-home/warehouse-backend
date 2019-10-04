# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# 3.times do
#   Warehouse.create(
#       title: Faker::Commerce.product_name,
#   )
#
# end


# 100.times do
#   product = Product.create(
#       title: Faker::Commerce.product_name,
#       count: Faker::Number.within(range: 1..100)
#   )
#
#   # Warehouse.order_by_rand()
#
#   product.warehouses << Warehouse.order_by_rand.first
# end

# 5.times do
#   Warehouse.create(
#       title: Faker::Commerce.product_name,
#       address: Faker::Address.street_address,
#       number: Faker::Number.within(range: 1..10)
#   )
# end

800.times do
  Store.create(
    user_id: Faker::Number.between(from: 1, to: 5),
    title: Faker::Restaurant.name
  )
end

#
# 100.times do
#   Produv
# end