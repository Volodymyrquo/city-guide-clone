export const liWithoutA = () => {
  let arr = [];

  for (let i = 0; i < 6; i++) {
    arr = [...arr, <li key={i}>Lorem ipsum</li>];
  }
  return arr;
};
const liWithA = () => {
  let arr = [];

  for (let i = 0; i < 6; i++) {
    arr = [
      ...arr,
      <li key={i}>
        <a href='/'>Lorem ipsum</a>
      </li>,
    ];
  }
  return arr;
};
export const columns = () => {
  let arr = [];

  for (let i = 0; i < 3; i++) {
    const block = (
      <div key={i} className='col-sm-6 col-md-3'>
        <h4>Lorem ipsum</h4>
        <ul className='list-unstyled'>{liWithA()}</ul>
      </div>
    );
    arr = [...arr, block];
  }
  return arr;
};
