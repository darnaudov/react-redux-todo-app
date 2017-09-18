export const VisibilityFilter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const VisibilityFilters = [{
        text: 'all',
        filter: VisibilityFilter.SHOW_ALL
    }, {
        text: 'active',
        filter: VisibilityFilter.SHOW_ACTIVE
    }, {
        text: 'completed',
        filter: VisibilityFilter.SHOW_COMPLETED
    }];