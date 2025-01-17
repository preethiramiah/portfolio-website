const Circle = ({ radius }: { radius: string }) => {
  return (
    <div className='absolute border-x-[1.25px] border-y-[1.25px] border-[rgba(198,252,166,.39)] backdrop-blur-[62px] rounded-full opacity-40
      shadow-[inset_-1.24px_-1.24px_1.24px_#c6fca6,inset_-6.21px_3.74px_39.74px_#c6fca694,inset_1.24px_1.24px_1.24px_#a7fceebd,inset_6.21px_3.73px_39.74px_#9dffd445]'
      style={{ width: `${radius}px`, height: `${radius}px`, left: `calc(50vw - ${radius}px/2)`, top: `calc(50vh - ${radius}px/2)` }}
    />
  )
}

export default Circle
