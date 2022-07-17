class CreateRequests < ActiveRecord::Migration[6.1]
  def change
    create_table :requests do |t|
      t.string :phone_number
      t.string :med_name
      t.string :med_strength
      t.string :quantity
      t.string :manufacturer
      t.string :ndc
      t.boolean :brand

      t.timestamps
    end
  end
end
