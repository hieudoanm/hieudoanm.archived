import { sendMessage } from '@web/clients/telegram/telegram.client';
import { logger } from '@web/log';
import { NextApiRequest, NextApiResponse } from 'next';

export type TelegramFrom = {
  id: number;
  is_bot: boolean;
  first_name: string;
  last_name: string;
  username: string;
  language_code: string;
};

export type TelegramChat = {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  type: string;
};

export type TelegramMessage = {
  message_id: number;
  from: TelegramFrom;
  chat: TelegramChat;
  date: number;
  text: string;
};

export type TelegramRequestBody = {
  update_id: number;
  message: TelegramMessage;
};

const getQuery = (query: string | string[] | undefined): string => {
  if (!query) return '';
  if (Array.isArray(query)) return query[0];
  return query;
};

const handler = async (
  request: NextApiRequest,
  response: NextApiResponse<{ message: string }>
) => {
  const { method } = request;
  if (method === 'POST') {
    const token: string = getQuery(request.query.token);
    const body: TelegramRequestBody = request.body;
    const chatId: number = body.message.chat.id ?? 0;
    try {
      logger.info(body, 'Request body');
      const rawMessage = `\`\`\`json
${JSON.stringify(body, null, 2)}
\`\`\``;
      await sendMessage(token, { chatId, message: rawMessage });
    } catch (error) {
      const errorMessage = (error as Error).message;
      await sendMessage(token, { chatId, message: errorMessage });
      logger.error(`getMessage error.message=${errorMessage}`);
    }
    return response.status(200).json({ message: 'OK' });
  }
  return response.status(405).json({ message: 'ERROR' });
};

export default handler;
