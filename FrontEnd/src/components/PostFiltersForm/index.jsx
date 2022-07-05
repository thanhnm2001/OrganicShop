import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func,
};
PostFiltersForm.defaultProps = {
    onSubmit: null
}
function PostFiltersForm(props) {
    const { onSubmit } = props;
    const [searchItem, setSearchItem] = useState('');
    const typingTimeout = useRef(null);
    function handleSearchTermChange(e) {
        const value = e.target.value;
        setSearchItem(value);
        if (!onSubmit) return;


        if (typingTimeout.current) {
            clearTimeout(typingTimeout.current);
        }
        typingTimeout.current = setTimeout(() => {
            const formValue = {
                searchItem: value
            }
            onSubmit(formValue);
        }, 300);
    }
    return (
        <input type="text" class="form-control " placeholder="Search By Name"
            value={searchItem}
            onChange={handleSearchTermChange}
        />
    );
}

export default PostFiltersForm;