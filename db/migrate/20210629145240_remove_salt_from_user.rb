class RemoveSaltFromUser < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :salt, :string
  end
end
