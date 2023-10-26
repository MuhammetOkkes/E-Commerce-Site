import Image from "next/image";
import Title from "./ui/Title";
import {MdShoppingCart} from "react-icons/md";
import Link from "next/link";

const CampaignItem = () => {
  return (    
    <div className="bg-slate-600 flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-10">
    
    <div className="relative md:w-44 md:h-44 w-36 h-36 after:content-[''] 
       bg-slate-600 rounded- overflow-hidden">       
      <Link href="/product/6515ea30a18ce7910f71373e">
      <Image src="/images/Utu_Philips.png" alt="" layout="fill" objectPosition="cover" className="hover:scale-105 transition-all" priority/>
      </Link>
    </div>

    <div className="text-white">
      <Title addClass="text-2xl">Seçili Ürünlerde İndirim</Title>
    <div className="font-dancing my-1">
      <span className="text-[40px] ">20%</span>
      <span className="text-sm inline-block ml-[4px]">Off</span>
    </div>
    <Link href="/product/6515ea30a18ce7910f71373e">
    <button className="btn-primary flex items-center gap-x-2">Sipariş Ver <MdShoppingCart/> </button>
    </Link>
    </div>
    
    </div>
  )
}


const CampaignItem2 = () => {
  return (    
    <div className="bg-slate-600 flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-10">
    
    <div className="relative md:w-44 md:h-44 w-36 h-36 after:content-[''] 
       bg-slate-600 rounded- overflow-hidden">       
      <Link href="/product/6515ebc5a18ce7910f713757">
      <Image src="/images/Sac_kurutma_philips.png" alt="" layout="fill" objectPosition="cover" className="hover:scale-105 transition-all" priority/>
      </Link>
    </div>

    <div className="text-white">
      <Title addClass="text-2xl">Seçili Ürünlerde İndirim</Title>
    <div className="font-dancing my-1">
      <span className="text-[40px] ">30%</span>
      <span className="text-sm inline-block ml-[4px]">Off</span>
    </div>
    <Link href="/product/6515ebc5a18ce7910f713757">
    <button className="btn-primary flex items-center gap-x-2">Sipariş Ver <MdShoppingCart/> </button>
    </Link>
    </div>
    
    </div>
  )
}

const Campaigns = () => {
  return (
    <div className='flex justify-between container mx-auto py-20 gap-6 flex-wrap'>
    <div className='flex flex-col items-center w-full m-8'>
        <Title addClass="text-[40px]">Bugüne Özel İndirimler</Title>        
    </div> 
    <CampaignItem/>
    <CampaignItem2/>
    </div>
  )
}

export default Campaigns
