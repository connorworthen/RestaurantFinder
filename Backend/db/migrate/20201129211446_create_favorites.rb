class CreateFavorites < ActiveRecord::Migration[6.0]
  def change
    create_table :favorites do |t|
      t.references :restaurant, null: false, foreign_key: true
      t.boolean :favorited, default: false, null: false
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
