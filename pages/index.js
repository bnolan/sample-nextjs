import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen lg:flex text-lg">
      {/* left side */}
      <div className="lg:w-1/2 relative z-10 flex flex-col justify-center px-10 lg:px-20 py-20 lg:py-0 text-left">
        <h2 className="inter text-4xl mb-3 font-bold text-gray-800">
          Voxels Next
          <span className="block text-blue-500 text-2xl font-normal">
            Deployed to DigitalOcean
          </span>
        </h2>

        <p className="text-gray-700 mb-6">
          Harder, better, faster, stronger - Next is the new generation of voxels.
        </p>

        <div className="sm:flex">
          <a
            href="https://www.voxels.com/buy"
            className="block py-2 px-5 rounded shadow bg-gray-500 text-gray-100 sm:mr-2 mb-2 sm:mb-0"
          >
            Get some
          </a>
          <a
            href="https://www.voxels.com/"
            className="block py-2 px-5 rounded shadow bg-blue-500 text-blue-100"
          >
            Old voxels
          </a>
        </div>
      </div>

      {/* right side */}
      <div className="lg:w-1/2 relative">

      </div>
    </div>
  );
}
