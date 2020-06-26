class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.string :title, null: false
      t.integer :owner_id, null: false
      t.boolean :visibility, null: false, default: true
    
      t.timestamps
    end
    add_index :boards, :owner_id

  end
end
