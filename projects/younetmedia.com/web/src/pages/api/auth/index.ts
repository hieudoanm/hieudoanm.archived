import { logger } from '@younetmedia/common/libs/log';
import axios from 'axios';
import { serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

type AuthData = {
  accessToken?: string;
  message?: string;
};

const handler = async (
  request: NextApiRequest,
  response: NextApiResponse<AuthData>
) => {
  if (request.method === 'POST') {
    const url = 'https://api.younetmedia.com/authentication';
    try {
      const {
        data: { accessToken },
      } = await axios.post<{ accessToken: string }>(url, {
        email: request.body.username || '',
        password: request.body.password || '',
        strategy: 'local',
      });
      response.setHeader(
        'Set-Cookie',
        serialize('authorized', 'true', { path: '/' })
      );
      response.status(200).json({ accessToken, message: 'success' });
    } catch (error) {
      logger.error(error);
      response.status(500).json({ accessToken: '', message: 'error' });
    }
  } else {
    response
      .status(405)
      .json({ accessToken: '', message: 'Method Not Allowed' });
  }
};

export default handler;
