import React from 'react';

interface IProps {
  html: any;
}

export const PageContent: React.FC<IProps> = ({html}) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  )
};