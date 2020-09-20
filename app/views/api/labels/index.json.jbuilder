@labels.each do |label|
    json.set! label.id do
        json.id label.id
        json.name label.name
    end
end