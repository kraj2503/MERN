import { useRecoilValue, RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil'
import { networkAtom, jobsAtom, notificationsAtom, messagesAtom, totalnotificationSelector } from "./store/atom/atom"

function App() {
  return <>
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  </>
}

function MainApp() {
  const networkNotifcationCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom);
  // const [messagesAtomCount, setMessagesAtomCount] = useRecoilState(messagesAtom);
  const messagesAtomCount = useRecoilValue(messagesAtom);
  // const setMessagesAtomCount  = useSetRecoilState(messagesAtom);  

  const totalnotificationSelectorCount = useRecoilValue(totalnotificationSelector)

  return (
    <>
      <button>Home </button>
      <button>My network ({networkNotifcationCount >= 100 ? "99+" : networkNotifcationCount})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagesAtomCount})</button>
      <button>Notifications ({notificationsAtomCount})</button>
      {/* <button onClick={()=>setMessagesAtomCount(c=>c+1)}>Me  </button>  */}
      <button >Me ({totalnotificationSelectorCount})  </button>
      {/* <Buttonupdater/> */}

    </>
  )
}

// function Buttonupdater(){
//   const setMessagesAtomCount  = useSetRecoilState(messagesAtom);  
//   return <>
//   <button onClick={()=>setMessagesAtomCount(c=>c+1)}>Me  </button> 
//   </>
// }
export default App