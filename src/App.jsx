import React, { useState } from 'react';
import logoJPEG from './assets/logo.jpeg';
import productionVID from './assets/production.mp4';

const allProducts = [
  { id: 'tr2', name: 'TR2 - Tirzepatide (2mg/vial*10 vials)', price: 29, category: 'Tirzepatide' },
  { id: 'tr5', name: 'TR5 - Tirzepatide (5mg/vial*10 vials)', price: 29, category: 'Tirzepatide' },
  { id: 'tr10', name: 'TR10 - Tirzepatide (10mg/vial*10 vials)', price: 40, category: 'Tirzepatide' },
  { id: 'tr15', name: 'TR15 - Tirzepatide (15mg/vial*10 vials)', price: 55, category: 'Tirzepatide' },
  { id: 'tr20', name: 'TR20 - Tirzepatide (20mg/vial*10 vials)', price: 66, category: 'Tirzepatide' },
  { id: 'tr25', name: 'TR25 - Tirzepatide (25mg/vial*10 vials)', price: 73, category: 'Tirzepatide' },
  { id: 'tr30', name: 'TR30 - Tirzepatide (30mg/vial*10 vials)', price: 80, category: 'Tirzepatide' },
  { id: 'tr40', name: 'TR40 - Tirzepatide (40mg/vial*10 vials)', price: 117, category: 'Tirzepatide' },
  { id: 'tr50', name: 'TR50 - Tirzepatide (50mg/vial*10 vials)', price: 128, category: 'Tirzepatide' },
  { id: 'tr60', name: 'TR60 - Tirzepatide (60mg/vial*10 vials)', price: 139, category: 'Tirzepatide' },
  { id: 'tr70', name: 'TR70 - Tirzepatide (70mg/vial*10 vials)', price: 150, category: 'Tirzepatide' },
  { id: 'tr80', name: 'TR80 - Tirzepatide (80mg/vial*10 vials)', price: 161, category: 'Tirzepatide' },
  { id: 'tr90', name: 'TR90 - Tirzepatide (90mg/vial*10 vials)', price: 172, category: 'Tirzepatide' },
  { id: 'tr100', name: 'TR100 - Tirzepatide (100mg/vial*10 vials)', price: 183, category: 'Tirzepatide' },
  { id: 'tr110', name: 'TR110 - Tirzepatide (110mg/vial*10 vials)', price: 194, category: 'Tirzepatide' },
  { id: 'tr120', name: 'TR120 - Tirzepatide (120mg/vial*10 vials)', price: 216, category: 'Tirzepatide' },
  { id: 'rt2', name: 'RT2 - Retatrutide (2mg/vial*10 vials)', price: 33, category: 'Retatrutide' },
  { id: 'rt5', name: 'RT5 - Retatrutide (5mg/vial*10 vials)', price: 33, category: 'Retatrutide' },
  { id: 'rt10', name: 'RT10 - Retatrutide (10mg/vial*10 vials)', price: 47, category: 'Retatrutide' },
  { id: 'rt15', name: 'RT15 - Retatrutide (15mg/vial*10 vials)', price: 64, category: 'Retatrutide' },
  { id: 'rt20', name: 'RT20 - Retatrutide (20mg/vial*10 vials)', price: 80, category: 'Retatrutide' },
  { id: 'rt30', name: 'RT30 - Retatrutide (30mg/vial*10 vials)', price: 121, category: 'Retatrutide' },
  { id: 'rt40', name: 'RT40 - Retatrutide (40mg/vial*10 vials)', price: 161, category: 'Retatrutide' },
  { id: 'rt50', name: 'RT50 - Retatrutide (50mg/vial*10 vials)', price: 180, category: 'Retatrutide' },
  { id: 'rt60', name: 'RT60 - Retatrutide (60mg/vial*10 vials)', price: 194, category: 'Retatrutide' },
  { id: 'cu50', name: 'CU50 - GHK-CU (50mg/vial*10 vials)', price: 18, category: 'GHK-CU' },
  { id: 'cu100', name: 'CU100 - GHK-CU (100mg/vial*10 vials)', price: 25, category: 'GHK-CU' },
  { id: 'slu332-5', name: '332 - SLU-PP-332 (5mg/vial*10 vials)', price: 36, category: 'SLU-PP-332' },
  { id: 'slu332-10', name: '332 - SLU-PP-332 (10mg/vial*10 vials)', price: 44, category: 'SLU-PP-332' },
  { id: 'ig01', name: 'IG01 - IGF-1 LR3 (0.1mg/vial*10 vials)', price: 32, category: 'IGF-1 LR3' },
  { id: 'ig1', name: 'IG1 - IGF-1 LR3 (1mg/vial*10 vials)', price: 144, category: 'IGF-1 LR3' },
  { id: 'sm2', name: 'SM2 - Semaglutide (2mg/vial*10 vials)', price: 29, category: 'Semaglutide' },
  { id: 'sm5', name: 'SM5 - Semaglutide (5mg/vial*10 vials)', price: 29, category: 'Semaglutide' },
  { id: 'sm10', name: 'SM10 - Semaglutide (10mg/vial*10 vials)', price: 40, category: 'Semaglutide' },
  { id: 'sm15', name: 'SM15 - Semaglutide (15mg/vial*10 vials)', price: 55, category: 'Semaglutide' },
  { id: 'sm20', name: 'SM20 - Semaglutide (20mg/vial*10 vials)', price: 66, category: 'Semaglutide' },
  { id: 'sm30', name: 'SM30 - Semaglutide (30mg/vial*10 vials)', price: 80, category: 'Semaglutide' },
  { id: 'sm40', name: 'SM40 - Semaglutide (40mg/vial*10 vials)', price: 117, category: 'Semaglutide' },
  { id: 'sm50', name: 'SM50 - Semaglutide (50mg/vial*10 vials)', price: 140, category: 'Semaglutide' },
  { id: 'cgl5', name: 'CGL5 - Cagrilintide (5mg/vial*10 vials)', price: 55, category: 'Cagrilintide' },
  { id: 'cgl10', name: 'CGL10 - Cagrilintide (10mg/vial*10 vials)', price: 103, category: 'Cagrilintide' },
  { id: 'tsm2', name: 'TSM2 - Tesamorelin (2mg/vial*10 vials)', price: 39, category: 'Tesamorelin' },
  { id: 'tsm5', name: 'TSM5 - Tesamorelin (5mg/vial*10 vials)', price: 70, category: 'Tesamorelin' },
  { id: 'tsm10', name: 'TSM10 - Tesamorelin (10mg/vial*10 vials)', price: 132, category: 'Tesamorelin' },
  { id: 'tsm20', name: 'TSM20 - Tesamorelin (20mg/vial*10 vials)', price: 250, category: 'Tesamorelin' },
  { id: 'ms5', name: 'MS5 - MOTS-C (5mg/vial*10 vials)', price: 42, category: 'MOTS-C' },
  { id: 'ms10', name: 'MS10 - MOTS-C (10mg/vial*10 vials)', price: 69, category: 'MOTS-C' },
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
  { id: 'nj500', name: 'NJ500 - NAD+ (5ML) (500mg/vial*10 vials)', price: 73, category: 'NAD+' },
  { id: 'nj1000', name: 'NJ1000 - NAD+ (10ML) (1000mg/vial*10 vials)', price: 141, category: 'NAD+' },
  { id: 'h10', name: 'H10 - HGH 191 AA 97% (10iu/vial*10 vials)', price: 46, category: 'HGH' },
  { id: 'h12', name: 'H12 - HGH 191 AA 97% (12iu/vial*10vials)', price: 62, category: 'HGH' },
  { id: 'h15', name: 'H15 - HGH 191 AA 97% (15iu/vial*10vials)', price: 78, category: 'HGH' },
  { id: 'h24', name: 'H24 - HGH 191 AA 97% (24iu/vial*10vials)', price: 118, category: 'HGH' },
  { id: 'hc1000', name: 'HC1000 - HCG (1000iu/vial*10 vials)', price: 40, category: 'HCG' },
  { id: 'hc2000', name: 'HC2000 - HCG (2000iu/vial*10 vials)', price: 66, category: 'HCG' },
  { id: 'hc5000', name: 'HC5000 - HCG (5000iu/vial*10 vials)', price: 96, category: 'HCG' },
  { id: 'hc10000', name: 'HC10000 - HCG (10000iu/vial*10 vials)', price: 118, category: 'HCG' },
  { id: 'hm75', name: 'HM75 - HMG (75iu/vial*10 vials)', price: 70, category: 'HMG' },
  { id: 'bc2', name: 'BC2 - BPC 157 (2mg/vial*10 vials)', price: 22, category: 'BPC 157' },
  { id: 'bc5', name: 'BC5 - BPC 157 (5mg/vial*10 vials)', price: 35, category: 'BPC 157' },
  { id: 'bc10', name: 'BC10 - BPC 157 (10mg/vial*10 vials)', price: 55, category: 'BPC 157' },
  { id: 'bt2', name: 'BT2 - TB 500 (Thymosin B4 AceTate) (2mg/vial*10 vials)', price: 35, category: 'TB 500' },
  { id: 'bt5', name: 'BT5 - TB 500 (Thymosin B4 AceTate) (5mg/vial*10 vials)', price: 66, category: 'TB 500' },
  { id: 'bt10', name: 'BT10 - TB 500 (Thymosin B4 AceTate) (10mg/vial*10 vials)', price: 118, category: 'TB 500' },
  { id: 'cd2', name: 'CD2 - CJC 1295 DAC (2mg/vial*10 vials)', price: 37, category: 'CJC 1295' },
  { id: 'cd5', name: 'CD5 - CJC 1295 DAC (5mg/vial*10 vials)', price: 74, category: 'CJC 1295' },
  { id: 'cd10', name: 'CD10 - CJC 1295 DAC (10mg/vial*10 vials)', price: 132, category: 'CJC 1295' },
  { id: 'cnd2', name: 'CND2 - CJC 1295 NO DAC (2mg/vial*10 vials)', price: 37, category: 'CJC 1295' },
  { id: 'cnd5', name: 'CND5 - CJC 1295 NO DAC (5mg/vial*10 vials)', price: 74, category: 'CJC 1295' },
  { id: 'cnd10', name: 'CND10 - CJC 1295 NO DAC (10mg/vial*10 vials)', price: 132, category: 'CJC 1295' },
  { id: 'bb10', name: 'BB10 - Blend: BPC157 5mg + TB500 5mg ((5mg+5mg)/vial*10 vials)', price: 96, category: 'Blends' },
  { id: 'bb20', name: 'BB20 - Blend: BPC157 10mg + TB500 10mg ((10mg+10mg)/vial*10 vials)', price: 169, category: 'Blends' },
  { id: 'cp10', name: 'CP10 - Blend: CJC1295 NO DAC 5mg + Ipamorelin 5mg ((5mg+5mg)/vial*10 vials)', price: 103, category: 'Blends' },
  { id: 'bbg70', name: 'BBG70 - Blend: BPC 157 10mg + TB500 10mg + GHK-CU 50mg ((10mg+10mg+50mg)/vial*10 vials)', price: 180, category: 'Blends' },
  { id: 'klow80', name: 'KLOW80 - Blend: BPC 157 10mg + TB500 10mg + GHK-CU 50mg + KPV 10mg ((10mg+10mg+50mg+10mg)/vial*10 vials)', price: 210, category: 'Blends' },
  { id: 'sk2', name: 'SK2 - Selank (2mg/vial*10 vials)', price: 22, category: 'Selank' },
  { id: 'sk5', name: 'SK5 - Selank (5mg/vial*10 vials)', price: 33, category: 'Selank' },
  { id: 'sk10', name: 'SK10 - Selank (10mg/vial*10 vials)', price: 51, category: 'Selank' },
  { id: 'et10', name: 'ET10 - Epithalon (10mg/vial*10 vials)', price: 35, category: 'Epithalon' },
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
  { id: 'lemon', name: 'Lemon bottle (10mg/vial*10 vials)', price: 55, category: 'Cosmetic / Other' },
  { id: 'redlip', name: 'Red lip balm (10mg/vial*10 vials)', price: 55, category: 'Cosmetic / Other' },
  { id: 'botox200', name: 'Botox (200u/vial*10 vials)', price: 110, category: 'Cosmetic / Other' },
  { id: 'botox150', name: 'Botox (150u/vial*10 vials)', price: 103, category: 'Cosmetic / Other' },
  { id: 'botox100', name: 'Botox (100u/vial*10 vials)', price: 96, category: 'Cosmetic / Other' },
  { id: 'ks5', name: 'KS5 - KISSPEPTIN-10 (fragment) (5mg/vial*10 vials)', price: 36, category: 'Kisspeptin' },
  { id: 'ks10', name: 'KS10 - KISSPEPTIN-10 (fragment) (10mg/vial*10 vials)', price: 70, category: 'Kisspeptin' },
  { id: 'ta2', name: 'TA2 - Thymosin Alpha-1 (2mg/vial*10 vials)', price: 44, category: 'Thymosin Alpha-1' },
  { id: 'ta5', name: 'TA5 - Thymosin Alpha-1 (5mg/vial*10 vials)', price: 84, category: 'Thymosin Alpha-1' },
  { id: 'ta10', name: 'TA10 - Thymosin Alpha-1 (10mg/vial*10 vials)', price: 158, category: 'Thymosin Alpha-1' },
  { id: 'ta50', name: 'TA50 - Thymosin Alpha-1 (50mg/vial*10 vials)', price: 603, category: 'Thymosin Alpha-1' },
  { id: 'ml10', name: 'ML10 - Melanotan 2 (10mg/vial*10 vials)', price: 63, category: 'Melanotan' },
  { id: 'mt1', name: 'MT1 - Melanotan 1 (MT-1) (10mg/vial*10 vials)', price: 63, category: 'Melanotan' },
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
  { id: 'cs10', name: 'CS10 - Cagrilintide 5mg + Semaglutide 5mg ((5mg+5mg)/vial*10 vials)', price: 162, category: 'Blends' },
  { id: 'gnd2', name: 'GND2 - Gonadorrlin Acetate (2mg/vial*10 vials)', price: 30, category: 'Gonadorelin' },
  { id: 'ba3', name: 'BA3 - Bac water (3ml)', price: 7, category: 'Accessories' },
  { id: 'ba10', name: 'BA10 - Bac water (10ml)', price: 11, category: 'Accessories' },
  { id: 'ot2', name: 'OT2 - Oxytocin Acetate (2mg/vial*10 vials)', price: 28, category: 'Oxytocin' },
  { id: 'ot5', name: 'OT5 - Oxytocin Acetate (5mg/vial*10 vials)', price: 54, category: 'Oxytocin' },
  { id: 'ot10', name: 'OT10 - Oxytocin Acetate (10mg/vial*10 vials)', price: 100, category: 'Oxytocin' },
  { id: 'fr5', name: 'FR5 - HGH Fragment 176-191 (5mg/vial*10 vials)', price: 80, category: 'HGH Fragment' },
  { id: '5am', name: '5AM - 5-amino-1mq (5mg/vial*10 vials)', price: 45, category: '5-amino-1mq' },
  { id: '50am', name: '50AM - 5-amino-1mq (50mg/vial*10 vials)', price: 92, category: '5-amino-1mq' },
  { id: 'fm2', name: 'FM2 - MGF (2mg/vial*10 vials)', price: 36, category: 'MGF' },
  { id: 'fmp2', name: 'FMP2 - PEG-MGF (2mg/vial*10 vials)', price: 78, category: 'MGF' },
  { id: 'gtt', name: 'GTT - Glutathione (15000mg/vial*10 vials)', price: 33, category: 'Glutathione' },
  { id: 'smk2', name: 'SMK2 - Semaglutide (cartridge without pen) (2mg/cartridge*10 cartridges)', price: 162, category: 'Cartridges' },
  { id: 'smk5', name: 'SMK5 - Semaglutide (cartridge without pen) (5mg/cartridge*10 cartridges)', price: 204, category: 'Cartridges' },
  { id: 'trk2', name: 'TRK2 - Tirzepatide (cartridge without pen) (2.5mg/cartridge*10 cartridges)', price: 183, category: 'Cartridges' },
  { id: 'trk5', name: 'TRK5 - Tirzepatide (cartridge without pen) (5mg/cartridge*10 cartridges)', price: 232, category: 'Cartridges' },
  { id: 'trk10', name: 'TRK10 - Tirzepatide (cartridge without pen) (10mg/cartridge*10 cartridges)', price: 309, category: 'Cartridges' },
  { id: 'trk15', name: 'TRK15 - Tirzepatide (cartridge without pen) (15mg/cartridge*10 cartridges)', price: 386, category: 'Cartridges' },
  { id: 'fols344-1', name: 'Follistatin 344 95% (1mg/vial*10 vials)', price: 318, category: 'Follistatin' },
  { id: 'fols344-2', name: 'Follistatin 344 95% (2mg/vial*10 vials)', price: 593, category: 'Follistatin' },
  { id: 'matrixyl', name: 'Matrixyl 3000 (10mg/vial*10 vials)', price: 305, category: 'Cosmetic / Other' },
  { id: 'oligopeptide', name: 'Oligopeptide-24 (10mg/vial*10 vials)', price: 40, category: 'Cosmetic / Other' },
  { id: 'ace031', name: 'Ace-031 95% (1mg/vial*10 vials)', price: 318, category: 'Other Peptides' },
  { id: 'gdf8', name: 'GDF-8 95% (1mg/vial*10 vials)', price: 320, category: 'Other Peptides' },
  { id: 'pnc27', name: 'PNC-27 (10mg/vial*10 vials)', price: 60, category: 'Other Peptides' }
];

export default function App() {
  const [lang, setLang] = useState('EN');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const categories = ['All', ...new Set(allProducts.map(p => p.category))];

  const filteredProducts = allProducts.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prevCart, { ...product, quantity: 1 }];
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

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleWhatsAppCheckout = () => {
    const phone = "4915200000000";
    let message = "Hello, I would like to purchase the following products:\n\n";
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - Quantity: ${item.quantity} kit(s) - Price: $${item.price * item.quantity}\n`;
    });
    message += `\nTotal Price: $${totalPrice}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* LOGO & TITLE */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-xl shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              M
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-wider bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                MANUFAKTUR
              </span>
              <span className="block text-[10px] text-slate-400 tracking-widest uppercase">B2B Direct Shop</span>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6">
        
