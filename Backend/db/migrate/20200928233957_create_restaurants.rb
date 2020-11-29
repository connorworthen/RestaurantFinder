class CreateRestaurants < ActiveRecord::Migration[6.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :address
      t.string :category
      t.integer :day_of_week
      t.time :open
      t.time :close
      t.string :price
      
      t.timestamps
    end
  end
end
