"use client";
import React, { useState } from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Appliance {
  id: string;
  name: string;
  power: number;
  quantity: number;
  hours: number;
}

const PowerEstimator = () => {
  const [appliances, setAppliances] = useState<Appliance[]>([
    { id: "1", name: "Air Conditioner (1.5HP)", power: 1200, quantity: 1, hours: 8 },
    { id: "2", name: "Refrigerator", power: 150, quantity: 1, hours: 24 },
    { id: "3", name: "Television", power: 100, quantity: 1, hours: 4 },
    { id: "4", name: "Lighting", power: 60, quantity: 10, hours: 6 },
    { id: "5", name: "Computer", power: 200, quantity: 1, hours: 8 },
  ]);

  const [totalPower, setTotalPower] = useState(0);
  const [recommendedGenerator, setRecommendedGenerator] = useState("");

  const calculatePower = () => {
    const total = appliances.reduce((sum, appliance) => {
      return sum + (appliance.power * appliance.quantity * appliance.hours);
    }, 0);
    
    setTotalPower(total);
    
    // Generator recommendations based on total power
    if (total <= 5000) {
      setRecommendedGenerator("5-7.5 kVA Generator");
    } else if (total <= 10000) {
      setRecommendedGenerator("10-15 kVA Generator");
    } else if (total <= 20000) {
      setRecommendedGenerator("20-25 kVA Generator");
    } else if (total <= 50000) {
      setRecommendedGenerator("50-75 kVA Generator");
    } else {
      setRecommendedGenerator("100+ kVA Generator");
    }
  };

  const addAppliance = () => {
    const newAppliance: Appliance = {
      id: Date.now().toString(),
      name: "",
      power: 0,
      quantity: 1,
      hours: 1,
    };
    setAppliances([...appliances, newAppliance]);
  };

  const removeAppliance = (id: string) => {
    setAppliances(appliances.filter(appliance => appliance.id !== id));
  };

  const updateAppliance = (id: string, field: keyof Appliance, value: string | number) => {
    setAppliances(appliances.map(appliance => 
      appliance.id === id ? { ...appliance, [field]: value } : appliance
    ));
  };

  return (
    <div
      id="power-estimator"
      className="w-full px-4 sm:px-6 lg:px-8 xl:px-32 py-8 sm:py-12 lg:py-40 bg-[#F7F6F2]"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex items-center w-fit rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 gap-1.5 sm:gap-2">
          <p className="text-[#B1AD4E] text-xs sm:text-sm font-medium">
            POWER LOAD ESTIMATOR
          </p>
        </div>

        <div className="mt-4 sm:mt-6 flex flex-col gap-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1F253F] leading-tight text-center max-w-4xl">
            <TextAnimate animation="slideUp" by="word">
              Find the Right Generator Size
            </TextAnimate>
          </h2>
          <p className="text-[#6B7280] text-center font-light text-[16px]">
            Calculate your power requirements and get a personalized generator recommendation
          </p>
        </div>

        <div className="w-full mt-6 sm:mt-10 max-w-4xl">
          <div className="bg-[#F7F6F2] rounded-2xl p-6 sm:p-8 lg:p-10">
            <div className="space-y-6">
              {appliances.map((appliance, index) => (
                <div key={appliance.id} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                  <div className="md:col-span-2">
                    <Label htmlFor={`name-${appliance.id}`}>Appliance</Label>
                    <Input
                      id={`name-${appliance.id}`}
                      value={appliance.name}
                      onChange={(e) => updateAppliance(appliance.id, 'name', e.target.value)}
                      placeholder="e.g., Air Conditioner"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`power-${appliance.id}`}>Power (W)</Label>
                    <Input
                      id={`power-${appliance.id}`}
                      type="number"
                      value={appliance.power}
                      onChange={(e) => updateAppliance(appliance.id, 'power', parseInt(e.target.value) || 0)}
                      placeholder="1200"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`quantity-${appliance.id}`}>Quantity</Label>
                    <Input
                      id={`quantity-${appliance.id}`}
                      type="number"
                      value={appliance.quantity}
                      onChange={(e) => updateAppliance(appliance.id, 'quantity', parseInt(e.target.value) || 1)}
                      placeholder="1"
                      className="mt-1"
                    />
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <Label htmlFor={`hours-${appliance.id}`}>Hours/Day</Label>
                      <Input
                        id={`hours-${appliance.id}`}
                        type="number"
                        value={appliance.hours}
                        onChange={(e) => updateAppliance(appliance.id, 'hours', parseInt(e.target.value) || 1)}
                        placeholder="8"
                        className="mt-1"
                      />
                    </div>
                    {appliances.length > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeAppliance(appliance.id)}
                        className="mt-6 px-3"
                      >
                        ×
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={addAppliance}
                className="w-full sm:w-auto"
              >
                + Add Appliance
              </Button>
              <Button
                type="button"
                onClick={calculatePower}
                className="w-full sm:w-auto bg-[#1F253F] text-white"
              >
                Calculate Power Requirements
              </Button>
            </div>

            {totalPower > 0 && (
              <div className="mt-8 p-6 bg-white rounded-xl border-2 border-[#B1AD4E]">
                <h3 className="text-xl font-semibold text-[#1F253F] mb-4">Your Power Analysis</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-[#6B7280]">Total Daily Power Consumption:</p>
                    <p className="text-2xl font-bold text-[#1F253F]">{totalPower.toLocaleString()} Wh</p>
                  </div>
                  <div>
                    <p className="text-[#6B7280]">Recommended Generator:</p>
                    <p className="text-2xl font-bold text-[#B1AD4E]">{recommendedGenerator}</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-[#F7F6F2] rounded-lg">
                  <p className="text-sm text-[#6B7280]">
                    <strong>Note:</strong> This is an estimate. For accurate sizing, consider starting current, 
                    power factor, and future expansion. Contact our experts for a detailed assessment.
                  </p>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <Button className="bg-[#1F253F] text-white">
                    Get Expert Consultation
                  </Button>
                  <Button variant="outline">
                    Download Report
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerEstimator;
