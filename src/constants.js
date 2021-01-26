// Have a constant file whereby the actions are equal to variables rather than ONLY strings 
// as this can easily show an error whereas just using action string names wont 
// as it will evaluate the type as STRING and not throw an error.
export const CHANGE_SEARCH_FIELD = "CHANGE_SEARCH_FIELD";

export const REQUEST_ROBOTS_PENDING = 'REQUEST_ROBOTS_PENDING';
export const REQUEST_ROBOTS_SUCCESS = 'REQUEST_ROBOTS_SUCCESS';
export const REQUEST_ROBOTS_FAILED = 'REQUEST_ROBOTS_FAILED';
