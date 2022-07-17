class CreatePharmacies < ActiveRecord::Migration[6.1]
  def change
    create_table :pharmacies do |t|
      t.string :phone_number
      t.string :address
      t.string :zip_code
      t.string :name

      t.timestamps
    end
  end
end
