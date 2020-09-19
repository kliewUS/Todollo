# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  user_id    :integer          not null
#  card_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord
    validates :body, :user_id, :card_id, presence: true
    
    belongs_to :card,
        foreign_key: :card_id,
        class_name: :Card  

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User 

end
