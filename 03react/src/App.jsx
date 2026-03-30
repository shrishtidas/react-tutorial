import Card from './card'
function App() {
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-lg'>Tailwind test</h1>
      <Card channel = "code" />
      <Card channel = "design" />
      <Card channel = "design2" />
      <Card channel = "design3" />
    </>
  )
}

export default App
