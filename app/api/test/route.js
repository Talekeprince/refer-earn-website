import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    return res.status(200).json({ message: 'You just got to my server!' });
  }

  if (req.method === 'POST') {
    return res.status(200).json({
      message: 'You just sent a POST request to my server!',
      messages: Array(10).fill('Just go to my server by POST!'),
    });
  }

  return res.status(500).json({ error: 'An error occurred' });
};

export default handler;