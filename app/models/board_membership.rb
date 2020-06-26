# == Schema Information
#
# Table name: board_memberships
#
#  id         :bigint           not null, primary key
#  board_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class BoardMembership < ApplicationRecord
    validates :board_id, :user_id, presence: true

    belongs_to :board,
        foreign_key: :board_id,
        class_name: :Board

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User


end
