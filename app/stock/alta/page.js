import AltaStock from "@/app/components/stock/AltaStock";

const AltaProd = async () => {
  return (
    <>
       <section className="grid grid-cols-1 m-14 p-8 gap-5 min-w-[20%] bg-white rounded-lg">
      
            <AltaStock />
      </section>
     
    </>
  )
}

export default AltaProd;