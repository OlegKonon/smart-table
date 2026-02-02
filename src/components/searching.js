export function initSearching(searchField) {

    return (query, state, action) => {
        const searchTerm = state[searchField];
        
        if (!searchTerm || searchTerm.trim() === '') {
            return query;
        }

        return state[searchField] ? Object.assign({}, query, {
            search: state[searchField]
        }) : query;
    };
}