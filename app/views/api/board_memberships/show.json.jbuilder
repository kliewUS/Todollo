json.extract! @boardmembership, :id, :board_id, :user_id

json.extract! @user, :username if @user.present? 