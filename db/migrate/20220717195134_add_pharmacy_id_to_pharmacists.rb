class AddPharmacyIdToPharmacists < ActiveRecord::Migration[6.1]
  def change
    add_column :pharmacists, :pharmacy_id, :integer
  end
end
