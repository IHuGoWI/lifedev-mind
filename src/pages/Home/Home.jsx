const Home = () => {
  return (
    <>
      <div className=''>
        <div className='container mx-auto py-40 text-center min-h-screen'>
          <h1 className='text-3xl font-bold text-zinc-600 mb-10'>Veja os posts mais recentes</h1>
          <form className='w-md mx-auto flex border-1 border-zinc-800 rounded-lg overflow-hidden'>
              <input className='w-full py-3 px-2'
              type="text"
              placeholder='Ou busque por tags...'
              />
              <button  className="p-2 bg-green-500 cursor-pointer hover:bg-green-600 transition duration-300">Pesquisar</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Home