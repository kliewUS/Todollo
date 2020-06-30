@boards.each do |board|
    json.boards do
        json.set! board.id do
            json.partial! 'api/boards/board', board: board
        end
    end
end

@boardMemberships.each do |boardMembership|
    json.boardMemberships do
        json.set! boardMembership.id do
            json.id boardMembership.id
            json.board_id boardMembership.board_id
            json.user_id boardMembership.user_id
        end
    end
end