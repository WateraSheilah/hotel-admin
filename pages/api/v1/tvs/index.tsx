import { NextApiRequest, NextApiResponse } from 'next';
import { addStream } from '@/lib/addStream';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const resp =  addStream({ name: 'sheila' });

   resp.then((v)=>{
       return res.status(200).json({message:'Done',response:v.body});
   })
}

export default handler;
