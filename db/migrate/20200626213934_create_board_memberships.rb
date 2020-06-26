class CreateBoardMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :board_memberships do |t|
      t.integer :board_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :board_memberships, :board_id
    add_index :board_memberships, :user_id
  end
end
