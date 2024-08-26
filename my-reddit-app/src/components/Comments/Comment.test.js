import React from 'react';
import { shallow } from 'enzyme';
import Comment from './Comment';
import { formatDistanceToNow } from 'date-fns';

jest.mock('date-fns', () => ({
  formatDistanceToNow: jest.fn()
}));

describe('Comment component', () => {
  const mockComments = [
    {
      data: {
        id: '1',
        author: 'user1',
        body: 'This is a comment',
        created: 1620000000
      }
    },
    {
      data: {
        id: '2',
        author: 'user2',
        body: 'This is another comment',
        created: 1620100000
      }
    }
  ];

  beforeEach(() => {
    formatDistanceToNow.mockReturnValue('2 days ago');
  });

  it('renders without crashing', () => {
    shallow(<Comment comments={[]} />);
  });

  it('renders correct number of comments', () => {
    const wrapper = shallow(<Comment comments={mockComments} />);
    expect(wrapper.find('.comment-wrapper')).toHaveLength(2);
  });

  it('renders comment details correctly', () => {
    const wrapper = shallow(<Comment comments={mockComments} />);
    const firstComment = wrapper.find('.comment-wrapper').first();
    
    expect(firstComment.find('h3').at(0).text()).toBe('user1');
    expect(firstComment.find('h3').at(1).text()).toBe('This is a comment');
    expect(firstComment.find('h3').at(2).text()).toBe('2 days ago');
  });

  it('calls formatDistanceToNow with correct arguments', () => {
    shallow(<Comment comments={mockComments} />);
    expect(formatDistanceToNow).toHaveBeenCalledWith(new Date(1620000000 * 1000), { addSuffix: true });
  });
});
