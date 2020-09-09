# == Schema Information
#
# Table name: cards
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string
#  list_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Card < ApplicationRecord
    validates :title, :list_id, presence: true
    
    belongs_to :list,
        foreign_key: :list_id,
        class_name: :List       

end
