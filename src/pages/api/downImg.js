import { NextApiRequest, NextApiResponse } from 'next'

import { v2 as cloudinary } from 'cloudinary';

export default function handler(req, res) {
   
   cloudinary.config( process.env.CLOUDINARY_URL || '' );
    switch (req.method) {
        case 'GET':
            return res.status(200);
            // return res.status(200).json({ message: imageUrl });
    
        default:
            res.status(400).json({ message: 'Bad request' });
    }

}