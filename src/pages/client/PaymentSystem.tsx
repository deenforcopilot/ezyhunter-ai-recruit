import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2, CreditCard, DollarSign, FileText, Check, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const PaymentSystem = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>("pro");

  const packages = [
    {
      id: "starter",
      name: "Starter Package",
      price: "฿15,000",
      commission: "0.8x monthly salary",
      features: ["Up to 3 positions", "Basic AI Matching", "Standard Support", "7-day placement"],
    },
    {
      id: "pro",
      name: "Pro Package",
      price: "฿35,000",
      commission: "0.6x monthly salary",
      features: ["Up to 10 positions", "Advanced AI Matching", "Priority Support", "5-day placement", "Quality Guarantee"],
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Custom",
      commission: "0.5x monthly salary",
      features: ["Unlimited positions", "Premium AI Matching", "Dedicated Manager", "3-day placement", "Full Guarantee", "Custom Integration"],
    },
  ];

  const invoices = [
    { id: "INV-2024-001", date: "2024-01-15", amount: "฿35,000", status: "Paid", job: "Senior Developer" },
    { id: "INV-2024-002", date: "2024-01-20", amount: "฿28,000", status: "Paid", job: "Product Manager" },
    { id: "INV-2024-003", date: "2024-01-25", amount: "฿42,000", status: "Pending", job: "UX Designer" },
  ];

  const handlePayment = () => {
    toast({
      title: "Payment Successful",
      description: "Your package has been activated.",
    });
  };

  const calculateFee = (salary: number) => {
    const multiplier = selectedPackage === "starter" ? 0.8 : selectedPackage === "pro" ? 0.6 : 0.5;
    return (salary * multiplier).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-secondary">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-500 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">EzyHunter</span>
            </Link>
            <Badge variant="secondary">Payment System</Badge>
          </div>
          <Link to="/client">
            <Button variant="outline" size="sm">Back to Dashboard</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Payment & Billing</h1>
          <p className="text-muted-foreground">Manage your subscription and billing information</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
                selectedPackage === pkg.id ? "ring-2 ring-primary" : ""
              } ${pkg.popular ? "relative" : ""}`}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">Most Popular</Badge>
              )}
              <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
              <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
              <p className="text-sm text-muted-foreground mb-4">Commission: {pkg.commission}</p>
              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-success" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="w-full shadow-orange"
                variant={selectedPackage === pkg.id ? "default" : "outline"}
              >
                {selectedPackage === pkg.id ? "Selected" : "Select Package"}
              </Button>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-primary" />
              Payment Method
            </h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-2" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" type="password" className="mt-2" />
                </div>
              </div>
              <div>
                <Label htmlFor="cardName">Cardholder Name</Label>
                <Input id="cardName" placeholder="John Doe" className="mt-2" />
              </div>
              <Button onClick={handlePayment} className="w-full shadow-orange">
                <CreditCard className="w-4 h-4 mr-2" />
                Save Payment Method
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-primary" />
              Fee Calculator
            </h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="salary">Monthly Salary (THB)</Label>
                <Input
                  id="salary"
                  type="number"
                  placeholder="50000"
                  className="mt-2"
                  onChange={(e) => {
                    const val = parseFloat(e.target.value);
                    if (val) {
                      toast({
                        title: "Estimated Fee",
                        description: `฿${calculateFee(val)} for selected package`,
                      });
                    }
                  }}
                />
              </div>
              <div className="bg-primary-light p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Current Package</p>
                <p className="font-bold text-lg">{packages.find(p => p.id === selectedPackage)?.name}</p>
                <p className="text-sm text-primary mt-1">
                  Commission Rate: {packages.find(p => p.id === selectedPackage)?.commission}
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="w-4 h-4" />
                <span>Save up to 40% compared to traditional headhunters</span>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Invoice History
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Invoice ID</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Job Position</th>
                  <th className="text-left py-3 px-4">Amount</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="border-b hover:bg-secondary/50">
                    <td className="py-3 px-4 font-mono text-sm">{invoice.id}</td>
                    <td className="py-3 px-4">{invoice.date}</td>
                    <td className="py-3 px-4">{invoice.job}</td>
                    <td className="py-3 px-4 font-bold">{invoice.amount}</td>
                    <td className="py-3 px-4">
                      <Badge className={invoice.status === "Paid" ? "bg-success text-white" : "bg-warning text-white"}>
                        {invoice.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="sm">Download</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PaymentSystem;
