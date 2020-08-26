@users.each do |user|
    json.users do
        json.set! user.id do
            json.id user.id
            json.username user.username
        end
    end
end