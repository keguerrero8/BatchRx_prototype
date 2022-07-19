# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
require "csv"

admin = User.create(username: "Larryous92", password: "larry", admin: true)

csv_text = File.read(Rails.root.join("lib", "seeds", "pharmacies.csv"))
csv = CSV.parse(csv_text, :headers => true, :encoding => "ISO-8859-1")

csv.each do |row|
    Pharmacy.create(name: row["name"], address: row["address"], zip_code: row["zip_code"], phone_number: row["phone_number"])
end

puts "seeding complete!"
