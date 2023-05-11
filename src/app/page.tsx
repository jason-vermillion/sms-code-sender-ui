import SmsMsgList from '@/components/sms-msg-list'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className="w-full h-16 bg-slate-800 text-slate-50 flex justify-center">
        <span className="font-semibold h-10 py-4 text-slate-50">Sms Messages</span>
      </header>
      <div className="container mx-auto w-full bg-slate-50 h-screen flex justify-center">
        <SmsMsgList />
      </div>
    </>

  )
}
