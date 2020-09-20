# == Schema Information
#
# Table name: labels
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Label < ApplicationRecord

    has_many :card_labels,
        foreign_key: :label_id,
        class_name: :CardLabel

    has_many :cards,
        through: :card_labels,
        source: :card
    
end
