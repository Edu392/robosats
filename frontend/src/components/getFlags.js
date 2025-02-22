import React, { Component } from 'react';
import Flags from 'country-flag-icons/react/3x2'
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import GoldIcon from './icons/GoldIcon';
import EarthIcon from './icons/EarthIcon'

export default function getFlags(code){
    const props = {width:20,height:20}
    var flag = "";
    
    if(code == 'AUD') flag = <Flags.AU {...props}/>;
    if(code == 'ARS') flag = <Flags.AR {...props}/>;
    if(code == 'BRL') flag = <Flags.BR {...props}/>;
    if(code == 'CAD') flag = <Flags.CA {...props}/>;
    if(code == 'CHF') flag = <Flags.CH {...props}/>;
    if(code == 'CLP') flag = <Flags.CL {...props}/>;
    if(code == 'CNY') flag = <Flags.CN {...props}/>;
    if(code == 'EUR') flag = <Flags.EU {...props}/>;
    if(code == 'HRK') flag = <Flags.HR {...props}/>;
    if(code == 'CZK') flag = <Flags.CZ {...props}/>;
    if(code == 'DKK') flag = <Flags.DK {...props}/>;
    if(code == 'GBP') flag = <Flags.GB {...props}/>;
    if(code == 'HKD') flag = <Flags.HK {...props}/>;
    if(code == 'HUF') flag = <Flags.HU {...props}/>;
    if(code == 'INR') flag = <Flags.IN {...props}/>;
    if(code == 'ISK') flag = <Flags.IS {...props}/>;
    if(code == 'JPY') flag = <Flags.JP {...props}/>;
    if(code == 'KRW') flag = <Flags.KR {...props}/>;
    if(code == 'MXN') flag = <Flags.MX {...props}/>;
    if(code == 'NOK') flag = <Flags.NO {...props}/>;
    if(code == 'NZD') flag = <Flags.NZ {...props}/>;
    if(code == 'PLN') flag = <Flags.PL {...props}/>;
    if(code == 'RON') flag = <Flags.RO {...props}/>;
    if(code == 'RUB') flag = <Flags.RU {...props}/>;
    if(code == 'SEK') flag = <Flags.SE {...props}/>;
    if(code == 'SGD') flag = <Flags.SG {...props}/>;
    if(code == 'VES') flag = <Flags.VE {...props}/>;
    if(code == 'TRY') flag = <Flags.TR {...props}/>;
    if(code == 'USD') flag = <Flags.US {...props}/>;
    if(code == 'ZAR') flag = <Flags.ZA {...props}/>;
    if(code == 'COP') flag = <Flags.CO {...props}/>;
    if(code == 'PEN') flag = <Flags.PE {...props}/>;
    if(code == 'UYU') flag = <Flags.UY {...props}/>;
    if(code == 'PYG') flag = <Flags.PY {...props}/>;
    if(code == 'BOB') flag = <Flags.BO {...props}/>;
    if(code == 'IDR') flag = <Flags.ID {...props}/>;
    if(code == 'ANG') flag = <Flags.CW {...props}/>;
    if(code == 'CRC') flag = <Flags.CR {...props}/>;
    if(code == 'CUP') flag = <Flags.CU {...props}/>;
    if(code == 'DOP') flag = <Flags.DO {...props}/>;
    if(code == 'GHS') flag = <Flags.GH {...props}/>;
    if(code == 'GTQ') flag = <Flags.GT {...props}/>;
    if(code == 'ILS') flag = <Flags.IL {...props}/>;
    if(code == 'JMD') flag = <Flags.JM {...props}/>;
    if(code == 'KES') flag = <Flags.KE {...props}/>;
    if(code == 'KZT') flag = <Flags.KZ {...props}/>;
    if(code == 'MYR') flag = <Flags.MY {...props}/>;
    if(code == 'NAD') flag = <Flags.NA {...props}/>;
    if(code == 'NGN') flag = <Flags.NG {...props}/>;
    if(code == 'AZN') flag = <Flags.AZ {...props}/>;
    if(code == 'PAB') flag = <Flags.PA {...props}/>;
    if(code == 'PHP') flag = <Flags.PH {...props}/>;
    if(code == 'PKR') flag = <Flags.PK {...props}/>;
    if(code == 'QAR') flag = <Flags.QA {...props}/>;
    if(code == 'SAR') flag = <Flags.SA {...props}/>;
    if(code == 'THB') flag = <Flags.TH {...props}/>;
    if(code == 'TTD') flag = <Flags.TT {...props}/>;
    if(code == 'VND') flag = <Flags.VN {...props}/>;
    if(code == 'XOF') flag = <Flags.BJ {...props}/>;
    if(code == 'TWD') flag = <Flags.TW {...props}/>;
    if(code == 'TZS') flag = <Flags.TZ {...props}/>;
    if(code == 'XAF') flag = <Flags.CM {...props}/>;
    if(code == 'ANY') flag = <EarthIcon {...props}/>;
    if(code == 'XAU') flag = <GoldIcon {...props}/>;
    if(code == 'BTC') flag = <SwapCallsIcon color="primary"/>;
    return <div style={{width:28, height: 20}}>{flag}</div>;
};
