@cards.each do |card|
    json.set! card.id do
        json.id card.id
        json.title card.title
        json.description card.description
        json.list_id card.list_id
    end
end