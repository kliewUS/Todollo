@lists.each do |list|
    json.set! list.id do
        json.id list.id
        json.title list.title
        json.board_id list.board_id
    end
end