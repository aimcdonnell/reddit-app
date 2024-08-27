import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import NavBar from './NavBar';
import { setFilter } from '../../store/redditSlice';

const mockStore = configureStore([]);

describe('NavBar Component', () => {
  let store;
  
  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <NavBar />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct title', () => {
    const wrapper = mount(
      <Provider store={store}>
        <NavBar />
      </Provider>
    );
    expect(wrapper.find('#nav-title').text()).toBe('Seddit');
  });

  it('updates search term on input change', () => {
    const wrapper = mount(
      <Provider store={store}>
        <NavBar />
      </Provider>
    );
    const input = wrapper.find('#search-bar');
    input.simulate('change', { target: { value: 'test search' } });
    expect(input.prop('value')).toBe('test search');
  });

  it('dispatches setFilter action on input change', () => {
    const wrapper = mount(
      <Provider store={store}>
        <NavBar />
      </Provider>
    );
    const input = wrapper.find('#search-bar');
    input.simulate('change', { target: { value: 'test search' } });
    expect(store.dispatch).toHaveBeenCalledWith(setFilter('test search'));
  });
});
