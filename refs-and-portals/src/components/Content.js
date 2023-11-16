import React from 'react';

const Content = (props) => {
    const styles = `${props.className} content`
    return (
        <div className={styles}>
            {props.children}
        </div>
    )
}

export default Content;