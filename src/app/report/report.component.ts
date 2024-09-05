import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule, MatCardModule,],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css',
})
export class ReportComponent {
  data = [
    // page 1
    {
      title: 'Ammonium Acetate buffer solution, NH4C2H3O2',
      content:
        'Dissolve 100 g NH4C2H3O2 in 600 mL distilled water, slowly and carefully add 200 mL glacial Acetic acid and dilute to 1L with distilled water.',
    },
    {
      title: 'Ammonium Oxalate, (NH4)(COO)2.H2O  solution, saturated.',
      content:
        'Dissolve 25g (NH4)(COO)2.H2O in approximately 500mL distilled water, warm to dissolve and store in a glass or plastic bottle.',
    },
    {
      title: 'Ammonium Hydroxide, NH4OH Solution,1:4',
      content:
        'Mix 1 volume of NH4OH (sp. gr. 0.90) with 4 volumes of distilled water.',
    },
    {
      title: 'Ammonium Molybdate Solution,75 g/L',
      content:
        'Dissolve 7.5 g of Ammonium Molybdate in 100 mL of de-ionized water.',
    },
    {
      title: 'Amino-Naphthol-Sulfonic Acid Solution.',
      content:
        'Dissolve 0.5 g of 1-amino-2-napthol-4-sulfonic acid in 50 mL of a solution containing 1 g of sodium sulfite (Na2SO3) in water. After dissolving, add the solution to 100 mL of a solution containing 30 g of sodium hydrogen sulfite (NaHSO3) in water. Make up to 200 ml with de-ionized water and store in a dark plastic bottle and keep in a refrigerator. Prepare fresh reagent when the color darkens or a precipitate forms.',
    },
    {
      title: 'Alcoholic Mixture ( For salt-in-crude)',
      content:
        '63 parts of 1- butanol + 37 parts of Absolute Methyl Alcohol, to each liter of mixture add 3ml of Water.',
    },
    {
      title: 'Cadmium Chloride Solution, 0.050 N',
      content:
        'Cadmium Chloride Solution, 0.050 N Accurately weigh out 5.709 grams of CdCl2 - 2 .5H2O into a Liter volumetric flask.  Fill to the mark with deionized water and shake until the crystals dissolve. Standardize as per WI-086.',
    },
    {
      title: 'Cadmium Chloride Solution, 0.20 N',
      content:
        'Dissolve 22.834 g cadmium chloride in distilled water and make up to a liter in a l000 mL volumetric flask. Standardize as per WI-086.',
    },
    {
      title: 'Combined reagent for antiscales. ',
      content:
        'Dissolve 0.5 g of ascorbic acid in 100 mL of solution mixture. The reagent is stable for a week if stored at 4°C; otherwise, prepare the solution fresh as needed.',
    },
    {
      title: 'Combined Sulfate Reagent Solution ',
      content:
        'Mix 1 volume of the prepared Sodium Chloride solution with 2 volumes of the 1:1 Glycerin solution and mix thoroughly.',
    },
    {
      title: 'Calcium Solution, Standard (1ml. = 1.0 mg CaCO3)',
      content:
        'Weigh 1.000 g anhydrous calcium carbonate into 500mL Erlenmeyer flask. Dissolve in Hydrochloric Acid (1:4) adding the acid slowly and carefully. When all the CaCO3 has been dissolved, add 200 ml distilled water and boil for a few minutes to expel CO2. Cool, add a few drops of methyl red indicator and adjust to the intermediate orange color by adding Ammonium Hydroxide (1:4) or HCL (1:4) as required. Transfer quantitatively to a 1L volumetric flask and dilute to the mark with distilled water.',
    },
    {
      title: 'Disodium Ethylene di-amine tetra acetate (EDTA)',
      content:
        'Dissolved 3.723g analytical reagent grade EDTA in distilled water and dilute to 1L. This reagent should be standardized against standard CaCO3 solution (1mL = 1.0 mg CaCO3) to check its strength. Store in a plastic bottle and standardize as per WI-092.',
    },
    {
      title: 'Glycerin Solution, 1:1 for Sulphate',
      content: '1 volume Glycerin  + 1 volume Distilled water.',
    },
    {
      title: 'Hydrochloric Acid solution, 1:1 ',
      content:
        'To 1 part of DI-Water, add 1 part of concentrated HCl in small increments and with stirring. Cool the mixture to RT.',
    },
    // page 2
    {
      title: 'Hydrochloric Acid , 0.10N',
      content:
        'Measure 8.3 ml of concentrated hydrochloric acid (HCl, sp gr 1.19) into a graduated cylinder and transfer it to a 1-L volumetric flask. Dilute to the mark with water, mix well and store in a tightly closed glass container. Standardize against anhydrous sodium carbonate(Na2CO3) using Methyl red indicator (WI-017).',
    },
    {
      title: 'Hydrochloric Acid ,1:4',
      content:
        'Mix 1 volume of concentrated HCl (Sp. Gr. 1.19) with 4 volumes of distilled Water.',
    },
    {
      title: 'Hydrochloric Acid,6N',
      content:
        'Carefully add 534 ml concentrated HCl to 466 ml distilled water.  Store in a 1L plastic bottle.',
    },
    {
      title: 'Hydroxylamine Hydrochloride, NH2OH.HCl, 10% solution',
      content:
        'Dissolve 10g NH2OH.HCl in 50 mL distilled water and dilute to 100 mL.',
    },
    {
      title: 'Hydrazine sulfate solution',
      content: '15g in 100mL distilled water.',
    },
    {
      title: 'H2S Titration Mixture.',
      content: 'Mix 4 parts of Iso-Propyl Alcohol with 1 part of Toluene.',
    },
    {
      title: 'Iodide Solution,0.1N',
      content:
        'Dissolve 20g of iodate–free potassium iodide in 30 – 40mL distilled water in a 1L volumetric flask. weigh approximately 12.7g AR iodine on a watch glass using a top pan balance (NEVER use an analytical balance because of the volatility of iodine) Transfer the iodine into the concentrated potassium iodide solution using a small, dry glass funnel. Insert the glass stopper into the flask and shake in the cold until all the iodine has dissolved. Allow the solution to come to room temperature and make up to the mark with distilled water. Store in a dark brown glass bottles in a fridge. Standardize as per WI-094.',
    },
    {
      title: 'Methyl Red Indicator Solution,5g/L',
      content: 'Dissolve 0.5g of methyl red in 100 ml ethanol (95%).',
    },
    {
      title: 'Methyl Orange Indicator,0.05 g / L',
      content:
        'Dissolve 0.05 g Methyl Orange in water and dilute to 100 ml. with distilled Water.',
    },
    {
      title: 'Nitric Acid, HNO3, 1:1',
      content:
        'To 50 mL distilled water, in a 100 mL beaker, add 50 mL concentrated Nitric Acid slowly to make 100 mL total volume.',
    },
    {
      title: 'Oxalic Acid Solution (100 g/L)',
      content:
        'Dissolve 10 g of oxalic acid (H2C2O4.2H2O) in 100 mL of de-ionized water.',
    },
    {
      title: 'Phenolphthalein indicator, 0.5 %',
      content:
        'Dissolve 0.5 g of indicator powder in 50 ml of Methanol (or IPA) and dilute to 100 ml with DI-Water.',
    },
    {
      title: 'Phenolphthalein in alcohol, 1%',
      content:
        'Dissolve 1g phenolphthalein in 100 ml of ethanol (95%), methanol, or isopropanol.',
    },
    {
      title: 'Phenolphthalein indicator solution, 1%',
      content:
        '1.0g dissolved in 10ml ethanol made to 100ml with distilled water.',
    },
    {
      title: 'Potassium Chromate, K2CrO4, indicator solution,50 g/L',
      content:
        'Dissolve 50.0 g of AR grade K2CrO4  in 100 ml of distilled water. Add silver nitrate (AgNO3) until a slight red colored precipitate is formed.  Let the solution stand, protected from light for 24 hours, filter and dilute to 1 liter with distilled water.',
    },
    {
      title: 'Potassium Chloride Solution, Standard, 0.01 N',
      content:
        'Dissolve 745.6 mg anhydrous KCl in de-mineralized water and dilute to 1000 ml. at 25 0C. This standard solution has a conductivity of 1413 µmhos/cm (micromhos per centimeter) at 25 0C.',
    },
    // page 3
    {
      title: 'Potassium Iodide-Iodate Solution 0.1N',
      content:
        'By stirring dissolve 3.5664g AR Potassium Iodate (KIO3) dried for 4 hr at 1200 C, 34.8 g (KI) and 2.48 g Sodium bicarbonate (NaHCO3) in freshly boiled-out distilled water and make up to 1 litre in a graduated flask with freshly boiled-out distilled water. Store the solution in a dark brown glass bottle. Standardize as per WI-090.',
    },
    {
      title: 'KI-KIO3 Solution',
      content:
        'Weigh 0.445 g of KIO3, 0.350 g of KI and0.310 g of NaHCO3 in a beaker. Add about 500 ml of DI-Water, stirrer to dissolve and make volume to 1000 ml with.',
    },
    {
      title: 'o-Phenanthroline, 0.1%.',
      content:
        'Dissolve 100mg o-Phenanthroline Monohydrate in 10 ml Methanol and dilute to 100 ml with distilled water.',
    },
    {
      title: 'Phosphate Solution, Standard,100 mg/L PO4',
      content:
        'Dissolve 0.1433 g of anhydrous KH2PO4, previously dried at 1050C, and dilute to 1 Liter with distilled water.',
    },
    {
      title: 'Silver Nitrate Solution, 0.1N',
      content:
        'Dry AR grade silver nitrate (AgNO3) at 120OC for 2 hours. Cool in a desiccator. Weigh 16.99g of the dried AgNO3 into a 1L volumetric flask and add 500 ml of distilled water.  Swirl to dissolve the crystals, dilute to mark with distilled water, and mix thoroughly.  Store the solution in a tightly stoppered amber glass bottle. Standardize against 0.1N sodium chloride using potassium dichromate indicator (WI-070).',
    },
    {
      title: 'Strontium Chloride, SrCl2. 6H2O solution, 0.5M',
      content:
        'Dissolve 133.31g anhydrous SrCl2. 6H2O in distilled water, transfer quantitatively to a 500mL Volumetric flask and dilute to the mark with distilled water.',
    },
    {
      title: 'Sodium thiosulphate, Na2S2O3',
      content:
        'Dissolve 25.0g AR sodium thiosulphate in freshly boiled-out distilled water and make up to 1 liter in a graduated flask with freshly boiled-out distilled water. If the solution is to be kept for more than 3 days, add 3 drops of Chloroform. Store in a dark brown glass or plastic bottle. Standardize against AR potassium iodate (WI-072).',
    },
    {
      title: 'Sodium Chloride solution, 0.1N',
      content:
        'Dry several grams of AR grade sodium chloride at 300OC for 2 hours. Cool in a desiccator.  Accurately weigh out approximately 5.8440g of the pure dry salt, dissolve in distilled water and dilute to 1L in a volumetric flask. Mix thoroughly and store in a tightly stoppered glass or plastic bottle. Record the exact weight and calculate the normality of the solution.',
    },
    {
      title: 'Sodium Chloride Solution  for Sulphate',
      content: '24% NaCl + 2% conc. HCl.',
    },
    {
      title: 'Sodium Hydroxide,1.0 N ',
      content:
        'Dissolve 40 g of sodium hydroxide (NaOH) in 150 ml of carbon dioxide-free water. Cool the solution to 250C dilute the final volume to 1000 ml with carbon dioxide-free water. Standardize against potassium hydrogen phthalate (KHC8H4O4) using 1.0% phenolphthalein in alcohol as indicator (WI-017).',
    },
    {
      title: 'Sodium Hydroxide,6N',
      content:
        'Carefully dissolve 240 grams sodium hydroxide pellets in approximately 600 ml distilled water. Cool, transfer to 1000 ml volumetric flask and dilute to mark with distilled water, Store in 1000 ml plastic bottle.',
    },
    {
      title: 'Sodium Hydroxide Solution,50g/L',
      content:
        'Dissolve 50 g of sodium hydroxide in distilled water and dilute to 1L.',
    },
    {
      title: 'Sodium hydroxide solution,80 g/liter',
      content:
        'Weigh 40 ± 1 g of sodium hydroxide into a one liter beaker. In a fume hood, with stirring, add 400 mL of distilled water.  Stir the solution constantly until the sodium hydroxide is completely dissolved.  The solution will become quite hot to touch!  Use care in handling! Cool the solution to room temperature and dilute it to 500   mL with distilled water.',
    },
    // page 4
    {
      title: 'Sulfuric Acid, 0.10 N',
      content:
        'Measure 3.0 ml of concentrated sulfuric acid (H2SO4, sp gr 1.84) into a graduated cylinder and slowly add it to 400 ml of water in a 600 ml beaker. Rinse the cylinder into the beaker with water. Mix the acid-water mixture, allow it to cool, and transfer to a 1-L volumetric flask. Dilute to the mark with water, mix well, and store in a tightly closed glass container. Standardize against anhydrous sodium carbonate(Na2CO3) using Methyl red indicator (WI-017).',
    },
    {
      title: 'Sulfuric Acid, 1:1',
      content:
        'To 1 part of DI-Water, add 1 part of concentrated H2SO4 in small increments and with stirring. Cool the mixture to RT.',
    },
    {
      title: 'Sulfuric Acid, 1:9',
      content:
        'To 9 parts of DI-Water, add 1 part of concentrated H2SO4 in small increments and with stirring. Cool the mixture to RT.',
    },
    {
      title: 'Sulfuric acid,1:19 ',
      content:
        'Cautiously add one volume of concentrated sulfuric acid (H2SO4 Sp. Gr. 1.84) to 19 volumes of water while mixing.',
    },
    {
      title: 'Sulfate Solution, Standard,1 mL p 0.100 mg SO4-2',
      content:
        'Dissolve 0.1479 g of anhydrous sodium sulfate (Na2SO4) in water, and dilute with water to 1 L in a volumetric flask.',
    },
    {
      title: 'Silica Solution, Standard,1 mL = 0.1 mg SiO2',
      content:
        'Dissolve 0.473 g of sodium meta-silicate (Na2SiO3.9H2O) in de-ionized water and dilute to one liter.',
    },
    {
      title: 'Solution mixture for antiscales.',
      content:
        'Dissolve 0.13 g of antimony potassium tartrate in a 1000 mL volumetric flask containing about 700 mL of water.  Add 5.6 g of ammonium molybdate and shake until dissolved.  Cautiously add 70 mL of concentrated sulphuric acid with a graduated cylinder while swirling the contents of the flask.  Cool the solution and dilute it to the 1000 mL mark with distilled water.  Solution is stable for at least a year if stored in a polyethylene bottle away from heat.',
    },
    {
      title: 'Scale Inhibitor standard solution,1 mL = 0.2 mg ( or 200 mg/L)',
      content:
        'Prepare a standard solution by dissolving 0.2000 gm. of Scale. Inhibitor in distilled water and diluting the solution to exactly 1 liter with water.  Each mL of the standard solution contains 0.20 mg of scale Inhibitor.',
    },
    {
      title: 'Vanadate-Molybdate Reagent',
      content:
        'Solution–A: Dissolve 25g ammonium molybdate, (NH4)6Mo7O2.4H2O in 200-300 mL Distilled water. Solution–B: Dissolve 1.25g ammonium meta-vanadate, NH4VO3, by heating to boiling in 300 ml distilled water.  Cool and add 330 mL concentrated HCl.  Cool to room temperature. Pour solution A into solution B, mix, and dilute to 1 Liter.',
    },
    {
      title: 'Water saturated toluene, demulsifier added',
      content:
        'In a clean, dry, one-gallon plastic bottle, add almost 1 gallon of commercial grade toluene, add 3 mL of deionized water and 15 mL of F-46 demulsifier Cap the bottle tightly and shake vigorously for ten minutes.  Allow to stand undisturbed for 24 hours before use. In running the test, pipet the water saturated toluene only from the upper portion of the bottle; do not use the bottom 10% of the material in the bottle for this test.',
    },
    {
      title: 'Zinc Acetate, 2N',
      content:
        'Dissolve 220 grams Zinc acetate crystals in approximately 500 ml distilled water.  Transfer to 1000 ml volumetric flask and make up to the mark with distilled water.',
    },
    {
      title: '442 Standard Solution Concentrate (100,000 ppm) for Myron',
      content:
        'Prepare using the following salt ratios: 40% sodium sulfate, 40% sodium bicarbonate, and 20% Sodium Chloride.',
    },
  ];
}
