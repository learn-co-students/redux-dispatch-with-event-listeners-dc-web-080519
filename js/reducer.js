// declare state
let state;

// give reducer default state value and switch for action types
function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

// dispatch invokes reducer w/ specified action and re-renders
function dispatch(action) {
  state = reducer(state, action);
  render();
}

// HTML doc has #container element and button, otherwise totally boilerplate

// render state in #container text
function render() {
  const container = document.getElementById('container');
  container.textContent = state.count;
}

// invoke dispatch with 'INCREASE_COUNT' action type on click
const button = document.getElementById('button');
button.addEventListener('click', (e) => {
  dispatch({ type: 'INCREASE_COUNT' })
});

// Display default state on page load
dispatch({ type: '@@INIT' })