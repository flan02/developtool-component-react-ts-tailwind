'use client'
import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { TiThMenu } from "react-icons/ti";
import { Audio } from 'react-loader-spinner'
const DevelopTools = () => {
  const [isClient, setIsClient] = useState(false)
  const [width, setWidth] = useState(0)
  const [xCoord, setXCoord] = useState(0)
  const [yCoord, setYCoord] = useState(0)
  const [breakpoint, setBreakpoint] = useState<string>('mobile first')
  const [selectedHeaderHeight, setSelectedHeaderHeight] = useState<string>('')
  const [selectedBodyHeight, setSelectedBodyHeight] = useState<string>('')
  const [selectedFooterHeight, setSelectedFooterHeight] = useState<string>('')
  const [totalHeight, setTotalHeight] = useState<string>('h-screen')

  useEffect(() => {
    setIsClient(true)

    const handleResize = () => {
      setWidth(window.innerWidth)
      //console.log(width);
      if (width && width < 320) setBreakpoint('NONE')
      if (width && width > 320 && width < 480) setBreakpoint('MOBILE FIRST')
      if (width && width > 480 && width < 640) setBreakpoint('XSMALL')
      if (width && width < 768 && width > 640) setBreakpoint('SMALL')
      if (width && width < 1024 && width > 768) setBreakpoint('MEDIUM')
      if (width && width < 1280 && width > 1024) setBreakpoint('LARGE')
      if (width && width < 1536 && width > 1280) setBreakpoint('XLARGE')
      if (width && width > 1536) setBreakpoint('2XLARGE')

    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [width])

  useEffect(() => {
    setIsClient(true)
    //console.log('x,y', xCoord, yCoord);
    const handleMouseMove = (e: MouseEvent) => {
      setXCoord(e.clientX)
      setYCoord(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [xCoord, yCoord])

  const handleClick = () => {
    const $menu = document.getElementById('menu')
    const $hamburguer = document.getElementById('hamburguer')
    $menu?.setAttribute('class', 'hidden')
    $hamburguer?.setAttribute('class', 'absolute z-10 top-8 right-2 text-2xl')
  }

  const handleMenu = () => {
    const $menu = document.getElementById('menu')
    const $hamburguer = document.getElementById('hamburguer')
    $hamburguer?.setAttribute('class', 'hidden')
    $menu?.setAttribute('class', 'fixed z-10 top-6 right-0 w-[190px] bg-black opacity-60 p-2')
  }

  return (
    <div className="" id="container">
      <TiThMenu id="hamburguer" className="hidden" onClick={handleMenu} />
      <div id="menu" className="fixed z-10 top-6 right-0 w-[190px] bg-black opacity-60 p-2">
        {
          isClient ? (
            <>
              <div className="flex justify-end w-full">
                <button onClick={handleClick} type="button" className=" text-red-500 text-xl"><RxCross2 /></button>
              </div>
              <p className="text-slate-300 lowercase">{`[${breakpoint}:${width}px]`}</p>
              <p className="text-slate-300 lowercase">{`[x,y]: [${xCoord}px, ${yCoord}px]`}</p>
              <select
                value={selectedHeaderHeight}
                onChange={(e) => setSelectedHeaderHeight(e.target.value)}
                name="headerHeight" className="mt-1 bg-slate-600 text-red-500 font-bold">
                <option value="">headerHeight</option>
                <option value="h-[50px]">h-[50px]</option>
                <option value="h-[100px]">h-[100px]</option>
                <option value="h-[150px]">h-[150px]</option>
                <option value="h-[200px]">h-[200px]</option>
                <option value="h-[250px]">h-[250px]</option>
                <option value="h-[300px]">h-[300px]</option>
                <option value="h-[350px]">h-[350px]</option>
                <option value="h-[400px]">h-[400px]</option>
              </select>
              <select
                value={selectedBodyHeight}
                onChange={(e) => setSelectedBodyHeight(e.target.value)}
                name="headerHeight" className="mt-1 bg-slate-600 text-blue-400 font-bold">
                <option value="">bodyHeight</option>
                <option value="h-[50px]">h-[50px]</option>
                <option value="h-[100px]">h-[100px]</option>
                <option value="h-[200px]">h-[200px]</option>
                <option value="h-[300px]">h-[300px]</option>
                <option value="h-[400px]">h-[400px]</option>
                <option value="h-[500px]">h-[500px]</option>
                <option value="h-[600px]">h-[600px]</option>
                <option value="h-[700px]">h-[700px]</option>
                <option value="h-[800px]">h-[800px]</option>
                <option value="h-[1000px]">h-[1000px]</option>
                <option value="h-[1250px]">h-[1250px]</option>
                <option value="h-[1500px]">h-[1500px]</option>
                <option value="h-[1750px]">h-[1750px]</option>
                <option value="h-[2000px]">h-[2000px]</option>
                <option value="h-[2250px]">h-[2250px]</option>
                <option value="h-[2500px]">h-[2500px]</option>
                <option value="h-[5000px]">h-[5000px]</option>
                <option value="h-[7500px]">h-[7500px]</option>
                <option value="h-[10000px]">h-[10000px]</option>
              </select>
              <select
                value={selectedFooterHeight}
                onChange={(e) => setSelectedFooterHeight(e.target.value)}
                name="headerHeight" className="mt-1 bg-slate-600 text-green-500 font-bold">
                <option value="">footerHeight</option>
                <option value="h-[50px]">h-[50px]</option>
                <option value="h-[100px]">h-[100px]</option>
                <option value="h-[150px]">h-[150px]</option>
                <option value="h-[200px]">h-[200px]</option>
                <option value="h-[250px]">h-[250px]</option>
                <option value="h-[300px]">h-[300px]</option>
                <option value="h-[350px]">h-[350px]</option>
                <option value="h-[400px]">h-[400px]</option>
              </select>
            </>
          ) : <div className="h-[150px] flex justify-center items-center">
            <Audio
              height="60"
              width="60"
              color="green"
              ariaLabel="loading"
            />
          </div>
        }
      </div>
      <div className={`fixed top-0 w-full flex text-white text-center h-screen`}>
        <div className="border-r border-black basis-1/12"><p className="bg-black w-full opacity-40">1</p></div>
        <div className="border-r border-black basis-1/12"><p className="bg-black w-full opacity-40">2</p></div>
        <div className="border-r border-black basis-1/12"><p className="bg-black w-full opacity-40">3</p></div>
        <div className="border-r border-black basis-1/12"><p className="bg-black w-full opacity-40">4</p></div>
        <div className="border-r border-black basis-1/12"><p className="bg-black w-full opacity-40">5</p></div>
        <div className="border-r border-black basis-1/12"><p className="bg-black w-full opacity-40">6</p></div>
        <div className="border-r border-black basis-1/12"><p className="bg-black w-full opacity-40">7</p></div>
        <div className="border-r border-black basis-1/12"><p className="bg-black w-full opacity-40">8</p></div>
        <div className="border-r border-black basis-1/12"><p className="bg-black w-full opacity-40">9</p></div>
        <div className="border-r border-black basis-1/12"><p className="bg-black w-full opacity-40">10</p></div>
        <div className="border-r border-black basis-1/12"><p className="bg-black w-full opacity-40">11</p></div>
        <div className="border-r border-black basis-1/12"><p className="bg-black w-full opacity-40">12</p></div>
      </div>
      <div className="absolute -z-10 top-0 left-0 w-full flex flex-col">
        <div className={`w-full border-b border-red-800 bg-red-100 opacity-50  ${selectedHeaderHeight}`}></div>
        <div className={`w-full border-b border-blue-800 bg-blue-100 opacity-50 ${selectedBodyHeight}`}></div>
        <div className={`w-full border-b border-green-800 bg-green-100 opacity-50 ${selectedFooterHeight}`}></div>
      </div>
      <a href="#container" className="fixed right-4 bottom-4 text-white text-2xl border rounded-full bg-slate-900 p-2"><FaArrowUp /></a>
    </div>
  )
}

export default DevelopTools