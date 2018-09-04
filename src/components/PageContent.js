import PropTypes from 'prop-types';
import React from 'react';

export const HTMLPageContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

const PageContent = ({ content, className }) => (
  <div className={className}>{content}</div>
);

PageContent.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

HTMLPageContent.propTypes = PageContent.propTypes;

export default PageContent;