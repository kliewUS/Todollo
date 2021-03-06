# == Schema Information
#
# Table name: boards
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  owner_id   :integer          not null
#  visibility :boolean          default(TRUE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Board < ApplicationRecord
    validates :title, :owner_id, presence: true
    validates :visibility, inclusion: [true, false]

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User
        
    has_many :lists,
        foreign_key: :board_id,
        class_name: :List          

    has_many :board_members,
        foreign_key: :board_id,
        class_name: :BoardMembership

    has_many :members,
        through: :board_members,
        source: :user

end
