# == Schema Information
#
# Table name: card_labels
#
#  id         :bigint           not null, primary key
#  card_id    :integer          not null
#  label_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CardLabel < ApplicationRecord
end
