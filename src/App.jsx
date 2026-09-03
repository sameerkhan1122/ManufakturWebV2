import React, { useState, useEffect, useRef } from 'react';
import logoJPEG from './assets/logo.jpeg';
import productionVID from './assets/production.mp4';

// --- BILD-IMPORTE ---
import img_TR_RT from './assets/Tirzepatide_Retatrutide.jpeg';
import img_TR_10_RT_40 from './assets/TR_10_RT_40.jpeg';
import img_TR_30 from './assets/TR_30.jpeg';
import img_TR_60 from './assets/TR_60.jpeg';
import img_TR_100 from './assets/TR_100.jpeg';

import img_Retatrutide from './assets/Retatrutide.jpeg';
import img_RT_10 from './assets/RT_10.jpeg';
import img_RT_20 from './assets/RT_20.jpeg';
import img_RT_30 from './assets/RT_30.jpeg';
import img_RT_60 from './assets/RT_60.jpeg';

import img_SL332 from './assets/SL332_5_SL332_10.jpeg';
import img_BAC_multi from './assets/BAC_10_BAC_3.jpeg';
import img_BC_10 from './assets/BC_10.jpeg';
import img_ET_10 from './assets/ET_10.jpeg';
import img_GTT_1500 from './assets/GTT_1500.jpeg';
import img_H_multi from './assets/H_10_H_12_H_24_H_36.jpeg';
import img_KLOW from './assets/KLOW_10.jpeg';
import img_Lemon from './assets/Lemon_Bottle.jpeg';
import img_MS_5 from './assets/MS_5.jpeg';
import img_MS_10 from './assets/MS_10.jpeg';
import img_CLU_50 from './assets/CLU_50.jpeg';
import img_NV_500 from './assets/NV_500.jpeg';

const allProducts = [
  { id: 'tr2', name: 'TR2 - Tirzepatide (2mg/vial*10 vials)', price: 29, category: 'Tirzepatide', image: img_TR_RT },
  { id: 'tr5', name: 'TR5 - Tirzepatide (5mg/vial*10 vials)', price: 29, category: 'Tirzepatide', image: img_TR_RT },
  { id: 'tr10', name: 'TR10 - Tirzepatide (10mg/vial*10 vials)', price: 40, category: 'Tirzepatide', image: img_TR_10_RT_40 },
  { id: 'tr15', name: 'TR15 - Tirzepatide (15mg/vial*10 vials)', price: 55, category: 'Tirzepatide', image: img_TR_RT },
  { id: 'tr20', name: 'TR20 - Tirzepatide (20mg/vial*10 vials)', price: 66, category: 'Tirzepatide', image: img_TR_RT },
  { id: 'tr25', name: 'TR25 - Tirzepatide (25mg/vial*10 vials)', price: 73, category: 'Tirzepatide', image: img_TR_RT },
  { id: 'tr30', name: 'TR30 - Tirzepatide (30mg/vial*10 vials)', price: 80, category: 'Tirzepatide', image: img_TR_30 },
  { id: 'tr40', name: 'TR40 - Tirzepatide (40mg/vial*10 vials)', price: 117, category: 'Tirzepatide', image: img_TR_RT },
  { id: 'tr50', name: 'TR50 - Tirzepatide (50mg/vial*10 vials)', price: 128, category: 'Tirzepatide', image: img_TR_RT },
  { id: 'tr60', name: 'TR60 - Tirzepatide (60mg/vial*10 vials)', price: 139, category: 'Tirzepatide', image: img_TR_60 },
  { id: 'tr70', name: 'TR70 - Tirzepatide (70mg/vial*10 vials)', price: 150, category: 'Tirzepatide', image: img_TR_RT },
  { id: 'tr80', name: 'TR80 - Tirzepatide (80mg/vial*10 vials)', price: 161, category: 'Tirzepatide', image: img_TR_RT },
  { id: 'tr90', name: 'TR90 - Tirzepatide (90mg/vial*10 vials)', price: 172, category: 'Tirzepatide', image: img_TR_RT },
  { id: 'tr100', name: 'TR100 - Tirzepatide (100mg/vial*10 vials)', price: 183, category: 'Tirzepatide', image: img_TR_100 },
  { id: 'tr110', name: 'TR110 - Tirzepatide (110mg/vial*10 vials)', price: 194, category: 'Tirzepatide', image: img_TR_RT },
  { id: 'tr120', name: 'TR120 - Tirzepatide (120mg/vial*10 vials)', price: 216, category: 'Tirzepatide', image: img_TR_RT },
  { id: 'trk2', name: 'TRK2 - Tirzepatide (cartridge without pen) (2.5mg/cartridge*10 cartridges)', price: 183, category: 'Tirzepatide', image: img_TR_RT },
  { id: 'trk5', name: 'TRK5 - Tirzepatide (cartridge without pen) (5mg/cartridge*10 cartridges)', price: 232, category: 'Tirzepatide', image: img_TR_RT },
  { id: 'trk10', name: 'TRK10 - Tirzepatide (cartridge without pen) (10mg/cartridge*10 cartridges)', price: 309, category: 'Tirzepatide', image: img_TR_RT },
  { id: 'trk15', name: 'TRK15 - Tirzepatide (cartridge without pen) (15mg/cartridge*10 cartridges)', price: 386, category: 'Tirzepatide', image: img_TR_RT },
  
  { id: 'rt2', name: 'RT2 - Retatrutide (2mg/vial*10 vials)', price: 33, category: 'Retatrutide', image: img_Retatrutide },
  { id: 'rt5', name: 'RT5 - Retatrutide (5mg/vial*10 vials)', price: 33, category: 'Retatrutide', image: img_Retatrutide },
  { id: 'rt10', name: 'RT10 - Retatrutide (10mg/vial*10 vials)', price: 47, category: 'Retatrutide', image: img_RT_10 },
  { id: 'rt15', name: 'RT15 - Retatrutide (15mg/vial*10 vials)', price: 64, category: 'Retatrutide', image: img_Retatrutide },
  { id: 'rt20', name: 'RT20 - Retatrutide (20mg/vial*10 vials)', price: 80, category: 'Retatrutide', image: img_RT_20 },
  { id: 'rt30', name: 'RT30 - Retatrutide (30mg/vial*10 vials)', price: 121, category: 'Retatrutide', image: img_RT_30 },
  { id: 'rt40', name: 'RT40 - Retatrutide (40mg/vial*10 vials)', price: 161, category: 'Retatrutide', image: img_TR_10_RT_40 },
  { id: 'rt50', name: 'RT50 - Retatrutide (50mg/vial*10 vials)', price: 180, category: 'Retatrutide', image: img_Retatrutide },
  { id: 'rt60', name: 'RT60 - Retatrutide (60mg/vial*10 vials)', price: 194, category: 'Retatrutide', image: img_RT_60 },
  
  { id: 'sm2', name: 'SM2 - Semaglutide (2mg/vial*10 vials)', price: 29, category: 'Semaglutide' },
  { id: 'sm5', name: 'SM5 - Semaglutide (5mg/vial*10 vials)', price: 29, category: 'Semaglutide' },
  { id: 'sm10', name: 'SM10 - Semaglutide (10mg/vial*10 vials)', price: 40, category: 'Semaglutide' },
  { id: 'sm15', name: 'SM15 - Semaglutide (15mg/vial*10 vials)', price: 55, category: 'Semaglutide' },
  { id: 'sm20', name: 'SM20 - Semaglutide (20mg/vial*10 vials)', price: 66, category: 'Semaglutide' },
  { id: 'sm30', name: 'SM30 - Semaglutide (30mg/vial*10 vials)', price: 80, category: 'Semaglutide' },
  { id: 'sm40', name: 'SM40 - Semaglutide (40mg/vial*10 vials)', price: 117, category: 'Semaglutide' },
  { id: 'sm50', name: 'SM50 - Semaglutide (50mg/vial*10 vials)', price: 140, category: 'Semaglutide' },
  { id: 'smk2', name: 'SMK2 - Semaglutide (cartridge without pen) (2mg/cartridge*10 cartridges)', price: 162, category: 'Semaglutide' },
  { id: 'smk5', name: 'SMK5 - Semaglutide (cartridge without pen) (5mg/cartridge*10 cartridges)', price: 204, category: 'Semaglutide' },

  { id: 'cu50', name: 'CU50 - GHK-CU (50mg/vial*10 vials)', price: 18, category: 'GHK-CU', image: img_CLU_50 },
  { id: 'cu100', name: 'CU100 - GHK-CU (100mg/vial*10 vials)', price: 25, category: 'GHK-CU' },
  
  { id: 'slu332-5', name: '332 - SLU-PP-332 (5mg/vial*10 vials)', price: 36, category: 'SLU-PP-332', image: img_SL332 },
  { id: 'slu332-10', name: '332 - SLU-PP-332 (10mg/vial*10 vials)', price: 44, category: 'SLU-PP-332', image: img_SL332 },
  
  { id: 'ig01', name: 'IG01 - IGF-1 LR3 (0.1mg/vial*10 vials)', price: 32, category: 'IGF-1 LR3' },
  { id: 'ig1', name: 'IG1 - IGF-1 LR3 (1mg/vial*10 vials)', price: 144, category: 'IGF-1 LR3' },
  
  { id: 'cgl5', name: 'CGL5 - Cagrilintide (5mg/vial*10 vials)', price: 55, category: 'Cagrilintide' },
  { id: 'cgl10', name: 'CGL10 - Cagrilintide (10mg/vial*10 vials)', price: 103, category: 'Cagrilintide' },
  
  { id: 'tsm2', name: 'TSM2 - Tesamorelin (2mg/vial*10 vials)', price: 39, category: 'Tesamorelin' },
  { id: 'tsm5', name: 'TSM5 - Tesamorelin (5mg/vial*10 vials)', price: 70, category: 'Tesamorelin' },
  { id: 'tsm10', name: 'TSM10 - Tesamorelin (10mg/vial*10 vials)', price: 132, category: 'Tesamorelin' },
  { id: 'tsm20', name: 'TSM20 - Tesamorelin (20mg/vial*10 vials)', price: 250, category: 'Tesamorelin' },
  
  { id: 'ms5', name: 'MS5 - MOTS-C (5mg/vial*10 vials)', price: 42, category: 'MOTS-C', image: img_MS_5 },
  { id: 'ms10', name: 'MS10 - MOTS-C (10mg/vial*10 vials)', price: 69, category: 'MOTS-C', image: img_MS_10 },
  { id: 'ms20', name: 'MS20 - MOTS-C (20mg/vial*10 vials)', price: 125, category: 'MOTS-C' },
  { id: 'ms30', name: 'MS30 - MOTS-C (30mg/vial*10 vials)', price: 165, category: 'MOTS-C' },
  { id: 'ms40', name: 'MS40 - MOTS-C (40mg/vial*10 vials)', price: 235, category: 'MOTS-C' },
  
  { id: '2ad', name: '2AD - AOD 9604 (2mg/vial*10 vials)', price: 66, category: 'AOD 9604' },
  { id: '5ad', name: '5AD - AOD 9604 (5mg/vial*10 vials)', price: 66, category: 'AOD 9604' },
  { id: '10ad', name: '10AD - AOD 9604 (10mg/vial*10 vials)', price: 118, category: 'AOD 9604' },
  
  { id: 'g22', name: 'G22 - GHRP-2 (2mg/vial*10 vials)', price: 21, category: 'GHRP-2' },
  { id: 'g25', name: 'G25 - GHRP-2 (5mg/vial*10 vials)', price: 26, category: 'GHRP-2' },
  { id: 'g210', name: 'G210 - GHRP-2 (10mg/vial*10 vials)', price: 41, category: 'GHRP-2' },
  { id: 'g215', name: 'G215 - GHRP-2 (15mg/vial*10 vials)', price: 53, category: 'GHRP-2' },
  
  { id: 'g65', name: 'G65 - GHRP-6 (5mg/vial*10 vials)', price: 26, category: 'GHRP-6' },
  { id: 'g610', name: 'G610 - GHRP-6 (10mg/vial*10 vials)', price: 41, category: 'GHRP-6' },
  
  { id: 'ar50', name: 'AR50 - AICAR (50mg/vial*10 vials)', price: 49, category: 'AICAR' },
  
  { id: 'nj100', name: 'NJ100 - NAD+ (5ML) (100mg/vial*10 vials)', price: 55, category: 'NAD+' },
  { id: 'nj500', name: 'NJ500 - NAD+ (5ML) (500mg/vial*10 vials)', price: 73, category: 'NAD+', image: img_NV_500 },
  { id: 'nj1000', name: 'NJ1000 - NAD+ (10ML) (1000mg/vial*10 vials)', price: 141, category: 'NAD+' },
  
  { id: 'h10', name: 'H10 - HGH 191 AA 97% (10iu/vial*10 vials)', price: 46, category: 'HGH', image: img_H_multi },
  { id: 'h12', name: 'H12 - HGH 191 AA 97% (12iu/vial*10vials)', price: 62, category: 'HGH', image: img_H_multi },
  { id: 'h15', name: 'H15 - HGH 191 AA 97% (15iu/vial*10vials)', price: 78, category: 'HGH' },
  { id: 'h24', name: 'H24 - HGH 191 AA 97% (24iu/vial*10vials)', price: 118, category: 'HGH', image: img_H_multi },
  
  { id: 'hc1000', name: 'HC1000 - HCG (1000iu/vial*10 vials)', price: 40, category: 'HCG' },
  { id: 'hc2000', name: 'HC2000 - HCG (2000iu/vial*10 vials)', price: 66, category: 'HCG' },
  { id: 'hc5000', name: 'HC5000 - HCG (5000iu/vial*10 vials)', price: 96, category: 'HCG' },
  { id: 'hc10000', name: 'HC10000 - HCG (10000iu/vial*10 vials)', price: 118, category: 'HCG' },
  
  { id: 'hm75', name: 'HM75 - HMG (75iu/vial*10 vials)', price: 70, category: 'HMG' },
  
  { id: 'bc2', name: 'BC2 - BPC 157 (2mg/vial*10 vials)', price: 22, category: 'BPC 157' },
  { id: 'bc5', name: 'BC5 - BPC 157 (5mg/vial*10 vials)', price: 35, category: 'BPC 157' },
  { id: 'bc10', name: 'BC10 - BPC 157 (10mg/vial*10 vials)', price: 55, category: 'BPC 157', image: img_BC_10 },
  
  { id: 'bt2', name: 'BT2 - TB 500 (Thymosin B4 AceTate) (2mg/vial*10 vials)', price: 35, category: 'TB 500' },
  { id: 'bt5', name: 'BT5 - TB 500 (Thymosin B4 AceTate) (5mg/vial*10 vials)', price: 66, category: 'TB 500' },
  { id: 'bt10', name: 'BT10 - TB 500 (Thymosin B4 AceTate) (10mg/vial*10 vials)', price: 118, category: 'TB 500' },
  
  { id: 'cd2', name: 'CD2 - CJC 1295 DAC (2mg/vial*10 vials)', price: 37, category: 'CJC 1295 DAC' },
  { id: 'cd5', name: 'CD5 - CJC 1295 DAC (5mg/vial*10 vials)', price: 74, category: 'CJC 1295 DAC' },
  { id: 'cd10', name: 'CD10 - CJC 1295 DAC (10mg/vial*10 vials)', price: 132, category: 'CJC 1295 DAC' },
  
  { id: 'cnd2', name: 'CND2 - CJC 1295 NO DAC (2mg/vial*10 vials)', price: 37, category: 'CJC 1295 NO DAC' },
  { id: 'cnd5', name: 'CND5 - CJC 1295 NO DAC (5mg/vial*10 vials)', price: 74, category: 'CJC 1295 NO DAC' },
  { id: 'cnd10', name: 'CND10 - CJC 1295 NO DAC (10mg/vial*10 vials)', price: 132, category: 'CJC 1295 NO DAC' },
  
  { id: 'bb10', name: 'BB10 - Blend: BPC157 5mg + TB500 5mg', price: 96, category: 'BB (BPC157 + TB500)' },
  { id: 'bb20', name: 'BB20 - Blend: BPC157 10mg + TB500 10mg', price: 169, category: 'BB (BPC157 + TB500)' },
  { id: 'cp10', name: 'CP10 - Blend: CJC1295 NO DAC 5mg + Ipamorelin 5mg', price: 103, category: 'CP (CJC1295 NO DAC + Ipamorelin)' },
  { id: 'bbg70', name: 'BBG70 - Blend: BPC 157 10mg + TB500 10mg + GHK-CU 50mg', price: 180, category: 'BBG (BPC157 + TB500 + GHK-CU)' },
  { id: 'klow80', name: 'KLOW80 - Blend: BPC 157 10mg + TB500 10mg + GHK-CU 50mg + KPV 10mg', price: 210, category: 'KLOW (BPC157 + TB500 + GHK-CU + KPV)', image: img_KLOW },
  { id: 'cs10', name: 'CS10 - Cagrilintide 5mg + Semaglutide 5mg', price: 162, category: 'CS (Cagrilintide + Semaglutide)' },
  
  { id: 'sk2', name: 'SK2 - Selank (2mg/vial*10 vials)', price: 22, category: 'Selank' },
  { id: 'sk5', name: 'SK5 - Selank (5mg/vial*10 vials)', price: 33, category: 'Selank' },
  { id: 'sk10', name: 'SK10 - Selank (10mg/vial*10 vials)', price: 51, category: 'Selank' },
  
  { id: 'et10', name: 'ET10 - Epithalon (10mg/vial*10 vials)', price: 35, category: 'Epithalon', image: img_ET_10 },
  { id: 'et50', name: 'ET50 - Epithalon (50mg/vial*10 vials)', price: 118, category: 'Epithalon' },
  { id: 'et100', name: 'ET100 - Epithalon (100mg/vial*10 vials)', price: 257, category: 'Epithalon' },
  
  { id: 'p41', name: 'P41 - PT 141 (10mg/vial*10 vials)', price: 66, category: 'PT 141' },
  
  { id: 'ip2', name: 'IP2 - Ipamorelin (2mg/vial*10 vials)', price: 22, category: 'Ipamorelin' },
  { id: 'ip5', name: 'IP5 - Ipamorelin (5mg/vial*10 vials)', price: 35, category: 'Ipamorelin' },
  { id: 'ip10', name: 'IP10 - Ipamorelin (10mg/vial*10 vials)', price: 55, category: 'Ipamorelin' },
  
  { id: 'ds2', name: 'DS2 - DSIP (2mg/vial*10 vials)', price: 24, category: 'DSIP' },
  { id: 'ds5', name: 'DS5 - DSIP (5mg/vial*10 vials)', price: 39, category: 'DSIP' },
  { id: 'ds10', name: 'DS10 - DSIP (10mg/vial*10 vials)', price: 63, category: 'DSIP' },
  
  { id: 'xa5', name: 'XA5 - Semax (5mg/vial*10 vials)', price: 33, category: 'Semax' },
  { id: 'xa10', name: 'XA10 - Semax (10mg/vial*10 vials)', price: 51, category: 'Semax' },
  
  { id: 'ks5', name: 'KS5 - KISSPEPTIN-10 (fragment) (5mg/vial*10 vials)', price: 36, category: 'Kisspeptin' },
  { id: 'ks10', name: 'KS10 - KISSPEPTIN-10 (fragment) (10mg/vial*10 vials)', price: 70, category: 'Kisspeptin' },
  
  { id: 'ta2', name: 'TA2 - Thymosin Alpha-1 (2mg/vial*10 vials)', price: 44, category: 'Thymosin Alpha-1' },
  { id: 'ta5', name: 'TA5 - Thymosin Alpha-1 (5mg/vial*10 vials)', price: 84, category: 'Thymosin Alpha-1' },
  { id: 'ta10', name: 'TA10 - Thymosin Alpha-1 (10mg/vial*10 vials)', price: 158, category: 'Thymosin Alpha-1' },
  { id: 'ta50', name: 'TA50 - Thymosin Alpha-1 (50mg/vial*10 vials)', price: 603, category: 'Thymosin Alpha-1' },
  
  { id: 'ml10', name: 'ML10 - Melanotan 2 (10mg/vial*10 vials)', price: 63, category: 'Melanotan 2' },
  { id: 'mt1', name: 'MT1 - Melanotan 1 (MT-1) (10mg/vial*10 vials)', price: 63, category: 'Melanotan 1' },
  
  { id: '2s10', name: '2S10 - SS-31 (10mg/vial*10 vials)', price: 81, category: 'SS-31' },
  { id: '2s50', name: '2S50 - SS-31 (50mg/vial*10 vials)', price: 360, category: 'SS-31' },
  
  { id: 'mt10', name: 'MT10 - Melatonin (10mg/vial*10 vials)', price: 54, category: 'Melatonin' },
  
  { id: 'hx2', name: 'HX2 - Hexarelin (2mg/vial*10 vials)', price: 43, category: 'Hexarelin' },
  { id: 'hx5', name: 'HX5 - Hexarelin (5mg/vial*10 vials)', price: 68, category: 'Hexarelin' },
  { id: 'hx10', name: 'HX10 - Hexarelin (10mg/vial*10 vials)', price: 124, category: 'Hexarelin' },
  
  { id: 'ap2', name: 'AP2 - Adipotide (2mg/vial*10 vials)', price: 85, category: 'Adipotide' },
  { id: 'ap5', name: 'AP5 - Adipotide (5mg/vial*10 vials)', price: 148, category: 'Adipotide' },
  
  { id: 'smo5', name: 'SMO-5 - Sermorelin Acetate (5mg/vial*10 vials)', price: 58, category: 'Sermorelin' },
  { id: 'smo10', name: 'SMO-10 - Sermorelin Acetate (10mg/vial*10 vials)', price: 114, category: 'Sermorelin' },
  
  { id: 'np810', name: 'NP810 - SNAP-8 (10mg/vial*10 vials)', price: 44, category: 'SNAP-8' },
  { id: 'ty10', name: 'TY10 - Thymalin (10mg/vial*10 vials)', price: 56, category: 'Thymalin' },
  { id: 'f410', name: 'F410 - FOXO4 DRI (10mg/vial*10 vials)', price: 351, category: 'FOXO4 DRI' },
  { id: 'll37', name: '375 - LL37 (5mg/vial*10 vials)', price: 67, category: 'LL37' },
  { id: 'sur10', name: 'SUR10 - Survodutide (10mg/vial*10 vials)', price: 218, category: 'Survodutide' },
  { id: 'ra10', name: 'RA10 - Ara-290 (10mg/vial*10 vials)', price: 58, category: 'Ara-290' },
  { id: 'dr5', name: 'DR5 - Dermorphin (5mg/vial*10 vials)', price: 40, category: 'Dermorphin' },
  { id: 'kp10', name: 'KP10 - KPV (10mg/vial*10 vials)', price: 47, category: 'KPV' },
  { id: 'vp10', name: 'VP10 - VIP (10mg/vial*10 vials)', price: 160, category: 'VIP' },
  
  { id: 'gnd2', name: 'GND2 - Gonadorrlin Acetate (2mg/vial*10 vials)', price: 30, category: 'Gonadorelin' },
  
  { id: 'ot2', name: 'OT2 - Oxytocin Acetate (2mg/vial*10 vials)', price: 28, category: 'Oxytocin' },
  { id: 'ot5', name: 'OT5 - Oxytocin Acetate (5mg/vial*10 vials)', price: 54, category: 'Oxytocin' },
  { id: 'ot10', name: 'OT10 - Oxytocin Acetate (10mg/vial*10 vials)', price: 100, category: 'Oxytocin' },
  
  { id: 'fr5', name: 'FR5 - HGH Fragment 176-191 (5mg/vial*10 vials)', price: 80, category: 'HGH Fragment' },
  
  { id: '5am', name: '5AM - 5-amino-1mq (5mg/vial*10 vials)', price: 45, category: '5-amino-1mq' },
  { id: '50am', name: '50AM - 5-amino-1mq (50mg/vial*10 vials)', price: 92, category: '5-amino-1mq' },
  
  { id: 'fm2', name: 'FM2 - MGF (2mg/vial*10 vials)', price: 36, category: 'MGF' },
  { id: 'fmp2', name: 'FMP2 - PEG-MGF (2mg/vial*10 vials)', price: 78, category: 'PEG-MGF' },
  
  { id: 'gtt', name: 'GTT - Glutathione (15000mg/vial*10 vials)', price: 33, category: 'Glutathione', image: img_GTT_1500 },
  
  { id: 'fols344-1', name: 'Follistatin 344 95% (1mg/vial*10 vials)', price: 318, category: 'Follistatin' },
  { id: 'fols344-2', name: 'Follistatin 344 95% (2mg/vial*10 vials)', price: 593, category: 'Follistatin' },
  
  { id: 'ba3', name: 'BA3 - BAC Water (3ml)', price: 7, category: 'BAC Water', image: img_BAC_multi },
  { id: 'ba10', name: 'BA10 - BAC Water (10ml)', price: 11, category: 'BAC Water', image: img_BAC_multi },
  { id: 'lemon', name: 'Lemon bottle (10mg/vial*10 vials)', price: 55, category: 'Lemon Bottle', image: img_Lemon },
  { id: 'redlip', name: 'Red lip balm (10mg/vial*10 vials)', price: 55, category: 'Red Lip Balm' },
  { id: 'botox200', name: 'Botox (200u/vial*10 vials)', price: 110, category: 'Botox' },
  { id: 'botox150', name: 'Botox (150u/vial*10 vials)', price: 103, category: 'Botox' },
  { id: 'botox100', name: 'Botox (100u/vial*10 vials)', price: 96, category: 'Botox' },
  { id: 'matrixyl', name: 'Matrixyl 3000 (10mg/vial*10 vials)', price: 305, category: 'Matrixyl 3000' },
  { id: 'oligopeptide', name: 'Oligopeptide-24 (10mg/vial*10 vials)', price: 40, category: 'Oligopeptide-24' },
  { id: 'ace031', name: 'Ace-031 95% (1mg/vial*10 vials)', price: 318, category: 'Ace-031' },
  { id: 'gdf8', name: 'GDF-8 95% (1mg/vial*10 vials)', price: 320, category: 'GDF-8' },
  { id: 'pnc27', name: 'PNC-27 (10mg/vial*10 vials)', price: 60, category: 'PNC-27' }
];

function ProductGroupCard({ groupName, products, onClick }) {
  const startingPrice = Math.min(...products.map(p => p.price));
  const groupImage = products.find(p => p.image)?.image;
  
  return (
    <div 
      onClick={() => onClick(groupName)}
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-sm p-5 flex flex-col justify-between hover:border-cyan-600 dark:hover:border-cyan-500/50 transition-all shadow-sm hover:shadow cursor-pointer group"
    >
      <div className="w-full h-40 bg-slate-50 dark:bg-slate-950 rounded-sm mb-4 flex items-center justify-center border border-slate-100 dark:border-slate-800 overflow-hidden relative">
        {groupImage ? (
          <img src={groupImage} alt={groupName} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <span className="text-slate-400 dark:text-slate-600 text-xs uppercase tracking-widest font-bold">No Image</span>
        )}
        <div className="absolute inset-0 bg-cyan-600/0 dark:bg-cyan-500/0 group-hover:bg-cyan-600/5 dark:group-hover:bg-cyan-500/5 transition-all duration-300"></div>
      </div>
      
      <div>
        <h3 className="font-bold text-slate-900 dark:text-slate-200 text-lg uppercase tracking-wider leading-snug">{groupName}</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{products.length} {products.length === 1 ? 'Variant' : 'Variants'} Available</p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider">Starting at</span>
          <span className="text-lg font-black text-slate-900 dark:text-white">${startingPrice}</span>
        </div>
        <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-cyan-600 group-hover:text-white dark:group-hover:bg-cyan-500 dark:group-hover:text-slate-900 font-bold text-xs rounded-sm transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme !== null) {
        return savedTheme === 'dark';
      }
    }
    return true; 
  });

  const [lang, setLang] = useState('EN');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  
  const [activeTab, setActiveTab] = useState('home');
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedVariantId, setSelectedVariantId] = useState('');
  const [detailQuantity, setDetailQuantity] = useState(1);
  
  // STRUKTURIERTES ADRESS-STATE
  const [address, setAddress] = useState({
    name: '',
    street: '',
    zip: '',
    city: '',
    country: ''
  });

  const searchContainerRef = useRef(null);
  const categoriesList = [...new Set(allProducts.map(p => p.category))];

  const SHIPPING_COST = 60;

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setShowSearchDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleGroupClick = (groupName, specificVariantId = null) => {
    setSelectedGroup(groupName);
    if (specificVariantId) {
      setSelectedVariantId(specificVariantId);
    } else {
      const firstProduct = allProducts.find(p => p.category === groupName);
      if (firstProduct) setSelectedVariantId(firstProduct.id);
    }
    setDetailQuantity(1); 
    setActiveTab('productDetail');
    setShowSearchDropdown(false);
    setMobileSearchOpen(false); 
    window.scrollTo(0, 0); 
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim().length > 0) {
      setActiveTab('searchResults');
      setShowSearchDropdown(false);
      setMobileSearchOpen(false); 
    }
  };

  const dropdownSearchResults = allProducts.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (product, quantityToAdd = 1) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantityToAdd } : item);
      }
      return [...prevCart, { ...product, quantity: quantityToAdd }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const finalTotal = subtotal > 0 ? subtotal + SHIPPING_COST : 0;

  const handleWhatsAppCheckout = () => {
    const phone = "4915200000000";
    let message = "Hello, I would like to purchase the following products:\n\n";
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - Quantity: ${item.quantity} kit(s) - Price: $${item.price * item.quantity}\n`;
    });
    
    message += `\nSubtotal: $${subtotal}`;
    message += `\nShipping: $${SHIPPING_COST}`;
    message += `\n*Total Price: $${finalTotal}*\n`;
    
    // Prüfen, ob irgendein Adressfeld ausgefüllt wurde
    const hasAddress = address.name || address.street || address.zip || address.city || address.country;
    if (hasAddress) {
      message += `\n*Shipping Address:*\n`;
      if (address.name) message += `${address.name}\n`;
      if (address.street) message += `${address.street}\n`;
      if (address.zip || address.city) message += `${address.zip} ${address.city}`.trim() + `\n`;
      if (address.country) message += `${address.country}\n`;
    }

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const SearchDropdownUI = () => {
    if (!showSearchDropdown || searchQuery.trim().length === 0) return null;
    return (
      <div className="absolute top-[calc(100%+8px)] left-0 right-0 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-sm shadow-xl overflow-hidden z-[100] max-h-[60vh] overflow-y-auto">
        {dropdownSearchResults.length === 0 ? (
          <div className="p-4 text-center text-sm text-slate-500 dark:text-slate-400">No products found. Press Enter to search anyway.</div>
        ) : (
          <div>
            {dropdownSearchResults.slice(0, 8).map((product) => (
              <div 
                key={product.id}
                onClick={() => handleGroupClick(product.category, product.id)}
                className="px-5 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer flex justify-between items-center border-b border-slate-100 dark:border-slate-800/50 last:border-0 transition-colors"
              >
                <div className="pr-4">
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-200 truncate">{product.name}</p>
                  <p className="text-[10px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mt-0.5">{product.category}</p>
                </div>
                <span className="text-sm font-black text-slate-900 dark:text-white shrink-0">${product.price}</span>
              </div>
            ))}
            {dropdownSearchResults.length > 8 && (
              <div 
                onClick={() => { setActiveTab('searchResults'); setShowSearchDropdown(false); setMobileSearchOpen(false); }}
                className="p-3 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-center text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 cursor-pointer uppercase tracking-widest"
              >
                View All {dropdownSearchResults.length} Results &rarr;
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-cyan-600 dark:selection:bg-cyan-500 selection:text-white dark:selection:text-slate-900 transition-colors duration-300">
        
        {/* HEADER */}
        <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
            
            {/* LOGO */}
            <div className="flex items-center gap-6 cursor-pointer shrink-0" onClick={() => { setActiveTab('home'); setSearchQuery(''); }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-800 flex-shrink-0">
                  <img src={logoJPEG} alt="Manufaktur Logo" className="w-full h-full object-cover" />
                </div>
                <div className="hidden sm:block">
                  <span className="font-extrabold text-lg tracking-wider text-slate-900 dark:text-white">
                    MANUFAKTUR
                  </span>
                  <span className="block text-[10px] text-slate-500 dark:text-slate-400 tracking-widest uppercase">B2B Direct Shop</span>
                </div>
              </div>

              <nav className="hidden xl:flex items-center gap-5 ml-4 border-l border-slate-200 dark:border-slate-700 pl-6">
                <button onClick={(e) => { e.stopPropagation(); setActiveTab('home'); setSearchQuery(''); }} className={`text-sm font-semibold transition-colors ${activeTab === 'home' ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400'}`}>
                  Home
                </button>
                <button onClick={(e) => { e.stopPropagation(); setActiveTab('about'); }} className={`text-sm font-semibold transition-colors ${activeTab === 'about' ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400'}`}>
                  About
                </button>
                <button onClick={(e) => { e.stopPropagation(); setActiveTab('contact'); }} className={`text-sm font-semibold transition-colors ${activeTab === 'contact' ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400'}`}>
                  Contact
                </button>
              </nav>
            </div>

            {/* DESKTOP SEARCH */}
            <div className="hidden lg:flex flex-1 max-w-2xl relative" ref={searchContainerRef}>
              <form onSubmit={handleSearchSubmit} className="w-full relative">
                <input 
                  type="text" 
                  placeholder="Search products, dosages, blends..." 
                  value={searchQuery}
                  onFocus={() => setShowSearchDropdown(true)}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearchDropdown(true);
                  }}
                  className="w-full bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-sm py-2.5 pl-4 pr-12 text-sm text-slate-900 dark:text-slate-200 focus:outline-none focus:border-cyan-600 dark:focus:border-cyan-500 shadow-sm placeholder:text-slate-500"
                />
                <button 
                  type="submit" 
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center p-1.5 text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors h-fit"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
              </form>
              <SearchDropdownUI />
            </div>

            {/* ACTION ICONS */}
            <div className="flex items-center justify-end gap-2 sm:gap-3 shrink-0">
              
              <button onClick={() => setMobileSearchOpen(!mobileSearchOpen)} className="lg:hidden p-2 text-slate-500 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </button>

              {/* DARK MODE TOGGLE SCHALTER */}
              <div className="hidden sm:flex items-center gap-2 mr-2">
                <span onClick={() => setIsDarkMode(!isDarkMode)} className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest cursor-pointer select-none">
                  Dark Mode
                </span>
                <button 
                  onClick={() => setIsDarkMode(!isDarkMode)} 
                  className={`relative w-10 h-5 rounded-full transition-colors duration-300 ease-in-out border border-slate-300 dark:border-slate-700 ${isDarkMode ? 'bg-cyan-600 dark:bg-cyan-500' : 'bg-slate-200'}`}
                  title="Toggle Theme"
                >
                  <div className={`absolute left-0.5 top-0.5 w-3.5 h-3.5 bg-white rounded-full shadow-sm transform transition-transform duration-300 ease-in-out ${isDarkMode ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>

              <button onClick={() => setLang(lang === 'EN' ? 'DE' : 'EN')} className="px-2.5 py-1.5 text-xs font-bold rounded-sm bg-white dark:bg-slate-800 text-cyan-700 dark:text-cyan-400 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-all shadow-sm">
                {lang}
              </button>

              <button onClick={() => setIsCartOpen(true)} className="relative p-2.5 rounded-sm bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-all shadow-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                {cart.length > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </button>

              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="xl:hidden p-2 text-slate-500 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </button>
            </div>
          </div>

          {/* MOBILE SEARCH */}
          {mobileSearchOpen && (
            <div className="lg:hidden px-4 pb-4 pt-2 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 relative z-50">
              <form onSubmit={(e) => { e.preventDefault(); setActiveTab('searchResults'); setMobileSearchOpen(false); }} className="w-full relative">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  value={searchQuery}
                  onFocus={() => setShowSearchDropdown(true)}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearchDropdown(true);
                  }}
                  className="w-full bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-sm py-2.5 pl-4 pr-12 text-sm text-slate-900 dark:text-slate-200 focus:outline-none focus:border-cyan-600 dark:focus:border-cyan-500 shadow-sm"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center p-1.5 text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors h-fit">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
              </form>
              <SearchDropdownUI />
            </div>
          )}

          {mobileMenuOpen && (
            <div className="xl:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 py-4 space-y-3">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Dark Mode</span>
                <button 
                  onClick={() => setIsDarkMode(!isDarkMode)} 
                  className={`relative w-10 h-5 rounded-full transition-colors duration-300 ease-in-out border border-slate-300 dark:border-slate-700 ${isDarkMode ? 'bg-cyan-600 dark:bg-cyan-500' : 'bg-slate-200'}`}
                >
                  <div className={`absolute left-0.5 top-0.5 w-3.5 h-3.5 bg-white rounded-full shadow-sm transform transition-transform duration-300 ease-in-out ${isDarkMode ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>
              <button onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }} className="block w-full text-left font-medium text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 py-1">Home</button>
              <button onClick={() => { setActiveTab('about'); setMobileMenuOpen(false); }} className="block w-full text-left font-medium text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 py-1">About Us</button>
              <button onClick={() => { setActiveTab('contact'); setMobileMenuOpen(false); }} className="block w-full text-left font-medium text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 py-1">Contact</button>
            </div>
          )}
        </header>

        {/* MAIN CONTENT AREA */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          
          {/* HOME / STARTSEITE */}
          {activeTab === 'home' && (
            <div className="space-y-16">
              {!searchQuery && (
                <div className="text-center py-20 px-4 bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 rounded-sm shadow-sm relative overflow-hidden">
                  <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 text-slate-900 dark:text-white relative uppercase">
                    Direct Peptide- & HGH-Manufaktur
                  </h1>
                  <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto relative font-medium">
                    {lang === 'EN' ? 'No middlemen. Successfully established in South America, now new in Europe.' : 'Keine Zwischenmänner. Erfolgreich in Südamerika etabliert, jetzt neu in Europa.'}
                  </p>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white uppercase">Our Catalog</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categoriesList.map(category => {
                    const catProducts = allProducts.filter(p => p.category === category);
                    return (
                      <ProductGroupCard 
                        key={category}
                        groupName={category}
                        products={catProducts}
                        onClick={handleGroupClick}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* SUCH-ERGEBNISSEITE */}
          {activeTab === 'searchResults' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h2 className="text-2xl font-black tracking-tight mb-1 uppercase">Search Results</h2>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Showing results for: <span className="font-bold text-slate-900 dark:text-white">"{searchQuery}"</span></p>
                </div>
                <button onClick={() => { setActiveTab('home'); setSearchQuery(''); }} className="text-sm font-bold text-cyan-600 dark:text-cyan-400 hover:underline">
                  Clear Search &times;
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoriesList.map(category => {
                  const matchesSearch = category.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                        allProducts.some(p => p.category === category && p.name.toLowerCase().includes(searchQuery.toLowerCase()));
                  
                  if (!matchesSearch) return null;

                  const catProducts = allProducts.filter(p => p.category === category);
                  return (
                    <ProductGroupCard 
                      key={category}
                      groupName={category}
                      products={catProducts}
                      onClick={handleGroupClick}
                    />
                  );
                })}
                
                {!categoriesList.some(category => category.toLowerCase().includes(searchQuery.toLowerCase()) || allProducts.some(p => p.category === category && p.name.toLowerCase().includes(searchQuery.toLowerCase()))) && (
                  <div className="col-span-full text-center py-20 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-sm shadow-sm">
                    <p className="text-slate-500 dark:text-slate-400 font-medium">No products found matching your search.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* PRODUKT DETAIL SEITE */}
          {activeTab === 'productDetail' && selectedGroup && (() => {
            const groupProducts = allProducts.filter(p => p.category === selectedGroup);
            const currentProduct = groupProducts.find(p => p.id === selectedVariantId) || groupProducts[0];

            return (
              <div className="max-w-5xl mx-auto space-y-6">
                <button onClick={() => setActiveTab(searchQuery ? 'searchResults' : 'home')} className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 text-sm font-bold flex items-center gap-2 transition-colors uppercase tracking-wider">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                  {searchQuery ? 'Back to Search' : 'Back to Catalog'}
                </button>
                
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-sm p-6 md:p-10 flex flex-col md:flex-row gap-10 shadow-md">
                  
                  <div className="w-full md:w-1/2 aspect-square bg-slate-50 dark:bg-slate-950 rounded-sm flex flex-col items-center justify-center border border-slate-200 dark:border-slate-800 relative overflow-hidden group">
                    {currentProduct?.image ? (
                      <img src={currentProduct.image} alt={currentProduct.name} className="w-full h-full object-cover" />
                    ) : (
                      <>
                        <svg className="w-16 h-16 text-slate-300 dark:text-slate-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        <span className="text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest text-sm">No Image</span>
                      </>
                    )}
                  </div>

                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <div className="mb-8">
                      <div className="inline-block px-2.5 py-1 bg-slate-100 dark:bg-cyan-500/10 text-slate-600 dark:text-cyan-400 border border-slate-200 dark:border-transparent text-[10px] font-bold rounded-sm mb-4 uppercase tracking-widest">
                        Professional Grade
                      </div>
                      <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-4 uppercase leading-snug">{selectedGroup}</h1>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
                        Select your preferred dosage or variant below. All kits undergo strict oversight to ensure consistent purity and correct dosing for professional requirements.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Variant / Dosage</label>
                        <div className="relative">
                          <select 
                            value={selectedVariantId}
                            onChange={(e) => setSelectedVariantId(e.target.value)}
                            className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-sm p-4 text-slate-900 dark:text-slate-200 focus:outline-none focus:border-cyan-600 dark:focus:border-cyan-500 appearance-none shadow-sm font-medium"
                          >
                            {groupProducts.map(p => (
                              <option key={p.id} value={p.id}>{p.name}</option>
                            ))}
                          </select>
                          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500 dark:text-slate-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                        <div className="flex items-end justify-between mb-6">
                          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Price per Kit</span>
                          <span className="text-4xl font-black text-slate-900 dark:text-white">${currentProduct?.price}</span>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-sm p-1 shadow-sm h-[52px]">
                            <button onClick={() => setDetailQuantity(Math.max(1, detailQuantity - 1))} className="w-10 h-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-200 dark:bg-slate-800 rounded-sm font-bold text-xl transition-colors">-</button>
                            <span className="text-lg font-bold w-10 text-center text-slate-900 dark:text-white">{detailQuantity}</span>
                            <button onClick={() => setDetailQuantity(detailQuantity + 1)} className="w-10 h-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-200 dark:bg-slate-800 rounded-sm font-bold text-xl transition-colors">+</button>
                          </div>
                          
                          <button 
                            onClick={() => {
                              addToCart(currentProduct, detailQuantity);
                              setDetailQuantity(1);
                            }}
                            className="flex-1 h-[52px] bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 font-extrabold text-sm uppercase tracking-widest rounded-sm transition-all shadow-sm flex items-center justify-center gap-2"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })()}

          {/* ABOUT US TAB */}
          {activeTab === 'about' && (
            <div className="max-w-4xl mx-auto space-y-12 py-6">
              <div className="text-center space-y-4">
                <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white uppercase">About Us</h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">Direct manufacturing standards, uncompromising quality, and global reach.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-sm shadow-sm">
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-slate-900 dark:text-cyan-400 uppercase tracking-wider">Our Heritage & Standards</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
                    Originally established with high success across South American markets, Manufaktur brings elite direct peptide and HGH production standards straight to Europe. By cutting out middlemen and distributors, we guarantee direct-source pricing and strict quality assurance.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
                    Every kit undergoes strict oversight to ensure consistent purity and correct dosing for professional requirements.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img src={logoJPEG} alt="Manufaktur Logo" className="rounded-sm border border-slate-200 dark:border-slate-700 shadow-sm max-h-64 object-cover w-full" />
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-sm shadow-sm space-y-6">
                <h3 className="text-xl font-black text-center text-slate-900 dark:text-cyan-400 uppercase tracking-wider">Production & Facility Preview</h3>
                <div className="w-full overflow-hidden rounded-sm border border-slate-200 dark:border-slate-700 shadow-sm bg-slate-100 dark:bg-black flex justify-center">
                  <video src={productionVID} controls autoPlay muted loop className="max-h-[400px] w-full object-cover" />
                </div>
              </div>
            </div>
          )}

          {/* CONTACT TAB */}
          {activeTab === 'contact' && (
            <div className="max-w-xl mx-auto py-12 space-y-8">
              <div className="text-center space-y-2">
                <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white uppercase">Contact Us</h1>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Reach out to our team directly via WhatsApp for inquiries or support.</p>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-sm shadow-sm text-center space-y-6">
                <div className="w-16 h-16 bg-slate-100 dark:bg-cyan-500/10 border border-slate-200 dark:border-cyan-500/30 text-slate-800 dark:text-cyan-400 rounded-sm flex items-center justify-center mx-auto text-2xl shadow-sm">
                  💬
                </div>
                <div>
                  <h3 className="text-lg font-black uppercase tracking-wider text-slate-900 dark:text-white">WhatsApp Support</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 font-medium">Fast, reliable responses directly from our support desk.</p>
                </div>
                <a href="https://wa.me/4915200000000" target="_blank" rel="noopener noreferrer" className="inline-block w-full py-3.5 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-900 font-extrabold uppercase tracking-widest rounded-sm transition-all shadow-sm">
                  Open WhatsApp Chat
                </a>
              </div>
            </div>
          )}

        </main>

        {/* CART SLIDE-OVER DRAWER */}
        {isCartOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="absolute inset-0 bg-slate-900/50 dark:bg-black/70 backdrop-blur-sm transition-opacity" onClick={() => setIsCartOpen(false)}></div>
            <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
              <div className="w-screen max-w-md bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 flex flex-col shadow-2xl">
                
                <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <h2 className="text-lg font-black uppercase tracking-wider flex items-center gap-2 text-slate-900 dark:text-white">
                    Shopping Cart <span className="text-xs bg-slate-100 dark:bg-cyan-500/10 text-slate-600 dark:text-cyan-400 border border-slate-200 dark:border-cyan-500/30 px-2 py-0.5 rounded-sm">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
                  </h2>
                  <button onClick={() => setIsCartOpen(false)} className="text-slate-400 hover:text-slate-900 dark:hover:text-white p-1 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {cart.length === 0 ? (
                    <div className="text-center py-20 text-slate-400 dark:text-slate-500 space-y-3">
                      <svg className="w-12 h-12 mx-auto opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                      <p className="text-sm font-medium">Your cart is empty.</p>
                    </div>
                  ) : (
                    cart.map(item => (
                      <div key={item.id} className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-4 rounded-sm flex flex-col gap-3 shadow-sm">
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="font-bold text-sm text-slate-900 dark:text-slate-200 leading-snug">{item.name}</h4>
                          <span className="font-black text-slate-900 dark:text-white">${item.price * item.quantity}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-sm p-1 shadow-sm">
                            <button onClick={() => updateQuantity(item.id, -1)} className="w-6 h-6 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-sm font-bold transition-colors">-</button>
                            <span className="text-xs font-bold px-2 text-slate-900 dark:text-white">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="w-6 h-6 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-sm font-bold transition-colors">+</button>
                          </div>
                          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">1 kit / qty</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {cart.length > 0 && (
                  <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex flex-col">
                    
                    {/* STRUKTURIERTES ADRESSFELD */}
                    <div className="mb-6 space-y-3">
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Shipping Address <span className="font-normal lowercase tracking-normal">(Optional)</span>
                      </label>
                      <div className="space-y-2">
                        <input 
                          type="text" 
                          placeholder="Full Name"
                          value={address.name}
                          onChange={(e) => setAddress({...address, name: e.target.value})}
                          className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-sm p-2.5 text-sm text-slate-900 dark:text-slate-200 focus:outline-none focus:border-cyan-600 dark:focus:border-cyan-500 shadow-sm placeholder:text-slate-400 dark:placeholder:text-slate-600"
                        />
                        <input 
                          type="text" 
                          placeholder="Street & House Number"
                          value={address.street}
                          onChange={(e) => setAddress({...address, street: e.target.value})}
                          className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-sm p-2.5 text-sm text-slate-900 dark:text-slate-200 focus:outline-none focus:border-cyan-600 dark:focus:border-cyan-500 shadow-sm placeholder:text-slate-400 dark:placeholder:text-slate-600"
                        />
                        <div className="flex gap-2">
                          <input 
                            type="text" 
                            placeholder="ZIP Code"
                            value={address.zip}
                            onChange={(e) => setAddress({...address, zip: e.target.value})}
                            className="w-1/3 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-sm p-2.5 text-sm text-slate-900 dark:text-slate-200 focus:outline-none focus:border-cyan-600 dark:focus:border-cyan-500 shadow-sm placeholder:text-slate-400 dark:placeholder:text-slate-600"
                          />
                          <input 
                            type="text" 
                            placeholder="City"
                            value={address.city}
                            onChange={(e) => setAddress({...address, city: e.target.value})}
                            className="w-2/3 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-sm p-2.5 text-sm text-slate-900 dark:text-slate-200 focus:outline-none focus:border-cyan-600 dark:focus:border-cyan-500 shadow-sm placeholder:text-slate-400 dark:placeholder:text-slate-600"
                          />
                        </div>
                        <input 
                          type="text" 
                          placeholder="Country"
                          value={address.country}
                          onChange={(e) => setAddress({...address, country: e.target.value})}
                          className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-sm p-2.5 text-sm text-slate-900 dark:text-slate-200 focus:outline-none focus:border-cyan-600 dark:focus:border-cyan-500 shadow-sm placeholder:text-slate-400 dark:placeholder:text-slate-600"
                        />
                      </div>
                    </div>

                    {/* PREISÜBERSICHT MIT VERSAND */}
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center text-sm font-bold text-slate-600 dark:text-slate-400">
                        <span>Subtotal:</span>
                        <span>${subtotal}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm font-bold text-slate-600 dark:text-slate-400 pb-3 border-b border-slate-200 dark:border-slate-800">
                        <span>Global Shipping:</span>
                        <span>${SHIPPING_COST}</span>
                      </div>
                      <div className="flex justify-between items-center text-base font-black uppercase tracking-wider text-slate-900 dark:text-white">
                        <span>Total:</span>
                        <span className="text-2xl text-cyan-600 dark:text-cyan-400">${finalTotal}</span>
                      </div>
                    </div>

                    <button onClick={handleWhatsAppCheckout} className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-extrabold uppercase tracking-widest rounded-sm transition-all shadow-sm flex items-center justify-center gap-2">
                      <span>Checkout (WhatsApp)</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                    </button>
                  </div>
                )}

              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
