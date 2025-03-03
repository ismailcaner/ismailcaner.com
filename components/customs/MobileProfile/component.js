import ToggleButton from '@/components/customs/Buttons/Dark-mod';

const MyComponent = () => {
    const me = '/images/me.JPG';
return (
<div className='flex justify-between mb-[25px] px-[16px]'>
    <div className="flex gap-[10px] items-center">
        <img
            className='aspect-[1] w-[53px] h-[53px] object-cover rounded-full'
            src={me}
            alt="Profile"
        />
        <div className='flex flex-col gap-[7px]'>
            <span className='font-medium'>İsmail Caner</span>
            <span className='font-medium text-[13px] text-gray-400'>Frontend Developer</span>
        </div>
    </div>
<ToggleButton />
</div>
  );
}
export default MyComponent;
