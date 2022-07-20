class AddIsEnrolledToPharmacists < ActiveRecord::Migration[6.1]
  def change
    add_column :pharmacists, :isEnrolled, :boolean
  end
end
