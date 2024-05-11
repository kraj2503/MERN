import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { CountAtom } from './store/atoms/count';
import { evenSelector } from './store/atoms/selectors/even';

function App() {
  return (
    <div>
      <Count />

    </div>
  )
}

function Count() {
  console.log('rerender')
  return <div>
    <RecoilRoot>
      <Button />
      <CountRenderer />
    </RecoilRoot>
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(CountAtom);
  //   if (count%2 ==0){
  //     console.log("count re-render");

  //  return <div>
  //     {count}
  //   <br />
  //   It is even
  //   </div>

  //   }
  return <div>
    {count}
    <EventCountRenderer />
  </div>
}

function EventCountRenderer() {
  const isEven = useRecoilValue(evenSelector);
  return <div>
    {isEven ? null : "It is even"}
  </div>
}
// return <div>
//   {(count%2==0)? "It is even":null}
// </div>
// }

// const isEven = (count%2==0);
// const isEven = useMemo(()=>{
//   return count%2 == 0 
// },[CSSCounterStyleRule])





function Button() {
  // const [count,setCount] = useRecoilState(CountAtom);
  const setCount = useSetRecoilState(CountAtom);
  console.log("Buttons re-render");
  return (
    <div>
      <div>
        <button onClick={() => {
          setCount(count => count + 1)
        }}>Increase</button>

        <button onClick={() => {
          setCount(count => count - 1)

        }}>Decrease</button>
      </div>
    </div>
  )

}
export default App
