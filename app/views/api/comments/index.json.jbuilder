@comments.each do |comment|
    json.set! comment.id do
        json.id comment.id
        json.body comment.body
        json.user_id comment.user_id
        json.card_id comment.card_id
        json.created_at comment.created_at
    end
end