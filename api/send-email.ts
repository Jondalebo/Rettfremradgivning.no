import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: { method: string; body: { name: string; phone: string; message: string } },
  res: { status: (code: number) => { json: (data: object) => void } }
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ error: 'Navn og melding er påkrevd' });
  }

  try {
    await resend.emails.send({
      from: 'Rett Frem Rådgivning <post@rettfremradgivning.no>',
      to: 'post@rettfremradgivning.no',
      replyTo: 'post@rettfremradgivning.no',
      subject: `Ny henvendelse fra ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #003366;">Ny henvendelse via rettfremradgivning.no</h2>
          <hr style="border: 1px solid #eee;" />
          <p><strong>Navn:</strong> ${name}</p>
          <p><strong>Telefon:</strong> ${phone || 'Ikke oppgitt'}</p>
          <p><strong>Melding:</strong></p>
          <p style="background: #f5f5f5; padding: 16px; border-radius: 8px;">
            ${message}
          </p>
          <hr style="border: 1px solid #eee;" />
          <p style="color: #999; font-size: 12px;">
            Sendt fra kontaktskjemaet på rettfremradgivning.no
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Kunne ikke sende e-post' });
  }
}
