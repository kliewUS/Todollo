@boards.each do |board|
    json.set! board.id do
        # json.id board.id
        # json.title board.title 
        # json.owner_id board.owner_id       
        # json.visibility board.visibility        

        json.partial! 'api/boards/board', board: board
    end
end