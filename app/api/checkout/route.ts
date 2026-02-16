import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { TICKETS } from "@/lib/data";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-01-28.clover",
});

export async function POST(req: NextRequest) {
  try {
    const { ticketId } = await req.json();

    const ticket = TICKETS.find((t) => t.id === ticketId);
    if (!ticket) {
      return NextResponse.json({ error: "Ticket not found" }, { status: 400 });
    }

    // Use Stripe Price ID if configured, otherwise create a line item with price_data
    const lineItem: Stripe.Checkout.SessionCreateParams.LineItem = ticket.stripePriceId
      ? { price: ticket.stripePriceId, quantity: 1 }
      : {
          price_data: {
            currency: "usd",
            product_data: {
              name: `TechForward Summit 2026 — ${ticket.name}`,
              description: ticket.description,
            },
            unit_amount: ticket.price * 100, // Stripe uses cents
          },
          quantity: 1,
        };

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [lineItem],
      success_url: `${req.nextUrl.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/#tickets`,
      metadata: {
        ticketId: ticket.id,
        ticketName: ticket.name,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
