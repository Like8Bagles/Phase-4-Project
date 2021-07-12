class CreateShows < ActiveRecord::Migration[6.1]
  def change
    create_table :shows do |t|
      t.belongs_to :user, null: false, foreign_key: true

      t.string :name
      t.string :studio
      t.string :genre
      t.integer :rating

      t.timestamps
    end
  end
end
