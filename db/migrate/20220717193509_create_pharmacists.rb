class CreatePharmacists < ActiveRecord::Migration[6.1]
  def change
    create_table :pharmacists do |t|
      t.string :name
      t.string :phone_number
      t.string :email

      t.timestamps
    end
  end
end
