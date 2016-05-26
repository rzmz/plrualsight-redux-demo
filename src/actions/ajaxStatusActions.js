export const types = {
	BEGIN_AJAX_CALL: 'BEGIN_AJAX_CALL',
	AJAX_CALL_ERROR: 'AJAX_CALL_ERROR'
};

export function beginAjaxCall() {
	return { type: types.BEGIN_AJAX_CALL };
}

export function ajaxCallError() {
	return { type: types.AJAX_CALL_ERROR };
}
