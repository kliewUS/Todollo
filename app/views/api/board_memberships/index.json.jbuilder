@boardMemberships.each do |boardMembership|
        json.set! boardMembership.id do
            json.id boardMembership.id
            json.board_id boardMembership.board_id
            json.user_id boardMembership.user_id
        end
end