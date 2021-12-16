// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from './Pagination';

describe('Pagination', () => {
  const props = {
    prevPagePath: '/1',
    nextPagePath: '/3',
    hasNextPage: true,
    hasPrevPage: true
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Pagination {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
