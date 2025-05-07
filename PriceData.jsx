import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pricingData = [
  {
    roomType: "Standard Room",
    date: "2025-05-14",
    nights: 2,
    meal: "All Inclusive",
    price: 391.0,
  },
  {
    roomType: "Standard Room",
    date: "2025-05-14",
    nights: 4,
    meal: "All Inclusive",
    price: 418.5,
  },
  {
    roomType: "Standard Room",
    date: "2025-05-14",
    nights: 3,
    meal: "All Inclusive",
    price: 448.0,
  },
];

export default function HotelPricing() {
  return (
    <div className="w-full p-4 max-w-5xl mx-auto">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg text-sm md:text-base">
          <thead className="bg-blue-100">
            <tr className="text-left">
              <th className="p-3">Room type</th>
              <th className="p-3">Duration</th>
              <th className="p-3">Meal</th>
              <th className="p-3">Price for person</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((item, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 hover:bg-gray-50"
              >
                <td className="p-3 font-medium">{item.roomType}</td>
                <td className="p-3">
                  <div className="text-sm text-gray-700">{item.date}</div>
                  <div className="font-bold">{item.nights} nights</div>
                </td>
                <td className="p-3 text-green-600 font-medium">{item.meal}</td>
                <td className="p-3 text-blue-700 font-bold">
                  €{item.price.toFixed(2).replace(".00", "")}
                </td>
                <td className="p-3">
                  <Button variant="default">Book</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-sm text-right text-gray-600 mt-2">
          Prices are per person per travel package
        </div>
      </div>
    </div>
  );
}
