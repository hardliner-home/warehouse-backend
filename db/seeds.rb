# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# 10.times do
#   User.create!(
#       email: Faker::Internet.email,
#       first_name: Faker::Name.first_name,
#       last_name: Faker::Name.last_name,
#       password: "qwerty"
#   )
# end

# 1000.times do
#
# end

# 20.times do
#   Warehouse.create(
#       title: Faker::Commerce.product_name,
#       address: Faker::Address.street_address,
#       number: Faker::Number.within(range: 1..20),
#       user_id: Faker::Number.within(range: 1..10)
#   )
# end

# 500.times do
#   product = Product.create(
#       title: Faker::Commerce.product_name,
#       count: Faker::Number.within(range: 1..100)
#   )
#
#   # product.warehouses << Warehouse.order_by_rand.first
#   product.warehouses << Warehouse.order('RANDOM()').first
# end

# 800.times do
#   Store.create(
#     user_id: Faker::Number.within(range: 1..10),
#     title: Faker::Restaurant.name
# )
# end