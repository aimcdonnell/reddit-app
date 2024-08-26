import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Card from './Card';

const mockStore = configureStore([]);

describe('Card Component', () => {
  let store;
  const initialState = {
    comments: {
      comments: [],
      status: 'idle',
    },
    redditArticle: {
      searchTerm: '',
    },
  };

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('renders loading state', () => {
    const posts = [];
    const status = { loading: true };

    render(
      <Provider store={store}>
        <Card posts={posts} status={status} />
      </Provider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders "No posts available" when there are no posts', () => {
    const posts = [];
    const status = { loading: false };

    render(
      <Provider store={store}>
        <Card posts={posts} status={status} />
      </Provider>
    );

    expect(screen.getByText('No posts available')).toBeInTheDocument();
  });

  test('renders posts when available', () => {
    const posts = [
      {
        data: {
          title: 'Test Post',
          selftext: 'This is a test post',
        },
      },
    ];
    const status = { loading: false };

    render(
      <Provider store={store}>
        <Card posts={posts} status={status} />
      </Provider>
    );

    expect(screen.getByText('Test Post')).toBeInTheDocument();
    expect(screen.getByText('This is a test post')).toBeInTheDocument();
  });
});
