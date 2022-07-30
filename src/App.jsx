import toast from 'react-hot-toast'
import shadows from './shadows'
import convertShadow from './utils/convertShadow'
import useCopyToClipboard from './utils/copyToClipboard'
function App() {
  const [value, copy] = useCopyToClipboard()
  const copyShadow = (shadow) => {
    const result = convertShadow(shadow)
    copy(JSON.stringify(result, null, 3))
    toast.success('Shadow copied')
  }
  return (
    <>
      <main className=" container mx-auto py-8 px-4 ">
        <div className="text-center  mb-10 space-y-3">
          <h1 className="text-3xl font-semibold text-center">
            Beautiful Flutter box-shadow examples
          </h1>
          <p className="text-lg text-gray-600 ">
            Just click on a shadow to copy it
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 w-full gap-8 ">
          {shadows.map((shadow, index) => (
            <div
              className="w-full h-36 rounded bg-white flex items-center justify-center cursor-pointer transition-transform hover:scale-105 duration-300"
              style={{
                boxShadow: shadow,
              }}
              key={index}
              onClick={() => copyShadow(shadow)}
            >
              {'#' + index}
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default App
