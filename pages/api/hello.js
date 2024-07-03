export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json({ message: 'This is a GET request' });
    } else if (req.method === 'POST') {
        const { name } = req.body;
        res.status(200).json({ message: `Hello, ${name}` });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
