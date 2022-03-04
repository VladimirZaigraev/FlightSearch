import france from "../img/tickets/airlineLogo/airfrance.svg"
import aeroflot from "../img/tickets/airlineLogo/aeroflot.svg"
import klm from "../img/tickets/airlineLogo/klm.svg"
import thy from "../img/tickets/airlineLogo/turkish.svg"
import finnair from "../img/tickets/airlineLogo/finnair.svg"
import baltic from "../img/tickets/airlineLogo/airbaltic.svg"
import british from "../img/tickets/airlineLogo/british.svg"
import alitalia from "../img/tickets/airlineLogo/alitalia.svg"
import pegasus from "../img/tickets/airlineLogo/pegasus.svg"
import austrian from "../img/tickets/airlineLogo/austrian.svg"
import swiss from "../img/tickets/airlineLogo/swiss.svg"
import lot from "../img/tickets/airlineLogo/lot.svg"

const uploadLogo = (airline) => {
        switch (airline) {
            case 'Аэрофлот - российские авиалинии':
                return aeroflot;
                break;
            case 'Air France':
                return france;
                break;
            case 'Air Baltic Corporation A/S':
                return baltic;
                break;
            case 'Alitalia Societa Aerea Italiana':
                return alitalia;
                break;
            case 'Austrian Airlines':
                return austrian;
                break;
            case 'British Airways p.l.c.':
                return british;
                break;
            case 'KLM':
                return klm;
                break;
            case 'LOT Polish Airlines':
                return lot;
                break;
            case 'TURK HAVA YOLLARI A.O.':
                return thy;
                break;
            case 'Finnair Oyj':
                return finnair;
                break;
            case 'Pegasus Hava Tasimaciligi A.S.':
                return pegasus;
                break;
            case 'SWISS International Air Lines Ltd':
                return swiss;
                break;
        }
    }

export default uploadLogo;