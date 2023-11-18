const NODE_ENV: string = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || '3000';

export default { environment: NODE_ENV, port: PORT };
