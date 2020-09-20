export const fetchLabels = () => {
    return $.ajax({
        url: `/api/labels`
    });
}
export const fetchLabel = (labelId) => {
    return $.ajax({
        url: `/api/labels/${labelId}`
    });
}
export const createLabel = (label) => {
    return $.ajax({
        method: 'POST',
        url: `/api/labels`,
        data: {label}
    });
}
export const updateLabel = (label) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/labels/${label.id}`,
        data: {label}
    });
}
export const deleteLabel = (labelId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/labels/${labelId}`
    });
}