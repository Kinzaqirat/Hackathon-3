"use client"
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CheckoutComplete() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="max-w-md p-6 text-center shadow-lg rounded-2xl">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
        <h2 className="text-2xl font-semibold mt-4">Checkout Complete!</h2>
        <p className="text-gray-600 mt-2">Thank you for your purchase. Your order is being processed.</p>
        <Button className="mt-4" onClick={() => window.location.href = "https://hackathon-3.netlify.app"}>
          Return to Home
        </Button>
      </Card>
    </div>
  );
}
