import './index.css'
import Card from './components/card.jsx'

function App() {
  return (
    <div classNmae="App">
      <div class="Cards">
        <Card title="고양이" description="제 귀여운 고양이를 보세요 개짱임" imageUrl="https://cdn.imweb.me/upload/S20210807d1f68b7a970c2/7170113c6a983.jpg" alt="TestCat"></Card>
        <Card title="집 가고싶다ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅣㅣㅣㅣㅣ미" description="집 가고싶어아아ㅏ아ㅏㅏ아가" imageUrl="https://pbs.twimg.com/media/EE0R8XcU0AAlbth.jpg" alt="집에 가고싶어 하는 짤"></Card>
      </div>
    </div>
  );
}

export default App
