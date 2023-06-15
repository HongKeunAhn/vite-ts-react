import { ChangeEvent, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

type Checkbox = {
  name: string;
  isChecked: boolean;
};

const checkboxData = [
  {
    name: 'Select-1',
    isChecked: false,
  },
  {
    name: 'Select-2',
    isChecked: false,
  },
  {
    name: 'Select-3',
    isChecked: false,
  },
];

function App() {
  const [checkboxGroup, setCheckboxGroup] = useState<Checkbox[]>(checkboxData);

  const isAllChecked = checkboxGroup.every((item) => item.isChecked);

  const handleCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    if (name === 'allChecked') {
      const newCheckboxGroup = checkboxGroup.map((item) => {
        return { ...item, isChecked: checked };
      });

      setCheckboxGroup(newCheckboxGroup);
    } else {
      const newCheckboxGroup = checkboxGroup.map((item) =>
        item.name === name ? { ...item, isChecked: checked } : item
      );

      setCheckboxGroup(newCheckboxGroup);
    }
  };

  return (
    <div className='App'>
      <label htmlFor='all'>
        <input
          type='checkbox'
          id='all'
          name='allChecked'
          checked={isAllChecked}
          onChange={handleCheckbox}
        />
        전체 클릭
      </label>

      <ul>
        {checkboxGroup.map((checkbox) => {
          return (
            <li key={checkbox.name}>
              <label htmlFor={checkbox.name}>
                <input
                  type='checkbox'
                  id={checkbox.name}
                  name={checkbox.name}
                  checked={checkbox.isChecked}
                  onChange={handleCheckbox}
                />
                {checkbox.name}
              </label>
            </li>
          );
        })}
      </ul>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  );
}

export default App;
