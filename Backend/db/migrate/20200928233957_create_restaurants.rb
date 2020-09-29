class CreateRestaurants < ActiveRecord::Migration[6.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :address
      t.string :category
      t.time :closing_time
      t.time :opening_time
      t.integer :price_range
      
      t.timestamps
    end
  end
end
