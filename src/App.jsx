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
      <nav className="  w-full shadow-sm bg-white p-3 px-4 ">
        <div
          className=" container mx-auto
          flex justify-between
        "
        >
          <h3 className="text-2xl font-bold ">FLUTTER SHADOWS</h3>
          <a
            href="https://github.com/jeronasiedu"
            target="_blank"
            className="flex"
          >
            <img src="/github.svg" alt="github logo" className="w-8" />
            <span className="hidden">contribute</span>
          </a>
        </div>
      </nav>
      <div className=" container mx-auto  px-4 py-24 ">
        <div className="text-center  mb-10 space-y-3">
          <h1 className="text-3xl font-semibold text-center">
            Beautiful Flutter box-shadow examples
          </h1>
          <p className="text-lg text-gray-600 ">
            Just click on a shadow to copy it
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  w-full gap-14 ">
          {shadows.map(({ shadow }, index) => (
            <div
              className="w-full h-32 md:h-36 rounded bg-white flex items-center justify-center cursor-pointer transition-transform md:hover:scale-105 duration-300 tooltip-container relative "
              data-text={`click to copy shadow #${index + 1}`}
              style={{
                boxShadow: shadow,
              }}
              key={index}
              onClick={() => copyShadow(shadow)}
            >
              <span>{`#${index + 1}`}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
