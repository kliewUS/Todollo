@boardMemberships.each do |boardMembership|
    json.boardMemberships do
        json.set! boardMembership.id do
            json.id boardMembership.id
            json.board_id boardMembership.board_id
            json.user_id boardMembership.user_id
        end
    end
end