class CreateMenus < ActiveRecord::Migration[6.0]
  def change
    create_table :menus do |t|
      t.string :appetizer
      t.string :entree
      t.string :dessert
      t.string :drink
      
      t.timestamps
    end
  end
end
