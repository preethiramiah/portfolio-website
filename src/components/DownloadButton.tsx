const DownloadButton = () => {
  return (
    <button
      type="button"
      data-twe-ripple-init
      data-twe-ripple-color="light"
      className="flex rounded bg-[#0077b5] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
      <span className="[&>svg]:h-4 [&>svg]:w-4">
        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
      </span>
      <span>Resume</span>
    </button>
  )
}

export default DownloadButton
