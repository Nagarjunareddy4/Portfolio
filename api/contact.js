export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const FORM_ID = process.env.FORMSPREE_ID;

  const response = await fetch(`https://formspree.io/f/${FORM_ID}`, {
    method: 'POST',
    body: JSON.stringify(req.body),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });

  const data = await response.json();
  res.status(response.status).json(data);
}