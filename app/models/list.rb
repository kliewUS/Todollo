# == Schema Information
#
# Table name: lists
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  board_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class List < ApplicationRecord
    validates :title, :board_id, presence: true
    
    belongs_to :board,
        foreign_key: :board_id,
        class_name: :Board        

    has_many :cards,
        foreign_key: :list_id,
        class_name: :Card,
        dependent: :destroy    

end
