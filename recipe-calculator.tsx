import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const RecipeCalculator = () => {
  const [dryMaterial, setDryMaterial] = useState<number>(100);
  const [water, setWater] = useState<number>(40);
  const [portionSize, setPortionSize] = useState<number>(40);
  const [stainPercentage, setStainPercentage] = useState<number>(7);

  // Calculate total mixture
  const totalMixture = dryMaterial + water;

  // Calculate percentages
  const dryPercentage = (dryMaterial / totalMixture) * 100;
  const waterPercentage = (water / totalMixture) * 100;

  // Calculate amounts in portion
  const dryInPortion = (portionSize * dryPercentage) / 100;
  const waterInPortion = (portionSize * waterPercentage) / 100;
  const stainAmount = (dryInPortion * stainPercentage) / 100;

  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>Recipe Ratio Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Input Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="dryMaterial">Dry Material (g)</Label>
            <Input
              id="dryMaterial"
              type="number"
              value={dryMaterial}
              onChange={(e) => setDryMaterial(Number(e.target.value))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="water">Water (g)</Label>
            <Input
              id="water"
              type="number"
              value={water}
              onChange={(e) => setWater(Number(e.target.value))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="portionSize">Portion Size (g)</Label>
            <Input
              id="portionSize"
              type="number"
              value={portionSize}
              onChange={(e) => setPortionSize(Number(e.target.value))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="stainPercentage">Stain Percentage (%)</Label>
            <Input
              id="stainPercentage"
              type="number"
              value={stainPercentage}
              onChange={(e) => setStainPercentage(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold">Total Mixture Analysis</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>Total mixture:</div>
            <div className="font-medium">{totalMixture.toFixed(2)}g</div>
            <div>Dry material percentage:</div>
            <div className="font-medium">{dryPercentage.toFixed(2)}%</div>
            <div>Water percentage:</div>
            <div className="font-medium">{waterPercentage.toFixed(2)}%</div>
          </div>
        </div>

        <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold">Portion Calculations</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>Dry material in portion:</div>
            <div className="font-medium">{dryInPortion.toFixed(2)}g</div>
            <div>Water in portion:</div>
            <div className="font-medium">{waterInPortion.toFixed(2)}g</div>
            <div>Stain amount needed:</div>
            <div className="font-medium">{stainAmount.toFixed(2)}g</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecipeCalculator;
