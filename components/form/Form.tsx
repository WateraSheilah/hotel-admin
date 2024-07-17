
const Form =()=>{

    return(
        <div className='w-9/12 h-[600px] m-10 rounded-2xl border border-b-cyan-950'>
            <form className='p-10'>
                <div className='flex justify-between'>
                    <div className='w-1/2]'>
                        <h1 className='text-black font-bold mb-2'>HOTEL AVELLINO</h1>
                        <button className='border border-red-500 rounded-[5px] mb-2 w-3/4 text-black'>Billing From</button>
                        <h3 className='font-bold text-black'>Resort and Spa</h3>
                        <p className='text-black'>Nalya, Wakiso</p>
                        <p className='text-black'>Mobile: 0703192535</p>
                        <p className='text-black'>Email: avellino@gmail.com</p>
                    </div>
                    <div className='w-1/2]'>
                        <h1 className='text-black font-bold mb-2'>Invoice</h1>
                        <p className='text-black'>Nalya, Wakiso</p>
                        <p className='text-black'>Invoice Number: 5678</p>
                        <p className='text-black'>Billing Date: 05-11-2024</p>
                        <button className='border border-red-500 text-black rounded-[5px] mb-2 w-3/4'>Billing To</button>
                        <p className='text-black font-bold'>Isaac</p>
                        <p className='text-black'>Address</p>
                        <p className='text-black'>Mobile: 0703192535</p>
                    </div>

                </div>

                <table className='w-9/12 border-[1px] border-black mt-12 ml-32 rounded-[20px] text-black'>
                    <tbody>
                    <tr className='text-black '>
                        <th className='border-[1px] border-black text-center'>Item</th>
                        <th className='border-[1px] border-black text-center'>Size</th>
                        <th className='border-[1px] border-black text-center'>Unit Price</th>
                        <th className='border-[1px] border-black text-center'>Quantity</th>
                        <th className='border-[1px] border-black text-center'>Total Price</th>
                    </tr>
                    <tr>
                        <td className='border-[1px] border-black text-center '>Eggg</td>
                        <td className='border-[1px] border-black text-center '>Eggg</td>
                        <td className='border-[1px] border-black text-center '>Eggg</td>
                        <td className='border-[1px] border-black text-center '>Eggg</td>
                        <td className='border-[1px] border-black text-center'>2555</td>
                    </tr>
                    <tr>
                        <td className='border-[1px] border-black text-center '>Eggg</td>
                        <td className='border-[1px] border-black text-center '>Eggg</td>
                        <td className='border-[1px] border-black text-center '>Eggg</td>
                        <td className='border-[1px] border-black text-center '>Eggg</td>
                        <td className='border-[1px] border-black text-center '>2555</td>
                    </tr>
                    <tr className='border-[1px] border-black align-middle'>
                        <td colSpan={4} className='border-[1px] border-black text-right'>
                            <div>Sub-TotalAmount</div>
                            <div>Discount</div>
                            <div>ServiceChargr(5%)</div>
                            <div>VAT(2%)</div>
                            <div>GrandTotal</div>
                            <div>Customer Paid Amount</div>
                            <div>Change Due</div>

                        </td>

                        <td>
                            <div>200</div>
                            <div>200</div>
                            <div>200</div>
                            <div>200</div>
                            <div>200</div>
                            <div>200</div>
                            <div>200</div>
                        </td>


                    </tr>

                    </tbody>
                </table>
            </form>

        </div>
    );

}
export default Form;