@cardlabels.each do |cardlabel|
    json.set! cardlabel.id do
        json.id cardlabel.id
        json.card_id cardlabel.card_id
        json.label_id cardlabel.label_id
    end
end