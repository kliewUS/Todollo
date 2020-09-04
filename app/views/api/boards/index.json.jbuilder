@boards.each do |board|
    # json.boards do
        json.set! board.id do
            json.partial! 'api/boards/board', board: board
        end
    # end
end

@shared_boards.each do |board|
    # json.boards do
        json.set! board.id do
            json.partial! 'api/boards/board', board: board
        end
    # end
end