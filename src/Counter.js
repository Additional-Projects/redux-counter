import { connect } from 'react-redux';

const Counter = ({ count, dispatch }) => {

  const increment = () => {
    return dispatch({type: 'INCREMENT'})
  };

  const decrement = () => {
    return dispatch({type: 'DECREMENT'})
  };

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div>
          <button onClick={decrement}>-</button>
          <span className='count'>{count}</span>
          <button onClick={increment}>+</button>
      </div>

    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.count
})

export default connect(mapStateToProps)(Counter);
