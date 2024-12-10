import Avatar from 'components/Avatar'
import logo from 'assets/logo.svg'
import { useEffect, useState } from 'react'
import { Callback } from 'types'

const open = () => {
  const popup = window.open(
    `https://earnos-react.vercel.app?spoof=true`,
    '_blank',
    'popup,left=100,top=100,width=320,height=320'
  )

  return popup
}

function App() {
  const [result, setResult] = useState<Callback | undefined>(undefined)

  useEffect(() => {
    window.addEventListener(
      'message',
      (event) => {
        console.log('useEffect listener', event.data)
        if (event.data.signature) {
          setResult(event.data)
        }
      },
      false
    )
  }, [])

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="h-screen sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <div className="my-4">
              <div className="flex flex-row items-center gap-12">
                <img
                  className="h-12 w-auto"
                  src={
                    'https://public.rootdata.com/images/b6/1717394960186.jpg'
                  }
                  alt="Lyft"
                />
                <img
                  className="h-12 w-auto"
                  src={
                    'https://pbs.twimg.com/profile_images/1846192922846265344/1PkMekBL_400x400.jpg'
                  }
                  alt="Lyft"
                />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome!
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This is a simple example of how to integrate the Lyft integration
            </p>
            {!result && (
              <button
                onClick={open}
                className="mt-4 inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
              >
                Open
              </button>
            )}
            {result && (
              <>
                <img
                  className="object-contain max-w-32 w-full mt-4"
                  src={result.user.user_photo}
                />
                <p className="mt-4 text-xl text-gray-500">
                  {`Email: ${result.user.email}`}
                </p>
                <p className="mt-4 text-xl text-gray-500">
                  {`Phone: ${result.user.phone_number}`}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
