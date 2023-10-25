import Image from 'next/image'
import { Button } from '@/components/ui/button'
export default function Home()
{
  return (
    <div className='flex item-center justify-center'>
      <Button className='hover:bg-cyan-600 duration-300'>
        Click it
      </Button>
    </div>
  )
}
