class CreateMenus < ActiveRecord::Migration[6.0]
  def change
    create_table :menus do |t|
      t.string :appetizers
      t.string :entrees
      t.string :desserts
      t.string :drinks
      t.text :description
      
      t.timestamps
    end
  end
end
