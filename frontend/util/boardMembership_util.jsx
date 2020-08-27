export const fetchBdMembers = () => {
    return $.ajax({
        url: `/api/board_memberships`
    });
}

export const fetchBdMember = (bdMemberId) => {
    return $.ajax({
        url: `/api/board_memberships/${bdMemberId}`
    });
}


export const createBdMember = (board_membership) => {
    return $.ajax({
        method: 'POST',
        url: `/api/board_memberships`,
        data: {board_membership}
    });
}

export const deleteBdMember = (bdMemberId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/board_memberships/${bdMemberId}`
    });
}