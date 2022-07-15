import React from 'react';

function Tag(props) {
  const { children } = props;
  return <div className="tagsName">{children}</div>;
}

export default Tag;
