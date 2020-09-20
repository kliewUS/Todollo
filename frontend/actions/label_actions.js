import * as LabelAPIUtil from '../util/label_util';

export const RECEIVE_LABELS = 'RECEIVE_LABELS';
export const RECEIVE_LABEL = 'RECEIVE_LABEL';
export const REMOVE_LABEL = 'REMOVE_LABEL';
export const RECEIVE_LABEL_ERRORS = "RECEIVE_LABEL_ERRORS";

export const receiveLabels = (labels) => ({
    type: RECEIVE_LABELS,
    labels
});

export const receiveLabel = (label) => ({
    type: RECEIVE_LABEL,
    label
});

export const removeLabel = (labelId) => ({
    type: REMOVE_LABEL,
    labelId
});

export const receiveLabelErrors = (errors) => ({
    type: RECEIVE_LABEL_ERRORS,
    errors
});

export const requestLabels = () => dispatch => {
    return LabelAPIUtil.fetchLabels()
        .then(payload => dispatch(receiveLabels(payload)), 
        err => dispatch(receiveLabelErrors(err.responseJSON))
        );
}

export const requestLabel = (labelId) => dispatch => {
    return LabelAPIUtil.fetchLabel(labelId)
        .then(label => dispatch(receiveLabel(label)), 
        err => dispatch(receiveLabelErrors(err.responseJSON))
        );
}

export const postLabel = (label) => dispatch => {
    return LabelAPIUtil.createLabel(label)
        .then(label => dispatch(receiveLabels(label)), 
        err => dispatch(receiveLabelErrors(err.responseJSON))
        );
}

export const patchLabel = (label) => dispatch => {
    return LabelAPIUtil.updateLabel(label)
        .then(label => dispatch(receiveLabels(label)), 
        err => dispatch(receiveLabelErrors(err.responseJSON))
        );
}

export const destroyLabel = (labelId) => dispatch => {
    return LabelAPIUtil.deleteLabel(labelId)
        .then(() => dispatch(removeLabel(labelId)), 
        err => dispatch(receiveLabelErrors(err.responseJSON))
        );
}