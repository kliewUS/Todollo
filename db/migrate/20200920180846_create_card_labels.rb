class CreateCardLabels < ActiveRecord::Migration[5.2]
  def change
    create_table :card_labels do |t|
      t.integer :card_id, null: false
      t.integer :label_id, null: false      
      t.timestamps
    end
    add_index :card_labels, :card_id
    add_index :card_labels, :label_id
  end
end
