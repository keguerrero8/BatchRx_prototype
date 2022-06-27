class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.string :text
      t.string :phoneNumber

      t.timestamps
    end
  end
end
