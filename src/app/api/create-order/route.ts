import Razorpay from 'razorpay';
import { NextRequest, NextResponse } from 'next/server';


export const runtime='nodejs';
export const dynamic='force-dynamic';
export const revalidate=0;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const amountRaw = body?.amount;
    const amount = Number(amountRaw);

    if (!Number.isFinite(amount) || amount <= 0) {
      return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });
    }

    const key_id = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    if (!key_id || !key_secret) {
      console.error('Razorpay env vars missing');
      return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 });
    }
    const razorpay=new Razorpay({ key_id, key_secret });
    const order = await razorpay.orders.create({
      amount: Math.round(amount),
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
    });

    return NextResponse.json(order);
  } catch (error: any) {
    console.error('Razorpay order error:', error);
    return NextResponse.json({ error: error?.message || 'Error creating order' }, { status: 500 });
  }
}
